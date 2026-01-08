'use client';

import { Info } from 'lucide-react';

const tokenomics = [
  { label: 'Public Distribution', percentage: 35, amount: '35,000,000', color: '#22c55e' },
  { label: 'Treasury', percentage: 20, amount: '20,000,000', color: '#3b82f6' },
  { label: 'Liquidity Pool', percentage: 20, amount: '20,000,000', color: '#8b5cf6' },
  { label: 'Team & Development', percentage: 15, amount: '15,000,000', color: '#f59e0b', locked: true },
  { label: 'Strategic & Advisors', percentage: 10, amount: '10,000,000', color: '#ec4899' },
];

export function Tokenomics() {
  return (
    <section id="tokenomics" className="bg-auxi-darker">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gold-gradient">Tokenomics</span>
          </h2>
          <p className="text-xl text-gray-400">
            A balanced distribution designed for long-term sustainability and growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Chart */}
          <div>
            {/* Circular Chart Representation */}
            <div className="relative w-80 h-80 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                {tokenomics.reduce((acc, item, index) => {
                  const offset = acc.offset;
                  const circumference = 2 * Math.PI * 40;
                  const strokeLength = (item.percentage / 100) * circumference;
                  
                  acc.elements.push(
                    <circle
                      key={index}
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke={item.color}
                      strokeWidth="20"
                      strokeDasharray={`${strokeLength} ${circumference}`}
                      strokeDashoffset={-offset}
                      className="transition-all duration-500"
                    />
                  );
                  
                  acc.offset += strokeLength;
                  return acc;
                }, { elements: [] as JSX.Element[], offset: 0 }).elements}
              </svg>
              
              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-gold-gradient">100M</p>
                  <p className="text-sm text-gray-400">Total Supply</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Legend */}
          <div className="space-y-4">
            {tokenomics.map((item, index) => (
              <div 
                key={index} 
                className="glass rounded-xl p-4 flex items-center justify-between card-hover"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div>
                    <p className="font-semibold text-white flex items-center gap-2">
                      {item.label}
                      {item.locked && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-500">
                          🔒 Vested
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-gray-500">{item.amount} AUXI</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-gold-gradient">
                  {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Token Supply Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <Info size={16} />
            <span>Token supply mechanics do not target or support any specific market price.</span>
          </div>
        </div>

        {/* Vesting Info */}
        <div className="mt-12 glass-gold rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            🔒 Team Vesting Schedule
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-auxi-gold">15M</p>
              <p className="text-sm text-gray-400 mt-1">AUXI Locked</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-auxi-gold">6</p>
              <p className="text-sm text-gray-400 mt-1">Month Cliff</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-auxi-gold">36</p>
              <p className="text-sm text-gray-400 mt-1">Month Vesting</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-auxi-gold">Feb 2029</p>
              <p className="text-sm text-gray-400 mt-1">Fully Unlocked</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            Team tokens are locked in a smart contract with linear vesting after a 6-month cliff period.
          </p>
        </div>
      </div>
    </section>
  );
}
