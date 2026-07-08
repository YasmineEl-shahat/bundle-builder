import { useMemo } from "react";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  incrementItem,
  decrementItem,
  setActiveVariant,
} from "@/store/slices/bundleSlice";

export function useSelection() {
  const dispatch = useAppDispatch();

  const selections = useAppSelector((state) => state.bundle.selections);

  const activeVariants = useAppSelector((state) => state.bundle.activeVariants);

  const increase = (productId: string, variantId?: string) => {
    dispatch(
      incrementItem({
        productId,
        variantId,
      }),
    );
  };

  const decrease = (productId: string, variantId?: string) => {
    dispatch(
      decrementItem({
        productId,
        variantId,
      }),
    );
  };

  const changeVariant = (productId: string, variantId: string) => {
    dispatch(
      setActiveVariant({
        productId,
        variantId,
      }),
    );
  };

  const getQuantity = (productId: string, variantId?: string) => {
    return (
      selections.find(
        (item) => item.productId === productId && item.variantId === variantId,
      )?.quantity ?? 0
    );
  };

  const getSelectedCount = (category: string) => {
    return selections.filter((item) => item.productId.startsWith(category))
      .length;
  };

  return {
    selections,
    activeVariants,

    increase,
    decrease,
    changeVariant,

    getQuantity,
    getSelectedCount,
  };
}
