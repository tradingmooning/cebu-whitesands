import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, Clock, Phone, Mail, ArrowRight } from "lucide-react";
import { brand } from "../lib/brand";

const CDN = "https://homesweb.staah.net";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
});

const SPA_SERVICES = [
  {
    name: "Massage",
    image: `${CDN}/8689/1704932366_8689_Massage_(Opt_2).jpg`,
    href: "/spa",
    description:
      "Traditional Filipino hilot and contemporary massage therapies to melt away tension and restore balance.",
  },
  {
    name: "Journeys",
    image: `${CDN}/8689/1709536812_8689_anahata_3.jpg`,
    href: "/spa",
    description:
      "Curated multi-treatment wellness journeys that combine massage, body rituals, and restoration.",
  },
  {
    name: "Facial",
    image: `${CDN}/8689/1704530295_8689_anahata-41_(1).jpg`,
    href: "/spa",
    description:
      "Revitalising facial treatments using quality botanicals, tailored to every skin type.",
  },
];

const TREATMENTS = [
  { name: "Filipino Hilot Massage", duration: "60 / 90 min" },
  { name: "Swedish Relaxation Massage", duration: "60 / 90 min" },
  { name: "Deep Tissue Therapy", duration: "60 / 90 min" },
  { name: "Couples Massage", duration: "90 min" },
  { name: "Wellness Journey", duration: "120 min" },
  { name: "Facial & Glow Treatment", duration: "60 min" },
  { name: "Foot Reflexology", duration: "45 min" },
  { name: "Body Scrub & Wrap", duration: "90 min" },
];

export default function Spa() {
  useEffect(() => {
    document.title = `Anahata Spa — ${brand.projectName}`;
  }, []);

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* ── HERO ── */}
      <section className="relative flex h-[85vh] min-h-[600px] items-end overflow-hidden bg-[#1a1a1a] pt-[78px] lg:pt-[118px]">
        <img
          src={`${CDN}/8689/1714188411_8689_anahata-spa_4.jpg`}
          alt="Anahata Spa"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/75" />
        <div className="relative z-10 mx-auto max-w-5xl px-6 pb-16 lg:px-10 lg:pb-24">
          <motion.p
            {...fadeUp(0)}
            className="mb-3 text-[11px] font-medium tracking-[0.35em] uppercase text-[#C9A96E]"
          >
            Spa &amp; Wellness
          </motion.p>
          <motion.h1
            {...fadeUp(0.1)}
            className="font-serif text-5xl font-light leading-tight text-white md:text-6xl lg:text-7xl"
          >
            Anahata Spa
          </motion.h1>
          <motion.p
            {...fadeUp(0.2)}
            className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/70"
          >
            Restore body and soul at Anahata Spa — a tranquil wellness sanctuary
            offering traditional Filipino healing rituals and contemporary
            therapies, steps from the shores of Mactan Island.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-8">
            <a
              href={`mailto:${brand.email}?subject=Anahata Spa Booking`}
              className="inline-flex items-center gap-2 border border-[#C9A96E] px-7 py-3 text-[12px] tracking-[0.2em] uppercase text-[#C9A96E] transition hover:bg-[#C9A96E] hover:text-[#1a1a1a]"
            >
              Book a Treatment <ArrowRight size={13} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <motion.p
          {...fadeUp(0)}
          className="mb-2 text-[11px] font-medium tracking-[0.35em] uppercase text-[#651D4C]"
        >
          Our Services
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          className="font-serif text-3xl font-light text-[#1a1a1a] md:text-4xl mb-12"
        >
          Massage, Journeys &amp; Facials
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {SPA_SERVICES.map((s, i) => (
            <motion.div
              key={s.name}
              {...fadeUp(i * 0.1)}
              className="group overflow-hidden border border-[#e8e0d5]"
            >
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-light text-[#1a1a1a] mb-2">
                  {s.name}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-[#666]">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── TREATMENT MENU ── */}
      <section className="bg-[#f2ede7] py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <motion.p
            {...fadeUp(0)}
            className="mb-2 text-[11px] font-medium tracking-[0.35em] uppercase text-[#651D4C]"
          >
            Treatment Menu
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-serif text-3xl font-light text-[#1a1a1a] md:text-4xl mb-10"
          >
            Treatments &amp; Rituals
          </motion.h2>
          <div className="divide-y divide-[#ddd5c8]">
            {TREATMENTS.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp(i * 0.05)}
                className="flex items-center justify-between py-4"
              >
                <span className="text-[15px] text-[#1a1a1a]">{t.name}</span>
                <span className="flex items-center gap-1.5 text-[12px] text-[#888]">
                  <Clock size={12} /> {t.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#2d0e22] py-20 text-center text-white">
        <motion.p
          {...fadeUp(0)}
          className="mb-3 text-[11px] tracking-[0.35em] uppercase text-[#C9A96E]"
        >
          Reserve Your Session
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          className="font-serif text-3xl font-light md:text-4xl"
        >
          Book your Anahata Spa treatment
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="mx-auto mt-4 max-w-md text-[14px] leading-relaxed text-white/60"
        >
          Contact our spa concierge to schedule your treatment. Advance booking
          is recommended.
        </motion.p>
        <motion.div
          {...fadeUp(0.3)}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <a
            href={`mailto:${brand.email}?subject=Anahata Spa Booking`}
            className="inline-flex items-center gap-2 border border-[#C9A96E] px-7 py-3 text-[12px] tracking-[0.2em] uppercase text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#2d0e22] transition"
          >
            <Mail size={13} /> Email the Spa
          </a>
          <a
            href={`tel:${brand.phone.replace(/[^+\d]/g, "")}`}
            className="inline-flex items-center gap-2 border border-white/20 px-7 py-3 text-[12px] tracking-[0.2em] uppercase text-white/70 hover:border-white hover:text-white transition"
          >
            <Phone size={13} /> {brand.phone}
          </a>
        </motion.div>
      </section>
    </div>
  );
}
