'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Briefcase,
  Scale,
  Compass,
  ShieldCheck,
  FileText,
  Sparkles,
} from 'lucide-react';
import { aboutContent } from '@/content/about';
import { HomeLeadForm } from '@/components/forms/HomeLeadForm';
import { BlossomLeafAnimation } from '@/components/ui/BlossomLeafAnimation';
import { BotanicalWatermark, ColorContrastLeafPair } from '@/components/ui/BotanicalLeafAccents';

const principleIcons = [
  <Scale key="scale" className="w-5 h-5 text-[#A33E11]" />,
  <Compass key="compass" className="w-5 h-5 text-[#A33E11]" />,
  <ShieldCheck key="shield" className="w-5 h-5 text-[#A33E11]" />,
  <FileText key="file" className="w-5 h-5 text-[#A33E11]" />,
];

export function AboutView() {
  const { hero, whatGuidesUs, whatWeHelpWith, approachInPractice, closing } = aboutContent;

  return (
    <div className="bg-[#FBF8F1] min-h-screen relative overflow-hidden">
      {/* ────────────────────────────────────────────── */}
      {/* HERO SECTION with High-Contrast Leaf Drift */}
      {/* ────────────────────────────────────────────── */}
      <section className="relative bg-[#00222B] text-white pt-36 pb-24 md:pt-40 md:pb-28 border-b border-[#E6DDCC] overflow-hidden">
        {/* Glowing Radial Mesh */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0C3844]/60 via-[#00222B]/90 to-[#00222B]"
        />

        {/* 3D Botanical Drift Animation (Dark Mode with Luminous Contrast Leaves) */}
        <BlossomLeafAnimation theme="dark" density="rich" />

        {/* Decorative Top-Right Botanical Watermark */}
        <BotanicalWatermark
          variant="gold"
          opacity={0.15}
          className="w-72 h-72 md:w-96 md:h-96 -top-16 -right-16 md:right-8"
        />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="max-w-4xl"
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

            {/* Modern Micro-Value Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              {[
                'Academic Suitability',
                'Financial Clarity',
                'Practical Requirements',
                'Zero Exaggeration',
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs text-white/90 bg-white/10 hover:bg-white/15 border border-white/15 rounded-full transition-all duration-300 hover:border-[#FC7F4E]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FC7F4E]" />
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ────────────────────────────────────────────── */}
      {/* SECTION 1: WHAT GUIDES US (#approach) */}
      {/* ────────────────────────────────────────────── */}
      <section
        id={whatGuidesUs.id}
        className="py-24 border-b border-[#E6DDCC] bg-white scroll-mt-24 relative overflow-hidden"
      >
        {/* Subtle Background Contrast Leaves Watermark */}
        <BotanicalWatermark
          variant="rust"
          opacity={0.06}
          className="w-80 h-80 -bottom-20 -left-20"
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
                  Core Principles
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1C1A] tracking-tight">
                {whatGuidesUs.headline}
              </h2>
            </div>
            <p className="text-sm text-[#41484B] max-w-md">
              Every student and professional receives measured, realistic advice aligned with institutional reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatGuidesUs.cards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-[#FBF8F1] border border-[#E6DDCC] p-7 transition-all duration-300 hover:border-[#A33E11] hover:shadow-xl flex flex-col justify-between overflow-hidden"
              >
                {/* Expanding Top Accent Bar */}
                <div className="absolute top-0 left-0 h-1 w-10 bg-[#A33E11] group-hover:w-full transition-all duration-500" />

                {/* Background Large Number Watermark */}
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-2 font-serif text-7xl font-bold text-[#1B1C1A]/5 select-none pointer-events-none group-hover:text-[#A33E11]/10 transition-colors"
                >
                  0{i + 1}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-full bg-[#F3EBDD] flex items-center justify-center group-hover:bg-[#A33E11]/10 transition-colors">
                      {principleIcons[i % principleIcons.length]}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#A33E11] px-2.5 py-1 bg-white border border-[#E6DDCC] rounded-full">
                      P-0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-3 group-hover:text-[#A33E11] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#41484B] leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E6DDCC]/60 flex items-center gap-1.5 text-xs font-semibold text-[#A33E11]">
                  <span>Advisory Standard</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────── */}
      {/* SECTION 2: WHAT WE HELP WITH (#what-we-help-with) */}
      {/* ────────────────────────────────────────────── */}
      <section
        id={whatWeHelpWith.id}
        className="py-24 border-b border-[#E6DDCC] bg-[#FBF8F1] scroll-mt-24 relative overflow-hidden"
      >
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
                Scope of Advisory
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1C1A] tracking-tight">
              {whatWeHelpWith.headline}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Education Box */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#E6DDCC] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-[#A33E11] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#E6DDCC]">
                <div className="w-12 h-12 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#A33E11] group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A33E11] block">
                    Pathways & Degrees
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#1B1C1A]">
                    {whatWeHelpWith.education.title}
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                {whatWeHelpWith.education.items.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex items-start gap-3.5 text-sm text-[#41484B] p-2 hover:bg-[#FBF8F1] transition-colors rounded"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#F3EBDD] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={13} className="text-[#A33E11]" />
                    </div>
                    <span className="font-medium text-[#1B1C1A]/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Employment Box */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="bg-white border border-[#E6DDCC] p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-[#A33E11] transition-all duration-300 relative overflow-hidden group"
            >
              <div className="flex items-center gap-4 mb-8 pb-5 border-b border-[#E6DDCC]">
                <div className="w-12 h-12 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#A33E11] group-hover:scale-105 transition-transform">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A33E11] block">
                    International Careers
                  </span>
                  <h3 className="text-base font-bold uppercase tracking-wider text-[#1B1C1A]">
                    {whatWeHelpWith.employment.title}
                  </h3>
                </div>
              </div>

              <ul className="space-y-4">
                {whatWeHelpWith.employment.items.map((item, idx) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex items-start gap-3.5 text-sm text-[#41484B] p-2 hover:bg-[#FBF8F1] transition-colors rounded"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#F3EBDD] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={13} className="text-[#A33E11]" />
                    </div>
                    <span className="font-medium text-[#1B1C1A]/90">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────── */}
      {/* SECTION 3: OUR APPROACH IN PRACTICE */}
      {/* ────────────────────────────────────────────── */}
      <section className="py-24 border-b border-[#E6DDCC] bg-white relative overflow-hidden">
        {/* Contrasting Leaf Watermark */}
        <BotanicalWatermark
          variant="rust"
          opacity={0.05}
          className="w-96 h-96 -bottom-16 -right-16"
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
                Execution Methodology
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1C1A] tracking-tight">
              {approachInPractice.headline}
            </h2>
          </motion.div>

          {/* Interactive Steps Process Pipeline */}
          <div className="relative">
            {/* Desktop Connector Line */}
            <div
              aria-hidden="true"
              className="hidden lg:block absolute top-1/2 -translate-y-8 left-12 right-12 h-[2px] bg-gradient-to-r from-[#A33E11]/20 via-[#A33E11]/60 to-[#FC7F4E]/30 z-0 pointer-events-none"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {approachInPractice.steps.map((step, idx) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: idx * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#FBF8F1] border border-[#E6DDCC] p-7 relative flex flex-col justify-between hover:border-[#A33E11] hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="w-12 h-12 rounded-full bg-white border border-[#E6DDCC] flex items-center justify-center font-serif text-xl font-bold text-[#A33E11] group-hover:bg-[#A33E11] group-hover:text-white transition-colors shadow-sm">
                        {step.number}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#41484B]/70">
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-3 group-hover:text-[#A33E11] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#41484B] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E6DDCC]/70 flex items-center justify-between text-xs font-mono text-[#A33E11]">
                    <span>Step 0{idx + 1} of 04</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────── */}
      {/* SECTION 4: ENQUIRY / DIRECT CONSULTATION (#enquiry) */}
      {/* ────────────────────────────────────────────── */}
      <section
        id={closing.id}
        className="py-24 bg-[#FBF8F1] scroll-mt-24 relative overflow-hidden border-t border-[#E6DDCC]"
      >
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
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E6DDCC] rounded-full">
                <ColorContrastLeafPair />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11]">
                  Begin The Discussion
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B1C1A] leading-[1.2] tracking-tight">
                Plan your international education and career pathway with confidence.
              </h2>

              <p className="text-base sm:text-lg text-[#41484B] leading-relaxed max-w-2xl">
                Connect directly with our team in Ahmedabad for an objective review of your qualifications, goals, and destination opportunities.
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
              <div className="bg-white border-2 border-[#E6DDCC] hover:border-[#A33E11]/60 transition-colors p-2 shadow-xl">
                <HomeLeadForm source="about_page_enquiry" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
