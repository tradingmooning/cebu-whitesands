import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Maximize2, BedDouble, Loader2 } from "lucide-react";
import { useRooms } from "../hooks/useRooms";
import { brand } from "../lib/brand";

const fmt = (n) => new Intl.NumberFormat("en-PH").format(n);

function RoomCard({ room, index }) {
  const price = room.discountPrice || room.effectivePricePerNight || room.pricePerNight || 0;
  const originalPrice = room.originalPricePerNight || room.pricePerNight || 0;
  const hasDiscount = price < originalPrice && originalPrice > 0;
  const slug = room.slug;
  const img = room.images?.[0];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.75, delay: index * 0.08 }}
      className="bg-white border border-gray-100 overflow-hidden group"
    >
      {/* Image */}
      <Link to={"/rooms/" + slug} className="block relative overflow-hidden aspect-[4/3]">
        {img ? (
          <img
            src={img}
            alt={room.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-200" />
        )}
        <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
      </Link>

      {/* Info */}
      <div className="p-6 lg:p-8">
        {/* Name + price row */}
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[14px] font-semibold uppercase tracking-[0.25em] text-[#333333]">
            {room.name}
          </h3>
          <div className="shrink-0 text-right">
            <p className="text-[11px] text-[#999] uppercase tracking-widest">From</p>
            <p className="text-[18px] font-bold text-[#651D4C] leading-none">
              ₱{fmt(price)}
            </p>
            <p className="text-[10px] text-[#999]">/ night</p>
          </div>
        </div>

        {/* Specs row */}
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px] text-[#777] uppercase tracking-widest">
          {room.bedType && <span className="flex items-center gap-1.5"><BedDouble size={12} className="text-[#651D4C]" />{room.bedType}</span>}
          {room.size && <span className="flex items-center gap-1.5"><Maximize2 size={12} className="text-[#651D4C]" />{room.size}</span>}
          {(room.maxGuests || room.capacity) && <span className="flex items-center gap-1.5"><Users size={12} className="text-[#651D4C]" />Max {room.maxGuests || room.capacity} guests</span>}
        </div>

        {/* Divider */}
        <div className="mt-5 h-px bg-gray-100" />

        {/* Buttons */}
        <div className="mt-5 flex gap-3">
          <Link
            to={"/rooms/" + slug}
            className="flex-1 text-center border border-[#651D4C] py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#651D4C] transition-colors hover:bg-[#651D4C] hover:text-white"
          >
            View Room
          </Link>
          <Link
            to={"/booking" + (room._id ? "?room=" + room._id : "")}
            className="flex-1 text-center bg-[#651D4C] py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white transition-colors hover:bg-[#4a1538]"
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function Rooms() {
  const { data: rooms = [], isLoading, isError } = useRooms({ available: true });

  return (
    <main className="pt-19">
      {/* Header */}
      <section className="bg-white py-16 text-center lg:py-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <h1 className="text-[13px] font-semibold uppercase tracking-[0.45em] text-[#333333]">Rooms</h1>
          <div className="mx-auto mt-4 h-px w-16 bg-[#651D4C]" />
          <p className="mx-auto mt-6 max-w-xl px-6 text-[14px] leading-relaxed text-[#555555]">
            Choose from our selection of thoughtfully appointed rooms and suites, each crafted to deliver comfort, style, and a sense of island sanctuary on Mactan Island, Cebu.
          </p>
        </motion.div>
      </section>

      {/* Cards grid */}
      <section className="bg-[#f5f5f5] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {isLoading ? (
            <div className="flex items-center justify-center py-24 gap-3 text-[#651D4C]">
              <Loader2 size={20} className="animate-spin" />
              <span className="text-[12px] uppercase tracking-widest">Loading rooms…</span>
            </div>
          ) : isError ? (
            <div className="text-center py-24">
              <p className="text-red-500 font-medium">Unable to load rooms. Please ensure the server is running on port 5001.</p>
            </div>
          ) : rooms.length === 0 ? (
            <p className="text-center py-24 text-[#555]">No rooms available at this time.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rooms.map((room, i) => (
                <RoomCard key={room._id || room.slug} room={room} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-[#651D4C] py-14 text-center text-white">
        <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-white/70">Best Rate Guaranteed</p>
        <h2 className="mt-4 text-2xl font-semibold uppercase tracking-wide lg:text-3xl">Reserve Your Room Today</h2>
        <div className="mx-auto mt-4 h-px w-16 bg-white/40" />
        <p className="mx-auto mt-6 max-w-md px-6 text-[13.5px] leading-relaxed text-white/75">
          Book direct with {brand.displayName} for the best available rate and exclusive benefits.
        </p>
        <Link to="/booking" className="mt-8 inline-flex items-center border border-white px-10 py-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-white transition-colors hover:bg-white hover:text-[#651D4C]">
          Book Now
        </Link>
      </section>
    </main>
  );
}