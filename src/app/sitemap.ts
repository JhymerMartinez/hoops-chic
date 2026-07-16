import type { MetadataRoute } from "next";
import { getProductSlugs } from "@/sanity/lib/catalog";
import { siteConfig } from "@/lib/site-config";
import { locales } from "@/i18n/config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const productSlugs = await getProductSlugs();
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

  const productRoutes = productSlugs.flatMap((slug) => {
    const path = `/shop/${slug}`;
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
