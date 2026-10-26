import type { Metadata } from 'next';
import { southKoreaContent } from '@/content/study/south-korea';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: southKoreaContent.meta.title,
  description: southKoreaContent.meta.description,
};

export default function SouthKoreaPage() {
  return <DestinationTemplate data={southKoreaContent} destinationName="South Korea" />;
}
