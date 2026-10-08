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
  const levels: Level[] = level === 'Any' ? LEVELS : [level];
  const cards = fields.flatMap((f) => levels.map((l) => ({ f, l })));
  const filtered = level !== 'Any' || field !== 'all';

  return (
    <section id="programs" className="bgl bgl-gray py-14 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Find your program">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          eyebrow="Program finder"
          headline="Find the program that fits you"
          description="Pick a level and a field. Every program we guide on is English-taught, with IELTS 5.5+ or Duolingo accepted."
          compact
        />

        {/* Filters */}
        <div className="mb-6 border border-[#E6DDCC] bg-white p-4 sm:p-5 space-y-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-[#57514A] font-medium">1. Level</p>
            <div role="group" aria-label="Level" className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {(['Any', ...LEVELS] as const).map((l) => (
                <button key={l} type="button" aria-pressed={level === l} onClick={() => setLevel(l)} className={chip(level === l)}>
                  {l === 'Any' ? 'All levels' : l}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs uppercase tracking-wider text-[#57514A] font-medium">2. Field of study</p>
            <div role="group" aria-label="Field of study" className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:flex-wrap sm:overflow-visible">
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
          <div className="flex items-center justify-between border-t border-[#E6DDCC] pt-3 text-sm text-[#57514A]">
            <p aria-live="polite">
              <strong className="text-[#2A2A2A]">{cards.length}</strong> program {cards.length === 1 ? 'pathway' : 'pathways'}
            </p>
            {filtered && (
              <button type="button" onClick={() => { setLevel('Any'); setField('all'); }} className="min-h-11 px-2 text-xs uppercase tracking-widest font-medium text-[#8A6020] cursor-pointer">
                Reset filters
              </button>
            )}
          </div>
        </div>

        <motion.ul layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {cards.map(({ f, l }) => {
              const Icon = f.icon;
              return (
                <motion.li
                  key={`${f.id}-${l}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="group flex flex-col bg-white border border-[#E6DDCC] p-5 sm:p-6 transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center bg-black text-[#D1A95F] transition-colors group-hover:bg-[#94682B] group-hover:text-white">
                      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-medium px-2 py-1 bg-[#94682B]/15 text-[#8A6020]">{l}</span>
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-black">{f.label}</h3>
                  <p className="mt-2 text-sm text-[#57514A] leading-relaxed">{f.blurb}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {f.topics.map((t) => (
                      <li key={t} className="text-xs border border-[#E6DDCC] px-2 py-1 text-[#57514A]">{t}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-[#57514A]">English-taught · Seoul · Busan</p>
                  <button
                    type="button"
                    onClick={() => openCallback({ interest: 'Study in South Korea', source: `program-finder:${f.label} (${l})` })}
                    className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 bg-[#94682B] hover:bg-[#7A5622] px-5 text-xs uppercase tracking-widest font-medium text-white transition-colors cursor-pointer"
                  >
                    Get details &amp; eligibility
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-8 text-xs text-[#57514A] max-w-2xl">
          Course availability, universities and entry requirements vary by intake. Your counsellor will share the options that match
          your profile — admissions are decided by the universities.
        </p>
      </div>
    </section>
  );
}
