import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { siteContent } from '@/content/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MobileScroller } from '@/components/ui/MobileScroller';
import { Stethoscope, ConciergeBell, HardHat, Briefcase, ArrowRight, type LucideIcon } from 'lucide-react';
import { FormSection } from '@/components/sections/FormSection';
import { CtaStrip } from '@/components/sections/CtaStrip';

export const metadata: Metadata = {
  title: 'Work in UAE',
  description:
    'Career opportunities in the UAE across Healthcare, Hospitality, Engineering and Sales sectors. Professional placement support from 211 OVERSEAS Ahmedabad.',
};

const SECTOR_META: Record<string, { icon: LucideIcon; href?: string }> = {
  Healthcare: { icon: Stethoscope, href: '/work-in-uae/healthcare' },
  Hospitality: { icon: ConciergeBell, href: '/work-in-uae/hospitality' },
  'Engineering & Technical': { icon: HardHat, href: '/work-in-uae/engineering-construction' },
  'Sales & Business': { icon: Briefcase },
};

export default function UAEPage() {
  const { uae } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-10 md:pt-40 md:pb-16 border-b border-[#E6DDCC]" aria-label="UAE hero">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium mb-4">
              <span className="h-px w-10 bg-[#B88740]" />
              Work &amp; Study · Career opportunities
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1] mb-4">
              Work in <span className="text-[#8A6020]">UAE</span>
            </h1>
            <p className="text-base md:text-lg text-[#57514A] leading-relaxed">{uae.hero.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact?interest=Work+in+UAE#enquiry-form" className="btn-shine inline-flex min-h-11 items-center bg-[#94682B] hover:bg-[#7A5622] text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                Submit your profile
              </Link>
              <a href="#sectors" className="inline-flex min-h-11 items-center border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-7 text-xs uppercase tracking-widest font-medium transition-colors">
                Explore sectors
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[2/1] lg:aspect-[4/3] w-full overflow-hidden bg-[#E6DDCC]/30">
              <Image src="/images/web/uae-wide.webp" alt="Dubai coastline and Burj Al Arab" fill priority sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Key employment sectors: compact cards */}
      <section id="sectors" className="py-14 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Key employment sectors">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader
            eyebrow="Key employment sectors"
            headline="Sectors actively recruiting"
            description="High-growth sectors hiring experienced talent in the United Arab Emirates."
            compact
          />
          <MobileScroller label="Employment sectors" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {uae.sectors.map((sector) => {
              const meta = SECTOR_META[sector.name];
              const Icon = meta?.icon ?? Briefcase;
              const inner = (
                <>
                  <span className="flex h-11 w-11 items-center justify-center bg-black text-[#D1A95F] transition-colors group-hover:bg-[#94682B] group-hover:text-white">
                    <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#2A2A2A]">{sector.name}</h3>
                  <ul className="mt-3 flex flex-1 flex-wrap content-start gap-2">
                    {sector.roles.map((r) => (
                      <li key={r} className="border border-[#E6DDCC] px-2 py-1 text-xs text-[#57514A]">{r}</li>
                    ))}
                  </ul>
                  {meta?.href && (
                    <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#8A6020]">
                      Sector guide <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </>
              );
              const cls = 'group flex h-full w-full flex-col border border-[#E6DDCC] bg-white p-5 transition-all';
              return meta?.href ? (
                <Link key={sector.name} href={meta.href} className={`${cls} hover:-translate-y-1 hover:border-[#94682B] hover:shadow-[0_12px_30px_rgba(42,42,42,0.08)]`}>{inner}</Link>
              ) : (
                <div key={sector.name} className={cls}>{inner}</div>
              );
            })}
          </MobileScroller>
        </div>
      </section>

      {/* Process */}
      <section className="bgl bgl-black py-14 md:py-24 text-white" aria-label="UAE process">
        <div className="max-w-[1280px] mx-auto px-6">
          <SectionHeader dark eyebrow="How it works" headline="Our UAE recruitment process" description="A transparent, step-by-step pathway from profile submission to onboarding." compact />
          <MobileScroller dark label="UAE process" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
            {uae.process.map((step) => (
              <div key={step.number} className="h-full w-full border border-white/15 bg-white/[0.04] p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#94682B] text-xs font-bold">{step.number}</span>
                <h3 className="mt-3 font-serif text-lg font-bold leading-snug">{step.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </MobileScroller>
          <Link href="/contact?interest=Work+in+UAE#enquiry-form" className="mt-8 inline-flex min-h-11 items-center bg-[#94682B] hover:bg-[#7A5622] text-white px-8 text-xs uppercase tracking-widest font-medium transition-colors">
            Submit your profile
          </Link>
        </div>
      </section>

      <CtaStrip interest="Work in UAE" source="work-in-uae" />
      <FormSection />
    </>
  );
}
