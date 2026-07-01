import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { brand } from "../../lib/brand";

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer({ social = {} }) {
  const phone = social.phone || brand.phone;
  const contactEmail = social.email || brand.email;
  const facebookUrl = social.facebookUrl || brand.facebookPageUrl;

  return (
    <footer className="bg-[#212121] text-white">
      {/* Top wine accent line */}
      <div className="h-1 w-full bg-[#651D4C]" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-14 lg:grid-cols-4 lg:gap-16">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <img
                src={brand.logoWhiteUrl || brand.logoUrl}
                alt={brand.displayName}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-white/55">
              A premier beachfront retreat on Samal Island — where pristine shores, warm sea breezes, and genuine Filipino hospitality create your perfect island escape in Davao del Norte.
            </p>
            <ul className="mt-8 space-y-3.5 text-[13px] text-white/55">
              <li className="flex items-start gap-3">
                <MapPin size={13} className="mt-0.5 shrink-0 text-[#651D4C]" />
                <span>{brand.address}</span>
              </li>
              {phone && (
                <li className="flex items-center gap-3">
                  <Phone size={13} className="shrink-0 text-[#651D4C]" />
                  <a href={`tel:${phone}`} className="hover:text-white">{phone}</a>
                </li>
              )}
              <li className="flex items-center gap-3">
                <Mail size={13} className="shrink-0 text-[#651D4C]" />
                <a href={`mailto:${contactEmail}`} className="break-all hover:text-white">{contactEmail}</a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {facebookUrl && (
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/45 transition-colors hover:border-[#651D4C] hover:text-[#651D4C]"
                  aria-label="Facebook">
                  <FacebookIcon className="h-3.5 w-3.5" />
                </a>
              )}
              {brand.instagramUrl && (
                <a href={brand.instagramUrl} target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/45 transition-colors hover:border-[#651D4C] hover:text-[#651D4C]"
                  aria-label="Instagram">
                  <InstagramIcon className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h6 className="mb-6 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#651D4C]">Explore</h6>
            <ul className="space-y-3 text-[13px] text-white/55">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "Discover" },
                { to: "/rooms", label: "Villas & Suites" },
                { to: "/offers", label: "Offers" },
                { to: "/restaurants", label: "Dining" },
                { to: "/activities", label: "Activities" },
                { to: "/events", label: "Events" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="transition-colors hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Book Direct */}
          <div>
            <h6 className="mb-6 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#651D4C]">Book Direct</h6>
            <p className="text-[13px] leading-relaxed text-white/55">
              Save up to 50% when you book direct. Best rate guaranteed — no third-party fees.
            </p>
            <Link to="/booking"
              className="mt-6 inline-flex items-center justify-center border border-[#651D4C] px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#651D4C] transition-colors hover:bg-[#651D4C] hover:text-white">
              Book Now
            </Link>
            <div className="mt-10">
              <h6 className="mb-3 text-[9px] font-semibold uppercase tracking-[0.4em] text-[#651D4C]">Admin</h6>
              <Link to="/owner/login"
                className="text-[12px] text-white/30 transition-colors hover:text-white/60">
                Staff Login →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col items-center justify-between gap-4 pt-10 sm:flex-row">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/25">
            © {new Date().getFullYear()} {brand.displayName} · All rights reserved
          </p>
          <div className="flex items-center gap-5 text-[11px] uppercase tracking-[0.28em] text-white/25">
            <Link to="/about" className="hover:text-white/60">Privacy</Link>
            <span className="h-3 w-px bg-white/15" />
            <Link to="/contact" className="hover:text-white/60">Contact</Link>
            <span className="h-3 w-px bg-white/15" />
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group inline-flex items-center gap-2 hover:text-[#651D4C]" aria-label="Back to top">
              <ArrowUp size={12} className="transition-transform group-hover:-translate-y-0.5" />
              Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
