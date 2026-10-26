import Link from 'next/link';
import { siteContent, SHOW_VERIFIED_COMPANY_DETAILS } from '@/content/site';
import { Logo } from './Logo';

export function Footer() {
  const { brand, footer } = siteContent;

  return (
    <footer className="bgl bgl-black text-white border-t-4 border-[#A33E11] overflow-hidden" aria-label="Footer">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        {/* Brand Banner */}
        <div className="pb-10 mb-12 border-b border-white/15 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div>
            <Link href="/" aria-label="211 OVERSEAS home" className="inline-block">
              <Logo variant="primary-white" height={48} />
            </Link>
            <p className="mt-3 font-serif text-base text-[#FC7F4E] max-w-xl">
              {footer.brandLine}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-white/80">
            <div>
              <span className="block text-xs uppercase tracking-wider text-white/50">Direct Line</span>
              <a
                href={`tel:${brand.phone.replace(/\s/g, '')}`}
                className="font-medium text-white hover:text-[#FC7F4E] transition-colors"
              >
                {brand.phone}
              </a>
            </div>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Chat on WhatsApp →
            </a>
          </div>
        </div>

        {/* 3-Column Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-white/15">
          {/* Column 1: Study */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#FC7F4E] font-semibold mb-5">
              {footer.columns.study.title}
            </h4>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm text-white/70" aria-label="Study abroad destinations">
              {footer.columns.study.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Work */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#FC7F4E] font-semibold mb-5">
              {footer.columns.work.title}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70" aria-label="Work abroad pathways">
              {footer.columns.work.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {SHOW_VERIFIED_COMPANY_DETAILS && (
              <div className="mt-8 pt-6 border-t border-white/10 text-xs text-white/60 space-y-1">
                <p className="text-white/80 font-medium">Head Office</p>
                <p>{brand.address}</p>
                <p>{brand.hours}</p>
              </div>
            )}
          </div>

          {/* Column 3: Company / Resources */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-[#FC7F4E] font-semibold mb-5">
              {footer.columns.companyResources.title}
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70" aria-label="Company and resources">
              {footer.columns.companyResources.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/60">
              {footer.columns.companyResources.policyLinks.map((policy) => (
                <Link key={policy.href} href={policy.href} className="hover:text-white transition-colors">
                  {policy.label}
                </Link>
              ))}
            </div>

            {SHOW_VERIFIED_COMPANY_DETAILS && (
              <div className="mt-6 pt-5 border-t border-white/10 text-xs text-white/60 space-y-1">
                <p>Email: <a href={`mailto:${brand.emails.general}`} className="text-white/80 hover:text-white">{brand.emails.general}</a></p>
              </div>
            )}
          </div>
        </div>

        {/* General Disclaimer */}
        <div className="mt-10">
          <p className="text-xs text-white/55 leading-relaxed max-w-5xl">
            <strong className="text-white/80 font-medium">Disclaimer: </strong>
            {footer.disclaimer}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/50 gap-2">
            <p>© {new Date().getFullYear()} 211 Overseas. All rights reserved.</p>
            <p>{brand.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
