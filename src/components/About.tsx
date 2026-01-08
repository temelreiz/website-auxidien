'use client';

import { Gem, Scale, LineChart, Lock, Info } from 'lucide-react';

const features = [
  {
    icon: Gem,
    title: 'Multi-Metal Signals',
    description: 'Index behavior derived from Gold, Silver, Platinum, and Palladium volatility signals - diversified in one adaptive token.',
  },
  {
    icon: Scale,
    title: 'Volatility-Weighted',
    description: 'Smart weighting algorithm that adjusts based on market volatility - lower volatility means higher weight.',
  },
  {
    icon: LineChart,
    title: 'Real-Time Index Updates',
    description: 'Oracle publishes index values every 5 minutes. Market price is determined freely by trading activity.',
  },
  {
    icon: Lock,
    title: 'Transparent & Secure',
    description: 'All contracts verified on BscScan. Team tokens locked in vesting contract for 36 months.',
  },
];

export function About() {
  return (
    <section id="about" className="bg-auxi-darker">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">What is </span>
            <span className="text-gold-gradient">AUXIDIEN?</span>
          </h2>
          <p className="text-xl text-gray-400">
            AUXI is an adaptive index token that derives its behavior from precious metals 
            volatility signals using a transparent, rule-based methodology.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 card-hover"
            >
              <div className="w-14 h-14 rounded-xl bg-auxi-gold/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-auxi-gold" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Metal Composition */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-white text-center mb-2">
            Volatility Signal Contributions
          </h3>
          <p className="text-center text-sm text-gray-500 mb-10">
            Signals only. Not asset exposure.
          </p>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Gold', symbol: 'XAU', weight: '44.49%', icon: '/gold-icon.png' },
                { name: 'Silver', symbol: 'XAG', weight: '21.93%', icon: '/silver-icon.png' },
                { name: 'Platinum', symbol: 'XPT', weight: '18.58%', icon: '/platinum-icon.png' },
                { name: 'Palladium', symbol: 'XPD', weight: '15.00%', icon: '/palladium-icon.png' },
              ].map((metal, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto flex items-center justify-center mb-4">
                    <img src={metal.icon} alt={metal.name} className="w-16 h-16 object-contain" />
                  </div>
                  <p className="font-semibold text-white">{metal.name}</p>
                  <p className="text-sm text-gray-500">{metal.symbol}</p>
                  <p className="text-lg font-bold text-auxi-gold mt-2">{metal.weight}</p>
                </div>
              ))}
            </div>

            {/* Weight Bar */}
            <div className="mt-10">
              <div className="h-4 rounded-full overflow-hidden flex">
                <div className="metal-gold h-full" style={{ width: '44.49%' }}></div>
                <div className="metal-silver h-full" style={{ width: '21.93%' }}></div>
                <div className="metal-platinum h-full" style={{ width: '18.58%' }}></div>
                <div className="metal-palladium h-full" style={{ width: '15.00%' }}></div>
              </div>
              <p className="text-center text-sm text-gray-500 mt-3">
                Weights are dynamically adjusted based on volatility signals
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-600">
              <Info size={14} />
              <span>These are signal contributions, not asset holdings or price exposure.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
