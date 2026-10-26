import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe2,
  Building,
  ShieldCheck,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Palette,
  UtensilsCrossed,
  Microscope,
  Compass,
  FileText,
  BadgePercent,
  Plane,
  Home as HomeIcon,
  Users,
  Network,
  MessageSquare,
  FileCheck2,
  SmilePlus,
  BarChart3,
  Layers,
} from 'lucide-react';
import { BlossomLeafAnimation } from '@/components/ui/BlossomLeafAnimation';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaStrip } from '@/components/sections/CtaStrip';
import { FormSection } from '@/components/sections/FormSection';
import { GUJARAT_UNIVERSITIES, OTHER_UNIVERSITIES } from '@/content/inbound-universities';
import { InboundUniversitySlider } from '@/components/inbound/InboundUniversitySlider';
import { InboundEnquiryForm } from '@/components/inbound/InboundEnquiryForm';
import { InboundCollaborationButton } from '@/components/inbound/InboundCollaborationButton';

export const metadata: Metadata = {
  title: 'Study in India & Institutional Collaborations | Inbound Portal | 211 Overseas',
  description:
    'Explore universities across India for international student admissions and institutional academic partnerships, dual degrees, and faculty exchange.',
};

// Section B Data
const WHY_STUDY_IN_INDIA = [
  {
    icon: Globe2,
    title: 'Diverse Academic Pathways',
    text: 'Explore engineering, healthcare, business, design, humanities and more.',
    image: '/images/inbound/iit-bombay.jpg',
  },
  {
    icon: Building,
    title: 'Education Within Reach',
    text: 'Compare tuition, accommodation and living costs across institutions and cities.',
    image: '/images/inbound/bhu-varanasi.jpg',
  },
  {
    icon: Users,
    title: 'Multicultural Campuses',
    text: 'Connect with students from different countries, cultures and backgrounds.',
    image: '/images/inbound/indian-campus-quad.jpg',
  },
  {
    icon: ShieldCheck,
    title: 'Knowledge Meets Innovation',
    text: 'Discover institutions connected to research, entrepreneurship and evolving industries.',
    image: '/images/inbound/indian-campus-lab.jpg',
  },
];

// Section E Data
const ACADEMIC_OPTIONS = [
  {
    icon: GraduationCap,
    title: 'Engineering & Technology',
    text: 'Computer Science, AI, Data Science, Electronics, Mechanical and Civil Engineering.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Allied Sciences',
    text: 'Pharmacy, Physiotherapy, Public Health, Biotechnology and eligible professional courses.',
  },
  {
    icon: Briefcase,
    title: 'Business & Management',
    text: 'BBA, MBA, Finance, Marketing, Entrepreneurship and International Business.',
  },
  {
    icon: Palette,
    title: 'Design & Creative Studies',
    text: 'Architecture, Communication, Fashion, Media, Animation and Digital Design.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Hospitality & Tourism',
    text: 'Hotel Management, Culinary Arts, Tourism and Hospitality Operations.',
  },
  {
    icon: Microscope,
    title: 'Sciences & Humanities',
    text: 'Life Sciences, Psychology, Economics, Environmental Studies and Liberal Arts.',
  },
];

// Section F Data
const OUR_SERVICES = [
  {
    icon: Compass,
    title: 'University & Course Discovery',
    text: 'Shortlisting institutions and programmes aligned to your eligibility, interests and budget.',
  },
  {
    icon: FileText,
    title: 'Application Guidance',
    text: 'Supporting document preparation, application processes and academic communication.',
  },
  {
    icon: BadgePercent,
    title: 'Financial & Scholarship Guidance',
    text: 'Understanding fees and exploring eligible tuition concessions or assistance schemes.',
  },
  {
    icon: Plane,
    title: 'Visa & Pre-Arrival Preparation',
    text: 'Guidance on official requirements, appropriate documentation and travel preparation.',
  },
  {
    icon: HomeIcon,
    title: 'Accommodation & Arrival Coordination',
    text: 'Exploring student accommodation and appropriate airport reception or orientation arrangements.',
  },
  {
    icon: Users,
    title: 'Student Support & Communication',
    text: 'A defined point of contact for agreed onboarding and institution-related coordination.',
  },
];

// Section G Data
const YOUR_JOURNEY_STEPS = [
  {
    number: '01',
    title: 'Tell Us About Yourself',
    desc: 'Share your background, country of residence, interests and goals.',
  },
  {
    number: '02',
    title: 'Explore Your Options',
    desc: 'Understand suitable institutions, programmes, eligibility and costs.',
  },
  {
    number: '03',
    title: 'Prepare Your Application',
    desc: 'Organise documents and navigate institutional processes.',
  },
  {
    number: '04',
    title: 'Plan Your Arrival',
    desc: 'Prepare for travel, accommodation and applicable visa formalities.',
  },
  {
    number: '05',
    title: 'Begin Your Next Chapter',
    desc: 'Settle in with appropriate onboarding and coordination support.',
  },
];

// Section J Data
const INSTITUTION_CARDS = [
  {
    icon: Network,
    title: 'Institutional Outreach',
    text: 'Connecting prospective applicants with accurate information on Indian academic options.',
  },
  {
    icon: MessageSquare,
    title: 'Student Engagement',
    text: 'Structured communication and information provision in overseas markets.',
  },
  {
    icon: FileCheck2,
    title: 'Application Readiness',
    text: 'Supporting document completeness and preparedness before submission.',
  },
  {
    icon: SmilePlus,
    title: 'Student Transition Support',
    text: 'Developing consistent pre-arrival, orientation and onboarding workflows.',
  },
  {
    icon: BarChart3,
    title: 'Impact & Accountability',
    text: 'Measuring verified enquiries, readiness, processing outcomes and service experience.',
  },
  {
    icon: Layers,
    title: 'Scalable Systems',
    text: 'Progressively introducing standardised, technology-supported coordination.',
  },
];

// Section L FAQs Data (Verbatim)
const INBOUND_FAQS = [
  {
    q: 'Who can apply to Indian universities through 211 Overseas?',
    a: 'All eligible students—domestic, NRI, and international applicants—can explore degree options and admission pathways across Indian universities, subject to course qualifications, admission categories and the institution’s own procedures.',
  },
  {
    q: 'Are the universities listed partners of 211 Overseas?',
    a: 'No formal partnership is implied. The universities are presented as independent options to explore; institutions make their own admission decisions.',
  },
  {
    q: 'Can I explore universities in different Indian states?',
    a: 'Yes. We help prospective students explore suitable universities across India. The order of universities on this page does not limit the destinations we cover.',
  },
  {
    q: 'Are scholarships available?',
    a: 'Some universities and eligible schemes offer assistance or tuition concessions. Eligibility, selection and funding amounts are determined independently.',
  },
  {
    q: 'Can 211 Overseas help with student visa paperwork?',
    a: 'We offer documentation and process guidance; decisions on visas are made solely by the competent authorities.',
  },
  {
    q: 'Can 211 Overseas guarantee admission or placement?',
    a: 'No. Admission and other official decisions remain with the competent institutions and authorities.',
  },
];

export default function InboundPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION A: HERO */}
      {/* ────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#E6DDCC] bg-[#FAF8F5]"
        aria-label="Inbound education hero"
      >
        <BlossomLeafAnimation />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#41484B]">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[#A33E11] transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-[#1B1C1A] font-medium">
                Inbound Education &amp; Research
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-3">
                211 OVERSEAS · INBOUND EDUCATION &amp; INSTITUTIONAL GATEWAY
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B1C1A] tracking-tight leading-[1.12] mb-3">
                Your Future Has a Place in India.
              </h1>

              <p className="font-serif text-lg sm:text-xl text-[#A33E11] font-semibold italic mb-5">
                Discover. Collaborate. Belong.
              </p>

              <p className="text-base sm:text-lg text-[#41484B] leading-relaxed max-w-2xl mb-8">
                Explore premier academic and collaborative possibilities in one of the world&apos;s most dynamic higher education landscapes. Whether you are a student exploring college and university admissions or an institution forging bilateral academic partnerships, 211 Overseas connects you with India&apos;s top colleges and research hubs.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/inbound/students"
                  className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <GraduationCap size={15} />
                  <span>Student Admissions Portal →</span>
                </Link>
                <Link
                  href="/inbound/collaborations"
                  className="bg-[#00222B] hover:bg-[#003442] text-white px-6 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <Building size={15} />
                  <span>College Collaborations Desk →</span>
                </Link>
                <a
                  href="#colleges"
                  className="border border-[#1B1C1A] text-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white px-5 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center shadow-sm cursor-pointer"
                >
                  Browse Universities
                </a>
              </div>
            </div>

            {/* Right Hero Image Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden border border-[#E6DDCC] bg-white shadow-xl">
                <Image
                  src="/images/generated/global-campus.jpg"
                  alt="International students and researchers collaborating on campus grounds"
                  fill
                  priority
                  sizes="(min-width: 1024px) 540px, 92vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* DUAL PATHWAY SELECTOR: STUDENTS vs INSTITUTIONAL COLLABORATIONS */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-[#F3EBDD]/60 border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-1.5">
              Choose Your Pathway
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1C1A]">
              Dedicated Inbound Portals
            </h2>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-2 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Card 1: For Students */}
            <div className="w-[86vw] sm:w-[420px] lg:w-auto shrink-0 snap-start bg-white border-2 border-[#E6DDCC] hover:border-[#A33E11] overflow-hidden transition-all flex flex-col justify-between shadow-sm hover:shadow-md group">
              <div>
                <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#00222B]">
                  <Image
                    src="/images/inbound/indian-campus-quad.jpg"
                    alt="Students on Indian university campus"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#A33E11] px-2.5 py-1">
                      STUDENT ADMISSIONS
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <span className="text-white font-serif text-lg font-bold drop-shadow-md">
                      Degrees &amp; Campus Pathways
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A33E11] block mb-2">
                    Student Gateway
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1C1A] mb-3">
                    For Students &amp; Aspirants
                  </h3>
                  <p className="text-sm sm:text-base text-[#41484B] leading-relaxed mb-6">
                    Comprehensive admissions and course guidance for students seeking undergraduate, postgraduate, and doctoral degrees across premier Indian universities and colleges, along with merit scholarship advisory and campus onboarding.
                  </p>
                  <div className="space-y-2 mb-8 text-xs text-[#1B1C1A]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A33E11]" />
                      <span>Engineering, medicine, management, AI &amp; liberal arts degrees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A33E11]" />
                      <span>Merit scholarship evaluation and institutional fee assistance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A33E11]" />
                      <span>Campus discovery across Gujarat and premier national university hubs</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-0 border-t border-[#E6DDCC] flex flex-wrap items-center gap-3">
                <Link
                  href="/inbound/students"
                  className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <span>Student Admissions Portal</span>
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="#colleges"
                  className="border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] px-5 py-3 text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  View Colleges
                </a>
              </div>
            </div>

            {/* Card 2: For Colleges & Institutional Collaborations */}
            <div className="w-[86vw] sm:w-[420px] lg:w-auto shrink-0 snap-start bg-white border-2 border-[#E6DDCC] hover:border-[#A33E11] overflow-hidden transition-all flex flex-col justify-between shadow-sm hover:shadow-md group">
              <div>
                <div className="relative aspect-[16/8] w-full overflow-hidden bg-[#00222B]">
                  <Image
                    src="/images/inbound/iit-delhi.jpg"
                    alt="Institutional partner campus"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#0C3844] px-2.5 py-1">
                      GLOBAL LINKAGES
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <span className="text-white font-serif text-lg font-bold drop-shadow-md">
                      MOUs &amp; Dual Degrees
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#A33E11] block mb-2">
                    Institutional Gateway
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B1C1A] mb-3">
                    For Colleges &amp; Universities
                  </h3>
                  <p className="text-sm sm:text-base text-[#41484B] leading-relaxed mb-6">
                    Dedicated institutional liaisons for foreign universities, deans, and academic bodies seeking dual-degree articulations (2+2, 3+1), reciprocal student mobility, faculty sabbatical exchanges, and bilateral research MOUs in India.
                  </p>
                  <div className="space-y-2 mb-8 text-xs text-[#1B1C1A]">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A33E11]" />
                      <span>Dual degrees &amp; academic credit transfer under NEP 2020</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A33E11]" />
                      <span>Reciprocal student semester abroad &amp; summer immersion</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A33E11]" />
                      <span>Bilateral MOU structuring, compliance &amp; delegation hosting</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8 pt-0 border-t border-[#E6DDCC] flex flex-wrap items-center gap-3">
                <Link
                  href="/inbound/collaborations"
                  className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-colors inline-flex items-center gap-2"
                >
                  <span>Institutional Collaboration Desk</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/inbound/collaborations#collab-form"
                  className="border border-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white text-[#1B1C1A] px-5 py-3 text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Submit Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION B: WHY STUDY IN INDIA */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-[#E6DDCC] bg-white" aria-label="Why study in India">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              WHY HIGHER EDUCATION IN INDIA?
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight mb-4">
              Higher Education in India. Diverse, Dynamic &amp; Forward-Looking.
            </h2>
            <p className="text-sm md:text-base text-[#41484B] leading-relaxed">
              An extensive higher education landscape, emerging industries, culturally diverse communities and academic programmes across disciplines for all aspiring students.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {WHY_STUDY_IN_INDIA.map(({ icon: Icon, title, text, image }) => (
              <div
                key={title}
                className="w-[82vw] sm:w-[320px] lg:w-full shrink-0 snap-start border border-[#E6DDCC] bg-[#FAF8F5] overflow-hidden hover:border-[#A33E11] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#00222B]">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(min-width: 1024px) 280px, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                    <span className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center bg-[#0C3844]/90 backdrop-blur-xs text-white border border-white/20">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-2">{title}</h3>
                    <p className="text-sm text-[#41484B] leading-relaxed">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION C: UNIVERSITIES IN GUJARAT (#colleges) */}
      {/* ────────────────────────────────────────────────────────── */}
      <section
        id="colleges"
        className="py-20 md:py-28 border-b border-[#E6DDCC] bg-[#FAF8F5] scroll-mt-24"
        aria-label="Universities in Gujarat"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              UNIVERSITY OPTIONS | GUJARAT
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1C1A] tracking-tight mb-4">
              Universities in Gujarat
            </h2>
            <p className="text-sm md:text-base text-[#41484B] leading-relaxed">
              Explore selected private universities across Gujarat with established admissions facilities and a range of academic pathways. The universities below are independent institutions presented for student discovery.
            </p>
          </div>

          {/* Slider 1: Gujarat Universities */}
          <InboundUniversitySlider
            universities={GUJARAT_UNIVERSITIES}
            carouselAriaLabel="Universities in Gujarat carousel"
            prevAriaLabel="Previous universities in Gujarat"
            nextAriaLabel="Next universities in Gujarat"
          />

          {/* Button below Slider 1 */}
          <div className="mt-12 text-center">
            <a
              href="#inbound-form"
              className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Help Me Find the Right University</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION D: OTHER UNIVERSITIES */}
      {/* ────────────────────────────────────────────────────────── */}
      <section
        className="py-20 md:py-28 border-b border-[#E6DDCC] bg-white scroll-mt-24"
        aria-label="Other Universities Across India"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              PRIVATE UNIVERSITIES ACROSS INDIA
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#1B1C1A] tracking-tight mb-4">
              Other Universities
            </h2>
            <p className="text-sm md:text-base text-[#41484B] leading-relaxed">
              Look beyond one state. India has premier private and deemed-to-be universities with established admissions arrangements and multicultural campuses. Explore these additional options according to course preference, budget and student-support needs.
            </p>
          </div>

          {/* Slider 2: Other Universities (Independent instance) */}
          <InboundUniversitySlider
            universities={OTHER_UNIVERSITIES}
            carouselAriaLabel="Other universities across India carousel"
            prevAriaLabel="Previous other universities"
            nextAriaLabel="Next other universities"
          />

          {/* Button below Slider 2 */}
          <div className="mt-12 text-center">
            <a
              href="#inbound-form"
              className="border border-[#1B1C1A] text-[#1B1C1A] hover:bg-[#1B1C1A] hover:text-white px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Compare Universities Across India</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* REQUIRED REPRESENTATION DISCLAIMER */}
          <div className="mt-10 max-w-4xl mx-auto p-4 border border-[#E6DDCC] bg-[#FAF8F5] text-center">
            <p className="text-xs text-[#71787B] leading-relaxed">
              Featured universities are presented for educational information and discovery only. Inclusion does not imply partnership, authorisation or endorsement. Admission, fees, eligibility and applicable approvals remain subject to the relevant institutions and authorities.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION E: ACADEMIC OPTIONS */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-[#E6DDCC] bg-[#FAF8F5]" aria-label="Academic Options">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              ACADEMIC OPTIONS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight mb-4">
              Your Interests. Your Ambitions. Your Academic Pathway.
            </h2>
            <p className="text-sm md:text-base text-[#41484B] leading-relaxed">
              Explore disciplines across India’s higher education ecosystem.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {ACADEMIC_OPTIONS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="w-[82vw] sm:w-[320px] lg:w-full shrink-0 snap-start bg-white border border-[#E6DDCC] p-7 hover:border-[#A33E11] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#F3EBDD] text-[#A33E11] flex items-center justify-center mb-5">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-3">{title}</h3>
                  <p className="text-sm text-[#41484B] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION F: OUR SERVICES */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-[#E6DDCC] bg-white" aria-label="Our Services">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              OUR SERVICES
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight mb-4">
              One Journey. Many Decisions. Guidance at Every Stage.
            </h2>
            <p className="text-sm md:text-base text-[#41484B] leading-relaxed">
              We help organise academic, financial and practical decisions involved in studying in India.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {OUR_SERVICES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="w-[82vw] sm:w-[320px] lg:w-full shrink-0 snap-start bg-[#FAF8F5] border border-[#E6DDCC] p-7 hover:border-[#A33E11] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#0C3844] text-white flex items-center justify-center mb-5">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-3">{title}</h3>
                  <p className="text-sm text-[#41484B] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION G: YOUR JOURNEY (5 Steps) */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[#E6DDCC] bg-[#00222B] text-white" aria-label="Your Journey">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-2">
              YOUR JOURNEY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              From Exploring Possibilities to Finding Your Place.
            </h2>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 gap-5 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {YOUR_JOURNEY_STEPS.map((s) => (
              <div
                key={s.number}
                className="w-[80vw] sm:w-[280px] lg:w-full shrink-0 snap-start border border-white/15 bg-white/[0.04] p-6 flex flex-col justify-between hover:border-[#FC7F4E]/60 transition-colors"
              >
                <div>
                  <span className="flex h-11 w-11 items-center justify-center bg-[#A33E11] text-white text-xs font-bold font-mono mb-5 shadow-sm">
                    {s.number}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed font-light">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION H: FINANCES & SCHOLARSHIPS */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-[#E6DDCC] bg-white" aria-label="Finances and Scholarships">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              FINANCES &amp; SCHOLARSHIPS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
              A Clearer Picture of Your Education Investment.
            </h2>
            <p className="text-base text-[#41484B] leading-relaxed">
              Choosing where to study also means understanding the financial commitment. We help students and families evaluate tuition, accommodation and living expenses, along with suitable institutional concessions or eligible scholarship programmes.
            </p>
            <p className="text-xs md:text-sm text-[#71787B] italic bg-[#FAF8F5] border border-[#E6DDCC] p-4 max-w-2xl mx-auto leading-relaxed">
              Awards, concessions and financial assistance depend on independent eligibility and selection criteria. We offer informed guidance, not scholarship guarantees.
            </p>
            <div className="pt-4">
              <a
                href="#inbound-form"
                className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-8 py-4 text-xs uppercase tracking-widest font-semibold transition-all inline-flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>Discuss Fees &amp; Scholarships ↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION I: FOR PARENTS, GUARDIANS & SPONSORS */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-[#E6DDCC] bg-[#FAF8F5]" aria-label="For Parents and Sponsors">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
                FOR PARENTS, GUARDIANS &amp; SPONSORS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
                A New Country for Them. Confidence for You.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                Studying abroad is a family decision. Parents, guardians and sponsors deserve clarity about academic choices, accommodation, wellbeing, budgets and support arrangements.
              </p>
              <p className="text-base text-[#41484B] leading-relaxed">
                211 Overseas aims to make the transition more organised through practical guidance, transparent communication and defined student-support services.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#E6DDCC] p-8 md:p-10 shadow-sm border-l-4 border-l-[#A33E11]">
              <blockquote className="font-serif text-2xl md:text-3xl text-[#1B1C1A] italic leading-snug">
                “Beyond admission, a better prepared journey.”
              </blockquote>
              <span className="block mt-4 text-xs font-mono uppercase tracking-widest text-[#A33E11]">
                211 Overseas Advisory Ethos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION J: INSTITUTIONS & DEVELOPMENT ORGANISATIONS */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 border-b border-[#E6DDCC] bg-white" aria-label="Institutions and Organizations">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              INSTITUTIONS &amp; DEVELOPMENT ORGANISATIONS
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight mb-4">
              Helping Indian Education Connect With the World.
            </h2>
            <p className="text-base text-[#41484B] leading-relaxed mb-4">
              211 Overseas is developing a service-led inbound education facilitation initiative designed to support responsible, measurable international student mobility across India.
            </p>
            <p className="text-base text-[#41484B] leading-relaxed">
              Our proposed approach brings together international student awareness, academic discovery, application readiness, arrival coordination and transition support. We welcome conversations with education institutions, incubators, public agencies and development organisations on suitable collaboration opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {INSTITUTION_CARDS.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-[#FAF8F5] border border-[#E6DDCC] p-7 hover:border-[#A33E11] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#0C3844] text-white flex items-center justify-center mb-5">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-3">{title}</h3>
                  <p className="text-sm text-[#41484B] leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Callout Box */}
          <div className="bg-[#FAF8F5] border border-[#E6DDCC] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 border-l-4 border-l-[#0C3844]">
            <div className="max-w-2xl space-y-2">
              <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1B1C1A]">
                A service-led approach with nationwide relevance.
              </h3>
              <p className="text-sm md:text-base text-[#41484B] leading-relaxed">
                A proposed human-led pilot model that can be evaluated, refined and expanded over time.
              </p>
            </div>
            <div className="shrink-0 flex flex-wrap items-center gap-3">
              <Link
                href="/inbound/collaborations"
                className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-7 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors inline-flex items-center gap-2 shadow-md"
              >
                <span>Institutional Collaboration Desk →</span>
              </Link>
              <InboundCollaborationButton />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION K: OUR VISION */}
      {/* ────────────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 border-b border-[#E6DDCC] bg-[#FAF8F5]" aria-label="Our Vision">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              OUR VISION
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
              Making Education Across Borders More Accessible, Connected and Human.
            </h2>
            <p className="text-base sm:text-lg text-[#41484B] leading-relaxed">
              International education should begin with clarity, not confusion. We aim to build responsible student facilitation workflows that improve access to educational information, student preparation and transition support. Through evidence, institutional engagement and progressively improved systems, this model can evolve to support international student mobility across India.
            </p>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION L: FAQS (6 Verbatim FAQs) */}
      {/* ────────────────────────────────────────────────────────── */}
      <FaqSection
        items={INBOUND_FAQS}
        headline="Good Questions Deserve Clear Answers."
      />

      {/* ────────────────────────────────────────────────────────── */}
      {/* SECTION M: ENQUIRY FORM (#inbound-form) */}
      {/* ────────────────────────────────────────────────────────── */}
      <section id="inbound-form" className="py-20 md:py-28 border-b border-[#E6DDCC] bg-white scroll-mt-24" aria-label="Inbound Enquiry">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block">
                BEGIN WITH A CONVERSATION
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight leading-tight">
                Your Education Journey to India Starts Here.
              </h2>
              <p className="text-base text-[#41484B] leading-relaxed">
                Tell us your preferred course and country of residence. Our team can guide you through possible universities, applications and practical next steps.
              </p>
              <p className="text-sm text-[#41484B] leading-relaxed bg-[#FAF8F5] p-4 border border-[#E6DDCC]">
                For institutional enquiries, select the collaboration option in the form.
              </p>
            </div>

            <div className="lg:col-span-7">
              <InboundEnquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────── */}
      {/* AFTER SECTION M: KEPT AS-IS */}
      {/* ────────────────────────────────────────────────────────── */}
      <div id="direct-consultation-block">
        <CtaStrip source="inbound-page" interest="Inbound Programs & Research" />
        <FormSection />
      </div>
    </div>
  );
}
