import Link from 'next/link';
import {
  ArrowRight,
  CalendarDays,
  Check,
  ClipboardList,
  FileText,
  Languages,
  MapPin,
  MessageSquare,
  PlaneTakeoff,
  ShieldCheck,
  Phone,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { MobileScroller } from '@/components/ui/MobileScroller';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { whatsappLink } from '@/lib/contact';
import { siteContent } from '@/content/site';
import { LeadMiniForm } from '@/components/lead/LeadMiniForm';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { FormSection } from '@/components/sections/FormSection';
import { GROUP_LABEL, STEPS, subpageHref, subpagesFor, type SubpageContent } from '@/content/subpages';

const FACT_ICONS = [CalendarDays, Languages, ShieldCheck, MapPin];
const FIELD_ICONS = [Sparkles, ClipboardList, FileText, MapPin, ShieldCheck, Languages];
const STEP_ICONS = [ClipboardList, FileText, MessageSquare, PlaneTakeoff];

/**
 * Shared layout for every destination / role sub-page. Mirrors the owner's poster: key-facts row,
 * "Why X?" grid, who can apply, "we take care of everything", FAQs, then the enquiry form with the
 * destination and interest already selected.
 */
export function SubpageTemplate({ page }: { page: SubpageContent }) {
  const parent = GROUP_LABEL[page.group];
  const siblings = subpagesFor(page.group).filter((p) => p.slug !== page.slug);
  const steps = STEPS[page.kind];
  const [before, after] = page.headline.includes(page.highlight)
    ? page.headline.split(page.highlight)
    : [page.headline, ''];

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.211overseas.com/' },
      { '@type': 'ListItem', position: 2, name: parent.label, item: `https://www.211overseas.com${parent.href}` },
      { '@type': 'ListItem', position: 3, name: page.name, item: `https://www.211overseas.com${subpageHref(page)}` },
    ],
  };

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#E6DDCC]" aria-label={`${page.name} overview`}>
        <div className="max-w-[1280px] mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-[#57514A]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-[#8A6020]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href={parent.href} className="hover:text-[#8A6020]">{parent.label}</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#2A2A2A] font-medium">{page.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium mb-5">
                <span className="h-px w-10 bg-[#B88740]" />
                {page.eyebrow}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2A2A2A] tracking-tight leading-[1.1]">
                {before}
                <span className="text-[#8A6020]">{page.highlight}</span>
                {after}
              </h1>
              <p className="mt-6 text-base md:text-lg text-[#57514A] leading-relaxed max-w-2xl">{page.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#enquiry-form"
                  className="btn-shine bg-[#94682B] hover:bg-[#7A5622] text-white px-7 min-h-11 text-xs uppercase tracking-widest font-medium transition-colors inline-flex items-center"
                >
                  Apply for free counselling
                </a>
                <a
                  href="#why"
                  className="border border-[#2A2A2A] text-[#2A2A2A] hover:bg-[#2A2A2A] hover:text-white px-7 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  Why {page.name}?
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-5 text-sm">
                <a href={whatsappLink(`Hi 211 OVERSEAS, I am interested in: ${page.interest}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-[#2A2A2A] hover:text-[#8A6020]">
                  <WhatsAppIcon className="h-5 w-5" /> WhatsApp us
                </a>
                <a href={`tel:${siteContent.brand.phone.replace(/\s/g, '')}`} className="inline-flex min-h-11 items-center gap-2 text-[#2A2A2A] hover:text-[#8A6020]">
                  <Phone size={18} aria-hidden="true" /> {siteContent.brand.phone}
                </a>
              </div>
            </div>

            <aside
              aria-label="Get a call back"
              className="lg:col-span-5 bg-white border-t-4 border-[#B88740] p-6 sm:p-7 shadow-[0_24px_60px_rgba(42,42,42,0.12)]"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium">Free counselling</p>
              <h2 className="mt-1 mb-1 font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A]">Talk to an expert</h2>
              <p className="mb-5 text-sm text-[#57514A]">Get a call back about {page.name === page.destination ? page.name : page.destination}.</p>
              <LeadMiniForm interest={page.interest} source={`subpage:${page.group}/${page.slug}`} />
            </aside>
          </div>

          {/* Key facts */}
          <ul className="mt-14 grid grid-cols-2 lg:grid-cols-4 border-t border-[#E6DDCC]">
            {page.facts.map((f, i) => {
              const Icon = FACT_ICONS[i % FACT_ICONS.length];
              return (
                <li key={f.label} className="py-6 pr-6 lg:border-r last:border-r-0 border-[#E6DDCC] lg:pl-6 first:pl-0">
                  <Icon size={26} strokeWidth={1.5} className="text-[#A47434]" aria-hidden="true" />
                  <p className="mt-3 font-serif text-base sm:text-lg font-bold text-[#2A2A2A] leading-snug">{f.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[#57514A]">{f.label}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- Eligibility + fields ---------- */}
      <section className="py-14 md:py-20 border-b border-[#E6DDCC]" aria-label="Eligibility and fields">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A2A2A] mb-6">{page.whoTitle}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
              {page.who.map((w) => (
                <li key={w} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#94682B] text-white">
                    <Check size={16} strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-[#2A2A2A] leading-relaxed">{w}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-[#57514A] leading-relaxed max-w-2xl">
              Requirements are indicative and vary by institution, employer and authority, and they change over time.
              Your counsellor confirms what applies to you.
            </p>

            <h2 className="mt-12 mb-6 font-serif text-2xl sm:text-3xl font-semibold text-[#2A2A2A]">{page.fieldsTitle}</h2>
            <MobileScroller label={page.fieldsTitle} desktopClassName="md:grid-cols-3 lg:grid-cols-6 md:gap-4">
              {page.fields.map((f, i) => {
                const Icon = FIELD_ICONS[i % FIELD_ICONS.length];
                return (
                  <div key={f} className="group flex h-full min-h-[104px] w-full flex-col justify-between border border-[#E6DDCC] bg-white p-4 transition-colors hover:border-[#94682B]">
                    <Icon size={22} strokeWidth={1.5} className="text-[#A47434]" aria-hidden="true" />
                    <p className="mt-4 font-serif text-base font-bold leading-snug text-[#2A2A2A]">{f}</p>
                  </div>
                );
              })}
            </MobileScroller>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- Key content ---------- */}
      <section id="why" className="bgl bgl-gray py-14 md:py-20 border-b border-[#E6DDCC] scroll-mt-24" aria-label={page.whyTitle}>
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A2A2A] mb-8">{page.whyTitle}</h2>
            <MobileScroller label={page.whyTitle} desktopClassName="md:grid-cols-2 lg:grid-cols-3">
              {page.why.map((w, i) => (
                <div key={w.title} className="h-full w-full border border-[#E6DDCC] bg-white p-6">
                  <span className="font-serif text-sm text-[#A47434]">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-1 font-serif text-lg sm:text-xl font-bold text-[#2A2A2A]">{w.title}</h3>
                  <p className="mt-2 text-sm text-[#57514A] leading-relaxed">{w.text}</p>
                </div>
              ))}
            </MobileScroller>
          </ScrollReveal>
        </div>
      </section>

      {/* ---------- We take care of everything ---------- */}
      <section className="bgl bgl-black py-14 md:py-20 text-white" aria-label="How we help">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold mb-3">We take care of everything</h2>
            <p className="text-white/70 mb-10 max-w-2xl">You focus on your {page.kind === 'study' ? 'studies' : 'career'}. We handle the rest.</p>
            <MobileScroller dark label="How we help" desktopClassName="md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => {
                const Icon = STEP_ICONS[i % STEP_ICONS.length];
                return (
                  <div key={s.title} className="h-full w-full border border-white/15 bg-white/[0.04] p-6">
                    <Icon size={28} strokeWidth={1.5} className="text-[#D1A95F]" aria-hidden="true" />
                    <span className="sr-only">Step {i + 1}: </span>
                    <h3 className="mt-4 font-serif text-lg font-bold">{s.title}</h3>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.text}</p>
                  </div>
                );
              })}
            </MobileScroller>
          </ScrollReveal>
        </div>
      </section>

      <FaqSection items={page.faqs} headline={`Questions about ${page.name}`} />

      {/* ---------- More from this section ---------- */}
      {siblings.length > 0 && (
        <section className="py-14 md:py-20 border-b border-[#E6DDCC]" aria-label={`More from ${parent.label}`}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex items-end justify-between gap-6 mb-8">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2A2A2A]">More in {parent.label}</h2>
              <Link href={parent.href} className="text-xs uppercase tracking-widest font-medium text-[#2A2A2A] link-draw pb-1">
                See all
              </Link>
            </div>
            <MobileScroller label={`More from ${parent.label}`} desktopClassName="md:grid-cols-2 lg:grid-cols-4">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={subpageHref(s)}
                  className="group flex h-full w-full flex-col border border-[#E6DDCC] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[#94682B] hover:shadow-[0_12px_30px_rgba(42,42,42,0.08)]"
                >
                  <h3 className="font-serif text-lg font-bold text-[#2A2A2A]">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-[#57514A] leading-relaxed">{s.blurb}</p>
                  <span className="mt-4 inline-flex min-h-11 items-center gap-2 text-xs uppercase tracking-widest font-medium text-[#8A6020]">
                    Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </MobileScroller>
          </div>
        </section>
      )}

      <CtaStrip interest={page.interest} source={`subpage:${page.group}/${page.slug}`} heading={`Ready to explore ${page.name}?`} />
      <FormSection
        defaultInterest={page.interest}
        defaultDestination={page.destination}
        heading={`Start your ${page.destination} journey`}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
    </>
  );
}
