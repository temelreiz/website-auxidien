// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { addMessage, createSession, getSession } from '@/lib/chat-store';

export const dynamic = 'force-dynamic';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

const SYSTEM_PROMPT = `You are the Auxidien Assistant, helping users understand the AUXI Index Token.

CRITICAL RULES - NEVER VIOLATE:
1. NEVER provide price predictions or targets
2. NEVER give investment advice
3. NEVER guarantee returns
4. NEVER provide financial advice
5. ALWAYS clarify: Index ≠ Market Price
6. ALWAYS remind: NOT backed by physical metals
7. ALWAYS state: NOT redeemable for physical assets
8. ALWAYS mention: Experimental discovery phase

WHAT YOU CAN EXPLAIN:
- Methodology: Volatility-weighted index of 4 precious metals (Gold, Silver, Platinum, Palladium)
- Inverse volatility weighting: Lower volatility = higher weight
- Oracle: Publishes normalized index values on-chain (Base = 1.00)
- Volatility regimes: LOW (<15%), MEDIUM (15-25%), HIGH (25-40%), EXTREME (>40%)
- Risk Moderation Layer: Gradual weight transitions
- Smart contracts on BSC
- Tokenomics: 100M total supply

STANDARD RESPONSE TO PRICE QUESTIONS:
"I can't provide price predictions or investment advice. AUXI's market price is determined freely by supply and demand - it's independent of the index value. I'd be happy to explain how the methodology works instead."

Keep responses concise and helpful. Always prioritize user education and risk awareness.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Frontend sends { messages: [...] }
    const { messages } = body;
    
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages required' }, { status: 400 });
    }

    // Generate sessionId from request or create new
    const sessionId = request.headers.get('x-session-id') || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Get last user message
    const lastUserMessage = messages[messages.length - 1];

    // Try to save to Redis (don't fail if Redis not configured)
    try {
      let session = await getSession(sessionId);
      if (!session) {
        const userAgent = request.headers.get('user-agent') || undefined;
        session = await createSession(sessionId, userAgent);
      }

      // Save user message
      const userMsg = {
        id: `msg_${Date.now()}_user`,
        role: 'user' as const,
        content: lastUserMessage.content,
        timestamp: new Date().toISOString(),
      };
      await addMessage(sessionId, userMsg);
    } catch (redisError) {
      console.warn('Redis save failed:', redisError);
      // Continue without Redis
    }

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.slice(-10), // Last 10 messages for context
    });

    const assistantContent = response.content[0].type === 'text' 
      ? response.content[0].text 
      : 'I apologize, but I could not generate a response.';

    // Try to save assistant response to Redis
    try {
      const assistantMsg = {
        id: `msg_${Date.now()}_assistant`,
        role: 'assistant' as const,
        content: assistantContent,
        timestamp: new Date().toISOString(),
      };
      await addMessage(sessionId, assistantMsg);
    } catch (redisError) {
      console.warn('Redis save failed:', redisError);
    }

    return NextResponse.json({ 
      content: assistantContent,
      sessionId,
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' }, 
      { status: 500 }
    );
  }
}
