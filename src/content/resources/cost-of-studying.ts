/**
 * 211 OVERSEAS — Study Budget Planner Content (Page 20)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const costOfStudyingContent = {
  meta: {
    title: 'Cost of Studying Abroad | Budget Planner',
    description:
      'Tuition is only one line of the budget. Build your study plan across seven cost components and examine official living-cost reference points.',
  },

  hero: {
    eyebrow: 'STUDY BUDGET PLANNER',
    h1: 'What does studying abroad really cost?',
    paragraph:
      'Tuition is only one line of the budget. A reliable plan includes recurring living expenses and the one-time costs of setting up in a new country.',
  },

  sevenParts: {
    headline: 'Build your budget in seven parts',
    rows: [
      {
        component: '1. Academic fees',
        include: 'Tuition, application, admission, compulsory university charges.',
      },
      {
        component: '2. Housing',
        include: 'Rent or dormitory, deposits, utilities, setup costs.',
      },
      {
        component: '3. Daily living',
        include: 'Food, commuting, mobile and personal expenditure.',
      },
      {
        component: '4. Health & insurance',
        include: 'Mandatory insurance and medical expenses.',
      },
      {
        component: '5. Visa & documents',
        include: 'Visa, translation, attestation and testing as applicable.',
      },
      {
        component: '6. Travel',
        include: 'Flights, baggage and local travel on arrival.',
      },
      {
        component: '7. Contingency',
        include: 'Exchange-rate movement and unexpected necessary expenditure.',
      },
    ],
  },

  officialReferences: {
    headline: 'Selected official reference points — October 2026',
    rows: [
      {
        destination: 'South Korea',
        reference: 'Approx. KRW 750k–1m monthly living costs; government guidance.',
      },
      {
        destination: 'Singapore',
        reference: 'Approx. S$1.8k–2.8k monthly typical living budget; NUS guidance.',
      },
      {
        destination: 'Japan',
        reference: 'Approx. ¥105k monthly average living cost; JASSO survey via official portal.',
      },
      {
        destination: 'Taiwan',
        reference: 'TWD 66k–157k for four months in Taipei, excluding tuition; NTU example.',
      },
      {
        destination: 'Luxembourg',
        reference: 'At least €2,700 starting budget recommended by University of Luxembourg.',
      },
      {
        destination: 'Canada',
        reference: 'CAD 23,448 proof of living funds for single applicant outside Quebec from Sep 2026; not actual spending estimate.',
      },
      {
        destination: 'UK',
        reference: '£1,529/month in London or £1,171 outside London for up to 9 months under applicable visa funds rule.',
      },
    ],
    caution:
      'These figures have different meanings: living-cost estimates, arrival budgets and financial-evidence thresholds must not be compared as though they are the same measure. They are neither personal quotations nor tuition totals.',
  },

  whatToAsk: {
    headline: 'What to ask before paying a university',
    bullets: [
      'Will the amount increase in later years?',
      'Are scholarships renewable and on what conditions?',
      'Is accommodation assured or only recommended?',
      'When does the tuition deposit become non-refundable?',
      'How much must be available for visa financial proof, separately from actual spending?',
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Request a Country-Specific Budget', href: '/contact#study-enquiry' },
      secondary: { label: 'Explore Scholarships', href: '/resources/scholarships' },
    },
  },
} as const;
