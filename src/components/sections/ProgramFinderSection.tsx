'use client';

import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Search,
  RotateCcw,
  Clock,
  Coins,
  Calendar,
  Building2,
  ArrowRight,
  Filter,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { useCallbackModal } from '@/components/lead/CallbackProvider';

export const FIELDS = [
  { id: 'cs', label: 'Computer Science & AI' },
  { id: 'game', label: 'Game Development & Media' },
  { id: 'business', label: 'Business & Management' },
  { id: 'eng', label: 'Engineering' },
  { id: 'korean', label: 'Korean Language' },
] as const;

interface ProgramItem {
  id: string;
  title: string;
  university: string;
  level: 'Undergraduate' | 'Graduate' | 'Language Program';
  field: 'Computer Science & AI' | 'Game Development & Media' | 'Business & Management' | 'Engineering' | 'Korean Language';
  duration: string;
  tuition: string;
  intake: 'Spring (March)' | 'Fall (September)' | 'Year-round';
  tags: string[];
  description: string;
}

const PROGRAMS: ProgramItem[] = [
  {
    id: 'snu-ai',
    title: 'M.Sc. Artificial Intelligence & Robotics',
    university: 'Seoul National University (SNU)',
    level: 'Graduate',
    field: 'Computer Science & AI',
    duration: '2 Years',
    tuition: 'Approx. $3,400 / semester',
    intake: 'Spring (March)',
    tags: ['100% English Taught', 'GKS Eligible', 'Seoul'],
    description: 'Premier AI research center with comprehensive lab grants and high-tier faculty mentorship.',
  },
  {
    id: 'kaist-cs',
    title: 'B.Sc. Computer Science & Software Engineering',
    university: 'KAIST',
    level: 'Undergraduate',
    field: 'Computer Science & AI',
    duration: '4 Years',
    tuition: 'Approx. $3,200 / semester',
    intake: 'Fall (September)',
    tags: ['Full Tuition Waiver Available', '100% English', 'Daejeon'],
    description: 'World-renowned STEM institution with extensive research funding and direct tech industry placements.',
  },
  {
    id: 'yonsei-gba',
    title: 'Global Bachelor of Business Administration',
    university: 'Yonsei University (UIC)',
    level: 'Undergraduate',
    field: 'Business & Management',
    duration: '4 Years',
    tuition: 'Approx. $4,800 / semester',
    intake: 'Spring (March)',
    tags: ['Underwood Int’l College', '100% English', 'Seoul'],
    description: 'Prestigious SKY institution offering AACSB-accredited business curriculum tailored to global careers.',
  },
  {
    id: 'ku-gmba',
    title: 'Global Master of Business Administration (MBA)',
    university: 'Korea University',
    level: 'Graduate',
    field: 'Business & Management',
    duration: '1.5 Years',
    tuition: 'Approx. $5,500 / semester',
    intake: 'Fall (September)',
    tags: ['Top 1% Global Faculty', 'English Track', 'Seoul'],
    description: 'Accelerated international business curriculum designed for future business executives and entrepreneurs.',
  },
  {
    id: 'sejong-game',
    title: 'B.Sc. Game Software & Interactive Media',
    university: 'Sejong University',
    level: 'Undergraduate',
    field: 'Game Development & Media',
    duration: '4 Years',
    tuition: 'Approx. $3,900 / semester',
    intake: 'Spring (March)',
    tags: ['Industry Studio Internships', 'English Track', 'Seoul'],
    description: 'Renowned gaming hub with practical game engine programming and 3D environment pipelines.',
  },
  {
    id: 'dongguk-anim',
    title: 'B.A. Animation & Film Visual Effects',
    university: 'Dongguk University',
    level: 'Undergraduate',
    field: 'Game Development & Media',
    duration: '4 Years',
    tuition: 'Approx. $4,200 / semester',
    intake: 'Fall (September)',
    tags: ['Film Powerhouse', 'Studio Facilities', 'Seoul'],
    description: 'Hands-on creative visual storytelling, 2D/3D animation, and post-production cinema pipelines.',
  },
  {
    id: 'postech-eng',
    title: 'B.Eng. Materials Science & Electronic Engineering',
    university: 'POSTECH',
    level: 'Undergraduate',
    field: 'Engineering',
    duration: '4 Years',
    tuition: 'Approx. $3,500 / semester',
    intake: 'Spring (March)',
    tags: ['Semiconductor Labs', 'Full Scholarships', 'Pohang'],
    description: 'Elite science research institute with state-of-the-art semiconductor and cleanroom facilities.',
  },
  {
    id: 'hanyang-eng',
    title: 'M.Eng. Mechanical & Automotive Systems',
    university: 'Hanyang University',
    level: 'Graduate',
    field: 'Engineering',
    duration: '2 Years',
    tuition: 'Approx. $4,400 / semester',
    intake: 'Fall (September)',
    tags: ['Co-op with Hyundai/Kia', 'English Track', 'Seoul'],
    description: 'Strong industry partnerships in Seoul for vehicle automation, robotics, and battery technology.',
  },
  {
    id: 'skku-korean',
    title: 'Regular Intensive Korean Language Program',
    university: 'Sungkyunkwan University (SKKU)',
    level: 'Language Program',
    field: 'Korean Language',
    duration: '10 Weeks – 1 Year',
    tuition: 'Approx. $1,400 / term (10 wks)',
    intake: 'Year-round',
    tags: ['KLEC Certified', 'TOPIK Fast-Track', 'Seoul'],
    description: 'Comprehensive Korean language immersion for academic progression and cultural adaptation.',
  },
  {
    id: 'khu-korean',
    title: 'Korean Language & University Foundation Course',
    university: 'Kyung Hee University',
    level: 'Language Program',
    field: 'Korean Language',
    duration: '10 Weeks – 1 Year',
    tuition: 'Approx. $1,350 / term (10 wks)',
    intake: 'Year-round',
    tags: ['Cultural Trips Included', 'D-4 Visa Support', 'Seoul'],
    description: 'Intensive speaking, listening, and TOPIK preparation with guaranteed university degree counseling.',
  },
  {
    id: 'unist-biotech',
    title: 'M.Sc. Biomedical Science & Bioengineering',
    university: 'UNIST',
    level: 'Graduate',
    field: 'Engineering',
    duration: '2 Years',
    tuition: 'Approx. $3,100 / semester',
    intake: 'Spring (March)',
    tags: ['100% English', 'Full Stipend Available', 'Ulsan'],
    description: 'Pioneering biotechnology and nanomedicine research with international living stipends.',
  },
  {
    id: 'snu-ds',
    title: 'B.Sc. Data Science & Applied Statistics',
    university: 'Seoul National University (SNU)',
    level: 'Undergraduate',
    field: 'Computer Science & AI',
    duration: '4 Years',
    tuition: 'Approx. $3,500 / semester',
    intake: 'Fall (September)',
    tags: ['National Flagship', 'Merit Scholarships', 'Seoul'],
    description: 'Rigorous foundations in big data analytics, mathematical modeling, and AI computing applications.',
  },
];

const LEVELS = ['All', 'Undergraduate', 'Graduate', 'Language Program'] as const;
const FIELD_OPTIONS = [
  'All',
  'Computer Science & AI',
  'Game Development & Media',
  'Business & Management',
  'Engineering',
  'Korean Language',
] as const;
const BUDGETS = ['All', 'Under $3,500/sem', '$3,500 – $4,500/sem', '$4,500+/sem'] as const;
const INTAKES = ['All', 'Spring (March)', 'Fall (September)', 'Year-round'] as const;

export function ProgramFinderSection() {
  const { openCallback } = useCallbackModal();
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedField, setSelectedField] = useState<string>('All');
  const [selectedBudget, setSelectedBudget] = useState<string>('All');
  const [selectedIntake, setSelectedIntake] = useState<string>('All');

  const isFiltered =
    selectedLevel !== 'All' ||
    selectedField !== 'All' ||
    selectedBudget !== 'All' ||
    selectedIntake !== 'All';

  const resetFilters = () => {
    setSelectedLevel('All');
    setSelectedField('All');
    setSelectedBudget('All');
    setSelectedIntake('All');
  };

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((p) => {
      if (selectedLevel !== 'All' && p.level !== selectedLevel) return false;
      if (selectedField !== 'All' && p.field !== selectedField) return false;

      if (selectedBudget !== 'All') {
        const cost = parseInt(p.tuition.replace(/[^0-9]/g, ''), 10);
        if (selectedBudget === 'Under $3,500/sem' && cost > 3500) return false;
        if (selectedBudget === '$3,500 – $4,500/sem' && (cost < 3500 || cost > 4500)) return false;
        if (selectedBudget === '$4,500+/sem' && cost < 4500) return false;
      }

      if (selectedIntake !== 'All' && p.intake !== selectedIntake) return false;

      return true;
    });
  }, [selectedLevel, selectedField, selectedBudget, selectedIntake]);

  return (
    <section id="programs" className="bgl bgl-gray py-16 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Program finder">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          eyebrow="Interactive Program Finder"
          headline="Explore top South Korean degrees &amp; language tracks"
          description="Filter by study level, academic discipline, tuition budget, and intake timing. All programs we guide on offer English tracks or dedicated language immersion."
        />

        {/* Sticky filter bar on mobile, structured filter board on desktop */}
        <div className="sticky top-[72px] z-30 -mx-6 px-6 py-4 bg-[#FAF8F5]/95 backdrop-blur border-y border-[#E6DDCC] shadow-sm mb-8 sm:static sm:bg-transparent sm:border-0 sm:shadow-none sm:p-0">
          <div className="bg-white border border-[#E6DDCC] p-4 sm:p-6 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-[#E6DDCC] pb-3">
              <div className="flex items-center gap-2 text-[#2A2A2A]">
                <Filter size={16} className="text-[#94682B]" />
                <span className="text-xs uppercase tracking-widest font-bold">Step-by-Step Filters</span>
              </div>
              {isFiltered && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-xs text-[#94682B] hover:text-[#7A5622] font-semibold cursor-pointer transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Filter 1: Level */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#57514A] font-semibold mb-1.5">
                  1. Study Level
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full border border-[#E6DDCC] bg-white px-3 py-2 text-xs sm:text-sm text-[#2A2A2A] font-medium focus:border-[#94682B] focus:outline-none"
                >
                  {LEVELS.map((l) => (
                    <option key={l} value={l}>
                      {l === 'All' ? 'All Study Levels' : l}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter 2: Field */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#57514A] font-semibold mb-1.5">
                  2. Field of Study
                </label>
                <select
                  value={selectedField}
                  onChange={(e) => setSelectedField(e.target.value)}
                  className="w-full border border-[#E6DDCC] bg-white px-3 py-2 text-xs sm:text-sm text-[#2A2A2A] font-medium focus:border-[#94682B] focus:outline-none"
                >
                  {FIELD_OPTIONS.map((f) => (
                    <option key={f} value={f}>
                      {f === 'All' ? 'All Disciplines' : f}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter 3: Budget */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#57514A] font-semibold mb-1.5">
                  3. Tuition Budget
                </label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full border border-[#E6DDCC] bg-white px-3 py-2 text-xs sm:text-sm text-[#2A2A2A] font-medium focus:border-[#94682B] focus:outline-none"
                >
                  {BUDGETS.map((b) => (
                    <option key={b} value={b}>
                      {b === 'All' ? 'All Budgets' : b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter 4: Intake */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#57514A] font-semibold mb-1.5">
                  4. Preferred Intake
                </label>
                <select
                  value={selectedIntake}
                  onChange={(e) => setSelectedIntake(e.target.value)}
                  className="w-full border border-[#E6DDCC] bg-white px-3 py-2 text-xs sm:text-sm text-[#2A2A2A] font-medium focus:border-[#94682B] focus:outline-none"
                >
                  {INTAKES.map((i) => (
                    <option key={i} value={i}>
                      {i === 'All' ? 'All Intakes' : i}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Quick Pills for Field */}
            <div className="hidden sm:flex flex-wrap gap-2 pt-2 border-t border-[#E6DDCC]/60">
              <span className="text-[11px] uppercase tracking-wider text-[#57514A] font-medium self-center mr-1">
                Popular:
              </span>
              {FIELD_OPTIONS.slice(1).map((f) => {
                const active = selectedField === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setSelectedField(active ? 'All' : f)}
                    className={`px-2.5 py-1 text-xs border transition-colors cursor-pointer ${
                      active
                        ? 'border-[#94682B] bg-[#94682B] text-white font-medium'
                        : 'border-[#E6DDCC] bg-white text-[#57514A] hover:border-[#2A2A2A]'
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Results Count & Status */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs sm:text-sm text-[#57514A]" aria-live="polite">
            Showing <strong className="text-black font-semibold">{filteredPrograms.length}</strong> matching{' '}
            {filteredPrograms.length === 1 ? 'programme' : 'programmes'}
          </p>
          {isFiltered && (
            <button
              type="button"
              onClick={resetFilters}
              className="text-xs text-[#94682B] hover:text-[#7A5622] font-semibold sm:hidden"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Cards Grid / Empty State */}
        <AnimatePresence mode="wait">
          {filteredPrograms.length === 0 ? (
            <motion.div
              key="empty-state"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="border border-[#E6DDCC] bg-white p-8 sm:p-12 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF8F5] border border-[#E6DDCC] text-[#94682B]">
                <Search size={24} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-black mb-2">
                No exact matches for this combination
              </h3>
              <p className="text-sm text-[#57514A] max-w-md mx-auto leading-relaxed mb-6">
                Korean universities offer dozens of additional tailored degree programs not listed in this preview. Our advisors can match your exact GPA, budget, and language background.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={resetFilters}
                  className="btn-shine inline-flex items-center gap-2 bg-[#94682B] hover:bg-[#7A5622] text-white px-6 py-2.5 text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  <RotateCcw size={13} />
                  <span>Reset All Filters</span>
                </button>
                <button
                  type="button"
                  onClick={() => openCallback({ interest: 'Study in South Korea', source: 'program-finder-empty-state' })}
                  className="border border-black px-6 py-2.5 text-xs uppercase tracking-widest font-medium text-black hover:bg-black hover:text-white transition-colors"
                >
                  Speak to an Advisor
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results-grid"
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredPrograms.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="group flex flex-col justify-between border border-[#E6DDCC] bg-white p-6 transition-all hover:border-[#94682B] hover:shadow-[0_12px_32px_rgba(42,42,42,0.08)]"
                >
                  <div>
                    {/* Header tags */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-[#94682B]/10 text-[#94682B] border border-[#94682B]/20">
                        {p.level}
                      </span>
                      <span className="text-[10px] text-[#57514A] uppercase tracking-wider truncate">
                        {p.field}
                      </span>
                    </div>

                    {/* Program Title & University */}
                    <h3 className="font-serif text-lg font-bold text-black leading-snug group-hover:text-[#94682B] transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="flex items-center gap-1.5 text-xs font-semibold text-[#57514A] mb-4">
                      <Building2 size={13} className="text-[#94682B] shrink-0" />
                      <span>{p.university}</span>
                    </p>

                    <p className="text-xs text-[#57514A] leading-relaxed mb-4">
                      {p.description}
                    </p>

                    {/* Meta Specs */}
                    <div className="grid grid-cols-2 gap-2 py-3 border-y border-[#E6DDCC]/70 text-xs text-[#57514A] mb-4">
                      <div className="flex items-center gap-1.5">
                        <Clock size={13} className="text-[#94682B] shrink-0" />
                        <span>{p.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-[#94682B] shrink-0" />
                        <span className="truncate">{p.intake}</span>
                      </div>
                      <div className="col-span-2 flex items-center gap-1.5">
                        <Coins size={13} className="text-[#94682B] shrink-0" />
                        <span className="font-semibold text-black">{p.tuition}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {p.tags.map((t) => (
                        <span key={t} className="text-[10px] bg-[#FAF8F5] border border-[#E6DDCC] px-2 py-0.5 text-[#57514A]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Enquire */}
                  <button
                    type="button"
                    onClick={() =>
                      openCallback({
                        interest: 'Study in South Korea',
                        source: `program-finder:${p.university} – ${p.title}`,
                      })
                    }
                    className="btn-shine w-full inline-flex items-center justify-center gap-2 bg-[#94682B] hover:bg-[#7A5622] text-white px-4 py-2.5 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight size={13} />
                  </button>
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
