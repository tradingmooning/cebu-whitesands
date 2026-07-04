import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Tag } from "lucide-react";
import { getPromos } from "../services/api";
import { brand } from "../lib/brand";
import { fmtPhp, toUsd } from "../lib/currency";

const KEY = "cebu-whitesand-resort_promo_v3";
const FALLBACK_IMG =
  "https://homesweb.staah.net/imagelibrary/1705046481_8689_fullresearial1.jpg";

export default function PromoModal() {
  const [visible, setVisible] = useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem(KEY)) return;
    getPromos()
      .then((res) => {
        const data = res.data.data || res.data;
        if (!Array.isArray(data) || data.length === 0) return;
        setRooms(data.slice(0, 4));
        setTimeout(() => setVisible(true), 900);
      })
      .catch(() => {});
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(KEY, "1");
  };

  if (!visible || rooms.length === 0) return null;

  const promoLabel = rooms[0]?.discountLabel || "Limited-Time Offer";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/65" onClick={close} />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-[900px] overflow-hidden bg-white shadow-[0_32px_80px_rgba(0,0,0,0.45)]">
        {/* Close */}
        <button
          onClick={close}
          className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center bg-white/95 text-[#333] shadow hover:bg-white"
          aria-label="Close"
        >
          <X size={15} />
        </button>

        {/* Header */}
        <div className="bg-[#111111] px-8 py-7 text-center">
          <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-[#c19a3c]">
            {brand.shortName}
          </p>
          <h2 className="text-[22px] font-normal leading-tight text-white sm:text-[26px]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {promoLabel} — Exclusive Direct Rates
          </h2>
          <p className="mt-2 text-[12px] text-white/50">
            Book direct for the lowest guaranteed price. Limited availability.
          </p>
        </div>

        {/* Rooms grid */}
        <div
          className="flex gap-0 overflow-x-auto sm:grid"
          style={{ gridTemplateColumns: `repeat(${Math.min(rooms.length, 4)}, 1fr)` }}
        >
          {rooms.map((room) => {
            const pct =
              room.discountPrice && room.pricePerNight
                ? Math.round((1 - room.discountPrice / room.pricePerNight) * 100)
                : null;
            return (
              <Link
                key={room._id}
                to={`/rooms/${room.slug}`}
                onClick={close}
                className="group relative flex min-w-[220px] flex-col border-r border-white/10 bg-[#111111] transition-colors last:border-r-0 hover:bg-[#1a1a1a] sm:min-w-0"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={room.images?.[0] || FALLBACK_IMG}
                    alt={room.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {pct && (
                    <div className="absolute left-0 top-3 flex items-center gap-1 bg-[#c19a3c] px-3 py-1">
                      <Tag size={10} className="text-white" />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white">
                        {pct}% OFF
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col px-4 py-4">
                  <p className="mb-3 line-clamp-2 text-[11px] font-medium leading-snug text-white/90">
                    {room.name}
                  </p>
                  <div className="mt-auto">
                    {room.pricePerNight && room.discountPrice && (
                      <p className="text-[11px] text-white/35 line-through">
                        {fmtPhp(room.pricePerNight)}/night
                      </p>
                    )}
                    <p className="text-[16px] font-bold text-[#c19a3c]">
                      {fmtPhp(room.discountPrice || room.pricePerNight)}
                      <span className="ml-1 text-[10px] font-normal text-white/40">/night</span>
                    </p>
                    <p className="mt-0.5 text-[10px] text-white/35">
                      {toUsd(room.discountPrice || room.pricePerNight)} USD
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer CTAs */}
        <div className="flex items-center justify-between border-t border-white/10 bg-[#0d0d0d] px-8 py-5">
          <p className="text-[11px] text-white/30">
            Prices are per night · Taxes may apply
          </p>
          <div className="flex gap-3">
            <Link
              to="/rooms"
              onClick={close}
              className="px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#c19a3c] ring-1 ring-[#c19a3c]/40 transition-colors hover:ring-[#c19a3c]"
            >
              View All Rooms
            </Link>
            <Link
              to="/booking"
              onClick={close}
              className="bg-[#c19a3c] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#9b7a28]"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}