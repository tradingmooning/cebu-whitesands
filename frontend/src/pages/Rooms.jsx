import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { brand } from "../lib/brand";

const WS = "https://homesweb.staah.net";

const ROOMS = [
  { slug: "deluxe",               name: "Deluxe",               img: `${WS}/imagelibrary/big_1702967760_8689_heritagedeluxe1.jpg` },
  { slug: "grandluxe-room",       name: "Grandluxe Room",       img: `${WS}/imagelibrary/big_1702966945_8689_WhiteSandsResort2019119.jpg` },
  { slug: "premier-room",         name: "Premier Room",         img: `${WS}/imagelibrary/big_1702975136_8689_1.png` },
  { slug: "ocean-view-suite",     name: "Ocean View Suite",     img: `${WS}/imagelibrary/big_1705900556_8689_WhiteSandsResort201944.jpg` },
  { slug: "family-room",          name: "Family Room",          img: `${WS}/imagelibrary/big_1702975987_8689_WhiteSandsResort2019307.jpg` },
  { slug: "family-suite",         name: "Family Suite",         img: `${WS}/imagelibrary/big_1702976465_8689_untitled-23.jpg` },
  { slug: "panoramic-view-suite", name: "Panoramic View Suite", img: `${WS}/imagelibrary/big_1702977955_8689_WhiteSandsResort201933.jpg` },
  { slug: "grand-luxe-plus",      name: "Grand Luxe Plus",      img: `${WS}/imagelibrary/big_1732177969_8689_Mabuhaygrandluxeroom1.jpg` },
];

export default function Rooms() {
  return (
    <main className="pt-19">
      {/* Page header */}
      <section className="bg-white py-16 text-center lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h1 className="text-[13px] font-semibold uppercase tracking-[0.45em] text-[#333333]">
            Rooms
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-[#651D4C]" />
          <p className="mx-auto mt-6 max-w-xl px-6 text-[14px] leading-relaxed text-[#555555]">
            Choose from our selection of thoughtfully appointed rooms and suites,
            each crafted to deliver comfort, style and a sense of island sanctuary.
          </p>
        </motion.div>
      </section>

      {/* 3-column hover grid */}
      <section className="bg-white pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {ROOMS.map((r, i) => (
              <motion.article
                key={r.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                className="group relative aspect-square cursor-pointer overflow-hidden bg-gray-900"
              >
                <img
                  src={r.img}
                  alt={r.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/60" />
                {/* Name slides in from top */}
                <div className="absolute inset-x-0 top-0 -translate-y-full p-6 transition-all duration-500 group-hover:translate-y-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white">
                    {r.name}
                  </p>
                </div>
                {/* Buttons slide in from bottom */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-all duration-500 group-hover:translate-y-0">
                  <div className="flex items-center gap-5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                    <Link
                      to={`/rooms/${r.slug}`}
                      className="border-b border-white/50 pb-0.5 hover:border-white"
                    >
                      view room
                    </Link>
                    <span className="text-white/40">|</span>
                    <Link
                      to="/booking"
                      className="border-b border-white/50 pb-0.5 hover:border-white"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#651D4C] py-14 text-center text-white">
        <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-white/70">
          Best Rate Guaranteed
        </p>
        <h2 className="mt-4 text-2xl font-semibold uppercase tracking-wide lg:text-3xl">
          Reserve Your Room Today
        </h2>
        <div className="mx-auto mt-4 h-px w-16 bg-white/40" />
        <p className="mx-auto mt-6 max-w-md px-6 text-[13.5px] leading-relaxed text-white/75">
          Book direct with {brand.displayName} for the best available rate and
          exclusive benefits.
        </p>
        <Link
          to="/booking"
          className="mt-8 inline-flex items-center border border-white px-10 py-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-white transition-colors hover:bg-white hover:text-[#651D4C]"
        >
          Book Now
        </Link>
      </section>
    </main>
  );
}
