import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site-config";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/shop",
    "/collections",
    "/gift-guide",
    "/gallery",
    "/about",
    "/reviews",
    "/faq",
    "/contact",
  ];

  const staticRoutes = paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((alternateLocale) => [
            alternateLocale,
            `${siteConfig.url}/${alternateLocale}${path}`,
          ])
        ),
      },
    }))
  );

  const productRoutes = products.flatMap((product) => {
    const path = `/shop/${product.slug}`;
    return locales.map((locale) => ({
      url: `${siteConfig.url}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          locales.map((alternateLocale) => [
            alternateLocale,
            `${siteConfig.url}/${alternateLocale}${path}`,
          ])
        ),
      },
    }));
  });

  return [...staticRoutes, ...productRoutes];
}
