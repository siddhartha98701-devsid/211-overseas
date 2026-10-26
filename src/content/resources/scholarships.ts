/**
 * 211 OVERSEAS — Scholarships Content (Page 19)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const scholarshipsContent = {
  meta: {
    title: 'Study Abroad Scholarships | Types & Eligibility',
    description:
      'Awards may cover tuition, living expenses, travel, research costs or only one part of the budget. Review funding types, eligibility criteria and country routes.',
  },

  hero: {
    eyebrow: 'SCHOLARSHIPS',
    h1: 'Scholarships can change the numbers. The conditions matter just as much.',
    paragraph:
      'Awards may cover tuition, living expenses, travel, research costs or only one part of the budget. Before applying, check the value, duration, renewal conditions and documents required.',
  },

  fundingTypes: {
    headline: 'Funding types and what to check',
    rows: [
      {
        type: 'Merit scholarship',
        whatToCheck: 'Academic scores, portfolio, language test and renewal GPA.',
      },
      {
        type: 'Tuition waiver',
        whatToCheck: 'Percentage, duration and whether compulsory fees remain.',
      },
      {
        type: 'Government award',
        whatToCheck: 'Nationality, degree level, nomination channel and deadlines.',
      },
      {
        type: 'Research funding',
        whatToCheck: 'Supervisor, research topic, stipend, contractual duties.',
      },
      {
        type: 'Need-based assistance',
        whatToCheck: 'Financial documentation and award limitations.',
      },
    ],
  },

  routesToResearch: {
    headline: 'Scholarship routes to research',
    routes: [
      {
        destination: 'South Korea',
        details: 'Global Korea Scholarship (GKS), university merit awards and graduate research funding.',
      },
      {
        destination: 'Japan',
        details: 'MEXT and university-level awards or reductions.',
      },
      {
        destination: 'Taiwan',
        details: 'university and government opportunities, including program-specific awards.',
      },
      {
        destination: 'Luxembourg',
        details: 'institution-specific competitive merit scholarships, where offered.',
      },
      {
        destination: 'Other destinations',
        details: 'institutional bursaries, postgraduate scholarships and external funders.',
      },
    ],
  },

  beforeRelying: {
    headline: 'Before relying on a scholarship',
    steps: [
      {
        number: '01',
        title: 'Establish eligibility.',
        description: 'Academic record, nationality, level, subject and language.',
      },
      {
        number: '02',
        title: 'Confirm what is funded.',
        description: 'Tuition only, stipend, accommodation or other costs.',
      },
      {
        number: '03',
        title: 'Check dates.',
        description: 'Deadlines can be much earlier than the university intake.',
      },
      {
        number: '04',
        title: 'Build a backup budget.',
        description: 'An unsuccessful application should not leave the entire study plan unworkable.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Check Scholarship Possibilities', href: '/contact#study-enquiry' },
      secondary: { label: 'Explore Study Destinations', href: '/study' },
    },
  },
} as const;
