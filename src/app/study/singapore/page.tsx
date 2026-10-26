import type { Metadata } from 'next';
import { singaporeContent } from '@/content/study/singapore';
import { DestinationTemplate } from '@/components/study/DestinationTemplate';

export const metadata: Metadata = {
  title: singaporeContent.meta.title,
  description: singaporeContent.meta.description,
};

export default function SingaporePage() {
  return <DestinationTemplate data={singaporeContent} destinationName="Singapore" />;
}
