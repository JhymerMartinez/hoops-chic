import type { Product } from "@/types/product";
import type { Locale } from "@/i18n/config";

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

type ProductTranslation = Pick<
  Product,
  "name" | "shortDescription" | "description" | "materials" | "colorway"
>;

const spanishProductTranslations: Record<string, ProductTranslation> = {
  r1: {
    name: "Anillo Apilable Aurora",
    shortDescription:
      "Una fina banda dorada diseñada para combinar con facilidad.",
    description:
      "El Anillo Apilable Aurora está elaborado a mano en latón dorado con un acabado liso y pulido. Su silueta fina es perfecta para combinar con otras piezas o llevar sola en un estilo cotidiano y minimalista.",
    materials: ["Latón dorado", "Recubrimiento resistente al desgaste"],
    colorway: "Dorado",
  },
  r2: {
    name: "Anillo Sello Luna",
    shortDescription:
      "Un anillo sello protagonista con una delicada superficie martillada.",
    description:
      "Inspirado en los anillos heredados, el Anillo Sello Luna presenta una superficie martillada a mano que aporta textura orgánica y una banda cómoda y sustancial. Una pieza protagonista con alma artesanal.",
    materials: ["Latón dorado"],
    colorway: "Dorado",
  },
  r3: {
    name: "Anillo Halo Pétalo",
    shortDescription:
      "Un delicado anillo floral con zirconia cúbica en el centro.",
    description:
      "El Anillo Halo Pétalo rodea una zirconia cúbica con delicados pétalos colocados a mano. Ligero, romántico y perfecto para regalar a alguien especial.",
    materials: ["Latón dorado", "Zirconia cúbica"],
    colorway: "Dorado",
  },
  r4: {
    name: "Anillo Silver Lining",
    shortDescription:
      "Una banda en tono plateado con acabado mate cepillado.",
    description:
      "Para quienes prefieren el plateado, el Anillo Silver Lining ofrece un acabado mate cepillado sobre una banda redondeada y cómoda. Sutil y versátil.",
    materials: ["Latón plateado", "Recubrimiento resistente al desgaste"],
    colorway: "Plateado",
  },
  e1: {
    name: "Aros Clásicos Dorados",
    shortDescription:
      "Aros ligeros para todos los días con un acabado dorado pulido.",
    description:
      "Nuestros Aros Clásicos Dorados más vendidos son ligeros, cómodos e infinitamente versátiles. Su acabado dorado pulido funciona igual de bien para la oficina o una salida nocturna.",
    materials: ["Latón dorado", "Postes hipoalergénicos"],
    colorway: "Dorado",
  },
  e2: {
    name: "Aretes Colgantes Starlight",
    shortDescription:
      "Delicados aretes con estrellas brillantes de zirconia cúbica.",
    description:
      "Los Aretes Colgantes Starlight presentan pequeñas estrellas de zirconia cúbica suspendidas de una fina cadena dorada. Un brillo sutil que atrapa la luz con cada movimiento.",
    materials: ["Latón dorado", "Zirconia cúbica"],
    colorway: "Dorado",
  },
  e3: {
    name: "Aretes Esencia de Perla",
    shortDescription:
      "Perlas de agua dulce en un delicado marco dorado.",
    description:
      "Los Aretes Esencia de Perla combinan perlas genuinas de agua dulce con un delicado marco dorado para lograr un estilo elegante y atemporal, perfecto del día a la noche.",
    materials: ["Perla de agua dulce", "Latón dorado"],
    colorway: "Dorado",
  },
  e4: {
    name: "Aretes Huggie Twist",
    shortDescription:
      "Pequeños aros ajustados con una sutil textura torcida.",
    description:
      "Los Aretes Huggie Twist abrazan el lóbulo con una silueta pequeña y una delicada textura torcida que añade dimensión. Perfectos para una segunda o tercera perforación.",
    materials: ["Latón dorado"],
    colorway: "Dorado",
  },
  b1: {
    name: "Pulsera Cadena Everyday",
    shortDescription:
      "Una fina pulsera de cadena para combinar todos los días.",
    description:
      "La Pulsera Cadena Everyday está diseñada para llevar sola o combinada con otras piezas. Su cierre ajustable ofrece un calce cómodo y personalizado.",
    materials: ["Latón dorado"],
    colorway: "Dorado",
  },
  b2: {
    name: "Brazalete Harmony",
    shortDescription:
      "Un brazalete abierto de forma suave y escultural.",
    description:
      "El Brazalete Harmony envuelve la muñeca con una forma suave y escultural. Su diseño abierto y flexible se adapta cómodamente a la mayoría de tamaños.",
    materials: ["Latón dorado"],
    colorway: "Dorado",
  },
  b3: {
    name: "Pulsera de Cuentas y Dije",
    shortDescription:
      "Delicadas cuentas acompañadas de un único dije dorado.",
    description:
      "La Pulsera de Cuentas y Dije combina delicadas cuentas de vidrio con un único dije dorado, aportando un toque cálido y artesanal a cualquier conjunto.",
    materials: ["Cuentas de vidrio", "Latón dorado"],
    colorway: "Dorado",
  },
  b4: {
    name: "Pulsera Corazones Unidos",
    shortDescription:
      "Una romántica cadena de pequeños dijes de corazón enlazados.",
    description:
      "La Pulsera Corazones Unidos es una delicada cadena de pequeños corazones, un regalo dulce y romántico para alguien que amas o un detalle para ti.",
    materials: ["Latón dorado"],
    colorway: "Dorado",
  },
  n1: {
    name: "Collar Dije Solsticio",
    shortDescription:
      "Una fina cadena con un dije inspirado en el sol.",
    description:
      "El Collar Dije Solsticio presenta un dije inspirado en el sol sobre una fina cadena ajustable. Una pieza cálida para todos los días que combina maravillosamente con otros collares.",
    materials: ["Latón dorado"],
    colorway: "Dorado",
  },
  n2: {
    name: "Collar en Capas Cascade",
    shortDescription:
      "Dos cadenas finas de diferentes largos, combinadas en una sola pieza.",
    description:
      "El Collar en Capas Cascade combina dos cadenas finas de diferentes largos en un solo cierre para lograr un estilo en capas sin enredos y sin esfuerzo.",
    materials: ["Latón dorado"],
    colorway: "Dorado",
  },
  n3: {
    name: "Collar con Inicial",
    shortDescription:
      "Un collar delicado y personal con un dije de letra.",
    description:
      "El Collar con Inicial presenta un delicado dije de letra sobre una fina cadena, un regalo personal y significativo para ti o alguien que amas.",
    materials: ["Latón dorado"],
    colorway: "Dorado",
  },
  n4: {
    name: "Collar Gota de Perla",
    shortDescription:
      "Una perla de agua dulce suspendida de una fina cadena.",
    description:
      "Una genuina perla de agua dulce cuelga de una fina cadena dorada en el Collar Gota de Perla, una pieza serena y atemporal para cualquier ocasión.",
    materials: ["Perla de agua dulce", "Latón dorado"],
    colorway: "Dorado",
  },
};

const spanishProducts = products.map((product) => ({
  ...product,
  ...spanishProductTranslations[product.id],
}));

export function getProducts(locale: Locale) {
  return locale === "es" ? spanishProducts : products;
}

export function getProductBySlug(slug: string, locale: Locale = "en") {
  return getProducts(locale).find((product) => product.slug === slug);
}

export function getFeaturedProducts(locale: Locale = "en") {
  return getProducts(locale).filter((product) => product.featured);
}

export function getProductsByCategory(category: string, locale: Locale = "en") {
  return getProducts(locale).filter((product) => product.category === category);
}

export function getRelatedProducts(
  product: Product,
  locale: Locale = "en",
  limit = 4
) {
  return getProducts(locale)
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
