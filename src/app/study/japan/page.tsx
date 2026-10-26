import type { Metadata } from 'next';
import { japanContent } from '@/content/study/japan';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: japanContent.meta.title,
  description: japanContent.meta.description,
};

export default function JapanPage() {
  return <DestinationTemplate data={japanContent} destinationName="Japan" />;
}
