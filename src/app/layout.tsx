import type { Metadata } from 'next';
import './globals.css';
import { AuxidienChat } from '@/components/AuxidienChat';

export const metadata: Metadata = {
  title: 'Auxidien - Volatility-Weighted Precious Metals Index Token',
  description: 'AUXI is a revolutionary index token backed by a volatility-weighted basket of precious metals including Gold, Silver, Platinum, and Palladium.',
  keywords: ['AUXI', 'Auxidien', 'Gold', 'Silver', 'Platinum', 'Palladium', 'Index Token', 'DeFi', 'BSC'],
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Auxidien - Precious Metals Index Token',
    description: 'Revolutionary volatility-weighted precious metals index on BSC',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-auxi-dark">
        {children}
        <AuxidienChat />
      </body>
    </html>
  );
}
