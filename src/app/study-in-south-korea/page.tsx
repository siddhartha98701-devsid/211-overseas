import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MobileScroller } from '@/components/ui/MobileScroller';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { KoreaHighlights } from '@/components/sections/KoreaHighlights';
import { ProgramFinderSection } from '@/components/sections/ProgramFinderSection';
import { EligibilitySection } from '@/components/sections/EligibilitySection';

export const metadata: Metadata = {
  title: 'Study in South Korea',
  description:
    'Explore top universities, scholarships, and programs in South Korea. Bachelor\'s, Master\'s, Korean Language and English-taught programs. 211 OVERSEAS Ahmedabad.',
};

const UNIVERSITY_FACTORS = [
  {
    factor: 'Academic Eligibility & Profile Match',
    desc: 'Matching your GPA, previous coursework and test results with university-specific minimums.',
  },
  {
    factor: 'Language of Instruction',
    desc: 'Evaluating 100% English-taught tracks vs. bilingual or Korean-taught degrees.',
  },
  {
    factor: 'Scholarships & Tuition Subsidies',
    desc: 'Assessing eligibility for GKS (Global Korea Scholarship) and direct university merit waivers.',
  },
  {
    factor: 'Campus Location & Industry Ties',
    desc: 'Proximity to tech clusters in Seoul, Daejeon, Busan, and Ulsan for internships and research.',
  },
  {
    factor: 'Total Living Costs & Financial Planning',
    desc: 'Factoring in dormitory accommodation, health insurance, and part-time work permissions.',
  },
  {
    factor: 'Post-Graduation Visa & Career Prospects',
    desc: 'Understanding the D-10 job seeker and E-7 professional work visa pathways in Korea.',
  },
];

const CARD = 'flex h-full w-full flex-col border border-[#E6DDCC] bg-white';

const LEVEL_LINKS = [
  { key: 'korean', href: '/study-in-south-korea/korean-language', cta: 'Language program details' },
  { key: 'bachelors', href: '/study-in-south-korea/bachelors', cta: 'Bachelor’s program details' },
  { key: 'masters', href: '/study-in-south-korea/masters', cta: 'Master’s program details' },
] as const;

export default function SouthKoreaPage() {
  const { southKorea } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-16 border-b border-[#E6DDCC]" aria-label="South Korea hero">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium mb-4">
              <span className="h-px w-10 bg-[#B88740]" />
              Featured study destination
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-4">
              Study in <span className="text-[#8A6020]">South Korea</span>
            </h1>
            <p className="text-base md:text-lg text-[#57514A] leading-relaxed">{southKorea.hero.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#eligibility" className="btn-shine inline-flex min-h-11 items-center bg-[#94682B] hover:bg-[#7A5622] text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                Check my eligibility
              </a>
              <a href="#programs" className="inline-flex min-h-11 items-center border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                Find a program
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[16/10] lg:aspect-[4/5] w-full overflow-hidden bg-[#2A2A2A]">
              <Image
                src="/images/web/seoul-tower.webp"
                alt="Seoul skyline and N Seoul Tower at dusk"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 quick eligibility questions, straight after the intro */}
      <EligibilitySection />

      <KoreaHighlights showDisciplines={false} />

      {/* Why study in South Korea */}
      <section className="py-14 md:py-24 border-b border-[#E6DDCC]" aria-label="Why study in South Korea">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Why South Korea"
            headline="Why study in South Korea?"
            description="World-class technology infrastructure combined with globally recognised academic rigour."
            compact
          />
          <MobileScroller label="Reasons to study in South Korea" desktopClassName="md:grid-cols-2 lg:grid-cols-3">
            {southKorea.whyStudy.points.map((point, i) => (
              <div key={point.title} className={`${CARD} p-6`}>
                <span className="font-serif text-sm text-[#A47434]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-serif text-lg font-bold text-[#2A2A2A] leading-snug">{point.title}</h3>
                <p className="mt-2 text-sm text-[#57514A] leading-relaxed">{point.description}</p>
              </div>
            ))}
          </MobileScroller>
        </div>
      </section>

      {/* Leading universities */}
      <section className="bgl bgl-gray py-14 md:py-24 border-b border-[#E6DDCC]" aria-label="Universities">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Universities"
            headline="Leading South Korean universities to explore"
            description="Renowned public and private research universities known for engineering, business, sciences and innovation."
            compact
          />
          <MobileScroller label="Universities" desktopClassName="md:grid-cols-2 lg:grid-cols-3">
            {[
              ...southKorea.universities.map((u) => ({ name: u.name, abbr: u.abbr, full: 'fullName' in u ? (u.fullName as string) : undefined, description: u.description })),
              { name: 'And many more', abbr: '+', full: undefined, description: 'We guide students across additional specialised and private universities tailored to individual academic profiles.' },
            ].map((u) => (
              <article key={u.name} className={`${CARD} overflow-hidden`}>
                <div className="relative flex h-24 items-center justify-center overflow-hidden bg-[#2A2A2A]">
                  <Image src="/images/web/seoul-city.webp" alt="" fill sizes="(min-width: 1024px) 400px, 85vw" className="object-cover opacity-25" />
                  <span aria-hidden="true" className="relative z-10 flex h-14 min-w-14 items-center justify-center rounded-full border border-[#D1A95F] bg-black/60 px-3 font-serif text-sm font-bold text-[#D1A95F]">
                    {u.abbr}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-lg font-bold text-[#2A2A2A] leading-snug">{u.name}</h3>
                  {u.full && <p className="text-xs text-[#57514A]">{u.full}</p>}
                  <p className="mt-2 text-sm text-[#57514A] leading-relaxed">{u.description}</p>
                </div>
              </article>
            ))}
          </MobileScroller>

          <div className="mt-10 border-t border-[#D8CCB5] pt-8">
            <h3 className="font-serif text-xl font-bold text-[#2A2A2A] mb-5">Key factors when selecting your university</h3>
            <MobileScroller label="University selection factors" desktopClassName="md:grid-cols-2 lg:grid-cols-3">
              {UNIVERSITY_FACTORS.map((item) => (
                <div key={item.factor} className={`${CARD} p-5`}>
                  <h4 className="font-medium text-sm text-[#2A2A2A] mb-1">{item.factor}</h4>
                  <p className="text-sm text-[#57514A] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </MobileScroller>
            <Link
              href="/contact?interest=Study+in+South+Korea#enquiry-form"
              className="mt-8 inline-flex min-h-11 items-center bg-[#94682B] hover:bg-[#7A5622] text-white px-8 text-xs uppercase tracking-widest font-medium transition-colors"
            >
              Find universities for my profile
            </Link>
          </div>
        </div>
      </section>

      {/* Programme levels (the single "choose your route" section) */}
      <section id="routes" className="py-14 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Choose your study route">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Programme levels"
            headline="Choose your study route"
            description="Start with Korean language, an undergraduate degree or a master’s. See requirements and next steps for each."
            compact
          />
          <MobileScroller label="Programme levels" desktopClassName="md:grid-cols-3">
            {LEVEL_LINKS.map(({ key, href, cta }) => (
              <div key={key} className={`${CARD} p-6`}>
                <h3 className="font-serif text-xl font-bold text-[#2A2A2A] mb-3">{southKorea.programs[key].title}</h3>
                <p className="flex-1 text-sm text-[#57514A] leading-relaxed mb-6">{southKorea.programs[key].description}</p>
                <Link href={href} className="inline-flex min-h-11 items-center text-xs uppercase tracking-widest text-[#8A6020] hover:text-[#2A2A2A] font-medium">
                  {cta} →
                </Link>
              </div>
            ))}
          </MobileScroller>
        </div>
      </section>

      {/* Process */}
      <section className="bgl bgl-black py-14 md:py-24 text-white" aria-label="South Korea process">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader dark eyebrow="How it works" headline="Our South Korea process" description="A structured 8-stage roadmap to admission and visa issuance." compact />
          <MobileScroller dark label="South Korea process" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {southKorea.process.map((step) => (
              <div key={step.number} className="h-full w-full border border-white/15 bg-white/[0.04] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#94682B] text-xs font-bold text-white">{step.number}</span>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug">{step.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </MobileScroller>
          <Link
            href="/contact?interest=Study+in+South+Korea#enquiry-form"
            className="mt-8 inline-flex min-h-11 items-center bg-[#94682B] hover:bg-[#7A5622] text-white px-8 text-xs uppercase tracking-widest font-medium transition-colors"
          >
            Check my South Korea eligibility
          </Link>
        </div>
      </section>

      <ProgramFinderSection />
      <CtaStrip interest="Study in South Korea" source="study-in-south-korea" />
      <FormSection />
    </>
  );
}
