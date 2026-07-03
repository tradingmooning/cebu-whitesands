/**
 * SideSocialBar
 *
 * Fixed left-side vertical icon strip — exact clone of the whitesands.com.ph
 * side social bar.  Only Facebook and Email are shown (per user specification).
 * Colors scraped from the live site via Playwright.
 *
 *  Facebook  bg #3B5998 (Facebook brand blue)
 *  Email     bg #17a2b8 (info teal)
 */

import { brand } from "../../lib/brand";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export default function SideSocialBar({ email, facebookUrl }) {
  const resolvedEmail = email || brand.email;
  const resolvedFacebook = facebookUrl || brand.facebookPageUrl;

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-40 flex flex-col"
      aria-label="Social links"
    >
      {/* Facebook */}
      {resolvedFacebook && (
        <a
          href={resolvedFacebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={{ backgroundColor: "#3B5998" }}
          className="flex items-center justify-center w-[50px] h-[50px] text-white transition-opacity hover:opacity-85"
        >
          <FacebookIcon />
        </a>
      )}

      {/* Email */}
      <a
        href={`mailto:${resolvedEmail}`}
        aria-label="Email"
        style={{ backgroundColor: "#17a2b8" }}
        className="flex items-center justify-center w-[50px] h-[50px] text-white transition-opacity hover:opacity-85"
      >
        <EmailIcon />
      </a>
    </div>
  );
}
