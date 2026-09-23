import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, TrendingUp, Check } from "lucide-react";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

const packages = [
  {
    key: "starter",
    label: "Starter",
    icon: Rocket,
    title: "For Startups",
    features: [
      "12 Pages and beyond",
      "Structured Content & Premium Design",
      "2–3 Revisions",
      "Print-Ready CDR/PDF",
      "Source Files Included",
      "Timeline: 3–6 Working Days",
    ],
  },
  {
    key: "scale",
    label: "Scale",
    icon: TrendingUp,
    title: "For Established Companies",
    features: [
      "12 Pages – Unlimited (Based on Scope)",
      "Advanced Positioning & Corporate Messaging",
      "Premium Layout & Infographics",
      "3–4 Revisions",
      "Print-Ready CDR/PDF",
      "Source Files Included",
      "Timeline: 5–10 Days (Approx)",
    ],
  },
];

export default function Packages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = packages[activeIndex];
  const Icon = active.icon;

  return (
    <section id="packages" className="bg-[#faf8f3] pt-16 pb-0">
      <div className="container-main">
        <SectionHeading
          eyebrow="Packages"
          title="Choose the scope that fits your business."
          description="Start with a focused profile or build a larger corporate presentation based on your requirements."
        />

        <div className="mt-12 flex items-center justify-center gap-4">
          <motion.button
            type="button"
            onClick={() => setActiveIndex(0)}
            animate={{ color: activeIndex === 0 ? "#0b3d24" : "rgba(11,61,36,0.35)" }}
            transition={{ duration: 0.3 }}
            className="text-xs font-semibold tracking-wide"
          >
            Starter
          </motion.button>

          <motion.button
            type="button"
            role="switch"
            aria-checked={activeIndex === 1}
            onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
            whileTap={{ scale: 0.92 }}
            animate={{
              background:
                activeIndex === 0
                  ? "linear-gradient(135deg, #235c3c, #163627)"
                  : "linear-gradient(135deg, #1a6b3f, #0b3d24)",
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-8 w-16 rounded-full shadow-inner"
          >
            <motion.span
              layout
              animate={{ left: activeIndex === 0 ? 4 : 36, rotate: activeIndex === 0 ? 0 : 180 }}
              transition={{
                left: { type: "spring", stiffness: 500, damping: 32 },
                rotate: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
              }}
              className="absolute top-1 h-6 w-6 rounded-full bg-white shadow-md"
            />
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setActiveIndex(1)}
            animate={{ color: activeIndex === 1 ? "#0b3d24" : "rgba(11,61,36,0.35)" }}
            transition={{ duration: 0.3 }}
            className="text-xs font-semibold tracking-wide"
          >
            Scale
          </motion.button>
        </div>

        <div className="mx-auto mt-10 max-w-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.article
              key={active.key}
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="premium-card rounded-[2rem] bg-gradient-to-b from-[#16241f] to-[#2f5b4d] p-8 text-white md:p-10"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black"
              >
                <Icon size={16} strokeWidth={2.2} />
                {active.label}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.45 }}
                className="mt-6 font-display text-3xl md:text-4xl"
              >
                {active.title}
              </motion.h3>

              <ul className="mt-7 space-y-4">
                {active.features.map((feature, i) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 text-[15px]"
                  >
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Check size={13} strokeWidth={2.5} className="text-white" />
                    </span>
                    <span className="text-white/85">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-8 rounded-2xl bg-white px-6 py-4 text-center text-sm text-black"
              >
                Exact pricing discussed after requirements review
              </motion.div>

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                whileHover={{
                  scale: 1.015,
                  y: -2,
                  background: "linear-gradient(135deg, #1a6b3f, #22824c)",
                  boxShadow: "0 16px 40px rgba(26,107,63,0.42)",
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "linear-gradient(135deg, #0b3d24, #143d29)",
                  boxShadow: "0 10px 26px rgba(11,61,36,0.3)",
                }}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold text-white transition-shadow duration-300"
              >
                Discuss Your Project
              </motion.a>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}