/**
 * 211 OVERSEAS — Work in Greece Content (Page 15 - New)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const workGreeceContent = {
  meta: {
    title: 'Work in Greece | Hospitality & Hotel Roles',
    description:
      'Explore hotel, restaurant and resort opportunities matched to your training and experience. Roles, program duration, compensation and selection stages in Greece.',
  },

  hero: {
    eyebrow: 'WORK IN GREECE',
    h1: 'Build international hospitality experience in Greece.',
    paragraph:
      'Explore hotel, restaurant and resort opportunities matched to your training and experience. Roles, programme duration, stipend or salary, accommodation and selection stages must be confirmed for each intake.',
  },

  rolesUnderConsideration: {
    headline: 'Roles under consideration when available',
    hotelOperations: {
      title: 'HOTEL OPERATIONS',
      roles: ['Front desk / reception', 'Guest relations', 'Housekeeping', 'Reservations / support'],
    },
    foodAndBeverage: {
      title: 'FOOD & BEVERAGE',
      roles: ['Chef / commis / sous chef', 'Restaurant service', 'Kitchen operations', 'Food and beverage support'],
    },
  },

  liveOpeningFields: {
    headline: 'What the candidate will see on every live opening',
    rows: [
      {
        field: 'Role & location',
        detail: 'Specific hotel / region, when authorised for publication.',
      },
      {
        field: 'Pay / stipend',
        detail: 'Amount in EUR, pay period, gross/net basis and deductions.',
      },
      {
        field: 'Accommodation',
        detail: 'Whether included; room type and deductions if any.',
      },
      {
        field: 'Meals',
        detail: 'Number and type of meals, if provided.',
      },
      {
        field: 'Contract duration',
        detail: 'Actual dates and agreement type.',
      },
      {
        field: 'Eligibility',
        detail: 'Education, experience and language requirements.',
      },
      {
        field: 'Travel',
        detail: 'Who pays flights, insurance and other allowable expenses.',
      },
      {
        field: 'Status',
        detail: 'Accepting profiles · Interviewing · Paused · Closed.',
      },
    ],
  },

  process: {
    headline: 'Typical application process',
    steps: [
      {
        number: '01',
        title: 'Submit your profile.',
        description: 'CV, qualification and relevant work experience.',
      },
      {
        number: '02',
        title: 'Match the role.',
        description: 'Kitchen, front office, F&B and housekeeping have different criteria.',
      },
      {
        number: '03',
        title: 'Attend selection.',
        description: 'Employer interviews or skill assessments may apply.',
      },
      {
        number: '04',
        title: 'Review signed documents.',
        description: 'Understand terms, accommodation and the legal program type.',
      },
      {
        number: '05',
        title: 'Complete legal formalities.',
        description: 'Proceed only after applicable employment/training and immigration approvals.',
      },
    ],
  },

  internshipNote: {
    headline: 'A note on the one-year internship campaign',
    paragraph:
      'Some campaign material supplied to 211 Overseas describes a one-year hospitality internship and accommodation and meals. Such details should appear on a live vacancy only after the employer/program documents confirm them. Greece’s standard third-country seasonal-employment route is limited to up to nine months in a twelve-month period; a one-year program requires its own verified legal classification.',
    _sources: [
      { label: 'Greece Ministry of Labour Third-Country Employment', url: 'https://ypergasias.gov.gr/en/labour-relations/individual-employment-relations/work-for-third-country-nationals-in-greece/', lastReviewed: '08 October 2026' },
    ],
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Is every Greece role a one-year internship?',
        a: 'No. Duration and legal category differ by program and employer.',
      },
      {
        q: 'Are accommodation and meals included?',
        a: 'Only where the written offer specifies them.',
      },
      {
        q: 'Is the stipend the same for all applicants?',
        a: 'No. Compensation must be confirmed for the particular role and contract.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'See Current Greece Opportunities', href: '/work/openings?destination=Greece' },
      secondary: { label: 'Check Hospitality Eligibility', href: '/contact#work-enquiry' },
    },
  },
} as const;
