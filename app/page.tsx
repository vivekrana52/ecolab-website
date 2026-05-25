import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import DemoVideo from '@/components/sections/DemoVideo';
import NicheGrid from '@/components/sections/NicheGrid';
import WhyEcolab from '@/components/sections/WhyEcolab';
import HowItWorks from '@/components/sections/HowItWorks';
import SocialProof from '@/components/sections/SocialProof';
import PricingTeaser from '@/components/sections/PricingTeaser';

export const metadata: Metadata = {
  title: 'ECOLAB | AI Systems That Automate Sales, Followups & Customer Communication',
  description:
    'Deploy intelligent AI automation systems that capture, qualify, and convert leads for your business. Built for Real Estate, Gyms, Ecommerce, Agencies, and Coaches.',
  keywords: [
    'AI automation',
    'business automation',
    'lead generation',
    'sales automation',
    'customer communication',
  ],
  openGraph: {
    title: 'ECOLAB | AI Business Automation Systems',
    description: 'AI Systems That Automate Sales, Followups & Customer Communication',
    url: 'http://localhost:3000',
    siteName: 'ECOLAB',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <DemoVideo />
      <NicheGrid />
      <WhyEcolab />
      <HowItWorks />
      <SocialProof />
      <PricingTeaser />
    </>
  );
}
