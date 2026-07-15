import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse the full Hoops Chic catalog of handmade rings, earrings, bracelets, and necklaces.",
};

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const { q, category } = await searchParams;

  const filtered = products.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const matchesQuery =
      !q ||
      product.name.toLowerCase().includes(q.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(q.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="font-heading text-4xl text-charcoal">Shop</h1>
        <p className="mt-2 text-muted-foreground">
          {products.length} handmade pieces, made to be worn every day.
        </p>
      </div>

      <Suspense>
        <ProductFilters />
      </Suspense>

      <div className="mt-8">
        <ProductGrid products={filtered} />
      </div>
    </div>
  );
}
