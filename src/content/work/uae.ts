/**
 * 211 OVERSEAS — Work in UAE Content (Page 14)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const workUaeContent = {
  meta: {
    title: 'Work in UAE | Current Vacancies & Requirements',
    description:
      'Opportunities vary across Dubai, Abu Dhabi and other emirates. Browse healthcare, hospitality, sales and technical sectors and review UAE offer standards.',
  },

  hero: {
    eyebrow: 'WORK IN UAE',
    h1: 'Find the UAE role that matches your experience.',
    paragraph:
      'Opportunities vary across Dubai, Abu Dhabi and other emirates. We publish openings only when role requirements and recruitment stages are sufficiently clear.',
  },

  industries: {
    headline: 'Industries to explore',
    list: [
      {
        title: 'Healthcare',
        description: 'Nursing and other licensed professions; qualification recognition and regulatory requirements apply.',
      },
      {
        title: 'Hospitality',
        description: 'Hotels, F&B, guest services, culinary and property operations.',
      },
      {
        title: 'Sales & administration',
        description: 'Customer service, reception, office support, sales and related positions.',
      },
      {
        title: 'Technical & skilled work',
        description: 'Engineering, construction, logistics, IT and employer-specific trades.',
      },
    ],
  },

  howAssessed: {
    headline: 'How candidates are assessed',
    rows: [
      {
        criterion: 'Qualification',
        whatToPrepare: 'Relevant degree, diploma, certification or trade credentials.',
      },
      {
        criterion: 'Experience',
        whatToPrepare: 'Updated CV and verifiable work history.',
      },
      {
        criterion: 'Language',
        whatToPrepare: 'English or other requirements specified by employer.',
      },
      {
        criterion: 'Professional licensing',
        whatToPrepare: 'Where necessary, licensing/recognition documents and assessment.',
      },
      {
        criterion: 'Availability',
        whatToPrepare: 'Notice period and readiness for the actual recruitment timeline.',
      },
    ],
  },

  understandOffer: {
    headline: 'Understand your UAE offer',
    points: [
      'Salary must state currency and whether it is gross or net.',
      'Review accommodation, food, transport and medical-insurance provisions.',
      'Check weekly working hours, overtime, annual leave and probation terms.',
      'Verify the employer’s legal identity and retain a copy of the signed offer.',
      'A visit or tourist visa is not authorisation to work.',
      'UAE government guidance states that employer recruitment, travel and residence-permit costs for employment are borne by the employer. Public website copy must not suggest otherwise.',
    ],
    _sources: [
      { label: 'UAE Official Labour Rights', url: 'https://u.ae/en/information-and-services/jobs/employment-in-the-private-sector/labour-rights', lastReviewed: '08 October 2026' },
    ],
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Can I obtain a work visa without an employer?',
        a: 'Employer-led employment permits and other residence categories are different. Apply only through a lawful route that matches your intended activity.',
      },
      {
        q: 'Does 211 Overseas guarantee a UAE job?',
        a: 'No. Candidates are shortlisted and selected by employers.',
      },
      {
        q: 'Are nurses assessed differently?',
        a: 'Yes. Healthcare roles may require qualification verification, assessment and professional licensing.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'See UAE Vacancies', href: '/work/openings?destination=UAE' },
      secondary: { label: 'Submit My UAE Work Profile', href: '/contact#work-enquiry' },
    },
  },
} as const;
