import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { subpageHref, subpagesFor, type SubpageGroup } from '@/content/subpages';

/** Card list of a section's sub-pages, used on the parent pages so every sub-page is reachable. */
export function SubpageCards({ group, heading, intro }: { group: SubpageGroup; heading: string; intro?: string }) {
  const pages = subpagesFor(group);
  return (
    <section className="bgl bgl-gray py-16 md:py-20 border-b border-[#E6DDCC]" aria-label={heading}>
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A2A2A]">{heading}</h2>
        {intro && <p className="mt-3 max-w-2xl text-[#57514A] leading-relaxed">{intro}</p>}
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.map((p) => (
            <li key={p.slug}>
              <Link
                href={subpageHref(p)}
                className="group flex h-full flex-col border border-[#E6DDCC] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[#94682B] hover:shadow-[0_12px_30px_rgba(42,42,42,0.08)]"
              >
                <h3 className="font-serif text-lg font-bold text-[#2A2A2A]">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-[#57514A] leading-relaxed">{p.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#8A6020]">
                  Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
