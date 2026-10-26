import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  GraduationCap,
  ShieldCheck,
  Wallet,
  ArrowRight,
  BookOpen,
  HeartPulse,
  Briefcase,
  Layers,
  Sparkles,
} from 'lucide-react';
import { BlossomLeafAnimation } from '@/components/ui/BlossomLeafAnimation';
import { InboundCollegesInteractive } from '@/components/inbound/InboundCollegesInteractive';
import { InboundEnquiryForm } from '@/components/inbound/InboundEnquiryForm';
import { CtaStrip } from '@/components/sections/CtaStrip';

export const metadata: Metadata = {
  title: 'Student Admissions in India | Inbound Study & Research | 211 Overseas',
  description:
    'Dedicated admissions gateway for Indian universities and premier colleges. Guidance on degrees, eligibility, scholarships, application processes, and campus life for all students.',
};

const DISCIPLINES = [
  {
    icon: GraduationCap,
    title: 'Engineering, Computing & AI',
    desc: 'Cutting-edge B.Tech, M.Tech, and dual degrees in Artificial Intelligence, Computer Science, Data Engineering, and Robotics across premier Indian technology institutes.',
    image: '/images/inbound/iit-bombay.jpg',
  },
  {
    icon: HeartPulse,
    title: 'Medicine, Pharmacy & Health',
    desc: 'World-renowned medical training, clinical pharmacy, biomedical sciences, physiotherapy, and public health with intensive hands-on clinical exposure.',
    image: '/images/inbound/aiims-delhi.jpg',
  },
  {
    icon: Briefcase,
    title: 'Management & Global Business',
    desc: 'AACSB / AMBA accredited MBA, BBA, and specialised master’s programs offering deep exposure to one of the world’s fastest-growing major economies.',
    image: '/images/inbound/iim-ahmedabad.jpg',
  },
  {
    icon: BookOpen,
    title: 'Liberal Arts, Law & Humanities',
    desc: 'Interdisciplinary social sciences, international relations, policy studies, corporate law, and cultural studies with vibrant intellectual campus communities.',
    image: '/images/inbound/jnu-delhi.jpg',
  },
  {
    icon: Layers,
    title: 'Pure Sciences & Advanced Research',
    desc: 'Direct laboratory research pathways in quantum materials, biotechnology, computational chemistry, and astrophysics at premier national research centres.',
    image: '/images/inbound/iisc-bengaluru.jpg',
  },
  {
    icon: Sparkles,
    title: 'Design, Media & Architecture',
    desc: 'Creative degrees in industrial design, animation, sustainable architecture, urban planning, and visual communication.',
    image: '/images/inbound/mahe-manipal.jpg',
  },
];

const ADMISSION_STEPS = [
  {
    step: '01',
    title: 'Academic Profile Evaluation',
    desc: 'We review your academic background, assess eligibility across central, state, and premier private universities, and identify suitable degree levels and disciplines.',
  },
  {
    step: '02',
    title: 'University Shortlist & Fit Analysis',
    desc: 'Compare premier institutes of national importance, leading universities, and top accredited campuses in Gujarat, Bengaluru, Delhi, and across India.',
  },
  {
    step: '03',
    title: 'Application Dossier & Offer Letter',
    desc: 'We assist with document preparation, formal university submissions, entrance evaluations, and securing your admission offer letter.',
  },
  {
    step: '04',
    title: 'Enrollment, Formalities & Campus Onboarding',
    desc: 'Complete guidance on admission verification, fee schedules, scholarship applications, student accommodation, and campus transition.',
  },
];

const SCHOLARSHIP_ROUTES = [
  {
    name: 'Merit & Need-Based Institutional Awards',
    scope: 'Direct tuition fee concessions and merit waivers awarded by participating Indian universities based on prior academic scores.',
  },
  {
    name: 'Government & National Scholarships',
    scope: 'National and state-level scholarship schemes for eligible candidates covering tuition support, academic grants, and research stipends.',
  },
  {
    name: 'Study in India (SII) & ICCR Fellowships',
    scope: 'Specialized government initiatives offering full and partial tuition fee waivers and stipends for eligible inbound scholars.',
  },
];

export default function InboundStudentsPage() {
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
            <span className="text-[#FC7F4E] font-semibold">For Students</span>
          </nav>

          {/* Audience Switcher Banner */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-xs mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#FC7F4E]" />
            <span className="font-semibold text-white">Student Admissions Portal</span>
            <span className="text-white/40">|</span>
            <Link href="/inbound/collaborations" className="text-[#FC7F4E] hover:underline font-medium inline-flex items-center gap-1">
              <span>Looking for College Collaborations? Visit Institutional Desk</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
                Study &amp; Research in India: <span className="text-[#FC7F4E]">Student Gateway</span>
              </h1>

              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                India is home to world-class research institutes, high-ranking technological hubs, and vibrant academic campuses. 211 Overseas provides comprehensive end-to-end guidance for all students—from degree matching and admission applications to scholarship guidance, document verification, and campus transition.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#student-form"
                  className="btn-shine bg-[#A33E11] hover:bg-[#85320D] text-white px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors shadow-md"
                >
                  Apply for Admissions Review
                </a>
                <a
                  href="#colleges"
                  className="border border-white/60 hover:bg-white hover:text-black text-white px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-colors"
                >
                  Browse Participating Colleges
                </a>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden border border-white/20 bg-black/40 shadow-2xl group">
                <Image
                  src="/images/inbound/indian-campus-quad.jpg"
                  alt="Modern Indian university campus quad with students"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 92vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#A33E11] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                    Student Admissions Gateway
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-[#FC7F4E] font-bold mb-1">
                    Premier Higher Education
                  </p>
                  <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">
                    World-Class Campuses &amp; Research Centers
                  </h3>
                  <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-white/80">
                    <span>100% English Medium</span>
                    <span>UGC &amp; NAAC A++ Campuses</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Academic Disciplines */}
      <section className="py-16 md:py-24 border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Academic Horizons
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
              Popular Study Fields for Aspirants &amp; Students
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#41484B] leading-relaxed">
              Explore undergraduate, postgraduate, and doctoral degree pathways across premier disciplines accredited by UGC, AICTE, and statutory councils.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISCIPLINES.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="bg-white border border-[#E6DDCC] overflow-hidden flex flex-col justify-between hover:border-[#A33E11] hover:shadow-xl transition-all duration-300 group">
                  <div>
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#00222B]">
                      <Image
                        src={d.image}
                        alt={d.title}
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
                        {d.title}
                      </h3>
                      <p className="text-sm text-[#41484B] leading-relaxed">
                        {d.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Student Admission Journey */}
      <section className="py-16 md:py-24 bg-white border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Step-by-Step Roadmap
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
              Your Inbound Admission Process
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#41484B] leading-relaxed">
              Transparent, professional advisory that simplifies university applications, documentation verification, and campus onboarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADMISSION_STEPS.map((s) => (
              <div key={s.step} className="border border-[#E6DDCC] bg-[#FAF8F5] p-6 relative">
                <span className="font-serif text-3xl font-bold text-[#A33E11] block mb-3">
                  {s.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-2">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Life & Academic Facilities Visual Showcase */}
      <section className="py-16 md:py-24 border-b border-[#E6DDCC] bg-[#FAF8F5]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Campus Glimpse
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
              World-Class Infrastructure &amp; Student Life
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#41484B] leading-relaxed">
              Experience dynamic university environments featuring high-tech laboratories, state-of-the-art libraries, vibrant student quads, and lush residential campuses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[#E6DDCC] overflow-hidden group shadow-xs">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#00222B]">
                <Image
                  src="/images/inbound/indian-campus-library.jpg"
                  alt="Modern central university library"
                  fill
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC7F4E] block">Facilities</span>
                  <p className="font-serif text-base font-bold leading-tight">Modern Digital Libraries</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#41484B] leading-relaxed">
                  High-speed campus networks, vast academic repositories, and 24/7 collaborative study hubs.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E6DDCC] overflow-hidden group shadow-xs">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#00222B]">
                <Image
                  src="/images/inbound/indian-campus-lab.jpg"
                  alt="Robotics and computing research lab"
                  fill
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC7F4E] block">Innovation</span>
                  <p className="font-serif text-base font-bold leading-tight">Advanced Research Labs</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#41484B] leading-relaxed">
                  Hands-on experimentation in AI, robotics, biotechnology, and nano-materials engineering.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E6DDCC] overflow-hidden group shadow-xs">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#00222B]">
                <Image
                  src="/images/inbound/mahe-manipal.jpg"
                  alt="Modern student campus architecture"
                  fill
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC7F4E] block">Residential</span>
                  <p className="font-serif text-base font-bold leading-tight">Student Residences &amp; Hostels</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#41484B] leading-relaxed">
                  Secure on-campus accommodation with international dining options, gyms, and sports complexes.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E6DDCC] overflow-hidden group shadow-xs">
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#00222B]">
                <Image
                  src="/images/inbound/bhu-varanasi.jpg"
                  alt="Historic university campus heritage"
                  fill
                  sizes="(min-width: 1024px) 280px, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FC7F4E] block">Culture</span>
                  <p className="font-serif text-base font-bold leading-tight">Rich Campus Traditions</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-[#41484B] leading-relaxed">
                  Lush botanical greens, cultural festivals, student societies, and inclusive campus communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participating Colleges & Research Hubs Directory */}
      <section id="colleges" className="py-16 md:py-24 border-b border-[#E6DDCC] bg-white scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Participating Colleges &amp; Hubs
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
              Explore Premier Inbound Colleges &amp; Research Hubs
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#41484B] leading-relaxed">
              Filter premier Indian universities by academic discipline and region. Inspect interactive Google Maps campus locations, accreditation rankings, and admission pathways.
            </p>
          </div>

          <InboundCollegesInteractive />
        </div>
      </section>

      {/* Scholarships & Affordability */}
      <section className="py-16 md:py-24 border-b border-[#E6DDCC] bg-white">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Financial Planning
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight mb-4">
              Scholarships &amp; Affordable Higher Education in India
            </h2>
            <p className="text-sm sm:text-base text-[#41484B] leading-relaxed mb-6">
              Higher education in India offers exceptional value. Tuition across premier state and private institutions remains cost-effective with transparent fee structures, alongside accessible hostel accommodation, dining, and campus amenities.
            </p>
            <div className="space-y-3 text-xs sm:text-sm text-[#1B1C1A]">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#A33E11] shrink-0" />
                <span>On-campus student hostels with modern amenities and high security</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#A33E11] shrink-0" />
                <span>Subsidized healthcare and student wellness support</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#A33E11] shrink-0" />
                <span>Vibrant student communities and active campus student clubs</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {SCHOLARSHIP_ROUTES.map((sch) => (
              <div key={sch.name} className="bg-[#FAF8F5] border border-[#E6DDCC] p-6">
                <h3 className="font-serif text-lg font-bold text-[#1B1C1A] mb-1.5 flex items-center gap-2">
                  <Wallet size={18} className="text-[#A33E11]" />
                  <span>{sch.name}</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#41484B] leading-relaxed">
                  {sch.scope}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Application Form Section */}
      <section id="student-form" className="py-16 md:py-24 bg-white border-b border-[#E6DDCC] scroll-mt-24">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A33E11] block mb-2">
              Admissions Desk
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B1C1A] tracking-tight">
              Request Your Indian University Admissions Shortlist
            </h2>
            <p className="mt-3 text-sm text-[#41484B] leading-relaxed">
              Submit your academic details. Our student advisory team will assess your eligibility and connect with verified options and next steps.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <InboundEnquiryForm />
          </div>
        </div>
      </section>

      {/* Quick Consultation CTA */}
      <CtaStrip heading="Have questions about studying in India?" interest="Study in India (Student Admissions)" />
    </div>
  );
}
