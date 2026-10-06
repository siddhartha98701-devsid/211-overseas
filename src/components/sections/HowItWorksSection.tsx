'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { siteContent } from '@/content/site';

const EASE = [0.16, 1, 0.3, 1] as const;

export function HowItWorksSection() {
  const { howItWorks } = siteContent;
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = usePrefersReducedMotion();

  // The mustard line fills as the list scrolls through the viewport
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 65%', 'end 55%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.3 });

  return (
    <section className="bgl bgl-black py-24 md:py-36 text-white overflow-x-clip" aria-label="Our advisory process">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeader dark eyebrow="How 211 OVERSEAS works" headline="Your overseas journey, simplified" />
              <p className="-mt-6 text-base sm:text-lg text-white/70 leading-relaxed max-w-md">
                From initial assessment to your departure day, we provide transparent, structured guidance at
                every milestone.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol ref={listRef} className="relative">
              {/* Track + animated fill */}
              <span aria-hidden="true" className="absolute left-5 top-2 bottom-2 w-px bg-white/15" />
              <motion.span
                aria-hidden="true"
                className="absolute left-5 top-2 bottom-2 w-px origin-top bg-[#94682B]"
                style={{ scaleY: reduce ? 1 : fill }}
              />

              {howItWorks.steps.map((step) => (
                <motion.li
                  key={step.number}
                  initial={reduce ? false : { opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="relative pl-16 pb-12 last:pb-0"
                >
                  <motion.span
                    initial={reduce ? false : { backgroundColor: '#2A2A2A', color: '#B88740', scale: 0.8 }}
                    whileInView={{ backgroundColor: '#B88740', color: '#2A2A2A', scale: 1 }}
                    viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-[#B88740] text-xs font-bold"
                  >
                    {step.number}
                  </motion.span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-white/65 leading-relaxed max-w-xl">{step.description}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
