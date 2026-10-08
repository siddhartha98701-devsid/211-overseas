import type { Metadata } from 'next';
import { siteContent } from '@/content/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { EnquiryForm } from '@/components/sections/EnquiryForm';
import { MapPin, Phone, MessageSquare, Mail, Clock, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Connect with 211 OVERSEAS counsellors. Call or WhatsApp +91 99985 85211. Ahmedabad, Gujarat, India.',
};

export default function ContactPage() {
  const { brand } = siteContent;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 md:pt-44 md:pb-24 border-b border-[#E6DDCC]" aria-label="Contact hero">
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
              details or connect directly with our Ahmedabad advisory team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section: Form & Office Location side-by-side on desktop, stacked on mobile */}
      <section className="py-16 md:py-24 border-b border-[#E6DDCC] bg-[#FAF8F5]" aria-label="Enquiry and location">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest text-[#94682B] font-medium block mb-2">
                  Send Your Profile
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A2A2A] tracking-tight">
                  Free profile assessment
                </h2>
                <p className="mt-2 text-sm text-[#57514A] leading-relaxed">
                  Fill in your details below. Our senior counselor will review your qualifications and contact you within 24 hours.
                </p>
              </div>
              <EnquiryForm />
            </div>

            {/* Office Location Block + Embedded Google Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white border border-[#E6DDCC] p-6 sm:p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-[#94682B]">
                  <MapPin size={20} />
                  <span className="text-xs uppercase tracking-widest font-semibold">Office Location</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A] mb-2">
                  Headquarters
                </h3>
                <p className="text-sm text-[#2A2A2A] font-medium leading-relaxed mb-1">
                  {brand.address}
                </p>
                <p className="text-xs text-[#57514A] mb-6">
                  {brand.city}
                </p>

                {/* Office Hours */}
                <div className="border-t border-[#E6DDCC] pt-5 mb-6">
                  <div className="flex items-center gap-2 mb-3 text-[#94682B]">
                    <Clock size={16} />
                    <span className="text-xs uppercase tracking-wider font-semibold">Office Hours</span>
                  </div>
                  <div className="space-y-1.5 text-xs text-[#57514A]">
                    <div className="flex justify-between py-1 border-b border-[#E6DDCC]/60">
                      <span className="font-medium text-[#2A2A2A]">Monday – Saturday</span>
                      <span>10:00 AM – 7:00 PM IST</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="font-medium text-[#2A2A2A]">Sunday</span>
                      <span className="text-[#94682B]">Prior Appointment Only</span>
                    </div>
                  </div>
                </div>

                {/* Embedded Google Map */}
                <div className="overflow-hidden border border-[#E6DDCC] bg-[#F0EDE8] mb-6 relative">
                  <iframe
                    title="211 Overseas Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.366226673898!2d72.51347077603723!3d23.08365691404179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832961d7b1b3%3A0xc3c92842e1d7131b!2sThe%20Capital%2C%20Science%20City%20Rd%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    width="100%"
                    height="240"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-[240px] block"
                  />
                </div>

                {/* Get Directions Button */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=The+Capital+Science+City+Road+Sola+Ahmedabad+Gujarat+380060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shine w-full inline-flex items-center justify-center gap-2 bg-[#94682B] hover:bg-[#7A5622] text-white px-6 py-3.5 text-xs uppercase tracking-widest font-medium transition-colors shadow-sm"
                >
                  <span>Get Directions</span>
                  <ExternalLink size={14} />
                </a>

                <p className="mt-4 text-[11px] text-[#57514A] text-center leading-relaxed">
                  In-person advisory available by appointment. Parking available on site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Channels Strip */}
      <section className="py-12 md:py-16 border-b border-[#E6DDCC] bg-white" aria-label="Direct contact channels">
        <div className="max-w-[1280px] mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Phone */}
              <div className="border-t border-[#E6DDCC] pt-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#94682B]">
                    <Phone size={18} />
                    <span className="text-xs uppercase tracking-wider text-[#57514A] font-medium">Telephone</span>
                  </div>
                  <a
                    href={`tel:${brand.phone.replace(/\s/g, '')}`}
                    className="font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A] hover:text-[#94682B] transition-colors block mb-1"
                  >
                    {brand.phone}
                  </a>
                  <p className="text-xs text-[#57514A]">Direct phone assistance (IST)</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="border-t border-[#E6DDCC] pt-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#94682B]">
                    <MessageSquare size={18} />
                    <span className="text-xs uppercase tracking-wider text-[#57514A] font-medium">WhatsApp Support</span>
                  </div>
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl sm:text-2xl font-bold text-[#2A2A2A] hover:text-[#94682B] transition-colors block mb-1"
                  >
                    Chat on WhatsApp →
                  </a>
                  <p className="text-xs text-[#57514A]">Quick queries &amp; document assessment</p>
                </div>
              </div>

              {/* Email Enquiries (3 emails) */}
              <div className="border-t border-[#E6DDCC] pt-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#94682B]">
                    <Mail size={18} />
                    <span className="text-xs uppercase tracking-wider text-[#57514A] font-medium">Email Advisory</span>
                  </div>
                  <div className="space-y-2 mt-2">
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#94682B] font-medium">
                        {brand.emails.general.label}
                      </span>
                      <a
                        href={`mailto:${brand.emails.general.address}`}
                        className="text-sm font-semibold text-[#2A2A2A] hover:text-[#94682B] transition-colors"
                      >
                        {brand.emails.general.address}
                      </a>
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#94682B] font-medium">
                        {brand.emails.admissions.label}
                      </span>
                      <a
                        href={`mailto:${brand.emails.admissions.address}`}
                        className="text-sm font-semibold text-[#2A2A2A] hover:text-[#94682B] transition-colors"
                      >
                        {brand.emails.admissions.address}
                      </a>
                    </div>
                    <div>
                      <span className="block text-[11px] uppercase tracking-wider text-[#94682B] font-medium">
                        {brand.emails.support.label}
                      </span>
                      <a
                        href={`mailto:${brand.emails.support.address}`}
                        className="text-sm font-semibold text-[#2A2A2A] hover:text-[#94682B] transition-colors"
                      >
                        {brand.emails.support.address}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
