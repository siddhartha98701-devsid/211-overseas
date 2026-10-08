import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Ban,
  BadgeCheck,
  Building2,
  Clock,
  Eye,
  FileCheck2,
  Globe2,
  GraduationCap,
  HeartPulse,
  Lock,
  MapPin,
  Phone,
  ScrollText,
  type LucideIcon,
} from 'lucide-react';
import { siteContent } from '@/content/site';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { FaqSection } from '@/components/sections/FaqSection';
import { WhoCanConnectSection } from '@/components/sections/WhoCanConnectSection';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MobileScroller } from '@/components/ui/MobileScroller';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { whatsappLink } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    '211 OVERSEAS is an independent, Ahmedabad-based study abroad and overseas career consultancy. Meet our profile-first approach, what we promise, what we never do, and where to find us.',
};

const FOCUS: { icon: LucideIcon; title: string; text: string; href: string }[] = [
  { icon: GraduationCap, title: 'Study in South Korea', text: 'English-taught bachelor’s, master’s and Korean language programs, from course matching to visa documentation.', href: '/study-in-south-korea' },
  { icon: HeartPulse, title: 'Healthcare careers in Germany', text: 'Eligibility checks, German language preparation, qualification recognition and interview support for nurses and physiotherapists.', href: '/work-in-germany' },
  { icon: Building2, title: 'Careers in the UAE', text: 'Guidance for healthcare, hospitality and engineering professionals exploring roles in the UAE.', href: '/work-in-uae' },
  { icon: Globe2, title: 'Other destinations', text: 'Selected study pathways in Japan, Taiwan, Singapore, the UK, USA, Canada, Australia and Europe.', href: '/other-destinations' },
];

const PRINCIPLES: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: BadgeCheck, title: 'Profile first, country second', text: 'We assess your academics, goals, budget and language readiness before recommending anything, so advice fits you rather than a quota.' },
  { icon: Eye, title: 'Clear about process and costs', text: 'You get straight answers on steps, documents, timelines and likely costs before you commit to anything.' },
  { icon: FileCheck2, title: 'Hands-on with the paperwork', text: 'Applications, documentation, recognition and visa paperwork are handled step by step, with you in the loop.' },
  { icon: Lock, title: 'Your data stays with you', text: 'We only contact you with your consent and use your details to process your profile. Our Privacy Policy explains how.' },
];

const WE_DO = [
  'Review your profile honestly and tell you which options are realistic',
  'Explain eligibility, language and documentation requirements up front',
  'Guide applications, recognition and visa paperwork from start to finish',
  'Keep you updated at every stage, on call or WhatsApp',
];
const WE_NEVER = [
  'Guarantee admission, a job offer or a visa. Those decisions belong to universities, employers and embassies',
  'Push a country because of commissions or quotas',
  'Ask you to submit documents that are not genuine',
  'Share your details without your consent',
];

const POLICIES = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Refund & Cancellation', href: '/refund-policy' },
];

export default function AboutPage() {
  const { about, brand, howItWorks } = siteContent;
  const phoneHref = `tel:${brand.phone.replace(/\s/g, '')}`;

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
              Honest guidance for students and professionals going <span className="text-[#8A6020]">abroad</span>
            </h1>
            <p className="text-base md:text-lg text-[#57514A] leading-relaxed">{about.description}</p>
            <p className="mt-4 text-base text-[#57514A] leading-relaxed">
              We are an independent consultancy, and mentioning a university or country never implies an affiliation or endorsement. Our focus is
              simple: understand the candidate first, recommend the pathway second.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact#enquiry-form" className="btn-shine inline-flex min-h-11 items-center bg-[#94682B] hover:bg-[#7A5622] text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                Talk to a counsellor
              </Link>
              <a href="#visit" className="inline-flex min-h-11 items-center border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                Visit our office
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E6DDCC]/30">
              <Image src="/images/web/graduates-square.webp" alt="Graduates celebrating together" fill priority sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact facts bar: the trust basics up front */}
      <section className="bgl bgl-black text-white" aria-label="Contact details">
        <ul className="max-w-[1280px] mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <li className="flex items-start gap-3">
            <MapPin size={20} className="mt-0.5 shrink-0 text-[#D1A95F]" aria-hidden="true" />
            <span className="text-sm text-white/80">{brand.address}</span>
          </li>
          <li className="flex items-center gap-3">
            <Phone size={20} className="shrink-0 text-[#D1A95F]" aria-hidden="true" />
            <a href={phoneHref} className="text-sm text-white/80 hover:text-[#D1A95F]">{brand.phone}</a>
          </li>
          <li className="flex items-center gap-3">
            <Clock size={20} className="shrink-0 text-[#D1A95F]" aria-hidden="true" />
            <span className="text-sm text-white/80">Mon – Sat, 10:00 AM – 7:00 PM IST</span>
          </li>
        </ul>
      </section>

      {/* What we promise */}
      <section className="py-14 md:py-24 border-b border-[#E6DDCC]" aria-label="Our principles">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader eyebrow="How we work" headline="Four promises we make to every candidate" compact />
          <MobileScroller label="Our principles" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {PRINCIPLES.map(({ icon: Icon, title, text }) => (
              <div key={title} className="h-full w-full border border-[#E6DDCC] bg-white p-6">
                <span className="flex h-12 w-12 items-center justify-center bg-black text-[#D1A95F]">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#2A2A2A] leading-snug">{title}</h3>
                <p className="mt-2 text-sm text-[#57514A] leading-relaxed">{text}</p>
              </div>
            ))}
          </MobileScroller>
        </div>
      </section>

      {/* What we do / never do */}
      <section className="bgl bgl-gray py-14 md:py-24 border-b border-[#E6DDCC]" aria-label="What we do and never do">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader eyebrow="Transparency" headline="What you can expect, and what we will never do" description="Study and work abroad decisions are big. Here is exactly where we stand." compact />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#E6DDCC] bg-white p-6 sm:p-8">
              <h3 className="font-serif text-xl font-bold text-[#2A2A2A]">We will</h3>
              <ul className="mt-4 space-y-3">
                {WE_DO.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[#2A2A2A]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#94682B] text-white text-xs font-bold" aria-hidden="true">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border border-[#2A2A2A] bg-[#2A2A2A] p-6 sm:p-8 text-white">
              <h3 className="font-serif text-xl font-bold">We will never</h3>
              <ul className="mt-4 space-y-3">
                {WE_NEVER.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-white/85">
                    <Ban size={18} className="mt-0.5 shrink-0 text-[#D1A95F]" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-14 md:py-24 border-b border-[#E6DDCC]" aria-label="What we do">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader eyebrow="What we do" headline="Four specialised focus areas" description={about.vision} compact />
          <MobileScroller label="Focus areas" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {FOCUS.map(({ icon: Icon, title, text, href }, i) => (
              <Link
                key={title}
                href={href}
                className="group flex h-full w-full flex-col border border-[#E6DDCC] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#94682B] hover:shadow-[0_12px_30px_rgba(42,42,42,0.08)]"
              >
                <span className="flex items-center justify-between">
                  <Icon size={26} strokeWidth={1.5} className="text-[#A47434]" aria-hidden="true" />
                  <span className="font-serif text-sm text-[#A47434]">0{i + 1}</span>
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-[#2A2A2A]">{title}</h3>
                <p className="mt-2 flex-1 text-sm text-[#57514A] leading-relaxed">{text}</p>
                <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#8A6020]">
                  Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </MobileScroller>
        </div>
      </section>

      {/* Process */}
      <section className="bgl bgl-black py-14 md:py-24 text-white" aria-label="Our process">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader dark eyebrow="Our process" headline="From first call to departure, in 7 steps" compact />
          <MobileScroller dark label="Our process" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.steps.map((s) => (
              <div key={s.number} className="h-full w-full border border-white/15 bg-white/[0.04] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#94682B] text-xs font-bold">{s.number}</span>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </MobileScroller>
        </div>
      </section>

      <WhoCanConnectSection />

      {/* Visit us */}
      <section id="visit" className="bgl bgl-gray py-14 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Visit our office">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Visit us" headline="Meet the team in Ahmedabad" description="Prefer to talk in person? Book a visit and we will make time for you and your family." compact />
            <ul className="space-y-4 text-[#2A2A2A]">
              <li className="flex items-start gap-3"><MapPin size={20} className="mt-0.5 shrink-0 text-[#A47434]" aria-hidden="true" />{brand.address}</li>
              <li className="flex items-center gap-3"><Phone size={20} className="shrink-0 text-[#A47434]" aria-hidden="true" /><a href={phoneHref} className="hover:text-[#8A6020]">{brand.phone}</a></li>
              <li className="flex items-center gap-3"><Clock size={20} className="shrink-0 text-[#A47434]" aria-hidden="true" />Mon – Sat, 10:00 AM – 7:00 PM IST</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={whatsappLink('Hi 211 OVERSEAS, I would like to book an office visit.')} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 bg-[#94682B] hover:bg-[#7A5622] text-white px-6 text-xs uppercase tracking-widest font-medium transition-colors">
                <WhatsAppIcon size={16} /> Book a visit
              </a>
              <Link href="/contact" className="inline-flex min-h-11 items-center border border-[#2A2A2A] px-6 text-xs uppercase tracking-widest font-medium text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white transition-colors">
                Contact page
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="aspect-[4/3] w-full overflow-hidden border border-[#E6DDCC] bg-[#F3EBDD]">
              <iframe
                title="211 OVERSEAS office location on Google Maps"
                src={`https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-12 md:py-16 border-b border-[#E6DDCC]" aria-label="Policies and disclaimer">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-start gap-4">
            <ScrollText size={26} strokeWidth={1.5} className="mt-1 shrink-0 text-[#A47434]" aria-hidden="true" />
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A]">Policies you can read before you decide</h2>
              <p className="mt-3 max-w-3xl text-sm text-[#57514A] leading-relaxed">{siteContent.footer.disclaimer}</p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {POLICIES.map((p) => (
                  <li key={p.href}>
                    <Link href={p.href} className="inline-flex min-h-11 items-center border border-[#E6DDCC] bg-white px-4 text-sm text-[#2A2A2A] hover:border-[#94682B] hover:text-[#8A6020] transition-colors">
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FaqSection limit={4} />
      <CtaStrip source="about" />
      <FormSection />
    </>
  );
}
