export interface ContactPageContent {
  seoTitle: string;
  pageUrl: string;
  eyebrow: string;
  heading: string;
  intro: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsappUrl: string;
  tagline: string;
  studyForm: {
    title: string;
    description: string;
    submitLabel: string;
  };
  workForm: {
    title: string;
    description: string;
    submitLabel: string;
  };
  confirmationMessage: string;
  privacyNotice: string;
}

export const CONTACT_PAGE_CONTENT: ContactPageContent = {
  seoTitle: "Contact 211 Overseas | Study & Work Enquiries",
  pageUrl: "/contact",
  eyebrow: "CONTACT US",
  heading: "Tell us what you are planning.",
  intro:
    "Whether you have shortlisted a country or are still weighing your options, share a few details about your education or work background so the conversation can begin in the right place.",
  phoneDisplay: "+91 99985 85211",
  phoneTel: "+919998585211",
  whatsappUrl: "https://wa.me/919998585211",
  tagline: "Your Future Has No Borders.",
  studyForm: {
    title: "Study enquiry",
    description: "Tell us about your educational background and destination preferences.",
    submitLabel: "Request a Study Consultation",
  },
  workForm: {
    title: "Work enquiry",
    description: "Submit your professional profile and resume for role matching.",
    submitLabel: "Submit My Work Profile",
  },
  confirmationMessage:
    "Thank you. Your enquiry has been received. Our team will review the information and contact you regarding the next relevant step.",
  privacyNotice:
    "By submitting this form, you agree that 211 Overseas may contact you regarding your enquiry. Personal information will be handled in accordance with the published Privacy Policy.",
};
