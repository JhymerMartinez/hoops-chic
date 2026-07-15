import type { Category } from "@/types/product";
import type { Locale } from "@/i18n/config";

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

const spanishCategories: Category[] = [
  {
    slug: "rings",
    name: "Anillos",
    description:
      "Anillos artesanales delicados para combinar, apilar o llevar solos.",
  },
  {
    slug: "earrings",
    name: "Aretes",
    description:
      "Desde piezas sutiles hasta aros protagonistas, creados para la elegancia cotidiana.",
  },
  {
    slug: "bracelets",
    name: "Pulseras",
    description:
      "Cadenas y brazaletes minimalistas que aportan un toque cálido y refinado.",
  },
  {
    slug: "necklaces",
    name: "Collares",
    description:
      "Dijes y cadenas atemporales para combinar o llevar solos en cualquier ocasión.",
  },
];

export function getCategories(locale: Locale) {
  return locale === "es" ? spanishCategories : categories;
}

export function getCategory(slug: string, locale: Locale = "en") {
  return getCategories(locale).find((category) => category.slug === slug);
}
