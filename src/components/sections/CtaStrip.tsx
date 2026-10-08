'use client';

import { ArrowRight, CalendarCheck, Phone } from 'lucide-react';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { whatsappLink } from '@/lib/contact';
import { siteContent } from '@/content/site';

interface CtaStripProps {
  heading?: string;
  /** Prefills the interest in the popup and the WhatsApp message. */
  interest?: string;
  source?: string;
}

const CARD =
  'group relative flex min-h-[120px] w-full items-center gap-4 border border-white/15 bg-white/[0.04] p-5 text-left transition-all hover:-translate-y-1 hover:border-[#D1A95F] hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-[#D1A95F] cursor-pointer';

/** "Talk to a counsellor" band: three large, tappable ways to get in touch. */
export function CtaStrip({
  heading = 'Not sure which path fits your profile?',
  interest,
  source = 'cta-strip',
}: CtaStripProps) {
  const { openCallback } = useCallbackModal();
  const { phone } = siteContent.brand;

  const options = [
    {
      icon: <CalendarCheck size={26} strokeWidth={1.5} aria-hidden="true" />,
      title: 'Book free counselling',
      text: 'Share your details and we call you back.',
      primary: true,
      onClick: () => openCallback({ interest, source }),
    },
    {
      icon: <WhatsAppIcon size={26} />,
      title: 'Chat on WhatsApp',
      text: 'Quick questions and document checks.',
      href: whatsappLink(interest ? `Hi 211 OVERSEAS, I am interested in: ${interest}.` : undefined),
      external: true,
    },
    {
      icon: <Phone size={26} strokeWidth={1.5} aria-hidden="true" />,
      title: phone,
      text: 'Mon – Sat, 10:00 AM – 7:00 PM IST',
      href: `tel:${phone.replace(/\s/g, '')}`,
    },
  ];

  return (
    <section className="bgl bgl-black text-white" aria-label="Talk to a counsellor">
      <div className="max-w-[1280px] mx-auto px-6 py-12 md:py-16">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] font-medium text-[#D1A95F]">Free counselling</p>
          <h2 className="mt-2 font-serif text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">{heading}</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Start with your profile, not a country. Pick the easiest way to reach us and a counsellor will help you decide.
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((o) => {
            const inner = (
              <>
                <span
                  className={`flex h-14 w-14 shrink-0 items-center justify-center transition-colors ${
                    o.primary ? 'bg-[#94682B] text-white' : 'bg-white/10 text-[#D1A95F] group-hover:bg-[#94682B] group-hover:text-white'
                  }`}
                >
                  {o.icon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-serif text-lg font-bold leading-tight">{o.title}</span>
                  <span className="mt-1 block text-sm text-white/65">{o.text}</span>
                </span>
                <ArrowRight size={18} className="shrink-0 text-[#D1A95F] transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </>
            );
            return (
              <li key={o.title}>
                {o.href ? (
                  <a href={o.href} {...(o.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className={CARD}>
                    {inner}
                  </a>
                ) : (
                  <button type="button" onClick={o.onClick} className={CARD}>
                    {inner}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
