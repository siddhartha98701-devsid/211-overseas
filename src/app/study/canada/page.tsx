import type { Metadata } from 'next';
import { canadaContent } from '@/content/study/canada';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: canadaContent.meta.title,
  description: canadaContent.meta.description,
};

export default function CanadaPage() {
  return <DestinationTemplate data={canadaContent} destinationName="Canada" />;
}
