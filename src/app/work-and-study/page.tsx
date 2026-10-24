import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MobileScroller } from '@/components/ui/MobileScroller';
import { WorkPathwaysInteractive } from './WorkPathwaysInteractive';
import { ShieldCheck, UserCheck, Briefcase, PlaneTakeoff, Award, Globe2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Work Abroad | International Careers & Work Visas',
  description:
    'Structured international career pathways: healthcare licensing in Germany, multi-sector careers in the UAE, skilled worker visas in the UK, Japan, Singapore, and Australia. 211 OVERSEAS.',
};

const WORK_PROCESS_STEPS = [
  {
    number: '01',
    title: 'Eligibility & Profile Assessment',
    description: 'We evaluate your degree, clinical or technical work history, licensing prerequisites, and required language proficiency for target jurisdictions.',
    icon: UserCheck,
  },
  {
    number: '02',
    title: 'Credential Recognition & Licensing',
    description: 'Full assistance with Defizitbescheid, DHA/MOH DataFlow, NMC, or VETASSESS primary source document verification and translations.',
    icon: Award,
  },
  {
    number: '03',
    title: 'Employer Interviews & Selection',
    description: 'Technical CV optimization, targeted interview coaching, and scheduling interviews with accredited international healthcare and corporate employers.',
    icon: Briefcase,
  },
  {
    number: '04',
    title: 'Work Visa & Pre-Departure',
    description: 'Work permit filing, embassy document compliance, biometric booking, and pre-departure briefings for a seamless relocation.',
    icon: PlaneTakeoff,
  },
];

const WORK_ADVANTAGES = [
  {
    title: 'Accredited Healthcare & Skill Tracks',
    desc: 'Direct tie-ins with certified employers and licensing bodies in Germany, UAE, and the UK.',
  },
  {
    title: 'Structured Language & Interview Prep',
    desc: 'Goethe B1/B2 training, technical vocabulary, and mock interviews tailored to international standards.',
  },
  {
    title: 'Legal Work Sponsorships',
    desc: 'Direct employer contracts, registered certificates of sponsorship, and long-term residency pathways.',
  },
  {
    title: '100% Transparent Timelines',
    desc: 'Clear breakdown of verification fees, translation requirements, and verified embassy timelines.',
  },
];

export default function WorkAndStudyPage() {
  return (
    <>
      {/* Work Abroad Hero Section with Scenic Image */}
      <section className="pt-24 pb-12 md:pt-36 md:pb-16 border-b border-[#E6DDCC] bg-[#FAF8F5]" aria-label="Work abroad hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#0C3844] font-semibold mb-4">
              <span className="h-px w-10 bg-[#0C3844]" />
              Work Abroad · Professional International Careers
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1]">
              Build your international career: <span className="text-[#0C3844]">work visas</span> &amp; professional placements
            </h1>
            <p className="mt-5 text-base md:text-lg text-[#57514A] leading-relaxed">
              Direct career routes for qualified professionals. We handle your eligibility evaluation, credential equivalence, language preparation, employer interviews, and embassy work visa filings across Europe, the Middle East, and Asia-Pacific.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="#pathways"
                className="btn-shine inline-flex min-h-11 items-center bg-[#0C3844] hover:bg-[#08262E] text-white px-7 text-xs uppercase tracking-widest font-semibold transition-colors rounded-[2px]"
              >
                Explore Work Pathways
              </a>
              <Link
                href="/contact?interest=Work+in+Other+Countries#enquiry-form"
                className="inline-flex min-h-11 items-center border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-7 text-xs uppercase tracking-widest font-semibold transition-colors rounded-[2px]"
              >
                Book Free Assessment
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative shrink-0 aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-[#E6DDCC] bg-white rounded-[2px] shadow-sm">
              <Image
                src="/images/generated/global-campus.jpg"
                alt="International professionals and graduates collaborating globally"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

          {/* Quick Value Metrics Strip */}
          <div className="mt-14 pt-8 border-t border-[#E6DDCC] grid grid-cols-2 md:grid-cols-4 gap-6">
            {WORK_ADVANTAGES.map((adv) => (
              <div key={adv.title} className="flex flex-col">
                <span className="font-serif text-sm md:text-base font-bold text-[#2A2A2A]">{adv.title}</span>
                <span className="mt-1 text-xs text-[#57514A] leading-relaxed">{adv.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Work Pathways with Sticky Country Tabs & Staggered Scroll Cards */}
      <section id="pathways" className="py-14 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="International work pathways">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Global Work Pathways"
            headline="Accredited International Job Opportunities"
            description="Explore verified employment and visa categories across Germany, the UAE, United Kingdom, Japan, Singapore, and Australia."
            image={{
              src: '/images/web/germany-wide.webp',
              alt: 'Professional global business and healthcare centers',
              caption: '211 OVERSEAS · Professional Global Relocation',
            }}
          />

          <WorkPathwaysInteractive />
        </div>
      </section>

      {/* 4-Step Professional Work Relocation Process */}
      <section className="bgl bgl-black py-16 md:py-24 text-white" aria-label="How our work pathway operates">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            dark
            eyebrow="Step-by-step roadmap"
            headline="How our professional work pathway operates"
            description="Every candidate is guided through a transparent four-stage process from credential verification to overseas arrival."
            compact
          />
          <MobileScroller dark label="Work transition process" desktopClassName="md:grid-cols-4">
            {WORK_PROCESS_STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.number} className="h-full w-full border border-white/15 bg-white/[0.04] p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0C3844] text-xs font-bold text-white">
                        {s.number}
                      </span>
                      <Icon size={20} className="text-[#0C3844]" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2.5 text-sm text-white/70 leading-relaxed">{s.description}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/10 text-[11px] uppercase tracking-wider text-white/50">
                    Phase {s.number} Verified
                  </div>
                </div>
              );
            })}
          </MobileScroller>
        </div>
      </section>

      <CtaStrip interest="Work in Other Countries" source="work-and-study" />
      <FormSection />
    </>
  );
}
