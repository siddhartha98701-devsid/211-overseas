import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { GlobeExplorerSection } from '@/components/sections/GlobeExplorerSection';
import { PathGatewaySection } from '@/components/sections/PathGatewaySection';
import { ProcessStrip } from '@/components/sections/ProcessStrip';
import { FaqSection } from '@/components/sections/FaqSection';
import { FormSection } from '@/components/sections/FormSection';

export const metadata: Metadata = {
  title: { absolute: '211 OVERSEAS study abroad — Your Future Has No Borders | Study & Work Abroad' },
  description:
    'Study in South Korea, Work in Germany, Career in UAE. 211 OVERSEAS helps students and professionals explore international education and career opportunities from Ahmedabad.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GlobeExplorerSection />
      <PathGatewaySection />
      <ProcessStrip />
      <FaqSection limit={4} />
      <FormSection />
    </>
  );
}
