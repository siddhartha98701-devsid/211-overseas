import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '@/content/site';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MobileScroller } from '@/components/ui/MobileScroller';

export const metadata: Metadata = {
  title: 'Work & Study Abroad',
  description:
    'Work and study pathways with 211 OVERSEAS: healthcare careers in Germany, careers in the UAE, English-taught degrees in South Korea and more destinations.',
};

interface Pathway {
  title: string;
  tag: string;
  text: string;
  href: string;
  image: string;
  alt: string;
}

const WORK: Pathway[] = [
  { title: 'Work in Germany', tag: 'Healthcare careers', text: 'Language preparation, qualification recognition, interviews and visa guidance for nurses and physiotherapists.', href: '/work-in-germany', image: '/images/web/germany-wide.webp', alt: 'Historic German town centre' },
  { title: 'Work in UAE', tag: 'Multi-industry careers', text: 'Healthcare, hospitality, engineering and construction roles, with guidance on licensing and documents.', href: '/work-in-uae', image: '/images/web/uae-wide.webp', alt: 'Dubai coastline and skyline' },
];

const STUDY: Pathway[] = [
  { title: 'Study in South Korea', tag: 'English-taught programs', text: 'Bachelor’s, master’s and Korean language programs at leading universities in Seoul, Busan and beyond.', href: '/study-in-south-korea', image: '/images/web/seoul-wide.webp', alt: 'Seoul skyline at dusk' },
  { title: 'Other study destinations', tag: 'Japan · UK · USA · Canada · more', text: 'Selected study pathways across Asia, Europe, North America and Australia matched to your profile.', href: '/other-destinations', image: '/images/web/graduates-wide.webp', alt: 'Graduates throwing caps in the air' },
];

function PathwayCard({ p }: { p: Pathway }) {
  return (
    <Link
      href={p.href}
      className="group flex h-full w-full flex-col overflow-hidden border border-[#E6DDCC] bg-white transition-all hover:-translate-y-1 hover:border-[#94682B] hover:shadow-[0_12px_30px_rgba(42,42,42,0.08)]"
    >
      <div className="relative aspect-[2/1] w-full overflow-hidden bg-[#2A2A2A]">
        <Image src={p.image} alt={p.alt} fill loading="lazy" sizes="(min-width: 768px) 600px, 85vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-widest text-[#8A6020] font-medium">{p.tag}</p>
        <h3 className="mt-2 font-serif text-xl font-bold text-[#2A2A2A]">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm text-[#57514A] leading-relaxed">{p.text}</p>
        <span className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#8A6020]">
          Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function WorkAndStudyPage() {
  const steps = siteContent.howItWorks.steps.slice(0, 4);
  return (
    <>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-[#E6DDCC]" aria-label="Work and study hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium mb-4">
            <span className="h-px w-10 bg-[#B88740]" />
            Work &amp; Study
          </p>
          <h1 className="max-w-3xl font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1]">
            Two ways to build your future abroad: <span className="text-[#8A6020]">work</span> or <span className="text-[#8A6020]">study</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base md:text-lg text-[#57514A] leading-relaxed">
            Start with your profile, not a country. Pick the pathway that fits where you are today and we will guide you from eligibility to departure.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex min-h-11 items-center bg-[#94682B] hover:bg-[#7A5622] text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">Work pathways</a>
            <a href="#study" className="inline-flex min-h-11 items-center border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">Study pathways</a>
          </div>
        </div>
      </section>

      <section id="work" className="py-14 md:py-20 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Work pathways">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader eyebrow="Work abroad" headline="Work pathways" description="For qualified professionals looking at structured careers overseas." compact />
          <MobileScroller label="Work pathways" desktopClassName="md:grid-cols-2">
            {WORK.map((p) => <PathwayCard key={p.href} p={p} />)}
          </MobileScroller>
        </div>
      </section>

      <section id="study" className="bgl bgl-gray py-14 md:py-20 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Study pathways">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader eyebrow="Study abroad" headline="Study pathways" description="For students planning an undergraduate, graduate or language program overseas." compact />
          <MobileScroller label="Study pathways" desktopClassName="md:grid-cols-2">
            {STUDY.map((p) => <PathwayCard key={p.href} p={p} />)}
          </MobileScroller>
        </div>
      </section>

      <section className="bgl bgl-black py-14 md:py-20 text-white" aria-label="How it works">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader dark eyebrow="Same process, either pathway" headline="How we guide you" compact />
          <MobileScroller dark label="How we guide you" desktopClassName="md:grid-cols-4">
            {steps.map((s) => (
              <div key={s.number} className="h-full w-full border border-white/15 bg-white/[0.04] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#94682B] text-xs font-bold">{s.number}</span>
                <h3 className="mt-3 font-serif text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </MobileScroller>
        </div>
      </section>

      <CtaStrip source="work-and-study" />
      <FormSection />
    </>
  );
}
