import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";

interface QuantityStepperProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  min?: number;
  max?: number;
}

export default function QuantityStepper({
  quantity,
  onIncrease,
  onDecrease,
  min = 0,
  max,
}: QuantityStepperProps) {
  const isMin = quantity <= min;
  const isMax = max !== undefined && quantity >= max;

  return (
    <div className="flex items-center gap-2.5">
      <Button
        type="button"
        variant="quantity"
        onClick={(event) => {
          event.stopPropagation();
          onDecrease();
        }}
        disabled={isMin}
      >
        <Minus size={16} />
      </Button>

      <span className="text-gray-c-obsidian">{quantity}</span>

      <Button
        type="button"
        variant="quantity"
        onClick={(event) => {
          event.stopPropagation();
          onIncrease();
        }}
        disabled={isMax}
      >
        <Plus size={16} />
      </Button>
    </div>
  );
}
