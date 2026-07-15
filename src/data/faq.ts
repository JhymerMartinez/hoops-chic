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
