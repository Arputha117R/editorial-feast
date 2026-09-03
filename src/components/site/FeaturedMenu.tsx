import { SectionHeading } from "./SectionHeading";
import { RevealChild, RevealGroup } from "./Reveal";
import { DishCard } from "./DishCard";
import { featuredDishes } from "@/data/restaurant";

export function FeaturedMenu() {
  return (
    <section id="featured" className="bg-cream py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Featured"
          title="Three plates that define the table"
          description="A short list from the current season, cooked over oak and served in the order the kitchen intends."
        />
        <RevealGroup className="mt-16 grid gap-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10">
          {featuredDishes.map((dish) => (
            <RevealChild key={dish.id}>
              <DishCard dish={dish} />
            </RevealChild>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
