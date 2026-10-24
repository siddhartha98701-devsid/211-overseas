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
import { OtherDestinationsTabs } from './OtherDestinationsTabs';

export const metadata: Metadata = {
  title: 'Global Study Destinations | Universities in Japan, UK, USA, Australia & More',
  description:
    'Explore premier university study pathways in Japan, Taiwan, Singapore, Europe, UK, USA, Canada, and Australia. Comprehensive admissions and visa guidance. 211 OVERSEAS.',
};

const first = (facts: { label: string; value: string }[], labels: string[]) =>
  facts.find((f) => labels.includes(f.label))?.value ?? '–';

export default function OtherDestinationsPage() {
  const { otherDestinations } = siteContent;
  const pages = subpagesFor('other-destinations');
  const steps = STEPS.study;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 border-b border-[#E6DDCC] bg-[#FAF8F5]" aria-label="Other study destinations hero">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#1D3FFF] font-semibold mb-5">
              <span className="h-px w-10 bg-[#1D3FFF]" />
              Global Study Abroad Pathways
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-5">
              Your future doesn&apos;t have to be limited to <span className="text-[#1D3FFF]">one country</span>
            </h1>
            <p className="text-base md:text-lg text-[#57514A] leading-relaxed">
              Explore leading international universities and academic degrees across Asia, Europe, North America, and Oceania. Filter destinations below or consult our admissions advisors to match your academic profile, budget, and career goals.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Jump to a study destination">
              {pages.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={subpageHref(p)}
                    className="inline-flex min-h-11 items-center gap-2 border border-[#E6DDCC] bg-white px-3.5 text-sm text-[#2A2A2A] transition-all hover:border-[#1D3FFF] hover:text-[#1D3FFF] rounded-[2px]"
                  >
                    <CountryFlag country={p.name} className="h-[14px] w-[20px] rounded-[2px] object-cover" width={20} height={14} />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="relative shrink-0 aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-[#E6DDCC] bg-[#E6DDCC]/30 rounded-[2px] shadow-sm">
              <Image
                src="/images/generated/global-campus.jpg"
                alt="Diverse students on global historic university quad"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compare at a glance Table */}
      <section id="compare" className="bgl bgl-gray py-14 md:py-20 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Compare study destinations">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Academic Intake Comparison"
            headline="Compare Study Destinations at a Glance"
            description="Typical university intakes, testing requirements, and post-study opportunities across our global network."
            compact
          />
          <div className="overflow-x-auto border border-[#E6DDCC] bg-white rounded-[2px] shadow-sm">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-[#F3EBDD] text-xs uppercase tracking-wider text-[#57514A]">
                <tr>
                  {['Destination', 'Typical intakes', 'Language / tests', 'Key Academic Strengths', ''].map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pages.map((p) => (
                  <tr key={p.slug} className="border-t border-[#E6DDCC] align-top hover:bg-[#FAF8F5]/50 transition-colors">
                    <th scope="row" className="px-4 py-3.5 font-serif font-bold text-[#2A2A2A] whitespace-nowrap">
                      <span className="inline-flex items-center gap-2">
                        <CountryFlag country={p.name} className="h-[14px] w-[20px] rounded-[2px] object-cover" width={20} height={14} />
                        {p.name}
                      </span>
                    </th>
                    <td className="px-4 py-3.5 text-[#2A2A2A]">{first(p.facts, ['Typical intakes'])}</td>
                    <td className="px-4 py-3.5 text-[#2A2A2A]">{first(p.facts, ['Language tests', 'Teaching language'])}</td>
                    <td className="px-4 py-3.5 text-[#57514A]">{first(p.facts, ['Visa', 'Key industries', 'Program styles', 'Strong areas', 'Master’s length', 'Working while studying', 'Also see'])}</td>
                    <td className="px-4 py-3.5 text-right">
                      <Link
                        href={subpageHref(p)}
                        className="whitespace-nowrap text-xs uppercase tracking-widest font-semibold text-[#1D3FFF] hover:underline underline-offset-4"
                      >
                        Explore Guide →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Region Tabs & Carousel */}
      <section id="destinations-tabs" className="py-14 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Explore study destinations by region">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Explore By Region"
            headline="Featured University Study Destinations"
            description="Select a global region to explore institution profiles, degree formats, admission requirements, and scholarship opportunities."
          />
          <OtherDestinationsTabs pages={pages} />
        </div>
      </section>

      {/* 4-Step Study Abroad Guidance Roadmap */}
      <section className="bgl bgl-black py-16 md:py-24 text-white" aria-label="How we support your study application">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            dark
            eyebrow="End-to-end guidance"
            headline="How we support your university application"
            description="From initial profile evaluation to university enrolment and student visa stamping, we guide every step."
            compact
          />
          <MobileScroller dark label="How we support your application" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="h-full w-full border border-white/15 bg-white/[0.04] p-6 flex flex-col justify-between">
                <div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D3FFF] text-xs font-bold text-white mb-4">
                    {i + 1}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2.5 text-sm text-white/70 leading-relaxed">{s.text}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/10 text-[11px] uppercase tracking-wider text-white/50">
                  Step 0{i + 1} Supported
                </div>
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
