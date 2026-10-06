import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SubpageTemplate } from '@/components/pages/SubpageTemplate';
import { getSubpage, subpagesFor } from '@/content/subpages';

const GROUP = 'work-in-uae' as const;

// Only the pages defined in src/content/subpages.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return subpagesFor(GROUP).map((p) => ({ sector: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }): Promise<Metadata> {
  const { sector: slug } = await params;
  const page = getSubpage(GROUP, slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription, alternates: { canonical: `/${GROUP}/${page.slug}` } };
}

export default async function Page({ params }: { params: Promise<{ sector: string }> }) {
  const { sector: slug } = await params;
  const page = getSubpage(GROUP, slug);
  if (!page) notFound();
  return <SubpageTemplate page={page} />;
}
