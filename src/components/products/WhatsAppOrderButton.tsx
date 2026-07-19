"use client";

import { useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";
import type { Locale } from "@/i18n/config";

export function WhatsAppOrderButton({
  product,
  locale,
  className,
  label,
}: {
  product?: Product;
  locale: Locale;
  className?: string;
  label: string;
}) {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!product || !linkRef.current) return;

    linkRef.current.href = getWhatsAppLink(
      product,
      locale,
      window.location.href,
    );
  }, [locale, product]);

  return (
    <a
      ref={linkRef}
      href={getWhatsAppLink(product, locale)}
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
