/**
 * 211 OVERSEAS — Study in UK Content (Page 11)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const ukContent = {
  meta: {
    title: 'Study in UK | Degrees, Costs & Visa Checklist',
    description:
      'The UK offers specialist degrees across a diverse university system. Compare focused program formats, one-year Master’s courses, living costs and visa funds.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / 11',
    h1: 'Study in the United Kingdom',
    subtitle: 'Focused qualifications with a particularly broad Master’s landscape.',
    paragraph:
      'The UK offers specialist degrees across a diverse university system. Many taught Master’s programs last one academic year, although professional, research and other courses may have different structures.',
    facts: [
      { label: 'Study routes', value: 'Bachelor’s · Master’s · Research' },
      { label: 'Teaching', value: 'Mainly English' },
      { label: 'Key benefit', value: 'Focused program formats' },
      { label: 'Key check', value: 'Course + visa funds' },
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'Business, finance and accounting',
      'Computer science, AI and data science',
      'Law, economics and international relations',
      'Engineering and life sciences',
      'Public health, design and creative industries',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'Imperial College London',
      'University College London',
      'King’s College London',
      'University of Manchester',
      'University of Edinburgh',
      'University of Warwick',
      'University of Bristol',
      'University of Birmingham',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  whatToCompare: {
    headline: 'What to compare',
    bullets: [
      'Module content, assessment pattern, placement or professional requirements.',
      'One-year and longer course formats, including whether internships are embedded or optional.',
      'University location: London and other cities have different housing and living costs.',
      'Financial evidence, immigration health surcharge and required documents.',
    ],
  },

  budget: {
    headline: 'Budget snapshot',
    items: [
      {
        item: 'UK Student visa funds — London',
        indicativeInfo: '£1,529 per month for up to nine months, where the requirement applies.',
      },
      {
        item: 'Outside London',
        indicativeInfo: '£1,171 per month for up to nine months, where the requirement applies.',
      },
      {
        item: 'Student visa fee',
        indicativeInfo: '£558 listed on the official UK Student visa page in October 2026.',
      },
      {
        item: 'Also budget for',
        indicativeInfo: 'Course tuition, immigration health surcharge, accommodation deposit and travel.',
      },
    ],
    planningReference:
      'Planning reference: UK Government Student visa guidance and fees published for October 2026. Check course-specific fees, student status, city and intake before applying.',
    _sources: [
      { label: 'UK Student Visa Money Guidance', url: 'https://www.gov.uk/student-visa/money', lastReviewed: '08 October 2026' },
      { label: 'UK Student Visa Fees', url: 'https://www.gov.uk/student-visa', lastReviewed: '08 October 2026' },
    ],
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Are all UK Master’s courses one year long?',
        a: 'No. Many taught programs are, but verify the exact course format and duration.',
      },
      {
        q: 'Can I rely on part-time work to fund tuition?',
        a: 'Do not assume employment income will cover tuition or meet visa financial requirements.',
      },
      {
        q: 'Are immigration rules fixed throughout my course?',
        a: 'Rules and eligibility can change. Check official guidance near application and graduation.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Compare UK Courses', href: '#enquiry' },
      secondary: { label: 'Plan My UK Study Budget', href: '/resources/cost-of-studying' },
    },
    formFields: ['Qualification', 'Subject', 'Intake', 'Budget'],
  },
} as const;
