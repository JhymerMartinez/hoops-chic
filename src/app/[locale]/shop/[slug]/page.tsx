import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ProductImagePlaceholder } from "@/components/products/ProductImagePlaceholder";
import { ProductGrid } from "@/components/products/ProductGrid";
import { WhatsAppOrderButton } from "@/components/products/WhatsAppOrderButton";
import { Badge } from "@/components/ui/badge";
import {
  getProductBySlug,
  getProductSlugs,
  getRelatedProducts,
} from "@/sanity/lib/catalog";
import { getDictionary } from "@/i18n/dictionaries";
import { getLanguageAlternates, getOpenGraphLocale } from "@/i18n/metadata";
import { getRequestLocale } from "@/i18n/server";

type ProductParams = Promise<{ locale: string; slug: string }>;

export async function generateStaticParams() {
  const slugs = await getProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: ProductParams }): Promise<Metadata> {
  const locale = await getRequestLocale(params);
  const { slug } = await params;
  const product = await getProductBySlug(slug, locale);

  if (!product) {
    return { title: getDictionary(locale).meta.pages.productNotFound };
  }

  const path = `/shop/${product.slug}`;
  return {
    title: product.name,
    description: product.shortDescription,
    alternates: getLanguageAlternates(locale, path),
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      url: `/${locale}${path}`,
      locale: getOpenGraphLocale(locale),
    },
  };
}

export default async function ProductPage({ params }: { params: ProductParams }) {
  const locale = await getRequestLocale(params);
  const { slug } = await params;
  const dictionary = getDictionary(locale);
  const product = await getProductBySlug(slug, locale);

  if (!product) notFound();

  const related = await getRelatedProducts(product, locale);
  const categoryName = product.categoryName?.toLowerCase() ?? product.category;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link href={`/${locale}/shop`} className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-charcoal">
        <ChevronLeft className="size-4" /> {dictionary.product.back}
      </Link>
      <div className="grid gap-10 md:grid-cols-2">
        <ProductImagePlaceholder
          category={product.category}
          label={dictionary.common.productImage.replace("{category}", categoryName)}
          image={product.images?.[0]}
        />
        <div className="flex flex-col gap-4">
          {product.featured && <Badge className="w-fit bg-charcoal text-ivory">{dictionary.common.bestseller}</Badge>}
          <h1 className="font-heading text-3xl text-charcoal sm:text-4xl">{product.name}</h1>
          <p className="text-xl font-medium text-charcoal">{product.currency} {product.price.toFixed(2)}</p>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex flex-col gap-1 pt-2 text-sm">
            <span className="font-medium text-charcoal">{dictionary.product.materials}</span>
            <span className="text-muted-foreground">{product.materials.join(", ")}</span>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <span className="font-medium text-charcoal">{dictionary.product.colorway}</span>
            <span className="text-muted-foreground">{product.colorway}</span>
          </div>
          <WhatsAppOrderButton
            product={product}
            locale={locale}
            label={dictionary.common.orderOnWhatsApp}
            className="mt-4 w-fit"
          />
        </div>
      </div>
      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-heading text-2xl text-charcoal">{dictionary.product.related}</h2>
          <ProductGrid
            products={related}
            locale={locale}
            emptyMessage={dictionary.shop.empty}
            bestsellerLabel={dictionary.common.bestseller}
            imageLabel={dictionary.common.productImage}
          />
        </div>
      )}
    </div>
  );
}
