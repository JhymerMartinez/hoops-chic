import type { Metadata } from "next";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Gift Guide",
  description:
    "Find the perfect handmade jewelry gift for every occasion with the Hoops Chic Gift Guide.",
};

const guides = [
  {
    tag: "birthday",
    title: "For Her Birthday",
    description: "Thoughtful pieces to celebrate another year.",
  },
  {
    tag: "anniversary",
    title: "Anniversary Gifts",
    description: "Timeless jewelry to mark a special milestone.",
  },
  {
    tag: "everyday",
    title: "Everyday Essentials",
    description: "Versatile pieces made for daily wear.",
  },
  {
    tag: "self-care",
    title: "Treat Yourself",
    description: "A little something just for you.",
  },
];

export default function GiftGuidePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <h1 className="font-heading text-4xl text-charcoal">Gift Guide</h1>
        <p className="mt-2 text-muted-foreground">
          Not sure what to choose? Browse curated picks by occasion, all
          ready to order in seconds through WhatsApp.
        </p>
      </div>

      <div className="flex flex-col gap-14">
        {guides.map((guide) => {
          const items = products.filter((product) =>
            product.giftGuide?.includes(guide.tag)
          );

          if (items.length === 0) return null;

          return (
            <section key={guide.tag}>
              <h2 className="font-heading text-2xl text-charcoal">
                {guide.title}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {guide.description}
              </p>
              <div className="mt-6">
                <ProductGrid products={items} />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
