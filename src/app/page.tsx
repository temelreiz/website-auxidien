import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Methodology } from '@/components/Methodology';
import { Tokenomics } from '@/components/Tokenomics';
import { Roadmap } from '@/components/Roadmap';
import { Contracts } from '@/components/Contracts';
import { Footer } from '@/components/Footer';
import { CommunicationLayer } from '@/components/CommunicationLayer';
import { TrustCenter } from '@/components/TrustCenter';

export default function Home() {
  return (
    <main className="bg-auxi-dark min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Methodology />
      <Tokenomics />
      <Roadmap />
      <Contracts />
      <Footer />
      <TrustCenter />
      <CommunicationLayer />
    </main>
  );
}
