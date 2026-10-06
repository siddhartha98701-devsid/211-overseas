'use client';

import { Phone } from 'lucide-react';
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

/** Slim "Book free counselling / WhatsApp / Call" band, dropped between page segments. */
export function CtaStrip({
  heading = 'Not sure which path fits your profile?',
  interest,
  source = 'cta-strip',
}: CtaStripProps) {
  const { openCallback } = useCallbackModal();
  const { phone } = siteContent.brand;

  return (
    <section className="bgl bgl-mustard text-black" aria-label="Talk to a counsellor">
      <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <p className="font-serif text-2xl sm:text-3xl font-bold leading-tight">{heading}</p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => openCallback({ interest, source })}
            className="btn-shine bg-black hover:bg-[#1a1a1a] text-white px-6 py-3 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
          >
            Book free counselling
          </button>
          <a
            href={whatsappLink(interest ? `Hi 211 OVERSEAS, I am interested in: ${interest}.` : undefined)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-black px-6 py-3 text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-colors"
          >
            <WhatsAppIcon size={16} /> WhatsApp us
          </a>
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 px-2 py-3 text-xs uppercase tracking-widest font-medium underline underline-offset-4"
          >
            <Phone size={14} aria-hidden="true" /> {phone}
          </a>
        </div>
      </div>
    </section>
  );
}
