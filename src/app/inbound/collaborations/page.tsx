import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  Network,
  Users2,
  FileSpreadsheet,
  Globe2,
  Award,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Share2,
  FileCheck2,
} from 'lucide-react';
import { BlossomLeafAnimation } from '@/components/ui/BlossomLeafAnimation';
import { InboundCollaborationForm } from '@/components/inbound/InboundCollaborationForm';
import { CtaStrip } from '@/components/sections/CtaStrip';

export const metadata: Metadata = {
  title: 'Institutional Academic Collaborations with Indian Colleges & Universities | 211 Overseas',
  description:
    'Dedicated institutional gateway for international universities and colleges seeking bilateral MOUs, dual-degree articulations, faculty exchanges, and research partnerships in India.',
};

const COLLABORATION_PILLARS = [
  {
    icon: Award,
    title: 'Dual Degrees & Articulation Frameworks',
    desc: 'Establish 2+2 undergraduate, 3+1 bachelor’s, and 1+1 master’s degree pathways with mutual academic credit recognition and structured student transition protocols.',
    image: '/images/inbound/iit-delhi.jpg',
  },
  {
    icon: Users2,
    title: 'Reciprocal Student Exchange & Immersions',
    desc: 'Facilitate semester-abroad exchange, summer research internships, and customized cultural-academic immersions with top-tier Indian host institutions.',
    image: '/images/inbound/indian-campus-quad.jpg',
  },
  {
    icon: Share2,
    title: 'Faculty Mobility & Scholar Sabbaticals',
    desc: 'Foster cross-border academic excellence through visiting professorships, co-teaching models, faculty development programs (FDP), and guest lectureships.',
    image: '/images/inbound/iim-ahmedabad.jpg',
  },
  {
    icon: Network,
    title: 'Joint Research & Co-Publications',
    desc: 'Initiate bilateral research grants, shared computational laboratories, joint Ph.D. co-supervision, and collaborative high-impact academic publications.',
    image: '/images/inbound/indian-campus-lab.jpg',
  },
  {
    icon: Briefcase,
    title: 'Executive Education & Industry Tours',
    desc: 'Design bespoke executive management seminars, engineering innovation tours, and tech incubator immersion trips across India’s leading corporate centres.',
    image: '/images/inbound/iit-bombay.jpg',
  },
  {
    icon: FileCheck2,
    title: 'Bilateral MOUs & Delegation Hosting',
    desc: 'End-to-end facilitation of bilateral memorandums of understanding (MOUs), government/consular compliance, and high-level leadership delegation itineraries.',
    image: '/images/inbound/iisc-bengaluru.jpg',
  },
];

const INSTITUTIONAL_FAQS = [
  {
    q: 'How does NEP 2020 support international university partnerships in India?',
    a: 'India’s National Education Policy (NEP 2020) actively encourages internationalization through twinning programs, joint degrees, dual-degree pathways, and credit transfers aligned with the National Credit Framework (NCrF).',
  },
  {
    q: 'What role does 211 Overseas play in facilitating bilateral institutional MOUs?',
    a: 'We act as an authorized liaison desk: identifying compatible accredited Indian institutions, mapping curriculum equivalencies, coordinating legal and academic approvals, organizing bilateral signing visits, and managing ongoing student enrollment logistics.',
  },
  {
    q: 'Can foreign universities establish semester exchange programs with Indian institutions?',
    a: 'Yes. Several premier central, state, and private universities in India operate structured international student exchange desks with on-campus guest housing and verified English-medium coursework.',
  },
  {
    q: 'What institutional categories in India are eligible for collaboration?',
    a: 'Partnerships can be forged across Institutes of National Importance (IITs, IIMs, IISc, NITs), UGC-recognized Central & State Public Universities, and NAAC ‘A++’ accredited private global campuses.',
  },
];

export default function InboundCollaborationsPage() {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Hero */}
      <section className="relative bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC] overflow-hidden">
        <BlossomLeafAnimation theme="dark" density="subtle" />

        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/60 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/inbound" className="hover:text-white transition-colors">Inbound India</Link>
            <span>/</span>
            <span className="text-[#FC7F4E] font-semibold">Institutional Collaborations</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
                Institutional Collaborations &amp; <span className="text-[#FC7F4E]">Global Academic Linkages with India</span>
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                Connect your university or college with India’s leading higher education and research ecosystem. 211 Overseas assists international universities, deans, and academic bodies in structuring bilateral MOUs, dual-degree articulations, reciprocal student mobility, and joint research ventures.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#collab-form"
                  className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors shadow-md"
                >
                  Submit Partnership Proposal
                </a>
                <Link
                  href="/inbound#colleges"
                  className="border border-white/60 hover:bg-white hover:text-black text-white px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Explore Participating Indian Campuses
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Institutional Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden border border-white/20 bg-black/40 shadow-2xl group">
                <Image
                  src="/images/inbound/indian-campus-lab.jpg"
                  alt="High-tech university research laboratory in India"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 92vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#0C3844] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm border border-white/20">
                    Bilateral Institutional Desk
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#FC7F4E] font-bold mb-1">
                    Academic Linkages
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                    Dual Degrees, Joint Research &amp; MOUs
                  </h3>
                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-white/80">
                    <span>NEP 2020 Aligned</span>
                    <span>Accreditation Matchmaking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Modes */}
      <section className="py-16 md:py-24 border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Partnership Frameworks
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
              Bilateral Academic Engagement Models
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#41484B] leading-relaxed">
              Tailored institutional engagement frameworks designed to enhance your university’s global footprint, research output, and international student mobility.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-3 gap-6 -mx-6 px-6 sm:mx-0 sm:px-0 pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {COLLABORATION_PILLARS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="w-[82vw] sm:w-[320px] lg:w-auto shrink-0 snap-start bg-white border border-[#E6DDCC] overflow-hidden flex flex-col justify-between hover:border-[#A33E11] hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#00222B]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                      <span className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center bg-[#0C3844]/90 backdrop-blur-xs text-white border border-white/20">
                        <Icon size={20} />
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="font-serif text-xl font-bold text-[#1B1C1A] mb-2 group-hover:text-[#A33E11] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#41484B] leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Collaborate with Indian Institutions */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Strategic Value
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight mb-5">
              Why Partner with India’s Academic Ecosystem?
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#41484B] leading-relaxed">
              <p>
                India houses the world’s largest cohort of STEM, technology, and management learners. Under the National Education Policy (NEP 2020), Indian universities have unprecedented regulatory autonomy to forge dual degrees, joint certifications, and reciprocal credit transfer agreements with accredited foreign institutions.
              </p>
              <p>
                From biotechnology labs in Gujarat to computer science faculties in Bengaluru and medical research clusters in Delhi, partnering with Indian institutions unlocks high-caliber talent pipelines, research co-funding, and reciprocal student mobility.
              </p>
            </div>

            <div className="mt-8 flex overflow-x-auto snap-x snap-mandatory sm:grid sm:grid-cols-2 gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-2 sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="w-[75vw] sm:w-auto shrink-0 snap-start p-4 bg-[#FAF8F5] border border-[#E6DDCC]">
                <span className="font-serif text-2xl font-bold text-[#A33E11] block mb-1">1000+</span>
                <span className="text-xs text-[#41484B]">Accredited universities &amp; national research hubs</span>
              </div>
              <div className="w-[75vw] sm:w-auto shrink-0 snap-start p-4 bg-[#FAF8F5] border border-[#E6DDCC]">
                <span className="font-serif text-2xl font-bold text-[#A33E11] block mb-1">100%</span>
                <span className="text-xs text-[#41484B]">English-medium instruction across professional degrees</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex overflow-x-auto snap-x snap-mandatory lg:space-y-4 lg:block gap-4 -mx-6 px-6 sm:mx-0 sm:px-0 pb-3 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="w-[84vw] sm:w-[360px] lg:w-auto shrink-0 snap-start relative aspect-[16/9] overflow-hidden border border-[#E6DDCC] bg-[#00222B] shadow-sm group">
              <Image
                src="/images/inbound/indian-campus-library.jpg"
                alt="Collaborative academic library and research facility"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FC7F4E] block">
                  Institutional Framework
                </span>
                <p className="font-serif text-lg font-bold">
                  Accredited Campuses &amp; Bilateral Research Excellence
                </p>
              </div>
            </div>

            <div className="w-[84vw] sm:w-[360px] lg:w-auto shrink-0 snap-start border border-[#E6DDCC] bg-[#FAF8F5] p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#A33E11] shrink-0" />
                  <span>Institutional Due Diligence &amp; Accreditation Matchmaking</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                  211 Overseas performs rigorous vetting of partner credentials, verifying NAAC, NIRF, and statutory council standings prior to MOU initiation.
                </p>
              </div>
            </div>

            <div className="w-[84vw] sm:w-[360px] lg:w-auto shrink-0 snap-start border border-[#E6DDCC] bg-[#FAF8F5] p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2 flex items-center gap-2">
                  <FileSpreadsheet size={20} className="text-[#A33E11] shrink-0" />
                  <span>Credit Mapping &amp; Curriculum Alignment</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                  We bridge academic frameworks between ECTS, US semester credits, and India’s National Credit Framework to guarantee seamless credit portability.
                </p>
              </div>
            </div>

            <div className="w-[84vw] sm:w-[360px] lg:w-auto shrink-0 snap-start border border-[#E6DDCC] bg-[#FAF8F5] p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2 flex items-center gap-2">
                  <Globe2 size={20} className="text-[#A33E11] shrink-0" />
                  <span>High-Level Delegation &amp; Signing Ceremonies</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                  Complete institutional protocol management: arranging bilateral leadership visits, campus tours, and formal signing ceremonies with senior university leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Form Section */}
      <section id="collab-form" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E6DDCC] scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Partnership Portal
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
              Initiate an Institutional Collaboration
            </h2>
            <p className="mt-3 text-sm text-[#41484B] leading-relaxed">
              Are you a university representative, Dean, or International Relations Officer? Submit your institutional profile to schedule an exploratory discussion with our Institutional Desk.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <InboundCollaborationForm />
          </div>
        </div>
      </section>

      {/* Institutional FAQs */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Institutional Queries
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
              Frequently Asked Questions for Institutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INSTITUTIONAL_FAQS.map((faq) => (
              <div key={faq.q} className="border border-[#E6DDCC] bg-[#FAF8F5] p-6">
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#1B1C1A] mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation strip */}
      <CtaStrip heading="Connect directly with our Academic Linkages team" interest="Institutional Collaboration" />
    </div>
  );
}
