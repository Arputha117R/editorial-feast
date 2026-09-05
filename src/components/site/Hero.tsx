import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { useReservation } from "./Reservation";
import { images, restaurant } from "@/data/restaurant";

const line = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal"
    >
      <motion.div
        initial={{ scale: 1.14, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: imageY }}
        className="absolute inset-0 -bottom-[14%]"
      >
        <img
          src={images.hero}
          alt="Wood-fired signature dish plated on dark ceramic"
          width={1408}
          height={1760}
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.14, delayChildren: 0.35 }}
        className="relative mx-auto w-full max-w-7xl px-5 pt-32 pb-20 sm:px-8 lg:px-12 lg:pb-28"
      >
        <motion.p
          variants={line}
          className="text-[0.7rem] tracking-[0.36em] text-terracotta uppercase"
        >
          {restaurant.city}
        </motion.p>
        <motion.h1
          variants={line}
          className="mt-6 max-w-4xl font-display text-[clamp(2.75rem,9vw,7rem)] leading-[0.95] text-cream"
        >
          Cooked over fire,
          <span className="block italic text-cream/80">served slowly.</span>
        </motion.h1>
        <motion.p
          variants={line}
          className="mt-7 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg"
        >
          {restaurant.tagline}. A seasonal kitchen built around embers, coastal catch and produce
          grown within an hour of the door.
        </motion.p>
        <motion.div variants={line} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton href="#menu">Explore Menu</MagneticButton>
          <MagneticButton href="#visit" variant="outline" className="text-cream">
            Reserve Table
          </MagneticButton>
        </motion.div>
        <motion.div
          variants={line}
          className="mt-14 flex items-center gap-3 text-[0.68rem] tracking-[0.28em] text-cream/50 uppercase"
        >
          <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
          Scroll to discover
        </motion.div>
      </motion.div>
    </section>
  );
}
