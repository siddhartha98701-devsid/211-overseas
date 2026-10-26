/**
 * 211 OVERSEAS — About Us Content (Page 17)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const aboutContent = {
  meta: {
    title: 'About 211 Overseas | Education & Career Guidance',
    description:
      '211 Overseas helps students, parents and professionals explore international education and employment pathways with academic suitability, financial clarity and practical requirements.',
  },

  hero: {
    eyebrow: 'ABOUT US',
    h1: 'A considered approach to international education and careers.',
    paragraph:
      '211 Overseas helps students, parents and professionals explore international education and employment pathways with the information needed to make a sound decision. We focus on academic suitability, financial clarity and the practical requirements behind each option.',
  },

  whatGuidesUs: {
    id: 'approach',
    headline: 'What guides our work',
    cards: [
      {
        title: 'Individual fit',
        description: 'We begin with qualifications, experience, preferences and constraints—not a preselected country.',
      },
      {
        title: 'Useful comparisons',
        description: 'Course content, eligibility, tuition, living costs and timelines belong in the same conversation.',
      },
      {
        title: 'Clear expectations',
        description: 'We distinguish admission, employment selection and government visa decisions.',
      },
      {
        title: 'Measured advice',
        description: 'We explain what is known, what requires verification and where alternatives may be better.',
      },
    ],
  },

  whatWeHelpWith: {
    id: 'what-we-help-with',
    headline: 'What we can help you with',
    education: {
      title: 'EDUCATION',
      items: [
        'Destination and course exploration',
        'University shortlisting',
        'Admission document guidance',
        'Scholarship exploration',
        'Student visa preparation support',
        'Pre-departure planning',
      ],
    },
    employment: {
      title: 'EMPLOYMENT',
      items: [
        'Current vacancy screening',
        'Profile and CV readiness',
        'Interview coordination',
        'Offer / contract understanding',
        'Work-authorisation process guidance',
        'Pre-departure information',
      ],
    },
  },

  approachInPractice: {
    headline: 'Our approach in practice',
    steps: [
      {
        number: '01',
        title: 'Listen.',
        description: 'Understand the objective and starting position.',
      },
      {
        number: '02',
        title: 'Compare.',
        description: 'Examine the available courses or vacancies against real criteria.',
      },
      {
        number: '03',
        title: 'Prepare.',
        description: 'Organise the application process and supporting documents.',
      },
      {
        number: '04',
        title: 'Progress.',
        description: 'Move through the relevant institution, employer and legal decisions.',
      },
    ],
  },

  closing: {
    id: 'enquiry',
    ctas: {
      primary: { label: 'Discuss My Study Plan', href: '/contact#study-enquiry' },
      secondary: { label: 'Explore Overseas Work', href: '/work' },
    },
  },
} as const;
