import type { Metadata } from "next";
import { ProductGrid } from "@/components/products/ProductGrid";
import { getProducts } from "@/sanity/lib/catalog";
import { getDictionary } from "@/i18n/dictionaries";
import { getPageMetadata } from "@/i18n/metadata";
import { getRequestLocale, type LocaleParams } from "@/i18n/server";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRequestLocale(params);
  return getPageMetadata(locale, getDictionary(locale).meta.pages.giftGuide, "/gift-guide");
}

export default async function GiftGuidePage({ params }: { params: LocaleParams }) {
  const locale = await getRequestLocale(params);
  const dictionary = getDictionary(locale);
  const products = await getProducts(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <h1 className="font-heading text-4xl text-charcoal">{dictionary.giftGuide.title}</h1>
        <p className="mt-2 text-muted-foreground">{dictionary.giftGuide.description}</p>
      </div>
      <div className="flex flex-col gap-14">
        {dictionary.giftGuide.guides.map((guide) => {
          const items = products.filter((product) => product.giftGuide?.includes(guide.tag));
          if (items.length === 0) return null;

          return (
            <section key={guide.tag}>
              <h2 className="font-heading text-2xl text-charcoal">{guide.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{guide.description}</p>
              <div className="mt-6">
                <ProductGrid
                  products={items}
                  locale={locale}
                  emptyMessage={dictionary.shop.empty}
                  bestsellerLabel={dictionary.common.bestseller}
                  imageLabel={dictionary.common.productImage}
                />
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
