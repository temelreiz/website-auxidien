'use client';

import { Shield, FileText, AlertTriangle, Scale, Eye, MessageSquare, ExternalLink } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// TRUST CENTER
// Central hub for compliance, risk, and transparency
// ═══════════════════════════════════════════════════════════════

const documents = [
  {
    title: 'Whitepaper v1.1',
    description: 'Complete methodology, tokenomics, and technical documentation',
    href: '/whitepaper.pdf',
    icon: FileText,
  },
  {
    title: 'Compliance Memo',
    description: 'Regulatory positioning and exchange listing guidelines',
    href: '/compliance-memo.pdf',
    icon: Scale,
  },
  {
    title: 'Risk Disclosures',
    description: 'Comprehensive risk factors and disclaimers',
    href: '#risks',
    icon: AlertTriangle,
  },
];

const riskFactors = [
  {
    title: 'Experimental Technology',
    description: 'AUXI uses novel index methodology that has not been tested across all market conditions.',
  },
  {
    title: 'No Asset Backing',
    description: 'AUXI is NOT backed by physical precious metals. It uses metals as signal sources only.',
  },
  {
    title: 'Limited Liquidity',
    description: 'During discovery phase, liquidity is intentionally limited. Large trades may face significant slippage.',
  },
  {
    title: 'Price Volatility',
    description: 'Market price is determined freely and may deviate significantly from index value.',
  },
  {
    title: 'Smart Contract Risk',
    description: 'While contracts are verified, they have not undergone external audit. Bugs may exist.',
  },
  {
    title: 'Regulatory Uncertainty',
    description: 'Cryptocurrency regulations vary by jurisdiction and may change.',
  },
];

export function TrustCenter() {
  return (
    <section id="trust" className="bg-auxi-dark">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Shield className="w-4 h-4 text-auxi-gold" />
            <span className="text-sm text-gray-400">Transparency First</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gold-gradient">Trust Center</span>
          </h2>
          
          <p className="text-xl text-gray-400">
            Complete transparency on methodology, risks, and communications. 
            We believe informed participants make better decisions.
          </p>
        </div>

        {/* Documents Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {documents.map((doc, index) => (
            <a
              key={index}
              href={doc.href}
              target={doc.href.startsWith('http') ? '_blank' : undefined}
              rel={doc.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-xl bg-auxi-gold/10 flex items-center justify-center mb-4 group-hover:bg-auxi-gold/20 transition-colors">
                <doc.icon className="w-6 h-6 text-auxi-gold" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                {doc.title}
                <ExternalLink className="w-4 h-4 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-gray-400">{doc.description}</p>
            </a>
          ))}
        </div>

        {/* Risk Disclosures */}
        <div id="risks" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            <h3 className="text-2xl font-semibold text-white">Risk Disclosures</h3>
          </div>
          
          <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
            <p className="text-red-200/90 mb-6">
              <strong>Important:</strong> Cryptocurrency investments carry significant risk. 
              You may lose some or all of your investment. Please read and understand 
              all risk factors before participating.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              {riskFactors.map((risk, index) => (
                <div key={index} className="bg-black/20 rounded-xl p-4">
                  <h4 className="text-white font-medium mb-1">{risk.title}</h4>
                  <p className="text-sm text-gray-400">{risk.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Clarifications */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Eye className="w-6 h-6 text-auxi-gold" />
            <h3 className="text-2xl font-semibold text-white">Key Clarifications</h3>
          </div>
          
          <div className="glass rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-auxi-gold font-semibold mb-4">What AUXI Is</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✓ An adaptive index token</li>
                  <li>✓ Signal-derived from precious metals volatility</li>
                  <li>✓ Free-floating market price</li>
                  <li>✓ Transparent, rule-based methodology</li>
                  <li>✓ Experimental discovery phase</li>
                </ul>
              </div>
              <div>
                <h4 className="text-red-500 font-semibold mb-4">What AUXI Is NOT</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>✗ Backed by physical precious metals</li>
                  <li>✗ Redeemable for any asset</li>
                  <li>✗ Pegged to any price target</li>
                  <li>✗ An investment recommendation</li>
                  <li>✗ Guaranteed to maintain value</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Questions */}
        <div className="glass-gold rounded-2xl p-8 text-center">
          <MessageSquare className="w-10 h-10 text-auxi-gold mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Questions?</h3>
          <p className="text-gray-400 mb-4">
            We welcome technical questions and feedback about methodology. 
            We do not provide investment advice or price predictions.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://t.me/auxidien" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              Telegram
            </a>
            <a 
              href="https://x.com/auxidien" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustCenter;
