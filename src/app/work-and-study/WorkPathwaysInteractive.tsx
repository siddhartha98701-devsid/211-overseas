'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, CheckCircle2, Briefcase, FileCheck, ShieldCheck } from 'lucide-react';
import { CountryFlag } from '@/components/ui/CountryFlag';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

export interface WorkPathway {
  country: string;
  category: string;
  title: string;
  tag: string;
  text: string;
  href: string;
  image: string;
  alt: string;
  requirements: string[];
  intakeOrTimeline: string;
}

export const WORK_PATHWAYS: WorkPathway[] = [
  // GERMANY
  {
    country: 'Germany',
    category: 'Healthcare',
    title: 'Nurses in Germany',
    tag: 'Primary Focus · Regulated Pathway',
    text: 'Structured route for BSc and GNM nurses with language training up to B2, Defizitbescheid qualification recognition, hospital interviews, and work visa guidance.',
    href: '/work-in-germany/nurses',
    image: '/images/generated/germany-healthcare.jpg',
    alt: 'Healthcare team in modern German clinical setting',
    requirements: ['BSc / GNM Nursing Degree', 'Goethe/Telc B1/B2 German Language', 'State Nursing Council Registration', 'Hospital Interview & Defizitbescheid'],
    intakeOrTimeline: 'Continuous Intakes · 6–9 Months Prep',
  },
  {
    country: 'Germany',
    category: 'Healthcare',
    title: 'Physiotherapists in Germany',
    tag: 'Allied Healthcare · High Demand',
    text: 'Clinical placements in German rehabilitation centers and private clinics. Full support with German language prep, document equivalence, and official recognition.',
    href: '/work-in-germany/physiotherapists',
    image: '/images/generated/germany-physio.jpg',
    alt: 'Physiotherapy rehabilitation practice in Germany',
    requirements: ['BPT / MPT Physiotherapy Degree', 'German B1/B2 Language Proficiency', 'Clinical Internship / Experience', 'Equivalence Assessment in Germany'],
    intakeOrTimeline: 'Ongoing Hiring · 6–8 Months Prep',
  },
  {
    country: 'Germany',
    category: 'Skilled Migration',
    title: 'Opportunity Card (Chancenkarte)',
    tag: 'Points-Based Work Search',
    text: 'A legal pathway allowing qualified professionals to enter Germany for up to one year to secure qualified employment, based on qualification, language, and age points.',
    href: '/contact?interest=Work+in+Other+Countries#enquiry-form',
    image: '/images/web/germany-wide.webp',
    alt: 'Frankfurt financial district and modern German industry',
    requirements: ['Recognised 2+ Year Degree / Diploma', 'Points System: Age, Language, Experience', 'A2 German or B2 English Minimum', 'Proof of Sufficient Living Funds'],
    intakeOrTimeline: 'Open Year-Round · Fast-Track Visa',
  },

  // UAE
  {
    country: 'UAE',
    category: 'Healthcare',
    title: 'Healthcare & Medical Staff in UAE',
    tag: 'DHA · DOH · MOH Regulated',
    text: 'Positions for nurses, doctors, allied health workers, and technicians across Dubai and Abu Dhabi premier private hospital networks and clinics.',
    href: '/work-in-uae/healthcare',
    image: '/images/generated/uae-sector-healthcare.jpg',
    alt: 'Healthcare professionals in modern hospital atrium in Dubai',
    requirements: ['DHA / DOH / MOH License Eligibility', 'DataFlow Primary Source Verification', '2+ Years Post-Registration Experience', 'Clinical Credential Assessment'],
    intakeOrTimeline: 'Direct Recruiter Interviews · 3–5 Months',
  },
  {
    country: 'UAE',
    category: 'Hospitality',
    title: 'Hospitality & Luxury Hotel Roles in UAE',
    tag: '5-Star Resorts · Operations',
    text: 'Front of house, food & beverage, executive culinary, guest relations, and operations management across Dubai, Abu Dhabi, and Ras Al Khaimah luxury properties.',
    href: '/work-in-uae/hospitality',
    image: '/images/generated/uae-sector-hospitality.jpg',
    alt: 'Hospitality and hotel operations staff in luxury Dubai resort',
    requirements: ['Hospitality / Hotel Management Degree', 'Relevant Service Industry Experience', 'Strong English Fluency & Communication', 'Structured Employer Video Interviews'],
    intakeOrTimeline: 'Seasonal & Year-Round Drives · 2–3 Months',
  },
  {
    country: 'UAE',
    category: 'Engineering',
    title: 'Engineering & Construction in UAE',
    tag: 'Infrastructure · Commercial & Tech',
    text: 'Civil engineers, MEP specialists, project managers, BIM modelers, and technical site supervisors for major UAE infrastructure and commercial developments.',
    href: '/work-in-uae/engineering-construction',
    image: '/images/generated/uae-sector-engineering.jpg',
    alt: 'Civil and mechanical engineers on site in Dubai',
    requirements: ['B.Tech / B.E. in Civil, Mechanical, or Electrical', '3+ Years Project / Technical Experience', 'Society of Engineers (SOE) UAE Card Prep', 'Employer Technical Interviews'],
    intakeOrTimeline: 'Ongoing Projects · 2–4 Months Visa',
  },

  // UNITED KINGDOM
  {
    country: 'United Kingdom',
    category: 'Healthcare',
    title: 'UK Health & Care Worker Visa',
    tag: 'NHS & Private Care Sector',
    text: 'Dedicated UK immigration route for registered nurses, senior carers, and allied health professionals with approved employer sponsorship and reduced visa fees.',
    href: '/contact?interest=Work+in+Other+Countries#enquiry-form',
    image: '/images/destinations/uk-london-city.jpg',
    alt: 'London medical and corporate quarter with classic architecture',
    requirements: ['Job Offer from UKVI Licensed Sponsor', 'Confirmed Certificate of Sponsorship (CoS)', 'IELTS for UKVI (or OET) Language Score', 'Police Clearance & TB Test Certificate'],
    intakeOrTimeline: 'Fast-Track 3-Week Visa Processing',
  },
  {
    country: 'United Kingdom',
    category: 'Skilled Migration',
    title: 'UK Skilled Worker Visa',
    tag: 'Tech · Engineering · Finance',
    text: 'Sponsorship-backed employment for software engineers, finance analysts, civil designers, and corporate specialists meeting standard salary thresholds.',
    href: '/contact?interest=Work+in+Other+Countries#enquiry-form',
    image: '/images/destinations/uk-campus.jpg',
    alt: 'Historic corporate and academic streetscapes in the UK',
    requirements: ['Eligible SOC Code Job Offer', 'UKVI Approved Sponsor Licence Holder', 'Applicable Minimum Salary Threshold', 'English B1 CEFR Certification'],
    intakeOrTimeline: 'Employer Dependent · Open Rolling Intakes',
  },

  // JAPAN
  {
    country: 'Japan',
    category: 'Technical & Service',
    title: 'Japan Specified Skilled Worker (SSW)',
    tag: 'Caregiving · Food Service · Industry',
    text: 'Japanese government work visa category for specified industry fields. Direct contracts with Japanese employers with clear renewable residency pathways.',
    href: '/other-destinations/japan',
    image: '/images/destinations/japan-tech-lab.jpg',
    alt: 'Advanced robotics and technical lab in Tokyo',
    requirements: ['JFT-Basic or JLPT N4 Language Exam', 'Sector-Specific Skills Evaluation Test', '18+ Years of Age & Clean Legal Record', 'Pre-Departure Orientation & Placement'],
    intakeOrTimeline: 'Scheduled Quarterly Exam Cycles',
  },
  {
    country: 'Japan',
    category: 'Engineering & IT',
    title: 'Japan Engineering & Specialist in Humanities',
    tag: 'Tech Developers · Global Business',
    text: 'Direct work visa for graduates with degrees in computer science, software engineering, mechanical design, or international trade working for Tokyo tech firms.',
    href: '/other-destinations/japan',
    image: '/images/destinations/japan-tokyo-city.jpg',
    alt: 'Tokyo skyline with futuristic business high-rises',
    requirements: ['Bachelor’s Degree in Relevant Discipline', 'Technical Portfolio / Coding Assessment', 'Basic to Conversational Japanese (N3/N2 Preferred)', 'Certificate of Eligibility (COE) Filing'],
    intakeOrTimeline: 'Direct Employer Sponsoring · 4–6 Months',
  },

  // SINGAPORE
  {
    country: 'Singapore',
    category: 'Corporate & Tech',
    title: 'Singapore Employment Pass (EP) & S Pass',
    tag: 'Tech · Logistics · Regional HQ',
    text: 'Work passes for foreign managers, software architects, finance executives, and specialized technicians under the COMPASS points-based evaluation model.',
    href: '/other-destinations/singapore',
    image: '/images/destinations/singapore-fintech-hub.jpg',
    alt: 'Singapore financial district and Marina Bay architecture',
    requirements: ['Recognised Bachelor’s Degree or Higher', 'Minimum Qualifying Salary by Age Cohort', 'Passing COMPASS Framework Points Score', 'Employer Ministry of Manpower (MOM) Filing'],
    intakeOrTimeline: 'Fast MOM Processing · 3–6 Weeks',
  },

  // AUSTRALIA
  {
    country: 'Australia',
    category: 'Skilled Migration',
    title: 'Australia Employer Sponsored & TSS Visa',
    tag: 'Subclass 482 & 186 Schemes',
    text: 'Temporary Skill Shortage and Employer Nomination pathways for healthcare workers, engineers, ICT managers, and trades with Australian approved sponsors.',
    href: '/other-destinations/australia',
    image: '/images/destinations/australia-sydney-harbour.jpg',
    alt: 'Sydney commercial and harbor business precinct',
    requirements: ['Occupation on Medium & Long-Term List (MLTSSL)', 'VETASSESS / ACS Skills Assessment', 'Minimum 2 Years Post-Qualification Experience', 'IELTS 6.0+ or PTE Academic Equivalent'],
    intakeOrTimeline: 'Expression of Interest / Sponsor Linked',
  },
];

const COUNTRIES = ['All Destinations', 'Germany', 'UAE', 'United Kingdom', 'Japan', 'Singapore', 'Australia'] as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export function WorkPathwaysInteractive() {
  const [selectedCountry, setSelectedCountry] = useState<string>('All Destinations');
  const reduce = usePrefersReducedMotion();

  const filteredPathways = useMemo(() => {
    if (selectedCountry === 'All Destinations') {
      return WORK_PATHWAYS;
    }
    return WORK_PATHWAYS.filter((p) => p.country === selectedCountry);
  }, [selectedCountry]);

  const cardVariants: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: EASE,
        delay: reduce ? 0 : Math.min(i * 0.08, 0.32),
      },
    }),
  };

  return (
    <div className="w-full">
      {/* Sticky Filter Tabs Bar */}
      <div className="sticky top-16 md:top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-y border-[#E6DDCC] py-3.5 -mx-6 px-6 mb-10 transition-all">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-1">
            {COUNTRIES.map((c) => {
              const active = selectedCountry === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCountry(c)}
                  className={`inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all rounded-[2px] cursor-pointer ${
                    active
                      ? 'bg-[#0C3844] text-white shadow-sm'
                      : 'bg-white text-[#2A2A2A] border border-[#E6DDCC] hover:border-[#0C3844] hover:text-[#0C3844]'
                  }`}
                  aria-pressed={active}
                >
                  {c !== 'All Destinations' && (
                    <CountryFlag country={c} className="h-3 w-4 rounded-[1px] object-cover" width={16} height={12} />
                  )}
                  {c}
                </button>
              );
            })}
          </div>
          <span className="text-xs text-[#57514A] font-medium hidden sm:block shrink-0">
            Showing <strong className="text-[#2A2A2A]">{filteredPathways.length}</strong> {filteredPathways.length === 1 ? 'pathway' : 'pathways'}
          </span>
        </div>
      </div>

      {/* Pathways Grid with Staggered Scroll Animation */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredPathways.map((p, index) => (
            <motion.article
              key={`${p.country}-${p.title}`}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              layout
              className="group flex flex-col justify-between overflow-hidden border border-[#E6DDCC] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#0C3844] hover:shadow-[0_16px_36px_rgba(12,56,68,0.12)]"
            >
              <div>
                {/* Image Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#2A2A2A]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Top Badge: Country & Category */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-black/75 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide border border-white/20 rounded-[2px]">
                      <CountryFlag country={p.country} className="h-3 w-4 rounded-[1px] object-cover" width={16} height={12} />
                      {p.country}
                    </span>
                    <span className="px-2 py-0.5 bg-[#0C3844] text-white text-[10px] font-semibold uppercase tracking-wider rounded-[2px]">
                      {p.category}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[11px] uppercase tracking-wider text-white/80 font-medium">{p.tag}</p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#2A2A2A] leading-snug group-hover:text-[#0C3844] transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#57514A] leading-relaxed">
                    {p.text}
                  </p>

                  {/* Requirements List */}
                  <div className="mt-5 pt-4 border-t border-[#E6DDCC]/70">
                    <p className="text-[11px] uppercase tracking-wider font-semibold text-[#2A2A2A] mb-2.5 flex items-center gap-1.5">
                      <FileCheck size={14} className="text-[#0C3844]" />
                      Core Requirements
                    </p>
                    <ul className="space-y-1.5">
                      {p.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-xs text-[#57514A]">
                          <CheckCircle2 size={13} className="text-[#0C3844] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline / Intake */}
                  <div className="mt-4 pt-3 border-t border-dashed border-[#E6DDCC]/80 flex items-center justify-between text-xs">
                    <span className="text-[#8A6020] font-medium flex items-center gap-1">
                      <ShieldCheck size={13} /> Process Timeline:
                    </span>
                    <span className="font-semibold text-[#2A2A2A]">{p.intakeOrTimeline}</span>
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={p.href}
                  className="inline-flex w-full min-h-11 items-center justify-center gap-2 border border-[#0C3844] bg-[#0C3844]/5 hover:bg-[#0C3844] text-[#0C3844] hover:text-white px-5 text-xs uppercase tracking-widest font-semibold transition-all rounded-[2px]"
                >
                  Explore Pathway <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
