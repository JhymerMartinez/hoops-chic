import type { Locale } from "@/i18n/config";

export interface Review {
  id: string;
  name: string;
  location?: string;
  rating: number;
  text: string;
  product?: string;
}

export const reviews: Review[] = [
  {
    id: "rev1",
    name: "Camila R.",
    location: "Quito, EC",
    rating: 5,
    text: "The quality is amazing for the price. My Classic Gold Hoops look so much more expensive than they are, and ordering through WhatsApp was so easy!",
    product: "Classic Gold Hoops",
  },
  {
    id: "rev2",
    name: "Valentina M.",
    rating: 5,
    text: "I bought the Initial Charm Necklace as a gift for my sister and she hasn't taken it off since. Beautiful packaging too.",
    product: "Initial Charm Necklace",
  },
  {
    id: "rev3",
    name: "Isabella T.",
    location: "Guayaquil, EC",
    rating: 4,
    text: "Love the Aurora Stacking Ring, wear it every day. Would love to see more sizes available in the future.",
    product: "Aurora Stacking Ring",
  },
  {
    id: "rev4",
    name: "Sofia P.",
    rating: 5,
    text: "Hoops Chic pieces feel handmade in the best way. The Harmony Cuff Bracelet gets compliments every single time I wear it.",
    product: "Harmony Cuff Bracelet",
  },
  {
    id: "rev5",
    name: "Renata G.",
    rating: 5,
    text: "Fast responses on WhatsApp, and the Pearl Drop Necklace is even prettier in person. Will definitely order again.",
    product: "Pearl Drop Necklace",
  },
];

const spanishReviews: Review[] = [
  {
    id: "rev1",
    name: "Camila R.",
    location: "Quito, EC",
    rating: 5,
    text: "La calidad es increíble por el precio. Mis Aros Clásicos Dorados se ven mucho más costosos y pedir por WhatsApp fue facilísimo.",
    product: "Aros Clásicos Dorados",
  },
  {
    id: "rev2",
    name: "Valentina M.",
    rating: 5,
    text: "Compré el Collar con Inicial para mi hermana y no se lo ha quitado desde entonces. El empaque también es precioso.",
    product: "Collar con Inicial",
  },
  {
    id: "rev3",
    name: "Isabella T.",
    location: "Guayaquil, EC",
    rating: 4,
    text: "Me encanta el Anillo Apilable Aurora; lo uso todos los días. Me gustaría ver más tallas en el futuro.",
    product: "Anillo Apilable Aurora",
  },
  {
    id: "rev4",
    name: "Sofía P.",
    rating: 5,
    text: "Las piezas de Hoops Chic se sienten artesanales de la mejor manera. Siempre recibo cumplidos por el Brazalete Harmony.",
    product: "Brazalete Harmony",
  },
  {
    id: "rev5",
    name: "Renata G.",
    rating: 5,
    text: "Responden rápido por WhatsApp y el Collar Gota de Perla es aún más bonito en persona. Definitivamente volveré a comprar.",
    product: "Collar Gota de Perla",
  },
];

export function getReviews(locale: Locale) {
  return locale === "es" ? spanishReviews : reviews;
}
