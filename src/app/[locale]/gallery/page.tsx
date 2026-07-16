import type { Metadata } from "next";
import { ProductImagePlaceholder } from "@/components/products/ProductImagePlaceholder";
import { getCategory } from "@/data/categories";
import { getDictionary } from "@/i18n/dictionaries";
import { getPageMetadata } from "@/i18n/metadata";
import { getRequestLocale, type LocaleParams } from "@/i18n/server";
import type { ProductCategory } from "@/types/product";

const categoryCycle: ProductCategory[] = ["rings", "earrings", "bracelets", "necklaces"];

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await getRequestLocale(params);
  return getPageMetadata(locale, getDictionary(locale).meta.pages.gallery, "/gallery");
}

export default async function GalleryPage({ params }: { params: LocaleParams }) {
  const locale = await getRequestLocale(params);
  const dictionary = getDictionary(locale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <h1 className="font-heading text-4xl text-charcoal">{dictionary.gallery.title}</h1>
        <p className="mt-2 text-muted-foreground">{dictionary.gallery.description}</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => {
          const category = categoryCycle[index % categoryCycle.length];
          const categoryName = getCategory(category, locale)?.name.toLowerCase() ?? category;
          return (
            <ProductImagePlaceholder
              key={index}
              category={category}
              label={dictionary.common.productImage.replace("{category}", categoryName)}
            />
          );
        })}
      </div>
    </div>
  );
}

