import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SubpageTemplate } from '@/components/pages/SubpageTemplate';
import { getSubpage, subpagesFor } from '@/content/subpages';

const GROUP = 'study-in-south-korea' as const;

// Only the pages defined in src/content/subpages.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return subpagesFor(GROUP).map((p) => ({ program: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ program: string }> }): Promise<Metadata> {
  const { program: slug } = await params;
  const page = getSubpage(GROUP, slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription, alternates: { canonical: `/${GROUP}/${page.slug}` } };
}

export default async function Page({ params }: { params: Promise<{ program: string }> }) {
  const { program: slug } = await params;
  const page = getSubpage(GROUP, slug);
  if (!page) notFound();
  return <SubpageTemplate page={page} />;
}
