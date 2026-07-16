import type { Metadata } from "next";
import { getLocalizedPath, locales, type Locale } from "@/i18n/config";

export function getLanguageAlternates(
  locale: Locale,
  path = ""
): Metadata["alternates"] {
  return {
    languages: Object.fromEntries(
      locales.map((locale) => [locale, getLocalizedPath(locale, path)])
    ),
    canonical: getLocalizedPath(locale, path),
  };
}

export function getPageMetadata(
  locale: Locale,
  copy: { title: string; description: string },
  path: string
): Metadata {
  return {
    title: copy.title,
    description: copy.description,
    alternates: getLanguageAlternates(locale, path),
    openGraph: {
      title: copy.title,
      description: copy.description,
      url: getLocalizedPath(locale, path),
      locale: getOpenGraphLocale(locale),
    },
  };
}

export function getOpenGraphLocale(locale: Locale) {
  return locale === "es" ? "es_EC" : "en_US";
}
