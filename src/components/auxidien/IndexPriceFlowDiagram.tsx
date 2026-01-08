"use client";

// ═══════════════════════════════════════════════════════════════
// INDEX PRICE FLOW DIAGRAM
// SVG-based visual explanation of signal flow
// ═══════════════════════════════════════════════════════════════

export default function IndexPriceFlowDiagram() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-16">
      <h3 className="text-2xl font-semibold text-center mb-8 text-slate-900">
        How It Works
      </h3>
      
      <div className="bg-slate-50 rounded-2xl p-8 overflow-x-auto">
        <svg
          viewBox="0 0 900 320"
          className="w-full h-auto min-w-[700px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background */}
          <rect width="900" height="320" fill="#f8fafc" rx="16" />

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* SIGNAL INPUT BOX */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <g transform="translate(30, 100)">
            <rect
              width="160"
              height="120"
              rx="12"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
            <text x="80" y="35" textAnchor="middle" className="text-sm font-semibold" fill="#1e293b">
              Signal Input
            </text>
            <line x1="20" y1="50" x2="140" y2="50" stroke="#e2e8f0" strokeWidth="1" />
            
            {/* Metal symbols */}
            <text x="80" y="72" textAnchor="middle" className="text-xs" fill="#64748b">
              XAU • XAG
            </text>
            <text x="80" y="90" textAnchor="middle" className="text-xs" fill="#64748b">
              XPT • XPD
            </text>
            <text x="80" y="110" textAnchor="middle" className="text-[10px]" fill="#94a3b8">
              Precious Metals Data
            </text>
          </g>

          {/* Arrow 1 */}
          <g transform="translate(200, 150)">
            <line x1="0" y1="10" x2="50" y2="10" stroke="#cbd5e1" strokeWidth="2" />
            <polygon points="50,5 60,10 50,15" fill="#cbd5e1" />
          </g>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* INDEX ENGINE BOX */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <g transform="translate(270, 80)">
            <rect
              width="180"
              height="160"
              rx="12"
              fill="#fefce8"
              stroke="#fbbf24"
              strokeWidth="2"
            />
            <text x="90" y="30" textAnchor="middle" className="text-sm font-semibold" fill="#92400e">
              Index Engine
            </text>
            <line x1="20" y1="45" x2="160" y2="45" stroke="#fcd34d" strokeWidth="1" />
            
            <text x="90" y="68" textAnchor="middle" className="text-xs" fill="#78350f">
              Volatility Analysis
            </text>
            <text x="90" y="88" textAnchor="middle" className="text-xs" fill="#78350f">
              Correlation Check
            </text>
            <text x="90" y="108" textAnchor="middle" className="text-xs" fill="#78350f">
              Regime Detection
            </text>
            <text x="90" y="128" textAnchor="middle" className="text-xs" fill="#78350f">
              Risk Moderation
            </text>
            <text x="90" y="150" textAnchor="middle" className="text-[10px] font-medium" fill="#d97706">
              Rate-Limited Output
            </text>
          </g>

          {/* Arrow 2 */}
          <g transform="translate(460, 150)">
            <line x1="0" y1="10" x2="50" y2="10" stroke="#cbd5e1" strokeWidth="2" />
            <polygon points="50,5 60,10 50,15" fill="#cbd5e1" />
          </g>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* ORACLE BOX */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <g transform="translate(530, 100)">
            <rect
              width="140"
              height="120"
              rx="12"
              fill="#ffffff"
              stroke="#e2e8f0"
              strokeWidth="2"
            />
            <text x="70" y="35" textAnchor="middle" className="text-sm font-semibold" fill="#1e293b">
              Oracle
            </text>
            <line x1="20" y1="50" x2="120" y2="50" stroke="#e2e8f0" strokeWidth="1" />
            
            <text x="70" y="72" textAnchor="middle" className="text-xs" fill="#64748b">
              On-chain
            </text>
            <text x="70" y="90" textAnchor="middle" className="text-xs" fill="#64748b">
              Publication
            </text>
            <text x="70" y="110" textAnchor="middle" className="text-[10px]" fill="#94a3b8">
              Reference Signal Only
            </text>
          </g>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* MARKET BOX (Separate) */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          <g transform="translate(710, 100)">
            <rect
              width="160"
              height="120"
              rx="12"
              fill="#f0fdf4"
              stroke="#22c55e"
              strokeWidth="2"
              strokeDasharray="6,4"
            />
            <text x="80" y="35" textAnchor="middle" className="text-sm font-semibold" fill="#166534">
              Market Price
            </text>
            <line x1="20" y1="50" x2="140" y2="50" stroke="#86efac" strokeWidth="1" />
            
            <text x="80" y="72" textAnchor="middle" className="text-xs" fill="#15803d">
              DEX & CEX
            </text>
            <text x="80" y="90" textAnchor="middle" className="text-xs" fill="#15803d">
              Supply & Demand
            </text>
            <text x="80" y="110" textAnchor="middle" className="text-[10px] font-medium" fill="#16a34a">
              Free Price Discovery
            </text>
          </g>

          {/* Separation indicator */}
          <g transform="translate(680, 130)">
            <line x1="0" y1="0" x2="0" y2="60" stroke="#dc2626" strokeWidth="2" strokeDasharray="4,4" />
            <text x="-5" y="80" className="text-[10px] font-bold" fill="#dc2626">
              ≠
            </text>
          </g>

          {/* ═══════════════════════════════════════════════════════════════ */}
          {/* LABELS */}
          {/* ═══════════════════════════════════════════════════════════════ */}
          
          {/* Top labels */}
          <text x="110" y="50" textAnchor="middle" className="text-[11px] font-medium" fill="#94a3b8">
            External Data
          </text>
          <text x="360" y="50" textAnchor="middle" className="text-[11px] font-medium" fill="#d97706">
            Processing
          </text>
          <text x="600" y="50" textAnchor="middle" className="text-[11px] font-medium" fill="#94a3b8">
            Signal
          </text>
          <text x="790" y="50" textAnchor="middle" className="text-[11px] font-medium" fill="#16a34a">
            Independent
          </text>

          {/* Bottom note */}
          <text x="450" y="290" textAnchor="middle" className="text-xs" fill="#64748b">
            Oracle publishes reference signals. Market determines price independently.
          </text>
          
          {/* No intervention arrow */}
          <g transform="translate(600, 250)">
            <line x1="0" y1="0" x2="80" y2="-30" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="4,3" />
            <text x="90" y="-25" className="text-[10px]" fill="#dc2626">
              No Intervention
            </text>
          </g>
        </svg>
      </div>
      
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-slate-600">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-amber-100 border border-amber-400" />
          <span>Index Calculation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-50 border border-green-500 border-dashed" />
          <span>Market (Independent)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-red-500" style={{ borderStyle: 'dashed' }} />
          <span className="text-red-600">No Connection</span>
        </div>
      </div>
    </section>
  );
}
