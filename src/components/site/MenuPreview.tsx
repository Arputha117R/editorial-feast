import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { MagneticButton } from "./MagneticButton";
import { menuCategories } from "@/data/restaurant";
import { cn } from "@/lib/utils";

export function MenuPreview() {
  const [active, setActive] = useState<string>(menuCategories[0]!.id);
  const category = menuCategories.find((c) => c.id === active) ?? menuCategories[0]!;

  return (
    <section id="menu" className="bg-cream py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The menu"
          title="Seasonal, short and always changing"
          align="center"
        />

        <div
          role="tablist"
          aria-label="Menu categories"
          className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {menuCategories.map((c) => (
            <button
              key={c.id}
              role="tab"
              type="button"
              aria-selected={active === c.id}
              aria-controls={`panel-${c.id}`}
              id={`tab-${c.id}`}
              onClick={() => setActive(c.id)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300",
                active === c.id ? "text-cream" : "text-charcoal/60 hover:text-charcoal",
              )}
            >
              {active === c.id && (
                <motion.span
                  layoutId="menu-pill"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-olive"
                />
              )}
              <span className="relative">{c.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-14 min-h-[22rem]">
          <AnimatePresence mode="wait">
            <motion.ul
              key={category.id}
              id={`panel-${category.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${category.id}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="divide-y divide-charcoal/10"
            >
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-col gap-1.5 py-6 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-charcoal sm:text-2xl">{item.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-charcoal/60">
                      {item.description}
                    </p>
                  </div>
                  <span className="font-display text-lg text-terracotta">{item.price}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
          <MagneticButton href="#visit">Reserve Table</MagneticButton>
        </div>
      </div>
    </section>
  );
}
