"use client";

import { Calculator, Shield, Eye, X } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// NORMALIZED INDEX EXPLAINER
// Technical explanation for investors & compliance
// ═══════════════════════════════════════════════════════════════

export default function NormalizedIndexExplainer() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium mb-4">
          Technical Note
        </span>
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">
          Normalized Index Values
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Understanding how Auxidien expresses index values to improve 
          interpretability and avoid misleading comparisons.
        </p>
      </div>

      {/* Formula Card */}
      <div className="bg-slate-900 rounded-2xl p-8 mb-8 text-white">
        <h3 className="text-lg font-medium mb-4 text-slate-300">
          Calculation Overview
        </h3>
        <div className="font-mono text-sm space-y-2 bg-slate-800 rounded-lg p-6">
          <p className="text-slate-400">
            <span className="text-amber-400">raw_index_t</span> = internal index calculation output
          </p>
          <p className="text-slate-400">
            <span className="text-amber-400">raw_index_base</span> = index value at inception
          </p>
          <p className="mt-4 text-white text-base">
            <span className="text-green-400">normalized_index_t</span> = raw_index_t / raw_index_base
          </p>
        </div>
        <p className="text-sm text-slate-400 mt-4">
          Base value is set to 1.00 at launch. All subsequent values are expressed relative to this base.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* What It Does */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
              <Calculator className="w-5 h-5 text-green-600" />
            </div>
            <h4 className="font-semibold text-slate-900">What Normalization Does</h4>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Improves comparability over time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Prevents misinterpretation as a price level</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Reinforces index–price separation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">✓</span>
              <span>Provides intuitive percentage changes</span>
            </li>
          </ul>
        </div>

        {/* What It Does NOT Do */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
              <X className="w-5 h-5 text-red-600" />
            </div>
            <h4 className="font-semibold text-slate-900">What It Does NOT Do</h4>
          </div>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">✗</span>
              <span>Does NOT affect market price</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">✗</span>
              <span>Does NOT alter percentage movements</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">✗</span>
              <span>Does NOT imply any value floor or ceiling</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 mt-0.5">✗</span>
              <span>Does NOT introduce peg behavior</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Oracle Behavior */}
      <div className="bg-slate-50 rounded-xl p-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
            <Eye className="w-5 h-5 text-slate-600" />
          </div>
          <h4 className="font-semibold text-slate-900">Oracle Behavior</h4>
        </div>
        <ul className="space-y-2 text-sm text-slate-600">
          <li>• Only normalized values are published on-chain</li>
          <li>• Oracle does not read or react to market prices</li>
          <li>• No intervention logic exists</li>
          <li>• One-way data flow: Index → Oracle → Public</li>
        </ul>
      </div>

      {/* Regulatory Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex items-center gap-3 mb-3">
          <Shield className="w-5 h-5 text-amber-600" />
          <h4 className="font-semibold text-amber-900">Regulatory Clarification</h4>
        </div>
        <p className="text-sm text-amber-800">
          Normalized index representation does not imply redemption value,
          price targeting, or stability objectives. The index serves purely as
          a reference signal for market participants.
        </p>
      </div>
    </section>
  );
}
