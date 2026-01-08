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
    const { message, sessionId } = await request.json();

    if (!message || !sessionId) {
      return NextResponse.json({ error: 'Message and sessionId required' }, { status: 400 });
    }

    // Ensure session exists
    let session = await getSession(sessionId);
    if (!session) {
      const userAgent = request.headers.get('user-agent') || undefined;
      session = await createSession(sessionId, userAgent);
    }

    // Save user message
    const userMessage = {
      id: `msg_${Date.now()}_user`,
      role: 'user' as const,
      content: message,
      timestamp: new Date().toISOString(),
    };
    await addMessage(sessionId, userMessage);

    // Get conversation history for context
    const messages = session.messages.map(m => ({
      role: m.role as 'user' | 'assistant',
      content: m.content,
    }));
    messages.push({ role: 'user', content: message });

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

    // Save assistant message
    const assistantMessage = {
      id: `msg_${Date.now()}_assistant`,
      role: 'assistant' as const,
      content: assistantContent,
      timestamp: new Date().toISOString(),
    };
    await addMessage(sessionId, assistantMessage);

    return NextResponse.json({ 
      message: assistantContent,
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
