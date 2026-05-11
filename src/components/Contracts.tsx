'use client';

import { Copy, ExternalLink, Check } from 'lucide-react';
import { useState } from 'react';
import { CHAIN_LABEL, CONTRACTS, EXPLORER_BASE_URL } from '@/config/contracts';

const contracts = [
  {
    name: 'AUXI Token',
    address: CONTRACTS.AUXI_TOKEN,
    description: 'Main ERC-20 token contract',
    icon: '🪙',
  },
  {
    name: 'Index Oracle',
    address: CONTRACTS.ORACLE,
    description: 'Publishes the on-chain composite index value',
    icon: '📊',
  },
  {
    name: 'Vesting Contract',
    address: CONTRACTS.VESTING,
    description: 'Team token vesting schedule',
    icon: '🔒',
  },
];

export function Contracts() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(address);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contracts" className="bg-auxi-darker">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gold-gradient">Smart Contracts</span>
          </h2>
          <p className="text-xl text-gray-400">
            All contracts are deployed on {CHAIN_LABEL} and verified on the explorer.
          </p>
        </div>

        {/* Contract Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {contracts.map((contract, index) => (
            <div key={index} className="glass rounded-2xl p-6 card-hover">
              <div className="text-4xl mb-4">{contract.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{contract.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{contract.description}</p>

              {/* Address */}
              <div className="bg-black/30 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">Contract Address</p>
                <div className="flex items-center justify-between gap-2">
                  <code className="text-sm text-auxi-gold font-mono">
                    {contract.address.slice(0, 10)}...{contract.address.slice(-8)}
                  </code>
                  <div className="flex gap-1">
                    <button
                      onClick={() => copyToClipboard(contract.address)}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title="Copy address"
                    >
                      {copied === contract.address ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                    <a
                      href={`${EXPLORER_BASE_URL}/address/${contract.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title="View on explorer"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add to Wallet */}
        <div className="mt-12 text-center">
          <div className="glass-gold rounded-2xl p-8 inline-block">
            <h3 className="text-xl font-semibold text-white mb-4">Add AUXI to MetaMask</h3>
            <div className="grid grid-cols-2 gap-8 text-left">
              <div>
                <p className="text-sm text-gray-400">Token Address</p>
                <p className="text-auxi-gold font-mono text-sm mt-1">
                  {CONTRACTS.AUXI_TOKEN.slice(0, 6)}...{CONTRACTS.AUXI_TOKEN.slice(-4)}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Symbol</p>
                <p className="text-white font-semibold mt-1">AUXI</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Decimals</p>
                <p className="text-white font-semibold mt-1">18</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Network</p>
                <p className="text-white font-semibold mt-1">{CHAIN_LABEL}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            ⚠️ Always verify contract addresses before interacting.
            Only use the official addresses listed above.
          </p>
        </div>
      </div>
    </section>
  );
}
