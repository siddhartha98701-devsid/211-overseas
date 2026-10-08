import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ClipboardCheck, Eye, FileCheck2, GraduationCap, HeartPulse, Globe2, Building2, type LucideIcon } from 'lucide-react';
import { siteContent } from '@/content/site';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { WhoCanConnectSection } from '@/components/sections/WhoCanConnectSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MobileScroller } from '@/components/ui/MobileScroller';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'About 211 OVERSEAS - Ahmedabad-based international education and overseas career consultancy helping students and professionals explore opportunities beyond India.',
};

const FOCUS: { icon: LucideIcon; title: string; text: string; href: string }[] = [
  { icon: GraduationCap, title: 'Study in South Korea', text: 'English-taught bachelor’s, master’s and Korean language programs, from course matching to visa documentation.', href: '/study-in-south-korea' },
  { icon: HeartPulse, title: 'Healthcare careers in Germany', text: 'Eligibility checks, German language preparation, qualification recognition and interview support for nurses and physiotherapists.', href: '/work-in-germany' },
  { icon: Building2, title: 'Career opportunities in the UAE', text: 'Guidance for healthcare, hospitality and engineering professionals exploring roles in the UAE.', href: '/work-in-uae' },
  { icon: Globe2, title: 'Other destinations', text: 'Selected study and work pathways in Japan, Taiwan, Singapore, the UK, USA, Canada, Australia and Europe.', href: '/other-destinations' },
];

const PRINCIPLES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: ClipboardCheck, title: 'Profile first', text: 'We look at your academics, goals, budget and language readiness before suggesting any country.' },
  { icon: Eye, title: 'Transparent guidance', text: 'Clear answers on process, documents, timelines and costs, with no promises we cannot keep.' },
  { icon: FileCheck2, title: 'Hands-on support', text: 'Applications, documentation, recognition and visa paperwork handled step by step.' },
];

export default function AboutPage() {
  const { about } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-20 border-b border-[#E6DDCC]" aria-label="About hero">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium mb-5">
              <span className="h-px w-10 bg-[#B88740]" />
              About 211 OVERSEAS
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-5">
              Understand the candidate first. Recommend the pathway second.
            </h1>
            <p className="text-base md:text-lg text-[#57514A] leading-relaxed">{about.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact#enquiry-form" className="btn-shine inline-flex min-h-11 items-center bg-[#94682B] hover:bg-[#7A5622] text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                Talk to a counsellor
              </Link>
              <Link href="/#process" className="inline-flex min-h-11 items-center border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                How it works
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E6DDCC]/30">
              <Image
                src="/images/guidance.jpg"
                alt="Students discussing international education opportunities with an advisor"
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 md:py-24 border-b border-[#E6DDCC]" aria-label="Our philosophy">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader eyebrow="Our guiding principle" headline="A transparent, profile-first methodology" compact />
          <blockquote className="max-w-3xl font-serif text-xl sm:text-2xl font-semibold text-[#2A2A2A] leading-snug">
            &ldquo;{about.focus}&rdquo;
          </blockquote>
          <p className="mt-5 max-w-3xl text-base text-[#57514A] leading-relaxed">
            Different students and working professionals need different international pathways. Rather than selling destinations by
            quota, our guidance begins with academic background, career aspirations, financial parameters and language readiness.
          </p>
          <div className="mt-10">
            <MobileScroller label="How we work" desktopClassName="md:grid-cols-3">
              {PRINCIPLES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="h-full border border-[#E6DDCC] bg-white p-6">
                  <Icon size={26} strokeWidth={1.5} className="text-[#A47434]" aria-hidden="true" />
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#2A2A2A]">{title}</h3>
                  <p className="mt-2 text-sm text-[#57514A] leading-relaxed">{text}</p>
                </div>
              ))}
            </MobileScroller>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="bgl bgl-gray py-14 md:py-24 border-b border-[#E6DDCC]" aria-label="Focus areas">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader eyebrow="What we do" headline="Four specialised focus areas" compact />
          <MobileScroller label="Focus areas" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {FOCUS.map(({ icon: Icon, title, text, href }, i) => (
              <Link
                key={title}
                href={href}
                className="group flex h-full flex-col border border-[#E6DDCC] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#94682B] hover:shadow-[0_12px_30px_rgba(42,42,42,0.08)]"
              >
                <span className="flex items-center justify-between">
                  <Icon size={26} strokeWidth={1.5} className="text-[#A47434]" aria-hidden="true" />
                  <span className="font-serif text-sm text-[#A47434]">0{i + 1}</span>
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#2A2A2A]">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-[#57514A] leading-relaxed">{text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#8A6020]">
                  Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </MobileScroller>
        </div>
      </section>

      {/* Vision */}
      <section className="bgl bgl-black py-14 md:py-24 text-white" aria-label="Our vision">
        <div className="max-w-[1280px] mx-auto px-6">
          <p className="text-xs uppercase tracking-widest font-medium mb-3 text-[#D1A95F]">Our vision</p>
          <p className="max-w-3xl font-serif text-2xl sm:text-3xl md:text-4xl font-semibold leading-[1.2] tracking-tight">
            &ldquo;{about.vision}&rdquo;
          </p>
        </div>
      </section>

      <WhoCanConnectSection />
      <CtaStrip source="about" />
      <FormSection />
    </>
  );
}
