'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { Plane } from '@/components/ui/Plane';

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

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-end overflow-hidden bg-black" aria-label="Hero">
      {/* Hero photo with a slow settle-in zoom */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={reduce ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <Image
          src="/images/hero.jpg"
          alt="Seoul skyline and historic architecture at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
      </motion.div>

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
            <stop offset="0" stopColor="#E59217" stopOpacity="0" />
            <stop offset="0.45" stopColor="#E59217" stopOpacity="0.85" />
            <stop offset="1" stopColor="#E59217" />
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

      <div className="max-w-[1280px] mx-auto px-6 w-full pb-24 md:pb-32 pt-36 relative z-10">
        <div className="max-w-3xl">
          <motion.p
            variants={fadeUp}
            custom={0.15}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#E59217] font-medium mb-6"
          >
            <span className="h-px w-10 bg-[#E59217]" />
            211 OVERSEAS · study abroad
          </motion.p>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tight leading-[1.02] mb-6">
            <span className="sr-only">Your future has no borders.</span>
            <span aria-hidden="true" className="flex flex-wrap gap-x-[0.28em]">
              {HEADLINE.map((w, i) => (
                <span key={w} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                  <motion.span
                    custom={i}
                    variants={word}
                    initial={reduce ? false : 'hidden'}
                    animate="show"
                    className={`inline-block ${i === HEADLINE.length - 1 ? 'text-[#E59217]' : ''}`}
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
            className="text-lg sm:text-xl text-white/90 font-light mb-4"
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
              className="btn-shine bg-[#E59217] hover:bg-[#F2A23A] text-black px-8 py-3.5 text-xs uppercase tracking-widest transition-colors font-medium"
            >
              Explore destinations
            </Link>
            <Link
              href="/contact"
              className="border border-white/70 hover:bg-white hover:text-black text-white px-8 py-3.5 text-xs uppercase tracking-widest transition-colors font-medium"
            >
              Book free consultation
            </Link>
          </motion.div>
        </div>
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
            className="absolute inset-x-0 top-0 h-4 bg-[#E59217]"
            animate={reduce ? undefined : { y: [-16, 40] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.div>
    </section>
  );
}
