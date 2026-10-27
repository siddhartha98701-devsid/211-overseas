/**
 * 211 OVERSEAS — Study Overview Content (Page 02)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const studyOverviewContent = {
  meta: {
    title: 'Study Abroad Destinations & University Guidance',
    description:
      'Explore degree and language-study routes across Asia, Europe, North America and Australia. Start with the subject you want to pursue, then compare institutions, entry requirements and total cost.',
  },

  hero: {
    eyebrow: 'STUDY ABROAD',
    h1: 'Study Abroad. Make the decision with the facts in front of you.',
    paragraph:
      'Explore degree and language-study routes across Asia, Europe, North America and Australia. Start with the subject you want to pursue, then compare institutions, entry requirements and total cost.',
    ctas: {
      primary: { label: 'Find My Study Destination', href: '#destinations' },
      secondary: { label: 'Compare Costs & Scholarships', href: '/resources/cost-of-studying' },
    },
  },

  exploreByDestination: {
    headline: 'Explore by destination',
    destinations: [
      {
        name: 'South Korea',
        href: '/study/south-korea',
        distinctiveFactor: 'Technology, business, creativity; Korean-language and degree pathways',
      },
      {
        name: 'Germany',
        href: '/study/germany',
        distinctiveFactor: 'Tuition-free public universities, world-class engineering, automotive, AI and industry internships',
      },
      {
        name: 'Singapore',
        href: '/study/singapore',
        distinctiveFactor: 'English-medium education; selective universities and applied learning',
      },
      {
        name: 'Luxembourg',
        href: '/study/luxembourg',
        distinctiveFactor: 'Business, finance and management in a multilingual European market',
      },
      {
        name: 'Japan',
        href: '/study/japan',
        distinctiveFactor: 'Engineering, robotics, manufacturing, science and design',
      },
      {
        name: 'Taiwan',
        href: '/study/taiwan',
        distinctiveFactor: 'Semiconductor ecosystem, electronics, computing and research',
      },
      {
        name: 'UAE',
        href: '/study/uae',
        distinctiveFactor: 'International campuses, industry-facing degrees and a global business environment',
      },
      {
        name: 'Europe',
        href: '/study/europe',
        distinctiveFactor: 'Different fee systems, languages and professional requirements by country',
      },
      {
        name: 'USA',
        href: '/study/usa',
        distinctiveFactor: 'Research scale, course flexibility and broad institutional choice',
      },
      {
        name: 'Canada',
        href: '/study/canada',
        distinctiveFactor: 'Universities and colleges; verify study permit and program eligibility',
      },
      {
        name: 'UK',
        href: '/study/uk',
        distinctiveFactor: 'Many one-year Master’s programs; course and visa budgeting important',
      },
      {
        name: 'Australia',
        href: '/study/australia',
        distinctiveFactor: 'Research universities and professionally oriented course options',
      },
    ],
  },

  exploreByQualification: {
    headline: 'Explore by qualification',
    qualifications: [
      {
        title: 'Bachelor’s',
        description: 'For students completing secondary school; eligibility varies by school board and course.',
      },
      {
        title: 'Master’s & MBA',
        description: 'For graduates looking to deepen expertise, specialise or change direction.',
      },
      {
        title: 'Language programs',
        description: 'Build language ability for personal development or a future degree, where eligible.',
      },
      {
        title: 'Postgraduate & research',
        description: 'Supervisor fit, research proposal, laboratory facilities and funding matter most.',
      },
    ],
  },

  fiveDecisions: {
    headline: 'We help you make five important decisions',
    decisions: [
      {
        number: '01',
        title: 'Is the course a good academic fit?',
        description: 'Compare modules, entry prerequisites and teaching language.',
      },
      {
        number: '02',
        title: 'Is the institution appropriate?',
        description: 'Check academic recognition, location and relevant faculty.',
      },
      {
        number: '03',
        title: 'Can you afford the whole course?',
        description: 'Include realistic living costs and contingency, not tuition alone.',
      },
      {
        number: '04',
        title: 'What funding is actually available?',
        description: 'Scholarships may be competitive, partial or dependent on renewal.',
      },
      {
        number: '05',
        title: 'What is the plan after graduation?',
        description: 'Review recognition, licensing and current immigration rules separately.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Get My University Shortlist', href: '#shortlist-form' },
      secondary: { label: 'Read the Student Budget Guide', href: '/resources/cost-of-studying' },
    },
    formFields: ['Qualification', 'Intended subject', 'Preferred countries', 'Budget range'],
  },
} as const;
