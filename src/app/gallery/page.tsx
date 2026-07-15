import type { Metadata } from "next";
import { ProductImagePlaceholder } from "@/components/products/ProductImagePlaceholder";
import type { ProductCategory } from "@/types/product";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A look at Hoops Chic jewelry, styled for everyday elegance.",
};

const categoryCycle: ProductCategory[] = [
  "rings",
  "earrings",
  "bracelets",
  "necklaces",
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-10 max-w-2xl">
        <h1 className="font-heading text-4xl text-charcoal">Gallery</h1>
        <p className="mt-2 text-muted-foreground">
          A closer look at Hoops Chic pieces, styled for everyday elegance.
          Real product photography coming soon.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <ProductImagePlaceholder
            key={index}
            category={categoryCycle[index % categoryCycle.length]}
          />
        ))}
      </div>
    </div>
  );
}
