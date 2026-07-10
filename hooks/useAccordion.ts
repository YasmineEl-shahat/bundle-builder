import { steps } from "@/data/steps";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveStep } from "@/store/slices/bundleSlice";

export function useAccordion() {
  const dispatch = useAppDispatch();

  const activeStep = useAppSelector((state) => state.bundle.activeStep);

  const changeStep = (stepId: string) => {
    dispatch(setActiveStep(stepId));
  };

  const nextStep = (currentStepNumber: number) => {
    const next = steps.find((step) => step.number === currentStepNumber + 1);

    if (next) {
      dispatch(setActiveStep(next.id));
    }
  };

  const currentStep = steps.find((step) => step.id === activeStep);

  return {
    activeStep,
    currentStep,
    changeStep,
    nextStep,
  };
}
