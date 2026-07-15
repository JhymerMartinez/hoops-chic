export type ProductCategory = "rings" | "earrings" | "bracelets" | "necklaces";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  currency: string;
  shortDescription: string;
  description: string;
  materials: string[];
  colorway: string;
  featured?: boolean;
  giftGuide?: string[];
  tags?: string[];
}

export interface Category {
  slug: ProductCategory;
  name: string;
  description: string;
}
