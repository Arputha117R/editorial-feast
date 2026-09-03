import { navLinks, restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="bg-charcoal py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 border-b border-cream/12 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-display text-2xl tracking-[0.16em] text-cream uppercase">
              {restaurant.name}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/55">
              {restaurant.tagline}. {restaurant.address}, {restaurant.city}.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.68rem] tracking-[0.2em] text-cream/60 uppercase transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-[0.68rem] tracking-[0.16em] text-cream/40 uppercase sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {restaurant.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <a href={`mailto:${restaurant.email}`} className="transition-colors hover:text-cream">
              {restaurant.email}
            </a>
            {restaurant.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-cream"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
