'use client';

import { Check, Circle, Clock } from 'lucide-react';

const roadmap = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    status: 'completed',
    date: 'Q1 2026',
    items: [
      { text: 'Token Contract Development', done: true },
      { text: 'Oracle Implementation', done: true },
      { text: 'Vesting Contract', done: true },
      { text: 'BSC Mainnet Deployment', done: true },
      { text: 'Admin Dashboard', done: true },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Discovery',
    status: 'in-progress',
    date: 'Q1-Q2 2026',
    items: [
      { text: 'Public Discovery Interface', done: true },
      { text: 'PancakeSwap Liquidity', done: false },
      { text: 'CoinGecko Listing', done: false },
      { text: 'CoinMarketCap Listing', done: false },
      { text: 'Community Building', done: false },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Expansion',
    status: 'upcoming',
    date: 'Q2-Q3 2026',
    items: [
      { text: 'CEX Listings', done: false },
      { text: 'Cross-chain Bridge (Ethereum)', done: false },
      { text: 'Mobile App', done: false },
      { text: 'Partnership Announcements', done: false },
      { text: 'Staking Mechanism', done: false },
    ],
  },
  {
    phase: 'Phase 4',
    title: 'Evolution',
    status: 'upcoming',
    date: 'Q4 2026+',
    items: [
      { text: 'DAO Governance', done: false },
      { text: 'Additional Metal Indices', done: false },
      { text: 'Institutional Partnerships', done: false },
      { text: 'Advanced Trading Features', done: false },
      { text: 'Global Expansion', done: false },
    ],
  },
];

export function Roadmap() {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-500 border-green-500/50';
      case 'in-progress':
        return 'bg-yellow-500/20 text-yellow-500 border-yellow-500/50';
      default:
        return 'bg-gray-500/20 text-gray-500 border-gray-500/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Check className="w-4 h-4" />;
      case 'in-progress':
        return <Clock className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  return (
    <section id="roadmap" className="bg-auxi-dark">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gold-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-400">
            Our journey building adaptive index infrastructure for precious metals signals.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmap.map((phase, index) => (
            <div 
              key={index}
              className={`glass rounded-2xl p-6 card-hover ${
                phase.status === 'in-progress' ? 'gold-glow' : ''
              }`}
            >
              {/* Phase Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-auxi-gold font-semibold">{phase.phase}</span>
                <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs border ${getStatusStyles(phase.status)}`}>
                  {getStatusIcon(phase.status)}
                  {phase.status === 'completed' ? 'Done' : phase.status === 'in-progress' ? 'Active' : 'Soon'}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
              <p className="text-sm text-gray-500 mb-6">{phase.date}</p>

              {/* Items */}
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className={`flex items-center gap-3 text-sm ${
                      item.done ? 'text-green-500' : 'text-gray-400'
                    }`}
                  >
                    {item.done ? (
                      <Check className="w-4 h-4 flex-shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 flex-shrink-0" />
                    )}
                    <span className={item.done ? 'line-through opacity-70' : ''}>
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-16">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Overall Progress</span>
            <span>40%</span>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-auxi-gold to-orange-500 rounded-full transition-all duration-1000"
              style={{ width: '40%' }}
            ></div>
          </div>
        </div>

        {/* Discovery Phase Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Currently in <span className="text-auxi-gold font-medium">Initial Market Discovery Phase</span> — 
            observing market behavior and gathering data.
          </p>
        </div>
      </div>
    </section>
  );
}
