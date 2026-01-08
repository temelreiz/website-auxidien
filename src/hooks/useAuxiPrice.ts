'use client';

import { useState, useEffect } from 'react';
import { createPublicClient, http, parseAbi } from 'viem';
import { bsc } from 'viem/chains';

const ORACLE_ADDRESS = '0xFc124A410A4AD4c448911735BF0BCc44E8C74Fbd';

const oracleAbi = parseAbi([
  'function getPricePerOzE6() view returns (uint256)',
  'function lastUpdateAt() view returns (uint256)',
]);

const client = createPublicClient({
  chain: bsc,
  transport: http('https://bsc-dataseed1.binance.org/'),
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
        address: ORACLE_ADDRESS,
        abi: oracleAbi,
        functionName: 'getPricePerOzE6',
      });

      // Oracle stores AUXI index price per gram (despite function name)
      const pricePerGram = Number(priceE6) / 1e6;
      setPrice(pricePerGram);
      
      try {
        const updateTime = await client.readContract({
          address: ORACLE_ADDRESS,
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
      // Fallback to last known price if available
      if (!price) {
        setPrice(88.30); // Fallback değer
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrice();
    
    // Her 30 saniyede güncelle
    const interval = setInterval(fetchPrice, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return { price, lastUpdate, loading, error, refetch: fetchPrice };
}
