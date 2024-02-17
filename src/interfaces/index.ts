export interface ITab {
  label: string;
  category: string;
}

export enum Category {
  RINGS = "rings",
  EARRINGS = "earrings",
  HANDLES = "handles",
}

export interface ICatalogProps {
  category: Category;
}

export interface IData {
  id: number;
  code: string;
  images: { src: string; alt: string }[];
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  additionalInfo?: {
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    material: string;
    size: number;
  };
}

export interface ICatalogCardProps {
  data: IData;
}
