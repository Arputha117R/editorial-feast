import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RevealChild, RevealGroup } from "./Reveal";
import { reviews } from "@/data/restaurant";

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading eyebrow="Reviews" title="What the room says" align="center" />
        <RevealGroup className="mt-16 grid gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <RevealChild key={review.author}>
              <figure className="flex h-full flex-col justify-between border-t border-charcoal/15 pt-8">
                <div>
                  <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-terracotta text-terracotta" aria-hidden />
                    ))}
                  </div>
                  <blockquote className="mt-6 font-display text-xl leading-snug text-charcoal italic sm:text-2xl">
                    “{review.quote}”
                  </blockquote>
                </div>
                <figcaption className="mt-8 text-[0.68rem] tracking-[0.2em] text-charcoal/50 uppercase">
                  {review.author} · {review.source}
                </figcaption>
              </figure>
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
