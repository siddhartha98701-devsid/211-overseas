export interface Faq {
  q: string;
  a: string;
  link?: { label: string; href: string };
}

/**
 * Source of truth: Master Specification PDF (Home Page, Section 5, Pages 5-6)
 */
export const FAQS: Faq[] = [
  {
    q: 'Do I need to decide on a country before contacting 211 Overseas?',
    a: 'Not at all! Tell us about your education, interests and aspirations. We can help you compare destinations and discover opportunities worth exploring.',
  },
  {
    q: 'What can I study through 211 Overseas?',
    a: 'From AI, engineering and business to fashion, design, hospitality, beauty and aesthetics, arts and other specialised subjects, there are exciting academic directions to explore. Available options depend on the university and destination.',
  },
  {
    q: 'Can you help me shortlist universities?',
    a: 'Absolutely. We help you compare universities and courses based on your academic profile, interests, preferred study environment and future ambitions.',
  },
  {
    q: 'Are scholarships available for international students?',
    a: 'Yes. Many institutions offer merit-based scholarships and other funding opportunities. Depending on your academic profile, chosen university and eligibility, some programmes may offer substantial tuition scholarships.',
  },
  {
    q: 'Which international career pathways can I explore?',
    a: 'Our current focus includes healthcare pathways in Germany, nursing and caregiving opportunities in Dubai, and hospitality routes in Greece, the UAE and other destinations where opportunities are available.',
  },
  {
    q: 'Can ANM-qualified candidates explore opportunities in Dubai?',
    a: 'Yes. ANM candidates can enquire about caregiver roles in Dubai, subject to relevant employer requirements.',
  },
  {
    q: 'Do I need to know German before enquiring about Germany’s healthcare pathways?',
    a: 'You can begin your enquiry as a complete beginner or with existing German-language knowledge. Your current level helps determine the preparation suitable for your route.',
  },
  {
    q: 'What if I already have B2-level German?',
    a: 'Physiotherapists with B2 German can enquire about a speaking assessment and the next stages of professional and interview preparation.',
  },
  {
    q: 'Can I explore international hospitality opportunities after Class 12?',
    a: 'Yes. Depending on the opportunity, Class 12 applicants, hospitality diploma holders and graduates, including BBA and MBA candidates, can request a profile review.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply tell us about your qualifications, interests or career experience. Our team will help you understand the next steps worth exploring.',
  },
];
