/**
 * 211 OVERSEAS — Study in Australia Content
 * Source of truth: 245-page Master Specification PDF (Pages 161–168)
 */

export const australiaContent = {
  meta: {
    title: 'Study in Australia | Group of Eight (Go8) Universities & Post-Study Work',
    description:
      'Explore world-renowned Australian universities across Melbourne, Sydney and Brisbane. Guidance on Group of Eight (Go8) admissions, Genuine Student (GS) criteria and visas.',
  },

  hero: {
    eyebrow: 'STUDY DESTINATION / AUSTRALIA',
    h1: 'World-Class Campuses. Coastlines That Steal the Show.',
    subtitle: 'Discover research, technology, business and university life in a country known for its extraordinary outdoors.',
    paragraph:
      'Imagine finishing lectures and exploring a waterfront, spending weekends near spectacular beaches or discovering the lively cultural scene of Melbourne and Sydney. Australia combines internationally recognised universities with diverse student communities, modern cities and remarkable natural landscapes. From Engineering, AI and Business to Biotechnology, Hospitality and Creative Arts, students can explore academic opportunities across universities, colleges and specialist institutions.',
    primaryButton: 'Explore Australia Universities',
    secondaryButton: 'Find My Australian Study Options',
    facts: [
      { label: 'Academic Standing', value: 'Group of Eight (Go8) & World Top 50 Campuses' },
      { label: 'Post-Study Visas', value: 'Temporary Graduate Visa (Subclass 485)' },
      { label: 'Lifestyle & Climate', value: 'Vibrant Coastal Cities & Outdoor Living' },
      { label: 'Work Rights', value: '48 Hours per Fortnight During Semester' },
    ],
  },

  whyStudy: {
    headline: 'From Lecture Halls to Ocean Views — Australia Does Student Life Differently',
    paragraph:
      'Australia blends world-leading academic research with an active, outdoor-focused student lifestyle. Live in top student cities like Melbourne, Sydney, Brisbane, Adelaide or Perth. Experience diverse multicultural communities, modern campus facilities, innovative tech hubs and access to spectacular coastlines and natural wonders.',
  },

  popularCourses: {
    headline: 'Engineering, AI, Health Sciences & Global Business Down Under',
    items: [
      'Mining, Civil, Renewable & Mechanical Engineering',
      'Artificial Intelligence, Cybersecurity & Information Technology',
      'Business Analytics, Banking & International Management',
      'Nursing, Medicine, Physiotherapy & Allied Health',
      'Biotechnology, Environmental Science & Marine Biology',
      'Architecture, Urban Planning & Sustainable Design',
      'Hospitality, International Tourism & Event Leadership',
      'Data Science, Agricultural Technology & Veterinary Science',
    ],
  },

  universities: {
    headline: 'Australia’s Group of Eight (Go8) & Leading Research Campuses',
    list: [
      'University of Melbourne',
      'University of Sydney',
      'UNSW Sydney',
      'Australian National University',
      'Monash University',
      'University of Queensland',
      'University of Adelaide',
      'University of Western Australia',
    ],
    disclaimer:
      'Illustrative institutions for independent research and profile-based shortlisting. University listing does not signify an affiliation or admission arrangement. Ensure the institution is CRICOS-registered. Genuine Student (GS) assessment, English proficiency thresholds, tuition deposit rules and Subclass 500 visa decisions remain governed by the Australian Department of Home Affairs.',
  },

  chooseYourRoute: {
    headline: 'Explore Australian Education Pathways',
    routes: [
      {
        title: 'Group of Eight (Go8) Universities',
        description:
          'Australia’s premier research-intensive universities, consistently ranked among the world’s top 50, providing globally recognized degrees and intensive research environments.',
      },
      {
        title: 'Australian Technology Network (ATN) & Innovative Campuses',
        description:
          'Universities focusing on industry collaboration, enterprise, technology application and direct professional employability.',
      },
      {
        title: 'Regional Australian Universities & Campuses',
        description:
          'Institutions in designated regional areas (such as Adelaide, Perth, Gold Coast) offering lower living expenses and extended post-study work visa rights.',
      },
      {
        title: 'Vocational Education & Training (VET) Pathways',
        description:
          'Applied diplomas and advanced diplomas with clear academic credit transfer agreements into university degree programmes.',
      },
    ],
  },

  documents: {
    headline: 'Australia Application & Student Visa (Subclass 500) Checklist',
    description: 'Ensure your application meets the Genuine Student (GS) requirement.',
    items: [
      { title: 'Academic Transcripts', detail: 'Class 10, Class 12, or Bachelor’s marksheets verified and certified.' },
      { title: 'Confirmation of Enrolment (CoE)', detail: 'Official electronic certificate issued by your university upon acceptance of offer and tuition deposit.' },
      { title: 'Genuine Student (GS) Evidence', detail: 'Detailed responses and evidence demonstrating your genuine intention to study in Australia and course relevance.' },
      { title: 'English Language Test Results', detail: 'IELTS Academic, PTE Academic, or TOEFL iBT test scores satisfying current visa and course thresholds.' },
      { title: 'Overseas Student Health Cover (OSHC)', detail: 'Mandatory health insurance covering medical and hospital care in Australia for the duration of your visa.' },
      { title: 'Financial Capacity Proof', detail: 'Proof of funds covering 1 year of tuition fees, living expenses and return travel as defined by Home Affairs.' },
    ],
  },

  faqs: {
    headline: 'Frequently Asked Questions About Studying in Australia',
    items: [
      {
        q: 'Can I study in Australia after Class 12?',
        a: 'Yes. Students can apply for 3-year or 4-year Bachelor’s degrees or pathway diplomas leading into the second year of an undergraduate degree.',
      },
      {
        q: 'What is the Genuine Student (GS) requirement?',
        a: 'The Genuine Student requirement is an assessment conducted by the Department of Home Affairs to verify that an applicant’s circumstances, background and study plan demonstrate a genuine intention to obtain a high-quality Australian qualification.',
      },
      {
        q: 'Can international students work while studying in Australia?',
        a: 'Yes. Student visa holders are permitted to work up to 48 hours per fortnight while course is in session, and unlimited hours during recognized school holidays.',
      },
      {
        q: 'What is the Temporary Graduate Visa (Subclass 485)?',
        a: 'The Subclass 485 visa allows international graduates who have completed an eligible Australian degree to live, study and work in Australia temporarily after graduation, with durations depending on qualification level and study location.',
      },
      {
        q: 'What is the Group of Eight (Go8)?',
        a: 'The Group of Eight is a coalition of Australia’s leading research-intensive universities, including Melbourne, Sydney, UNSW, ANU, Monash, Queensland, Adelaide and Western Australia.',
      },
      {
        q: 'What are the benefits of studying in regional Australia?',
        a: 'Studying at a regional campus or university can provide an extra 1 to 2 years of post-study work rights, more affordable living costs, and designated regional migration pathway points.',
      },
      {
        q: 'How does 211 Overseas help with Australian admissions?',
        a: 'We evaluate your profile against Australian qualification criteria, assist with Go8 and regional university shortlisting, review Genuine Student documentation, and manage CoE and visa lodgement.',
      },
    ],
  },

  closing: {
    headline: 'Your Australian Education Begins with the Right Decision',
    ctas: {
      primary: { label: 'Explore Australia Universities', href: '#enquiry' },
      secondary: { label: 'Find My Australian Study Options', href: '#enquiry' },
    },
  },
} as const;
