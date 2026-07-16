import Link from "next/link";
import { ProductImagePlaceholder } from "@/components/products/ProductImagePlaceholder";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types/product";
import type { Locale } from "@/i18n/config";

export function ProductCard({
  product,
  locale,
  bestsellerLabel,
  imageLabel,
}: {
  product: Product;
  locale: Locale;
  bestsellerLabel: string;
  imageLabel: string;
}) {
  return (
    <Link
      href={`/${locale}/shop/${product.slug}`}
      className="group flex flex-col gap-3 rounded-2xl p-3 transition-colors hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <ProductImagePlaceholder
          category={product.category}
          label={imageLabel}
          image={product.images?.[0]}
          className="transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {product.featured && (
          <Badge className="absolute left-3 top-3 bg-charcoal text-ivory">
            {bestsellerLabel}
          </Badge>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-heading text-lg text-charcoal">{product.name}</h3>
        <p className="text-sm text-muted-foreground">
          {product.shortDescription}
        </p>
        <p className="mt-1 font-medium text-charcoal">
          {product.currency} {product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}
