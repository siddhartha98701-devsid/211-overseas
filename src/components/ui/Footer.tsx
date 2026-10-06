import Link from 'next/link';
import { siteContent } from '@/content/site';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bgl bgl-black text-white border-t-4 border-[#B88740] overflow-hidden" aria-label="Footer">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div>
              <Link href="/" aria-label="211 OVERSEAS study abroad - home" className="inline-block">
                <Logo variant="primary-white" height={56} />
              </Link>
              <p className="mt-3 font-serif italic text-base text-[#D1A95F]">
                {siteContent.brand.tagline}
              </p>
            </div>
            <p className="text-sm text-white/65 leading-relaxed">
              {siteContent.brand.description}
            </p>
            <div className="pt-2 space-y-1 text-xs text-white/65">
              <p>{siteContent.brand.address}</p>
              <p>
                Call / WhatsApp:{' '}
                <a
                  href={`tel:${siteContent.brand.phone.replace(/\s/g, '')}`}
                  className="text-white underline decoration-[#B88740] underline-offset-4 hover:text-[#D1A95F]"
                >
                  {siteContent.brand.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Study Abroad */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-5">
              Study Abroad
            </h4>
            <ul className="space-y-3 text-sm text-white/65" aria-label="Study abroad destinations">
              <li>
                <Link href="/study-in-south-korea" className="hover:text-[#D1A95F] transition-colors">
                  South Korea
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#D1A95F] transition-colors">
                  Japan
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#D1A95F] transition-colors">
                  Taiwan
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#D1A95F] transition-colors">
                  Singapore
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#D1A95F] transition-colors">
                  Europe
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#D1A95F] transition-colors">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#D1A95F] transition-colors">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#D1A95F] transition-colors">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#D1A95F] transition-colors">
                  Australia
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Work Abroad */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-5">
              Work Abroad
            </h4>
            <ul className="space-y-3 text-sm text-white/65" aria-label="Work abroad destinations">
              <li>
                <Link href="/work-in-germany" className="hover:text-[#D1A95F] transition-colors">
                  Germany – Nurses
                </Link>
              </li>
              <li>
                <Link href="/work-in-germany" className="hover:text-[#D1A95F] transition-colors">
                  Germany – Physiotherapists
                </Link>
              </li>
              <li>
                <Link href="/work-in-uae" className="hover:text-[#D1A95F] transition-colors">
                  UAE / Dubai
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#D1A95F] transition-colors">
                  Europe Careers
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#D1A95F] transition-colors">
                  Other Global Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-white/65" aria-label="Quick links">
              <li>
                <Link href="/about" className="hover:text-[#D1A95F] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D1A95F] transition-colors">
                  Book Free Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D1A95F] transition-colors">
                  Contact Information
                </Link>
              </li>
              <li>
                <a
                  href={siteContent.brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D1A95F] transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li className="pt-3 border-t border-white/15">
                <Link href="/privacy-policy" className="text-xs hover:text-[#D1A95F] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-xs hover:text-[#D1A95F] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-xs hover:text-[#D1A95F] transition-colors">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="text-xs hover:text-[#D1A95F] transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-16 pt-8 border-t border-white/15">
          <p className="text-xs text-white/65 leading-relaxed max-w-4xl">
            <strong className="text-white font-medium">Important Disclaimer:</strong>{' '}
            {siteContent.footer.disclaimer}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/65 gap-2">
            <p>{siteContent.footer.copyright}</p>
            <p>
              {siteContent.brand.domain} · {siteContent.brand.city}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
