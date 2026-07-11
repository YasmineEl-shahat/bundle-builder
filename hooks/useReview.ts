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

  return {
    items,
  };
}
