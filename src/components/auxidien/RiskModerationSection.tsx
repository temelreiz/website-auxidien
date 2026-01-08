"use client";

import { 
  Shield, 
  TrendingDown, 
  GitBranch, 
  Droplets, 
  Scale, 
  Clock,
  Eye,
  Ban
} from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// RISK MODERATION SECTION
// Visual summary of behavioral safeguards
// ═══════════════════════════════════════════════════════════════

const safeguards = [
  {
    icon: TrendingDown,
    title: "Rate-Limited Drift",
    description: "Daily and weekly caps prevent cascading shocks",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Drawdown Dampening",
    description: "Conservative mode during sustained drawdowns",
    color: "amber",
  },
  {
    icon: GitBranch,
    title: "Correlation Stability",
    description: "Reduced responsiveness when correlations shift",
    color: "purple",
  },
  {
    icon: Droplets,
    title: "Liquidity Awareness",
    description: "Dampened adjustments during liquidity stress",
    color: "cyan",
  },
  {
    icon: Scale,
    title: "Weight Dispersion",
    description: "Rebalance pressure prevents over-concentration",
    color: "green",
  },
  {
    icon: Clock,
    title: "Regime Persistence",
    description: "Minimum duration prevents flip-flopping",
    color: "orange",
  },
];

const nonObjectives = [
  "Target a specific price",
  "Stabilize market value",
  "Suppress volatility",
  "Intervene in trading",
];

export default function RiskModerationSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
          Behavioral Safeguards
        </span>
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
          Risk Moderation Layer
        </h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg">
          Rule-based mechanisms that moderate how the index responds to 
          changing market conditions—without targeting price or suppressing volatility.
        </p>
      </div>

      {/* Safeguards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {safeguards.map((item, index) => (
          <SafeguardCard key={index} {...item} />
        ))}
      </div>

      {/* Transparency Section */}
      <div className="bg-slate-50 rounded-2xl p-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <Eye className="w-6 h-6 text-slate-600" />
          <h3 className="text-xl font-semibold text-slate-900">
            Transparency & Interpretability
          </h3>
        </div>
        <p className="text-slate-600 mb-4">
          Auxidien favors human-readable transparency over opaque optimization.
          The active regime, dominant signals, and index adjustment behavior can 
          be summarized periodically to provide clarity.
        </p>
        <p className="text-sm text-slate-500 italic">
          "Auxidien prioritizes interpretability over opacity."
        </p>
      </div>

      {/* Non-Objectives */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Ban className="w-6 h-6 text-red-600" />
          <h3 className="text-xl font-semibold text-red-900">
            Explicit Non-Objectives
          </h3>
        </div>
        <p className="text-red-800 mb-6">
          Auxidien does <strong>not</strong> attempt to:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {nonObjectives.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 bg-white rounded-lg px-4 py-3"
            >
              <span className="text-red-500 text-lg">✗</span>
              <span className="text-red-800">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-red-700 mt-6 italic">
          "Market price formation remains entirely free and participant-driven."
        </p>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// SAFEGUARD CARD
// ═══════════════════════════════════════════════════════════════

interface SafeguardCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

function SafeguardCard({ icon: Icon, title, description, color }: SafeguardCardProps) {
  const colorClasses: Record<string, { bg: string; icon: string }> = {
    blue: { bg: "bg-blue-100", icon: "text-blue-600" },
    amber: { bg: "bg-amber-100", icon: "text-amber-600" },
    purple: { bg: "bg-purple-100", icon: "text-purple-600" },
    cyan: { bg: "bg-cyan-100", icon: "text-cyan-600" },
    green: { bg: "bg-green-100", icon: "text-green-600" },
    orange: { bg: "bg-orange-100", icon: "text-orange-600" },
  };

  const colors = colorClasses[color] || colorClasses.blue;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
        <Icon className={`w-6 h-6 ${colors.icon}`} />
      </div>
      <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
}
