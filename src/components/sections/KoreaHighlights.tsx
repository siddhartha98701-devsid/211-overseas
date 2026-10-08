'use client';

import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';
import { GraduationCap, Languages, MapPin, Award } from 'lucide-react';
import { MobileScroller } from '@/components/ui/MobileScroller';
import { SectionHeader } from '@/components/ui/SectionHeader';

const EASE = [0.16, 1, 0.3, 1] as const;

const HIGHLIGHTS = [
  { icon: Languages, title: '100% English-Taught Programs', text: 'Study in English at leading Korean universities.' },
  { icon: Award, title: 'IELTS 5.5+ · Duolingo Accepted', text: 'Clear language requirements for eligible applicants.' },
  { icon: GraduationCap, title: 'Undergraduate & Graduate', text: 'Expert guidance for both bachelor’s and master’s routes.' },
  { icon: MapPin, title: 'Seoul · Busan', text: 'Dynamic student cities at the heart of South Korea.' },
];

const DISCIPLINES = [
  'Game Development',
  'Animation',
  'Film & Visual Effects',
  'Digital Design',
  'Korean Language & Business',
  'Global Business Administration',
  'Computer Science',
];

export function KoreaHighlights({ showDisciplines = true }: { showDisciplines?: boolean }) {
  const reduce = usePrefersReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section className="py-14 md:py-24 border-b border-[#E6DDCC]" aria-label="Study in South Korea at a glance">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          eyebrow="Study in South Korea"
          headline="Dream. Learn. Grow globally."
          description="Expert guidance for English-taught undergraduate and graduate programs in Seoul, Busan and beyond."
        />

        <MobileScroller label="South Korea highlights" desktopClassName="md:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group relative h-full border border-[#E6DDCC] bg-white p-6 overflow-hidden">
              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-[#94682B] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
              <span className="flex h-11 w-11 items-center justify-center bg-black text-[#D1A95F] transition-colors duration-300 group-hover:bg-[#94682B] group-hover:text-white">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-lg font-bold text-black leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-[#57514A] leading-relaxed">{text}</p>
            </div>
          ))}
        </MobileScroller>

        {showDisciplines && (
        <div className="mt-14">
          <p className="text-xs uppercase tracking-widest text-[#57514A] font-medium mb-4">Key academic disciplines</p>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            className="flex flex-wrap gap-3"
          >
            {DISCIPLINES.map((d) => (
              <motion.li
                key={d}
                variants={item}
                whileHover={reduce ? undefined : { scale: 1.05 }}
                className="border border-black px-4 py-2 text-sm text-black transition-colors hover:bg-[#94682B] hover:border-[#B88740] cursor-default"
              >
                {d}
              </motion.li>
            ))}
          </motion.ul>

          <Link
            href="/study-in-south-korea"
            className="group mt-10 inline-flex items-center text-xs uppercase tracking-widest text-black font-medium"
          >
            <span className="link-draw pb-1">Explore study in South Korea</span>
            <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
        )}
      </div>
    </section>
  );
}
