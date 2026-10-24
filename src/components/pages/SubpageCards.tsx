import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { subpageHref, subpagesFor, type SubpageGroup } from '@/content/subpages';

/** Card list of a section's sub-pages, used on the parent pages so every sub-page is reachable. */
export function SubpageCards({ group, heading, intro }: { group: SubpageGroup; heading: string; intro?: string }) {
  const pages = subpagesFor(group);
  return (
    <section className="bgl bgl-gray py-16 md:py-20 border-b border-[#E6DDCC]" aria-label={heading}>
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1B1C1A]">{heading}</h2>
        {intro && <p className="mt-3 max-w-2xl text-[#41484B] leading-relaxed">{intro}</p>}
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pages.map((p) => (
            <li key={p.slug}>
              <Link
                href={subpageHref(p)}
                className="group flex h-full flex-col border border-[#E6DDCC] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[#A33E11] hover:shadow-[0_12px_30px_rgba(163,62,17,0.08)]"
              >
                {p.heroImage && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden mb-4 border border-[#E6DDCC] bg-[#FAF8F5]">
                    <Image
                      src={p.heroImage.src}
                      alt={p.heroImage.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <h3 className="font-serif text-lg font-bold text-[#1B1C1A]">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-[#41484B] leading-relaxed">{p.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#A33E11]">
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
