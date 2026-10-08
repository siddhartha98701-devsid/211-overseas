'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, GraduationCap, BookOpen, Stethoscope, Activity, ConciergeBell, Wrench, Users, type LucideIcon } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { whatsappLink } from '@/lib/contact';

interface Segment {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  text: string;
  interest: string;
  href: string;
  cta: string;
}

// Interests must match siteContent.form.interests so the popup pre-selects them.
const SEGMENTS: Segment[] = [
  { id: 'students', label: 'Students', icon: GraduationCap, headline: 'Planning your first degree abroad?', text: 'Explore English-taught undergraduate programs in South Korea, with guidance from application to visa.', interest: "Bachelor's in South Korea", href: '/study-in-south-korea', cta: 'Explore study in South Korea' },
  { id: 'graduates', label: 'Graduates', icon: BookOpen, headline: 'Ready for a master’s or a global career start?', text: 'See graduate programs in fields like AI, engineering, business and design — matched to your profile.', interest: "Master's in South Korea", href: '/study-in-south-korea', cta: 'See graduate pathways' },
  { id: 'nurses', label: 'Nurses', icon: Stethoscope, headline: 'A structured healthcare career in Germany', text: 'Eligibility assessment, German language preparation, qualification recognition and documentation support.', interest: 'Work in Germany – Nursing', href: '/work-in-germany', cta: 'Explore Germany for nurses' },
  { id: 'physios', label: 'Physiotherapists', icon: Activity, headline: 'Take your physiotherapy career to Germany', text: 'We guide eligible physiotherapists through recognition, interviews, visa documentation and pre-departure.', interest: 'Work in Germany – Physiotherapy', href: '/work-in-germany', cta: 'Explore Germany for physios' },
  { id: 'hospitality', label: 'Hospitality Professionals', icon: ConciergeBell, headline: 'Hotels & hospitality in the UAE', text: 'Explore career opportunities across the UAE’s hotels, resorts and hospitality industry.', interest: 'Work in UAE', href: '/work-in-uae', cta: 'Explore UAE careers' },
  { id: 'skilled', label: 'Skilled Professionals', icon: Wrench, headline: 'Engineering, construction & technical roles', text: 'The UAE and other countries offer opportunities across skilled trades and technical professions.', interest: 'Work in UAE', href: '/work-in-uae', cta: 'See sectors hiring' },
  { id: 'parents', label: 'Parents', icon: Users, headline: 'Deciding for your child’s future?', text: 'Get clear, transparent answers on process, documentation, timelines and costs — and speak to us as a family.', interest: 'Not Sure – Need Counselling', href: '/about', cta: 'How we work with families' },
];

export function WhoCanConnectSection() {
  const [active, setActive] = useState(SEGMENTS[0].id);
  const { openCallback } = useCallbackModal();
  const seg = SEGMENTS.find((s) => s.id === active) ?? SEGMENTS[0];
  const Icon = seg.icon;

  return (
    <section id="who" className="py-24 md:py-32 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Who can connect with us">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          eyebrow="Who can connect with us"
          headline="I am a…"
          description="Whatever your stage, we start with your profile — not a country. Pick the one that describes you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div role="tablist" aria-label="Who are you?" aria-orientation="vertical" className="lg:col-span-5 flex flex-wrap lg:flex-col gap-2">
            {SEGMENTS.map((s) => {
              const on = s.id === active;
              const SIcon = s.icon;
              return (
                <button
                  key={s.id}
                  role="tab"
                  id={`seg-${s.id}`}
                  aria-selected={on}
                  aria-controls="seg-panel"
                  type="button"
                  onClick={() => setActive(s.id)}
                  className={`flex items-center gap-3 px-4 py-3 text-left border transition-colors cursor-pointer lg:w-full ${
                    on ? 'bg-[#94682B] border-[#94682B] text-white shadow-sm' : 'bg-white border-[#E6DDCC] text-[#2A2A2A] hover:border-[#94682B] hover:text-[#94682B]'
                  }`}
                >
                  <SIcon size={18} aria-hidden="true" className={on ? 'text-white' : 'text-[#8A6020]'} />
                  <span className="font-medium text-sm sm:text-base">{s.label}</span>
                  <ArrowRight size={16} aria-hidden="true" className={`ml-auto hidden lg:block transition-transform ${on ? 'translate-x-0' : '-translate-x-2 opacity-0'}`} />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7" id="seg-panel" role="tabpanel" aria-labelledby={`seg-${seg.id}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={seg.id}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
                className="bg-black text-white p-7 sm:p-10 min-h-[22rem] flex flex-col"
              >
                <span className="flex h-12 w-12 items-center justify-center bg-[#94682B] text-white">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#D1A95F] font-medium">{seg.label}</p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold leading-tight">{seg.headline}</h3>
                <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">{seg.text}</p>
                <div className="mt-auto pt-8 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => openCallback({ interest: seg.interest, source: `audience:${seg.label}` })}
                    className="btn-shine bg-[#94682B] hover:bg-[#7A5622] text-white px-6 py-3 text-xs uppercase tracking-widest font-medium transition-colors cursor-pointer"
                  >
                    Book free counselling
                  </button>
                  <a
                    href={whatsappLink(`Hi 211 OVERSEAS, I am a ${seg.label.toLowerCase().replace(/s$/, '')} and would like guidance.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-white/40 px-5 py-3 text-xs uppercase tracking-widest font-medium hover:bg-[#25D366] hover:border-[#25D366] hover:text-black transition-colors"
                  >
                    <WhatsAppIcon size={15} /> WhatsApp
                  </a>
                  <Link href={seg.href} className="group inline-flex items-center gap-2 px-2 py-3 text-xs uppercase tracking-widest font-medium text-white">
                    <span className="link-draw pb-1">{seg.cta}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
