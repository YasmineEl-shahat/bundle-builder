
import { Product } from "@/types/bundle";
export const products: Product[]= [
  {
    id: "camera1",

    category: "cameras",

    title: "Wyze Cam v4",

    description: "The clearest Wyze Cam ever made. Learn More",

    price: 27.98,

    comparePrice: 35.98,

    badge: "Save 22%",

    variants: [
      {
        id: "black",
        label: "Black",
        image: "/images/cameras/v4/variants/black.webp",
      },
      {
        id: "white",
        label: "White",
        image: "/images/cameras/v4/variants/white.webp",
      },
      {
        id: "gray",
        label: "Gray",
        image: "/images/cameras/v4/variants/gray.webp",
      },
    ],
  },
];