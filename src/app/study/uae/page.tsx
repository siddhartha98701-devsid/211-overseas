import type { Metadata } from 'next';
import { uaeStudyContent } from '@/content/study/uae';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: uaeStudyContent.meta.title,
  description: uaeStudyContent.meta.description,
};

export default function UAEStudyPage() {
  return <DestinationTemplate data={uaeStudyContent} destinationName="UAE" />;
}
