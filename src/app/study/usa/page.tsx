import type { Metadata } from 'next';
import { usaContent } from '@/content/study/usa';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: usaContent.meta.title,
  description: usaContent.meta.description,
};

export default function USAPage() {
  return <DestinationTemplate data={usaContent} destinationName="USA" />;
}
