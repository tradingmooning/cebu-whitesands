// Events & Meetings — Cebu Whitesand Resort
// All images from https://cebu-whitesand-resort.com (with permission)

const CDN = "https://homesweb.staah.net";

export const EVENTS_HERO_IMAGE = `${CDN}/8689/1703322544_8689_WEBSITEEVENTS.jpg`;

export const EVENTS_INTRO = {
  preTitle: "Celebrate With Us",
  title: "Celebrate with us",
  body: "Cebu Whitesand Resort offers exceptional venues for weddings, corporate meetings, debut celebrations, and special events on the scenic shores of Mactan Island, Cebu.",
};

export const EVENTS_STATS = [
  { value: "1995", label: "Est." },
  { value: "86", label: "Guest Rooms" },
  { value: "Beach", label: "Wedding Setting" },
  { value: "Mactan", label: "Island Venue" },
];

export const EVENT_VENUES = [
  {
    slug: "weddings-and-celebrations",
    name: "Weddings & Celebrations",
    tagline: "Your dream beachfront wedding",
    description:
      'Say "I do" with the blue waters of Mactan Island as your backdrop. Our dedicated events team will handle every detail to make your wedding or debut celebration truly unforgettable.',
    area: "Beachfront & Indoor Venues",
    capacity: { banquet: 300, cocktails: 500 },
    images: [
      `${CDN}/8689/1704421110_8689_9.jpg`,
      `${CDN}/8689/1703322544_8689_WEBSITEEVENTS.jpg`,
    ],
  },
  {
    slug: "meetings-and-corporate",
    name: "Meetings & Corporate",
    tagline: "Productive meetings in a tropical setting",
    description:
      "Host your next corporate meeting, seminar, or team-building event at Cebu White Sands. Our fully equipped function rooms offer a professional environment with the added charm of Mactan Island.",
    area: "Function Rooms",
    capacity: { banquet: 100, theater: 150, classroom: 80 },
    images: [`${CDN}/8689/1709537026_8689_seminar.jpg`],
  },
];

export const EVENTS_BY_TYPE = EVENT_VENUES.reduce((acc, v) => {
  acc[v.slug] = v;
  return acc;
}, {});
