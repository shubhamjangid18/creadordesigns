import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const faq = [
  {
    question: "Can you really deliver in 3–6 days?",
    answer: "Yes. Our process is built for speed without sacrificing quality content structure, layout and revisions all happen within a tight, well-managed timeline.",
  },
  {
    question: "Is the design fully custom?",
    answer: "Always. Nothing comes from a template library. Every layout, typeface pairing and color choice is built around your brand and the audience the profile is meant to convince.",
  },
  {
    question: "Do you write the content?",
    answer: "We can. Send us your raw notes, website copy or a rough PDF, and our team will restructure and rewrite it into clear, decision-ready content before design begins.",
  },
  {
    question: "Will I get editable files?",
    answer: "Yes every package includes the native source files, not just the final PDF, so your team can update pricing, dates or photos internally whenever needed.",
  },
  {
    question: "Do you redesign existing profiles?",
    answer: "Yes. We keep the business information that already works and rebuild the structure and visual system around it, so it feels like an upgrade, not a rewrite.",
  },
  {
    question: "How many pages, normally? And timeline?",
    answer: "Starter profiles run 8–12 pages in 3–6 working days. Scale profiles go up to 12+ pages, based on scope, in 5–10 working days.",
  },
];

function FAQCard({ item, index, isOpen, onToggle }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0, 1, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
    >
      <motion.div
        onClick={onToggle}
        whileHover={!isOpen ? { y: -3, boxShadow: "0 20px 56px -12px rgba(11,61,36,0.14), 0 2px 8px rgba(0,0,0,0.05)" } : {}}
        transition={{ duration: 0.22 }}
        className="cursor-pointer overflow-hidden rounded-2xl"
        style={{
          background: isOpen ? "linear-gradient(145deg, #ffffff 60%, #f0faf4 100%)" : "#ffffff",
          border: isOpen ? "1.5px solid rgba(11,61,36,0.22)" : "1px solid rgba(0,0,0,0.08)",
          boxShadow: isOpen
            ? "0 20px 60px -12px rgba(11,61,36,0.18), 0 4px 12px rgba(0,0,0,0.06)"
            : "0 2px 16px -4px rgba(0,0,0,0.09)",
          transition: "background 0.35s ease, border 0.35s ease, box-shadow 0.35s ease",
        }}
      >
        {/* Number + Question */}
        <div className="flex items-center justify-between gap-4 px-7 py-6">
          <div className="flex items-center gap-4">
            <span
              className="text-xs font-bold tabular-nums"
              style={{ color: isOpen ? "rgba(11,61,36,0.5)" : "rgba(0,0,0,0.2)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="text-[15px] font-semibold leading-snug md:text-base"
              style={{ color: isOpen ? "#0b3d24" : "#0f1a14", transition: "color 0.3s ease" }}
            >
              {item.question}
            </span>
          </div>
          <motion.span
            animate={{
              background: isOpen ? "linear-gradient(135deg, #16241f, #2f5b4d)" : "rgba(11,61,36,0.08)",
              rotate: isOpen ? 45 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
            style={{ color: isOpen ? "#ffffff" : "#0b3d24" }}
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="12" y1="5" x2="12" y2="19" />
            </svg>
          </motion.span>
        </div>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="body"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div className="mx-7 h-px" style={{ background: "rgba(11,61,36,0.10)" }} />
              <p className="px-7 py-5 text-sm leading-7 md:text-[15px]" style={{ color: "rgba(15,26,20,0.55)" }}>
                {item.answer}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(11,61,36,0.055) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Top glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse, rgba(47,91,77,0.09) 0%, transparent 70%)" }}
      />

      <div className="container-main relative mx-auto max-w-3xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span
            className="inline-block rounded-full px-5 py-1.5 text-[11px] font-bold uppercase"
            style={{ background: "rgba(11,61,36,0.07)", color: "#0b3d24", letterSpacing: "0.15em" }}
          >
            FAQ
          </span>
          <h2 className="display-title mt-4 text-4xl text-[#0f1a14] md:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-3 text-sm" style={{ color: "rgba(15,26,20,0.4)" }}>
            Everything you need to know before we begin.
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-5 h-[2px] w-16 origin-center rounded-full"
            style={{ background: "linear-gradient(90deg, #16241f, #2f5b4d)" }}
          />
        </motion.div>

        {/* Single column one card at a time */}
        <div className="flex flex-col gap-4">
          {faq.map((item, index) => (
            <FAQCard
              key={index}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}