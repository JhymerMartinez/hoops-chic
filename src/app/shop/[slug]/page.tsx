import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { ProductImagePlaceholder } from "@/components/products/ProductImagePlaceholder";
import { ProductGrid } from "@/components/products/ProductGrid";
import { WhatsAppOrderButton } from "@/components/products/WhatsAppOrderButton";
import { Badge } from "@/components/ui/badge";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
} from "@/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <Link
        href="/shop"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-charcoal"
      >
        <ChevronLeft className="size-4" /> Back to Shop
      </Link>

      <div className="grid gap-10 md:grid-cols-2">
        <ProductImagePlaceholder category={product.category} />

        <div className="flex flex-col gap-4">
          {product.featured && (
            <Badge className="w-fit bg-charcoal text-ivory">Bestseller</Badge>
          )}
          <h1 className="font-heading text-3xl text-charcoal sm:text-4xl">
            {product.name}
          </h1>
          <p className="text-xl font-medium text-charcoal">
            {product.currency} {product.price.toFixed(2)}
          </p>
          <p className="text-muted-foreground">{product.description}</p>

          <div className="flex flex-col gap-1 pt-2 text-sm">
            <span className="font-medium text-charcoal">Materials</span>
            <span className="text-muted-foreground">
              {product.materials.join(", ")}
            </span>
          </div>

          <div className="flex flex-col gap-1 text-sm">
            <span className="font-medium text-charcoal">Colorway</span>
            <span className="text-muted-foreground">{product.colorway}</span>
          </div>

          <WhatsAppOrderButton product={product} className="mt-4 w-fit" />
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 font-heading text-2xl text-charcoal">
            You may also like
          </h2>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}
