'use client';

import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { CountryFlag } from '@/components/ui/CountryFlag';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { subpageHref, type SubpageContent } from '@/content/subpages';

/** Full-detail destination card: summary, key facts, top reasons and two clear actions. */
export function DestinationCard({ page }: { page: SubpageContent }) {
  const { openCallback } = useCallbackModal();
  return (
    <article className="flex h-full flex-col border border-[#E6DDCC] bg-white">
      <div className="flex items-center gap-4 bg-[#2A2A2A] px-6 py-5 text-white">
        <CountryFlag country={page.name} className="h-[26px] w-[38px] rounded-[2px] border border-[#B88740] object-cover" width={38} height={26} />
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#D1A95F]">{page.eyebrow}</p>
          <h3 className="font-serif text-2xl font-bold leading-tight">{page.name}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[15px] text-[#57514A] leading-relaxed">{page.intro}</p>

        <dl className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#E6DDCC] border border-[#E6DDCC]">
          {page.facts.map((f) => (
            <div key={f.label} className="bg-[#FBF8F1] px-4 py-3">
              <dt className="text-[10px] uppercase tracking-widest text-[#57514A]">{f.label}</dt>
              <dd className="mt-0.5 text-sm font-medium text-[#2A2A2A]">{f.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-6 text-xs uppercase tracking-widest font-medium text-[#8A6020]">Why {page.name}</p>
        <ul className="mt-3 space-y-2.5">
          {page.why.slice(0, 4).map((w) => (
            <li key={w.title} className="flex items-start gap-3 text-sm text-[#2A2A2A]">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#94682B] text-white">
                <Check size={12} strokeWidth={3} aria-hidden="true" />
              </span>
              <span>
                <strong className="font-semibold">{w.title}.</strong> <span className="text-[#57514A]">{w.text}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <p className="text-[10px] uppercase tracking-widest text-[#57514A]">Popular fields</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {page.fields.slice(0, 5).map((f) => (
              <li key={f} className="border border-[#E6DDCC] px-2.5 py-1 text-xs text-[#57514A]">{f}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3 pt-7">
          <Link
            href={subpageHref(page)}
            className="btn-shine inline-flex min-h-11 items-center justify-center gap-2 bg-[#94682B] hover:bg-[#7A5622] px-5 text-xs uppercase tracking-widest font-medium text-white transition-colors"
          >
            Full {page.name} guide <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => openCallback({ interest: page.interest, source: `other-destinations:${page.slug}` })}
            className="inline-flex min-h-11 items-center justify-center border border-[#2A2A2A] px-5 text-xs uppercase tracking-widest font-medium text-[#2A2A2A] transition-colors hover:bg-[#2A2A2A] hover:text-white cursor-pointer"
          >
            Ask about {page.name}
          </button>
        </div>
      </div>
    </article>
  );
}
