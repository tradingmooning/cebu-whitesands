export const brand = {
  projectId: import.meta.env.VITE_PROJECT_ID || "PROJ-XXXXXXXXX",
  projectName: import.meta.env.VITE_APP_NAME || "Your Resort Name",
  displayName: import.meta.env.VITE_APP_NAME || "Your Resort Name",
  homeDisplayName: import.meta.env.VITE_APP_NAME || "Your Resort Name",
  shortName: "Discovery Samal",
  initials: "DS",
  tagline: "Island Luxury Redefined",
  domain: import.meta.env.VITE_DOMAIN || "yourdomain.com",
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:5000",
  email: "reservations@discoverysamal.com",
  phone: "+63 084 308 2998",
  address: "Island Garden City of Samal, Davao del Norte, 8119, Philippines",
  facebookPageUrl: "https://www.facebook.com/discoverysamal",
  instagramUrl: "https://www.instagram.com/discoverysamal/",
  socialHandle: "@discoverysamal",
  logoUrl: "https://image-tc.galaxy.tf/wipng-7fdiodx62skf1s8iq9jghjsz6/discovery-samal-colour.png?width=500",
  logoWhiteUrl: "https://image-tc.galaxy.tf/wipng-788jbt3890mjhd3ndne0t39dn/discovery-samal-colour-reversal.png?width=500",
  cdnBase: "",
  // Brand palette — whitesands-inspired wine/maroon system
  palette: {
    bg:           "#ffffff", // clean white page background
    surface:      "#f8f4ef", // card / panel surface
    primary:      "#333333", // dark text, headers
    brand:        "#651D4C", // wine/maroon (CTAs, highlights)
    brandDark:    "#4a1538", // wine hover state
    brandDeeper:  "#2d0e22", // footer / very dark wine
    gold:         "#b8943c", // warm antique gold (accent)
    goldLight:    "#d4ae6e", // lighter gold
    champagne:    "#e4c47a", // champagne / highlight
    sand:         "#e8d9c8", // warm sand
    ivory:        "#faf6f0", // ivory
    charcoal:     "#333333", // heading text
    bodyText:     "#555555", // body text
    deep:         "#2d0e22", // deep wine (overlays, footer)
    // legacy aliases
    accent:       "#651D4C",
    accentDark:   "#4a1538",
  },
};
