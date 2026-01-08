"use client";

import { BarChart3, TrendingUp } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// INDEX VS PRICE - MOBILE COMPACT VERSION
// Condensed view optimized for mobile devices
// ═══════════════════════════════════════════════════════════════

export default function IndexVsPriceMobile() {
  return (
    <section className="w-full px-4 py-10">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-center mb-2 text-slate-900">
        Index ≠ Price
      </h2>
      <p className="text-sm text-slate-500 text-center mb-8">
        Reference signal vs. market outcome
      </p>

      {/* Stacked Cards */}
      <div className="space-y-4">
        {/* Index Card */}
        <div className="bg-white rounded-xl border border-slate-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-slate-600" />
              <span className="font-medium text-slate-900">Index Value</span>
            </div>
            <span className="text-2xl font-bold text-slate-900">0.88</span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">
              Reference Signal
            </span>
            <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">
              Rate-Limited
            </span>
            <span className="px-2 py-1 bg-slate-100 rounded text-slate-600">
              Not USD
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center">
          <div className="h-px w-12 bg-slate-200" />
          <span className="mx-3 text-lg font-bold text-red-500">≠</span>
          <div className="h-px w-12 bg-slate-200" />
        </div>

        {/* Price Card */}
        <div className="bg-green-50 rounded-xl border border-green-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-900">Market Price</span>
            </div>
            <span className="text-sm text-green-700 font-medium">
              Exchange-Driven
            </span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 bg-green-100 rounded text-green-700">
              Supply & Demand
            </span>
            <span className="px-2 py-1 bg-green-100 rounded text-green-700">
              No Peg
            </span>
            <span className="px-2 py-1 bg-green-100 rounded text-green-700">
              Free Market
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="text-[11px] text-slate-400 text-center mt-6">
        Index values are reference signals only. Market prices are independent.
      </p>
    </section>
  );
}
