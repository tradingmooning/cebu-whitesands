import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Plane, Car, Clock, Mail, Phone } from "lucide-react";
import { brand } from "../lib/brand";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
});

const DIRECTIONS = [
  {
    icon: Plane,
    title: "From Mactan-Cebu International Airport",
    steps: [
      "Exit the terminal and proceed to the ground transport area.",
      "Take a pre-booked resort transfer, taxi, or ride-share to the resort.",
      "Travel time is approximately 20 minutes by car.",
    ],
  },
  {
    icon: Car,
    title: "From Cebu City",
    steps: [
      "Travel via M.L. Quezon National Highway towards Mactan Island.",
      "The resort is located on Maribago Beach, east coast of Mactan Island.",
      "Total travel time is approximately 40 minutes from historic Cebu City.",
    ],
  },
];

export default function Location() {
  useEffect(() => {
    document.title = `Location — ${brand.projectName}`;
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* ── HERO ── */}
      <section className="relative flex h-[55vh] min-h-[420px] items-end overflow-hidden bg-[#1a1a1a] pt-[78px] lg:pt-[118px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/80" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 lg:px-10 lg:pb-20">
          <motion.p
            {...fadeUp(0)}
            className="mb-3 text-[11px] font-medium tracking-[0.35em] uppercase text-[#C9A96E]"
          >
            How to Find Us
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-serif text-4xl font-light text-white md:text-5xl"
          >
            Location &amp; <em className="italic">Directions</em>
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/65"
          >
            Cebu Whitesand Resort is located on Maribago Beach, Mactan Island —
            just 20 minutes from Mactan-Cebu International Airport.
          </motion.p>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="mx-auto max-w-5xl px-6 py-14 lg:px-10">
        <motion.div
          {...fadeUp(0)}
          className="overflow-hidden border border-[#ddd5c8]"
        >
          <iframe
            title={`Map — ${brand.projectName}`}
            src="https://maps.google.com/maps?ll=10.28656,123.9989&z=19&t=m&hl=en-US&gl=US&mapclient=apiv3&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

      {/* ── ADDRESS + CHECK-IN CARDS ── */}
      <section className="mx-auto max-w-5xl px-6 pb-14 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            {...fadeUp(0)}
            className="border border-[#ddd5c8] bg-white p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <MapPin size={18} className="text-[#651D4C]" />
              <h2 className="font-serif text-xl font-light text-[#1a1a1a]">
                Our Address
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-[#555]">
              {brand.projectName}
              <br />
              Maribago Beach, Mactan Island
              <br />
              M.L. Quezon National Highway
              <br />
              Lapu-Lapu City, 6015 Cebu, Philippines
            </p>
            <div className="mt-5 space-y-2 text-[13.5px] text-[#555]">
              <p>
                <span className="text-[#888]">Trunkline:</span> {brand.phone}
              </p>
              <p>
                <span className="text-[#888]">Reservations:</span>{" "}
                {brand.mobileReservations}
              </p>
              <p>
                <span className="text-[#888]">Email:</span>{" "}
                <a
                  href={`mailto:${brand.email}`}
                  className="text-[#651D4C] hover:underline"
                >
                  {brand.email}
                </a>
              </p>
            </div>
            <a
              href="https://www.google.com/maps?ll=10.28656,123.9989&z=19"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 border-b border-[#651D4C] pb-0.5 text-[12px] tracking-[0.2em] uppercase text-[#651D4C] hover:opacity-70 transition"
            >
              Open in Google Maps
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.1)}
            className="border border-[#ddd5c8] bg-white p-8"
          >
            <div className="mb-5 flex items-center gap-3">
              <Clock size={18} className="text-[#651D4C]" />
              <h2 className="font-serif text-xl font-light text-[#1a1a1a]">
                Check-in / Check-out
              </h2>
            </div>
            <ul className="space-y-3 text-[14px] text-[#555]">
              <li className="flex justify-between border-b border-[#eee] pb-2">
                <span className="text-[#888]">Check-in</span>
                <span className="font-medium text-[#1a1a1a]">2:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-[#eee] pb-2">
                <span className="text-[#888]">Check-out</span>
                <span className="font-medium text-[#1a1a1a]">12:00 Noon</span>
              </li>
              <li className="flex justify-between border-b border-[#eee] pb-2">
                <span className="text-[#888]">Airport Distance</span>
                <span className="font-medium text-[#1a1a1a]">~20 minutes</span>
              </li>
              <li className="flex justify-between">
                <span className="text-[#888]">From Cebu City</span>
                <span className="font-medium text-[#1a1a1a]">~40 minutes</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── DIRECTIONS ── */}
      <section className="bg-[#f2ede7] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <motion.p
            {...fadeUp(0)}
            className="mb-2 text-[11px] font-medium tracking-[0.35em] uppercase text-[#651D4C]"
          >
            Getting Here
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-serif text-3xl font-light text-[#1a1a1a] mb-12"
          >
            Step-by-step directions
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2">
            {DIRECTIONS.map((d, i) => (
              <motion.div
                key={d.title}
                {...fadeUp(i * 0.1)}
                className="bg-white border border-[#ddd5c8] p-8"
              >
                <div className="mb-4 flex items-center gap-3">
                  <d.icon size={18} className="text-[#651D4C]" />
                  <h3 className="font-serif text-[17px] font-light text-[#1a1a1a]">
                    {d.title}
                  </h3>
                </div>
                <ol className="space-y-3">
                  {d.steps.map((step, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-[13.5px] leading-relaxed text-[#666]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f2ede7] text-[11px] font-semibold text-[#651D4C]">
                        {j + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
