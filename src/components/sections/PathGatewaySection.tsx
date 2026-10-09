'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { useCallbackModal } from '@/components/lead/CallbackProvider';
import { whatsappLink } from '@/lib/contact';
import { siteContent } from '@/content/site';
import { countryHref } from '@/content/subpages';

type Mode = 'study' | 'work';

const KOREA_FOCUS = ['Artificial Intelligence', 'Game Design & Animation', 'Engineering & Technology', 'Korean Language Programs'];
const OTHER_STUDY = ['Japan', 'Taiwan', 'Singapore', 'United Kingdom', 'United States', 'Canada', 'Australia'];

const TABS: { id: Mode; label: string; sub: string; icon: typeof GraduationCap }[] = [
  { id: 'study', label: 'Study abroad', sub: 'Degrees & language programs', icon: GraduationCap },
  { id: 'work', label: 'Work abroad', sub: 'Healthcare & professional careers', icon: Briefcase },
];

const ghostBtn =
  'inline-flex items-center gap-2 border px-5 py-3 text-xs uppercase tracking-widest font-medium transition-colors';

export function PathGatewaySection() {
  const [mode, setMode] = useState<Mode>('study');
  const { openCallback } = useCallbackModal();
  const [, germany, uae] = siteContent.pathways;

  return (
    <section id="paths" className="py-16 md:py-24 border-b border-[#E6DDCC] scroll-mt-24" aria-label="Choose study or work abroad">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          compact
          eyebrow="Two ways to go global"
          headline="Do you want to study abroad or work abroad?"
          description="Pick your path and we’ll show you where we can guide you."
        />

        {/* Tabs */}
        <div role="tablist" aria-label="Study or work abroad" className="grid grid-cols-2 gap-3 mb-8 max-w-2xl">
          {TABS.map(({ id, label, sub, icon: Icon }) => {
            const active = mode === id;
            return (
              <button
                key={id}
                role="tab"
                id={`tab-${id}`}
                aria-selected={active}
                aria-controls={`panel-${id}`}
                type="button"
                onClick={() => setMode(id)}
                className={`relative text-left p-4 sm:p-5 border transition-colors cursor-pointer ${
                  active ? 'bg-black text-white border-black' : 'bg-white text-black border-[#E6DDCC] hover:border-black'
                }`}
              >
                <Icon size={22} className={active ? 'text-[#D1A95F]' : 'text-[#8A6020]'} aria-hidden="true" />
                <span className="mt-3 block font-serif text-lg sm:text-xl font-bold">{label}</span>
                <span className={`block text-xs sm:text-sm ${active ? 'text-white/65' : 'text-[#57514A]'}`}>{sub}</span>
                {active && <motion.span layoutId="gateway-underline" className="absolute inset-x-0 bottom-0 h-1 bg-[#94682B]" />}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {mode === 'study' ? (
            <motion.div
              key="study"
              id="panel-study"
              role="tabpanel"
              aria-labelledby="tab-study"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-4"
            >
              <div className="lg:col-span-7 bg-black text-white p-7 sm:p-10 flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden mb-6 border border-[#B88740]/40 bg-[#1E1E1E]">
                  <Image
                    src="/images/generated/korea-gateway.jpg"
                    alt="International students collaborating on modern university campus in Seoul"
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#D1A95F] font-medium">Featured destination</p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold">South Korea</h3>
                <p className="mt-3 text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">{siteContent.pathways[0].description}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {KOREA_FOCUS.map((f) => (
                    <li key={f} className="border border-[#B88740]/60 px-3 py-1.5 text-sm text-white">{f}</li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/study-in-south-korea" className="btn-shine inline-flex items-center gap-2 bg-[#94682B] hover:bg-[#7A5622] text-white px-5 py-3 text-xs uppercase tracking-widest font-medium transition-colors">
                    Explore South Korea <ArrowRight size={14} />
                  </Link>
                  <button type="button" onClick={() => openCallback({ interest: 'Study in South Korea', source: 'gateway-study' })} className={`${ghostBtn} border-white/40 text-white hover:bg-white hover:text-black cursor-pointer`}>
                    Book free counselling
                  </button>
                  <a href={whatsappLink('Hi 211 OVERSEAS, I want to study in South Korea.')} target="_blank" rel="noopener noreferrer" className={`${ghostBtn} border-white/40 text-white hover:bg-[#25D366] hover:border-[#25D366] hover:text-black`}>
                    <WhatsAppIcon size={15} /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 border border-[#E6DDCC] p-7 sm:p-10 flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden mb-6 border border-[#E6DDCC] bg-[#FAF8F5]">
                  <Image
                    src="/images/generated/global-campus.jpg"
                    alt="Diverse international students on global university campus"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#8A6020] font-medium">Also explore</p>
                <h3 className="mt-2 font-serif text-xl sm:text-2xl font-bold text-black">Other study destinations</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {OTHER_STUDY.map((c) => (
                    <li key={c}>
                      <Link
                        href={countryHref(c)}
                        className="inline-block border border-[#E6DDCC] px-3 py-1.5 text-sm text-black hover:bg-[#94682B] hover:border-[#B88740] hover:text-white transition-colors"
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-[#57514A] leading-relaxed">Tap a country for requirements, intakes and how we help.</p>
                <Link href="/other-destinations" className="mt-auto pt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-black group">
                  <span className="link-draw pb-1">See all destinations</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="work"
              id="panel-work"
              role="tabpanel"
              aria-labelledby="tab-work"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4"
            >
              {[
                {
                  key: 'germany',
                  p: germany,
                  label: 'Healthcare careers',
                  roles: ['Nurses', 'Physiotherapists'],
                  interest: 'Work in Germany – Nursing',
                  title: 'Germany',
                  wa: 'Hi 211 OVERSEAS, I want to work in Germany (healthcare).',
                  image: '/images/generated/germany-healthcare.jpg',
                  alt: 'Healthcare professionals collaborating in a modern German hospital',
                },
                {
                  key: 'uae',
                  p: uae,
                  label: 'Multi-industry careers',
                  roles: uae.bullets,
                  interest: 'Work in UAE',
                  title: 'UAE',
                  wa: 'Hi 211 OVERSEAS, I want to work in Dubai / UAE.',
                  image: '/images/generated/uae-careers.jpg',
                  alt: 'International professionals in Dubai overlooking cityscape',
                },
              ].map(({ key, p, label, roles, interest, title, wa, image, alt }, i) => (
                <div key={key} className={`p-7 sm:p-10 flex flex-col ${i === 0 ? 'bg-black text-white' : 'border border-[#E6DDCC] bg-white text-black'}`}>
                  <div className={`relative aspect-[16/9] w-full overflow-hidden mb-6 border ${i === 0 ? 'border-[#B88740]/40 bg-[#1E1E1E]' : 'border-[#E6DDCC] bg-[#FAF8F5]'}`}>
                    <Image
                      src={image}
                      alt={alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <p className={`text-xs uppercase tracking-[0.25em] font-medium ${i === 0 ? 'text-[#D1A95F]' : 'text-[#8A6020]'}`}>{label}</p>
                  <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold">{title}</h3>
                  <p className={`mt-3 text-sm sm:text-base leading-relaxed ${i === 0 ? 'text-white/70' : 'text-[#57514A]'}`}>{p.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {roles.map((r) => (
                      <li key={r} className={`px-3 py-1.5 text-sm border ${i === 0 ? 'border-[#B88740]/60' : 'border-[#E6DDCC]'}`}>{r}</li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8 flex flex-wrap gap-3">
                    <Link href={p.cta.href} className="btn-shine inline-flex items-center gap-2 bg-[#94682B] hover:bg-[#7A5622] text-white px-5 py-3 text-xs uppercase tracking-widest font-medium transition-colors">
                      {p.cta.label} <ArrowRight size={14} />
                    </Link>
                    <button type="button" onClick={() => openCallback({ interest, source: `gateway-work:${title}` })} className={`${ghostBtn} cursor-pointer ${i === 0 ? 'border-white/40 text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'}`}>
                      Book free counselling
                    </button>
                    <a href={whatsappLink(wa)} target="_blank" rel="noopener noreferrer" className={`${ghostBtn} ${i === 0 ? 'border-white/40 text-white hover:bg-[#25D366] hover:border-[#25D366] hover:text-black' : 'border-black text-black hover:bg-[#25D366] hover:border-[#25D366]'}`}>
                      <WhatsAppIcon size={15} /> WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
