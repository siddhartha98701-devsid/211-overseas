import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { PathwaysSection } from '@/components/sections/PathwaysSection';
import { NotSureSection } from '@/components/sections/NotSureSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { FormSection } from '@/components/sections/FormSection';

export const metadata: Metadata = {
  title: '211 Overseas — Your Future Has No Borders | Study & Work Abroad',
  description:
    'Study in South Korea, Work in Germany, Career in UAE. 211 Overseas helps students and professionals explore international education and career opportunities from Ahmedabad.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PathwaysSection />
      <NotSureSection />
      <HowItWorksSection />
      <WhyUsSection />
      <FormSection />
    </>
  );
}
