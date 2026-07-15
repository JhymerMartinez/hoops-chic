import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";

export function WhatsAppOrderButton({
  product,
  className,
  label = "Order on WhatsApp",
}: {
  product?: Product;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={getWhatsAppLink(product)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90",
        className
      )}
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      {label}
    </a>
  );
}
