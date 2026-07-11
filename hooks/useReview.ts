import { useMemo } from "react";

import { products } from "@/data/products";

import { useSelection } from "./useSelection";

export function useReview() {
  const { selections } = useSelection();

  const items = useMemo(() => {
    return selections.flatMap((selection) => {
      const product = products.find((p) => p.id === selection.productId);

      if (!product) return [];

      const variant = product.variants?.find(
        (v) => v.id === selection.variantId,
      );

      return {
        productId: product.id,

        category: product.category,

        title: product.title,

        image: variant?.image ?? product.image,

        variantLabel: variant?.label,

        quantity: selection.quantity,

        price: product.price,

        comparePrice: product.comparePrice,
      };
    });
  }, [selections]);

  const cameras = items.filter((i) => i.category === "cameras");

  const sensors = items.filter((i) => i.category === "sensors");

  const accessories = items.filter((i) => i.category === "accessories");

  const plans = items.filter((i) => i.category === "plans");

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const compareTotal = items.reduce(
    (sum, item) => sum + (item.comparePrice ?? item.price) * item.quantity,
    0,
  );

  const savings = compareTotal - subtotal;

  const shipping = 0;

  const total = subtotal + shipping;

  return {
    cameras,
    sensors,
    accessories,
    plans,
    subtotal,
    compareTotal,
    savings,
    shipping,
    total,
  };
}
