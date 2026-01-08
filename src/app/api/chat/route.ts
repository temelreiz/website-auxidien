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

Keep responses concise and helpful.`;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received body:', JSON.stringify(body));
    
    // Frontend sends { messages: [...] }
    const messages = body.messages || body.message;
    
    // Handle both array and single message
    let messageArray: { role: string; content: string }[] = [];
    
    if (Array.isArray(messages)) {
      messageArray = messages;
    } else if (typeof messages === 'string') {
      messageArray = [{ role: 'user', content: messages }];
    } else if (messages && messages.content) {
      messageArray = [messages];
    }

    console.log('Processed messages:', JSON.stringify(messageArray));

    if (messageArray.length === 0) {
      console.log('No messages found in request');
      return NextResponse.json({ error: 'Messages required', received: body }, { status: 400 });
    }

    // Generate sessionId
    const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Get last user message
    const lastUserMessage = messageArray[messageArray.length - 1];

    // Try to save to Redis
    try {
      let session = await getSession(sessionId);
      if (!session) {
        const userAgent = request.headers.get('user-agent') || undefined;
        session = await createSession(sessionId, userAgent);
      }

      const userMsg = {
        id: `msg_${Date.now()}_user`,
        role: 'user' as const,
        content: lastUserMessage.content,
        timestamp: new Date().toISOString(),
      };
      await addMessage(sessionId, userMsg);
      console.log('Saved to Redis:', sessionId);
    } catch (redisError) {
      console.error('Redis save failed:', redisError);
    }

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messageArray.slice(-10).map(m => ({
        role: m.role as 'user' | 'assistant',
        content: m.content,
      })),
    });

    const assistantContent = response.content[0].type === 'text' 
      ? response.content[0].text 
      : 'I apologize, but I could not generate a response.';

    // Save assistant response to Redis
    try {
      const assistantMsg = {
        id: `msg_${Date.now()}_assistant`,
        role: 'assistant' as const,
        content: assistantContent,
        timestamp: new Date().toISOString(),
      };
      await addMessage(sessionId, assistantMsg);
    } catch (redisError) {
      console.error('Redis save failed:', redisError);
    }

    return NextResponse.json({ 
      content: assistantContent,
      sessionId,
    });

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Failed to process message', details: String(error) }, 
      { status: 500 }
    );
  }
}
