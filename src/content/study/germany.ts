/**
 * 211 OVERSEAS — Study in Germany Content
 * Source of truth: German Federal Foreign Office (Auswärtiges Amt) & DAAD (October 2026)
 */

export const germanyContent = {
  meta: {
    title: 'Study in Germany | Tuition-Free Universities, Costs & Visa Guide',
    description:
      'Germany offers world-renowned engineering, computing, automotive, AI and business degrees with zero tuition at most public universities. Compare universities, blocked account living costs and 18-month post-study pathways.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / GERMANY',
    h1: 'Study in Germany',
    subtitle: 'World-leading technical universities, industry integration and zero-tuition pathways.',
    paragraph:
      'Germany is Europe’s premier destination for engineering, technology, applied sciences and research. Most public universities charge zero tuition fees for international students, with graduates benefiting from an 18-month post-study residence permit in a booming industrial economy.',
    facts: [
      { label: 'Tuition Model', value: 'Zero tuition at most public universities' },
      { label: 'Language', value: 'English (broad Master’s) & German' },
      { label: 'Blocked Account', value: '€992 / month (€11,904 / year)' },
      { label: 'Post-Study Visa', value: '18-month jobseeker residence permit' },
    ],
  },

  popularCourses: {
    headline: 'Popular courses and subject areas',
    items: [
      'Automotive, mechanical, aerospace and robotics engineering',
      'Computer science, artificial intelligence and data engineering',
      'Electrical, renewable energy and sustainable systems engineering',
      'Biotechnology, biomedical engineering and life sciences',
      'International business, supply chain, management and economics',
    ],
  },

  universities: {
    headline: 'Universities to explore',
    list: [
      'Technical University of Munich',
      'Ludwig Maximilian University of Munich',
      'Heidelberg University',
      'RWTH Aachen University',
      'Karlsruhe Institute of Technology',
      'Humboldt University of Berlin',
      'Free University of Berlin',
      'Technical University of Berlin',
      'University of Freiburg',
      'University of Stuttgart',
    ],
    disclaimer:
      'Illustrative institutions for independent research and shortlisting. University listing does not signify an affiliation or admission arrangement.',
  },

  whatToCompare: {
    headline: 'What to compare',
    steps: [
      {
        number: '01',
        title: 'Tuition vs. Semester Contribution.',
        description:
          'Most public universities charge zero tuition, but students pay a semester contribution (€150–€350) covering campus administrative services and regional public transit.',
      },
      {
        number: '02',
        title: 'Language of Instruction.',
        description:
          'Verify whether your course is taught entirely in English (common for Master’s) or requires German proficiency (TestDaF / Goethe B2–C1).',
      },
      {
        number: '03',
        title: 'TU9 vs. Universities of Applied Sciences (UAS/FH).',
        description:
          'Choose between research-intensive universities (TU9) or practice-oriented Fachhochschulen with embedded industry internships.',
      },
      {
        number: '04',
        title: 'Blocked Account (Sperrkonto).',
        description:
          'Prepare mandatory proof of financial resources (€11,904/year) deposited into an approved blocked account prior to visa appointment.',
      },
    ],
  },

  budget: {
    headline: 'Budget snapshot',
    items: [
      {
        item: 'Public university tuition',
        indicativeInfo: '€0 at most public institutions; semester contribution typically €150–€350 per term.',
      },
      {
        item: 'Blocked account living requirement (Sperrkonto)',
        indicativeInfo: '€992 per month (€11,904 per academic year) mandated by the German Federal Foreign Office.',
      },
      {
        item: 'Public statutory student health insurance',
        indicativeInfo: 'Approx. €120–€130 monthly for comprehensive coverage under TK, Barmer or AOK.',
      },
      {
        item: 'German national student visa fee',
        indicativeInfo: '€75 for a long-stay category D national study visa.',
      },
      {
        item: 'Also budget for',
        indicativeInfo: 'Accommodation security deposit (typically 2–3 months cold rent), initial registration, books and flights.',
      },
    ],
    planningReference:
      'Planning reference: German Federal Foreign Office (Auswärtiges Amt) and DAAD official student guidelines. Check course-specific rules, federal state policies (e.g. Baden-Württemberg / TUM fees) and university portals before applying.',
    _sources: [
      {
        label: 'German Federal Foreign Office Student Visa',
        url: 'https://www.auswaertiges-amt.de/en/visa-service/buergerservice/faq',
        lastReviewed: 'October 2026',
      },
      {
        label: 'DAAD Costs of Education & Living',
        url: 'https://www.daad.de/en/study-and-research-in-germany/plan-your-studies/costs-of-education-and-living/',
        lastReviewed: 'October 2026',
      },
    ],
  },

  fundingOptions: {
    headline: 'Funding & scholarship options',
    description:
      'Explore DAAD scholarships, Deutschlandstipendium (€300/month merit-based support), Erasmus+ mobility grants, and university-level excellence waivers. While zero-tuition degrees minimize costs, external grants help offset mandatory living expenses.',
  },

  faqs: {
    headline: 'Common questions',
    items: [
      {
        q: 'Is university education really free in Germany for international students?',
        a: 'Yes, public universities in 15 of 16 German federal states do not charge tuition fees for international students. Students only pay a nominal semester fee (€150–€350) which includes administrative costs and often regional public transport.',
      },
      {
        q: 'Can I study in Germany in English without speaking German?',
        a: 'Yes. Thousands of Master’s degree programs and an increasing number of Bachelor’s courses are taught entirely in English. However, learning conversational German is highly advantageous for daily life and internships.',
      },
      {
        q: 'Can international students work while studying in Germany?',
        a: 'Yes. International students from non-EU/EEA countries are legally permitted to work up to 140 full days or 280 half days per calendar year, in addition to academic student assistant (HiWi) positions.',
      },
      {
        q: 'What is the post-study work visa duration in Germany?',
        a: 'Graduates of German universities are entitled to apply for an 18-month residence permit (Jobseeker Visa) to search for qualified employment related to their field of study.',
      },
    ],
  },

  closing: {
    ctas: {
      primary: { label: 'Explore Germany Programmes', href: '#enquiry' },
      secondary: { label: 'Check Eligibility & Entry Requirements', href: '/resources/application-guide' },
    },
    formFields: ['Qualification', 'Subject', 'Intake', 'Budget'],
  },
} as const;
