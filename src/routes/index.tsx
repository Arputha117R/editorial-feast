import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedMenu } from "@/components/site/FeaturedMenu";
import { About } from "@/components/site/About";
import { MenuPreview } from "@/components/site/MenuPreview";
import { Gallery } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maren & Ash — Fire-Led Seasonal Dining in Lisbon" },
      {
        name: "description",
        content:
          "Maren & Ash is a wood-fired seasonal restaurant in Lisbon's Old Town Quarter. Explore the menu, view the room and reserve a table.",
      },
      { property: "og:title", content: "Maren & Ash — Fire-Led Seasonal Dining in Lisbon" },
      {
        property: "og:description",
        content:
          "Coastal produce cooked over oak. Seasonal tasting plates, natural wine and a candlelit dining room on Harbour Lane.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-cream">
      <Navbar />
      <main>
        <Hero />
        <FeaturedMenu />
        <About />
        <MenuPreview />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
