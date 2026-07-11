import { Camera, ShieldCheck, Radar, Plus } from "lucide-react";

import { Step } from "@/types/bundle";

export const steps: Step[] = [
  {
    id: "step-1",
    number: 1,
    title: "Choose your cameras",
    category: "cameras",
    nextLabel: "Choose your plan",
    icon: Camera,
  },
  {
    id: "step-2",
    number: 2,
    title: "Choose your plan",
    category: "plans",
    nextLabel: "Choose your sensors",
    icon: ShieldCheck,
  },
  {
    id: "step-3",
    number: 3,
    title: "Choose your sensors",
    category: "sensors",
    nextLabel: "Add extra protection",
    icon: Radar,
  },
  {
    id: "step-4",
    number: 4,
    title: "Add extra protection",
    category: "accessories",
    icon: Plus,
  },
];
