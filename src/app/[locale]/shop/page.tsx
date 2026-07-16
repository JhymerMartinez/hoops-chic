import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductFilters } from "@/components/products/ProductFilters";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getCategories, getProducts } from "@/sanity/lib/catalog";
import { getDictionary } from "@/i18n/dictionaries";
import { getPageMetadata } from "@/i18n/metadata";
import { getRequestLocale, type LocaleParams } from "@/i18n/server";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRequestLocale(params);
  return getPageMetadata(locale, getDictionary(locale).meta.pages.shop, "/shop");
}

export default async function ShopPage({
  params,
  searchParams,
}: {
  params: LocaleParams;
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const locale = await getRequestLocale(params);
  const { q, category } = await searchParams;
  const dictionary = getDictionary(locale);
  const [products, categories] = await Promise.all([
    getProducts(locale),
    getCategories(locale),
  ]);

  const filtered = products.filter((product) => {
    const matchesCategory = !category || product.category === category;
    const matchesQuery =
      !q ||
      product.name.toLocaleLowerCase(locale).includes(q.toLocaleLowerCase(locale)) ||
      product.shortDescription.toLocaleLowerCase(locale).includes(q.toLocaleLowerCase(locale));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="font-heading text-4xl text-charcoal">{dictionary.shop.title}</h1>
        <p className="mt-2 text-muted-foreground">
          {dictionary.shop.count.replace("{count}", String(products.length))}
        </p>
      </div>
      <Suspense>
        <ProductFilters
          locale={locale}
          categories={categories}
          labels={dictionary.shop}
        />
      </Suspense>
      <div className="mt-8">
        <ProductGrid
          products={filtered}
          locale={locale}
          emptyMessage={dictionary.shop.empty}
          bestsellerLabel={dictionary.common.bestseller}
          imageLabel={dictionary.common.productImage}
        />
      </div>
    </div>
  );
}
