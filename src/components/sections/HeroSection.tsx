import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-end overflow-hidden" aria-label="Hero">
      {/* Full-bleed hero image with priority */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Seoul skyline and historic architecture at golden hour"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Deep contrast scrim ensuring WCAG AAA contrast for white text */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15140F] via-[#15140F]/70 to-[#15140F]/30" />
      </div>

      <div className="max-w-[1280px] mx-auto px-6 w-full pb-20 md:pb-28 pt-36 relative z-10">
        <div className="max-w-3xl">
          {/* Page's single quiet eyebrow label */}
          <p className="text-xs uppercase tracking-widest text-white/80 font-medium mb-4">
            211 Overseas
          </p>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[1.02] mb-6">
            Your future has no borders.
          </h1>

          <p className="text-lg sm:text-xl text-white/90 font-light mb-4">
            Study abroad. Work abroad. Build your global future.
          </p>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mb-10 font-normal">
            From selecting the right destination to documentation, applications, visa guidance and
            pre-departure support — we make your overseas journey easier.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#destinations"
              className="bg-[#2F4A3C] hover:bg-[#24382E] text-white px-8 py-3.5 text-xs uppercase tracking-widest transition-colors font-medium"
            >
              Explore opportunities
            </Link>
            <Link
              href="/contact"
              className="border border-white/75 hover:bg-white hover:text-[#15140F] text-white px-8 py-3.5 text-xs uppercase tracking-widest transition-colors font-medium"
            >
              Book free consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
