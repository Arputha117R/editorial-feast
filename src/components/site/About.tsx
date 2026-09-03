import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Reveal } from "./Reveal";
import { images } from "@/data/restaurant";

const stats = [
  { value: "2016", label: "Opened" },
  { value: "14", label: "Local growers" },
  { value: "1", label: "Wood-fired hearth" },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="about" className="bg-brown py-24 sm:py-32 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
        <div ref={ref} className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <motion.img
            style={{ y }}
            src={images.about}
            alt="Candlelit dining room with olive velvet chairs"
            loading="lazy"
            width={1200}
            height={1500}
            className="size-full scale-110 object-cover"
          />
        </div>

        <div>
          <Reveal>
            <p className="text-[0.68rem] tracking-[0.34em] text-terracotta uppercase">Our story</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.02] text-cream">
              A dining room built around a single fire
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              We started with one hearth, a handful of growers and a stubborn belief that food tastes
              better when it is cooked slowly and served without ceremony. A decade later the menu
              still turns on what arrives at the back door each morning.
            </p>
            <p className="mt-4 text-base leading-relaxed text-cream/70">
              Everything is made in-house — the bread, the cultured butter, the vinegars we finish
              plates with. Nothing leaves the pass that the kitchen would not eat itself.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-3xl text-cream sm:text-4xl">{stat.value}</dd>
                  <p className="mt-2 text-[0.65rem] tracking-[0.2em] text-cream/50 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
