import { siteConfig } from "@/lib/site-config";
import type { Product } from "@/types/product";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Builds a wa.me deep link with a pre-filled message.
 * Falls back to a generic greeting when no product is provided.
 */
export function getWhatsAppLink(
  product: Product | undefined,
  locale: Locale,
  currentProductUrl?: string,
) {
  const { whatsapp } = getDictionary(locale);
  const message = product
    ? whatsapp.product
        .replace("{product}", product.name)
        .replace("{currency}", product.currency)
        .replace("{price}", product.price.toFixed(2))
        .replace("{url}", getProductPageUrl(product, locale, currentProductUrl))
    : whatsapp.generic;

  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${siteConfig.whatsappNumber}?${params.toString()}`;
}

function getProductPageUrl(
  product: Product,
  locale: Locale,
  currentProductUrl?: string,
) {
  if (currentProductUrl) {
    try {
      const url = new URL(currentProductUrl);
      url.search = "";
      url.hash = "";
      return url.toString();
    } catch {
      // Use the canonical URL when the supplied browser URL is invalid.
    }
  }

  return `${siteConfig.url}/${locale}/shop/${product.slug}`;
}
