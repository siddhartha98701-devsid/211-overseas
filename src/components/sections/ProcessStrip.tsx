'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteContent } from '@/content/site';

const EASE = [0.16, 1, 0.3, 1] as const;

/** One-glance version of the 7-step journey (the full timeline lives on the About page). */
export function ProcessStrip() {
  const { steps } = siteContent.howItWorks;

  return (
    <section id="process" className="bgl bgl-black py-16 md:py-20 text-white overflow-x-clip scroll-mt-24" aria-label="How it works">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader dark compact eyebrow="How 211 OVERSEAS works" headline="Your journey in 7 simple steps" />

        <div className="relative">
          {/* Connector line that draws across on scroll-in (desktop) */}
          <motion.span
            aria-hidden="true"
            className="hidden lg:block absolute left-5 right-5 top-5 h-px origin-left bg-[#E59217]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: EASE }}
          />
          <ol className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-8">
            {steps.map((s, i) => (
              <motion.li
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
                className="relative"
              >
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#E59217] text-black text-xs font-bold">
                  {s.number}
                </span>
                <h3 className="mt-3 font-serif text-base sm:text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-1 text-xs text-white/60 leading-relaxed">{s.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
