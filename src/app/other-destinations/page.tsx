import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { STEPS, subpageHref, subpagesFor } from '@/content/subpages';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { FaqSection } from '@/components/sections/FaqSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MobileScroller } from '@/components/ui/MobileScroller';
import { CountryFlag } from '@/components/ui/CountryFlag';
import { DestinationCard } from '@/components/pages/DestinationCard';

export const metadata: Metadata = {
  title: 'Other Destinations',
  description:
    'Explore education and career opportunities in Japan, Taiwan, Singapore, Europe, UK, USA, Canada and Australia. 211 OVERSEAS Ahmedabad.',
};

const REGIONS: { id: string; title: string; text: string; slugs: string[] }[] = [
  { id: 'asia', title: 'Asia', text: 'Technology-led economies with strong research, English-taught options and short travel from India.', slugs: ['japan', 'taiwan', 'singapore'] },
  { id: 'europe', title: 'Europe & the UK', text: 'Long-established universities, structured intakes and a wide range of English-taught programs.', slugs: ['europe', 'united-kingdom'] },
  { id: 'americas', title: 'North America', text: 'Large, flexible systems with a huge choice of programs, universities and colleges.', slugs: ['united-states', 'canada'] },
  { id: 'oceania', title: 'Australia', text: 'Highly rated universities, a multicultural student life and clear pathways for international students.', slugs: ['australia'] },
];

const first = (facts: { label: string; value: string }[], labels: string[]) =>
  facts.find((f) => labels.includes(f.label))?.value ?? '–';

export default function OtherDestinationsPage() {
  const { otherDestinations } = siteContent;
  const pages = subpagesFor('other-destinations');
  const bySlug = Object.fromEntries(pages.map((p) => [p.slug, p]));
  const steps = STEPS.study;

  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 border-b border-[#E6DDCC]" aria-label="Other destinations hero">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium mb-5">
              <span className="h-px w-10 bg-[#B88740]" />
              Global pathways
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-5">
              Your future doesn&apos;t have to be limited to <span className="text-[#8A6020]">one country</span>
            </h1>
            <p className="text-base md:text-lg text-[#57514A] leading-relaxed">
              {otherDestinations.description} Compare {pages.length} study destinations side by side, then talk to a counsellor about the one that fits your profile and budget.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Jump to a destination">
              {pages.map((p) => (
                <li key={p.slug}>
                  <Link href={subpageHref(p)} className="inline-flex min-h-11 items-center gap-2 border border-[#E6DDCC] bg-white px-3 text-sm text-[#2A2A2A] transition-colors hover:border-[#94682B] hover:text-[#8A6020]">
                    <CountryFlag country={p.name} className="h-[14px] w-[20px] rounded-[2px] object-cover" width={20} height={14} />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E6DDCC]/30">
              <Image src="/images/web/graduates-wide.webp" alt="Graduates celebrating by throwing caps in the air" fill priority sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Compare at a glance */}
      <section id="compare" className="bgl bgl-gray py-14 md:py-20 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Compare destinations">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader eyebrow="At a glance" headline="Compare destinations" description="Typical intakes and requirements. Details change by institution, so your counsellor confirms what applies." compact />
          <div className="overflow-x-auto border border-[#E6DDCC] bg-white">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-[#F3EBDD] text-xs uppercase tracking-wider text-[#57514A]">
                <tr>
                  {['Destination', 'Typical intakes', 'Language / tests', 'Good to know', ''].map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-medium">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pages.map((p) => (
                  <tr key={p.slug} className="border-t border-[#E6DDCC] align-top">
                    <th scope="row" className="px-4 py-3 font-serif font-bold text-[#2A2A2A] whitespace-nowrap">
                      <span className="inline-flex items-center gap-2">
                        <CountryFlag country={p.name} className="h-[14px] w-[20px] rounded-[2px] object-cover" width={20} height={14} />
                        {p.name}
                      </span>
                    </th>
                    <td className="px-4 py-3">{first(p.facts, ['Typical intakes'])}</td>
                    <td className="px-4 py-3">{first(p.facts, ['Language tests', 'Teaching language'])}</td>
                    <td className="px-4 py-3 text-[#57514A]">{first(p.facts, ['Visa', 'Key industries', 'Program styles', 'Strong areas', 'Master’s length', 'Working while studying', 'Also see'])}</td>
                    <td className="px-4 py-3">
                      <Link href={subpageHref(p)} className="whitespace-nowrap text-xs uppercase tracking-widest font-medium text-[#8A6020] hover:text-[#2A2A2A]">Guide →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Regions with full destination cards */}
      {REGIONS.map((r, i) => (
        <section key={r.id} id={r.id} className={`py-14 md:py-20 border-b border-[#E6DDCC] scroll-mt-24 ${i % 2 ? 'bgl bgl-gray' : ''}`} aria-label={r.title}>
          <div className="max-w-[1280px] mx-auto px-6">
            <SectionHeader eyebrow={`Region ${String(i + 1).padStart(2, '0')}`} headline={r.title} description={r.text} compact />
            <div className={`grid grid-cols-1 gap-6 ${r.slugs.length > 1 ? 'lg:grid-cols-2' : 'lg:max-w-3xl'} ${r.slugs.length === 3 ? 'xl:grid-cols-3' : ''}`}>
              {r.slugs.map((slug) => bySlug[slug] && <DestinationCard key={slug} page={bySlug[slug]} />)}
            </div>
          </div>
        </section>
      ))}

      {/* How we help */}
      <section className="bgl bgl-black py-14 md:py-20 text-white" aria-label="How we help">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader dark eyebrow="Same support, any country" headline="How we help you get there" compact />
          <MobileScroller dark label="How we help" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="h-full w-full border border-white/15 bg-white/[0.04] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#94682B] text-xs font-bold">{i + 1}</span>
                <h3 className="mt-3 font-serif text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </MobileScroller>
        </div>
      </section>

      <FaqSection limit={4} />
      <CtaStrip interest="Study in Other Countries" source="other-destinations" />
      <FormSection />
    </>
  );
}
