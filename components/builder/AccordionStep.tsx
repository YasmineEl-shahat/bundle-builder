"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface AccordionStepProps {
  value: string;
  stepNumber: number;
  title: string;
  icon: React.ReactNode;
  selectedCount: number;
  isOpen: boolean;
  nextButtonLabel?: string;
  onNext?: () => void;
  children: React.ReactNode;
}

export default function AccordionStep({
  value,
  stepNumber,
  title,
  icon,
  selectedCount,
  isOpen,
  nextButtonLabel,
  onNext,
  children,
}: AccordionStepProps) {
  return (
    <AccordionItem value={value} className="bg-blue-100 rounded-xl py-4 px-3.5">
      <AccordionTrigger className="hover:no-underline">
        <span className="text-[12px] uppercase tracking-[2px] text-gray-c-650 absolute">
          Step {stepNumber} of 4
        </span>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {icon}
            <h2 className="text-[22px] font-semibold text-gray-c-obsidian">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-1 absolute right-4 top-2">
            {isOpen && (
              <span className="text-sm font-medium text-primary">
                {selectedCount} selected
              </span>
            )}
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent>
        {children}

        {nextButtonLabel && (
          <div className="mt-4 flex justify-center">
            <Button
              variant="outline"
              className="rounded-xl border-primary px-6 py-1 text-lg font-semibold text-primary hover:bg-primary hover:text-white"
              onClick={onNext}
            >
              Next: {nextButtonLabel}
            </Button>
          </div>
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
