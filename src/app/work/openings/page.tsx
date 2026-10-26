'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Filter, Calendar, MapPin, Briefcase, Building2, CheckCircle2, AlertCircle } from 'lucide-react';
import { currentOpeningsContent } from '@/content/work/openings';
import { getActiveVacancies, type Vacancy } from '@/content/vacancies';
import { siteContent } from '@/content/site';

export default function CurrentOpeningsPage() {
  const { hero, filters, cardLabels, emptyState } = currentOpeningsContent;
  const allActiveVacancies = getActiveVacancies();

  const [destinationFilter, setDestinationFilter] = useState('All');
  const [sectorFilter, setSectorFilter] = useState('All');
  const [experienceFilter, setExperienceFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredVacancies = allActiveVacancies.filter((v) => {
    if (destinationFilter !== 'All' && v.country !== destinationFilter) return false;
    if (sectorFilter !== 'All' && v.sector !== sectorFilter) return false;
    if (experienceFilter !== 'All' && v.experience !== experienceFilter) return false;
    if (statusFilter !== 'All' && v.status !== statusFilter) return false;
    return true;
  });

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-3">
            {hero.eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            {hero.h1}
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            {hero.paragraph}
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Filters Bar */}
        <div className="bg-white border border-[#E6DDCC] p-6 mb-12 shadow-sm">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#E6DDCC]">
            <Filter size={18} className="text-[#A33E11]" />
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#1B1C1A]">
              Filter Verified Vacancies
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Destination */}
            <div>
              <label className="block text-[11px] font-semibold text-[#71787B] uppercase tracking-wider mb-1">
                {filters.destination.label}
              </label>
              <select
                value={destinationFilter}
                onChange={(e) => setDestinationFilter(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
              >
                {filters.destination.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Sector */}
            <div>
              <label className="block text-[11px] font-semibold text-[#71787B] uppercase tracking-wider mb-1">
                {filters.sector.label}
              </label>
              <select
                value={sectorFilter}
                onChange={(e) => setSectorFilter(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
              >
                {filters.sector.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-[11px] font-semibold text-[#71787B] uppercase tracking-wider mb-1">
                {filters.experience.label}
              </label>
              <select
                value={experienceFilter}
                onChange={(e) => setExperienceFilter(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
              >
                {filters.experience.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-[11px] font-semibold text-[#71787B] uppercase tracking-wider mb-1">
                {filters.status.label}
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-[#FBF8F1] border border-[#E6DDCC] focus:outline-none focus:border-[#A33E11] text-[#1B1C1A]"
              >
                {filters.status.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Vacancy Listings or Authoritative Empty State */}
        {filteredVacancies.length === 0 ? (
          <div className="bg-white border border-[#E6DDCC] p-10 md:p-14 text-center max-w-3xl mx-auto shadow-sm">
            <div className="w-14 h-14 rounded-full bg-[#F3EBDD] flex items-center justify-center text-[#A33E11] mx-auto mb-5">
              <Briefcase className="w-7 h-7" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1B1C1A] mb-3">
              {emptyState.headline}
            </h3>
            <p className="text-base text-[#41484B] leading-relaxed max-w-xl mx-auto mb-8">
              {emptyState.paragraph}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={emptyState.ctas.primary.href}
                className="w-full sm:w-auto px-7 py-3 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                {emptyState.ctas.primary.label}
              </Link>
              <Link
                href={emptyState.ctas.secondary.href}
                className="w-full sm:w-auto px-7 py-3 border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                {emptyState.ctas.secondary.label}
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVacancies.map((vacancy: Vacancy) => (
              <div
                key={vacancy.id}
                className="bg-white border border-[#E6DDCC] p-6 flex flex-col justify-between hover:border-[#A33E11] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 bg-[#F3EBDD] text-[#A33E11] text-[11px] font-semibold uppercase tracking-wider">
                      {vacancy.country} · {vacancy.sector}
                    </span>
                    <span className="text-[11px] text-[#71787B] font-mono">
                      {cardLabels.lastVerified}: {vacancy.lastVerified}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-1">
                    {vacancy.title}
                  </h3>
                  <p className="text-xs text-[#71787B] flex items-center gap-1 mb-4">
                    <MapPin size={13} />
                    <span>{vacancy.cityOrRegion}</span>
                  </p>

                  <div className="space-y-2 py-3 border-t border-b border-[#E6DDCC] text-xs text-[#41484B] mb-4">
                    <div className="flex justify-between">
                      <span className="text-[#71787B]">Compensation:</span>
                      <span className="font-semibold text-[#1B1C1A]">
                        {vacancy.compensation.currency} {vacancy.compensation.amount} ({vacancy.compensation.basis}) {vacancy.compensation.period}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71787B]">Experience:</span>
                      <span>{vacancy.experience}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#71787B]">Accommodation/Meals:</span>
                      <span>{vacancy.accommodationMeals}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#41484B] mb-6">
                    <strong className="text-[#1B1C1A]">Eligibility:</strong> {vacancy.eligibility}
                  </p>
                </div>

                <Link
                  href={`/contact?vacancyId=${encodeURIComponent(vacancy.id)}#work-enquiry`}
                  className="w-full text-center py-2.5 px-4 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  {cardLabels.button}
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* Mandatory Vacancy Microcopy Callout */}
        <div className="mt-14 p-4 border border-[#E6DDCC] bg-white text-xs text-[#71787B] flex items-start gap-2.5 max-w-4xl mx-auto">
          <AlertCircle size={16} className="text-[#A33E11] mt-0.5 shrink-0" />
          <p>{siteContent.disclaimers.vacancy}</p>
        </div>
      </div>
    </div>
  );
}
