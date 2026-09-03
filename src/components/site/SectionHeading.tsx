import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-[0.68rem] tracking-[0.34em] text-terracotta uppercase">{eyebrow}</p>
      <h2
        className={cn(
          "mt-5 font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.02]",
          tone === "dark" ? "text-charcoal" : "text-cream",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "dark" ? "text-charcoal/65" : "text-cream/65",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
