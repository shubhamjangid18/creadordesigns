import React from "react";
import { motion } from "framer-motion";

const audiences = [
  "Startups & New Businesses",
  "Established Companies",
  "Manufacturing & Industrial Brands",
  "Real Estate & Construction",
  "Technology & IT Companies",
  "Consulting & Professional Services",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Audience() {
  return (
    <section className="section relative bg-[#f3efe6]">
      <div className="container-main">
        {/* =====================================================
            GRID — right column (6 cards, 3 rows) is taller than
            the left heading, so the left column has room to stay
            pinned (sticky) while the page scrolls through it.
            NOTE: no "overflow-hidden" anywhere in this ancestor
            chain — that CSS property silently disables sticky.
        ====================================================== */}
        <div className="grid items-start gap-16 lg:grid-cols-[0.8fr_1.2fr]">

          {/* =====================================================
              LEFT — STICKY HEADING
          ====================================================== */}

          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow mb-5 tracking-[0.22em] text-black/50"
            >
              WHO IT'S FOR
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="display-title text-5xl md:text-7xl"
            >
              Built for businesses
              <span className="block font-normal italic">
                ready to look serious.
              </span>
            </motion.h2>
          </div>

          {/* =====================================================
              RIGHT — ANIMATED PREMIUM CARDS (this column scrolls
              normally; once it's fully scrolled past, the section
              ends and the left heading releases into normal flow
              for whatever comes next)
          ====================================================== */}

          <motion.div
            className="grid gap-5 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {audiences.map((item, index) => (
              <motion.div
                key={item}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-black/[0.07]
                  bg-[#faf8f3]
                  p-7
                  shadow-[0_6px_24px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-500
                  hover:border-black/[0.14]
                  hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
                "
              >
                {/* Soft glow that appears on hover */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-black/[0.035]
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Index number */}
                <span className="relative text-xs tracking-[0.08em] text-black/35">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3
                  className="
                    relative
                    mt-12
                    text-xl
                    font-semibold
                    tracking-[-0.01em]
                    text-black
                    transition-transform
                    duration-500
                    group-hover:translate-x-[2px]
                  "
                >
                  {item}
                </h3>

                {/* Underline that grows on hover */}
                <div className="relative mt-6 h-[2px] w-8 overflow-hidden bg-black/15">
                  <motion.div
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full bg-black"
                  />
                </div>

                {/* Arrow badge, fades in on hover */}
                <span
                  className="
                    pointer-events-none
                    absolute
                    right-6
                    top-6
                    flex
                    h-8
                    w-8
                    -translate-y-1
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-black/10
                    bg-white/70
                    text-[12px]
                    text-black/50
                    opacity-0
                    transition-all
                    duration-400
                    ease-out
                    group-hover:translate-y-0
                    group-hover:opacity-100
                  "
                >
                  ↗
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}