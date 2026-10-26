import type { Metadata } from 'next';
import { luxembourgContent } from '@/content/study/luxembourg';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: luxembourgContent.meta.title,
  description: luxembourgContent.meta.description,
};

export default function LuxembourgPage() {
  return <DestinationTemplate data={luxembourgContent} destinationName="Luxembourg" />;
}
