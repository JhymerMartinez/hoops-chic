import Link from "next/link";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";
import { getLocalizedPath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";

export function FeaturedProducts({
  locale,
  dictionary,
}: {
  locale: Locale;
  dictionary: Dictionary;
}) {
  const featured = getFeaturedProducts(locale);
  const { common, featured: copy, shop } = dictionary;

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="font-heading text-3xl text-charcoal">{copy.title}</h2>
          <p className="mt-2 text-muted-foreground">
            {copy.description}
          </p>
        </div>
        <Button asChild variant="link" className="hidden text-charcoal sm:inline-flex">
          <Link href={getLocalizedPath(locale, "/shop")}>{copy.viewAll}</Link>
        </Button>
      </div>
      <ProductGrid
        products={featured}
        locale={locale}
        emptyMessage={shop.empty}
        bestsellerLabel={common.bestseller}
        imageLabel={common.productImage}
      />
      <div className="mt-8 flex justify-center sm:hidden">
        <Button asChild variant="outline">
          <Link href={getLocalizedPath(locale, "/shop")}>{copy.viewAllProducts}</Link>
        </Button>
      </div>
    </section>
  );
}
