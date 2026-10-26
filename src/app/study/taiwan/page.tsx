import type { Metadata } from 'next';
import { taiwanContent } from '@/content/study/taiwan';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: taiwanContent.meta.title,
  description: taiwanContent.meta.description,
};

export default function TaiwanPage() {
  return <DestinationTemplate data={taiwanContent} destinationName="Taiwan" />;
}
