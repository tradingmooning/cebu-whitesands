export const brand = {
  projectId: import.meta.env.VITE_PROJECT_ID || "PROJ-XXXXXXXXX",
  projectName: import.meta.env.VITE_APP_NAME || "Your Resort Name",
  displayName: import.meta.env.VITE_APP_NAME || "Your Resort Name",
  homeDisplayName: import.meta.env.VITE_APP_NAME || "Your Resort Name",
  shortName: "Your Resort",
  initials: "YR",
  tagline: "Your tagline here",
  domain: import.meta.env.VITE_DOMAIN || "yourdomain.com",
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:5000",
  email: "reservations@example.com",
  phone: "+1 000 000 0000",
  // Replace with your resort's physical address
  address: "Your Resort Address, City, Country",
  facebookPageUrl: "https://www.facebook.com/yourpage",
  socialHandle: "@yourresort",
  // Replace with your actual logo URLs
  logoUrl: "/images/logo.png",
  logoWhiteUrl: "/images/logo-white.png",
  cdnBase: "",
  // Brand palette — update to match your resort's brand colours
  palette: {
    bg: "#f7f7f5", // light background
    primary: "#111111", // dark (text + dark panels)
    accent: "#008c8c", // teal (CTAs, highlights)
    accentDark: "#006d6d", // darker teal (hover)
    deep: "#111111", // near-black (overlays, footer)
  },
};
