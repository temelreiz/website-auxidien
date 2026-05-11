// Auxidien contract config for the public website.
// All deployment-specific values come from NEXT_PUBLIC_* env vars so the
// same code can serve BSC testnet today and BSC mainnet later.

import { bsc, bscTestnet, type Chain } from "viem/chains";

// NOTE: Next.js only inlines `process.env.NEXT_PUBLIC_*` literally; destructuring
// `process.env` (e.g. `const env = process.env`) breaks in the browser. Each
// env var is read by its full path below.
const chainId = Number(process.env.NEXT_PUBLIC_CHAIN_ID || "97");

export const CHAIN: Chain = chainId === 56 ? bsc : bscTestnet;
export const IS_TESTNET = chainId !== 56;
export const EXPLORER_BASE_URL = CHAIN.blockExplorers?.default.url ?? "https://testnet.bscscan.com";
export const CHAIN_LABEL = IS_TESTNET ? "BSC Testnet" : "BSC Mainnet";
export const RPC_URL = process.env.NEXT_PUBLIC_RPC_URL || CHAIN.rpcUrls.default.http[0];

export const CONTRACTS = {
  AUXI_TOKEN: (process.env.NEXT_PUBLIC_AUXI_TOKEN_ADDRESS || "0xeAc4AC5dDa93A8D875dD53fD3396BE8ce08F0814") as `0x${string}`,
  ORACLE: (process.env.NEXT_PUBLIC_AUXIDIEN_ORACLE_ADDRESS || "0x681595931f042958619a56d7EFa13e9c258f8584") as `0x${string}`,
  VESTING: (process.env.NEXT_PUBLIC_AUXI_VESTING_ADDRESS || "0x83cB6776B3e780787C498Ad9d73BDa013E7bc89C") as `0x${string}`,
} as const;

export const ORACLE_ABI = [
  "function getPricePerOzE6() view returns (uint256)",
  "function lastUpdateAt() view returns (uint256)",
  "function getMetalPrices() view returns (uint256 gold, uint256 silver, uint256 platinum, uint256 palladium)",
  "function getWeights() view returns (uint16 goldBps, uint16 silverBps, uint16 platinumBps, uint16 palladiumBps)",
] as const;

export const explorerAddress = (address: string) => `${EXPLORER_BASE_URL}/address/${address}`;
