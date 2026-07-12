"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

import { useReview } from "@/hooks/useReview";
import { Badge } from "../ui/badge";
import SaveBundleLink from "./SaveBundleLink";

export default function PricingSummary() {
  const { compareTotal, savings, shipping, total } = useReview();

  return (
    <section>
      {/* Shipping */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/images/review/shipping.png"
            alt="Shipping"
            width={40}
            height={40}
          />

          <span className="text-sm text-gray-c-obsidian">Fast Shipping</span>
        </div>

        <div>
          <p className="text-sm text-gray-c-675 line-through">
            ${shipping.toFixed(2)}
          </p>

          <p className="text-sm font-semibold text-primary">FREE</p>
        </div>
      </div>

      {/* Guarantee + Financing + Total */}
      <div className="flex items-center justify-between gap-4 mt-2.5">
        <Image
          src="/images/review/satisfaction-badge.png"
          alt="Guarantee"
          width={78}
          height={78}
        />

        <div className="flex flex-col items-end gap-4">
          <Badge className="rounded-xs bg-primary px-2 py-1 text-xs text-white">
            as low as $19.19/mo
          </Badge>

          <div className="flex items-end gap-3">
            <span className="text-lg text-gray-c-675 line-through">
              ${compareTotal.toFixed(2)}
            </span>

            <span className="text-2xl font-bold leading-none text-primary">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Savings */}

      <p className="text-center text-xs font-semibold text-green mt-4">
        Congrats! You&apos;re saving ${savings.toFixed(2)} on your security
        bundle!
      </p>

      {/* Checkout */}

      <Button
        className="
          h-16
          w-full
          rounded-md
          text-white
          bg-primary
          text-lg
          font-semibold
          hover:bg-primary/90
        "
      >
        Checkout
      </Button>

      {/* Save */}
      <SaveBundleLink />
    </section>
  );
}
