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
