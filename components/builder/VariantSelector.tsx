import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProductVariant } from "@/types/bundle";
import { Button } from "../ui/button";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariant: string;
  onSelect: (variantId: string) => void;
}

export default function VariantSelector({
  variants,
  selectedVariant,
  onSelect,
}: VariantSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {variants.map((variant) => {
        const isSelected = variant.id === selectedVariant;

        return (
          <Button
            key={variant.id}
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onSelect(variant.id);
            }}
            className={cn(
              "flex items-center gap-1 rounded-xs border border-0.5 bg-white hover:bg-white p-1 transition-all",
              isSelected
                ? "border-green ring-1 ring-green bg-green-subtle"
                : "border-gray-c-500 hover:border-green hover:bg-green-subtle",
            )}
          >
            <Image
              src={variant.image}
              alt={variant.label}
              width={28}
              height={28}
              className="object-contain"
            />

            <span className="text-xs text-gray-c-900">{variant.label}</span>
          </Button>
        );
      })}
    </div>
  );
}
