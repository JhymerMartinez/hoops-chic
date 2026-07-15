import { siteConfig } from "@/lib/site-config";
import type { Product } from "@/types/product";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Builds a wa.me deep link with a pre-filled message.
 * Falls back to a generic greeting when no product is provided.
 */
export function getWhatsAppLink(product: Product | undefined, locale: Locale) {
  const { whatsapp } = getDictionary(locale);
  const message = product
    ? whatsapp.product
        .replace("{product}", product.name)
        .replace("{currency}", product.currency)
        .replace("{price}", product.price.toFixed(2))
    : whatsapp.generic;

  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${siteConfig.whatsappNumber}?${params.toString()}`;
}
