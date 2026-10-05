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
  `px-4 py-2 text-sm border transition-colors cursor-pointer ${
    active ? 'bg-black text-white border-black' : 'bg-white text-black border-[#E5E5E5] hover:border-black'
  }`;

export function ProgramFinderSection() {
  const { openCallback } = useCallbackModal();
  const [level, setLevel] = useState<Level | 'Any'>('Any');
  const [field, setField] = useState<string>('all');

  const fields = field === 'all' ? FIELDS : FIELDS.filter((f) => f.id === field);
  const levels: Level[] = level === 'Any' ? LEVELS : [level];
  const cards = fields.flatMap((f) => levels.map((l) => ({ f, l })));

  return (
    <section id="programs" className="py-24 md:py-32 bg-[#F5F5F5] border-b border-[#E5E5E5] scroll-mt-24" aria-label="Find your program">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          eyebrow="Program finder"
          headline="Find the program that fits you"
          description="Filter by level and field of study. All programs we guide on are English-taught, with IELTS 5.5+ or Duolingo accepted."
        />

        <div className="space-y-5 mb-10">
          <div role="group" aria-label="Level" className="flex flex-wrap items-center gap-2">
            <span className="w-24 text-xs uppercase tracking-wider text-[#4A4A4A] font-medium">Level</span>
            {(['Any', ...LEVELS] as const).map((l) => (
              <button key={l} type="button" aria-pressed={level === l} onClick={() => setLevel(l)} className={chip(level === l)}>
                {l === 'Any' ? 'All levels' : l}
              </button>
            ))}
          </div>
          <div role="group" aria-label="Field of study" className="flex flex-wrap items-center gap-2">
            <span className="w-24 text-xs uppercase tracking-wider text-[#4A4A4A] font-medium">Field</span>
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

        <p className="mb-4 text-sm text-[#4A4A4A]" aria-live="polite">
          Showing {cards.length} program {cards.length === 1 ? 'pathway' : 'pathways'}
        </p>

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
                  className="group flex flex-col bg-white border border-[#E5E5E5] p-6 transition-shadow hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center bg-black text-[#E59217] transition-colors group-hover:bg-[#E59217] group-hover:text-black">
                      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-medium px-2 py-1 bg-[#E59217]/15 text-[#A86500]">{l}</span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-bold text-black">{f.label}</h3>
                  <p className="mt-2 text-sm text-[#4A4A4A] leading-relaxed">{f.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {f.topics.map((t) => (
                      <li key={t} className="text-xs border border-[#E5E5E5] px-2 py-1 text-[#4A4A4A]">{t}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-[#4A4A4A]">English-taught · Seoul · Busan</p>
                  <button
                    type="button"
                    onClick={() => openCallback({ interest: 'Study in South Korea', source: `program-finder:${f.label} (${l})` })}
                    className="mt-5 inline-flex items-center gap-2 self-start text-xs uppercase tracking-widest font-medium text-black cursor-pointer"
                  >
                    <span className="link-draw pb-1">Get details &amp; eligibility</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>

        <p className="mt-8 text-xs text-[#4A4A4A] max-w-2xl">
          Course availability, universities and entry requirements vary by intake. Your counsellor will share the options that match
          your profile — admissions are decided by the universities.
        </p>
      </div>
    </section>
  );
}
