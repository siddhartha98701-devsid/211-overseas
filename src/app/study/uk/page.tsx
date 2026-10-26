import type { Metadata } from 'next';
import { ukContent } from '@/content/study/uk';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: ukContent.meta.title,
  description: ukContent.meta.description,
};

export default function UKPage() {
  return <DestinationTemplate data={ukContent} destinationName="United Kingdom" />;
}
