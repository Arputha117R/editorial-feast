import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { galleryImages } from "@/data/restaurant";

export function Gallery() {
  return (
    <section id="gallery" className="overflow-hidden bg-charcoal py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Gallery"
          title="Evenings at the hearth"
          description="Swipe through the room, the pass and the plates as they leave the kitchen."
          tone="light"
        />
      </div>

      <Reveal className="mt-14 lg:mt-20">
        <ul
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12 [scrollbar-width:thin]"
          aria-label="Photo gallery"
        >
          {galleryImages.map((image) => (
            <li
              key={image.alt}
              className="group w-[76vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30rem]"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  width={1000}
                  height={1250}
                  className="size-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <p className="mt-4 text-xs tracking-[0.16em] text-cream/50 uppercase">{image.alt}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
