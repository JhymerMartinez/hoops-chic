import { siteConfig } from "@/lib/site-config";
import type { Product } from "@/types/product";

/**
 * Builds a wa.me deep link with a pre-filled message.
 * Falls back to a generic greeting when no product is provided.
 */
export function getWhatsAppLink(product?: Product) {
  const message = product
    ? `Hi Hoops Chic! I'm interested in the "${product.name}" (${product.currency} ${product.price.toFixed(
        2
      )}). Is it available?`
    : `Hi Hoops Chic! I'd love to know more about your jewelry collection.`;

  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${siteConfig.whatsappNumber}?${params.toString()}`;
}
