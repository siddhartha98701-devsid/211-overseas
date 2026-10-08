import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MobileScroller } from '@/components/ui/MobileScroller';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';

export const metadata: Metadata = {
  title: 'Work in Germany',
  description:
    'Healthcare careers in Germany for nurses and physiotherapists. Structured pathways with language training, qualification recognition and visa support. 211 OVERSEAS Ahmedabad.',
};

export default function GermanyPage() {
  const { germany } = siteContent;
  const pathways = [
    { ...germany.nurses, href: '/work-in-germany/nurses', cta: 'Check nursing eligibility' },
    { ...germany.physio, href: '/work-in-germany/physiotherapists', cta: 'Check physiotherapy eligibility' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-16 border-b border-[#E6DDCC]" aria-label="Germany hero">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium mb-4">
              <span className="h-px w-10 bg-[#B88740]" />
              Work &amp; Study · Healthcare careers
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-4">
              Work in <span className="text-[#8A6020]">Germany</span>
            </h1>
            <p className="text-base md:text-lg text-[#57514A] leading-relaxed">{germany.hero.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#enquiry-form" className="btn-shine inline-flex min-h-11 items-center bg-[#94682B] hover:bg-[#7A5622] text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                Apply for free counselling
              </a>
              <a href="#pathways" className="inline-flex min-h-11 items-center border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                See pathways
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[2/1] lg:aspect-[4/3] w-full overflow-hidden bg-[#E6DDCC]/30">
              <Image src="/images/web/germany-wide.webp" alt="Historic German town in soft natural light" fill priority sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Nurses & physiotherapists */}
      <section id="pathways" className="py-14 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Healthcare pathways">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Healthcare pathways"
            headline="Structured pathways for healthcare professionals"
            description="Germany offers regulated, supportive career transitions for international nurses and physiotherapists."
            compact
          />
          <MobileScroller label="Healthcare pathways" desktopClassName="md:grid-cols-2">
            {pathways.map((p) => (
              <article key={p.title} className="flex h-full w-full flex-col border border-[#E6DDCC] bg-white p-6 sm:p-8">
                <p className="text-xs uppercase tracking-widest text-[#8A6020] font-medium">{p.tag}</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-[#2A2A2A]">{p.title}</h3>
                <p className="mt-3 text-sm text-[#57514A] leading-relaxed">{p.description}</p>
                <ol className="mt-5 flex-1 divide-y divide-[#E6DDCC]/70 border-t border-[#E6DDCC]">
                  {p.steps.map((step, i) => (
                    <li key={step} className="flex items-center justify-between py-2.5">
                      <span className="text-sm text-[#2A2A2A]">{step}</span>
                      <span className="font-serif text-xs text-[#A47434]">{String(i + 1).padStart(2, '0')}</span>
                    </li>
                  ))}
                </ol>
                <Link href={p.href} className="btn-shine mt-6 inline-flex min-h-11 items-center justify-center bg-[#94682B] hover:bg-[#7A5622] text-white px-6 text-xs uppercase tracking-widest font-medium transition-colors">
                  {p.cta}
                </Link>
              </article>
            ))}
          </MobileScroller>
          <p className="mt-8 text-sm text-[#57514A]">
            Prefer to study abroad instead?{' '}
            <Link href="/work-and-study#study" className="text-[#8A6020] underline underline-offset-2">See study pathways</Link>
          </p>
        </div>
      </section>

      <CtaStrip interest="Work in Germany – Nursing" source="work-in-germany" />
      <FormSection />
    </>
  );
}
