import type { Category } from "@/types/product";

export const categories: Category[] = [
  {
    slug: "rings",
    name: "Rings",
    description:
      "Delicate handcrafted rings designed to be stacked, mixed, or worn alone.",
  },
  {
    slug: "earrings",
    name: "Earrings",
    description:
      "From subtle studs to statement hoops, made for everyday elegance.",
  },
  {
    slug: "bracelets",
    name: "Bracelets",
    description:
      "Minimal chains and cuffs that add a warm, refined touch to any look.",
  },
  {
    slug: "necklaces",
    name: "Necklaces",
    description:
      "Timeless pendants and chains, layered or worn solo, for every occasion.",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
