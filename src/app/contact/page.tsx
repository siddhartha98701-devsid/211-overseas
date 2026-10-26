import type { Metadata } from 'next';
import { Phone, MessageSquare, MapPin, Clock, Mail } from 'lucide-react';
import { CONTACT_PAGE_CONTENT } from '@/content/contact';
import { siteContent, SHOW_VERIFIED_COMPANY_DETAILS } from '@/content/site';
import { ContactForms } from '@/components/forms/ContactForms';

export const metadata: Metadata = {
  title: CONTACT_PAGE_CONTENT.seoTitle,
  description: CONTACT_PAGE_CONTENT.intro,
};

export default function ContactPage() {
  const { eyebrow, heading, intro, phoneDisplay, phoneTel, whatsappUrl, tagline } =
    CONTACT_PAGE_CONTENT;
  const { brand } = siteContent;

  return (
    <div className="bg-[#FBF8F1] min-h-screen">
      {/* Hero */}
      <section className="bg-[#00222B] text-white pt-36 pb-20 border-b border-[#E6DDCC]">
        <div className="max-w-[1280px] mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FC7F4E] block mb-3">
            {eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-tight mb-6">
            {heading}
          </h1>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      {/* Main Section */}
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Discrete Study and Work Enquiry Forms */}
          <div className="lg:col-span-8">
            <ContactForms />
          </div>

          {/* Right Column: Direct Contact Details */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E6DDCC] p-6 lg:p-8 shadow-sm">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#A33E11] block mb-2">
                Direct Line
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1B1C1A] mb-1">
                211 OVERSEAS
              </h2>
              <p className="font-serif italic text-sm text-[#FC7F4E] mb-6">
                {tagline}
              </p>

              <div className="space-y-4 pt-4 border-t border-[#E6DDCC]">
                <div>
                  <span className="block text-xs uppercase tracking-wider text-[#71787B] mb-1">
                    Call / WhatsApp
                  </span>
                  <a
                    href={`tel:${phoneTel}`}
                    className="text-lg font-bold text-[#1B1C1A] hover:text-[#A33E11] transition-colors"
                  >
                    {phoneDisplay}
                  </a>
                </div>

                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <MessageSquare size={16} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {SHOW_VERIFIED_COMPANY_DETAILS && (
                <div className="mt-8 pt-6 border-t border-[#E6DDCC] space-y-4 text-xs text-[#41484B]">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-[#A33E11] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1B1C1A] block">Office Address</span>
                      <p>{brand.address}</p>
                      <p>{brand.city}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail size={16} className="text-[#A33E11] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1B1C1A] block">Email Advisory</span>
                      <a href={`mailto:${brand.emails.general}`} className="hover:text-[#A33E11]">
                        {brand.emails.general}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Clock size={16} className="text-[#A33E11] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1B1C1A] block">Office Hours</span>
                      <p>{brand.hours}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[#00222B] text-white p-6 border-t-4 border-[#A33E11]">
              <h3 className="font-serif text-lg font-bold mb-2">Measured Next Steps</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                We review qualification documents and professional experience against verified course and employer criteria before recommending commitments.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
