import { motion } from "framer-motion";

const CDN = "https://homesweb.staah.net";

const FEATURES = [
  {
    pre: "Located in",
    title: "Getting Here",
    body: "Cebu White Sands Resort is located on Maribago Beach, Mactan Island — just 20 minutes by car from Mactan–Cebu International Airport.",
    image: `${CDN}/8689/1704604730_8689_WHAT_WE_DO.jpg`,
    reverse: false,
  },
  {
    pre: "Anahata Spa",
    title: "Wellness & Relaxation",
    body: "Experience traditional Filipino hilot massages, body rituals, and rejuvenating facial treatments at our Anahata Spa.",
    image: `${CDN}/8689/1714188411_8689_anahata-spa_4.jpg`,
    reverse: true,
  },
  {
    pre: "Patio Gavino & Room 801",
    title: "Dining Experiences",
    body: "Savour fresh Filipino and international cuisine at Patio Gavino Restaurant or enjoy an intimate dinner at Room 801.",
    image: `${CDN}/8689/1706233575_8689_patio.jpg`,
    reverse: false,
  },
  {
    pre: "Activities & Recreation",
    title: "Island Adventures",
    body: "Jet skiing, island hopping, day tour escapades, and aqua sports — Mactan Island's waters await your discovery.",
    image: `${CDN}/8689/1704599753_8689_jetski_a.jpg`,
    reverse: true,
  },
  {
    pre: "Events & Celebrations",
    title: "Weddings & Corporate",
    body: "From intimate celebrations to grand corporate events, our beachfront venues on Mactan Island make every occasion unforgettable.",
    image: `${CDN}/8689/1704421110_8689_9.jpg`,
    reverse: false,
  },
  {
    pre: "Royal Koi Pond",
    title: "Resort Grounds",
    body: "Wander through our beautifully landscaped 2-hectare grounds and discover the serene Royal Koi Pond — a peaceful corner of our resort.",
    image: `${CDN}/8689/1704531295_8689_ROYAL_KOI_POND.jpg`,
    reverse: true,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export default function FeatureGridSection() {
  return (
    <section className="overflow-hidden bg-seafoam">
      {FEATURES.map((f) => (
        <div
          key={f.title}
          className={`grid min-h-[360px] md:grid-cols-2 ${f.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
        >
          {/* Image */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1 }}
          >
            <img
              src={f.image}
              alt={f.title}
              className="h-full min-h-[280px] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex flex-col justify-center px-10 py-14 lg:px-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeIn}
          >
            <p className="section-pre-title mb-4">{f.pre}</p>
            <h3 className="font-serif text-3xl text-charcoal sm:text-4xl">
              {f.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-charcoal/60">
              {f.body}
            </p>
          </motion.div>
        </div>
      ))}
    </section>
  );
}
