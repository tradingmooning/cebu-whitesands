export const brand = {
  projectId: import.meta.env.VITE_PROJECT_ID || "cebu-whitesand-resort",
  projectName: import.meta.env.VITE_APP_NAME || "Cebu Whitesand Resort",
  displayName: import.meta.env.VITE_APP_NAME || "Cebu Whitesand Resort",
  homeDisplayName: "Cebu Whitesand Resort",
  shortName: "Whitesand Resort",
  initials: "CWR",
  tagline: "Where Crystal Waters Meet White Sands",
  domain: import.meta.env.VITE_DOMAIN || "cebu-whitesand-resort.com",
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:5000",
  email: "reservations@cebu-whitesand-resort.com",
  phone: "",
  address:
    "Maribago Beach, Mactan Island, M.L. Quezon National Highway, Lapu-Lapu City, 6015 Cebu",
  addressShort: "Maribago Beach, Mactan Island, Cebu",
  facebookPageUrl: "",
  instagramUrl: "",
  socialHandle: "@cebuwhitesandresort",
  // Real logo from whitesands.com.ph
  logoUrl:
    "https://homesweb.staah.net/8689/1708086491_8689_1704416764_8689_websitelogo_copy.png",
  logoWhiteUrl:
    "https://homesweb.staah.net/8689/1708086491_8689_1704416764_8689_websitelogo_copy.png",
  cdnBase: "https://homesweb.staah.net",
  // Exact whitesands.com.ph palette — scraped via Playwright
  palette: {
    bg: "#ffffff", // page background
    surface: "#f5f5f5", // section bg (scraped)
    primary: "#333333", // heading color (scraped: rgb 51,51,51)
    brand: "#651D4C", // EXACT brand color (scraped: rgb 101,29,76)
    brandDark: "#4a1538",
    brandDeeper: "#2d0e22",
    gold: "#C9A96E",
    goldLight: "#dfc08e",
    champagne: "#f0dfc0",
    sand: "#ede0cc",
    ivory: "#faf7f2",
    charcoal: "#333333", // scraped
    bodyText: "#555555", // scraped: rgb 85,85,85
    deep: "#2d0e22",
    accent: "#651D4C",
    accentDark: "#4a1538",
  },
};
