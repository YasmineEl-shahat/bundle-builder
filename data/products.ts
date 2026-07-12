import { Product } from "@/types/bundle";

export const products: Product[] = [
  // ---------------- CAMERAS ----------------
  {
    id: "camera1",
    category: "cameras",
    title: "Wyze Cam v4",
    description: "The clearest Wyze Cam ever made.",
    image: "/images/cameras/v4/variants/white.webp",
    price: 27.98,
    comparePrice: 35.98,
    badge: "Save 22%",
    variants: [
      {
        id: "white",
        label: "White",
        image: "/images/cameras/v4/variants/white.webp",
      },
      {
        id: "gray",
        label: "Grey",
        image: "/images/cameras/v4/variants/gray.webp",
      },
      {
        id: "black",
        label: "Black",
        image: "/images/cameras/v4/variants/black.webp",
      },
    ],
  },

  {
    id: "camera2",
    category: "cameras",
    title: "Wyze Cam Pan v3",
    description: "360° pan and 180° tilt security camera.",
    image: "/images/cameras/pan-v3/variants/white.webp",
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
    description:
      "2K floodlight camera with a 160° wide-angle view for your garage.",
    image: "/images/cameras/floodlight-v2/variants/white.webp",
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
    description: "Two cameras. Two views. Double the porch protection.",
    image: "/images/cameras/duo-doorbell/variants/default.webp",
    price: 69.98,
  },

  // ---------------- PLAN ----------------

  {
    id: "plan1",
    category: "plans",
    title: "Cam Unlimited",
    description: "Unlimited cloud recording for all your cameras.",
    image: "/images/plans/cam-unlimited.webp",
    price: 9.99,
    comparePrice: 12.99,
  },

  {
    id: "plan2",
    category: "plans",
    title: "Cam Plus",
    description: "Smart AI detections and event video history.",
    image: "/images/plans/cam-unlimited.webp",
    price: 2.99,
    comparePrice: 4.99,
    badge: "Popular",
  },

  {
    id: "plan3",
    category: "plans",
    title: "Cam Plus Lite",
    description: "Essential cloud video events for a smaller setup.",
    image: "/images/plans/cam-unlimited.webp",
    price: 1.99,
    comparePrice: 2.99,
  },

  {
    id: "plan4",
    category: "plans",
    title: "Cam Protect",
    description: "Extended video retention and sharing features.",
    image: "/images/plans/cam-unlimited.webp",
    price: 4.99,
    comparePrice: 6.99,
  },

  // ---------------- SENSORS ----------------

  {
    id: "sensor1",
    category: "sensors",
    title: "Wyze Sense Motion Sensor",
    description: "Detect movement anywhere in your home.",
    image: "/images/sensors/motion-sensor.webp",
    price: 59.98,
  },

  {
    id: "sensor2",
    category: "sensors",
    title: "Wyze Sense Hub",
    description: "Required hub for Wyze Sense devices.",
    image: "/images/sensors/sense-hub.webp",
    price: 0,
    comparePrice: 29.92,
    required: true,
  },

  // ---------------- ACCESSORIES ----------------

  {
    id: "accessory1",
    category: "accessories",
    title: "Wyze MicroSD Card (256GB)",
    description: "Local continuous recording.",
    image: "/images/accessories/microsd-256.webp",
    price: 41.96,
  },
];
