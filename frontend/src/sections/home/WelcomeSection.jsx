import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { brand } from "../../lib/brand";

const CDN = brand.cdnBase;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.8, ease: [0.22, 0.61, 0.36, 1] },
  }),
};

export default function WelcomeSection() {
  const CDN = "https://homesweb.staah.net";
  return (
    <section className="bg-warm-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Text + image two-col */}
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          {/* Left: text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="section-pre-title mb-5"
            >
              Maribago Beach, Mactan Island, Cebu
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-4xl leading-snug text-charcoal sm:text-5xl"
            >
              Welcome to Cebu Whitesand Resort
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-6 text-base leading-8 text-charcoal/65"
            >
              Cebu Whitesand Resort is a modest resort situated on the east coast of Mactan Island in Lapu-Lapu City, Cebu. The resort has 86 guest rooms spread across 3 main wings — each specially designed and furnished to suit any traveller's taste.
            </motion.p>
            <motion.p
              variants={fadeUp}
              custom={3}
              className="mt-4 text-base leading-8 text-charcoal/65"
            >
              Only 20 minutes by car from Mactan–Cebu International Airport, our 2-hectare property perfectly blends turn-of-the-century Philippine architecture with modern facilities. Open since 1995, we have grown into a favourite destination for locals and visitors alike.
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="mt-8">
              <Link to="/about" className="sv-btn-outline">
                About White Sands Resort
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: image grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="col-span-2 overflow-hidden">
              <img
                src={`${CDN}/8689/1704673021_8689_WhiteSands_Resort_2019_(184)_(2).jpg`}
                alt="Cebu White Sands Resort aerial view"
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={`${CDN}/imagelibrary/big_1702966945_8689_WhiteSandsResort2019119.jpg`}
                alt="Cebu White Sands Resort room"
                className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={`${CDN}/8689/1709537342_8689_patio_B.jpg`}
                alt="Patio Gavino Restaurant"
                className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
            </motion.p>
            <motion.div variants={fadeUp} custom={4} className="mt-8">
              <Link to="/about" className="sv-btn-outline">
                About Cebu Whitesand Resort
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: image grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
            className="grid grid-cols-2 gap-3"
          >
            <div className="col-span-2 overflow-hidden">
              <img
                src={`${CDN}/sundownersvillas01_qX9pJvj.jpg`}
                alt="Cebu Whitesand Resort aerial view"
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={`${CDN}/img_15.jpg`}
                alt="Cebu Whitesand Resort bedroom"
                className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={`${CDN}/Sunrise-Pavilion-1.jpg`}
                alt="Cebu Whitesand Resort dining"
                className="h-44 w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
