'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { FAQS } from '@/content/faqs';

export function FaqSection({ limit }: { limit?: number }) {
  const [open, setOpen] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visible = limit && !showAll ? FAQS.slice(0, limit) : FAQS;
  const { openCallback } = useCallbackModal();

  return (
    <section id="faq" className="py-16 md:py-20 border-b border-[#E5E5E5] scroll-mt-24" aria-label="Frequently asked questions">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeader compact eyebrow="FAQs" headline="Questions students ask us" />
            <p className="-mt-6 text-sm text-[#4A4A4A] leading-relaxed">Can&apos;t find your answer? Our counsellors are happy to help.</p>
            <button
              type="button"
              onClick={() => openCallback({ source: 'faq' })}
              className="btn-shine mt-5 bg-black hover:bg-[#E59217] hover:text-black text-white px-6 py-3 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
            >
              Ask a counsellor
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 border-t border-[#E5E5E5]">
          {visible.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[#E5E5E5]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left cursor-pointer group"
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-black group-hover:text-[#A86500] transition-colors">{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 flex h-8 w-8 items-center justify-center bg-[#E59217] text-black">
                      <Plus size={18} aria-hidden="true" />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${i}`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-sm sm:text-base text-[#4A4A4A] leading-relaxed">
                        {f.a}{' '}
                        {f.link && (
                          <Link href={f.link.href} className="underline decoration-[#E59217] underline-offset-2 hover:text-black">
                            {f.link.label}
                          </Link>
                        )}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          {limit && FAQS.length > limit && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="mt-5 text-xs uppercase tracking-widest font-medium text-black cursor-pointer"
            >
              <span className="link-draw pb-1">{showAll ? 'Show fewer questions' : `Show all ${FAQS.length} questions`}</span>
            </button>
          )}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}
