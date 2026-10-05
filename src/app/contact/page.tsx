import type { Metadata } from 'next';
import { siteContent } from '@/content/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { EnquiryForm } from '@/components/sections/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Connect with 211 OVERSEAS counsellors. Call or WhatsApp +91 99985 85211. Ahmedabad, Gujarat, India.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E5E5E5]" aria-label="Contact hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#4A4A4A] font-medium mb-3 block">
              Contact 211 OVERSEAS
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold text-[#000000] tracking-tight leading-[1.05] mb-6">
              Start a conversation with our advisors
            </h1>
            <p className="text-lg sm:text-xl text-[#4A4A4A] leading-relaxed font-light">
              Confused about where to start? Start with your profile — not a country. Share your
              details or connect directly with our Ahmedabad team.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Channels */}
      <section className="py-16 md:py-24 border-b border-[#E5E5E5]" aria-label="Direct contact channels">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-8">
              {/* Location */}
              <div className="border-t border-[#E5E5E5] pt-6">
                <span className="text-xs uppercase tracking-wider text-[#4A4A4A] font-medium block mb-2">
                  Office location
                </span>
                <p className="font-serif text-2xl font-bold text-[#000000] mb-1">
                  {siteContent.brand.address}
                </p>
                <p className="text-xs text-[#4A4A4A]">
                  In-person advisory by appointment
                </p>
              </div>

              {/* Phone */}
              <div className="border-t border-[#E5E5E5] pt-6">
                <span className="text-xs uppercase tracking-wider text-[#4A4A4A] font-medium block mb-2">
                  Telephone
                </span>
                <a
                  href={`tel:${siteContent.brand.phone.replace(/\s/g, '')}`}
                  className="font-serif text-2xl font-bold text-[#000000] hover:text-[#A86500] transition-colors block mb-1"
                >
                  {siteContent.brand.phone}
                </a>
                <p className="text-xs text-[#4A4A4A]">
                  Mon – Sat, 10:00 AM – 7:00 PM IST
                </p>
              </div>

              {/* WhatsApp */}
              <div className="border-t border-[#E5E5E5] pt-6">
                <span className="text-xs uppercase tracking-wider text-[#4A4A4A] font-medium block mb-2">
                  Direct message
                </span>
                <a
                  href={siteContent.brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-2xl font-bold text-[#000000] hover:text-[#A86500] transition-colors block mb-1"
                >
                  WhatsApp Us →
                </a>
                <p className="text-xs text-[#4A4A4A]">
                  Quick queries &amp; document assessment
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Enquiry Form Section */}
      <section className="py-24 md:py-36 border-b border-[#E5E5E5]" aria-label="Enquiry Form">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
