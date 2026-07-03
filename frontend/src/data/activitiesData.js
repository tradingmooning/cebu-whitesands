// Activities & Recreation — Cebu Whitesand Resort
// All images from https://cebu-whitesand-resort.com (with permission)

const CDN = "https://homesweb.staah.net";

export const ACTIVITIES_HERO_IMAGE = `${CDN}/8689/1704599753_8689_jetski_a.jpg`;

export const ACTIVITIES_SECONDARY_HERO = `${CDN}/8689/1714188528_8689_aqua_b.jpg`;

export const ACTIVITIES_INTRO = {
  preTitle: "Activities & Recreation",
  title: "Where leisure meets adventure",
  body: "Cebu Whitesand Resort offers its guests a complete recreation experience on the shores of Mactan Island. From thrilling water sports to serene island hopping, our activities are designed to make every moment of your stay extraordinary.",
};

export const ACTIVITIES_STATS = [
  { value: "86", label: "Guest Rooms" },
  { value: "2 ha", label: "Beachfront Grounds" },
  { value: "1995", label: "Est." },
  { value: "20 min", label: "From Airport" },
];

export const CATEGORIES = [
  { id: "water", label: "Water Sports", caption: "Thrill" },
  { id: "tours", label: "Island Tours", caption: "Explore" },
  { id: "wellness", label: "Spa & Wellness", caption: "Restore" },
  { id: "leisure", label: "Leisure", caption: "Unwind" },
];

export const ACTIVITIES = [
  {
    slug: "day-tour-escapade",
    name: "Day Tour Escapade",
    category: "tours",
    tagline: "Discover Mactan Island",
    description:
      "Experience the best of Mactan Island with our curated day tour package. Explore the surrounding waters, visit nearby attractions, and enjoy everything the island has to offer.",
    images: [`${CDN}/8689/1704425968_8689_activities-tour-005.jpg`],
  },
  {
    slug: "island-hopping",
    name: "Island Hopping",
    category: "tours",
    tagline: "Explore the islands",
    description:
      "Hop between pristine islands around Mactan aboard a traditional bangka boat. Snorkel in crystal-clear waters, walk on white sand sandbars, and discover hidden gems of the Cebu waters.",
    images: [`${CDN}/8689/1714188528_8689_aqua_b.jpg`],
  },
  {
    slug: "aqua-sports-recreation",
    name: "Aqua Sports & Recreation",
    category: "water",
    tagline: "Thrills on the water",
    description:
      "Get your adrenaline pumping with our full range of aqua sports activities — jet skiing, banana boat rides, kayaking, and more, all available right on our beachfront.",
    images: [
      `${CDN}/8689/1704426207_8689_ASR-IMG05.jpg`,
      `${CDN}/8689/1704599753_8689_jetski_a.jpg`,
    ],
  },
  {
    slug: "anahata-spa",
    name: "Anahata Spa",
    category: "wellness",
    tagline: "Restore body and soul",
    description:
      "Indulge in traditional Filipino healing rituals and contemporary wellness therapies at Anahata Spa. Choose from a full menu of massages, facials, and wellness journeys.",
    images: [
      `${CDN}/8689/1714188411_8689_anahata-spa_4.jpg`,
      `${CDN}/8689/1704932366_8689_Massage_(Opt_2).jpg`,
      `${CDN}/8689/1709536812_8689_anahata_3.jpg`,
    ],
  },
];

export const ACTIVITIES_BY_CATEGORY = ACTIVITIES.reduce((acc, a) => {
  const cat = a.category;
  if (!acc[cat]) acc[cat] = [];
  acc[cat].push(a);
  return acc;
}, {});
