import type { Metadata } from "next";
import { WhatsAppOrderButton } from "@/components/products/WhatsAppOrderButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hoops Chic, a premium handmade jewelry brand focused on elegant, timeless, and meaningful accessories.",
};

const values = [
  {
    title: "Handmade",
    description:
      "Every piece is thoughtfully designed and finished by hand, never mass-produced.",
  },
  {
    title: "Timeless",
    description:
      "We design for longevity, not trends. Pieces that feel just as right years from now.",
  },
  {
    title: "Accessible",
    description:
      "Premium quality shouldn't be out of reach. We keep our catalog approachable and honest.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-heading text-4xl text-charcoal sm:text-5xl">
        Our Story
      </h1>
      <p className="mt-6 text-lg text-muted-foreground">
        Hoops Chic is a premium handmade jewelry brand focused on creating
        elegant, timeless, and meaningful accessories. We believe jewelry
        should feel personal, not disposable, which is why every piece in
        our catalog is designed to be worn every day, not saved for a
        special occasion.
      </p>
      <p className="mt-4 text-lg text-muted-foreground">
        What started as a small, handmade collection has grown into a
        curated catalog of rings, earrings, bracelets, and necklaces, each
        designed with the same values: quality, warmth, and understated
        elegance.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="rounded-2xl border border-border bg-card p-6"
          >
            <h3 className="font-heading text-xl text-charcoal">
              {value.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start gap-3">
        <h2 className="font-heading text-2xl text-charcoal">
          Have a question?
        </h2>
        <p className="text-muted-foreground">
          We&apos;d love to hear from you. Reach out anytime on WhatsApp.
        </p>
        <WhatsAppOrderButton label="Chat with us" />
      </div>
    </div>
  );
}
