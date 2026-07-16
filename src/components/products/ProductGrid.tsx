import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/types/product";
import type { Locale } from "@/i18n/config";

export function ProductGrid({
  products,
  locale,
  emptyMessage,
  bestsellerLabel,
  imageLabel,
}: {
  products: Product[];
  locale: Locale;
  emptyMessage: string;
  bestsellerLabel: string;
  imageLabel: string;
}) {
  if (products.length === 0) {
    return (
      <p className="py-16 text-center text-muted-foreground">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          locale={locale}
          bestsellerLabel={bestsellerLabel}
          imageLabel={imageLabel.replace(
            "{category}",
            product.categoryName?.toLowerCase() ?? product.category
          )}
        />
      ))}
    </div>
  );
}
