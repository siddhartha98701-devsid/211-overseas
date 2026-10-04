import Link from 'next/link';
import { siteContent } from '@/content/site';

export function Footer() {
  return (
    <footer className="bg-[#F6F3EE] border-t border-[#DDD7CC]" aria-label="Footer">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div>
              <Link
                href="/"
                className="font-serif text-2xl text-[#15140F] tracking-tight block"
              >
                211 Overseas
              </Link>
              <p className="mt-1 text-sm text-[#6C675E]">
                {siteContent.brand.tagline}
              </p>
            </div>
            <p className="text-sm text-[#6C675E] leading-relaxed">
              {siteContent.brand.description}
            </p>
            <div className="pt-2 space-y-1 text-xs text-[#6C675E]">
              <p>{siteContent.brand.address}</p>
              <p>
                Call / WhatsApp:{' '}
                <a
                  href={`tel:${siteContent.brand.phone.replace(/\s/g, '')}`}
                  className="text-[#15140F] underline hover:text-[#2F4A3C]"
                >
                  {siteContent.brand.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Column 2: Study Abroad */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#15140F] font-semibold mb-5">
              Study Abroad
            </h4>
            <ul className="space-y-3 text-sm text-[#6C675E]" aria-label="Study abroad destinations">
              <li>
                <Link href="/study-in-south-korea" className="hover:text-[#15140F] transition-colors">
                  South Korea
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#15140F] transition-colors">
                  Japan
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#15140F] transition-colors">
                  Taiwan
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#15140F] transition-colors">
                  Singapore
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#15140F] transition-colors">
                  Europe
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#15140F] transition-colors">
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#15140F] transition-colors">
                  United States
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#15140F] transition-colors">
                  Canada
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#15140F] transition-colors">
                  Australia
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Work Abroad */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#15140F] font-semibold mb-5">
              Work Abroad
            </h4>
            <ul className="space-y-3 text-sm text-[#6C675E]" aria-label="Work abroad destinations">
              <li>
                <Link href="/work-in-germany" className="hover:text-[#15140F] transition-colors">
                  Germany – Nurses
                </Link>
              </li>
              <li>
                <Link href="/work-in-germany" className="hover:text-[#15140F] transition-colors">
                  Germany – Physiotherapists
                </Link>
              </li>
              <li>
                <Link href="/work-in-uae" className="hover:text-[#15140F] transition-colors">
                  UAE / Dubai
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#15140F] transition-colors">
                  Europe Careers
                </Link>
              </li>
              <li>
                <Link href="/other-destinations" className="hover:text-[#15140F] transition-colors">
                  Other Global Opportunities
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#15140F] font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#6C675E]" aria-label="Quick links">
              <li>
                <Link href="/about" className="hover:text-[#15140F] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#15140F] transition-colors">
                  Book Free Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#15140F] transition-colors">
                  Contact Information
                </Link>
              </li>
              <li>
                <a
                  href={siteContent.brand.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#15140F] transition-colors"
                >
                  WhatsApp Support
                </a>
              </li>
              <li className="pt-3 border-t border-[#DDD7CC]">
                <Link href="/privacy-policy" className="text-xs hover:text-[#15140F] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-xs hover:text-[#15140F] transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-16 pt-8 border-t border-[#DDD7CC]">
          <p className="text-xs text-[#6C675E] leading-relaxed max-w-4xl">
            <strong className="text-[#15140F] font-medium">Important Disclaimer:</strong>{' '}
            {siteContent.footer.disclaimer}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#6C675E] gap-2">
            <p>{siteContent.footer.copyright}</p>
            <p>Ahmedabad, Gujarat, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
