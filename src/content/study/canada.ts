/**
 * 211 OVERSEAS — Study in Canada Content
 * Source of truth: 245-page Master Specification PDF (Pages 147–153)
 */

export const canadaContent = {
  meta: {
    title: 'Study in Canada | Top Universities, Applied Colleges & Admissions',
    description:
      'Explore higher education in Canada across research universities and applied polytechnic colleges. Insights on Designated Learning Institutions, study permits and admissions.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / CANADA',
    h1: 'Big Cities. Bigger Landscapes. Countless Academic Directions.',
    subtitle: "Discover Canada's research universities, applied colleges, multicultural communities and extraordinary natural beauty.",
    paragraph:
      "Imagine studying in a country where modern cities meet mountain ranges, forests, lakes and some of the world's most recognisable natural landscapes. Canada offers a diverse academic environment, with universities, colleges and polytechnic institutions providing different approaches to education. From Artificial Intelligence and Engineering to Business, Healthcare-related disciplines, Creative Media and Applied Technology, students can explore courses that match their academic backgrounds and interests.",
    primaryButton: 'Explore Canada Institutions',
    secondaryButton: 'Find My Study Options',
    facts: [
      { label: 'Education Landscape', value: 'U15 Research Universities & Public Colleges' },
      { label: 'Study Pathways', value: "Bachelor's, Master's & Post-Graduate Diplomas" },
      { label: 'Key Sectors', value: 'AI, CleanTech, Mining & Financial Services' },
      { label: 'Campus Culture', value: 'Safe, Multicultural & Student-Friendly' },
    ],
  },

  whyStudy: {
    headline: 'Toronto’s Skyline, Vancouver’s Mountains — A Country of Contrasts',
    paragraph:
      'Canada combines exceptional academic standards with an outdoor lifestyle unmatched anywhere in the world. From the tech innovation hubs of Toronto, Montreal and Waterloo to the coastal beauty of British Columbia, students experience a welcoming society, clean modern cities and world-class healthcare and safety infrastructure.',
  },

  popularCourses: {
    headline: 'Research, Technology or Applied Learning — Find Your Direction',
    items: [
      'Artificial Intelligence, Data Analytics & Software Engineering',
      'Computer Science & Cybersecurity Systems',
      'Civil, Mechanical, Mining & Sustainable Engineering',
      'Business Administration, Finance & Global Supply Chain',
      'Health Sciences, Nursing Leadership & Public Health',
      'Digital Media, Animation, Game Design & Creative Tech',
      'Environmental Sciences, Forestry & Renewable Energy',
    ],
  },

  universities: {
    headline: 'Universities & Higher Education Institutions in Canada',
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
      'Illustrative institutions for independent research and profile-based shortlisting. University listing does not signify an affiliation or admission arrangement. Ensure the institution is an approved Designated Learning Institution (DLI) and verify provincial attestation letter (PAL) rules, post-graduation work permit (PGWP) eligibility criteria and study permit requirements prior to applying.',
  },

  chooseYourRoute: {
    headline: 'Compare Canadian Higher Education Pathways',
    routes: [
      {
        title: 'Research Universities (U15 Group)',
        description:
          'Institutions focused on academic discovery, graduate research, theory-driven curricula and specialized Bachelor’s, Master’s and PhD degrees.',
      },
      {
        title: 'Public Colleges & Institutes of Technology',
        description:
          'Applied, career-focused post-secondary education featuring practical co-op work terms, industry certifications and postgraduate certificates.',
      },
      {
        title: 'Co-op Education Degree Programmes',
        description:
          'Programmes combining classroom academic semesters with paid, full-time professional work terms directly integrated into the curriculum (e.g. Waterloo Co-op).',
      },
      {
        title: 'Post-Degree Diplomas & Certificates',
        description:
          'Specialized 1-year and 2-year accelerated programmes for university graduates looking to build applied industry skills in high-demand Canadian sectors.',
      },
    ],
  },

  documents: {
    headline: 'Canada Application & Study Permit Checklist',
    description: 'Guidelines for international students preparing Canadian admissions documentation.',
    items: [
      { title: 'Academic Transcripts', detail: 'Class 10, Class 12 and Bachelor’s degree marksheets evaluated according to Canadian grading scales.' },
      { title: 'Letter of Acceptance (LOA)', detail: 'Official acceptance letter from an authorized Canadian Designated Learning Institution (DLI).' },
      { title: 'Provincial Attestation Letter (PAL)', detail: 'Mandatory provincial attestation confirmation issued by provincial authorities for study permit filing.' },
      { title: 'Language Test Results', detail: 'IELTS Academic, PTE Core/Academic, or TOEFL iBT test scores meeting institution benchmarks.' },
      { title: 'Proof of Financial Support', detail: 'Demonstration of tuition payment and living funds via an approved Guaranteed Investment Certificate (GIC).' },
      { title: 'Statement of Purpose', detail: 'Clear study plan articulating why you selected the programme and your future career intentions.' },
    ],
  },

  faqs: {
    headline: 'Frequently Asked Questions About Studying in Canada',
    items: [
      {
        q: 'Can I study in Canada after Class 12?',
        a: 'Yes. Students can explore Bachelor’s degrees at universities or applied diploma programmes at accredited public colleges, depending on academic marks and prerequisites.',
      },
      {
        q: 'What is the difference between a Canadian university and a college?',
        a: 'Universities primarily award academic degrees (Bachelor’s, Master’s, PhD) with a focus on theoretical study and research. Colleges and polytechnics emphasize applied, hands-on career training and diplomas.',
      },
      {
        q: 'What is a Designated Learning Institution (DLI)?',
        a: 'A DLI is a school approved by a provincial or territorial government to host international students. You must have an acceptance letter from a DLI to apply for a Canadian study permit.',
      },
      {
        q: 'What is a Provincial Attestation Letter (PAL)?',
        a: 'Under Canadian immigration regulations, most international post-secondary students must provide a Provincial Attestation Letter (PAL) from the province where they plan to study alongside their study permit application.',
      },
      {
        q: 'Can international students work while studying in Canada?',
        a: 'Eligible full-time international students holding a valid study permit may work off-campus up to 20 hours per week during academic terms and full-time during scheduled study breaks.',
      },
      {
        q: 'What is the Post-Graduation Work Permit (PGWP)?',
        a: 'The PGWP allows eligible graduates from qualifying programmes at designated institutions to work in Canada for up to three years, depending on the length and level of their study programme.',
      },
      {
        q: 'How can 211 Overseas help with my Canada application?',
        a: 'We evaluate your profile, verify DLI and PAL requirements, guide you through college or university shortlisting, and provide comprehensive support with admissions and documentation.',
      },
    ],
  },

  closing: {
    headline: 'Find a Canadian Programme That Makes Sense for You',
    ctas: {
      primary: { label: 'Explore Canada Institutions', href: '#enquiry' },
      secondary: { label: 'Find My Study Options', href: '#enquiry' },
    },
  },
} as const;
