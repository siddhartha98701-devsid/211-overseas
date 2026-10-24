'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { siteContent } from '@/content/site';

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProcessStrip() {
  const { steps } = siteContent.howItWorks;
  const reduce = usePrefersReducedMotion();
  const { openCallback } = useCallbackModal();
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step-index'));
            if (!isNaN(index)) {
              setActiveStep(index);
            }
          }
        });
      },
      { rootMargin: '-20% 0px -40% 0px', threshold: 0.2 }
    );

    stepRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="bgl bgl-black py-20 md:py-28 text-white scroll-mt-24" aria-label="How 211 Overseas works">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left sticky column on desktop */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 space-y-6">
              <div>
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#0C3844] font-semibold mb-3">
                  <span className="h-px w-6 bg-[#0C3844]" />
                  How 211 OVERSEAS Works
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-white">
                  The smartest way to build your <span className="text-[#0C3844]">global future</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-md">
                  From initial profile assessment to your departure day, we provide transparent, structured guidance at every milestone.
                </p>
              </div>

              {/* Dynamic step progress badge */}
              <div className="p-4 rounded-[2px] border border-white/10 bg-white/[0.03] backdrop-blur space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-white/60 uppercase tracking-widest font-medium">Milestone Progress</span>
                  <span className="text-[#0C3844] font-bold tabular-nums">
                    Step {String(activeStep + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
                  </span>
                </div>
                {/* Visual Progress bar */}
                <div className="h-1 w-full bg-white/10 overflow-hidden rounded-full">
                  <motion.div
                    className="h-full bg-[#0C3844]"
                    initial={{ width: '14%' }}
                    animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                </div>
                <p className="text-xs text-white/90 font-medium truncate">
                  Current: <span className="text-[#D1A95F]">{steps[activeStep]?.title}</span>
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => openCallback({ source: 'process-sticky' })}
                  className="btn-shine inline-flex items-center gap-2 bg-[#0C3844] hover:bg-[#08262E] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3.5 transition-colors cursor-pointer"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Right column: stacked rows revealing progressively */}
          <div className="lg:col-span-7 space-y-5">
            {steps.map((s, i) => {
              const isActive = activeStep === i;
              return (
                <div
                  key={s.number}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  data-step-index={i}
                  className={`group relative flex flex-col sm:flex-row border transition-all duration-300 ${
                    isActive
                      ? 'border-[#0C3844] bg-white/[0.07] shadow-[0_12px_40px_rgba(12,56,68,0.3)]'
                      : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  {/* Left big number tile (stacked reference pattern) */}
                  <div
                    className={`flex items-center justify-center p-6 sm:w-28 shrink-0 transition-colors ${
                      isActive ? 'bg-[#0C3844] text-white' : 'bg-white/[0.04] text-white/60 group-hover:text-white'
                    }`}
                  >
                    <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight tabular-nums">
                      {s.number}
                    </span>
                  </div>

                  {/* Right description block */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <CheckCircle2
                          size={15}
                          className={`transition-colors ${isActive ? 'text-[#0C3844]' : 'text-white/40'}`}
                        />
                        <span className="text-[11px] uppercase tracking-wider font-semibold text-white/50">
                          Phase 0{i + 1}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70 leading-relaxed">
                        {s.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                      <span>Verified advisory protocol</span>
                      <span className={`font-medium ${isActive ? 'text-[#0C3844]' : 'text-white/40'}`}>
                        {isActive ? '● Currently Viewing' : 'Step 0' + (i + 1)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
