'use client';

import React, { useState, useMemo, useRef } from 'react';
import Image from 'next/image';
import {
  MapPin,
  GraduationCap,
  Award,
  Calendar,
  Compass,
  CheckCircle2,
  ExternalLink,
  Search,
  Building2,
  BookOpen,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Map as MapIcon,
  Layers,
} from 'lucide-react';
import { INBOUND_COLLEGES } from '@/content/inboundColleges';

const CATEGORIES = [
  'All Disciplines',
  'Science & Research',
  'Engineering & Technology',
  'Medicine & Clinical',
  'Management & Arts',
] as const;

const REGIONS = ['All India', 'Gujarat', 'North', 'South', 'West', 'East'] as const;

export function InboundCollegesInteractive() {
  const [selectedId, setSelectedId] = useState<string>('parul-university');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Disciplines');
  const [selectedRegion, setSelectedRegion] = useState<string>('All India');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mapMode, setMapMode] = useState<'standard' | 'satellite'>('standard');

  // Filtered colleges
  const filteredColleges = useMemo(() => {
    return INBOUND_COLLEGES.filter((c) => {
      const matchCat =
        selectedCategory === 'All Disciplines' || c.category === selectedCategory;
      const matchRegion =
        selectedRegion === 'All India' ||
        (selectedRegion === 'Gujarat' && (c.region === 'Gujarat' || c.state.toLowerCase().includes('gujarat'))) ||
        c.region === selectedRegion;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        !q ||
        c.name.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q) ||
        c.state.toLowerCase().includes(q) ||
        c.popularTracks.some((t) => t.toLowerCase().includes(q));
      return matchCat && matchRegion && matchSearch;
    });
  }, [selectedCategory, selectedRegion, searchQuery]);

  // Ensure an active college is always selected from filtered set
  const activeCollege = useMemo(() => {
    const found = filteredColleges.find((c) => c.id === selectedId);
    return found || filteredColleges[0] || INBOUND_COLLEGES[0];
  }, [filteredColleges, selectedId]);

  const carouselRef = useRef<HTMLDivElement>(null);
  const mobileChipsRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStartLeft = useRef(0);

  const handleSelectCollege = (id: string, autoScrollToDossier = false) => {
    setSelectedId(id);
    if (typeof window !== 'undefined') {
      const el = document.querySelector(`[data-college-id="${id}"]`) as HTMLElement;
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
      const chip = mobileChipsRef.current?.querySelector<HTMLElement>(`[data-chip-id="${id}"]`);
      if (chip) {
        chip.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
      if (autoScrollToDossier && window.innerWidth < 1024) {
        const dossier = document.getElementById('college-dossier-panel');
        if (dossier) {
          const yOffset = -135;
          const y = dossier.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  const handlePrevCollege = () => {
    const currentIndex = filteredColleges.findIndex((c) => c.id === activeCollege.id);
    const prevIndex = (currentIndex - 1 + filteredColleges.length) % filteredColleges.length;
    handleSelectCollege(filteredColleges[prevIndex].id, true);
  };

  const handleNextCollege = () => {
    const currentIndex = filteredColleges.findIndex((c) => c.id === activeCollege.id);
    const nextIndex = (currentIndex + 1) % filteredColleges.length;
    handleSelectCollege(filteredColleges[nextIndex].id, true);
  };

  const handleScrollRow = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const scrollAmount = (el.firstElementChild as HTMLElement)?.offsetWidth || 300;
    el.scrollBy({ left: direction === 'left' ? -scrollAmount - 16 : scrollAmount + 16, behavior: 'smooth' });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = carouselRef.current;
    if (!el) return;
    isDragging.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollStartLeft.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = carouselRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    el.scrollLeft = scrollStartLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  const handleApplyClick = () => {
    const formSection = document.getElementById('student-form') || document.getElementById('inbound-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="bg-white border border-[#E6DDCC] p-4 sm:p-6 rounded-[2px] shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-lg">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#41484B]/60"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by institute name, city, or discipline..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#FAF8F5] border border-[#E6DDCC] text-[#1B1C1A] placeholder-[#41484B]/60 focus:outline-none focus:border-[#A33E11] focus:ring-1 focus:ring-[#A33E11] rounded-[2px] transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#41484B] hover:text-[#1B1C1A]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Region Tabs (Desktop) */}
          <div className="hidden lg:flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#41484B] mr-1">
              Region:
            </span>
            {REGIONS.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 text-xs uppercase tracking-wider font-semibold rounded-[2px] transition-all cursor-pointer whitespace-nowrap ${
                  selectedRegion === reg
                    ? 'bg-[#0C3844] text-white'
                    : 'bg-[#FAF8F5] text-[#41484B] hover:bg-[#FAF8F5] hover:text-[#A33E11] border border-[#E6DDCC]'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Dedicated Mobile & Tablet Filter Dropdowns (< lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-3 pt-2 border-t border-[#E6DDCC]/60">
          <div className="space-y-1">
            <label
              htmlFor="discipline-filter-mobile"
              className="block text-[11px] font-semibold uppercase tracking-wider text-[#41484B]"
            >
              Academic Discipline
            </label>
            <div className="relative">
              <select
                id="discipline-filter-mobile"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full text-xs font-semibold py-2.5 pl-3 pr-8 bg-[#FAF8F5] border border-[#E6DDCC] rounded-[2px] text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] appearance-none"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#41484B] pointer-events-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="region-filter-mobile"
              className="block text-[11px] font-semibold uppercase tracking-wider text-[#41484B]"
            >
              Campus Region
            </label>
            <div className="relative">
              <select
                id="region-filter-mobile"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full text-xs font-semibold py-2.5 pl-3 pr-8 bg-[#FAF8F5] border border-[#E6DDCC] rounded-[2px] text-[#1B1C1A] focus:outline-none focus:border-[#A33E11] appearance-none"
              >
                {REGIONS.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={14}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#41484B] pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Category Pills (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-2 border-t border-[#E6DDCC]/60">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap rounded-full transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#0C3844] text-white shadow-xs'
                  : 'bg-[#FAF8F5] text-[#1B1C1A] border border-[#E6DDCC] hover:border-[#A33E11] hover:text-[#A33E11]'
              }`}
            >
              <GraduationCap size={13} />
              <span>{cat}</span>
            </button>
          ))}
          <span className="text-xs text-[#41484B] font-medium ml-auto hidden lg:inline shrink-0">
            Showing <strong className="text-[#1B1C1A]">{filteredColleges.length}</strong> premier institutions
          </span>
        </div>

        {/* Active Filters Reset Indicator */}
        {(selectedCategory !== 'All Disciplines' || selectedRegion !== 'All India' || searchQuery.trim() !== '') && (
          <div className="flex items-center justify-between pt-2 border-t border-[#E6DDCC]/40 text-xs text-[#41484B]">
            <span>
              Showing <strong className="text-[#1B1C1A]">{filteredColleges.length}</strong> of {INBOUND_COLLEGES.length} institutions
            </span>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Disciplines');
                setSelectedRegion('All India');
                setSearchQuery('');
              }}
              className="text-[#A33E11] hover:underline font-semibold cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Institution Selection Horizontal Scroll-Snap Carousel */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#1B1C1A] font-bold">
              Select an Institution to Inspect Campus Map &amp; Admissions
            </p>
            <p className="text-xs text-[#41484B] mt-0.5">
              Swipe or click any institution to update the live campus dossier below
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => handleScrollRow('left')}
              className="h-10 w-10 rounded-full border border-[#E6DDCC] bg-white text-[#1B1C1A] hover:border-[#A33E11] hover:text-[#A33E11] flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
              aria-label="Previous institutions"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => handleScrollRow('right')}
              className="h-10 w-10 rounded-full border border-[#E6DDCC] bg-white text-[#1B1C1A] hover:border-[#A33E11] hover:text-[#A33E11] flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
              aria-label="Next institutions"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden py-2 -mx-6 px-6 sm:mx-0 sm:px-0 cursor-grab active:cursor-grabbing"
          style={{ scrollSnapType: 'x mandatory' }}
          role="region"
          aria-label="Institutions carousel"
        >
          {filteredColleges.map((col) => {
            const isSelected = activeCollege?.id === col.id;
            return (
              <button
                key={col.id}
                type="button"
                data-college-id={col.id}
                onClick={() => handleSelectCollege(col.id)}
                className={`w-[80vw] sm:w-[280px] md:w-[300px] xl:w-[320px] shrink-0 snap-start text-left p-4 sm:p-5 border transition-all duration-200 flex flex-col justify-between rounded-2xl cursor-pointer ${
                  isSelected
                    ? 'border-[#A33E11] bg-[#A33E11]/10 shadow-sm ring-1 ring-[#A33E11]'
                    : 'border-[#E6DDCC] bg-white hover:border-[#A33E11] hover:bg-[#FAF8F5]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-[2px] bg-white border border-[#E6DDCC] text-[#0C3844] truncate max-w-[140px]">
                      {col.badge}
                    </span>
                    <span className="text-[11px] text-[#A33E11] font-semibold">
                      {col.city}
                    </span>
                  </div>

                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#1B1C1A] leading-snug line-clamp-3 min-h-[2.5rem]">
                    {col.name}
                  </h4>

                  <p className="mt-2 text-xs text-[#41484B] leading-relaxed line-clamp-2">
                    {col.nirfRank}
                  </p>
                </div>

                <div className="mt-4 pt-2.5 border-t border-[#E6DDCC]/60 flex items-center justify-between text-xs">
                  <span className={`font-semibold ${isSelected ? 'text-[#A33E11]' : 'text-[#41484B]'}`}>
                    {isSelected ? '● Active Selection' : 'Inspect Dossier'}
                  </span>
                  <ChevronRight size={14} className={isSelected ? 'text-[#A33E11]' : 'text-[#41484B]'} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Sticky University Selector Bar (Sticks below header on mobile) */}
      <div className="block lg:hidden sticky top-[68px] sm:top-[72px] z-30 bg-[#FAF8F5]/95 backdrop-blur-md py-3 px-4 -mx-6 sm:mx-0 sm:rounded-[2px] border-y sm:border border-[#E6DDCC] shadow-xs">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <Building2 size={15} className="text-[#0C3844] shrink-0" />
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1B1C1A] truncate">
              {activeCollege.shortName}
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={handlePrevCollege}
              aria-label="Previous institution"
              className="h-8 w-8 rounded-full border border-[#E6DDCC] bg-white text-[#1B1C1A] hover:border-[#A33E11] hover:text-[#A33E11] flex items-center justify-center cursor-pointer active:scale-90"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-[11px] font-semibold text-[#41484B] px-1">
              {filteredColleges.findIndex((c) => c.id === activeCollege.id) + 1}/{filteredColleges.length}
            </span>
            <button
              type="button"
              onClick={handleNextCollege}
              aria-label="Next institution"
              className="h-8 w-8 rounded-full border border-[#E6DDCC] bg-white text-[#1B1C1A] hover:border-[#A33E11] hover:text-[#A33E11] flex items-center justify-center cursor-pointer active:scale-90"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Quick Dropdown */}
        <div className="relative mb-2">
          <select
            value={activeCollege.id}
            onChange={(e) => handleSelectCollege(e.target.value, true)}
            className="w-full text-xs font-semibold py-2 px-3 bg-white border border-[#E6DDCC] rounded-[2px] text-[#1B1C1A] focus:outline-none focus:border-[#A33E11]"
            aria-label="Select institution"
          >
            {filteredColleges.map((col) => (
              <option key={col.id} value={col.id}>
                {col.shortName} – {col.city} ({col.badge})
              </option>
            ))}
          </select>
        </div>

        {/* Horizontally scrollable chip bar */}
        <div
          ref={mobileChipsRef}
          className="flex items-center gap-1.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pt-1"
        >
          {filteredColleges.map((col) => {
            const isSelected = activeCollege?.id === col.id;
            return (
              <button
                key={col.id}
                data-chip-id={col.id}
                type="button"
                onClick={() => handleSelectCollege(col.id, true)}
                className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0C3844] text-white shadow-xs'
                    : 'bg-white text-[#41484B] border border-[#E6DDCC] hover:text-[#1B1C1A]'
                }`}
              >
                {col.shortName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Split Layout: Interactive Map (Left) + College Dossier (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Map Hub (5 cols, order-2 on mobile, order-1 on desktop) */}
        <div className="order-2 lg:order-1 lg:col-span-5 bg-white border border-[#E6DDCC] rounded-[2px] overflow-hidden shadow-xs flex flex-col">
          {/* Map View Header / Toggle Switch */}
          <div className="p-4 border-b border-[#E6DDCC] flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <Compass size={18} className="text-[#0C3844]" />
              <h3 className="font-serif text-sm font-bold text-[#1B1C1A]">
                Google Maps Campus View
              </h3>
            </div>

            <div className="flex items-center bg-white p-0.5 border border-[#E6DDCC] rounded-[2px] text-xs">
              <button
                type="button"
                onClick={() => setMapMode('standard')}
                className={`flex items-center gap-1 px-2.5 py-1 font-semibold rounded-[2px] transition-colors cursor-pointer ${
                  mapMode === 'standard'
                    ? 'bg-[#0C3844] text-white shadow-xs'
                    : 'text-[#41484B] hover:text-[#1B1C1A]'
                }`}
              >
                <Layers size={12} />
                <span>Map</span>
              </button>
              <button
                type="button"
                onClick={() => setMapMode('satellite')}
                className={`flex items-center gap-1 px-2.5 py-1 font-semibold rounded-[2px] transition-colors cursor-pointer ${
                  mapMode === 'satellite'
                    ? 'bg-[#0C3844] text-white shadow-xs'
                    : 'text-[#41484B] hover:text-[#1B1C1A]'
                }`}
              >
                <MapIcon size={12} />
                <span>Satellite</span>
              </button>
            </div>
          </div>

          {/* Interactive Google Maps Container */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] lg:aspect-[1/1] w-full bg-[#FAF8F5] overflow-hidden flex-1 min-h-[380px]">
            <iframe
              key={`${activeCollege.id}-${mapMode}`}
              title={`Google Map of ${activeCollege.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                activeCollege.name.replace(/\s*\([^)]*\)/g, '') + ', ' + activeCollege.city + ', India'
              )}&t=${mapMode === 'satellite' ? 'k' : 'm'}&z=15&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Campus Info Overlay Card at bottom of map */}
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-2.5 border border-[#E6DDCC] text-xs flex items-center justify-between rounded-[2px] shadow-sm">
              <div className="min-w-0 pr-2">
                <span className="font-semibold text-[#1B1C1A] block truncate text-[12px]">
                  {activeCollege.name} ({activeCollege.city})
                </span>
                <span className="text-[11px] text-[#41484B] block truncate">
                  {activeCollege.address}
                </span>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  activeCollege.name + ' ' + activeCollege.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#0C3844] hover:underline shrink-0 ml-2 text-[11px]"
              >
                <span>Full Map</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Quick Hub Navigation Strip below Map */}
          <div className="p-3 bg-[#FAF8F5] border-t border-[#E6DDCC] flex items-center justify-between text-xs text-[#41484B]">
            <span className="flex items-center gap-1.5 font-medium">
              <Building2 size={14} className="text-[#0C3844]" />
              <span>Campus: <strong>{activeCollege.shortName}</strong></span>
            </span>
            <span className="text-[11px] text-[#A33E11] font-semibold uppercase tracking-wider">
              {activeCollege.city}, {activeCollege.state}
            </span>
          </div>
        </div>

        {/* Right Column: Comprehensive College Dossier Card (7 cols, order-1 on mobile, order-2 on desktop) */}
        <div id="college-dossier-panel" className="order-1 lg:order-2 lg:col-span-7 bg-white border border-[#E6DDCC] rounded-[2px] shadow-xs overflow-hidden flex flex-col justify-between scroll-mt-32">
          <div>
            {/* College Header Banner with Campus Photo */}
            <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-[#00222B]">
              <Image
                src={activeCollege.image}
                alt={`${activeCollege.name} campus building`}
                fill
                priority
                sizes="(min-width: 1024px) 680px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

              {/* Badges on Banner */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#0C3844]/90 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase rounded-[2px] border border-white/20">
                  <Award size={13} className="text-[#FC7F4E]" />
                  {activeCollege.badge}
                </span>

                <span className="px-2.5 py-1 bg-black/75 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide border border-white/20 rounded-[2px]">
                  Est. {activeCollege.established}
                </span>
              </div>

              {/* Bottom Banner Title & City */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-[11px] uppercase tracking-widest text-[#FC7F4E] font-bold">
                  {activeCollege.category} · {activeCollege.state}
                </p>
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mt-1 text-white">
                  {activeCollege.name}
                </h3>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 border-b border-[#E6DDCC] bg-[#FAF8F5]">
              <div className="p-3.5 border-r border-[#E6DDCC]">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#41484B] block">
                  National Ranking
                </span>
                <p className="font-serif text-xs sm:text-sm font-bold text-[#0C3844] mt-0.5">
                  {activeCollege.nirfRank}
                </p>
              </div>
              <div className="p-3.5 border-r border-[#E6DDCC]">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#41484B] block">
                  Global QS Stature
                </span>
                <p className="font-serif text-xs sm:text-sm font-bold text-[#1B1C1A] mt-0.5">
                  {activeCollege.qsRank}
                </p>
              </div>
              <div className="p-3.5 col-span-2 sm:col-span-1">
                <span className="text-[10px] uppercase tracking-wider font-semibold text-[#41484B] block">
                  Instruction Medium
                </span>
                <p className="font-serif text-xs sm:text-sm font-bold text-[#A33E11] mt-0.5">
                  100% English
                </p>
              </div>
            </div>

            {/* Content Details Body */}
            <div className="p-6 sm:p-7 space-y-6">
              {/* Institution Overview */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#1B1C1A] mb-2 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-[#0C3844]" />
                  Academic Profile &amp; International Research Focus
                </h4>
                <p className="text-sm text-[#41484B] leading-relaxed">
                  {activeCollege.description}
                </p>
              </div>

              {/* Popular Tracks & Programs */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-[#1B1C1A] mb-2.5 flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-[#0C3844]" />
                  Key Inbound Degree &amp; Exchange Pathways
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCollege.popularTracks.map((trk) => (
                    <span
                      key={trk}
                      className="px-3 py-1 bg-[#FC7F4E]/10 text-[#A33E11] text-xs font-semibold border border-[#FC7F4E]/30 rounded-[2px]"
                    >
                      {trk}
                    </span>
                  ))}
                </div>
              </div>

              {/* International Logistics & Facilities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E6DDCC]/70">
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-[#1B1C1A] mb-2 flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#0C3844]" />
                    International Student Facilities
                  </h4>
                  <ul className="space-y-1.5">
                    {activeCollege.facilities.map((fac) => (
                      <li key={fac} className="flex items-start gap-2 text-xs text-[#41484B]">
                        <CheckCircle2 size={13} className="text-[#0C3844] shrink-0 mt-0.5" />
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#1B1C1A] mb-1 flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#0C3844]" />
                      Admissions &amp; Intake Cycles
                    </h4>
                    <p className="text-xs text-[#41484B] leading-relaxed">
                      {activeCollege.intakeSemesters}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#1B1C1A] mb-1 flex items-center gap-1.5">
                      <DollarSign size={14} className="text-[#0C3844]" />
                      Subsidized International Tuition
                    </h4>
                    <p className="text-xs text-[#41484B] leading-relaxed">
                      {activeCollege.tuitionRange}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-bold text-[#1B1C1A] mb-1 flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#0C3844]" />
                      Official Campus Address
                    </h4>
                    <p className="text-xs text-[#41484B] leading-relaxed">
                      {activeCollege.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Links Footer */}
          <div className="p-6 bg-[#FAF8F5] border-t border-[#E6DDCC] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleApplyClick}
                className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors rounded-[2px] cursor-pointer inline-flex items-center gap-2"
              >
                <span>Inquire for {activeCollege.shortName}</span>
                <ChevronRight size={14} />
              </button>

              {activeCollege.url && (
                <a
                  href={activeCollege.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#0C3844] text-[#0C3844] hover:bg-[#0C3844] hover:text-white px-5 py-3 text-xs uppercase tracking-widest font-semibold transition-colors rounded-[2px] cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Official Admissions</span>
                  <ExternalLink size={13} />
                </a>
              )}

              <button
                type="button"
                onClick={() => setMapMode(mapMode === 'standard' ? 'satellite' : 'standard')}
                className="border border-[#1B1C1A] text-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white px-5 py-3 text-xs uppercase tracking-widest font-semibold transition-colors rounded-[2px] cursor-pointer inline-flex items-center gap-1.5"
              >
                <Compass size={13} />
                <span>{mapMode === 'standard' ? 'View Satellite Map' : 'View Street Map'}</span>
              </button>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                activeCollege.name + ' ' + activeCollege.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#0C3844] hover:underline"
            >
              <span>Open in Google Maps</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
