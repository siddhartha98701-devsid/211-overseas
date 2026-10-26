/**
 * 211 OVERSEAS — Study in Canada Content (Page 10)
 * Source of truth: /content-source/content_source_211_overseas.md (October 2026)
 */

export const canadaContent = {
  meta: {
    title: 'Study in Canada | Institutions, Costs & Permits',
    description:
      'Canada offers universities and colleges across business, technology, engineering, sciences and healthcare. Compare institutions, permit requirements and living costs.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / 10',
    h1: 'Study in Canada',
    subtitle: 'University and college pathways with important program-specific requirements.',
    paragraph:
      'Canada offers universities and colleges across business, technology, engineering, sciences and healthcare. Before choosing, verify the credential, institution and latest study-permit requirements—not just the course title.',
    facts: [
      { label: 'Institutions', value: 'Universities · colleges' },
      { label: 'Credential', value: 'Degree / diploma / certificate' },
      { label: 'Immigration', value: 'Rules updated periodically' },
      { label: 'Budget', value: 'Tuition + required living funds' },
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'Computing, AI and analytics',
      'Engineering and applied technology',
      'Business, accounting and supply chain',
      'Life sciences, biotechnology and environment',
      'Health sciences and social sciences',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'University of Toronto',
      'University of British Columbia',
      'McGill University',
      'University of Waterloo',
      'McMaster University',
      'University of Alberta',
      'Western University',
      'Queen’s University',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  beforeYouPay: {
    headline: 'Before you pay an institution',
    bullets: [
      'Confirm the awarding institution and exact qualification.',
      'Check whether the institution and program meet the relevant immigration rules at the time of application.',
      'Verify tuition and refund conditions in writing.',
      'Examine program length and what further academic or professional progression it enables.',
    ],
  },

  budget: {
    headline: 'Budget snapshot',
    items: [
      {
        item: 'Living funds benchmark',
        indicativeInfo:
          'For a single applicant outside Quebec applying from 1 September 2026: CAD 23,448 for one year, excluding tuition and travel.',
      },
      {
        item: 'Tuition',
        indicativeInfo: 'University and course specific; compare the latest fee schedule.',
      },
      {
        item: 'Extra expenditure',
        indicativeInfo: 'Insurance, flights, first rent/deposit, winter clothing and contingencies.',
      },
    ],
    planningReference:
      'Planning reference: Immigration, Refugees and Citizenship Canada published study-permit financial-support requirements, effective September 2026. Check course-specific fees, student status, city and intake before applying.',
    _sources: [
      { label: 'IRCC Study Permit Financial Support', url: 'https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/get-documents/financial-support.html', lastReviewed: '08 October 2026' },
    ],
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Is the proof-of-funds figure my actual budget?',
        a: 'No. It is a financial-evidence minimum for the specified situation; your spending may be higher.',
      },
      {
        q: 'Does every college program offer the same future rights?',
        a: 'No. Rules differ and may change; check the exact program and current immigration policy.',
      },
      {
        q: 'Are scholarships offered?',
        a: 'Yes, depending on institution and profile; funding varies substantially.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Review Canada Course Options', href: '#enquiry' },
      secondary: { label: 'Check Program & Permit Requirements', href: '/resources/application-guide' },
    },
    formFields: ['Qualification', 'Subject', 'Intake', 'Budget'],
  },
} as const;
