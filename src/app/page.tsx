import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { TaglineMarquee } from '@/components/sections/TaglineMarquee';
import { KoreaHighlights } from '@/components/sections/KoreaHighlights';
import { ProgramFinderSection } from '@/components/sections/ProgramFinderSection';
import { EligibilitySection } from '@/components/sections/EligibilitySection';
import { FaqSection } from '@/components/sections/FaqSection';
import { PathGatewaySection } from '@/components/sections/PathGatewaySection';
import { WhoCanConnectSection } from '@/components/sections/WhoCanConnectSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { PathwaysSection } from '@/components/sections/PathwaysSection';
import { GlobeExplorerSection } from '@/components/sections/GlobeExplorerSection';
import { NotSureSection } from '@/components/sections/NotSureSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
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
      <TaglineMarquee />
      <PathGatewaySection />
      <KoreaHighlights />
      <ProgramFinderSection />
      <EligibilitySection />
      <PathwaysSection />
      <CtaStrip source="after-pathways" />
      <GlobeExplorerSection />
      <WhoCanConnectSection />
      <NotSureSection />
      <HowItWorksSection />
      <CtaStrip heading="Ready to start step one?" source="after-how-it-works" />
      <WhyUsSection />
      <FaqSection />
      <FormSection />
    </>
  );
}
