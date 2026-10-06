'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { FAQS, type Faq } from '@/content/faqs';

export function FaqSection({ limit, items = FAQS, headline = 'Questions students ask us' }: { limit?: number; items?: Faq[]; headline?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visible = limit && !showAll ? items.slice(0, limit) : items;
  const { openCallback } = useCallbackModal();

  return (
    <section id="faq" className="py-16 md:py-20 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Frequently asked questions">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-32">
            <SectionHeader compact eyebrow="FAQs" headline={headline} />
            <p className="-mt-6 text-sm text-[#57514A] leading-relaxed">Can&apos;t find your answer? Our counsellors are happy to help.</p>
            <button
              type="button"
              onClick={() => openCallback({ source: 'faq' })}
              className="btn-shine mt-5 bg-black hover:bg-[#94682B] hover:text-white text-white px-6 py-3 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
            >
              Ask a counsellor
            </button>
          </div>
        </div>

        <div className="lg:col-span-8 border-t border-[#E6DDCC]">
          {visible.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[#E6DDCC]">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left cursor-pointer group"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-black group-hover:text-[#8A6020] transition-colors">{f.q}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="shrink-0 flex h-8 w-8 items-center justify-center bg-[#94682B] text-white">
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
                      <p className="pb-6 pr-12 text-sm sm:text-base text-[#57514A] leading-relaxed">
                        {f.a}{' '}
                        {f.link && (
                          <Link href={f.link.href} className="underline decoration-[#B88740] underline-offset-2 hover:text-black">
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
          {limit && items.length > limit && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="mt-5 text-xs uppercase tracking-widest font-medium text-black cursor-pointer"
            >
              <span className="link-draw pb-1">{showAll ? 'Show fewer questions' : `Show all ${items.length} questions`}</span>
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
            mainEntity: items.map((f) => ({
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
