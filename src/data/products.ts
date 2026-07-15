import type { Product } from "@/types/product";

export const products: Product[] = [
  // Rings
  {
    id: "r1",
    slug: "aurora-stacking-ring",
    name: "Aurora Stacking Ring",
    category: "rings",
    price: 32,
    currency: "USD",
    shortDescription: "A slim, gold-toned band designed for effortless stacking.",
    description:
      "The Aurora Stacking Ring is handcrafted from gold-toned brass with a smooth, polished finish. Its slim silhouette makes it perfect for stacking with other pieces or wearing alone for a minimal, everyday look.",
    materials: ["Gold-toned brass", "Tarnish-resistant coating"],
    colorway: "Gold",
    featured: true,
    giftGuide: ["for-her", "everyday"],
    tags: ["stacking", "minimal"],
  },
  {
    id: "r2",
    slug: "luna-signet-ring",
    name: "Luna Signet Ring",
    category: "rings",
    price: 45,
    currency: "USD",
    shortDescription: "A bold signet ring with a soft, hand-hammered face.",
    description:
      "Inspired by heirloom signet rings, the Luna Signet Ring features a hand-hammered face for organic texture and a substantial, comfortable band. A statement piece with a handmade soul.",
    materials: ["Gold-toned brass"],
    colorway: "Gold",
    giftGuide: ["anniversary", "statement"],
    tags: ["signet", "statement"],
  },
  {
    id: "r3",
    slug: "petal-halo-ring",
    name: "Petal Halo Ring",
    category: "rings",
    price: 38,
    currency: "USD",
    shortDescription: "A dainty floral halo ring with a cubic zirconia center.",
    description:
      "The Petal Halo Ring surrounds a single cubic zirconia stone with delicate, hand-set petals. Light, romantic, and perfect as a gift for someone special.",
    materials: ["Gold-toned brass", "Cubic zirconia"],
    colorway: "Gold",
    featured: true,
    giftGuide: ["for-her", "birthday"],
    tags: ["floral", "dainty"],
  },
  {
    id: "r4",
    slug: "silver-lining-band",
    name: "Silver Lining Band",
    category: "rings",
    price: 28,
    currency: "USD",
    shortDescription: "A cool-toned band with a brushed matte finish.",
    description:
      "For those who lean silver, the Silver Lining Band offers a brushed matte finish over a comfortable, rounded band. Understated and versatile.",
    materials: ["Silver-toned brass", "Tarnish-resistant coating"],
    colorway: "Silver",
    giftGuide: ["everyday", "self-care"],
    tags: ["matte", "minimal"],
  },

  // Earrings
  {
    id: "e1",
    slug: "classic-gold-hoops",
    name: "Classic Gold Hoops",
    category: "earrings",
    price: 30,
    currency: "USD",
    shortDescription: "Lightweight everyday hoops with a polished gold finish.",
    description:
      "Our best-selling Classic Gold Hoops are lightweight, comfortable, and endlessly versatile. A polished gold-toned finish makes them equally suited for the office or a night out.",
    materials: ["Gold-toned brass", "Hypoallergenic posts"],
    colorway: "Gold",
    featured: true,
    giftGuide: ["everyday", "for-her"],
    tags: ["hoops", "everyday"],
  },
  {
    id: "e2",
    slug: "starlight-drop-earrings",
    name: "Starlight Drop Earrings",
    category: "earrings",
    price: 36,
    currency: "USD",
    shortDescription: "Delicate drop earrings with sparkling cubic zirconia stars.",
    description:
      "Starlight Drop Earrings feature tiny cubic zirconia stars suspended from a fine gold-toned chain. A subtle sparkle that catches the light with every movement.",
    materials: ["Gold-toned brass", "Cubic zirconia"],
    colorway: "Gold",
    giftGuide: ["birthday", "gift"],
    tags: ["drop", "sparkle"],
  },
  {
    id: "e3",
    slug: "pearl-essence-studs",
    name: "Pearl Essence Studs",
    category: "earrings",
    price: 24,
    currency: "USD",
    shortDescription: "Freshwater pearl studs set in a delicate gold-toned frame.",
    description:
      "Pearl Essence Studs pair genuine freshwater pearls with a delicate gold-toned frame for a timeless, elegant look that transitions from day to evening.",
    materials: ["Freshwater pearl", "Gold-toned brass"],
    colorway: "Gold",
    featured: true,
    giftGuide: ["anniversary", "for-her"],
    tags: ["pearl", "classic"],
  },
  {
    id: "e4",
    slug: "twist-huggie-earrings",
    name: "Twist Huggie Earrings",
    category: "earrings",
    price: 26,
    currency: "USD",
    shortDescription: "Petite huggie hoops with a subtle twisted texture.",
    description:
      "Twist Huggie Earrings hug the earlobe with a petite silhouette and a subtly twisted texture for added dimension. Perfect for a second or third piercing.",
    materials: ["Gold-toned brass"],
    colorway: "Gold",
    giftGuide: ["everyday", "self-care"],
    tags: ["huggie", "textured"],
  },

  // Bracelets
  {
    id: "b1",
    slug: "everyday-chain-bracelet",
    name: "Everyday Chain Bracelet",
    category: "bracelets",
    price: 29,
    currency: "USD",
    shortDescription: "A fine cable chain bracelet for everyday layering.",
    description:
      "The Everyday Chain Bracelet is a fine cable chain designed to be worn alone or layered with other pieces. Adjustable clasp for a comfortable, personalized fit.",
    materials: ["Gold-toned brass"],
    colorway: "Gold",
    featured: true,
    giftGuide: ["everyday", "for-her"],
    tags: ["chain", "layering"],
  },
  {
    id: "b2",
    slug: "harmony-cuff-bracelet",
    name: "Harmony Cuff Bracelet",
    category: "bracelets",
    price: 34,
    currency: "USD",
    shortDescription: "An open cuff bracelet with a smooth, sculptural shape.",
    description:
      "The Harmony Cuff Bracelet wraps the wrist with a smooth, sculptural shape. Its open design offers a flexible, one-size-fits-most fit.",
    materials: ["Gold-toned brass"],
    colorway: "Gold",
    giftGuide: ["statement", "gift"],
    tags: ["cuff", "sculptural"],
  },
  {
    id: "b3",
    slug: "beaded-charm-bracelet",
    name: "Beaded Charm Bracelet",
    category: "bracelets",
    price: 27,
    currency: "USD",
    shortDescription: "Delicate beads paired with a single gold-toned charm.",
    description:
      "The Beaded Charm Bracelet pairs delicate glass beads with a single gold-toned charm, adding a warm, handmade touch to any stack.",
    materials: ["Glass beads", "Gold-toned brass"],
    colorway: "Gold",
    featured: true,
    giftGuide: ["birthday", "for-her"],
    tags: ["beaded", "charm"],
  },
  {
    id: "b4",
    slug: "linked-hearts-bracelet",
    name: "Linked Hearts Bracelet",
    category: "bracelets",
    price: 31,
    currency: "USD",
    shortDescription: "A romantic chain of tiny linked heart charms.",
    description:
      "A delicate chain of tiny linked hearts, the Linked Hearts Bracelet is a sweet, romantic gift for someone you love, or a treat for yourself.",
    materials: ["Gold-toned brass"],
    colorway: "Gold",
    giftGuide: ["anniversary", "gift"],
    tags: ["hearts", "romantic"],
  },

  // Necklaces
  {
    id: "n1",
    slug: "solstice-pendant-necklace",
    name: "Solstice Pendant Necklace",
    category: "necklaces",
    price: 40,
    currency: "USD",
    shortDescription: "A fine chain necklace with a sun-inspired pendant.",
    description:
      "The Solstice Pendant Necklace features a sun-inspired pendant on a fine, adjustable chain. A warm, everyday piece that layers beautifully with other necklaces.",
    materials: ["Gold-toned brass"],
    colorway: "Gold",
    featured: true,
    giftGuide: ["everyday", "for-her"],
    tags: ["pendant", "layering"],
  },
  {
    id: "n2",
    slug: "cascade-layered-necklace",
    name: "Cascade Layered Necklace",
    category: "necklaces",
    price: 44,
    currency: "USD",
    shortDescription: "Two fine chains of different lengths, pre-layered.",
    description:
      "Cascade Layered Necklace combines two fine chains of different lengths on a single clasp, giving you an effortless layered look without the tangles.",
    materials: ["Gold-toned brass"],
    colorway: "Gold",
    giftGuide: ["statement", "gift"],
    tags: ["layered", "chain"],
  },
  {
    id: "n3",
    slug: "initial-charm-necklace",
    name: "Initial Charm Necklace",
    category: "necklaces",
    price: 33,
    currency: "USD",
    shortDescription: "A personal, dainty necklace with a single letter charm.",
    description:
      "The Initial Charm Necklace features a dainty letter charm on a fine chain, a personal and meaningful gift for yourself or someone you love.",
    materials: ["Gold-toned brass"],
    colorway: "Gold",
    featured: true,
    giftGuide: ["birthday", "gift", "anniversary"],
    tags: ["initial", "personal"],
  },
  {
    id: "n4",
    slug: "pearl-drop-necklace",
    name: "Pearl Drop Necklace",
    category: "necklaces",
    price: 42,
    currency: "USD",
    shortDescription: "A single freshwater pearl suspended on a fine chain.",
    description:
      "A single genuine freshwater pearl hangs from a fine gold-toned chain in the Pearl Drop Necklace, a quiet, timeless piece for any occasion.",
    materials: ["Freshwater pearl", "Gold-toned brass"],
    colorway: "Gold",
    giftGuide: ["anniversary", "self-care"],
    tags: ["pearl", "classic"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
