export interface Faq {
  q: string;
  a: string;
  link?: { label: string; href: string };
}

/** FAQ answers stay within what the brand & legal guidelines state. */
export const FAQS: Faq[] = [
  {
    q: 'Do I need to know Korean to study in South Korea?',
    a: 'Not for 100% English-taught programs. Learning Korean helps with daily life and careers, and we can also guide you on Korean language programs.',
  },
  {
    q: 'What English score do I need?',
    a: 'Typically IELTS 5.5 or above, and the Duolingo English Test is accepted. Exact requirements vary by university and program, and your counsellor will confirm them for you.',
  },
  {
    q: 'Which levels and fields can I apply for?',
    a: 'Undergraduate and graduate programs, including Game Development, Animation, Film & Visual Effects, Digital Design, Korean Language & Business, Global Business Administration and Computer Science.',
  },
  {
    q: 'Which cities do you focus on?',
    a: 'Our study destinations in South Korea include Seoul and Busan, two of the country’s most dynamic student cities.',
  },
  {
    q: 'What does 211 OVERSEAS actually help with?',
    a: 'University selection, application processing, interview preparation and visa guidance. We act as an advisory bridge between you and the university.',
  },
  {
    q: 'Which documents will I need?',
    a: 'Commonly: academic transcripts, language test scores, a resume, letters of recommendation, passport details and financial statements. Your counsellor will give you the exact checklist.',
  },
  {
    q: 'Can you guarantee admission or a visa?',
    a: 'No. We provide expert guidance and application assistance to maximise your chances, but admissions, scholarships and visas are decided by the universities and embassies.',
    link: { label: 'Read our disclaimer', href: '/disclaimer' },
  },
  {
    q: 'Are consultation fees refundable?',
    a: 'Consultation and registration fees paid to 211 OVERSEAS are non-refundable once advisory services begin. Fees paid to universities, test centres or embassies follow those bodies’ own policies.',
    link: { label: 'See the refund policy', href: '/refund-policy' },
  },
  {
    q: 'How is my personal data used?',
    a: 'Your data is used only to assess eligibility, process applications and assist with your visa, and is shared only with admissions departments and relevant authorities. We do not sell it.',
    link: { label: 'Read the privacy policy', href: '/privacy-policy' },
  },
  {
    q: 'Do you help with destinations other than South Korea?',
    a: 'Yes — we also guide on healthcare careers in Germany, career opportunities in the UAE and selected opportunities in other countries.',
    link: { label: 'Explore other destinations', href: '/other-destinations' },
  },
];
