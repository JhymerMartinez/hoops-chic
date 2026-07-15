import Link from "next/link";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-3xl text-charcoal">Bestsellers</h2>
          <p className="mt-2 text-muted-foreground">
            Our most-loved pieces, handpicked for you.
          </p>
        </div>
        <Button asChild variant="link" className="hidden text-charcoal sm:inline-flex">
          <Link href="/shop">View all</Link>
        </Button>
      </div>
      <ProductGrid products={featured} />
      <div className="mt-8 flex justify-center sm:hidden">
        <Button asChild variant="outline">
          <Link href="/shop">View all products</Link>
        </Button>
      </div>
    </section>
  );
}
