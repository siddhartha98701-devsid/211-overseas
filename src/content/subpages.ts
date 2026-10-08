/**
 * Content for the destination / role sub-pages. Everything here is written to stay general and accurate:
 * no invented statistics, fees or guarantees, and requirements are described as "typical" because rules,
 * intakes and policies differ by institution and change over time. Counsellors confirm the details.
 */

export type SubpageGroup = 'other-destinations' | 'study-in-south-korea' | 'work-in-germany' | 'work-in-uae';

export interface SubpageContent {
  group: SubpageGroup;
  slug: string;
  /** Short name used in breadcrumbs and cards. */
  name: string;
  kind: 'study' | 'work';
  eyebrow: string;
  /** Headline; the highlight is rendered in gold. */
  headline: string;
  highlight: string;
  intro: string;
  /** Four short facts shown under the headline. */
  facts: { label: string; value: string }[];
  whyTitle: string;
  why: { title: string; text: string }[];
  fieldsTitle: string;
  fields: string[];
  whoTitle: string;
  who: string[];
  faqs: { q: string; a: string }[];
  /** Must match siteContent.form.interests so the form pre-selects it. */
  interest: string;
  /** Must match a destination option in the enquiry form. */
  destination: string;
  metaTitle: string;
  metaDescription: string;
  /** Short line for the cards on the parent page. */
  blurb: string;
}

const STUDY_STEPS = [
  { title: 'Profile & course matching', text: 'We review your marks, goals and budget and shortlist courses and institutions that genuinely fit.' },
  { title: 'Applications & documents', text: 'Help with SOPs, transcripts, forms and deadlines so your application is complete and on time.' },
  { title: 'Language test guidance', text: 'Advice on the right English (or local-language) test and how to prepare for it.' },
  { title: 'Visa & pre-departure', text: 'Visa documentation guidance, financial paperwork and a pre-departure briefing before you fly.' },
];
const WORK_STEPS = [
  { title: 'Eligibility assessment', text: 'We check your qualification, experience and language level against the pathway requirements.' },
  { title: 'Language & documentation', text: 'Language preparation guidance and support with certificates, translations and recognition paperwork.' },
  { title: 'Interviews & employers', text: 'Interview preparation and assistance connecting with employers where applicable.' },
  { title: 'Visa & pre-departure', text: 'Visa documentation guidance and a pre-departure briefing so you land prepared.' },
];
export const STEPS = { study: STUDY_STEPS, work: WORK_STEPS };

const NO_GUARANTEE = {
  q: 'Can you guarantee admission or a visa?',
  a: 'No. We provide expert guidance and application assistance, but admissions, scholarships, job offers and visas are decided by the universities, employers, regulators and embassies.',
};

export const SUBPAGES: SubpageContent[] = [
  /* ============================== OTHER DESTINATIONS ============================== */
  {
    group: 'other-destinations', slug: 'japan', name: 'Japan', kind: 'study',
    eyebrow: 'Study in Japan', headline: 'Study in Japan: technology, tradition and opportunity', highlight: 'Japan',
    intro: 'Japan pairs world-class technology and research with a safe, structured student life. Choose English-taught degrees or build Japanese language skills first, and we will map the route that suits your profile.',
    facts: [
      { label: 'Typical intakes', value: 'April & October' },
      { label: 'Teaching language', value: 'English & Japanese programs' },
      { label: 'Language tests', value: 'IELTS/TOEFL, JLPT (for Japanese)' },
      { label: 'Working while studying', value: 'Part-time with permission, within limits' },
    ],
    whyTitle: 'Why Japan?',
    why: [
      { title: 'Technology & innovation', text: 'A global leader in robotics, electronics, automotive and digital industries.' },
      { title: 'Respected research culture', text: 'Universities with strong laboratories and close links to industry.' },
      { title: 'English & Japanese pathways', text: 'English-taught degrees exist, and language schools provide a route to Japanese-taught study.' },
      { title: 'Safe, efficient student life', text: 'Clean, well-connected cities with a reputation for safety and reliability.' },
      { title: 'Scholarship opportunities', text: 'Government and university scholarships may be available to eligible students.' },
      { title: 'Creative industries', text: 'Design, animation and gaming are part of Japan’s global cultural reach.' },
    ],
    fieldsTitle: 'Popular fields of study',
    fields: ['Engineering & Robotics', 'IT & Computer Science', 'Business & Management', 'Game & Digital Design', 'Animation & Media', 'Japanese Language', 'Hospitality & Tourism', 'Sciences'],
    whoTitle: 'Who can apply?',
    who: ['Completed 12th for undergraduate study, or a bachelor’s degree for graduate study', 'English or Japanese proficiency as required by the program', 'Clear academic goals and a realistic budget plan', 'Genuine, well-prepared financial and academic documents'],
    faqs: [
      { q: 'Do I need to know Japanese to study in Japan?', a: 'Not for English-taught programs, though learning Japanese helps with daily life and careers. Other students start with a Japanese language course before moving into a degree.' },
      { q: 'When are the intakes?', a: 'Most universities start in April, with some programs also starting in October. Application deadlines usually fall many months earlier, so start early.' },
      { q: 'Can I work part-time while studying?', a: 'Students can usually work part-time with the right permission, within weekly hour limits. Rules apply, and your counsellor will explain the current ones.' },
      { q: 'Are scholarships available?', a: 'Government and university scholarships exist but are competitive, and eligibility varies. We help you identify the ones you may qualify for.' },
      NO_GUARANTEE,
    ],
    interest: 'Study in Other Countries', destination: 'Japan',
    metaTitle: 'Study in Japan', metaDescription: 'Study in Japan: English and Japanese programs, intakes, requirements and how 211 OVERSEAS guides you from application to visa.',
    blurb: 'Technology, research and creative industries in a safe, efficient country.',
  },
  {
    group: 'other-destinations', slug: 'taiwan', name: 'Taiwan', kind: 'study',
    eyebrow: 'Study in Taiwan', headline: 'Study in Taiwan: an Asian tech hub with English-taught degrees', highlight: 'Taiwan',
    intro: 'Taiwan combines a strong technology and semiconductor industry with a welcoming, affordable student environment. Many universities offer English-taught degrees, with Mandarin learning as a bonus.',
    facts: [
      { label: 'Typical intakes', value: 'September & February' },
      { label: 'Teaching language', value: 'Many English-taught degrees' },
      { label: 'Language tests', value: 'IELTS/TOEFL, TOCFL (for Mandarin)' },
      { label: 'Key industries', value: 'Semiconductors, ICT, manufacturing' },
    ],
    whyTitle: 'Why Taiwan?',
    why: [
      { title: 'A technology powerhouse', text: 'Home to a world-leading semiconductor and electronics ecosystem.' },
      { title: 'English-taught programs', text: 'A wide choice of degrees taught in English, especially in engineering, tech and business.' },
      { title: 'Good value', text: 'Living costs are generally lower than in many Western study destinations.' },
      { title: 'Scholarship schemes', text: 'Government and university scholarships may be open to international students.' },
      { title: 'Safe and welcoming', text: 'Friendly, convenient cities with excellent public transport and healthcare.' },
      { title: 'Learn Mandarin', text: 'Study alongside immersive Mandarin learning, a valuable career skill.' },
    ],
    fieldsTitle: 'Popular fields of study',
    fields: ['Electrical Engineering & Semiconductors', 'Computer Science & AI', 'Business & Management', 'Mechanical Engineering', 'Design & Media', 'Mandarin Language', 'Biotechnology', 'Hospitality'],
    whoTitle: 'Who can apply?',
    who: ['12th pass for undergraduate, bachelor’s degree for graduate programs', 'English proficiency (or Mandarin for Mandarin-taught programs)', 'Good academic record for your chosen field', 'Complete financial and identity documents'],
    faqs: [
      { q: 'Are there English-taught programs in Taiwan?', a: 'Yes. Many universities run degree programs in English, particularly in engineering, technology, business and the sciences.' },
      { q: 'When do programs start?', a: 'The main intake is usually September, with a smaller intake in February at some universities.' },
      { q: 'Do I need to learn Mandarin?', a: 'Not for English-taught degrees, but Mandarin helps with daily life and local career options. Many universities offer Mandarin courses.' },
      { q: 'Are scholarships available?', a: 'Government and university scholarships exist for eligible international students. They are competitive, and requirements differ by scheme.' },
      NO_GUARANTEE,
    ],
    interest: 'Study in Other Countries', destination: 'Taiwan',
    metaTitle: 'Study in Taiwan', metaDescription: 'Study in Taiwan: English-taught degrees in technology, engineering and business. Intakes, requirements and guidance from 211 OVERSEAS.',
    blurb: 'English-taught tech and engineering degrees in a welcoming, good-value hub.',
  },
  {
    group: 'other-destinations', slug: 'singapore', name: 'Singapore', kind: 'study',
    eyebrow: 'Study in Singapore', headline: 'Study in Singapore: a global business and tech gateway', highlight: 'Singapore',
    intro: 'Singapore offers English-medium education in one of Asia’s most connected cities. It is a hub for finance, technology and hospitality, with strong links between classrooms and industry.',
    facts: [
      { label: 'Typical intakes', value: 'January/February & August' },
      { label: 'Teaching language', value: 'English' },
      { label: 'Visa', value: 'Student’s Pass required' },
      { label: 'Key industries', value: 'Finance, tech, biomedical, hospitality' },
    ],
    whyTitle: 'Why Singapore?',
    why: [
      { title: 'English-medium education', text: 'Study entirely in English in a multicultural, international setting.' },
      { title: 'A global business hub', text: 'Finance, technology and trade industries sit right next to the campuses.' },
      { title: 'Safe and well connected', text: 'A clean, safe city with outstanding transport and easy regional travel.' },
      { title: 'Industry links', text: 'Many programs include internships and projects with real employers.' },
      { title: 'Choice of institutions', text: 'Public universities and private institutes serve different goals and budgets.' },
      { title: 'Gateway to Asia', text: 'A launchpad for careers and networks across the Asia-Pacific region.' },
    ],
    fieldsTitle: 'Popular fields of study',
    fields: ['Business & Finance', 'Computer Science & Data', 'Engineering', 'Hospitality & Tourism', 'Biomedical Sciences', 'Media & Design', 'Culinary & Hotel Management', 'Analytics'],
    whoTitle: 'Who can apply?',
    who: ['Strong academic results, as admissions can be competitive', 'English proficiency (IELTS/TOEFL or equivalent)', 'Clear course choice aligned with your career plan', 'Financial documents showing you can fund your studies'],
    faqs: [
      { q: 'Is Singapore expensive for students?', a: 'Costs vary a lot between public universities and private institutes, and living costs are significant. We help you plan a realistic budget before you apply.' },
      { q: 'When are the intakes?', a: 'Most universities start in August, and some programs also start in January or February. Private institutes often have additional intakes.' },
      { q: 'Do I need a visa?', a: 'International students typically need a Student’s Pass once accepted. Your counsellor will guide you through the documentation.' },
      { q: 'Can I stay and work after graduation?', a: 'Post-study options exist but depend on current rules and your situation, so check the latest policy with us before you decide.' },
      NO_GUARANTEE,
    ],
    interest: 'Study in Other Countries', destination: 'Singapore',
    metaTitle: 'Study in Singapore', metaDescription: 'Study in Singapore: English-medium education, intakes, requirements and visa guidance with 211 OVERSEAS.',
    blurb: 'English-medium study in Asia’s business, finance and tech hub.',
  },
  {
    group: 'other-destinations', slug: 'europe', name: 'Europe', kind: 'study',
    eyebrow: 'Study in Europe', headline: 'Study in Europe: many countries, one continent of options', highlight: 'Europe',
    intro: 'Europe offers a huge range of English-taught programs, research-led universities and cultures within a few hours of each other. We help you compare countries and find the one that fits your course, budget and goals.',
    facts: [
      { label: 'Typical intakes', value: 'September (main), some in February' },
      { label: 'Teaching language', value: 'Many English-taught programs' },
      { label: 'Visa', value: 'Depends on the country' },
      { label: 'Also see', value: 'Germany careers page for healthcare work' },
    ],
    whyTitle: 'Why Europe?',
    why: [
      { title: 'Variety of countries', text: 'Compare systems, costs and cultures before choosing where to study.' },
      { title: 'English-taught programs', text: 'Many universities teach master’s and some bachelor’s programs in English.' },
      { title: 'Research-led universities', text: 'Long academic traditions with modern labs and industry partnerships.' },
      { title: 'Travel across borders', text: 'Easy, affordable travel between countries during and after your studies.' },
      { title: 'Cultural experience', text: 'Live and learn in a different culture while building global networks.' },
      { title: 'Career pathways', text: 'Routes into healthcare, hospitality, engineering and other fields.' },
    ],
    fieldsTitle: 'Popular fields of study',
    fields: ['Engineering', 'Business & Management', 'Computer Science & AI', 'Healthcare & Nursing', 'Hospitality', 'Design & Architecture', 'Sciences', 'Social Sciences'],
    whoTitle: 'Who can apply?',
    who: ['Completed secondary school or a bachelor’s degree, depending on the level', 'English proficiency (or the local language where required)', 'A motivated, well-prepared application for your chosen program', 'Financial and visa documents as required by the country'],
    faqs: [
      { q: 'Which European country is best for me?', a: 'It depends on your course, budget, language and goals. We compare options with you based on your profile instead of pushing one country.' },
      { q: 'Are there English-taught programs?', a: 'Yes, in many countries, especially at master’s level. Availability varies by country and university.' },
      { q: 'What about work after studying?', a: 'Rules differ in every country and change over time. We outline the current options for the countries on your shortlist.' },
      { q: 'Do you also help with working in Europe?', a: 'Yes. We have dedicated pathways for healthcare professionals going to Germany, and we advise on other European opportunities too.' },
      NO_GUARANTEE,
    ],
    interest: 'Study in Other Countries', destination: 'Europe',
    metaTitle: 'Study in Europe', metaDescription: 'Study in Europe: compare countries, English-taught programs and visa requirements with expert guidance from 211 OVERSEAS.',
    blurb: 'Compare countries and English-taught programs across the continent.',
  },
  {
    group: 'other-destinations', slug: 'united-kingdom', name: 'United Kingdom', kind: 'study',
    eyebrow: 'Study in the United Kingdom', headline: 'Study in the UK: globally recognised degrees', highlight: 'UK',
    intro: 'The UK is known for respected degrees, a wide choice of courses and master’s programs that are often completed in a single year. We help you choose courses and universities that match your profile.',
    facts: [
      { label: 'Typical intakes', value: 'September (main) & January' },
      { label: 'Master’s length', value: 'Often one year' },
      { label: 'Language tests', value: 'IELTS or accepted equivalents' },
      { label: 'Applications', value: 'UCAS for undergraduate study' },
    ],
    whyTitle: 'Why the UK?',
    why: [
      { title: 'Globally recognised degrees', text: 'UK qualifications are respected by employers and universities worldwide.' },
      { title: 'Shorter master’s programs', text: 'Many master’s degrees take one year, which can reduce total cost and time.' },
      { title: 'Wide course choice', text: 'From business and engineering to creative arts, law, health and the sciences.' },
      { title: 'English-speaking environment', text: 'Study and live in an English-speaking setting from day one.' },
      { title: 'Research and industry links', text: 'Strong research output and employer partnerships across many subjects.' },
      { title: 'Post-study work options', text: 'A graduate work route has existed, though rules change, so confirm the current policy with us.' },
    ],
    fieldsTitle: 'Popular fields of study',
    fields: ['Business & Management', 'Computer Science & Data', 'Engineering', 'Healthcare & Life Sciences', 'Law & Social Sciences', 'Creative Arts & Media', 'Finance & Accounting', 'Hospitality & Tourism'],
    whoTitle: 'Who can apply?',
    who: ['Completed 12th with strong marks for undergraduate study', 'A bachelor’s degree for master’s programs', 'IELTS or another accepted English test', 'Personal statement, references and financial documents'],
    faqs: [
      { q: 'How long is a master’s degree in the UK?', a: 'Many taught master’s programs last one year full-time, though some courses are longer. Check each course page for the exact length.' },
      { q: 'When should I apply?', a: 'For September entry, start preparing 9–12 months ahead. Popular courses and scholarships can have earlier deadlines.' },
      { q: 'Can I work while studying?', a: 'Student visa holders can usually work part-time during term within set limits. Conditions apply, and we explain the current rules.' },
      { q: 'What about working after graduation?', a: 'A post-study work route has been available, but policy changes, so please confirm the latest rules with your counsellor.' },
      NO_GUARANTEE,
    ],
    interest: 'Study in Other Countries', destination: 'United Kingdom',
    metaTitle: 'Study in the United Kingdom', metaDescription: 'Study in the UK: one-year master’s, UCAS, intakes and requirements with step-by-step guidance from 211 OVERSEAS.',
    blurb: 'Recognised degrees and one-year master’s programs.',
  },
  {
    group: 'other-destinations', slug: 'united-states', name: 'United States', kind: 'study',
    eyebrow: 'Study in the United States', headline: 'Study in the USA: flexibility, research and choice', highlight: 'USA',
    intro: 'The United States offers the widest choice of universities and programs in the world, with flexible curricula and strong research opportunities. We help you build a balanced shortlist and a strong application.',
    facts: [
      { label: 'Typical intakes', value: 'Fall (Aug/Sept) & Spring (Jan)' },
      { label: 'Language tests', value: 'TOEFL, IELTS or Duolingo (varies)' },
      { label: 'Other tests', value: 'SAT/ACT, GRE/GMAT at some schools' },
      { label: 'Visa', value: 'F-1 student visa' },
    ],
    whyTitle: 'Why the USA?',
    why: [
      { title: 'Unmatched choice', text: 'Thousands of institutions and programs across every field and budget.' },
      { title: 'Flexible curriculum', text: 'Many degrees let you explore subjects and choose a major along the way.' },
      { title: 'Research and innovation', text: 'Access to leading labs, startups and industry connections.' },
      { title: 'Campus life and networking', text: 'Vibrant campuses with clubs, internships and alumni networks.' },
      { title: 'Practical training', text: 'Work-based training options may be available after study, subject to visa rules.' },
      { title: 'Funding opportunities', text: 'Some institutions offer scholarships and assistantships to eligible students.' },
    ],
    fieldsTitle: 'Popular fields of study',
    fields: ['Computer Science & AI', 'Engineering', 'Business & Analytics', 'Data Science', 'Health Sciences', 'Design & Media', 'Biotechnology', 'Economics'],
    whoTitle: 'Who can apply?',
    who: ['12th pass for undergraduate or a bachelor’s degree for graduate study', 'English test scores accepted by your target universities', 'Standardised tests where the university requires them', 'Essays, recommendations and proof of funds'],
    faqs: [
      { q: 'Do I need SAT, GRE or GMAT scores?', a: 'It depends on the university and program. Many have made tests optional, but others still require them, so we check each shortlisted school.' },
      { q: 'When should I start applying?', a: 'For Fall entry, begin 9–12 months ahead. Early deadlines apply to scholarships and some programs.' },
      { q: 'Can I work while studying?', a: 'F-1 students can usually work on campus within limits, and training options may be available later. Rules are strict, so ask us for the current details.' },
      { q: 'How do I choose between so many universities?', a: 'We build a balanced list of ambitious, realistic and safe options based on your profile, budget and goals.' },
      NO_GUARANTEE,
    ],
    interest: 'Study in Other Countries', destination: 'United States',
    metaTitle: 'Study in the United States', metaDescription: 'Study in the USA: intakes, tests, F-1 visa and how 211 OVERSEAS helps you build a strong application.',
    blurb: 'The widest choice of programs, with flexible degrees and research.',
  },
  {
    group: 'other-destinations', slug: 'canada', name: 'Canada', kind: 'study',
    eyebrow: 'Study in Canada', headline: 'Study in Canada: practical education in a welcoming country', highlight: 'Canada',
    intro: 'Canada is known for quality education, work-integrated programs and a multicultural, welcoming student experience. Universities and colleges serve different goals, and we help you pick the right fit.',
    facts: [
      { label: 'Typical intakes', value: 'September, January & May' },
      { label: 'Visa', value: 'Study permit' },
      { label: 'Program styles', value: 'Universities & colleges, many with co-op' },
      { label: 'Language tests', value: 'IELTS or accepted equivalents' },
    ],
    whyTitle: 'Why Canada?',
    why: [
      { title: 'Quality education', text: 'Respected universities and colleges with internationally recognised qualifications.' },
      { title: 'Co-op and work-integrated learning', text: 'Many programs combine classroom study with paid work experience.' },
      { title: 'Universities and colleges', text: 'Choose academic, applied or career-focused pathways to match your goals.' },
      { title: 'Welcoming and multicultural', text: 'Diverse, safe cities that are known for being welcoming to newcomers.' },
      { title: 'Post-graduation options', text: 'Work options after study may be available, depending on the program and current rules.' },
      { title: 'English and French', text: 'Study in English or French environments depending on the province.' },
    ],
    fieldsTitle: 'Popular fields of study',
    fields: ['Business & Management', 'IT & Computer Science', 'Engineering Technology', 'Healthcare & Nursing', 'Hospitality & Tourism', 'Supply Chain', 'Data Analytics', 'Skilled Trades'],
    whoTitle: 'Who can apply?',
    who: ['12th pass for diplomas and bachelor’s, bachelor’s degree for postgraduate study', 'IELTS or another accepted English test', 'An acceptance letter from a designated learning institution', 'Proof of funds and a clear study plan'],
    faqs: [
      { q: 'What is the difference between a university and a college?', a: 'Universities focus on academic and research-led degrees, while colleges usually offer applied, career-focused diplomas and certificates, often with co-op options.' },
      { q: 'Can I work during my studies?', a: 'Study permit holders can usually work part-time during term and full-time in scheduled breaks, within the limits of the current rules.' },
      { q: 'Will I get a work permit after graduating?', a: 'Eligibility depends on your institution and program and the rules at the time. We check this with you before you apply.' },
      { q: 'When should I apply?', a: 'Start 6–9 months before your intake, because processing times for study permits vary.' },
      NO_GUARANTEE,
    ],
    interest: 'Study in Other Countries', destination: 'Canada',
    metaTitle: 'Study in Canada', metaDescription: 'Study in Canada: universities, colleges, co-op programs, study permits and guidance from 211 OVERSEAS.',
    blurb: 'Co-op programs and a welcoming, multicultural student experience.',
  },
  {
    group: 'other-destinations', slug: 'australia', name: 'Australia', kind: 'study',
    eyebrow: 'Study in Australia', headline: 'Study in Australia: industry-linked courses and a great lifestyle', highlight: 'Australia',
    intro: 'Australia offers a high-quality education system, practical industry-linked courses and student-friendly cities. We help you find the right course, institution and intake for your goals.',
    facts: [
      { label: 'Typical intakes', value: 'February/March & July' },
      { label: 'Visa', value: 'Student visa' },
      { label: 'Language tests', value: 'IELTS, PTE or accepted equivalents' },
      { label: 'Strong areas', value: 'Health, IT, engineering, business' },
    ],
    whyTitle: 'Why Australia?',
    why: [
      { title: 'High-quality education', text: 'A well-regulated system with qualifications recognised around the world.' },
      { title: 'Practical, industry-linked courses', text: 'Placements and work-focused learning feature in many programs.' },
      { title: 'Student-friendly cities', text: 'Multicultural cities with strong support services for international students.' },
      { title: 'Work while studying', text: 'Students can usually work part-time within limits set by their visa.' },
      { title: 'Strong subject areas', text: 'Notable strengths in health, engineering, IT, business and hospitality.' },
      { title: 'Lifestyle', text: 'Outdoor lifestyle, beaches and good weather alongside your studies.' },
    ],
    fieldsTitle: 'Popular fields of study',
    fields: ['Nursing & Health Sciences', 'Information Technology', 'Engineering', 'Business & Accounting', 'Hospitality & Tourism', 'Education', 'Environment & Agriculture', 'Cybersecurity'],
    whoTitle: 'Who can apply?',
    who: ['12th pass for undergraduate or a bachelor’s degree for postgraduate study', 'IELTS, PTE or another accepted English test', 'A confirmation of enrolment from your institution', 'Financial documents and a genuine study plan'],
    faqs: [
      { q: 'When are the intakes?', a: 'The main intakes are usually February/March and July, with additional intakes at some institutions.' },
      { q: 'Can I work while I study?', a: 'Student visa holders can usually work part-time, with hour limits during study periods. Check the current conditions with us.' },
      { q: 'Are there post-study work options?', a: 'Post-study work visas have existed, but eligibility and rules change. We explain what applies when you apply.' },
      { q: 'How do visa checks work?', a: 'Visa applications need strong documentation showing your genuine study intent and funds. We guide you through preparing them.' },
      NO_GUARANTEE,
    ],
    interest: 'Study in Other Countries', destination: 'Australia',
    metaTitle: 'Study in Australia', metaDescription: 'Study in Australia: intakes, student visa, requirements and course guidance from 211 OVERSEAS.',
    blurb: 'Industry-linked courses and student-friendly cities.',
  },

  /* ============================== SOUTH KOREA ============================== */
  {
    group: 'study-in-south-korea', slug: 'bachelors', name: 'Bachelor’s programs', kind: 'study',
    eyebrow: 'South Korea · Undergraduate', headline: 'Bachelor’s degrees in South Korea, taught in English', highlight: 'South Korea',
    intro: 'Start your degree in one of Asia’s most dynamic study destinations. English-taught undergraduate programs in Seoul, Busan and other cities let you study in a technology-driven, culture-rich country.',
    facts: [
      { label: 'Typical length', value: 'Around 4 years' },
      { label: 'English requirement', value: 'IELTS 5.5+ (Duolingo accepted)' },
      { label: 'Typical intakes', value: 'March & September' },
      { label: 'Cities', value: 'Seoul, Busan & more' },
    ],
    whyTitle: 'Why study a bachelor’s in South Korea?',
    why: [
      { title: '100% English-taught options', text: 'Choose programs taught entirely in English, with Korean language support alongside.' },
      { title: 'Technology and innovation', text: 'Study within an economy known for electronics, semiconductors and digital industries.' },
      { title: 'Future-focused courses', text: 'Game development, animation, computer science, design, business and more.' },
      { title: 'Scholarship opportunities', text: 'University and government scholarships may be open to eligible international students.' },
      { title: 'Modern campuses and cities', text: 'Safe, well-connected cities with excellent transport and student life.' },
      { title: 'Gateway to Asia', text: 'Build academic, cultural and professional connections across the region.' },
    ],
    fieldsTitle: 'Popular undergraduate fields',
    fields: ['Game Development', 'Animation', 'Film & Visual Effects', 'Digital Design', 'Computer Science', 'Global Business Administration', 'Korean Language & Business', 'Engineering'],
    whoTitle: 'Who can apply?',
    who: ['Completed 12th (or equivalent) with good academic results', 'IELTS 5.5+ or a Duolingo English Test score (requirements vary by university)', 'Clear course choice and motivation', 'Passport, transcripts and financial documents'],
    faqs: [
      { q: 'Is Korean required for a bachelor’s degree?', a: 'Not for English-taught programs. Learning Korean is still helpful, and we can guide you on Korean language courses.' },
      { q: 'What English score do I need?', a: 'Typically IELTS 5.5 or above, and the Duolingo English Test is accepted. Each university sets its own requirement.' },
      { q: 'When should I apply?', a: 'Applications for the September intake usually open several months earlier, with a smaller March intake at many universities. Start preparing early.' },
      { q: 'Are scholarships available?', a: 'Yes, scholarships exist, but they are competitive and eligibility varies. We help you identify the ones you may qualify for.' },
      NO_GUARANTEE,
    ],
    interest: 'Bachelor\'s in South Korea', destination: 'South Korea',
    metaTitle: 'Bachelor’s in South Korea', metaDescription: 'English-taught bachelor’s programs in South Korea (Seoul, Busan): requirements, intakes and guidance from 211 OVERSEAS.',
    blurb: 'English-taught undergraduate degrees in Seoul, Busan and more.',
  },
  {
    group: 'study-in-south-korea', slug: 'masters', name: 'Master’s programs', kind: 'study',
    eyebrow: 'South Korea · Graduate', headline: 'Master’s programs in South Korea: research, technology and careers', highlight: 'South Korea',
    intro: 'Take your career further with a graduate degree at a Korean university. From AI and engineering to business and design, English-taught master’s programs put you at the centre of research and industry.',
    facts: [
      { label: 'Typical length', value: 'Around 2 years' },
      { label: 'English requirement', value: 'IELTS 5.5+ (Duolingo accepted)' },
      { label: 'Typical intakes', value: 'March & September' },
      { label: 'Eligibility', value: 'Bachelor’s degree' },
    ],
    whyTitle: 'Why do a master’s in South Korea?',
    why: [
      { title: 'Research-driven universities', text: 'Strong laboratories and research groups in science, engineering and technology.' },
      { title: 'English-taught graduate programs', text: 'Many master’s programs are taught in English for international students.' },
      { title: 'Close industry links', text: 'Proximity to leading companies in electronics, automotive and digital sectors.' },
      { title: 'Funding opportunities', text: 'Scholarships and research assistantships may be available to eligible students.' },
      { title: 'Career-focused study', text: 'Programs that connect academic learning with real-world applications.' },
      { title: 'Global exposure', text: 'A diverse international student community in a fast-moving economy.' },
    ],
    fieldsTitle: 'Popular graduate fields',
    fields: ['Artificial Intelligence', 'Computer Science', 'Engineering & Technology', 'Global Business Administration', 'Game Design & Animation', 'Digital Design', 'Biotechnology', 'Korean Language & Business'],
    whoTitle: 'Who can apply?',
    who: ['A completed bachelor’s degree in a relevant subject', 'IELTS 5.5+ or a Duolingo English Test score (varies by university)', 'A statement of purpose and academic references', 'Passport, transcripts and financial documents'],
    faqs: [
      { q: 'Do I need research experience?', a: 'Not always. Requirements vary by program, and research-track programs usually expect a stronger academic or project background.' },
      { q: 'How long is a master’s degree in Korea?', a: 'Typically around two years, though it depends on the program and university.' },
      { q: 'Can I get funding?', a: 'Scholarships and assistantships exist but are competitive. We help you understand the options for your shortlisted universities.' },
      { q: 'Is Korean required?', a: 'Not for English-taught master’s programs, though some research environments use Korean day to day.' },
      NO_GUARANTEE,
    ],
    interest: 'Master\'s in South Korea', destination: 'South Korea',
    metaTitle: 'Master’s in South Korea', metaDescription: 'English-taught master’s programs in South Korea: AI, engineering, business and design. Requirements and guidance from 211 OVERSEAS.',
    blurb: 'English-taught graduate degrees in AI, engineering, business and design.',
  },
  {
    group: 'study-in-south-korea', slug: 'korean-language', name: 'Korean language program', kind: 'study',
    eyebrow: 'South Korea · Language', headline: 'Learn Korean in South Korea and unlock your degree pathway', highlight: 'Korean',
    intro: 'University language institutes offer immersive Korean courses for international students. Whether you plan to move into a degree afterwards or simply want the language, we guide you from choosing a course to arriving in Korea.',
    facts: [
      { label: 'Format', value: 'Intensive courses at university language institutes' },
      { label: 'Typical terms', value: 'Several per year (often March, June, September, December)' },
      { label: 'Proficiency test', value: 'TOPIK' },
      { label: 'Visa', value: 'Language trainee visa' },
    ],
    whyTitle: 'Why learn Korean in South Korea?',
    why: [
      { title: 'Immersive learning', text: 'Practise every day in classrooms and real life, the fastest way to progress.' },
      { title: 'A pathway to a degree', text: 'Strong Korean can open Korean-taught degrees and more scholarship options.' },
      { title: 'Career advantage', text: 'Korean skills are valued by companies working with or in Korea.' },
      { title: 'Cultural experience', text: 'Experience Korean culture, food, music and technology first-hand.' },
      { title: 'Flexible start dates', text: 'Language institutes usually run several terms a year, so you can start sooner.' },
      { title: 'Combine with English-taught study', text: 'Some students study Korean first and then move into an English-taught degree.' },
    ],
    fieldsTitle: 'Who it suits',
    fields: ['Future degree students', 'Korean-taught degree applicants', 'Career-focused learners', 'K-culture enthusiasts', 'Business and trade professionals', 'Scholarship applicants'],
    whoTitle: 'Who can apply?',
    who: ['Completed 12th or higher, depending on the institute', 'No prior Korean needed for beginner levels', 'Valid passport and financial documents', 'A clear plan for what you want to do after the course'],
    faqs: [
      { q: 'Do I need to know any Korean to start?', a: 'No. Language institutes offer beginner levels, so you can start from zero.' },
      { q: 'How long should I study Korean?', a: 'It depends on your goal. Degree applicants often study for several terms to reach the level their target program expects.' },
      { q: 'What is TOPIK?', a: 'TOPIK is the Test of Proficiency in Korean. Many Korean-taught degrees and scholarships ask for a TOPIK level.' },
      { q: 'Can I move into a degree afterwards?', a: 'Yes. Many students continue to a bachelor’s or master’s program, and we help you plan that route.' },
      NO_GUARANTEE,
    ],
    interest: 'Korean Language Program', destination: 'South Korea',
    metaTitle: 'Korean Language Program in South Korea', metaDescription: 'Learn Korean at a university language institute in South Korea. Terms, TOPIK, visa guidance and support from 211 OVERSEAS.',
    blurb: 'Immersive Korean courses and a pathway into a degree.',
  },

  /* ============================== GERMANY ============================== */
  {
    group: 'work-in-germany', slug: 'nurses', name: 'Nurses', kind: 'work',
    eyebrow: 'Work in Germany · Nursing', headline: 'Work as a nurse in Germany: a structured, rewarding career', highlight: 'nurse',
    intro: 'Germany has structured pathways for qualified international nurses. We guide you through the eligibility check, German language preparation, qualification recognition, interviews and visa documentation.',
    facts: [
      { label: 'Language level', value: 'Typically German B1–B2' },
      { label: 'Recognition', value: 'Required for your nursing qualification' },
      { label: 'Our support', value: 'Documentation, interviews, visa guidance' },
      { label: 'Eligibility', value: 'Qualified, registered nurses' },
    ],
    whyTitle: 'Why Germany for nurses?',
    why: [
      { title: 'Demand for healthcare professionals', text: 'Germany’s healthcare system actively recruits qualified international nurses.' },
      { title: 'A clear pathway', text: 'A defined process covers language, recognition, employment and visa.' },
      { title: 'Professional development', text: 'Work in modern facilities with opportunities to specialise and grow.' },
      { title: 'Work-life balance', text: 'A regulated working culture with clear contracts and employee protections.' },
      { title: 'Benefits and security', text: 'Employment typically includes health insurance and social security contributions.' },
      { title: 'Family and future', text: 'Family reunification and long-term residence options exist, subject to the rules in force.' },
    ],
    fieldsTitle: 'Where nurses work',
    fields: ['Hospitals', 'Care & nursing homes', 'Rehabilitation centres', 'Outpatient & community care', 'Specialist clinics', 'Geriatric care'],
    whoTitle: 'Who can apply?',
    who: ['A recognised nursing qualification (GNM, B.Sc. or equivalent)', 'Nursing registration and relevant work experience as required', 'Willingness to learn German to the required level', 'Complete, genuine academic and professional documents'],
    faqs: [
      { q: 'Do I need to speak German before applying?', a: 'You start learning German as part of the process. Employers and authorities usually expect an intermediate level (often B1–B2) before you start working.' },
      { q: 'What is qualification recognition?', a: 'German authorities review your nursing qualification against German standards. We guide you through the documents, translations and steps.' },
      { q: 'How long does the process take?', a: 'It depends on your language progress, documents and the authorities’ processing times. We give you a realistic timeline after your assessment.' },
      { q: 'Can my family join me?', a: 'Family reunification is possible under certain conditions. We explain what applies to your situation.' },
      NO_GUARANTEE,
    ],
    interest: 'Work in Germany – Nursing', destination: 'Germany',
    metaTitle: 'Work as a Nurse in Germany', metaDescription: 'Nursing careers in Germany: language, qualification recognition, interviews and visa guidance from 211 OVERSEAS.',
    blurb: 'Language prep, recognition, interviews and visa guidance for nurses.',
  },
  {
    group: 'work-in-germany', slug: 'physiotherapists', name: 'Physiotherapists', kind: 'work',
    eyebrow: 'Work in Germany · Physiotherapy', headline: 'Work as a physiotherapist in Germany: same skills, a bigger tomorrow', highlight: 'physiotherapist',
    intro: 'Germany offers qualified international physiotherapists a structured route into the healthcare system. We guide you through eligibility, German language, recognition, interview preparation and visa documentation.',
    facts: [
      { label: 'Language level', value: 'Typically German B1–B2' },
      { label: 'Recognition', value: 'Required for your physiotherapy qualification' },
      { label: 'Our support', value: 'Documentation, interviews, visa guidance' },
      { label: 'Eligibility', value: 'Qualified physiotherapists (BPT or equivalent)' },
    ],
    whyTitle: 'Why Germany for physiotherapists?',
    why: [
      { title: 'Valued healthcare role', text: 'Physiotherapy is an established profession within Germany’s healthcare system.' },
      { title: 'Structured recognition', text: 'A defined process assesses your qualification and any compensation measures.' },
      { title: 'Varied workplaces', text: 'Hospitals, rehabilitation centres, private practices and sports clinics.' },
      { title: 'Professional growth', text: 'Training, specialisation and continuing education options.' },
      { title: 'Work-life balance', text: 'Clear contracts and a regulated working culture.' },
      { title: 'Family and future', text: 'Family reunification and long-term options may be available under the rules in force.' },
    ],
    fieldsTitle: 'Where physiotherapists work',
    fields: ['Hospitals', 'Rehabilitation centres', 'Private practices', 'Sports clinics', 'Geriatric & neurological care', 'Outpatient therapy'],
    whoTitle: 'Who can apply?',
    who: ['A Bachelor’s in Physiotherapy (BPT) or equivalent from a recognised institution', 'Relevant professional registration and experience as required', 'Commitment to learning German to the required level', 'Complete, genuine academic and professional documents'],
    faqs: [
      { q: 'Which qualification do I need?', a: 'A recognised physiotherapy degree such as a BPT. Recognition authorities will compare it with German training requirements.' },
      { q: 'What is the language requirement?', a: 'You will need German at an intermediate level, commonly B1–B2 for healthcare professions. We guide you on courses and timelines.' },
      { q: 'Might I need extra training or an exam?', a: 'Sometimes recognition requires additional steps. We explain what could apply once your documents are assessed.' },
      { q: 'How does the process work with employers?', a: 'We help with interview preparation and connecting with employers where applicable, and guide you through the visa documentation.' },
      NO_GUARANTEE,
    ],
    interest: 'Work in Germany – Physiotherapy', destination: 'Germany',
    metaTitle: 'Work as a Physiotherapist in Germany', metaDescription: 'Physiotherapy careers in Germany: language, recognition, interviews and visa guidance from 211 OVERSEAS.',
    blurb: 'Eligibility, German language, recognition and employer support.',
  },

  /* ============================== UAE ============================== */
  {
    group: 'work-in-uae', slug: 'healthcare', name: 'Healthcare', kind: 'work',
    eyebrow: 'Work in UAE · Healthcare', headline: 'Healthcare careers in the UAE', highlight: 'the UAE',
    intro: 'The UAE’s growing healthcare sector offers opportunities for qualified nurses, allied-health professionals and support staff. We guide you through licensing requirements, documents and the move.',
    facts: [
      { label: 'Working language', value: 'English widely used in healthcare' },
      { label: 'Licensing', value: 'Via regulators such as DHA, DOH or MOHAP' },
      { label: 'Documents', value: 'Attested qualifications and experience letters' },
      { label: 'Our support', value: 'Guidance and employer assistance' },
    ],
    whyTitle: 'Why healthcare in the UAE?',
    why: [
      { title: 'A growing sector', text: 'Hospitals, clinics and specialist centres across multiple emirates.' },
      { title: 'International teams', text: 'Work in diverse, multicultural clinical environments.' },
      { title: 'English at work', text: 'English is widely used as a working language in healthcare.' },
      { title: 'Modern facilities', text: 'Access to well-equipped hospitals and specialist services.' },
      { title: 'Career progression', text: 'Opportunities to build experience in an international setting.' },
      { title: 'Lifestyle', text: 'Safe, modern cities with a large international community.' },
    ],
    fieldsTitle: 'Roles we guide on',
    fields: ['Nursing', 'Physiotherapy', 'Medical laboratory', 'Radiology & imaging', 'Pharmacy', 'Healthcare administration', 'Allied health'],
    whoTitle: 'Who can apply?',
    who: ['A recognised healthcare qualification and professional registration', 'Relevant, verifiable work experience', 'Willingness to meet the licensing requirements of the relevant regulator', 'Complete, attested documents'],
    faqs: [
      { q: 'Do I need a licence to work in healthcare in the UAE?', a: 'Yes. Healthcare professionals are licensed by the relevant regulator, such as DHA, DOH or MOHAP, depending on the emirate.' },
      { q: 'How much experience do I need?', a: 'Requirements depend on the role and employer. We review your profile and explain what applies.' },
      { q: 'Is English enough?', a: 'English is widely used in healthcare workplaces in the UAE, which is helpful for many roles.' },
      { q: 'Do you help with documents?', a: 'Yes. We guide you through the document preparation and attestation steps typically required.' },
      NO_GUARANTEE,
    ],
    interest: 'Work in UAE', destination: 'UAE',
    metaTitle: 'Healthcare Jobs in UAE', metaDescription: 'Healthcare careers in the UAE: licensing, documents and guidance from 211 OVERSEAS.',
    blurb: 'Nursing and allied-health careers across the UAE.',
  },
  {
    group: 'work-in-uae', slug: 'hospitality', name: 'Hospitality & hotels', kind: 'work',
    eyebrow: 'Work in UAE · Hospitality', headline: 'Hospitality and hotel careers in the UAE', highlight: 'the UAE',
    intro: 'Dubai and the wider UAE are global tourism and hospitality destinations. We guide candidates with hospitality skills towards hotels, resorts, restaurants and related roles.',
    facts: [
      { label: 'Working language', value: 'English' },
      { label: 'Typical employers', value: 'Hotels, resorts, restaurants, event venues' },
      { label: 'What counts', value: 'Experience, training and communication skills' },
      { label: 'Our support', value: 'Profile guidance and employer assistance' },
    ],
    whyTitle: 'Why hospitality in the UAE?',
    why: [
      { title: 'A world tourism hub', text: 'Large hotel, resort and events industries across the emirates.' },
      { title: 'International brands', text: 'Opportunities to work with well-known hospitality groups.' },
      { title: 'Varied roles', text: 'Front office, food and beverage, housekeeping, kitchen and guest services.' },
      { title: 'Multicultural teams', text: 'Work alongside colleagues and guests from all over the world.' },
      { title: 'Skill building', text: 'Gain international experience that supports a long-term career.' },
      { title: 'Modern lifestyle', text: 'Safe, vibrant cities with an international community.' },
    ],
    fieldsTitle: 'Roles we guide on',
    fields: ['Front office & reception', 'Food & beverage service', 'Kitchen & culinary', 'Housekeeping', 'Guest relations', 'Events & banquets', 'Hotel supervision'],
    whoTitle: 'Who can apply?',
    who: ['Hospitality training or relevant work experience', 'Good spoken English and a guest-focused attitude', 'A clean, verifiable work history and references', 'Complete, genuine documents'],
    faqs: [
      { q: 'Do I need a hospitality degree?', a: 'Not always. Many roles value practical experience and training, though some positions prefer a diploma or degree.' },
      { q: 'Is English enough for hotel jobs?', a: 'English is the main working language in most hospitality workplaces in the UAE.' },
      { q: 'Do I need experience?', a: 'Requirements depend on the role and employer. We review your profile and tell you what to expect.' },
      { q: 'How do I find employers?', a: 'We help prepare your profile and assist with employer connections where applicable.' },
      NO_GUARANTEE,
    ],
    interest: 'Work in UAE', destination: 'UAE',
    metaTitle: 'Hospitality Jobs in UAE', metaDescription: 'Hotel and hospitality careers in the UAE: roles, requirements and guidance from 211 OVERSEAS.',
    blurb: 'Hotels, resorts, restaurants and events.',
  },
  {
    group: 'work-in-uae', slug: 'engineering-construction', name: 'Engineering & construction', kind: 'work',
    eyebrow: 'Work in UAE · Engineering & Construction', headline: 'Engineering and construction careers in the UAE', highlight: 'the UAE',
    intro: 'Major infrastructure, real estate and industrial projects keep the UAE’s engineering and construction sectors active. We guide qualified engineers, technicians and skilled professionals towards suitable roles.',
    facts: [
      { label: 'Working language', value: 'English' },
      { label: 'Sectors', value: 'Construction, infrastructure, oil & gas, facilities' },
      { label: 'Documents', value: 'Attested degrees and experience certificates' },
      { label: 'Our support', value: 'Profile review and employer assistance' },
    ],
    whyTitle: 'Why engineering and construction in the UAE?',
    why: [
      { title: 'Large-scale projects', text: 'Ongoing infrastructure, real estate and industrial development.' },
      { title: 'Wide range of roles', text: 'Civil, mechanical, electrical, project and site-based roles.' },
      { title: 'International exposure', text: 'Work with global contractors and diverse project teams.' },
      { title: 'Technical growth', text: 'Experience on complex projects helps long-term careers.' },
      { title: 'English at work', text: 'English is widely used on professional engineering projects.' },
      { title: 'Skilled trades', text: 'Opportunities for skilled technicians as well as degree-qualified engineers.' },
    ],
    fieldsTitle: 'Roles we guide on',
    fields: ['Civil engineering', 'Mechanical engineering', 'Electrical engineering', 'Project management', 'Site supervision', 'MEP technicians', 'Quantity surveying', 'Facilities management'],
    whoTitle: 'Who can apply?',
    who: ['An engineering degree or diploma, or relevant trade certification', 'Verifiable, relevant work experience', 'Good English communication', 'Complete documents suitable for attestation'],
    faqs: [
      { q: 'Do I need a degree?', a: 'Engineer roles usually need a degree, while technician and skilled-trade roles may need diplomas or trade certifications plus experience.' },
      { q: 'How important is experience?', a: 'Very. Employers generally look for verifiable, relevant project experience, so we review yours first.' },
      { q: 'What are attested documents?', a: 'Certificates are usually verified and attested through official channels before they are accepted for employment and visa purposes.' },
      { q: 'Do you help with employers and visas?', a: 'We assist with profile preparation and employer connections where applicable, and guide you through the visa documentation.' },
      NO_GUARANTEE,
    ],
    interest: 'Work in UAE', destination: 'UAE',
    metaTitle: 'Engineering & Construction Jobs in UAE', metaDescription: 'Engineering and construction careers in the UAE: roles, requirements and guidance from 211 OVERSEAS.',
    blurb: 'Civil, mechanical, electrical and project roles.',
  },
];

export function subpagesFor(group: SubpageGroup) {
  return SUBPAGES.filter((p) => p.group === group);
}

export function getSubpage(group: SubpageGroup, slug: string) {
  return SUBPAGES.find((p) => p.group === group && p.slug === slug);
}

export function subpageHref(p: Pick<SubpageContent, 'group' | 'slug'>) {
  return `/${p.group}/${p.slug}`;
}

/** Map a country name (as used in pins and the enquiry form) to its sub-page, if it has one. */
export function countryHref(name: string) {
  const p = SUBPAGES.find((s) => s.group === 'other-destinations' && s.name.toLowerCase() === name.toLowerCase());
  return p ? subpageHref(p) : '/other-destinations';
}

export const GROUP_LABEL: Record<SubpageGroup, { label: string; href: string }> = {
  'other-destinations': { label: 'Other Destinations', href: '/other-destinations' },
  'study-in-south-korea': { label: 'Study in South Korea', href: '/study-in-south-korea' },
  'work-in-germany': { label: 'Work in Germany', href: '/work-in-germany' },
  'work-in-uae': { label: 'Work in UAE', href: '/work-in-uae' },
};
