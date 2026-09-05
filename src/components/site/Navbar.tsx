import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks, restaurant } from "@/data/restaurant";
import { useReservation } from "./Reservation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openReservation = useReservation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-9 z-50 transition-all duration-500",
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]" : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="#top"
          className={cn(
            "font-display text-xl tracking-[0.16em] uppercase transition-colors",
            scrolled ? "text-charcoal" : "text-cream",
          )}
        >
          {restaurant.name}
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={cn(
                  "relative text-xs tracking-[0.18em] uppercase transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full",
                  scrolled ? "text-charcoal/70 hover:text-charcoal" : "text-cream/80 hover:text-cream",
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={openReservation}
            className="hidden rounded-full bg-terracotta px-6 py-2.5 text-xs font-medium tracking-[0.16em] text-cream uppercase transition-colors hover:bg-terracotta/90 lg:inline-flex"
          >
            Reserve Table
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full border transition-colors lg:hidden",
              scrolled ? "border-charcoal/20 text-charcoal" : "border-cream/30 text-cream",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 pt-2 pb-6 sm:px-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-charcoal/10 py-3.5 text-sm tracking-[0.18em] text-charcoal uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openReservation();
                  }}
                  className="block w-full rounded-full bg-terracotta px-6 py-3 text-center text-xs font-medium tracking-[0.16em] text-cream uppercase"
                >
                  Reserve Table
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
