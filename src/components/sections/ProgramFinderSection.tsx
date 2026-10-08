'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Gamepad2, Clapperboard, Film, PenTool, Languages, Briefcase, Cpu, ArrowRight, type LucideIcon } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useCallbackModal } from '@/components/lead/CallbackProvider';

type Level = 'Undergraduate' | 'Graduate';

interface Field {
  id: string;
  label: string;
  icon: LucideIcon;
  blurb: string;
  topics: string[];
}

export const FIELDS: Field[] = [
  { id: 'game', label: 'Game Development', icon: Gamepad2, blurb: 'Design and build interactive games from concept to playable product.', topics: ['Game programming', 'Game design', 'Interactive media'] },
  { id: 'animation', label: 'Animation', icon: Clapperboard, blurb: 'Bring characters and stories to life through 2D and 3D animation.', topics: ['2D & 3D animation', 'Character design', 'Storyboarding'] },
  { id: 'film', label: 'Film & Visual Effects', icon: Film, blurb: 'Learn filmmaking and the visual effects behind modern screen storytelling.', topics: ['Filmmaking', 'VFX & compositing', 'Post-production'] },
  { id: 'design', label: 'Digital Design', icon: PenTool, blurb: 'Create digital experiences, brands and visual communication.', topics: ['UI / UX design', 'Visual communication', 'Motion graphics'] },
  { id: 'korean', label: 'Korean Language & Business', icon: Languages, blurb: 'Pair Korean language skills with business know-how for Korea-facing careers.', topics: ['Korean language', 'Business communication', 'Cross-cultural management'] },
  { id: 'gba', label: 'Global Business Administration', icon: Briefcase, blurb: 'Study management and international business in a global classroom.', topics: ['International business', 'Marketing & finance', 'Management'] },
  { id: 'cs', label: 'Computer Science', icon: Cpu, blurb: 'Build strong software, AI and systems foundations in a tech-driven economy.', topics: ['Software engineering', 'AI & data', 'Computing systems'] },
];

const LEVELS: Level[] = ['Undergraduate', 'Graduate'];

const chip = (active: boolean) =>
  `shrink-0 min-h-11 px-4 text-sm border transition-colors cursor-pointer whitespace-nowrap ${
    active ? 'bg-[#2A2A2A] text-white border-[#2A2A2A]' : 'bg-white text-[#2A2A2A] border-[#E6DDCC] hover:border-[#94682B]'
  }`;

export function ProgramFinderSection() {
  const { openCallback } = useCallbackModal();
  const [level, setLevel] = useState<Level | 'Any'>('Any');
  const [field, setField] = useState<string>('all');

  const fields = field === 'all' ? FIELDS : FIELDS.filter((f) => f.id === field);
  const levelLabel = level === 'Any' ? 'Undergraduate & Graduate' : level;

  return (
    <section id="programs" className="bgl bgl-gray py-10 md:py-14 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Find your program">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-widest font-medium text-[#57514A]">Program finder</p>
            <h2 className="mt-1 font-serif text-xl sm:text-2xl font-bold text-black">Find the program that fits you</h2>
          </div>
          <p className="text-xs text-[#57514A]">English-taught · IELTS 5.5+ or Duolingo accepted</p>
        </div>

        <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-center">
          <div role="group" aria-label="Level" className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {(['Any', ...LEVELS] as const).map((l) => (
              <button key={l} type="button" aria-pressed={level === l} onClick={() => setLevel(l)} className={chip(level === l)}>
                {l === 'Any' ? 'All levels' : l}
              </button>
            ))}
          </div>
          <span aria-hidden="true" className="hidden h-6 w-px bg-[#D8CCB5] lg:block" />
          <div role="group" aria-label="Field of study" className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button type="button" aria-pressed={field === 'all'} onClick={() => setField('all')} className={chip(field === 'all')}>
              All fields
            </button>
            {FIELDS.map((f) => (
              <button key={f.id} type="button" aria-pressed={field === f.id} onClick={() => setField(f.id)} className={chip(field === f.id)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <motion.ul layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5" aria-live="polite">
          <AnimatePresence mode="popLayout">
            {fields.map((f) => {
              const Icon = f.icon;
              return (
                <motion.li
                  key={f.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white border border-[#E6DDCC]"
                >
                  <button
                    type="button"
                    onClick={() => openCallback({ interest: 'Study in South Korea', source: `program-finder:${f.label} (${levelLabel})` })}
                    className="group flex min-h-[72px] w-full items-center gap-3 p-3 text-left transition-colors hover:bg-[#F3EBDD] cursor-pointer"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-black text-[#D1A95F] transition-colors group-hover:bg-[#94682B] group-hover:text-white">
                      <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-serif text-base font-bold text-black leading-tight">{f.label}</span>
                      <span className="block truncate text-xs text-[#57514A]">{f.topics.join(' · ')}</span>
                      <span className="mt-0.5 block text-[10px] uppercase tracking-widest text-[#8A6020]">{levelLabel}</span>
                    </span>
                    <ArrowRight size={16} className="shrink-0 text-[#8A6020] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-4 text-xs text-[#57514A]">
          Tap a program for details and eligibility. Availability and entry requirements vary by intake; admissions are decided by the universities.
        </p>
      </div>
    </section>
  );
}
