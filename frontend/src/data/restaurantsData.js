/* ------------------------------------------------------------------ */
/*  Cebu Whitesand Resort — Dining                          */
/*  Images from https://cebu-whitesand-resort.com (with permission)           */
/* ------------------------------------------------------------------ */

const CDN = "https://homesweb.staah.net";

export const RESTAURANTS_HERO_IMAGE = `${CDN}/8689/1706233575_8689_patio.jpg`;

export const RESTAURANTS_INTRO = `Enjoy fresh Filipino and international cuisine at Cebu White Sands Resort's dining venues — Patio Gavino Restaurant and Room 801 — each offering a distinct atmosphere on the shores of Mactan Island.`;

export const DINING_STATS = [
  { value: "2", label: "Venues" },
  { value: "All-Day", label: "Dining" },
  { value: "Fresh", label: "Seafood" },
  { value: "Mactan", label: "Island" },
];

export const RESTAURANTS = [
  {
    slug: "patio-gavino-restaurant",
    name: "Patio Gavino Restaurant",
    cuisine: "All-Day Dining • Filipino & International",
    atmosphere: "Beachside • Casual",
    tagline: "Fresh flavours on Maribago Beach",
    description:
      "Patio Gavino Restaurant is the resort's main dining venue, offering a relaxed beachside setting with a menu of fresh Filipino favorites and international selections. Whether you're starting the day with breakfast or ending it with a sunset dinner, Patio Gavino has the perfect dish.",
    highlights: [
      "All-day dining",
      "Fresh Filipino and international cuisine",
      "Beachside al fresco seating",
      "Family-friendly atmosphere",
    ],
    hours: "Open All Day",
    location: "Maribago Beach, Ground Floor",
    images: [
      `${CDN}/8689/1706233575_8689_patio.jpg`,
      `${CDN}/8689/1709537342_8689_patio_B.jpg`,
    ],
  },
  {
    slug: "room-801",
    name: "Room 801",
    cuisine: "Fine Dining • Special Occasions",
    atmosphere: "Intimate • Elegant",
    tagline: "An intimate dining experience",
    description:
      "Room 801 offers an intimate and elegant dining experience perfect for special occasions, romantic dinners, or simply a more refined evening at the resort. With a curated menu and a warm, private ambiance, Room 801 is a memorable dining destination on Mactan Island.",
    highlights: [
      "Intimate setting for special occasions",
      "Curated menu",
      "Elegant ambiance",
      "Ideal for romantic dinners",
    ],
    hours: "Dinner Service",
    location: "Maribago Beach",
    images: [
      `${CDN}/8689/1714190347_8689_VALENTINES_RESTO.jpg`,
      `${CDN}/8689/1709537342_8689_patio_B.jpg`,
    ],
  },
];
