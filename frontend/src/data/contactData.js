// Contact Us — content map for Cebu Whitesand Resort.
// Brand identity comes from `frontend/src/lib/brand.js`.

import { brand } from "../lib/brand";

const CDN = "https://homesweb.staah.net";

export const CONTACT_HERO_IMAGE = `${CDN}/8689/1704432091_8689_WhiteSands_Resort_2019_(140)_(2).jpg`;
export const CONCIERGE_IMAGE = `${CDN}/8689/1704673021_8689_WhiteSands_Resort_2019_(184)_(2).jpg`;
export const LOCATION_IMAGE = `${CDN}/8689/1704604730_8689_WHAT_WE_DO.jpg`;
export const SOCIAL_PREVIEW_IMAGES = [
  `${CDN}/imagelibrary/1705044784_8689_IMG_1655.jpg`,
  `${CDN}/imagelibrary/big_1705900556_8689_WhiteSandsResort201944.jpg`,
  `${CDN}/8689/1706233575_8689_patio.jpg`,
  `${CDN}/8689/1703322544_8689_WEBSITEEVENTS.jpg`,
  `${CDN}/8689/1704599753_8689_jetski_a.jpg`,
  `${CDN}/8689/1714188411_8689_anahata-spa_4.jpg`,
];

export const CONTACT_HERO = {
  preTitle: "Get in Touch",
  title: "Let's plan your",
  titleAccent: "Cebu escape",
  body: "Our reservations team is ready to help you plan the perfect stay at Maribago Beach, Mactan Island. We respond within one business day.",
};

export const WELCOME = {
  preTitle: "A Warm Welcome",
  title: "Hospitality, attentive",
  titleAccent: "to the smallest detail",
  body: "Whether you are planning a family vacation, a romantic getaway, a corporate retreat, or a beachfront wedding — our team is here to help. Reach us through the channels below.",
};

export const INQUIRY_TYPES = [
  "Hotel Reservation",
  "Dining Reservation",
  "Weddings & Celebrations",
  "Meetings & Corporate Events",
  "Anahata Spa",
  "Island Activities",
  "Day Tour Escapade",
  "General Inquiry",
];

export const TITLES = ["Mr.", "Ms.", "Mrs.", "Dr.", "Prefer not to say"];

export const COUNTRIES = [
  "Philippines",
  "Australia",
  "Canada",
  "China",
  "France",
  "Germany",
  "Hong Kong",
  "India",
  "Indonesia",
  "Italy",
  "Japan",
  "Malaysia",
  "Netherlands",
  "New Zealand",
  "Singapore",
  "South Korea",
  "Spain",
  "Switzerland",
  "Taiwan",
  "Thailand",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Vietnam",
  "Other",
];

export const GUEST_OPTIONS = [
  "1 Guest",
  "2 Guests",
  "3 Guests",
  "4 Guests",
  "5+ Guests",
];

// â”€â”€â”€ CONTACT CHANNELS (concierge cards) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
const PRIMARY_EMAIL = brand.email;
const PHONE = brand.phone;
const PHONE_HREF = `tel:${(brand.phone || "").replace(/\s/g, "")}`;

export const CONTACT_CHANNELS = [
  {
    id: "reservations",
    iconKey: "phone",
    title: "Reservations Hotline",
    blurb:
      "Available daily · 24/7 concierge support for bookings and guest requests.",
    items: [
      { label: "Phone", value: PHONE, href: PHONE_HREF },
      { label: "Mobile", value: PHONE, href: PHONE_HREF },
    ],
  },
  {
    id: "email",
    iconKey: "mail",
    title: "Email Concierge",
    blurb:
      "Send us your inquiry and our reservations desk will respond within one business day.",
    items: [
      { label: "Email", value: PRIMARY_EMAIL, href: `mailto:${PRIMARY_EMAIL}` },
    ],
  },
  {
    id: "events",
    iconKey: "sparkles",
    title: "Events & Celebrations",
    blurb:
      "Weddings, debuts, conferences and milestone gatherings on the shores of Cebu, Philippines.",
    items: [
      { label: "Email", value: PRIMARY_EMAIL, href: `mailto:${PRIMARY_EMAIL}` },
    ],
  },
  {
    id: "vip",
    iconKey: "crown",
    title: "VIP Guest Services",
    blurb:
      "Premium concierge assistance — itineraries, transfers, exclusive island experiences.",
    items: [
      { label: "Email", value: PRIMARY_EMAIL, href: `mailto:${PRIMARY_EMAIL}` },
    ],
  },
];

// â”€â”€â”€ LOCATION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const LOCATIONS = [
  {
    id: "cebu-white-sands",
    name: brand.displayName,
    addressLines: [
      "Maribago Beach, Mactan Island",
      "M.L. Quezon National Highway",
      "Lapu-Lapu City, 6015 Cebu",
    ],
    email: brand.email,
    phone: brand.phone,
    landmarks: [
      "Maribago Beach, east coast of Mactan Island",
      "20 minutes from Mactan–Cebu International Airport",
      "40 minutes from historic Cebu City",
      "Private family-owned resort since 1995",
    ],
    image: LOCATION_IMAGE,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925!2d123.9989!3d10.28656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9994c68b3c3e9%3A0x0!2sCebu+White+Sands+Resort!5e0!3m2!1sen!2sph!4v1700000000000",
    mapLink: "https://www.google.com/maps?ll=10.28656,123.9989&z=19",
  },
];

// â”€â”€â”€ CONCIERGE PROMISE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
export const CONCIERGE = {
  preTitle: "Reservations",
  title: "From arrival to farewell,",
  titleAccent: "every detail attended to",
  body: "Our team is here to make your stay at Cebu White Sands Resort effortless — from airport transfers to dining reservations and island activity bookings.",
  bullets: [
    "20 min from Mactan-Cebu International Airport",
    "Assistance with island activity bookings",
    "Dining and Anahata Spa reservations",
    "Corporate and events coordination",
  ],
};

export const FAQ = [
  {
    q: "How far is the resort from Mactan-Cebu International Airport?",
    a: "Cebu White Sands Resort is only 20 minutes by car from Mactan-Cebu International Airport, and 40 minutes from historic Cebu City.",
  },
  {
    q: "What are your check-in and check-out times?",
    a: "Standard check-in is from 2:00 PM and check-out is until 12:00 noon. Early check-in and late check-out can be arranged on request, subject to availability.",
  },
  {
    q: "How many rooms does the resort have?",
    a: "Cebu White Sands Resort has 86 guest rooms spread across 3 main wings, each designed to suit any traveller's taste.",
  },
  {
    q: "What activities are available at the resort?",
    a: "We offer jet skiing, island hopping, day tour escapades, and aqua sports. Our Anahata Spa also offers massage, facial, and wellness journey treatments.",
  },
  {
    q: "Do you offer event and wedding packages?",
    a: "Yes — we have beautiful beachfront and indoor venues for weddings, debuts, corporate meetings, and seminars. Contact our events team at sales@cebu-whitesand-resort.com.",
  },
  {
    q: "What dining options are available?",
    a: "The resort has two dining venues: Patio Gavino Restaurant for casual beachside dining, and Room 801 for a more intimate dining experience.",
  },
];

export const SOCIAL = [
  {
    name: "Facebook",
    handle: "@cebuwhitesandsresortandspa",
    href: "http://www.facebook.com/cebuwhitesandsresortandspa/",
  },
  {
    name: "Instagram",
    handle: "@cebuwhitesands",
    href: "https://www.instagram.com/cebuwhitesands/",
  },
];
