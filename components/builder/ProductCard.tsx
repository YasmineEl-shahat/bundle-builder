// badge

// image

// title

// description

// learn more

// variants

// price

// quantity stepper

// const currentVariant =
// activeVariants[product.id]

// const quantity =
// getQuantity(
//     product.id,
//     currentVariant
// )

"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { Button } from "@/components/ui/button";

import { Product } from "@/types/bundle";
import { useSelection } from "@/hooks/useSelection";

import QuantityStepper from "@/components/shared/QuantityStepper";
import VariantSelector from "./VariantSelector";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { activeVariants, changeVariant, increase, decrease, getQuantity } =
    useSelection();

  const selectedVariant =
    activeVariants[product.id] ?? product.variants?.[0]?.id;

  const quantity = getQuantity(product.id, selectedVariant);

  return (
    <Card
      className={`
        rounded-xl p-2.5 transition-all flex gap-5 
        ${quantity > 0 && "border border-primary-70"}
      `}
    >
      <div>
        {/* Badge */}
        {product.badge && (
          <Badge className="inline-flex rounded-full bg-primary text-white px-1.5 py-0.5 text-xs">
            {product.badge}
          </Badge>
        )}

        {/* Image */}
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={140}
        />
      </div>

      <div>
        {/* Title */}
        <h3 className="text-xl text-gray-c-900 font-semibold">
          {product.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs text-gray-c-900/70">
          {product.description}
          <Button className=" text-blue underline">Learn More</Button>
        </p>

        {/* Variants */}
        {product.variants && product.variants.length > 1 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            <VariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onSelect={(variantId) => changeVariant(product.id, variantId)}
            />
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">
          <QuantityStepper
            quantity={quantity}
            onIncrease={() => increase(product.id, selectedVariant)}
            onDecrease={() => decrease(product.id, selectedVariant)}
          />

          <div>
            {product.comparePrice && (
              <p className="line-through text-danger mb-1">
                ${product.comparePrice.toFixed(2)}
              </p>
            )}

            <p className="line-through text-gray-c-800">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
