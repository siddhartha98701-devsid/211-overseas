/**
 * 211 OVERSEAS — Study in Singapore Content (Page 04)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const singaporeContent = {
  meta: {
    title: 'Study in Singapore | Universities & Living Costs',
    description:
      'Singapore is suited to students looking for English-medium higher education, rigorous admission standards and exposure to business, finance, computing and technology.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / 04',
    h1: 'Study in Singapore',
    subtitle: 'English-medium study in a major Asian commercial and technology centre.',
    paragraph:
      'Singapore is suited to students looking for English-medium higher education, rigorous admission standards and exposure to business, finance, computing and technology. Institution type and total cost should be compared carefully.',
    facts: [
      { label: 'Study language', value: 'Mainly English' },
      { label: 'Options', value: 'Public / autonomous · private institutions' },
      { label: 'Entry', value: 'Competitive; course-specific' },
      { label: 'Planning focus', value: 'Tuition + housing costs' },
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'Computer science, AI and data science',
      'Business, accountancy and finance',
      'Engineering and technology',
      'Economics, analytics and logistics',
      'Design, hospitality and interdisciplinary study',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'National University of Singapore',
      'Nanyang Technological University',
      'Singapore Management University',
      'Singapore University of Technology and Design',
      'Singapore Institute of Technology',
      'Singapore University of Social Sciences',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  fit: {
    headline: 'Is Singapore a good fit?',
    description:
      'Most relevant to students seeking English-medium academic routes in computing, business or engineering—and to families prepared for selective admissions and a substantial accommodation budget.',
  },

  beforeApplying: {
    headline: 'Before applying',
    steps: [
      {
        number: '01',
        title: 'Compare the awarding institution.',
        description: 'Do not treat all public universities and private providers as equivalent.',
      },
      {
        number: '02',
        title: 'Review the precise qualification.',
        description: 'Degree recognition and access to further study depend on the awarding body and program.',
      },
      {
        number: '03',
        title: 'Check funding conditions.',
        description: 'Grants or awards may carry eligibility or service requirements.',
      },
      {
        number: '04',
        title: 'Budget the living arrangements.',
        description: 'Accommodation choices often determine the real monthly spend.',
      },
    ],
  },

  budget: {
    headline: 'Budget snapshot',
    items: [
      {
        item: 'Living costs',
        indicativeInfo:
          'NUS Business School guidance: typically around S$1,800–2,800 a month for many students; living style can move the cost substantially.',
      },
      {
        item: 'Tuition',
        indicativeInfo:
          'Set by institution, discipline, intake and international-student category; request an exact fee schedule.',
      },
      {
        item: 'Additional costs',
        indicativeInfo: 'Insurance, registration, student pass, travel, equipment and rental deposits.',
      },
    ],
    planningReference:
      'Planning reference: NUS Business School 2026 student living-cost guide. Check course-specific fees, student status, city and intake before applying.',
    _sources: [
      { label: 'NUS Living Estimates', url: 'https://mscbiz.nus.edu.sg/expenses/', lastReviewed: '08 October 2026' },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Compare Singapore Programs', href: '#enquiry' },
      secondary: { label: 'Discuss My Study Budget', href: '/resources/cost-of-studying' },
    },
    formFields: ['Qualification', 'Subject', 'Intake', 'Budget'],
  },
} as const;
