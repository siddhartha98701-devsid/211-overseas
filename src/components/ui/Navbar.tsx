'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Study in South Korea', href: '/study-in-south-korea' },
  { label: 'Work in Germany', href: '/work-in-germany' },
  { label: 'Work in UAE', href: '/work-in-uae' },
  { label: 'Other Destinations', href: '/other-destinations' },
  { label: 'About Us', href: '/about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Determine appearance
  // If home page and not scrolled, transparent header over hero image
  // If scrolled or subpage, solid off-white #F6F3EE with hairline border
  const isSolid = scrolled || !isHomePage;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isSolid
            ? 'bg-[#F6F3EE] border-b border-[#DDD7CC]'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Wordmark in serif */}
          <Link
            href="/"
            className={`font-serif text-2xl tracking-tight transition-colors ${
              isSolid ? 'text-[#15140F]' : 'text-white'
            }`}
            aria-label="211 Overseas home"
          >
            211 Overseas
          </Link>

          {/* Desktop 5 text links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm tracking-normal transition-colors ${
                    isSolid
                      ? isActive
                        ? 'text-[#15140F] font-medium'
                        : 'text-[#6C675E] hover:text-[#15140F]'
                      : isActive
                      ? 'text-white font-medium'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop outlined CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className={`text-xs uppercase tracking-wider px-5 py-2.5 transition-all duration-200 ${
                isSolid
                  ? 'border border-[#15140F] text-[#15140F] hover:bg-[#15140F] hover:text-[#F6F3EE]'
                  : 'border border-white/80 text-white hover:bg-white hover:text-[#15140F]'
              }`}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`lg:hidden p-2 -mr-2 transition-colors ${
              isSolid ? 'text-[#15140F]' : 'text-white'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#F6F3EE] flex flex-col justify-between px-6 py-8 lg:hidden animate-fade-up"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between h-12">
            <Link
              href="/"
              className="font-serif text-2xl text-[#15140F] tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              211 Overseas
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 text-[#15140F]"
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 my-auto" aria-label="Mobile Navigation Links">
            <Link
              href="/"
              className="font-serif text-3xl text-[#15140F] hover:text-[#6C675E] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-serif text-3xl text-[#15140F] hover:text-[#6C675E] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="font-serif text-3xl text-[#15140F] hover:text-[#6C675E] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>

          <div className="pt-8 border-t border-[#DDD7CC]">
            <Link
              href="/contact"
              className="block w-full text-center py-4 bg-[#2F4A3C] text-white text-sm uppercase tracking-wider hover:bg-[#24382E] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Free Consultation
            </Link>
            <div className="mt-6 flex justify-between text-xs text-[#6C675E]">
              <span>Ahmedabad, Gujarat</span>
              <a href="tel:+919998585211" className="hover:text-[#15140F]">
                +91 99985 85211
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
