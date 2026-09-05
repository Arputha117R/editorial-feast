import { motion } from "motion/react";
import type { Dish } from "@/data/restaurant";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-charcoal/5">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          width={900}
          height={1100}
          className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.12]"
        />
        {dish.tag && (
          <span className="absolute top-4 left-4 rounded-full bg-cream/90 px-3.5 py-1.5 text-[0.6rem] tracking-[0.2em] text-charcoal uppercase">
            {dish.tag}
          </span>
        )}
      </div>
      <div className="mt-6 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl text-charcoal">{dish.name}</h3>
        <span className="font-display text-lg text-terracotta">{dish.price}</span>
      </div>
      <p className="mt-2.5 text-sm leading-relaxed text-charcoal/60">{dish.description}</p>
    </motion.article>
  );
}
