import type { Metadata } from "next";
import Link from "next/link";
import { ProductImagePlaceholder } from "@/components/products/ProductImagePlaceholder";
import { getCategories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { getDictionary } from "@/i18n/dictionaries";
import { getPageMetadata } from "@/i18n/metadata";
import { getRequestLocale, type LocaleParams } from "@/i18n/server";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRequestLocale(params);
  return getPageMetadata(locale, getDictionary(locale).meta.pages.collections, "/collections");
}

export default async function CollectionsPage({ params }: { params: LocaleParams }) {
  const locale = await getRequestLocale(params);
  const dictionary = getDictionary(locale);
  const categories = getCategories(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10">
        <h1 className="font-heading text-4xl text-charcoal">{dictionary.collections.title}</h1>
        <p className="mt-2 max-w-xl text-muted-foreground">{dictionary.collections.description}</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {categories.map((category) => {
          const count = getProductsByCategory(category.slug, locale).length;
          return (
            <Link
              key={category.slug}
              href={`/${locale}/shop?category=${category.slug}`}
              className="group flex flex-col gap-4 rounded-2xl border border-border p-6 transition-colors hover:bg-secondary/60"
            >
              <ProductImagePlaceholder
                category={category.slug}
                label={dictionary.common.productImage.replace("{category}", category.name.toLowerCase())}
                className="aspect-[3/2] transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div>
                <h2 className="font-heading text-2xl text-charcoal">{category.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                <p className="mt-2 text-sm font-medium text-violet-dark">
                  {dictionary.collections.pieces.replace("{count}", String(count))}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

