'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { siteContent } from '@/content/site';

interface DropdownChild {
  label: string;
  href?: string;
  isHeader?: boolean;
  external?: boolean;
  items?: { label: string; href: string }[];
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
          <Link href="/" aria-label="211 OVERSEAS home" className="block shrink-0">
            <Logo variant={isSolid ? 'primary' : 'primary-white'} height={isSolid ? 40 : 46} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-7" aria-label="Main Navigation">
            {siteContent.navigation.items.map((item) => {
              const isActive = pathname === item.href;
              const hasChildren = 'children' in item && Array.isArray(item.children);

              if (hasChildren) {
                const isGroupActive =
                  pathname === item.href ||
                  (item.children &&
                    item.children.some(
                      (c) =>
                        (c.href && pathname.startsWith(c.href)) ||
                        (c.items && c.items.some((sub: { label: string; href: string }) => pathname.startsWith(sub.href)))
                    ));

                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={`link-draw text-xs xl:text-sm tracking-normal transition-colors py-1 inline-flex items-center gap-1 ${
                        isSolid
                          ? isGroupActive
                            ? 'text-[#1B1C1A] font-semibold'
                            : 'text-[#41484B] hover:text-[#1B1C1A]'
                          : isGroupActive
                          ? 'text-white font-semibold'
                          : 'text-white/80 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="invisible absolute left-0 top-full z-50 w-64 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      <div className="border border-[#E6DDCC] bg-white py-2 shadow-[0_16px_40px_rgba(0,34,43,0.12)]">
                        {item.children.map((child: DropdownChild, idx: number) => {
                          if (child.isHeader) {
                            return (
                              <div key={idx} className="mt-2 pt-2 border-t border-[#E6DDCC]/60 px-4">
                                <span className="block text-[11px] font-semibold uppercase tracking-wider text-[#A33E11]/80 mb-1">
                                  {child.label}
                                </span>
                                {child.items?.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    className="block px-2 py-1.5 text-xs text-[#41484B] hover:text-[#A33E11] hover:bg-[#F3EBDD] transition-colors"
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            );
                          }

                          if (child.external) {
                            return (
                              <a
                                key={child.href}
                                href={child.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between px-4 py-2 text-sm text-[#1B1C1A] hover:bg-[#F3EBDD] hover:text-[#A33E11] transition-colors"
                              >
                                <span>{child.label}</span>
                                <ArrowUpRight size={13} className="opacity-60" />
                              </a>
                            );
                          }

                          return (
                            <Link
                              key={child.href}
                              href={child.href!}
                              className="block px-4 py-2 text-sm text-[#1B1C1A] hover:bg-[#F3EBDD] hover:text-[#A33E11] transition-colors"
                            >
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`link-draw text-xs xl:text-sm tracking-normal transition-colors py-1 ${
                    isSolid
                      ? isActive
                        ? 'text-[#1B1C1A] font-semibold'
                        : 'text-[#41484B] hover:text-[#1B1C1A]'
                      : isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`}
                  style={isActive ? { backgroundSize: '100% 2px' } : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={siteContent.navigation.stickyAction.desktop.href}
              className="bg-[#A33E11] hover:bg-[#85320D] text-white text-[11px] xl:text-xs uppercase tracking-wider font-semibold px-3.5 xl:px-5 py-2 xl:py-2.5 transition-colors cursor-pointer"
            >
              {siteContent.navigation.stickyAction.desktop.label}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={siteContent.navigation.stickyAction.mobile.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-[#A33E11] text-white text-xs font-semibold uppercase tracking-wider"
            >
              {siteContent.navigation.stickyAction.mobile.label}
            </a>
            <button
              type="button"
              className={`p-2 transition-colors ${isSolid ? 'text-black' : 'text-white'}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Scroll-progress bar */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-[-1px] left-0 right-0 h-[2px] origin-left bg-[#A33E11]"
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
            className="fixed inset-0 z-50 bg-[#00222B] text-white flex flex-col justify-between overflow-y-auto px-6 py-8 lg:hidden"
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
              {siteContent.navigation.items.map((item, i) => {
                const hasChildren = 'children' in item && Array.isArray(item.children);

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i + 0.05, duration: 0.3 }}
                  >
                    {hasChildren ? (
                      <div>
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.href}
                            className={`font-serif text-2xl transition-colors ${
                              pathname === item.href ? 'text-[#FC7F4E]' : 'text-white hover:text-[#FC7F4E]'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                          <button
                            type="button"
                            aria-label={`${expanded === item.href ? 'Collapse' : 'Expand'} ${item.label}`}
                            aria-expanded={expanded === item.href}
                            onClick={() => setExpanded(expanded === item.href ? null : item.href)}
                            className="flex h-11 w-11 items-center justify-center text-white"
                          >
                            <ChevronDown
                              size={22}
                              className={`transition-transform duration-200 ${
                                expanded === item.href ? 'rotate-180' : ''
                              }`}
                            />
                          </button>
                        </div>
                        {expanded === item.href && (
                          <ul className="mt-2 mb-2 ml-1 space-y-2 border-l border-[#A33E11] pl-4">
                            {item.children.map((child: DropdownChild, cIdx: number) => {
                              if (child.isHeader) {
                                return (
                                  <li key={cIdx} className="pt-2">
                                    <span className="block text-[11px] uppercase tracking-wider text-[#FC7F4E] font-medium mb-1">
                                      {child.label}
                                    </span>
                                    <ul className="space-y-1.5 pl-2">
                                      {child.items?.map((sub) => (
                                        <li key={sub.href}>
                                          <Link
                                            href={sub.href}
                                            className="text-sm text-white/80 hover:text-white"
                                            onClick={() => setIsOpen(false)}
                                          >
                                            {sub.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                );
                              }

                              if (child.external) {
                                return (
                                  <li key={child.href}>
                                    <a
                                      href={child.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-base text-white/80 hover:text-white"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {child.label}
                                      <ArrowUpRight size={13} />
                                    </a>
                                  </li>
                                );
                              }

                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href!}
                                    className="text-base text-white/80 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`font-serif text-2xl transition-colors ${
                          pathname === item.href ? 'text-[#FC7F4E]' : 'text-white hover:text-[#FC7F4E]'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile Footer Area */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 bg-[#A33E11] hover:bg-[#85320D] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Get Guidance
              </Link>
              <p className="text-center text-xs text-white/50">
                Direct Line: {siteContent.brand.phone}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
