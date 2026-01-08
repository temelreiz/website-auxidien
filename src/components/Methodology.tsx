'use client';

import { Activity, BarChart2, RefreshCw, Shield, Info } from 'lucide-react';

export function Methodology() {
  return (
    <section id="methodology" className="bg-auxi-dark">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">How It </span>
            <span className="text-gold-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-400">
            Our volatility-weighted methodology ensures balanced, risk-optimized 
            index behavior derived from precious metals signals.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            {
              step: '01',
              icon: Activity,
              title: 'Data Collection',
              description: 'Real-time prices fetched from premium data sources every 5 minutes.',
            },
            {
              step: '02',
              icon: BarChart2,
              title: 'Volatility Analysis',
              description: 'Log-return based volatility calculated from 24-hour price history.',
            },
            {
              step: '03',
              icon: RefreshCw,
              title: 'Weight Calculation',
              description: 'Inverse volatility weighting - lower volatility gets higher weight.',
            },
            {
              step: '04',
              icon: Shield,
              title: 'Oracle Update',
              description: 'Final index value published to blockchain with validation checks.',
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="glass rounded-2xl p-6 h-full card-hover">
                <span className="text-6xl font-bold text-auxi-gold/10 absolute top-4 right-4">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-auxi-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-auxi-gold" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-auxi-gold/30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Formula Section */}
        <div className="glass-gold rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            The Mathematics Behind AUXI
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Volatility */}
            <div>
              <h4 className="text-lg font-semibold text-auxi-gold mb-4">
                1. Volatility Calculation
              </h4>
              <div className="bg-black/30 rounded-xl p-6 font-mono text-sm">
                <p className="text-gray-300 mb-2">// Log-return based volatility</p>
                <p className="text-auxi-gold">σ = stddev( ln(P<sub>t</sub> / P<sub>t-1</sub>) )</p>
                <p className="text-gray-500 mt-4 text-xs">
                  Annualized: σ<sub>annual</sub> = σ × √(periods_per_year)
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Log returns are used because they dampen large spikes and are 
                additive over time - the finance industry standard.
              </p>
            </div>

            {/* Right - Weight */}
            <div>
              <h4 className="text-lg font-semibold text-auxi-gold mb-4">
                2. Weight Calculation
              </h4>
              <div className="bg-black/30 rounded-xl p-6 font-mono text-sm">
                <p className="text-gray-300 mb-2">// Inverse volatility weighting</p>
                <p className="text-auxi-gold">W<sub>i</sub> = (1/σ<sub>i</sub>) / Σ(1/σ<sub>j</sub>)</p>
                <p className="text-gray-500 mt-4 text-xs">
                  Lower volatility → Higher weight
                </p>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Lower volatility signals receive higher weights, creating a naturally 
                risk-balanced index that adapts to market conditions.
              </p>
            </div>
          </div>

          {/* Weight Bounds */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-auxi-gold mb-4 text-center">
              3. Bounded Constraints
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { metal: 'Gold', min: '35%', max: '55%' },
                { metal: 'Silver', min: '15%', max: '30%' },
                { metal: 'Platinum', min: '10%', max: '25%' },
                { metal: 'Palladium', min: '5%', max: '15%' },
              ].map((item, index) => (
                <div key={index} className="bg-black/30 rounded-xl p-4 text-center">
                  <p className="text-white font-semibold">{item.metal}</p>
                  <p className="text-auxi-gold text-sm mt-1">{item.min} - {item.max}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-gray-400 mt-4">
              Weights are bounded to prevent extreme allocations and ensure diversification
            </p>
          </div>

          {/* Smooth Transition */}
          <div className="mt-10 text-center">
            <h4 className="text-lg font-semibold text-auxi-gold mb-4">
              4. Smooth Transitions
            </h4>
            <div className="bg-black/30 rounded-xl p-6 font-mono text-sm inline-block">
              <p className="text-auxi-gold">W<sub>new</sub> = W<sub>old</sub> × (1 - λ) + W<sub>target</sub> × λ</p>
              <p className="text-gray-500 mt-2 text-xs">λ = 0.08 (smoothing factor)</p>
            </div>
            <p className="text-sm text-gray-400 mt-4 max-w-xl mx-auto">
              Weight changes are smoothed over time to prevent sudden portfolio shifts 
              and reduce manipulation risk.
            </p>
          </div>

          {/* Normalization Notice */}
          <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
            <div className="flex items-center justify-center gap-2 text-sm text-amber-200/90">
              <Info size={16} />
              <span>All values are normalized (Base = 1.00). AUXI index does not represent USD value.</span>
            </div>
          </div>
        </div>

        {/* Volatility Regimes */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white text-center mb-8">
            Volatility Regimes
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { regime: 'LOW', threshold: '< 1%', maxChange: '5%', color: 'bg-green-500' },
              { regime: 'MEDIUM', threshold: '1-3%', maxChange: '3%', color: 'bg-yellow-500' },
              { regime: 'HIGH', threshold: '3-6%', maxChange: '2%', color: 'bg-orange-500' },
              { regime: 'EXTREME', threshold: '> 6%', maxChange: '1%', color: 'bg-red-500' },
            ].map((item, index) => (
              <div key={index} className="glass rounded-xl p-6 text-center">
                <div className={`w-3 h-3 ${item.color} rounded-full mx-auto mb-3`}></div>
                <p className="font-semibold text-white">{item.regime}</p>
                <p className="text-sm text-gray-500">σ: {item.threshold}</p>
                <p className="text-xs text-auxi-gold mt-2">Max Δ: {item.maxChange}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            During high volatility periods, index change limits become stricter for added protection
          </p>
        </div>
      </div>
    </section>
  );
}
