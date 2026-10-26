/**
 * 211 OVERSEAS — Home Page Content (Page 01)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const homeContent = {
  meta: {
    title: '211 Overseas | Study Abroad & Overseas Careers',
    description:
      'Study abroad or explore overseas work with guidance shaped around your qualifications, career plans and budget. Compare options and take the next step with clarity.',
  },

  hero: {
    eyebrow: '211 OVERSEAS',
    h1: 'Your Future Has No Borders.',
    paragraph:
      'Study abroad or explore overseas work with guidance shaped around your qualifications, career plans and budget. Compare options, understand the requirements and take the next step with clarity.',
    ctas: {
      primary: { label: 'Explore Study Destinations', href: '/study' },
      secondary: { label: 'View Current Work Openings', href: '/work/openings' },
    },
    form: {
      submitLabel: 'Request a Profile Review',
    },
  },

  audienceSelector: {
    headline: 'What brings you here?',
    cards: [
      {
        title: 'I want to study abroad',
        description: 'Find countries, universities, course options, scholarships and a realistic study budget.',
        href: '/study',
        cta: 'Explore Study',
      },
      {
        title: 'I want to work abroad',
        description: 'Browse recruitment opportunities linked to current employer requirements.',
        href: '/work',
        cta: 'Explore Work',
      },
      {
        title: 'I am exploring for my child',
        description: 'Understand admissions, expenses, safety considerations and what comes after graduation.',
        href: '/contact',
        cta: 'Get Advice',
      },
      {
        title: 'I need help choosing',
        description: 'Tell us your qualification and budget; we will help identify sensible next steps.',
        href: '/contact',
        cta: 'Contact Us',
      },
    ],
  },

  universityShowcase: {
    headline: 'Featured Korean institutions',
    subheadline: 'SWIPEABLE UNIVERSITY SHOWCASE',
    skyGroup: {
      title: 'SKY Universities',
      universities: [
        { name: 'Seoul National University', language: 'Course-dependent' },
        { name: 'Korea University', language: 'Course-dependent' },
        { name: 'Yonsei University', language: 'Course-dependent' },
      ],
    },
    exploreMoreGroup: {
      title: 'Explore More',
      universities: [
        { name: 'KAIST', language: 'Course-dependent' },
        { name: 'Sungkyunkwan University', language: 'Course-dependent' },
        { name: 'Hanyang University', language: 'Course-dependent' },
        { name: 'Kyung Hee University', language: 'Course-dependent' },
        { name: 'Pusan National University', language: 'Course-dependent' },
      ],
    },
  },

  koreaFeature: {
    headline: 'South Korea. A serious option for ambitious students.',
    paragraph:
      'Explore Korean-language pathways, Bachelor’s, Master’s and career-oriented postgraduate options. Compare universities in Seoul and beyond, examine English-taught options and understand the role of scholarships before applying.',
    ctas: {
      primary: { label: 'Explore Study in South Korea', href: '/study/south-korea' },
      secondary: { label: 'Compare All Study Destinations', href: '/study' },
    },
  },

  destinationTable: {
    headline: 'Choose your destination',
    rows: [
      {
        destination: 'South Korea',
        href: '/study/south-korea',
        goodStartingPointFor: 'AI · Engineering · Business · Design · Research',
      },
      {
        destination: 'Singapore',
        href: '/study/singapore',
        goodStartingPointFor: 'Computing · Finance · Business · Engineering',
      },
      {
        destination: 'Luxembourg',
        href: '/study/luxembourg',
        goodStartingPointFor: 'Finance · Management · International Business',
      },
      {
        destination: 'Japan',
        href: '/study/japan',
        goodStartingPointFor: 'Robotics · Engineering · Science · Design',
      },
      {
        destination: 'Taiwan',
        href: '/study/taiwan',
        goodStartingPointFor: 'Semiconductors · AI · Electronics · Research',
      },
      {
        destination: 'UAE',
        href: '/study/uae',
        goodStartingPointFor: 'International branch campuses · Business · Technology · Hospitality',
      },
      {
        destination: 'Other destinations',
        href: '/study',
        goodStartingPointFor: 'Europe · USA · Canada · UK · Australia',
      },
    ],
  },

  guidance: {
    paragraph:
      'We review your academic profile, recommend suitable courses and universities, compare tuition and living costs, explore eligible scholarships, help prepare applications and guide you through visa documentation and pre-departure planning. You do not need to navigate these decisions alone.',
    headline: 'We guide you through every decision',
    cards: [
      {
        title: 'University & course matching',
        description: 'Assess entry criteria, language of instruction, course structure and fit.',
      },
      {
        title: 'Transparent cost planning',
        description: 'Separate tuition, living costs, housing deposits, insurance and travel.',
      },
      {
        title: 'Scholarships & funding',
        description: 'Understand the criteria and what an award does—and does not—cover.',
      },
      {
        title: 'Application & visa guidance',
        description: 'Build your document checklist and prepare for each formal stage.',
      },
    ],
  },

  workTeaser: {
    headline: 'Currently exploring work abroad?',
    paragraph:
      'Our Work section is vacancy-led. UAE and worldwide opportunities are updated according to employer requirements, eligibility and recruitment cycles. Vacancies shown online are not a promise of placement.',
    ctas: {
      primary: { label: 'See Current Openings', href: '/work/openings' },
      secondary: { label: 'Request an Eligibility Check', href: '/contact#work-enquiry' },
    },
  },

  process: {
    headline: 'How the process begins',
    steps: [
      {
        number: '01',
        title: 'Share your profile.',
        description: 'Education, experience, destination preferences and budget.',
      },
      {
        number: '02',
        title: 'Receive a focused shortlist.',
        description: 'Compare programs or roles aligned with your circumstances.',
      },
      {
        number: '03',
        title: 'Move forward with a plan.',
        description: 'Prepare documents, applications and formal next steps.',
      },
    ],
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Can I enquire without choosing a country?',
        a: 'Yes. Start with your qualification, preferred field and indicative budget; a shortlist can follow.',
      },
      {
        q: 'Are universities on this website official partners of 211 Overseas?',
        a: 'No such relationship is implied. Institutions are listed for research and comparison unless an affiliation is expressly verified and disclosed.',
      },
    ],
  },

  closingCta: {
    headline: 'Ready to plan your overseas journey?',
    subheadline: 'Tell us your qualifications and goals — our team will help you chart the clearest next step.',
    ctas: {
      primary: { label: 'Request My Profile Review', href: '/contact' },
      secondary: { label: 'WhatsApp +91 99985 85211', href: 'https://wa.me/919998585211' },
    },
  },
} as const;
