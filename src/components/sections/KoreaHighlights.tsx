'use client';

import { motion, type Variants } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { GraduationCap, Languages, MapPin, Award, ArrowDown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';

const EASE = [0.16, 1, 0.3, 1] as const;

const HIGHLIGHTS = [
  { icon: Languages, title: '100% English-Taught Programs', text: 'Study in English at leading Korean universities with no initial Korean requirement.' },
  { icon: Award, title: 'IELTS 5.5+ · Duolingo Accepted', text: 'Accessible English language thresholds across recognized undergraduate and graduate tracks.' },
  { icon: GraduationCap, title: 'Undergraduate & Graduate', text: 'Direct admissions for 4-year bachelor’s, 2-year master’s, and Korean language immersion.' },
  { icon: MapPin, title: 'Seoul · Busan · Daejeon', text: 'Study in world-class innovation and technology centers with high safety and modern amenities.' },
];

export function KoreaHighlights() {
  const reduce = usePrefersReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <section className="py-12 md:py-16 border-b border-[#E6DDCC]" aria-label="Study in South Korea at a glance">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          eyebrow="Study in South Korea"
          headline="Dream. Learn. Grow globally."
          description="Expert guidance for English-taught undergraduate and graduate programs in Seoul, Busan and beyond."
          compact
        />

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <motion.li
              key={title}
              variants={item}
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative border border-[#E6DDCC] bg-white p-6 overflow-hidden transition-all hover:border-[#1D3FFF] hover:shadow-[0_12px_28px_rgba(29,63,255,0.06)]"
            >
              {/* Blue accent indicator */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 bg-[#1D3FFF] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              />
              <span className="flex h-11 w-11 items-center justify-center bg-black text-[#D1A95F] transition-colors duration-300 group-hover:bg-[#1D3FFF] group-hover:text-white">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-bold text-black leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-[#57514A] leading-relaxed">{text}</p>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-8 flex justify-start">
          <a
            href="#program-levels"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#1D3FFF] font-semibold hover:text-[#1532CC] transition-colors"
          >
            <span>Explore Degree Levels &amp; Programs</span>
            <ArrowDown size={14} className="transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
