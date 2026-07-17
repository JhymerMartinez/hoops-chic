export type ProductCategory = string;

export interface ProductImage {
  asset: {
    _ref: string;
    _type?: "reference";
  };
  alt?: string;
  crop?: {
    _type?: "sanity.imageCrop";
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  hotspot?: {
    _type?: "sanity.imageHotspot";
    x: number;
    y: number;
    height: number;
    width: number;
  };
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryName?: string;
  price: number;
  currency: string;
  shortDescription: string;
  description: string;
  materials: string[];
  colorway: string;
  featured?: boolean;
  giftGuide?: string[];
  tags?: string[];
  images?: ProductImage[];
}

export interface Category {
  slug: ProductCategory;
  name: string;
  description: string;
  productCount?: number;
  image?: ProductImage;
}
