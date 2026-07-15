export const siteConfig = {
  name: "Hoops Chic",
  tagline: "Elegant handmade jewelry, made to be worn every day.",
  description:
    "Hoops Chic is a premium handmade jewelry brand focused on creating elegant, timeless, and meaningful accessories.",
  url: "https://hoopschic.com",
  // TODO: replace with the real business WhatsApp number in international format (no + or spaces).
  whatsappNumber: "10000000000",
  instagramHandle: "@hoopschic",
  instagramUrl: "https://instagram.com/hoopschic",
  email: "hello@hoopschic.com",
  nav: [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "Gift Guide", href: "/gift-guide" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
