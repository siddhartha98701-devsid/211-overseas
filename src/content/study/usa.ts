/**
 * 211 OVERSEAS — Study in USA Content (Page 09)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const usaContent = {
  meta: {
    title: 'Study in USA | University Selection & Total Costs',
    description:
      'The United States offers extensive course choice and research infrastructure. Build a purposeful shortlist and plan total cost of attendance.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / 09',
    h1: 'Study in the USA',
    subtitle: 'Research breadth, flexible learning and a wide choice of universities.',
    paragraph:
      'The United States offers extensive course choice and research infrastructure. Its admissions and financial arrangements differ widely by institution; a good shortlist looks beyond rankings and takes the full cost of attendance into account.',
    facts: [
      { label: 'Degree routes', value: 'Bachelor’s · Master’s · Postgraduate' },
      { label: 'English proof', value: 'Institution specific' },
      { label: 'Admission', value: 'Academic record + program criteria' },
      { label: 'Budget', value: 'Total cost of attendance' },
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'Computer science, AI and data science',
      'Engineering and applied sciences',
      'Business, economics and finance',
      'Biotechnology, life sciences and public health',
      'Architecture, media, design and social sciences',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'Massachusetts Institute of Technology',
      'Stanford University',
      'University of California, Berkeley',
      'Carnegie Mellon University',
      'Georgia Institute of Technology',
      'University of Michigan',
      'Purdue University',
      'University of Illinois Urbana-Champaign',
      'University of California, Los Angeles',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  shortlistSteps: {
    headline: 'Build a purposeful shortlist',
    steps: [
      {
        number: '01',
        title: 'Choose course outcomes.',
        description: 'Read modules, research tracks, accreditation and professional requirements.',
      },
      {
        number: '02',
        title: 'Review admissions fit.',
        description: 'Grades, prerequisites, portfolios, recommendations and relevant testing may be required.',
      },
      {
        number: '03',
        title: 'Compare university settings.',
        description: 'Urban or campus-centred, research-led or teaching-oriented, undergraduate or graduate.',
      },
      {
        number: '04',
        title: 'Evaluate funding.',
        description: 'Scholarships, graduate assistantships and financial aid differ substantially.',
      },
      {
        number: '05',
        title: 'Check total cost.',
        description: 'Tuition plus required fees, housing, meals, health cover, travel and personal expenses.',
      },
    ],
  },

  costPlanning: {
    headline: 'Cost planning',
    paragraph:
      'There is no trustworthy single US tuition figure. Ask each university for its published annual cost of attendance and the international-student funding policy. Compare the same academic year, not different quotations or partial fee figures.',
    _sources: [
      { label: 'EducationUSA Financial Guidance', url: 'https://educationusa.state.gov/your-5-steps-us-study/finance-your-studies/undergraduate', lastReviewed: '08 October 2026' },
    ],
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Should I choose a university only by ranking?',
        a: 'No. Program quality, academic fit, funding and realistic career goals should carry more weight.',
      },
      {
        q: 'Can scholarships cover full tuition?',
        a: 'Some awards can be substantial, but many are partial and highly competitive.',
      },
      {
        q: 'Does admission guarantee a visa?',
        a: 'No. Visa eligibility is assessed separately by the relevant authorities.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Build My US University List', href: '#enquiry' },
      secondary: { label: 'Discuss Applications & Funding', href: '/resources/cost-of-studying' },
    },
    formFields: ['Qualification', 'Subject', 'Intake', 'Budget'],
  },
} as const;
