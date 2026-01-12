// app/api/price/route.ts
import { NextResponse } from 'next/server';
import { createPublicClient, http, parseAbi } from 'viem';
import { bsc } from 'viem/chains';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const ORACLE_ADDRESS = '0xFc124A410A4AD4c448911735BF0BCc44E8C74Fbd';

const oracleAbi = parseAbi([
  'function getPricePerOzE6() view returns (uint256)',
  'function lastUpdateAt() view returns (uint256)',
]);

const client = createPublicClient({
  chain: bsc,
  transport: http('https://bsc-dataseed1.binance.org/'),
});

export async function GET() {
  try {
    const priceE6 = await client.readContract({
      address: ORACLE_ADDRESS,
      abi: oracleAbi,
      functionName: 'getPricePerOzE6',
    });

    const pricePerGram = Number(priceE6) / 1e6;

    let lastUpdate = null;
    try {
      const updateTime = await client.readContract({
        address: ORACLE_ADDRESS,
        abi: oracleAbi,
        functionName: 'lastUpdateAt',
      });
      lastUpdate = Number(updateTime) * 1000;
    } catch {}

    return NextResponse.json({
      price: pricePerGram,
      lastUpdate,
    });
  } catch (error) {
    console.error('Oracle read error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch price', price: 87.45, lastUpdate: null },
      { status: 200 } // Return fallback price
    );
  }
}
