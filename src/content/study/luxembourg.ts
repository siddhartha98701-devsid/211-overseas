/**
 * 211 OVERSEAS — Study in Luxembourg Content (Page 05 - New)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const luxembourgContent = {
  meta: {
    title: 'Study in Luxembourg | Business Schools & Costs',
    description:
      'Luxembourg is particularly relevant to applicants interested in finance, corporate services and international business. Review business schools, tuition and living costs.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / 05',
    h1: 'Study in Luxembourg',
    subtitle: 'Business, finance and management in the heart of Europe.',
    paragraph:
      'Luxembourg is particularly relevant to applicants interested in finance, corporate services and international business. It offers a multilingual setting; housing and initial settlement costs require early planning.',
    facts: [
      { label: 'Core fields', value: 'Finance · Management · Business' },
      { label: 'Teaching', value: 'English available in selected courses' },
      { label: 'Location', value: 'Central Europe' },
      { label: 'Budget concern', value: 'Housing and proof of resources' },
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'Finance, banking and capital markets',
      'International business and management',
      'Auditing, taxation and accounting',
      'Corporate strategy and entrepreneurship',
      'Economics, quantitative finance and compliance',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'University of Luxembourg',
      'Luxembourg School of Business',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  programmeSpotlight: {
    headline: 'Programme spotlight | Luxembourg School of Business',
    intro:
      'The following programme figures are drawn from the supplied 2026–27 fee overview. Dates, discounts and fees must be reconfirmed with the institution for the desired intake.',
    programmes: [
      {
        name: 'Bachelor in International Business',
        tuition: '€13,100 / €14,300 / €16,100 per year by application plan',
        consideration: 'Check timing, plan and scholarship eligibility.',
      },
      {
        name: 'Master in Management',
        tuition: '€14,500 per year; €29,000 over 2 years',
        consideration: 'Management specialisations; confirm internship component.',
      },
      {
        name: 'Master in International Finance',
        tuition: '€16,600 per year',
        consideration: 'Capital markets and corporate finance focus.',
      },
      {
        name: 'Full-Time MBA',
        tuition: '€39,000 full program',
        consideration: 'Leadership-oriented postgraduate course; confirm admissions.',
      },
    ],
  },

  scholarships: {
    headline: 'Scholarship overview',
    items: [
      'LSB materials describe competitive merit awards of up to 50% of Bachelor tuition for certain eligible candidates.',
      'The supplied LSB material describes awards of up to 30% for selected postgraduate and MBA applicants.',
      'Awards are not automatic; eligibility, conditions and funding availability must be checked for the actual intake.',
    ],
  },

  budget: {
    headline: 'Budget snapshot',
    items: [
      {
        item: 'Initial arrival budget',
        indicativeInfo:
          'University of Luxembourg suggests at least €2,700 to cover early accommodation and settling-in expenses.',
      },
      {
        item: 'Resources guideline',
        indicativeInfo:
          'University of Luxembourg cites a 2025 minimum of €1,517 per month for immigration resource planning, subject to indexation.',
      },
      {
        item: 'Other expenses',
        indicativeInfo: 'Medical cover, housing deposit, transport if applicable, meals and academic materials.',
      },
      {
        item: 'LSB application charges',
        indicativeInfo: 'The supplied programme overview lists a €100 application fee; institution-specific deposits may apply.',
      },
    ],
    planningReference:
      'Planning reference: University of Luxembourg cost guide and supplied LSB tuition overview. The resources benchmark is not a guaranteed personal spending level. Check course-specific fees, student status, city and intake before applying.',
    _sources: [
      { label: 'University of Luxembourg Cost Planning', url: 'https://www.uni.lu/life-en/financial-support/cost-of-living/', lastReviewed: '08 October 2026' },
      { label: 'Guichet.lu Student Residence Guidelines', url: 'https://guichet.public.lu/en/citoyens/immigration/plus-3-mois/ressortissant-tiers/etudiant/etudiant-pays-tiers.html', lastReviewed: '08 October 2026' },
    ],
  },

  admissionsChecklist: {
    headline: 'Admissions & residence checklist',
    steps: [
      {
        number: '01',
        title: 'Check academic eligibility.',
        description: 'Qualification recognition and program requirements are institution-specific.',
      },
      {
        number: '02',
        title: 'Prepare the application.',
        description: 'Academic documents, language evidence, motivation and other requested material.',
      },
      {
        number: '03',
        title: 'Review funding.',
        description: 'Tuition, housing and living funds must be planned together.',
      },
      {
        number: '04',
        title: 'Follow the legal route.',
        description: 'Non-EU students may need temporary authorisation to stay and the applicable visa/residence formalities.',
      },
    ],
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Can I study business in English?',
        a: 'Yes, some relevant programs are taught in English; verify teaching language for your chosen degree.',
      },
      {
        q: 'Are MBA scholarships guaranteed?',
        a: 'No. They depend on eligibility, assessment and availability.',
      },
      {
        q: 'Is the Luxembourg School of Business a 211 Overseas partner?',
        a: 'No partnership is represented or implied by this programme spotlight.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Explore Luxembourg Programmes', href: '#enquiry' },
      secondary: { label: 'Discuss Eligibility & Funding', href: '/resources/cost-of-studying' },
    },
    formFields: ['Qualification', 'Subject', 'Intake', 'Budget'],
  },
} as const;
