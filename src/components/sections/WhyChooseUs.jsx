import React from "react";
import { motion } from "framer-motion";

export default function WhatWeDeliver() {
  const deliverables = [
    "Custom-Designed Brand Identities & Logo Systems",
    "Pixel-Perfect Website Design & Full-Stack Development",
    "Responsive Web Templates & UI/UX Components",
    "Enterprise-Grade Web Applications & Solutions",
  ];

  const features = [
    {
      title: "Strategically Structured",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="12" width="22" height="9" stroke="currentColor" strokeWidth="2.5" />
          <rect x="36" y="5" width="18" height="9" stroke="currentColor" strokeWidth="2.5" />
          <rect x="36" y="18" width="18" height="9" stroke="currentColor" strokeWidth="2.5" />
          <rect x="10" y="29" width="22" height="9" stroke="currentColor" strokeWidth="2.5" />
          <path d="M21 21V29" stroke="currentColor" strokeWidth="2.5" />
          <path d="M32 16H36" stroke="currentColor" strokeWidth="2.5" />
          <path d="M45 27V37" stroke="currentColor" strokeWidth="2.5" />
          <path d="M21 38V45" stroke="currentColor" strokeWidth="2.5" />
          <path d="M21 45H45" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="48" cy="45" r="5" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="21" cy="51" r="5" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      title: "Professionally Written",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 17L38 14L43 48L26 51L21 17Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M26 24L36 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M27 30L37 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M28 36L38 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M20 20L16 44L26 51" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M34 13L43 5L48 10L39 19L31 21L34 13Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M43 5L48 10" stroke="currentColor" strokeWidth="2.5" />
          <path d="M31 21L39 19" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      ),
    },
    {
      title: "Visually Custom Designed",
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="14" width="46" height="31" rx="2" stroke="currentColor" strokeWidth="2.5" />
          <path d="M9 23H55" stroke="currentColor" strokeWidth="2.5" />
          <path d="M17 18H22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M27 18H32" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M37 18H42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="16" y="28" width="13" height="11" stroke="currentColor" strokeWidth="2.5" />
          <path d="M18 37L22 32L25 35L28 30" stroke="currentColor" strokeWidth="2" />
          <path d="M34 30H48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M34 35H48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M34 40H44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#fafafa] px-5 py-20 sm:py-24 lg:py-28">
      {/* Premium background elements */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-white/80 to-transparent blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[300px] w-[300px] rounded-full bg-black/[0.03] blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-[1200px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {/* Main Title */}
        <motion.div variants={itemVariants} className="mb-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2"
          >
            <span className="h-[6px] w-[6px] rounded-full bg-[#7a7a7a]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/40">
              Our Expertise
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-[-0.035em] text-black"
          >
            What We Deliver
          </motion.h2>
        </motion.div>

        {/* Premium Deliverables Box */}
        <motion.div
          variants={itemVariants}
          className="relative mx-auto mb-16 max-w-[800px] overflow-hidden rounded-[2.5rem] border border-black/8 bg-white p-12 shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-500 hover:border-black/12 hover:shadow-[0_25px_70px_rgba(0,0,0,0.12)] sm:p-14 md:p-16"
        >
          {/* Animated background */}
          <motion.div
            className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-gradient-to-br from-black/[0.04] to-transparent opacity-0 blur-3xl transition-all duration-700"
            whileHover={{ opacity: 0.5 }}
          />

          {/* Content */}
          <motion.div variants={itemVariants} className="relative z-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black mb-10">
              Custom-Designed Solutions For:
            </h3>

            {/* Deliverables List with stagger */}
            <motion.div
              className="space-y-5 sm:space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {deliverables.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 sm:gap-5 group cursor-pointer"
                >
                  {/* Animated Checkmark Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15 }}
                    className="mt-1 flex h-7 w-7 sm:h-8 sm:w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#8a8a8a] to-[#6b6b6b] text-white shadow-[0_4px_15px_rgba(0,0,0,0.18)] group-hover:shadow-[0_8px_25px_rgba(0,0,0,0.28)] transition-all duration-300"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: index * 0.1 + 0.5,
                        type: "spring",
                      }}
                      viewport={{ once: true }}
                      className="text-sm font-bold"
                    >
                      ✓
                    </motion.span>
                  </motion.div>

                  {/* Text with hover effect */}
                  <motion.p className="pt-1 text-base sm:text-lg font-medium text-black/85 leading-relaxed group-hover:text-black transition-colors duration-300">
                    {item}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-[#7a7a7a] to-transparent"
          />
        </motion.div>

        {/* Features Grid - Plain, no box/border/background/numbers */}
        <motion.div
          className="grid gap-10 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.1 + 0.2,
                  type: "spring",
                  stiffness: 150,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="mb-5 h-[55px] w-[55px] text-[#7a7a7a] transition-colors duration-300"
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl font-normal tracking-[-0.02em] text-black"
              >
                {feature.title}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}