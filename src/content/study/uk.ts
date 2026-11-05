/**
 * 211 OVERSEAS — Study in UK Content
 * Source of truth: 245-page Master Specification PDF (Pages 154–160)
 */

export const ukContent = {
  meta: {
    title: 'Study in the UK | Russell Group Universities, 1-Year Master’s & Visa',
    description:
      'Explore UK higher education across Russell Group and modern universities. Guidance on 1-year Master’s degrees, Graduate Route 2-year visas, CAS and admissions.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / UK',
    h1: 'Centuries of Academic History. Ideas That Still Shape the World.',
    subtitle: 'Historic universities, global finance, fashion, research and some of the world’s most influential creative industries.',
    paragraph:
      'From London’s financial district and fashion scene to Edinburgh’s historic streets and Manchester’s cultural energy, the UK blends academic heritage with contemporary global industries. Its universities offer an enormous variety of subjects, including Business, Computer Science, Engineering, Psychology, Media, Design and specialised professional courses. Whether you picture yourself on a historic university campus or at a modern creative institution, the UK offers academic environments worth exploring.',
    primaryButton: 'Explore UK Universities',
    secondaryButton: 'Find My UK Course',
    facts: [
      { label: 'University Prestige', value: 'Russell Group & Modern Research Campuses' },
      { label: 'Intensive Master’s', value: '1-Year Fast-Track Taught Master’s Degrees' },
      { label: 'Graduate Route', value: '2-Year Post-Study Work Visa (3 for PhD)' },
      { label: 'Global Influence', value: 'London Financial, Tech & Creative Center' },
    ],
  },

  whyStudy: {
    headline: 'Old Libraries, Modern Ideas and Cities Full of Character',
    paragraph:
      'The UK offers an extraordinary blend of academic tradition and contemporary global culture. Explore historic university quads, London’s tech hubs and creative districts, Manchester’s music and industrial heritage, and Edinburgh’s celebrated festivals. With intensive degree structures and world-renowned faculty, a UK education offers efficient, respected qualifications.',
  },

  popularCourses: {
    headline: 'Finance in London, Fashion in the UK, Engineering Across the Country',
    items: [
      'Business Administration, Finance & FinTech',
      'Computer Science, Data Science & Artificial Intelligence',
      'Mechanical, Aerospace & Civil Engineering',
      'Law, International Commercial Arbitration & Human Rights',
      'Fashion Design, Luxury Brand Marketing & Merchandising',
      'Digital Media Production, Film & Creative Arts',
      'Biomedical Sciences, Pharmacology & Public Health',
      'Psychology, Neuroscience & Clinical Behavioural Studies',
    ],
  },

  universities: {
    headline: 'Featured UK Universities & Russell Group Institutions',
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
      'Illustrative institutions for independent research and profile-based shortlisting. University listing does not signify an affiliation or admission arrangement. Ensure the university is a licensed student sponsor holding an active Sponsor Licence with the UK Home Office. CAS issuance, tuition deposit policies, maintenance funds and Graduate Route visa approvals remain subject to UKVI regulations.',
  },

  chooseYourRoute: {
    headline: 'Compare UK Higher Education Degree Structures',
    routes: [
      {
        title: 'Russell Group Research Universities',
        description:
          '24 world-class, research-intensive UK universities with global reputations, rigorous academic entry standards and extensive laboratory funding.',
      },
      {
        title: '1-Year Taught Master’s Degrees (MSc / MA / MBA)',
        description:
          'Intensive, focused 12-month postgraduate qualifications designed to save time and living expenses while delivering full Master’s-level rigor.',
      },
      {
        title: 'Modern & Practice-Oriented Universities',
        description:
          'Institutions emphasizing practical employability, industry sandwich years (work placements) and modern digital media and business faculties.',
      },
      {
        title: 'Specialist Arts & Music Conservatoires',
        description:
          'World-leading creative institutions in London and across the UK specializing in fine art, fashion design, drama, architecture and music.',
      },
    ],
  },

  documents: {
    headline: 'UK Application & Student Visa (Tier 4) Checklist',
    description: 'Guidelines for international applicants applying to UK universities.',
    items: [
      { title: 'Academic Transcripts', detail: 'Class 10, Class 12 and Bachelor’s degree marksheets with minimum percentage requirements.' },
      { title: 'Confirmation of Acceptance for Studies (CAS)', detail: 'Electronic reference number generated by your licensed university sponsor confirming unconditional offer.' },
      { title: 'English Language Evidence', detail: 'IELTS for UKVI, PTE Academic, TOEFL iBT or Class 12 English marks waiver where accepted.' },
      { title: 'Statement of Purpose (SOP)', detail: 'Personal statement detailing why you want to study in the UK, your course rationale and career goals.' },
      { title: 'Proof of Financial Maintenance', detail: 'Bank funds held continuously for 28 days covering remaining tuition plus UKVI living-cost requirements.' },
      { title: 'TB Clearance & Credibility Interview', detail: 'Medical TB clearance certificate from an approved clinic and preparation for the Home Office credibility check.' },
    ],
  },

  faqs: {
    headline: 'Frequently Asked Questions About Studying in the UK',
    items: [
      {
        q: 'Can I complete a Master’s degree in the UK in one year?',
        a: 'Yes. Most taught Master’s degrees (MSc, MA, LLM, MRes) in the UK are structured as intensive 12-month programmes, allowing students to graduate and enter the workforce faster than standard 2-year routes.',
      },
      {
        q: 'What is the UK Graduate Route visa?',
        a: 'The Graduate Route allows international students who have successfully completed an undergraduate or postgraduate degree at a licensed UK higher education institution to stay and work in the UK for 2 years (3 years for doctoral graduates).',
      },
      {
        q: 'Can I study in the UK after Class 12?',
        a: 'Yes. Students can apply for 3-year Bachelor’s degrees (4 years in Scotland) or foundation pathway programmes through UCAS or direct university channels.',
      },
      {
        q: 'What is a Confirmation of Acceptance for Studies (CAS)?',
        a: 'A CAS is an official electronic confirmation issued by your university sponsor to the Home Office, containing your personal details, course details and tuition fee balance, required to apply for a UK Student visa.',
      },
      {
        q: 'Can international students work part-time in the UK?',
        a: 'International students on a Student visa studying at degree level can work up to 20 hours per week during term time and full-time during holidays.',
      },
      {
        q: 'Are English language test waivers available for Indian students?',
        a: 'Many UK universities accept high percentages in Class 12 English (typically 70%–80% from CBSE, ICSE or selected State Boards) as proof of English language proficiency in lieu of IELTS.',
      },
      {
        q: 'How does 211 Overseas help with UK university admissions?',
        a: 'We evaluate your academic profile, match universities to your budget and career goals, assist with UCAS/direct applications, review personal statements and guide you through CAS and visa financial documentation.',
      },
    ],
  },

  closing: {
    headline: 'Begin Your UK University Chapter with Confidence',
    ctas: {
      primary: { label: 'Explore UK Universities', href: '#enquiry' },
      secondary: { label: 'Find My UK Course', href: '#enquiry' },
    },
  },
} as const;
