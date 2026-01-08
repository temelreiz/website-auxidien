'use client';

import { Bell, Shield, AlertTriangle, Info, Clock, CheckCircle, ExternalLink } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// AUXIDIEN COMMUNICATION LAYER
// Trust-first, compliance-safe communication system
// ═══════════════════════════════════════════════════════════════

interface SystemNotice {
  id: string;
  date: string;
  type: 'phase' | 'methodology' | 'risk' | 'system';
  title: string;
  summary: string;
  details?: string;
  severity: 'info' | 'notice' | 'warning';
}

const systemNotices: SystemNotice[] = [
  {
    id: '2026-01-08-discovery',
    date: '2026-01-08 00:00 UTC',
    type: 'phase',
    title: 'Discovery Phase Active',
    summary: 'Auxidien is currently in its Initial Market Discovery Phase. Liquidity is limited and volatility may be elevated.',
    details: 'During this phase, the oracle publishes index values 1-2 times daily. This allows for data collection and observation without frequent intervention. Market outcome is determined freely by participants.',
    severity: 'notice',
  },
  {
    id: '2026-01-08-methodology',
    date: '2026-01-08 12:00 UTC',
    type: 'methodology',
    title: 'Methodology v1.1 Published',
    summary: 'Updated whitepaper includes Risk Moderation Layer, Index Normalization (Base=1.00), and Oracle Frequency clarification.',
    severity: 'info',
  },
  {
    id: '2026-01-07-risk',
    date: '2026-01-07 00:00 UTC',
    type: 'risk',
    title: 'Risk Disclosure Reminder',
    summary: 'AUXI is an experimental adaptive index token. It is not backed by physical assets and carries significant risk. Only participate with funds you can afford to lose.',
    severity: 'warning',
  },
  {
    id: '2026-01-06-oracle',
    date: '2026-01-06 00:00 UTC',
    type: 'system',
    title: 'Oracle System Live',
    summary: 'AuxidienOracle deployed to BSC Mainnet. Index values are published as reference signals only. Market outcome is independent.',
    severity: 'info',
  },
];

export function CommunicationLayer() {
  return (
    <section id="communications" className="bg-auxi-darker">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-gold mb-6">
            <Bell className="w-4 h-4 text-auxi-gold" />
            <span className="text-sm text-auxi-gold">System Communications</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Communication </span>
            <span className="text-gold-gradient">Layer</span>
          </h2>
          
          <p className="text-xl text-gray-400">
            Transparent updates on system state, methodology changes, and risk disclosures. 
            No promotional content. Information only.
          </p>
        </div>

        {/* Current Phase Banner */}
        <div className="mb-10 p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-amber-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-amber-200 mb-2">
                Current Phase: Initial Market Discovery
              </h3>
              <p className="text-amber-200/80 text-sm">
                Auxidien is observing market behavior and collecting data. Liquidity is intentionally limited. 
                Oracle publishes 1-2x daily. This is not a promotional launch—it is a discovery period.
              </p>
            </div>
          </div>
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Info className="w-5 h-5 text-auxi-gold" />
            System Notices
          </h3>
          
          {systemNotices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>

        {/* Communication Principles */}
        <div className="mt-12 glass rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-auxi-gold" />
            Communication Principles
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-green-500 mb-3">✓ What We Communicate</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• System state changes (phase, regime)</li>
                <li>• Methodology updates</li>
                <li>• Risk disclosures and reminders</li>
                <li>• Technical documentation updates</li>
                <li>• Oracle and contract status</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-red-500 mb-3">✗ What We Don't Communicate</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• Price predictions or targets</li>
                <li>• Buy/sell recommendations</li>
                <li>• "Limited opportunity" messaging</li>
                <li>• Promotional or FOMO content</li>
                <li>• Investment advice of any kind</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Opt-in Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            All communications are also posted to{' '}
            <a href="https://x.com/auxidien" target="_blank" rel="noopener noreferrer" className="text-auxi-gold hover:underline">
              X (Twitter)
            </a>
            {' '}and{' '}
            <a href="https://t.me/auxidien" target="_blank" rel="noopener noreferrer" className="text-auxi-gold hover:underline">
              Telegram
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// NOTICE CARD
// ═══════════════════════════════════════════════════════════════

function NoticeCard({ notice }: { notice: SystemNotice }) {
  const severityStyles = {
    info: {
      border: 'border-blue-500/30',
      bg: 'bg-blue-500/5',
      icon: <CheckCircle className="w-5 h-5 text-blue-400" />,
      badge: 'bg-blue-500/20 text-blue-400',
    },
    notice: {
      border: 'border-amber-500/30',
      bg: 'bg-amber-500/5',
      icon: <Info className="w-5 h-5 text-amber-400" />,
      badge: 'bg-amber-500/20 text-amber-400',
    },
    warning: {
      border: 'border-red-500/30',
      bg: 'bg-red-500/5',
      icon: <AlertTriangle className="w-5 h-5 text-red-400" />,
      badge: 'bg-red-500/20 text-red-400',
    },
  };

  const typeLabels = {
    phase: 'Phase Update',
    methodology: 'Methodology',
    risk: 'Risk Disclosure',
    system: 'System Update',
  };

  const style = severityStyles[notice.severity];

  return (
    <div className={`rounded-xl border ${style.border} ${style.bg} p-5`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          {style.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className={`text-xs px-2 py-0.5 rounded-full ${style.badge}`}>
              {typeLabels[notice.type]}
            </span>
            <span className="text-xs text-gray-500">{notice.date}</span>
          </div>
          <h4 className="text-white font-medium mb-1">{notice.title}</h4>
          <p className="text-sm text-gray-400">{notice.summary}</p>
          {notice.details && (
            <p className="text-xs text-gray-500 mt-2">{notice.details}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommunicationLayer;
