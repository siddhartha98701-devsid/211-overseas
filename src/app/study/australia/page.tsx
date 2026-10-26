import type { Metadata } from 'next';
import { australiaContent } from '@/content/study/australia';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: australiaContent.meta.title,
  description: australiaContent.meta.description,
};

export default function AustraliaPage() {
  return <DestinationTemplate data={australiaContent} destinationName="Australia" />;
}
