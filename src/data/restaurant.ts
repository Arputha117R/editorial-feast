/**
 * All site content lives here so it can be swapped without touching components.
 *
 * Images are local imports today. To move to Cloudinary later, replace the
 * `image` values with `cldUrl("folder/public-id")` — every consumer reads the
 * field as a plain string URL, so nothing else has to change.
 */
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";
import dish1 from "@/assets/dish-1.jpg";
import dish2 from "@/assets/dish-2.jpg";
import dish3 from "@/assets/dish-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

export const images = {
  hero: heroImg,
  about: aboutImg,
  dish1,
  dish2,
  dish3,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
};

export const restaurant = {
  name: "Maren & Ash",
  tagline: "Fire-led cooking, coastal produce",
  address: "42 Harbour Lane, Old Town Quarter",
  city: "Lisbon, Portugal",
  phone: "+351 210 555 019",
  email: "reservations@marenandash.com",
  mapsUrl: "https://www.google.com/maps",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
};

export const navLinks = [
  { label: "Menu", href: "#featured" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
};

export const featuredDishes: Dish[] = [
  {
    id: "scallops",
    name: "Ember Scallops",
    description: "Hand-dived scallops, olive oil emulsion, charred lemon, wild thyme.",
    price: "€26",
    image: dish1,
    tag: "Chef's pick",
  },
  {
    id: "short-rib",
    name: "Ash-Braised Short Rib",
    description: "Twelve-hour short rib, burnt orange glaze, heritage root vegetables.",
    price: "€34",
    image: dish2,
    tag: "Signature",
  },
  {
    id: "pasta",
    name: "Sage Butter Tagliolini",
    description: "Hand-rolled tagliolini, brown sage butter, aged parmesan, black pepper.",
    price: "€22",
    image: dish3,
    tag: "House favourite",
  },
];

export type MenuCategory = {
  id: string;
  label: string;
  items: { name: string; description: string; price: string }[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    label: "Starters",
    items: [
      {
        name: "Sourdough & Cultured Butter",
        description: "Three-day levain, smoked sea salt, estate olive oil.",
        price: "€8",
      },
      {
        name: "Ember Scallops",
        description: "Olive oil emulsion, charred lemon, wild thyme.",
        price: "€26",
      },
      {
        name: "Charred Leek Salad",
        description: "Grilled leeks, hazelnut, aged sheep's cheese, herb oil.",
        price: "€14",
      },
      {
        name: "Tomato & Stone Fruit",
        description: "Heritage tomato, white peach, basil, sherry vinegar.",
        price: "€13",
      },
    ],
  },
  {
    id: "mains",
    label: "Mains",
    items: [
      {
        name: "Ash-Braised Short Rib",
        description: "Burnt orange glaze, heritage roots, bone marrow jus.",
        price: "€34",
      },
      {
        name: "Sage Butter Tagliolini",
        description: "Hand-rolled pasta, brown butter, aged parmesan.",
        price: "€22",
      },
      {
        name: "Wood-Fired Sea Bass",
        description: "Whole bass, fennel, preserved lemon, olive tapenade.",
        price: "€31",
      },
      {
        name: "Coal-Roasted Celeriac",
        description: "Smoked celeriac, walnut cream, pickled apple.",
        price: "€21",
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    items: [
      {
        name: "Dark Chocolate Tart",
        description: "70% chocolate, olive oil, flaked sea salt, crème fraîche.",
        price: "€11",
      },
      {
        name: "Burnt Honey Custard",
        description: "Wildflower honey, toasted oat crumble.",
        price: "€10",
      },
      {
        name: "Olive Oil Cake",
        description: "Citrus syrup, rosemary sugar, mascarpone.",
        price: "€10",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    items: [
      {
        name: "Terracotta Negroni",
        description: "Barrel-aged gin, blood orange, bitter aperitivo.",
        price: "€14",
      },
      {
        name: "Vinho Verde, Quinta do Ameal",
        description: "Crisp, saline, green apple. Glass / bottle.",
        price: "€8 / €36",
      },
      {
        name: "Douro Reserva",
        description: "Dark cherry, cedar, long finish. Glass / bottle.",
        price: "€11 / €48",
      },
    ],
  },
];

export const galleryImages = [
  { src: gallery1, alt: "Chef plating a dish in the open kitchen" },
  { src: dish2, alt: "Ash-braised short rib with root vegetables" },
  { src: gallery2, alt: "Sourdough loaf with estate olive oil" },
  { src: gallery3, alt: "Terracotta negroni cocktail at the bar" },
  { src: gallery4, alt: "Dark chocolate tart with olive oil and sea salt" },
  { src: dish1, alt: "Ember-seared scallops on a dark plate" },
];

export const reviews = [
  {
    quote:
      "The kind of room you settle into for four hours without noticing. Every plate tasted deliberate.",
    author: "Ines Cardoso",
    source: "Mesa Magazine",
    rating: 5,
  },
  {
    quote:
      "Fire does most of the work here, and it does it beautifully. The short rib is worth the trip alone.",
    author: "Daniel Whitmore",
    source: "The Coastal Review",
    rating: 5,
  },
  {
    quote:
      "Warm service, restrained cooking, and a wine list with genuine point of view. A quiet triumph.",
    author: "Marta Alves",
    source: "Guest since 2021",
    rating: 5,
  },
];

export const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday – Thursday", time: "18:00 – 23:00" },
  { day: "Friday – Saturday", time: "12:00 – 15:00 · 18:00 – 00:00" },
  { day: "Sunday", time: "12:00 – 17:00" },
];
