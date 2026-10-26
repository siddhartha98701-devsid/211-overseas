'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Wallet,
  Award,
  FileCheck,
  Briefcase,
  GraduationCap,
  Globe2,
  HelpCircle,
  Clock,
} from 'lucide-react';
import { resourcesHubContent } from '@/content/resources';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';
import { BlossomLeafAnimation } from '@/components/ui/BlossomLeafAnimation';
import { BotanicalWatermark, ColorContrastLeafPair } from '@/components/ui/BotanicalLeafAccents';

const guideMetadata = [
  {
    icon: <Wallet className="w-5 h-5 text-[#A33E11]" />,
    badge: 'Cost Calculator',
    readTime: '6 min read',
    category: 'Finance',
    image: '/images/destinations/singapore-fintech-hub.jpg',
    alt: 'Financial and cost calculator planning for study abroad',
  },
  {
    icon: <Award className="w-5 h-5 text-[#A33E11]" />,
    badge: 'Funding Breakdown',
    readTime: '8 min read',
    category: 'Scholarships',
    image: '/images/destinations/usa-harvard-yard.jpg',
    alt: 'International scholarships and university funding options',
  },
  {
    icon: <FileCheck className="w-5 h-5 text-[#A33E11]" />,
    badge: 'Official Checklist',
    readTime: '7 min read',
    category: 'Admissions',
    image: '/images/destinations/uk-cambridge.jpg',
    alt: 'University admissions documentation and application checklist',
  },
  {
    icon: <Briefcase className="w-5 h-5 text-[#A33E11]" />,
    badge: 'Compliance Tool',
    readTime: '5 min read',
    category: 'Employment',
    image: '/images/generated/uae-careers.jpg',
    alt: 'Verified overseas employment contract and offer evaluation',
  },
  {
    icon: <GraduationCap className="w-5 h-5 text-[#A33E11]" />,
    badge: 'Destination Dossier',
    readTime: '9 min read',
    category: 'Destinations',
    image: '/images/korea/seoul-skyline.jpg',
    alt: 'South Korea academic institutions and degree pathways',
  },
  {
    icon: <Globe2 className="w-5 h-5 text-[#A33E11]" />,
    badge: 'Interactive Matrix',
    readTime: '10 min read',
    category: 'Overview',
    image: '/images/generated/global-campus.jpg',
    alt: 'Global university campuses and destination comparison',
  },
];

export function ResourcesView() {
  const { hero, featuredGuides, popularQuestions, closing } = resourcesHubContent;
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterOptions = ['All', 'Finance', 'Scholarships', 'Admissions', 'Employment', 'Destinations'];

  const filteredGuides = featuredGuides.guides.filter((guide, idx) => {
    if (selectedFilter === 'All') return true;
    return guideMetadata[idx]?.category === selectedFilter;
  });

  return (
    <div className="bg-[#FBF8F1] min-h-screen relative overflow-hidden">
      {/* ────────────────────────────────────────────── */}
      {/* HERO SECTION with High-Contrast Leaf Drift */}
      {/* ────────────────────────────────────────────── */}
      <section className="relative bg-[#00222B] text-white pt-36 pb-24 md:pt-40 md:pb-28 border-b border-[#E6DDCC] overflow-hidden">
        {/* Radial Depth Mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0C3844]/60 via-[#00222B]/90 to-[#00222B]"
        />

        {/* 3D Botanical Drift Animation (Dark Theme with Glowing Contrast Leaves) */}
        <BlossomLeafAnimation theme="dark" density="rich" />

        {/* Top-Right Decorative Contrast Leaf Watermark */}
        <BotanicalWatermark
          variant="gold"
          opacity={0.14}
          className="w-80 h-80 md:w-96 md:h-96 -top-16 -right-16"
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              {/* Pill Eyebrow with Contrasting Leaves */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-5 rounded-full bg-white/5 border border-white/15 backdrop-blur-sm">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E]">
                  {hero.eyebrow}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-6 tracking-tight">
                {hero.h1}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/85 max-w-3xl leading-relaxed mb-8 font-light">
                {hero.paragraph}
              </p>

              {/* Interactive Category Filter Pills */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.55 }}
                className="flex flex-wrap items-center gap-2 pt-2"
              >
                <span className="text-xs font-mono uppercase text-white/50 mr-2">Filter Topics:</span>
                {filterOptions.map((filter) => {
                  const isActive = selectedFilter === filter;
                  return (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#FC7F4E] text-[#00222B] font-bold shadow-sm'
                          : 'bg-white/10 text-white/80 hover:bg-white/15 hover:text-white border border-white/10'
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden border border-white/20 bg-black/40 shadow-2xl rounded-[3px] group">
                <Image
                  src="/images/inbound/indian-campus-library.jpg"
                  alt="211 Overseas official resource library and academic documentation archives"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 95vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC7F4E] block mb-0.5">
                    Official Resource Hub
                  </span>
                  <p className="font-serif text-xs sm:text-sm font-semibold leading-tight drop-shadow-sm">
                    Structured Frameworks for Budgets, Visas &amp; Admissions
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────── */}
      {/* SECTION 1: FEATURED GUIDES (#guides) */}
      {/* ────────────────────────────────────────────── */}
      <section
        id={featuredGuides.id}
        className="py-24 border-b border-[#E6DDCC] bg-white scroll-mt-24 relative overflow-hidden"
      >
        {/* Subtle Background Leaf Watermark */}
        <BotanicalWatermark
          variant="rust"
          opacity={0.06}
          className="w-80 h-80 -bottom-16 -left-16"
        />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-3">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Structured Knowledge
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1C1A] tracking-tight">
                {featuredGuides.headline}
              </h2>
            </div>
            <p className="text-sm text-[#41484B] max-w-md">
              Evidence-based breakdowns of international tuition, scholarship criteria, document frameworks, and employment protections.
            </p>
          </motion.div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredGuides.map((guide, originalIdx) => {
              const meta =
                guideMetadata.find((m) => m.badge.toLowerCase().includes(guide.title.split(' ')[0].toLowerCase())) ||
                guideMetadata[originalIdx % guideMetadata.length];

              return (
                <motion.div
                  key={guide.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: originalIdx * 0.08 }}
                  whileHover={{ y: -6 }}
                  className="group relative bg-[#FBF8F1] border border-[#E6DDCC] flex flex-col justify-between hover:border-[#A33E11] hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Expanding Top Accent Bar */}
                  <div className="absolute top-0 left-0 h-1 w-10 bg-[#A33E11] group-hover:w-full transition-all duration-500 z-10" />

                  {/* Photo Header */}
                  {meta.image && (
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#00222B]">
                      <Image
                        src={meta.image}
                        alt={meta.alt || guide.title}
                        fill
                        sizes="(min-width: 1024px) 360px, 95vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-white bg-black/50 px-2.5 py-0.5 rounded backdrop-blur-xs">
                          {meta.badge}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-7 flex flex-col justify-between flex-1">
                    <div>
                      {/* Top Meta Icon */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-full bg-white border border-[#E6DDCC] flex items-center justify-center group-hover:bg-[#A33E11]/10 group-hover:scale-105 transition-all shadow-sm">
                          {meta.icon}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#41484B]/70 font-mono">
                          <Clock size={12} />
                          {meta.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1B1C1A] mb-3 group-hover:text-[#A33E11] transition-colors leading-tight">
                        {guide.title}
                      </h3>

                      <p className="text-sm text-[#41484B] leading-relaxed mb-6">
                        {guide.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E6DDCC]/70 flex items-center justify-end">
                      <Link
                        href={guide.href}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#A33E11] group-hover:text-[#85320D]"
                      >
                        <span>Read Guide</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────── */}
      {/* SECTION 2: POPULAR QUESTIONS TO START WITH */}
      {/* ────────────────────────────────────────────── */}
      <section className="py-24 border-b border-[#E6DDCC] bg-[#FBF8F1] relative overflow-hidden">
        {/* Contrasting Botanical Watermark */}
        <BotanicalWatermark
          variant="emerald"
          opacity={0.07}
          className="w-96 h-96 -top-16 -right-20"
        />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <ColorContrastLeafPair />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                Common Queries
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1C1A] tracking-tight">
              {popularQuestions.headline}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {popularQuestions.items.map((item, idx) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <Link
                  href={item.href}
                  className="p-6 bg-white border border-[#E6DDCC] flex items-center justify-between gap-5 hover:border-[#A33E11] hover:shadow-lg transition-all duration-300 group shadow-sm h-full"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#A33E11] shrink-0 mt-0.5 group-hover:bg-[#A33E11] group-hover:text-white transition-colors">
                      <HelpCircle size={15} />
                    </div>
                    <span className="font-serif text-base md:text-lg font-semibold text-[#1B1C1A] group-hover:text-[#A33E11] transition-colors leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white border border-[#E6DDCC] flex items-center justify-center text-[#A33E11] shrink-0 group-hover:translate-x-1 group-hover:border-[#A33E11] transition-all">
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick FAQ Link */}
          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#A33E11] hover:text-[#85320D] transition-colors"
            >
              <span>Explore all 12 official admissions & visa FAQs</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────── */}
      {/* SECTION 3: CONSULTATION SECTION */}
      {/* ────────────────────────────────────────────── */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-[#E6DDCC]">
        {/* Subtle Ambient High-Contrast Leaf Drift */}
        <BlossomLeafAnimation theme="contrast" density="subtle" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FBF8F1] border border-[#E6DDCC] rounded-full">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Have A Specific Question?
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1C1A] leading-[1.2] tracking-tight">
                Get clear, measured guidance for your international plans.
              </h2>

              <p className="text-base sm:text-lg text-[#41484B] leading-relaxed max-w-2xl">
                Connect directly with our advisory team to review university admission criteria, scholarship eligibility, and visa procedures.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href={closing.ctas.primary.href}
                  className="px-7 py-4 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center gap-2 group"
                >
                  <span>{closing.ctas.primary.label}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href={closing.ctas.secondary.href}
                  className="px-7 py-4 border border-[#1B1C1A] bg-white hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-sm"
                >
                  {closing.ctas.secondary.label}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto"
            >
              <div className="bg-[#FBF8F1] border-2 border-[#E6DDCC] hover:border-[#A33E11]/60 transition-colors p-2 shadow-xl">
                <HomeLeadForm source="resources_hub_page" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
