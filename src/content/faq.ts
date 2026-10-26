export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqPageContent {
  seoTitle: string;
  pageUrl: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  faqs: FaqItem[];
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
}

export const FAQ_PAGE_CONTENT: FaqPageContent = {
  seoTitle: "Study Abroad & Overseas Work FAQs",
  pageUrl: "/faq",
  eyebrow: "FREQUENTLY ASKED QUESTIONS",
  title: "Straight answers to common study and career questions.",
  subtitle:
    "Honest, transparent guidance regarding university applications, admissions, work permits, visas, and recruitment.",
  faqs: [
    {
      question: "Do I need to decide on a country before contacting 211 Overseas?",
      answer:
        "No. Begin with the degree or profession, preferred field, academic background and budget.",
    },
    {
      question: "Do you represent all the universities listed on the website?",
      answer:
        "No. The names are provided as examples for exploration and shortlisting. No university affiliation is implied.",
    },
    {
      question: "Can I study abroad without IELTS?",
      answer:
        "Possibly, depending on the course and accepted evidence of language proficiency. There is no universal exemption.",
    },
    {
      question: "Is a scholarship guaranteed?",
      answer:
        "No. Each award has selection criteria, limited funding and its own conditions.",
    },
    {
      question: "Does a university offer guarantee a student visa?",
      answer:
        "No. Immigration decisions are separate from academic admission.",
    },
    {
      question: "Can students work while studying abroad?",
      answer:
        "Rules depend on visa conditions, institution and country. Never assume earnings will finance the entire course.",
    },
    {
      question: "What is the difference between tuition and total cost?",
      answer:
        "Total cost also includes living, housing, insurance, travel, deposits and other compulsory expenditure.",
    },
    {
      question: "How early should I begin?",
      answer:
        "Six to twelve months can be a useful planning window for many courses, but scholarship and competitive program deadlines may be earlier.",
    },
    {
      question: "Do you guarantee overseas employment?",
      answer:
        "No. Final employment selection belongs to the employer; legal entry/work decisions belong to the relevant authority.",
    },
    {
      question: "Are Greece internships always one year?",
      answer:
        "No. Duration and lawful immigration category must be verified for each program.",
    },
    {
      question: "How often are vacancies updated?",
      answer:
        "Listings should carry a verified update date and are changed or closed when recruitment status changes.",
    },
    {
      question: "How do I begin?",
      answer:
        "Use the study or work enquiry form, or call/WhatsApp +91 99985 85211.",
    },
  ],
  primaryCta: {
    label: "Request a Profile Review",
    href: "/contact",
  },
  secondaryCta: {
    label: "View Current Vacancies",
    href: "/work/openings",
  },
};
