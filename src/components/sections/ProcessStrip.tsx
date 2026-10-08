'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteContent } from '@/content/site';

const EASE = [0.16, 1, 0.3, 1] as const;

/** One-glance version of the 7-step journey with clean vertical timeline on mobile and horizontal track on desktop. */
export function ProcessStrip() {
  const { steps } = siteContent.howItWorks;

  return (
    <section id="process" className="bgl bgl-black py-16 md:py-20 text-white overflow-x-clip scroll-mt-24" aria-label="How it works">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader dark compact eyebrow="How 211 OVERSEAS works" headline="Your journey in 7 simple steps" />

        {/* Desktop Layout (horizontal 7-step with connector line) */}
        <div className="hidden lg:block relative">
          <motion.span
            aria-hidden="true"
            className="absolute left-5 right-5 top-5 h-px origin-left bg-[#94682B]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.4, ease: EASE }}
          />
          <ol className="grid lg:grid-cols-7 gap-x-4">
            {steps.map((s, i) => (
              <motion.li
                key={s.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
                className="relative"
              >
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#94682B] text-white text-xs font-bold">
                  {s.number}
                </span>
                <h3 className="mt-3 font-serif text-base font-bold leading-snug">{s.title}</h3>
                <p className="mt-1 text-xs text-white/60 leading-relaxed">{s.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Mobile / Tablet View (clean vertical timeline) */}
        <div className="lg:hidden relative pl-1 sm:pl-4">
          {/* Continuous vertical connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[21px] sm:left-[33px] top-5 bottom-6 w-0.5 bg-[#94682B]/60"
          />

          <ol className="space-y-7 relative">
            {steps.map((s, i) => (
              <motion.li
                key={s.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="relative flex items-start gap-4"
              >
                {/* Numbered circle */}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#94682B] text-white text-xs font-bold ring-4 ring-[#1E1E1E] shadow-sm">
                  {s.number}
                </span>

                {/* Content fully visible with no clipping */}
                <div className="pt-1 flex-1 min-w-0">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-white/70 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
