import { Flame } from "lucide-react";
import { special } from "@/data/restaurant";

export function Ticker() {
  const repeats = Array.from({ length: 4 });
  return (
    <div
      className="fixed inset-x-0 top-0 z-50 flex h-9 items-center overflow-hidden bg-terracotta text-cream"
      aria-label="Today's special announcement"
    >
      <div className="animate-marquee flex w-max items-center whitespace-nowrap">
        {repeats.map((_, i) => (
          <span
            key={i}
            className="flex items-center gap-3 pr-10 text-[0.65rem] tracking-[0.24em] uppercase"
          >
            <Flame className="size-3.5 shrink-0" aria-hidden />
            {special}
          </span>
        ))}
      </div>
    </div>
  );
}
