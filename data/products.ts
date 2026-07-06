
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
  {
    id: "camera2",
    category: "cameras",
    title: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera. Learn More",
    price: 34.98,
    comparePrice: 39.98,
    badge: "Save 12%",
    variants: [
      {
        id: "white",
        label: "White",
        image: "/images/cameras/pan-v3/variants/white.webp",
      },
      {
        id: "black",
        label: "Black",
        image: "/images/cameras/pan-v3/variants/black.webp",
      },
    ],
  },
  {
    id: "camera3",
    category: "cameras",
    title: "Wyze Cam Floodlight v2",
    description: "2K floodlight camera with a 160° wide-angle view for your garage. Learn More",
    price: 69.98,
    comparePrice: 89.98,
    badge: "Save 22%",
    variants: [
      {
        id: "white",
        label: "White",
        image: "/images/cameras/floodlight-v2/variants/white.webp",
      },
      {
        id: "black",
        label: "Black",
        image: "/images/cameras/floodlight-v2/variants/black.webp",
      },
    ],
  },
  {
    id: "camera4",
    category: "cameras",
    title: "Wyze Duo Cam Doorbell",
    description: "Two cameras. Two views. Double the porch protection. Learn More",
    price: 69.98,
    variants: [
      {
        id: "default",
        label: "Default",
        image: "/images/cameras/duo-doorbell/variants/default.webp",
      },
    ],
  },
];