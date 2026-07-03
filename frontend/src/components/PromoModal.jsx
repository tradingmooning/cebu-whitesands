import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPromos } from "../services/api";
import { X, Tag } from "lucide-react";
import { brand } from "../lib/brand";

const STORAGE_KEY = "cebu-whitesand-resort_promo_dismissed";

const fmt = (n) => new Intl.NumberFormat("en-PH").format(n);

export default function PromoModal() {
  const [visible, setVisible] = useState(false);
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;

    getPromos()
      .then((res) => {
        const rooms = res.data.data || res.data;
        if (!Array.isArray(rooms) || rooms.length === 0) return;
        const grouped = {};
        rooms.forEach((room) => {
          const label = room.discountLabel || "Special Offer";
          if (!grouped[label]) grouped[label] = [];
          grouped[label].push(room);
        });
        const events = Object.entries(grouped).map(([label, items]) => ({ label, rooms: items }));
        setPromos(events);
        setTimeout(() => setVisible(true), 800);
      })
      .catch(() => {});
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!visible || promos.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" onClick={close} />

      {/* Modal — whitesands.com.ph inspired clean design */}
      <div className="relative w-full max-w-md bg-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-300">
        {/* Accent line top */}
        <div className="h-1 w-full bg-[#651D4C]" />

        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center text-gray-400 hover:text-[#651D4C] transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="bg-white px-8 py-7 text-center border-b border-gray-100">
          <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-[#651D4C] mb-2">
            {brand.displayName}
          </p>
          <h2 className="text-[20px] font-semibold uppercase tracking-[0.2em] text-[#333333]">
            Special Offers
          </h2>
          <div className="mx-auto mt-3 h-px w-12 bg-[#651D4C]" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-[#f5f5f5]">
          {promos.map((event) => (
            <div key={event.label}>
              <div className="flex items-center gap-2 mb-4">
                <Tag size={13} className="text-[#651D4C]" />
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#651D4C]">
                  {event.label}
                </h3>
              </div>
              <div className="space-y-3">
                {event.rooms.map((room) => {
                  const hasDiscount = room.discountPrice && room.discountPrice < room.pricePerNight;
                  return (
                    <div key={room._id} className="bg-white flex gap-4 p-4 shadow-sm">
                      {room.images?.[0] && (
                        <img
                          src={room.images[0]}
                          alt={room.name}
                          className="w-20 h-20 object-cover shrink-0"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#333333] mb-1 truncate">
                          {room.name}
                        </p>
                        <div className="flex items-baseline gap-2">
                          {hasDiscount && (
                            <span className="text-[11px] text-gray-400 line-through">
                              ₱{fmt(room.pricePerNight)}
                            </span>
                          )}
                          <span className="text-[16px] font-bold text-[#651D4C]">
                            ₱{fmt(hasDiscount ? room.discountPrice : room.pricePerNight)}
                          </span>
                          <span className="text-[10px] text-gray-400">/ night</span>
                        </div>
                        {hasDiscount && (
                          <span className="inline-block mt-1 bg-[#651D4C] text-white text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5">
                            {Math.round(((room.pricePerNight - room.discountPrice) / room.pricePerNight) * 100)}% OFF
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="px-6 py-5 bg-white border-t border-gray-100 text-center">
          <Link
            to="/rooms"
            onClick={close}
            className="inline-block w-full bg-[#651D4C] py-3.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[#4a1538]"
          >
            View All Rooms
          </Link>
          <button
            onClick={close}
            className="mt-3 text-[10px] uppercase tracking-widest text-gray-400 hover:text-gray-600"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}