import { LucideIcon } from "lucide-react";

type Category = "cameras" | "plans" | "sensors" | "accessories";
export interface ProductVariant {
  id: string;
  label: string;
  image: string;
}

export interface Product {
  id: string;

  category: Category;

  title: string;

  description: string;

  image: string;

  price: number;

  comparePrice?: number;

  badge?: string;

  variants?: ProductVariant[];

  required?: boolean;
}

export interface SelectedItem {
  productId: string;
  variantId?: string;
  quantity: number;
}

export interface Step {
  id: string;
  number: number;
  title: string;
  category: Category;
  nextLabel?: string;
  icon: LucideIcon;
}
