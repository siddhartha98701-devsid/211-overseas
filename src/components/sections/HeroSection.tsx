'use client';

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { Plane } from '@/components/ui/Plane';
import { LeadMiniForm } from '@/components/lead/LeadMiniForm';

const EASE = [0.16, 1, 0.3, 1] as const;
const ARC = 'M -40 640 C 240 610, 600 480, 930 215';

const HEADLINE = ['Your', 'future', 'has', 'no', 'borders.'];

const word: Variants = {
  hidden: { y: '110%', opacity: 0 },
  show: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { delay: 0.35 + i * 0.09, duration: 0.8, ease: EASE },
  }),
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: (d: number) => ({ y: 0, opacity: 1, transition: { delay: d, duration: 0.7, ease: EASE } }),
};

export function HeroSection() {
  const reduce = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const targetPos = useRef({ x: 0, y: 0, scale: 1.0 });
  const currentPos = useRef({ x: 0, y: 0, scale: 1.0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setIsTouchDevice(!isFinePointer);
  }, []);

  // Desktop hover scale + parallax shift smoothed with lerp in rAF
  useEffect(() => {
    if (reduce || isTouchDevice) return;

    let isRunning = true;
    const animate = () => {
      if (!isRunning) return;
      // Smooth lerp: scale over ~1.2s ease-out (~0.035 factor) and subtle parallax
      currentPos.current.scale += (targetPos.current.scale - currentPos.current.scale) * 0.038;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.06;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.06;

      if (bgImageRef.current) {
        bgImageRef.current.style.transform = `translate3d(${currentPos.current.x.toFixed(2)}px, ${currentPos.current.y.toFixed(2)}px, 0) scale(${currentPos.current.scale.toFixed(4)})`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
    return () => {
      isRunning = false;
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [reduce, isTouchDevice]);

  const handlePointerEnter = () => {
    if (!reduce && !isTouchDevice) {
      setIsHovered(true);
      targetPos.current.scale = 1.06;
    }
  };

  const handlePointerLeave = () => {
    if (!reduce && !isTouchDevice) {
      setIsHovered(false);
      targetPos.current.scale = 1.0;
      targetPos.current.x = 0;
      targetPos.current.y = 0;
    }
  };

  const handlePointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (reduce || isTouchDevice || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    // Smooth parallax shift max ~10-15px
    targetPos.current.x = Math.max(-13, Math.min(13, nx * 12));
    targetPos.current.y = Math.max(-13, Math.min(13, ny * 12));
  };

  return (
    <section
      ref={sectionRef}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      className="bgl bgl-black min-h-[92vh] md:min-h-screen flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* Hero photo container with overflow:hidden and GPU-accelerated layer */}
      <div className="absolute inset-0 z-[-2] overflow-hidden pointer-events-none select-none" aria-hidden="true">
        <div
          ref={bgImageRef}
          className={`absolute inset-0 will-change-transform ${
            isTouchDevice && !reduce ? 'animate-ken-burns' : ''
          }`}
          style={{
            transform: reduce ? 'scale(1)' : undefined,
          }}
        >
          <Image
            src="/images/hero.jpg"
            alt="Seoul skyline and historic architecture at golden hour"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        {/* Base dark gradients for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
        {/* Soft gold-tinted overlay/vignette that slightly brightens on hover */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(209,169,95,0.18)_0%,rgba(148,104,43,0.07)_55%,transparent_80%)] transition-opacity duration-1000 ease-out"
          style={{ opacity: isHovered && !reduce ? 1 : 0 }}
        />
      </div>

      {/* Brand flight arc: draws itself, then the plane rides it */}
      <svg
        className="pointer-events-none absolute right-0 top-0 z-[1] h-[32%] w-full opacity-80 md:inset-0 md:h-full md:opacity-100"
        viewBox="0 0 1000 800"
        preserveAspectRatio="xMaxYMin slice"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="arc-fade" gradientUnits="userSpaceOnUse" x1="-40" y1="640" x2="930" y2="215">
            <stop offset="0" stopColor="#B88740" stopOpacity="0" />
            <stop offset="0.45" stopColor="#B88740" stopOpacity="0.85" />
            <stop offset="1" stopColor="#B88740" />
          </linearGradient>
        </defs>
        <motion.path
          d={ARC}
          stroke="url(#arc-fade)"
          strokeWidth={5}
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 2.6, ease: [0.4, 0, 0.2, 1] }}
        />
        <g>
          {!reduce && (
            <animateMotion
              dur="2.6s"
              begin="0.5s"
              fill="freeze"
              rotate="auto"
              calcMode="spline"
              keyTimes="0;1"
              keySplines="0.4 0 0.2 1"
              path={ARC}
            />
          )}
          {/* Static final position for reduced motion */}
          <g transform={reduce ? 'translate(930 215)' : undefined}>
            <Plane size={64} x={-32} y={-32} color="#FFFFFF" />
          </g>
        </g>
      </svg>

      <div className="max-w-[1280px] mx-auto px-6 w-full pb-24 md:pb-32 pt-36 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
        <div className="lg:col-span-7">
          <motion.p
            variants={fadeUp}
            custom={0.15}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D1A95F] font-medium mb-6"
          >
            <span className="h-px w-10 bg-[#94682B]" />
            211 OVERSEAS · study abroad
          </motion.p>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.02] mb-6">
            <span className="sr-only">Your future has no borders.</span>
            <span aria-hidden="true" className="flex flex-wrap gap-x-[0.28em]">
              {HEADLINE.map((w, i) => (
                <span key={w} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                  <motion.span
                    custom={i}
                    variants={word}
                    initial={reduce ? false : 'hidden'}
                    animate="show"
                    className={`inline-block ${i === HEADLINE.length - 1 ? 'text-[#D1A95F]' : ''}`}
                  >
                    {w}
                  </motion.span>
                </span>
              ))}
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            custom={1.0}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="text-base sm:text-lg text-white/90 font-light mb-4"
          >
            Study abroad. Work abroad. Build your global future.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={1.15}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl mb-10"
          >
            From selecting the right destination to documentation, applications, visa guidance and
            pre-departure support — we make your overseas journey easier.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={1.3}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="#globe"
              className="btn-shine bg-[#94682B] hover:bg-[#7A5622] text-white px-8 py-3.5 text-xs uppercase tracking-widest transition-colors font-medium"
            >
              Explore destinations
            </Link>
            <Link
              href="/contact"
              className="border border-white/70 hover:bg-white hover:text-black text-white px-8 py-3.5 text-xs uppercase tracking-widest transition-colors font-medium"
            >
              Book free consultation
            </Link>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-not-sure-modal'));
                }
              }}
              className="w-full sm:w-auto text-xs text-[#D1A95F] hover:text-white underline underline-offset-4 tracking-wider transition-colors font-medium cursor-pointer py-1"
            >
              Not sure where to start? Free Counselling →
            </button>
          </motion.div>
        </div>

        {/* Quick lead capture */}
        <motion.aside
          variants={fadeUp}
          custom={1.4}
          initial={reduce ? false : 'hidden'}
          animate="show"
          aria-label="Get free counselling"
          className="lg:col-span-5 w-full max-w-md lg:max-w-none lg:ml-auto bg-white border-t-4 border-[#B88740] p-6 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium">Free counselling</p>
          <h2 className="mt-1 mb-1 font-serif text-xl sm:text-2xl font-bold text-black">Talk to an expert</h2>
          <p className="mb-5 text-sm text-[#57514A]">Get a call back about studying in South Korea.</p>
          <LeadMiniForm interest="Study in South Korea" source="hero-form" />
        </motion.aside>
      </div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden md:flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/60"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-white/25">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-[#94682B]"
            animate={reduce ? undefined : { y: [-16, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
}
