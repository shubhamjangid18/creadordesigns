import React from "react";
import { motion } from "framer-motion";

export default function PremiumMarqueeOnly() {
  const marqueeContent = [
    "Delivery in 4-6 business days",
    "100% custom design (no templates)",
    "Strategic content",
    "Creador Designs",
  ];

  return (
    <section className="relative overflow-hidden bg-black py-5 md:py-7">
      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        {/* First marquee */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 items-center gap-8 whitespace-nowrap md:gap-12"
        >
          {marqueeContent.map((item, index) => (
            <React.Fragment key={index}>
              <span className="inline-block text-lg font-light italic tracking-[-0.025em] text-white sm:text-xl md:text-2xl lg:text-3xl">
                {item}
              </span>

              {index < marqueeContent.length - 1 && (
                <span className="inline-block text-lg font-light text-white/40 sm:text-xl md:text-2xl lg:text-3xl">
                  ※
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Duplicate marquee for seamless loop */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 items-center gap-8 whitespace-nowrap md:gap-12"
        >
          {marqueeContent.map((item, index) => (
            <React.Fragment key={`duplicate-${index}`}>
              <span className="inline-block text-lg font-light italic tracking-[-0.025em] text-white sm:text-xl md:text-2xl lg:text-3xl">
                {item}
              </span>

              {index < marqueeContent.length - 1 && (
                <span className="inline-block text-lg font-light text-white/40 sm:text-xl md:text-2xl lg:text-3xl">
                  ※
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Premium edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black via-black/80 to-transparent md:w-24" />

      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black via-black/80 to-transparent md:w-24" />
    </section>
  );
}