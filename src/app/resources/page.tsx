import type { Metadata } from 'next';
import { resourcesHubContent } from '@/content/resources';
import { ResourcesView } from './ResourcesView';

export const metadata: Metadata = {
  title: resourcesHubContent.meta.title,
  description: resourcesHubContent.meta.description,
};

export default function ResourcesHubPage() {
  return <ResourcesView />;
}
