"use client";

import Image from "next/image";

import QuantityStepper from "../shared/QuantityStepper";

import { ReviewItem as ReviewItemType } from "@/types/bundle";
import { useSelection } from "@/hooks/useSelection";

interface Props {
  item: ReviewItemType;
}

export default function ReviewItem({ item }: Props) {
  const { increase, decrease } = useSelection();

  return (
    <div className="flex items-center gap-3 ">
      <Image
        src={item.image}
        alt={item.title}
        width={40}
        height={40}
        className="rounded-lg bg-white"
      />

      <div className="flex-1">
        <p className="text-sm text-gray-c-obsidian leading-tight">
          {item.title}
        </p>

        {item.variantLabel && (
          <p className="text-xs text-gray-c-700">{item.variantLabel}</p>
        )}
      </div>

      <QuantityStepper
        quantity={item.quantity}
        onIncrease={() => increase(item.productId, item.variantId)}
        onDecrease={() => decrease(item.productId, item.variantId)}
      />

      <div className="flex flex-col items-end gap-1">
        {item.comparePrice && (
          <p className="text-gray-c-675 line-through text-sm">
            ${(item.comparePrice * item.quantity).toFixed(2)}
          </p>
        )}

        <p className="font-semibold text-primary text-sm">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
