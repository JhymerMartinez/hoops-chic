import Image from "next/image";
import { Gem, CircleDashed, Sparkles, Link2 } from "lucide-react";
import type { ProductCategory, ProductImage } from "@/types/product";
import { cn } from "@/lib/utils";
import { getSanityImageUrl } from "@/sanity/lib/image";

const ICONS: Partial<Record<ProductCategory, typeof Gem>> = {
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
  label,
  image,
  className,
}: {
  category: ProductCategory;
  label: string;
  image?: ProductImage;
  className?: string;
}) {
  const Icon = ICONS[category] ?? Gem;

  if (image?.asset?._ref) {
    return (
      <div
        className={cn(
          "relative aspect-square w-full overflow-hidden rounded-2xl bg-lavender",
          className
        )}
      >
        <Image
          src={getSanityImageUrl(image)}
          alt={image.alt || label}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex aspect-square w-full items-center justify-center rounded-2xl bg-gradient-to-br from-lavender to-ivory",
        className
      )}
      role="img"
      aria-label={label}
    >
      <Icon className="size-16 text-violet" strokeWidth={1} aria-hidden="true" />
    </div>
  );
}
