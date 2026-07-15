import { Gem, CircleDashed, Sparkles, Link2 } from "lucide-react";
import type { ProductCategory } from "@/types/product";
import { cn } from "@/lib/utils";

const ICONS: Record<ProductCategory, typeof Gem> = {
  rings: CircleDashed,
  earrings: Sparkles,
  bracelets: Link2,
  necklaces: Gem,
};

/**
 * Decorative placeholder used until real product photography is available.
 * Renders a soft, on-brand illustration instead of a broken image.
 */
export function ProductImagePlaceholder({
  category,
  className,
}: {
  category: ProductCategory;
  className?: string;
}) {
  const Icon = ICONS[category] ?? Gem;

  return (
    <div
      className={cn(
        "flex aspect-square w-full items-center justify-center rounded-2xl bg-gradient-to-br from-lavender to-ivory",
        className
      )}
      role="img"
      aria-label={`${category} placeholder image`}
    >
      <Icon className="size-16 text-violet" strokeWidth={1} aria-hidden="true" />
    </div>
  );
}
