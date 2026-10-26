import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { GlobeExplorerSection } from '@/components/sections/GlobeExplorerSection';
import { PathGatewaySection } from '@/components/sections/PathGatewaySection';
import {
  AudienceSelectorSection,
  KoreaFeatureSection,
  DestinationTableSection,
  GuidanceSection,
  WorkTeaserSection,
  HomeProcessSection,
  HomeFaqSection,
  HomeClosingCtaSection,
} from '@/components/sections/HomeSections';
import { homeContent } from '@/content/home';

export const metadata: Metadata = {
  title: homeContent.meta.title,
  description: homeContent.meta.description,
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GlobeExplorerSection />
      <PathGatewaySection />
      <AudienceSelectorSection />
      <KoreaFeatureSection />
      <DestinationTableSection />
      <GuidanceSection />
      <WorkTeaserSection />
      <HomeProcessSection />
      <HomeFaqSection />
      <HomeClosingCtaSection />
    </>
  );
}
