'use client';

import { useState, useEffect } from 'react';
import { createPublicClient, http, parseAbi } from 'viem';
import { CHAIN, CONTRACTS, RPC_URL } from '@/config/contracts';

const oracleAbi = parseAbi([
  'function getPricePerOzE6() view returns (uint256)',
  'function lastUpdateAt() view returns (uint256)',
]);

const client = createPublicClient({
  chain: CHAIN,
  transport: http(RPC_URL),
});

export function useAuxiPrice() {
  const [price, setPrice] = useState<number | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPrice = async () => {
    setLoading(true);
    try {
      const priceE6 = await client.readContract({
        address: CONTRACTS.ORACLE,
        abi: oracleAbi,
        functionName: 'getPricePerOzE6',
      });

      // Oracle stores USD/oz × 1e6 (six decimals)
      setPrice(Number(priceE6) / 1e6);

      try {
        const updateTime = await client.readContract({
          address: CONTRACTS.ORACLE,
          abi: oracleAbi,
          functionName: 'lastUpdateAt',
        });
        setLastUpdate(new Date(Number(updateTime) * 1000));
      } catch {
        setLastUpdate(new Date());
      }

      setError(null);
    } catch (err) {
      console.error('Failed to fetch price:', err);
      setError('Price unavailable');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrice();

    // Refresh every 30 seconds
    const interval = setInterval(fetchPrice, 30000);

    return () => clearInterval(interval);
  }, []);

  return { price, lastUpdate, loading, error, refetch: fetchPrice };
}
