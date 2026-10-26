import type { Metadata } from 'next';
import { europeContent } from '@/content/study/europe';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: europeContent.meta.title,
  description: europeContent.meta.description,
};

export default function EuropeStudyPage() {
  return <DestinationTemplate data={europeContent} destinationName="Europe" />;
}
