// app/api/price/route.ts
import { NextResponse } from 'next/server';
import { createPublicClient, http, parseAbi } from 'viem';
import { CHAIN, CONTRACTS, RPC_URL } from '@/config/contracts';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const oracleAbi = parseAbi([
  'function getPricePerOzE6() view returns (uint256)',
  'function lastUpdateAt() view returns (uint256)',
  'function getMetalPrices() view returns (uint256 gold, uint256 silver, uint256 platinum, uint256 palladium)',
]);

const client = createPublicClient({
  chain: CHAIN,
  transport: http(RPC_URL),
});

export async function GET() {
  try {
    const [priceE6, lastUpdateAt, metals] = await Promise.all([
      client.readContract({ address: CONTRACTS.ORACLE, abi: oracleAbi, functionName: 'getPricePerOzE6' }),
      client.readContract({ address: CONTRACTS.ORACLE, abi: oracleAbi, functionName: 'lastUpdateAt' }).catch(() => null),
      client.readContract({ address: CONTRACTS.ORACLE, abi: oracleAbi, functionName: 'getMetalPrices' }).catch(() => null),
    ]);

    const pricePerOz = Number(priceE6) / 1e6;
    const lastUpdate = lastUpdateAt ? Number(lastUpdateAt) * 1000 : null;

    return NextResponse.json({
      price: pricePerOz,
      pricePerOz,
      lastUpdate,
      metals: metals
        ? {
            gold: Number(metals[0]) / 1e6,
            silver: Number(metals[1]) / 1e6,
            platinum: Number(metals[2]) / 1e6,
            palladium: Number(metals[3]) / 1e6,
          }
        : null,
    });
  } catch (error) {
    console.error('Oracle read error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch price', price: null, lastUpdate: null },
      { status: 200 },
    );
  }
}
