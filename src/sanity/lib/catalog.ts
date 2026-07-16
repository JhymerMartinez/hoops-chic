import { defineQuery } from "next-sanity";
import type { Locale } from "@/i18n/config";
import { sanityClient } from "@/sanity/lib/client";
import type { Category, Product } from "@/types/product";
import {
  getCategories as getStaticCategories,
  getCategory as getStaticCategory,
} from "@/data/categories";
import {
  getProducts as getStaticProducts,
  getProductsByCategory as getStaticProductsByCategory,
} from "@/data/products";

const productsQuery = defineQuery(`
  *[_type == "product"] | order(coalesce(order, 9999) asc, name.en asc) {
    "id": coalesce(legacyId, _id),
    "slug": slug.current,
    "name": coalesce(name[$locale], name.en, name.es),
    "category": category->slug.current,
    "categoryName": coalesce(category->name[$locale], category->name.en, category->name.es),
    price,
    currency,
    "shortDescription": coalesce(shortDescription[$locale], shortDescription.en, shortDescription.es),
    "description": coalesce(description[$locale], description.en, description.es),
    "materials": coalesce(materials[$locale], materials.en, materials.es, []),
    "colorway": coalesce(colorway[$locale], colorway.en, colorway.es),
    featured,
    giftGuide,
    tags,
    images[]{
      asset,
      crop,
      hotspot,
      "alt": coalesce(alt[$locale], alt.en, alt.es)
    }
  }
`);

const categoriesQuery = defineQuery(`
  *[_type == "category"] | order(coalesce(order, 9999) asc, name.en asc) {
    "slug": slug.current,
    "name": coalesce(name[$locale], name.en, name.es),
    "description": coalesce(description[$locale], description.en, description.es),
    "productCount": count(*[_type == "product" && references(^._id)]),
    image{
      asset,
      crop,
      hotspot,
      "alt": coalesce(alt[$locale], alt.en, alt.es)
    }
  }
`);

async function fetchProducts(locale: Locale): Promise<Product[]> {
  if (!sanityClient) return getStaticProducts(locale);

  try {
    const products = await sanityClient.fetch<Product[]>(
      productsQuery,
      { locale },
      { next: { revalidate: 60, tags: ["products"] } },
    );

    return products.length > 0 ? products : getStaticProducts(locale);
  } catch (error) {
    console.error("Unable to load products from Sanity; using static catalog.", error);
    return getStaticProducts(locale);
  }
}

export function getProducts(locale: Locale) {
  return fetchProducts(locale);
}

export async function getFeaturedProducts(locale: Locale) {
  const products = await fetchProducts(locale);
  return products.filter((product) => product.featured);
}

export async function getProductBySlug(slug: string, locale: Locale) {
  const products = await fetchProducts(locale);
  return products.find((product) => product.slug === slug);
}

export async function getProductsByCategory(category: string, locale: Locale) {
  const products = await fetchProducts(locale);
  return products.filter((product) => product.category === category);
}

export async function getRelatedProducts(product: Product, locale: Locale, limit = 4) {
  const products = await fetchProducts(locale);
  return products
    .filter((candidate) => candidate.category === product.category && candidate.id !== product.id)
    .slice(0, limit);
}

export async function getCategories(locale: Locale): Promise<Category[]> {
  if (!sanityClient) {
    return getStaticCategories(locale).map((category) => ({
      ...category,
      productCount: getStaticProductsByCategory(category.slug, locale).length,
    }));
  }

  try {
    const categories = await sanityClient.fetch<Category[]>(
      categoriesQuery,
      { locale },
      { next: { revalidate: 60, tags: ["categories", "products"] } },
    );

    if (categories.length > 0) return categories;
  } catch (error) {
    console.error("Unable to load categories from Sanity; using static catalog.", error);
  }

  return getStaticCategories(locale).map((category) => ({
    ...category,
    productCount: getStaticProductsByCategory(category.slug, locale).length,
  }));
}

export async function getCategory(slug: string, locale: Locale) {
  const categories = await getCategories(locale);
  return categories.find((category) => category.slug === slug) ?? getStaticCategory(slug, locale);
}

export async function getProductSlugs() {
  const products = await fetchProducts("en");
  return products.map(({ slug }) => slug);
}
