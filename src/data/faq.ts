import type { Locale } from "@/i18n/config";

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "How do I place an order?",
    answer:
      "Browse our catalog and tap the \"Order on WhatsApp\" button on any product. It opens a chat pre-filled with the item you're interested in, so we can confirm availability and arrange payment and delivery.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "We currently ship within the country and are expanding our shipping options. Message us on WhatsApp with your location and we'll confirm what's available for you.",
  },
  {
    question: "Are your pieces waterproof or tarnish-resistant?",
    answer:
      "Most of our pieces feature a tarnish-resistant coating, but we still recommend removing jewelry before swimming, showering, or exercising to extend its lifespan.",
  },
  {
    question: "Can I return or exchange an item?",
    answer:
      "Yes, unworn items in their original packaging can be exchanged within 7 days of delivery. Reach out to us on WhatsApp to start the process.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Every order comes in Hoops Chic branded packaging, perfect for gifting as-is. Let us know on WhatsApp if you'd like a personalized note included.",
  },
  {
    question: "How do I know my ring size?",
    answer:
      "Most of our rings are designed to fit true to size 6-8 (US) with a slightly adjustable band. Message us on WhatsApp if you need help finding your fit.",
  },
];

const spanishFaqs: FaqItem[] = [
  {
    question: "¿Cómo hago un pedido?",
    answer:
      'Explora nuestro catálogo y presiona el botón "Ordenar por WhatsApp" en cualquier producto. Se abrirá un chat con la información de la pieza para confirmar disponibilidad, pago y entrega.',
  },
  {
    question: "¿Realizan envíos internacionales?",
    answer:
      "Actualmente realizamos envíos dentro del país y estamos ampliando nuestras opciones. Escríbenos por WhatsApp con tu ubicación para confirmar la disponibilidad.",
  },
  {
    question: "¿Las piezas son resistentes al agua o al desgaste?",
    answer:
      "La mayoría de nuestras piezas tienen un recubrimiento resistente al desgaste, pero recomendamos retirarlas antes de nadar, ducharte o hacer ejercicio para prolongar su vida útil.",
  },
  {
    question: "¿Puedo devolver o cambiar un artículo?",
    answer:
      "Sí. Las piezas sin usar y en su empaque original pueden cambiarse dentro de los 7 días posteriores a la entrega. Escríbenos por WhatsApp para iniciar el proceso.",
  },
  {
    question: "¿Ofrecen envoltura para regalo?",
    answer:
      "Cada pedido incluye un empaque de Hoops Chic perfecto para regalar. Avísanos por WhatsApp si deseas incluir una nota personalizada.",
  },
  {
    question: "¿Cómo sé cuál es mi talla de anillo?",
    answer:
      "La mayoría de nuestros anillos se ajustan a las tallas 6 a 8 (EE. UU.) y cuentan con una banda ligeramente ajustable. Escríbenos por WhatsApp si necesitas ayuda.",
  },
];

export function getFaqs(locale: Locale) {
  return locale === "es" ? spanishFaqs : faqs;
}
