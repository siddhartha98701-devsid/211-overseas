/**
 * 211 OVERSEAS — Study in Taiwan Content (Page 07)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const taiwanContent = {
  meta: {
    title: 'Study in Taiwan | Universities & Student Costs',
    description:
      'Taiwan is especially worth exploring for students interested in semiconductors, electronic engineering, computing and related research. Review universities and student costs.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / 07',
    h1: 'Study in Taiwan',
    subtitle: 'Explore technology-oriented education in an important semiconductor economy.',
    paragraph:
      'Taiwan is especially worth exploring for students interested in semiconductors, electronic engineering, computing and related research. It also offers programs in business, public health, biotechnology and humanities.',
    facts: [
      { label: 'Academic strengths', value: 'Engineering · Technology · Research' },
      { label: 'Language', value: 'Mandarin or English, course specific' },
      { label: 'Funding', value: 'University and government awards' },
      { label: 'Location choice', value: 'Taipei or other university cities' },
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'Semiconductor engineering and electronic systems',
      'Computer science, AI and data science',
      'Materials, mechanical and electrical engineering',
      'Biotechnology and life sciences',
      'Business, management, public health and Chinese studies',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'National Taiwan University',
      'National Tsing Hua University',
      'National Yang Ming Chiao Tung University',
      'National Cheng Kung University',
      'National Chengchi University',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  whatToCompare: {
    headline: 'What to compare',
    steps: [
      {
        number: '01',
        title: 'Technology specialisation.',
        description: 'Course depth and research facilities matter more than country reputation alone.',
      },
      {
        number: '02',
        title: 'Medium of instruction.',
        description: 'Verify English-taught course availability, lab requirements and Mandarin expectations.',
      },
      {
        number: '03',
        title: 'Campus and city.',
        description: 'Housing and commuting costs differ across locations.',
      },
      {
        number: '04',
        title: 'Funding terms.',
        description: 'Understand the scholarship duration, required scores and renewal rules.',
      },
    ],
  },

  budget: {
    headline: 'Budget snapshot',
    items: [
      {
        item: 'Taipei living-cost example',
        indicativeInfo:
          'National Taiwan University estimates TWD 66,000–157,000 for a four-month semester, excluding tuition.',
      },
      {
        item: 'Tuition',
        indicativeInfo: 'Varies by university, degree level, department and international status.',
      },
      {
        item: 'Additional costs',
        indicativeInfo: 'Insurance, residence documents, housing deposit, books and transport.',
      },
    ],
    planningReference:
      'Planning reference: National Taiwan University Office of International Affairs cost-of-living guide. Check course-specific fees, student status, city and intake before applying.',
    _sources: [
      { label: 'NTU Cost of Living', url: 'https://admissions.ntu.edu.tw/fees-scholarships/cost-of-living/', lastReviewed: '08 October 2026' },
    ],
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Is Taiwan only for engineering?',
        a: 'No. It is especially relevant to technology, but universities also offer business, health, humanities and other fields.',
      },
      {
        q: 'Are there English-taught programs?',
        a: 'Yes, in selected departments and degrees; confirm course language individually.',
      },
      {
        q: 'Can I apply for scholarships?',
        a: 'Potentially. Award criteria vary by institution and funding body.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Explore Taiwan Courses', href: '#enquiry' },
      secondary: { label: 'Get My Taiwan Shortlist', href: '/resources/cost-of-studying' },
    },
    formFields: ['Qualification', 'Subject', 'Intake', 'Budget'],
  },
} as const;
