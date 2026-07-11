"use client";

import { Accordion } from "@/components/ui/accordion";

import { products } from "@/data/products";
import { steps } from "@/data/steps";

import ProductCard from "./ProductCard";
import AccordionStep from "./AccordionStep";

import { useAccordion } from "@/hooks/useAccordion";
import { useSelection } from "@/hooks/useSelection";

export default function BundleBuilder() {
  const { activeStep, changeStep, nextStep } = useAccordion();

  const { getSelectedCount } = useSelection();

  return (
    <Accordion
      value={[activeStep]}
      onValueChange={(values) => {
        changeStep(values[0]);
      }}
      className="space-y-3"
    >
      {steps.map((step) => (
        <AccordionStep
          key={step.id}
          value={step.id}
          stepNumber={step.number}
          title={step.title}
          icon={<step.icon className="h-6 w-6 text-gray-c-675" />}
          selectedCount={getSelectedCount(step.category)}
          isOpen={activeStep === step.id}
          nextButtonLabel={step.nextLabel}
          onNext={() => nextStep(step.number)}
        >
          <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-2">
            {products
              .filter((product) => product.category === step.category)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </AccordionStep>
      ))}
    </Accordion>
  );
}
