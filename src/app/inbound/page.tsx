import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check, Globe2, BookOpen, Building, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MobileScroller } from '@/components/ui/MobileScroller';
import { FaqSection } from '@/components/sections/FaqSection';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { LeadMiniForm } from '@/components/lead/LeadMiniForm';

export const metadata: Metadata = {
  title: 'Inbound International Education & Research in India',
  description:
    'Structured inbound academic pathways for international students, researchers, and interns seeking study abroad, semester exchange, and research opportunities in India with 211 OVERSEAS.',
};

const INBOUND_BENEFITS = [
  {
    icon: Globe2,
    title: 'Globally Accredited Institutions',
    text: 'Access premier institutes, central universities, and research centers with world-class faculty and laboratories.',
  },
  {
    icon: BookOpen,
    title: '100% English-Medium Curriculum',
    text: 'All graduate, postgraduate, and professional coursework is conducted entirely in English with internationally transferable credits.',
  },
  {
    icon: ShieldCheck,
    title: 'Full Visa & FRRO Assistance',
    text: 'End-to-end support for Student Visa (S-Visa), Research Visa invitations, and mandatory FRRO registration upon arrival.',
  },
  {
    icon: Building,
    title: 'Affordable Living & Safe Campus Life',
    text: 'Modern university accommodation, on-campus dining, and dedicated international student host offices.',
  },
];

const WHO_ITS_FOR = [
  'International undergraduate and graduate students pursuing semester abroad or degree tracks in India',
  'Postdoctoral researchers and visiting scholars collaborating with Indian research institutes',
  'Medical, paramedical, and technical interns seeking clinical rotations or industrial apprenticeships',
  'NRI and diaspora youth seeking cultural immersion and academic roots exploration',
];

const INBOUND_STEPS = [
  {
    number: '01',
    title: 'Profile & Institute Matching',
    desc: 'We match your academic background and research interests with certified host institutions in India.',
  },
  {
    number: '02',
    title: 'Formal Admission & Visa Letter',
    desc: 'Issuance of formal provisional admission letter and Ministry-approved visa recommendation documents.',
  },
  {
    number: '03',
    title: 'Student Visa (S-Visa) Processing',
    desc: 'Complete guidance on submission to Indian embassies/consulates worldwide for fast-track visa issuance.',
  },
  {
    number: '04',
    title: 'Arrival, FRRO & Campus Onboarding',
    desc: 'Airport reception, foreign regional registration (FRRO) filing, hostel check-in, and local orientation.',
  },
];

const INBOUND_FAQS = [
  {
    q: 'Can international students study full degrees in India through 211 OVERSEAS?',
    a: 'Yes. We assist international students with direct admissions into bachelor’s, master’s, PhD, and short-term study abroad or semester exchange programs across recognized Indian universities.',
  },
  {
    q: 'What type of visa is required for studying in India?',
    a: 'International students require an official Student Visa (S-Visa) or Research Visa issued by the Indian Embassy or High Commission in their home country, backed by an official university admission offer letter.',
  },
  {
    q: 'Is English proficiency proof needed?',
    a: 'Yes, basic English proficiency (IELTS, TOEFL, or official certification of prior English-medium education) is required since university instruction is conducted in English.',
  },
  {
    q: 'How does 211 OVERSEAS assist with FRRO registration?',
    a: 'All foreign nationals staying in India for more than 180 days on a student visa must register with the Foreigners Regional Registration Office (e-FRRO) within 14 days of arrival. Our team handles the documentation and online filing.',
  },
];

export default function InboundPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-14 md:pt-40 md:pb-20 border-b border-[#E6DDCC]" aria-label="Inbound education hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#57514A]">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-[#1D3FFF]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#2A2A2A] font-medium">Inbound Education &amp; Research</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#1D3FFF] font-semibold mb-4">
                <span className="h-px w-8 bg-[#1D3FFF]" />
                Inbound Global Programs
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1]">
                Study &amp; Research in India: <span className="text-[#1D3FFF]">Inbound Pathways</span>
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#57514A] leading-relaxed max-w-2xl">
                211 OVERSEAS bridges international students, visiting researchers, and global scholars with premier academic institutions and research ecosystems across India.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#inbound-form"
                  className="btn-shine bg-[#1D3FFF] hover:bg-[#1532D4] text-white px-7 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors inline-flex items-center"
                >
                  Apply for Inbound Guidance
                </a>
                <a
                  href="#how-it-works"
                  className="border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-7 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  How it works
                </a>
              </div>

              {/* Inbound hero photo */}
              <div className="mt-8 relative aspect-[16/9] w-full overflow-hidden rounded-[3px] border border-[#E6DDCC] bg-[#FAF8F5] shadow-sm">
                <Image
                  src="/images/generated/global-campus.jpg"
                  alt="International students and researchers collaborating on campus grounds"
                  fill
                  priority
                  sizes="(min-width: 1024px) 720px, 92vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quick Callback Widget */}
            <aside className="lg:col-span-5 bg-white border-t-4 border-[#1D3FFF] p-6 sm:p-7 shadow-[0_20px_50px_rgba(42,42,42,0.08)]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#1D3FFF] font-semibold">Inbound Desk</p>
              <h2 className="mt-1 mb-1 font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A]">Request Information</h2>
              <p className="mb-5 text-sm text-[#57514A]">Connect with our inbound advisory desk for international students.</p>
              <LeadMiniForm interest="Inbound Programs & Research" source="inbound-page" />
            </aside>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-14 md:py-20 border-b border-[#E6DDCC] bg-white" aria-label="Why study in India">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Key Advantages"
            headline="Why Choose Inbound Education in India?"
            description="India offers world-ranked STEM education, extensive clinical case exposures, cutting-edge tech innovation, and deeply affordable living costs."
            compact
          />
          <MobileScroller label="Inbound benefits" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {INBOUND_BENEFITS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="h-full w-full border border-[#E6DDCC] bg-white p-6 hover:border-[#1D3FFF] transition-colors">
                <span className="flex h-11 w-11 items-center justify-center bg-[#1D3FFF] text-white">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#2A2A2A]">{title}</h3>
                <p className="mt-2 text-sm text-[#57514A] leading-relaxed">{text}</p>
              </div>
            ))}
          </MobileScroller>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bgl bgl-gray py-14 md:py-20 border-b border-[#E6DDCC]" aria-label="Who can apply for inbound">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Candidate Profiles"
            headline="Who Can Connect with Our Inbound Desk"
            description="Our inbound team facilitates individual scholars as well as institutional bilateral exchange partnerships."
            compact
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {WHO_ITS_FOR.map((item) => (
              <li key={item} className="flex items-start gap-3 bg-white p-5 border border-[#E6DDCC]">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1D3FFF] text-white">
                  <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                </span>
                <span className="text-sm text-[#2A2A2A] leading-relaxed font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bgl bgl-black py-16 md:py-24 text-white" aria-label="Inbound process">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            dark
            eyebrow="Step-by-step roadmap"
            headline="Your Inbound Journey in 4 Steps"
            description="We simplify foreign documentation, institution clearances, and embassy visa protocols."
            compact
          />
          <MobileScroller dark label="Inbound steps" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {INBOUND_STEPS.map((s) => (
              <div key={s.number} className="h-full w-full border border-white/15 bg-white/[0.04] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1D3FFF] text-white text-xs font-bold">
                  {s.number}
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </MobileScroller>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection items={INBOUND_FAQS} headline="Frequently asked questions about Inbound study" />

      {/* Form Section */}
      <div id="inbound-form">
        <CtaStrip source="inbound-page" interest="Inbound Programs & Research" />
        <FormSection />
      </div>
    </>
  );
}
