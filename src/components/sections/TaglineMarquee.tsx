import { Plane } from '@/components/ui/Plane';
import { siteContent } from '@/content/site';

/** Infinite brand-tagline band. The track is duplicated so the loop is seamless. */
export function TaglineMarquee() {
  const items = siteContent.brand.taglines;

  const track = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center whitespace-nowrap">
          <span className="font-serif italic text-2xl sm:text-3xl font-bold text-white px-8 sm:px-12">{t}</span>
          <Plane size={30} color="#E59217" className="shrink-0" />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="marquee bgl bgl-black border-y border-[#E59217]/40 py-5 overflow-hidden" aria-label="Our promise">
      <div className="marquee-track flex w-max">
        {track(false)}
        {track(true)}
      </div>
    </section>
  );
}
