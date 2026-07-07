import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedItem } from "@/types/bundle";

interface IncrementPayload {
  productId: string;
  variantId?: string;
}

interface BundleState {
  activeStep: number;
  selections: SelectedItem[];
  activeVariants: Record<string, string>;
}

const initialState: BundleState = {
  activeStep: 1,
  selections: [],
  activeVariants: {},
};

const bundleSlice = createSlice({
  name: "bundle",
  initialState,
  reducers: {
    incrementItem: (state, action: PayloadAction<IncrementPayload>) => {
      const { productId, variantId } = action.payload;
      const existing = state.selections.find(
        (item) => item.productId === productId && item.variantId === variantId,
      );
      if (existing) {
        existing.quantity++;
      } else {
        state.selections.push({
          productId,
          variantId,
          quantity: 1,
        });
      }
    },
    decrementItem: (state, action: PayloadAction<IncrementPayload>) => {
      const { productId, variantId } = action.payload;

      const existing = state.selections.find(
        (item) => item.productId === productId && item.variantId === variantId,
      );

      if (!existing) return;

      existing.quantity--;

      if (existing.quantity <= 0) {
        state.selections = state.selections.filter(
          (item) =>
            !(item.productId === productId && item.variantId === variantId),
        );
      }
    },
    setActiveVariant: (
      state,
      action: PayloadAction<{
        productId: string;
        variantId: string;
      }>,
    ) => {
      state.activeVariants[action.payload.productId] = action.payload.variantId;
    },
  },
});
export const { incrementItem, decrementItem, setActiveVariant } =
  bundleSlice.actions;

export default bundleSlice.reducer;
