/**
 * 211 OVERSEAS — Study in Australia Content (Page 12)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const australiaContent = {
  meta: {
    title: 'Study in Australia | Universities & Student Planning',
    description:
      'Australian institutions offer research-led and professionally oriented courses. Compare universities, course approvals, total costs and latest student visa requirements.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / 12',
    h1: 'Study in Australia',
    subtitle: 'University options across engineering, business, healthcare and postgraduate study.',
    paragraph:
      'Australian institutions offer research-led and professionally oriented courses. The right choice depends on institutional reputation in your subject, course approval, location, full cost and the latest student visa requirements.',
    facts: [
      { label: 'Degree levels', value: 'Bachelor’s · Master’s · Postgraduate' },
      { label: 'Language', value: 'Mostly English' },
      { label: 'Main intake', value: 'Often February / July, program dependent' },
      { label: 'Financial check', value: 'Funds + insurance + tuition' },
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'Computer science, data analytics and AI',
      'Engineering and environmental science',
      'Business, accounting and management',
      'Healthcare and public health',
      'Architecture, agriculture and marine sciences',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'University of Melbourne',
      'University of Sydney',
      'UNSW Sydney',
      'Australian National University',
      'Monash University',
      'University of Queensland',
      'University of Adelaide',
      'University of Western Australia',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  chooseByCourse: {
    headline: 'Choose by course, not city alone',
    steps: [
      {
        number: '01',
        title: 'Check university and course details.',
        description: 'Confirm program, campus, teaching method and applicable recognition.',
      },
      {
        number: '02',
        title: 'Assess real living costs.',
        description: 'Housing varies sharply between cities and accommodation types.',
      },
      {
        number: '03',
        title: 'Plan visa requirements.',
        description: 'Financial evidence, health cover and other conditions must match the rules then in effect.',
      },
      {
        number: '04',
        title: 'Evaluate career relevance.',
        description: 'Compare curriculum, professional recognition and industry components.',
      },
    ],
  },

  costPlanning: {
    headline: 'Cost planning',
    paragraph:
      'University tuition varies by course and level. Request the current fee schedule and add living expenses, accommodation deposits, Overseas Student Health Cover, student visa charges, travel and a contingency. Do not base the decision on earnings from casual work.',
    _sources: [
      { label: 'Australia Student Visa (Subclass 500)', url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500', lastReviewed: '08 October 2026' },
    ],
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Can I work part-time during study?',
        a: 'Student work conditions depend on the visa and current rules; verify them before relying on employment.',
      },
      {
        q: 'Will one state cost the same as another?',
        a: 'No. Housing, commuting and living expenses can differ materially by location.',
      },
      {
        q: 'Does an Australian degree guarantee permanent residency?',
        a: 'No. Study, work and migration routes have separate requirements.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Explore Australia Programmes', href: '#enquiry' },
      secondary: { label: 'Request a Complete Cost Plan', href: '/resources/cost-of-studying' },
    },
    formFields: ['Qualification', 'Subject', 'Intake', 'Budget'],
  },
} as const;
