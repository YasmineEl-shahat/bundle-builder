export interface ProductVariant {
  id: string;
  label: string;
  swatch: string;
}

export interface Product {
  id: string;

  category:
    | "cameras"
    | "plans"
    | "sensors"
    | "accessories";

  title: string;

  description: string;

  image: string;

  price: number;

  comparePrice?: number;

  badge?: string;

  variants?: ProductVariant[];
}

export interface SelectedItem {
  productId: string;
  variantId?: string;
  quantity: number;
}