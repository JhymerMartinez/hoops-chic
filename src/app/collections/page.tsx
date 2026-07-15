import type { Metadata } from "next";
import Link from "next/link";
import { ProductImagePlaceholder } from "@/components/products/ProductImagePlaceholder";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Explore Hoops Chic collections: rings, earrings, bracelets, and necklaces.",
};

export default function CollectionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="font-heading text-4xl text-charcoal">Collections</h1>
        <p className="mt-2 max-w-xl text-muted-foreground">
          Explore our catalog by category and find the perfect piece for
          every occasion.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((category) => {
          const count = getProductsByCategory(category.slug).length;
          return (
            <Link
              key={category.slug}
              href={`/shop?category=${category.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-border p-6 transition-colors hover:bg-secondary/60"
            >
              <ProductImagePlaceholder
                category={category.slug}
                className="aspect-[3/2] transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div>
                <h2 className="font-heading text-2xl text-charcoal">
                  {category.name}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <p className="mt-2 text-sm font-medium text-violet-dark">
                  {count} pieces
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
