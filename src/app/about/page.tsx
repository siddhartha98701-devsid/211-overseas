import type { Metadata } from 'next';
import { aboutContent } from '@/content/about';
import { AboutView } from './AboutView';

export const metadata: Metadata = {
  title: aboutContent.meta.title,
  description: aboutContent.meta.description,
};

export default function AboutPage() {
  return <AboutView />;
}
