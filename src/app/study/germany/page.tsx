import type { Metadata } from 'next';
import { germanyContent } from '@/content/study/germany';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: germanyContent.meta.title,
  description: germanyContent.meta.description,
};

export default function GermanyPage() {
  return <DestinationTemplate data={germanyContent} destinationName="Germany" />;
}
