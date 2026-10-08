import type { Metadata } from 'next';
import { siteContent } from '@/content/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { EnquiryForm } from '@/components/sections/EnquiryForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Connect with 211 OVERSEAS counsellors. Call or WhatsApp +91 99985 85211. Ahmedabad, Gujarat, India.',
};

const address = process.env.NEXT_PUBLIC_OFFICE_ADDRESS && process.env.NEXT_PUBLIC_OFFICE_ADDRESS !== 'ADDRESS'
  ? process.env.NEXT_PUBLIC_OFFICE_ADDRESS
  : siteContent.brand.address;

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 border-b border-[#E6DDCC]" aria-label="Contact hero">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#57514A] font-medium mb-3 block">
              Contact 211 OVERSEAS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#2A2A2A] tracking-tight leading-[1.05] mb-6">
              Start a conversation with our advisors
            </h1>
            <p className="text-base sm:text-lg text-[#57514A] leading-relaxed font-light">
              Confused about where to start? Start with your profile — not a country. Share your
              details or connect directly with our Ahmedabad team.
            </p>
          </div>
        </div>
      </section>

      {/* Direct Contact Channels */}
      <section className="py-16 md:py-24 border-b border-[#E6DDCC]" aria-label="Direct contact channels">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="grid sm:grid-cols-3 gap-8">
              {/* Location */}
              <div className="border-t border-[#E6DDCC] pt-6">
                <span className="text-xs uppercase tracking-wider text-[#57514A] font-medium block mb-2">
                  Office location
                </span>
                <p className="font-serif text-xl font-bold text-[#2A2A2A] mb-1">
                  {address}
                </p>
                <p className="text-xs text-[#57514A]">
                  In-person advisory by appointment
                </p>
              </div>

              {/* Phone */}
              <div className="border-t border-[#E6DDCC] pt-6">
                <span className="text-xs uppercase tracking-wider text-[#57514A] font-medium block mb-2">
                  Telephone
                </span>
                <a
                  href={`tel:${siteContent.brand.phone.replace(/\s/g, '')}`}
                  className="font-serif text-xl font-bold text-[#2A2A2A] hover:text-[#8A6020] transition-colors block mb-1"
                >
                  {siteContent.brand.phone}
                </a>
                <p className="text-xs text-[#57514A]">
                  Mon – Sat, 10:00 AM – 7:00 PM IST
                </p>
              </div>

              {/* WhatsApp */}
              <div className="border-t border-[#E6DDCC] pt-6">
                <span className="text-xs uppercase tracking-wider text-[#57514A] font-medium block mb-2">
                  Direct message
                </span>
                <a
                  href={siteContent.brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif text-xl font-bold text-[#2A2A2A] hover:text-[#8A6020] transition-colors block mb-1"
                >
                  WhatsApp Us →
                </a>
                <p className="text-xs text-[#57514A]">
                  Quick queries &amp; document assessment
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enquiry form + map */}
      <section className="py-16 md:py-24 border-b border-[#E6DDCC]" aria-label="Enquiry form and map">
        <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <EnquiryForm />
          </div>
          <aside className="lg:col-span-5 lg:sticky lg:top-28" aria-label="Office map">
            <h2 className="font-serif text-2xl font-bold text-[#2A2A2A]">Visit our office</h2>
            <p className="mt-2 text-sm text-[#57514A]">{address}</p>
            <div className="mt-5 aspect-[4/3] w-full overflow-hidden border border-[#E6DDCC] bg-[#F3EBDD]">
              <iframe
                title="211 OVERSEAS office location on Google Maps"
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center text-xs uppercase tracking-widest font-medium text-[#8A6020] link-draw"
            >
              Open in Google Maps →
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
