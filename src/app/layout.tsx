import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://hoopschic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hoops Chic | Handmade Jewelry Catalog",
    template: "%s | Hoops Chic",
  },
  description:
    "Hoops Chic is a premium handmade jewelry brand. Browse our elegant catalog of rings, earrings, bracelets, and necklaces, and order directly through WhatsApp.",
  keywords: [
    "handmade jewelry",
    "jewelry catalog",
    "Hoops Chic",
    "rings",
    "earrings",
    "bracelets",
    "necklaces",
  ],
  openGraph: {
    title: "Hoops Chic | Handmade Jewelry Catalog",
    description:
      "Elegant, timeless, handmade jewelry. Browse the catalog and order through WhatsApp.",
    url: siteUrl,
    siteName: "Hoops Chic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoops Chic | Handmade Jewelry Catalog",
    description:
      "Elegant, timeless, handmade jewelry. Browse the catalog and order through WhatsApp.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
