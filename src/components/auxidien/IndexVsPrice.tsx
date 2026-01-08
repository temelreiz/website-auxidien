"use client";

import { Info, TrendingUp, BarChart3 } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// INDEX VS PRICE - MAIN COMPONENT
// Auxidien Website - "Index Is a Signal, Price Is a Market Outcome"
// ═══════════════════════════════════════════════════════════════

export default function IndexVsPrice() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          Index Is a Signal
          <span className="text-slate-400 mx-2">/</span>
          <span className="text-slate-600">Price Is a Market Outcome</span>
        </h2>

        <p className="text-slate-500 max-w-3xl mx-auto text-lg">
          Auxidien separates reference signals from market prices to avoid
          misleading interpretations and artificial stabilization.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        <IndexCard />
        <PriceCard />
      </div>

      {/* Center Divider - Index ≠ Price */}
      <div className="mt-12 flex flex-col items-center">
        <div className="relative">
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900 text-white text-lg font-semibold shadow-lg">
            <span className="text-amber-400">Index</span>
            <span className="text-2xl">≠</span>
            <span>Price</span>
          </span>
        </div>
        
        <p className="text-sm text-slate-500 text-center mt-6 max-w-xl">
          Index values are published as reference signals only. Market prices are
          independent and exchange-determined.
        </p>
      </div>

      {/* Footer Disclaimer */}
      <div className="mt-12 pt-8 border-t border-slate-200">
        <p className="text-xs text-slate-400 text-center">
          Auxidien does not provide price guarantees, targets, or stabilization mechanisms.
        </p>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// INDEX CARD - Left Side
// ═══════════════════════════════════════════════════════════════

function IndexCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
          <BarChart3 className="w-5 h-5 text-slate-600" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">
          Auxidien Index Value
        </h3>
      </div>

      {/* Value Display */}
      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-5xl font-bold text-slate-900">0.88</span>
        <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">
          Base = 1.00
        </span>
      </div>

      {/* Features List */}
      <ul className="space-y-3 text-sm text-slate-600">
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
          <span>Normalized reference signal</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
          <span>Derived from volatility & correlation</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
          <span>Rate-limited adjustments</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
          <span>Regime & drawdown aware</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
          <span className="font-medium">Not a price in USD</span>
        </li>
      </ul>

      {/* Footer Note */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex items-start gap-2 text-xs text-slate-500">
          <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span className="italic">
            "The index explains behavior. It does not enforce outcomes."
          </span>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// PRICE CARD - Right Side
// ═══════════════════════════════════════════════════════════════

function PriceCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-amber-600" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900">
          AUXI Market Price
        </h3>
      </div>

      {/* Badge */}
      <div className="mb-8">
        <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
          Driven by Supply & Demand
        </span>
      </div>

      {/* Features List */}
      <ul className="space-y-3 text-sm text-slate-600">
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
          <span>Formed on DEXs & CEXs</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
          <span>Influenced by liquidity & sentiment</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
          <span className="font-medium">No peg, no target</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
          <span>No oracle intervention</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
          <span>Fully market-determined</span>
        </li>
      </ul>

      {/* Footer Note */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <p className="text-xs text-slate-500 italic">
          "Price belongs to the market."
        </p>
      </div>
    </div>
  );
}
