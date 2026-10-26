/**
 * 211 OVERSEAS — Study in Europe Content (Non-numbered page after UAE)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const europeContent = {
  meta: {
    title: 'Study in Europe | Country & Cost Comparison',
    description:
      'European degrees differ in tuition, teaching language, professional recognition, admission procedures and residence rules. Compare countries and courses individually.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / EUROPE',
    h1: 'Study in Europe',
    subtitle: 'Compare countries individually—not as one uniform study market.',
    paragraph:
      'European degrees differ in tuition, teaching language, professional recognition, admission procedures and residence rules. Build a shortlist by course and country rather than assuming that all European systems work the same way.',
    facts: [
      { label: 'Countries', value: 'Germany · France · Netherlands · Ireland · Italy · more' },
      { label: 'Language', value: 'English and national languages' },
      { label: 'Tuition', value: 'Public/private and country dependent' },
      { label: 'Key check', value: 'Professional recognition' },
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'Engineering, automotive and renewable energy',
      'Computer science, AI and data analytics',
      'Business, finance, law and economics',
      'Design, architecture and hospitality',
      'Healthcare and regulated professions',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'Technical University of Munich',
      'RWTH Aachen University',
      'Delft University of Technology',
      'University of Amsterdam',
      'Trinity College Dublin',
      'University College Dublin',
      'Politecnico di Milano',
      'Sciences Po',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  countryPriority: {
    headline: 'Select a country by priority',
    items: [
      {
        priority: 'Engineering / manufacturing',
        countries: 'Germany, Netherlands, Italy',
      },
      {
        priority: 'Business / finance',
        countries: 'Ireland, France, Netherlands, Luxembourg',
      },
      {
        priority: 'Design / architecture',
        countries: 'Italy, Netherlands, France',
      },
      {
        priority: 'English-medium options',
        countries: 'Ireland, Netherlands and selected programs elsewhere',
      },
      {
        priority: 'Research & academic depth',
        countries: 'Compare individual universities across the region',
      },
    ],
  },

  fiveDifferences: {
    headline: 'Five differences that matter',
    paragraph:
      'University fees, English-language availability, professional licensing, housing and post-study rules vary by country and institution. Compare these five points for every course on your shortlist.',
  },

  budgetApproach: {
    headline: 'Budget approach',
    paragraph:
      'Ask for one budget per country, course and city: published tuition, required funds, housing estimate, insurance, travel, deposits and reserve. Do not compare a low tuition fee in one country with a total cost estimate in another.',
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Is university education free everywhere in Europe?',
        a: 'No. Fees depend on the institution, country, course and applicant category.',
      },
      {
        q: 'Is English sufficient for every job or clinical course?',
        a: 'No. Local-language or professional recognition conditions may apply.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Compare European Study Routes', href: '#enquiry' },
      secondary: { label: 'Ask About a Specific Country', href: '/contact' },
    },
    formFields: ['Qualification', 'Subject', 'Intake', 'Budget'],
  },
} as const;
