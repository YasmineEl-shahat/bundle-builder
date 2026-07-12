import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  incrementItem,
  decrementItem,
  removeItem,
  setActiveVariant,
} from "@/store/slices/bundleSlice";
import { products } from "@/data/products";

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

  const remove = (productId: string, variantId?: string) => {
    dispatch(
      removeItem({
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
    return selections.filter((selection) => {
      const product = products.find((p) => p.id === selection.productId);

      return product?.category === category;
    }).length;
  };

  return {
    selections,
    activeVariants,

    increase,
    decrease,
    remove,
    changeVariant,

    getQuantity,
    getSelectedCount,
  };
}
