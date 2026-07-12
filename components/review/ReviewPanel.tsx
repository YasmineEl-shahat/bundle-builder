"use client";

import { Separator } from "@/components/ui/separator";

import { useReview } from "@/hooks/useReview";

import ReviewSection from "./ReviewSection";
import PricingSummary from "./PricingSummary";

export default function ReviewPanel() {
  const { cameras, sensors, accessories, plans } = useReview();

  return (
    <aside className="bg-blue-100 rounded-xl py-4 px-3.5 h-fit">
      <span className="text-[12px] uppercase tracking-[2px] text-gray-c-650">
        Review
      </span>

      <h2 className="text-[22px] font-semibold text-gray-c-obsidian mt-6">
        Your security system
      </h2>

      <p className="mt-1 text-gray-c-900/75 text-sm">
        Review your personalized protection system designed to keep what matters
        most safe.
      </p>

      <Separator className="mt-2.5 mb-4" />

      <ReviewSection title="Cameras" items={cameras} />

      <Separator className="mt-5 mb-4" />

      <ReviewSection title="Sensors" items={sensors} />

      <Separator className="mt-5 mb-4" />

      <ReviewSection title="Accessories" items={accessories} />

      <Separator className="mt-5 mb-4" />

      <ReviewSection title="Plan" items={plans} />

      <Separator className="mt-5 mb-4" />

      <PricingSummary />
    </aside>
  );
}
