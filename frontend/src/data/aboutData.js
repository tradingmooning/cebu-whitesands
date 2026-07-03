// About Us — content map
// All imagery reused from existing local assets (activities, events, restaurants, home slides).

import hom1 from "../assets/slides/hom1.jpg";
import hom2 from "../assets/slides/hom2.jpg";
import hom3 from "../assets/slides/hom3.jpg";
import hom4 from "../assets/slides/hom4.jpg";
import hom5 from "../assets/slides/hom5.jpg";
import hom6 from "../assets/slides/hom6.jpg";
import hom7 from "../assets/slides/hom7.jpg";
import hom8 from "../assets/slides/hom8.jpg";

export const ABOUT_HERO_IMAGE = hom3;

export const ABOUT_HERO = {
  preTitle: "About Cebu Whitesand Resort",
  title: "Where luxury meets",
  titleAccent: "the white sands",
  body: "A premier beachfront destination in Cebu — where crystal-clear waters, pristine shores, and genuine Filipino hospitality create unforgettable escapes.",
};

// â”€â”€â”€ OUR STORY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const STORY = {
  preTitle: "Our Story",
  title: "A sanctuary",
  titleAccent: "on Cebu's shores.",
  paragraphs: [
    "Cebu Whitesand Resort is a premier beachfront retreat nestled along the pristine coastline of Cebu, Philippines — where crystal-clear waters and powdery white sands set the stage for extraordinary stays.",
    "Designed for travellers who seek beauty, comfort, and genuine warmth, every corner of the resort reflects a deep respect for nature and Filipino hospitality. From our thoughtfully appointed rooms to our beachfront dining and wellness offerings, we craft experiences that linger long after you leave.",
    "Whether you are celebrating a milestone, planning a corporate retreat, or simply escaping the everyday, Cebu Whitesand Resort is your home away from home on the shores of the Philippines.",
  ],
  image: hom1,
  imageCaption: "Cebu, Philippines · Premier beachfront resort",
};

// â”€â”€â”€ PROPERTIES â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const PROPERTIES = [
  {
    slug: "cebu-whitesand-resort",
    company: "Cebu Whitesand Resort",
    name: "Cebu Whitesand Resort — Beachfront Luxury",
    location: "Cebu · Philippines",
    description:
      "Set on the pristine shores of Cebu, Cebu Whitesand Resort offers thoughtfully designed rooms and suites overlooking crystal-clear waters. Complete with beachfront dining, a wellness spa, water activities, and genuine Filipino hospitality.",
    image: hom2,
    stats: [
      { value: "5★", label: "Experience" },
      { value: "1", label: "Beachfront Location" },
      { value: "∞", label: "Memories Made" },
    ],
  },
];
export const EXPERIENCES = [
  {
    title: "Luxury Suites",
    blurb:
      "Hotel rooms and private villas calibrated for quiet, light, and a view of the sea.",
    image: hom5,
    href: "/rooms",
  },
  {
    title: "Fine Dining",
    blurb:
      "Three dining venues — The Bistro, Morning Catch, and Haribar Lounge — offering fresh seafood, al fresco meals, and beach cocktails.",
    image: hom6,
    href: "/restaurants",
  },
  {
    title: "Recreation",
    blurb:
      "Watersports, kayaking, beach volleyball, and a pool overlooking the blue Cebu waters.",
    image: hom5,
    href: "/activities",
  },
  {
    title: "Wellness",
    blurb:
      "Our spa — body rituals, massage therapies, and quiet hours by the sea.",
    image: hom8,
    href: "/activities",
  },
  {
    title: "Entertainment",
    blurb:
      "Live music evenings, sunset cocktails, and beachside gatherings under the stars.",
    image: hom7,
    href: "/activities",
  },
  {
    title: "Events & Celebrations",
    blurb:
      "Beachfront and indoor venues for weddings, debuts, and milestone gatherings.",
    image:
      "/events/_hero/event-venues-page-website-header-announcement-1600-x-649-1.jpg",
    href: "/events",
  },
];

// â”€â”€â”€ RESORT HIGHLIGHTS (counter stats) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const HIGHLIGHTS = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 100, suffix: "+", label: "Luxury Suites & Villas" },
  { value: 8, suffix: "", label: "Event Venues" },
  { value: 8, suffix: "", label: "Restaurants & Bars" },
  { value: 65, suffix: " ha", label: "Cliffside Grounds" },
];

// â”€â”€â”€ WHY CHOOSE US â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const WHY_US = [
  {
    title: "World-Class Hospitality",
    blurb:
      "Warm, attentive service and genuine Filipino hospitality at every turn.",
  },
  {
    title: "Elegant Accommodations",
    blurb:
      "Thoughtfully designed rooms and suites with stunning views of the sea.",
  },
  {
    title: "Scenic Beachfront Location",
    blurb:
      "Crystal-clear waters and powdery white sands right at your doorstep in Cebu.",
  },
  {
    title: "Curated Experiences",
    blurb:
      "From spa wellness rituals to beachfront water activities, every hour is crafted for you.",
  },
  {
    title: "Premium Service",
    blurb:
      "A concierge culture that anticipates every need and elevates every itinerary.",
  },
  {
    title: "A Place to Remember",
    blurb:
      "Anchored in the beauty of the Philippine coastline, crafted for memories that last.",
  },
];

// â”€â”€â”€ GALLERY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const GALLERY = [
  hom1,
  "/activities/scenery/urban-lights/026A0533-low-res.jpg",
  hom7,
  "/restaurants/_hero/restaurants-page-website-header-announcement-1600-x-649-1.jpg",
  "/activities/water/fira-infinity-pool/slider-image1.jpg",
  hom2,
  "/activities/scenery/saint-pio-chapel/chapel-low-res.jpg",
  "/events/_hero/events-occassions-page-website-header-announcement-1600-x-649-1.jpg",
  hom8,
  "/activities/scenery/led-roses/viber_image_2019-11-12_15-42-26.jpg",
  "/activities/water/main-pool/poro-beachclubgarden.jpg",
  hom6,
];

// â”€â”€â”€ TESTIMONIALS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const TESTIMONIALS = [
  {
    quote:
      "A genuinely relaxing beachfront escape. The rooms are beautiful and the service was warm at every turn — a true gem of Cebu.",
    name: "Maria Reyes",
    role: "Guest · Manila",
  },
  {
    quote:
      "We celebrated our anniversary at Cebu Whitesand Resort. The beachfront setting, the warm staff, the food — every moment was exactly as we had imagined.",
    name: "Jonathan & Angela Lim",
    role: "Anniversary · Cebu",
  },
  {
    quote:
      "The infinity pool is unreal. White stone, blue water, and a horizon that seems to go forever. We extended our stay by two nights.",
    name: "Daniel Cruz",
    role: "Guest · Cebu",
  },
];

// silence unused import warnings if any
export const _all = [hom1, hom2, hom3, hom4, hom5, hom6, hom7, hom8];
