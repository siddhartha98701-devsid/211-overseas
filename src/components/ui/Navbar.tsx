'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { SUBPAGES, subpageHref } from '@/content/subpages';
import { useCallbackModal } from '@/components/lead/CallbackProvider';

const workStudyLinks = [
  { label: 'Work & Study overview', href: '/work-and-study' },
  { label: 'Work in Germany', href: '/work-in-germany' },
  { label: 'Work in UAE', href: '/work-in-uae' },
  { label: 'Study in South Korea', href: '/study-in-south-korea' },
];

const otherLinks = [
  ...SUBPAGES.filter((p) => p.group === 'other-destinations').map((p) => ({ label: p.name, href: subpageHref(p) })),
  { label: 'All destinations', href: '/other-destinations' },
];

type NavLink = { label: string; href: string; children?: { label: string; href: string }[] };
const navLinks: NavLink[] = [
  { label: 'Study in South Korea', href: '/study-in-south-korea' },
  { label: 'Work & Study', href: '/work-and-study', children: workStudyLinks },
  { label: 'Other Destinations', href: '/other-destinations', children: otherLinks },
  { label: 'About Us', href: '/about' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const { openCallback } = useCallbackModal();
  const isHomePage = pathname === '/';

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
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
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Transparent over the home hero; solid white once scrolled or on sub-pages
  const isSolid = scrolled || !isHomePage;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isSolid
            ? 'bg-[#FBF8F1]/95 backdrop-blur border-b border-[#E6DDCC] shadow-[0_1px_0_rgba(0,0,0,0.02)]'
            : 'bg-transparent border-b border-white/10'
        }`}
      >
        <div
          className={`max-w-[1280px] mx-auto px-6 flex items-center justify-between transition-all duration-300 ${
            isSolid ? 'h-[72px]' : 'h-20'
          }`}
        >
          <Link href="/" aria-label="211 OVERSEAS study abroad - home" className="block shrink-0">
            <Logo variant={isSolid ? 'primary' : 'primary-white'} height={isSolid ? 40 : 46} priority />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              if (link.children) {
                const groupActive = pathname === link.href || link.children!.some((c) => pathname.startsWith(c.href));
                return (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`link-draw text-sm tracking-normal transition-colors py-1 ${
                        isSolid ? (groupActive ? 'text-black font-medium' : 'text-[#57514A] hover:text-black') : groupActive ? 'text-white font-medium' : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {link.label} <span aria-hidden="true" className="text-[10px]">▾</span>
                    </Link>
                    <div className="invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="border border-[#E6DDCC] bg-white py-2 shadow-[0_16px_40px_rgba(42,42,42,0.15)]">
                        {link.children!.map((c) => (
                          <Link key={c.href} href={c.href} className="block px-5 py-2.5 text-sm text-[#2A2A2A] hover:bg-[#F3EBDD] hover:text-[#8A6020]">
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`link-draw text-sm tracking-normal transition-colors py-1 ${
                    isSolid
                      ? isActive
                        ? 'text-black font-medium'
                        : 'text-[#57514A] hover:text-black'
                      : isActive
                      ? 'text-white font-medium'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={isActive ? { backgroundSize: '100% 2px' } : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-not-sure-modal'));
                }
              }}
              className={`text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer hover:underline underline-offset-4 ${
                isSolid ? 'text-[#8A6020]' : 'text-[#D1A95F] hover:text-white'
              }`}
            >
              Not sure?
            </button>
            <button
              type="button"
              onClick={() => openCallback({ source: 'navbar' })}
              className="btn-shine bg-[#94682B] hover:bg-[#7A5622] text-white text-xs uppercase tracking-wider font-medium px-5 py-2.5 transition-colors cursor-pointer"
            >
              Free Counselling
            </button>
          </div>

          <button
            type="button"
            className={`lg:hidden p-2 -mr-2 transition-colors ${isSolid ? 'text-black' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mustard scroll-progress bar */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[-1px] left-0 right-0 h-[3px] origin-left bg-[#94682B]"
          style={{ scaleX: progress }}
        />
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between overflow-y-auto px-6 py-8 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="flex items-center justify-between h-12">
              <Link href="/" onClick={() => setIsOpen(false)} aria-label="211 OVERSEAS home">
                <Logo variant="primary-white" height={40} />
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 -mr-2 text-white"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 my-6" aria-label="Mobile Navigation Links">
              {[{ label: 'Home', href: '/' } as NavLink, ...navLinks, { label: 'Contact', href: '/contact' } as NavLink].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i + 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.children ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          className={`font-serif text-2xl transition-colors ${pathname.startsWith(link.href) ? 'text-[#D1A95F]' : 'text-white hover:text-[#D1A95F]'}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          aria-label={`${expanded === link.href ? 'Collapse' : 'Expand'} ${link.label}`}
                          aria-expanded={expanded === link.href}
                          onClick={() => setExpanded(expanded === link.href ? null : link.href)}
                          className="flex h-11 w-11 items-center justify-center text-white"
                        >
                          <ChevronDown size={22} className={`transition-transform ${expanded === link.href ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {expanded === link.href && (
                        <ul className="mt-1 mb-2 ml-1 space-y-1 border-l border-[#94682B] pl-4">
                          {link.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex min-h-11 items-center text-base ${pathname === c.href ? 'text-[#D1A95F]' : 'text-white/80 hover:text-[#D1A95F]'}`}
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={`font-serif text-2xl transition-colors ${pathname === link.href ? 'text-[#D1A95F]' : 'text-white hover:text-[#D1A95F]'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            <div className="pt-8 border-t border-white/15 space-y-3">
              <button
                type="button"
                className="block w-full text-center py-3 border border-[#D1A95F] text-[#D1A95F] hover:bg-[#D1A95F]/10 text-xs uppercase tracking-widest font-semibold cursor-pointer transition-colors"
                onClick={() => {
                  setIsOpen(false);
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-not-sure-modal'));
                  }
                }}
              >
                Not sure where to start? Free Counselling
              </button>
              <button
                type="button"
                className="btn-shine block w-full text-center py-4 bg-[#94682B] text-white text-sm uppercase tracking-wider font-medium cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  openCallback({ source: 'mobile-menu' });
                }}
              >
                Request a call back
              </button>
              <div className="mt-6 flex justify-between text-xs text-white/70">
                <span>Ahmedabad, Gujarat</span>
                <a href="tel:+919998585211" className="hover:text-[#D1A95F]">
                  +91 99985 85211
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
