'use client';

import { Github, Twitter, MessageCircle, FileText, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: 'https://x.com/auxidien', label: 'X (Twitter)' },
  { icon: MessageCircle, href: 'https://t.me/auxidien', label: 'Telegram' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: FileText, href: '/whitepaper.pdf', label: 'Whitepaper' },
];

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Documentation', href: 'compliance-memo.pdf' },
      { label: 'Whitepaper', href: '/whitepaper.pdf' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'BscScan', href: 'https://bscscan.com/token/0x03e5FD0dfc9755f070BA420Ae364c452C1aFbd36' },
      { label: 'For Exchanges', href: '/compliance-memo.pdf' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'X (Twitter)', href: 'https://x.com/auxidien' },
      { label: 'Telegram Announcements', href: 'https://t.me/auxidien' },
      { label: 'Telegram Community', href: 'https://t.me/auxidien_community' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-auxi-darker border-t border-white/5">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="/logo.png" 
                alt="Auxidien" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              Volatility-weighted adaptive index token using precious metals as signals. 
              Transparent, rule-based, and built for free market discovery.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-auxi-gold/20 hover:text-auxi-gold transition-colors"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-auxi-gold transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Auxidien. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Built on</span>
            <span className="text-yellow-500 font-semibold">BNB Smart Chain</span>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-black/30 py-4">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <p className="text-xs text-gray-600 text-center">
            Auxidien does not represent ownership of physical precious metals. AUXI is not backed by, redeemable for, or pegged to any physical asset.
          </p>
          <p className="text-xs text-gray-600 text-center">
            Disclaimer: AUXI is a cryptocurrency token. Cryptocurrency investments carry significant risk. 
            Past performance is not indicative of future results. Please do your own research before participating.
          </p>
        </div>
      </div>
    </footer>
  );
}
