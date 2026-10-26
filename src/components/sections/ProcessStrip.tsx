'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { siteContent } from '@/content/site';

export function ProcessStrip() {
  const { steps } = siteContent.howItWorks;
  const { openCallback } = useCallbackModal();
  const [activeStep, setActiveStep] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStartLeft = useRef(0);

  // Detect active card on scroll using IntersectionObserver / scroll position
  const updateActiveCard = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    if (cards.length === 0) return;

    const containerLeft = el.getBoundingClientRect().left;
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, idx) => {
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const distance = Math.abs(cardCenter - (containerLeft + el.clientWidth / 2));
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveStep(closestIndex);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveCard();
          ticking = false;
        });
        ticking = true;
      }
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [updateActiveCard]);

  const scrollToStep = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const cards = el.children;
    const targetCard = cards[index] as HTMLElement;
    if (targetCard) {
      const targetScroll = targetCard.offsetLeft - (el.clientWidth - targetCard.offsetWidth) / 2;
      el.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' });
      setActiveStep(index);
    }
  };

  // Mouse drag support for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollStartLeft.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    el.scrollLeft = scrollStartLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <section
      id="process"
      className="bgl bgl-black py-20 md:py-28 text-white scroll-mt-24 overflow-hidden"
      aria-label="How 211 Overseas works"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#FC7F4E] font-semibold mb-3">
              <span className="h-px w-6 bg-[#FC7F4E]" />
              How 211 OVERSEAS Works
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-white">
              The smartest way to build your <span className="text-[#FC7F4E]">global future</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
              From initial profile assessment to your departure day, we provide transparent, structured guidance at every milestone.
            </p>
          </div>

          <button
            type="button"
            onClick={() => openCallback({ source: 'process-header' })}
            className="btn-shine inline-flex items-center gap-2 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs uppercase tracking-widest font-semibold px-6 py-3.5 transition-colors cursor-pointer self-start md:self-end shrink-0"
          >
            <span>Start Your Journey</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Horizontal Slider: Snap carousel */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="relative flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-4 -mx-6 px-6 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing after:content-[''] after:shrink-0 after:w-4 sm:after:hidden"
          style={{ scrollSnapType: 'x mandatory' }}
          role="region"
          aria-label="Process milestones carousel"
        >
          {steps.map((s, i) => {
            const isActive = activeStep === i;
            return (
              <div
                key={s.number}
                onClick={() => scrollToStep(i)}
                className={`w-[82vw] sm:w-[330px] md:w-[360px] shrink-0 snap-start rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isActive
                    ? 'border-[#A33E11] bg-white/[0.08] shadow-[0_12px_40px_rgba(163,62,17,0.25)] ring-1 ring-[#A33E11] opacity-100'
                    : 'border-white/10 bg-white/[0.03] opacity-75 hover:opacity-90 hover:border-white/20'
                }`}
              >
                {/* Rust Number Header */}
                <div
                  className={`p-5 sm:p-6 transition-colors flex items-center justify-between ${
                    isActive ? 'bg-[#A33E11] text-white' : 'bg-white/[0.06] text-white/90'
                  }`}
                >
                  <span className="font-serif text-3xl sm:text-4xl font-bold tracking-tight tabular-nums">
                    {s.number}
                  </span>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-xs font-semibold uppercase tracking-wider text-white">
                    <CheckCircle2 size={14} className={isActive ? 'text-[#FC7F4E]' : 'text-white/70'} />
                    <span>Phase 0{i + 1}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                    <span>Verified advisory protocol</span>
                    <span className={`font-semibold ${isActive ? 'text-[#FC7F4E]' : 'text-white/40'}`}>
                      {isActive ? '● Active Step' : `Step 0${i + 1}`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls & Progress bar underneath */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          {/* Progress dots & counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/60 uppercase tracking-widest font-medium">
              Step {String(activeStep + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
            </span>

            <div className="flex items-center gap-1.5" role="tablist" aria-label="Milestone steps">
              {steps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToStep(i)}
                  aria-label={`Go to Phase 0${i + 1}`}
                  className="flex h-7 w-7 items-center justify-center cursor-pointer"
                >
                  <span
                    className={`block h-1.5 rounded-full transition-all duration-300 ${
                      i === activeStep ? 'w-8 bg-[#A33E11]' : 'w-2 bg-white/25 hover:bg-white/50'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Arrows with min 44x44px touch targets */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="h-11 w-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 touch-manipulation"
              aria-label="Previous phase"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollToStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="h-11 w-11 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 touch-manipulation"
              aria-label="Next phase"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
