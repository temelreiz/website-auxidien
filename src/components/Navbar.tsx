'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { CONTRACTS, IS_TESTNET, EXPLORER_BASE_URL } from '@/config/contracts';

// PancakeSwap V2 swap URL — only meaningful on BSC mainnet. On testnet we point
// to the token's explorer page instead, which lets visitors verify the address.
const BUY_HREF = IS_TESTNET
  ? `${EXPLORER_BASE_URL}/token/${CONTRACTS.AUXI_TOKEN}`
  : `https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=${CONTRACTS.AUXI_TOKEN}`;
const BUY_LABEL = IS_TESTNET ? 'View Token' : 'Buy AUXI';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#methodology', label: 'Methodology' },
  { href: '#tokenomics', label: 'Tokenomics' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#contracts', label: 'Contracts' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="/logo.png" alt="Auxidien" className="h-16" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-auxi-gold transition-colors duration-200">
              {link.label}
            </a>
          ))}
          <a href={BUY_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-2">
            {BUY_LABEL}
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-6 rounded-2xl p-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-auxi-gold transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href={BUY_HREF} target="_blank" rel="noopener noreferrer" className="btn-primary text-center mt-4">
              {BUY_LABEL}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}