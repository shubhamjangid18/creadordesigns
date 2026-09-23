import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "Engenerring Companies",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Electric Brands",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Agriculture Businesses",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "Food Businesses",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
  },
];

/* =========================================================
   CUSTOM CURSOR CIRCLE
========================================================= */
function CursorArrow({ position, visible }) {
  return (
    <motion.span
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.5,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        left: position.x,
        top: position.y,
      }}
      className="
        pointer-events-none
        absolute
        z-20
        flex
        h-14
        w-14
        -translate-x-1/2
        -translate-y-1/2
        items-center
        justify-center
        rounded-full
        bg-black
        shadow-[0_12px_30px_rgba(0,0,0,0.3)]
      "
    >
      <span
        className="
          pointer-events-none
          absolute
          inset-[2px]
          rounded-full
          border
          border-white/15
        "
      />
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="relative h-[19px] w-[19px] text-white"
      >
        <path
          d="M5 12H19M19 12L13 6M19 12L13 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  );
}

export default function ServicesPremium() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  const goToGallery = () => navigate("/gallery");

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="work"
      className="
        relative
        overflow-hidden
        bg-[#fafafa]
        px-5
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* Soft top glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[350px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-white
          blur-[110px]
        "
      />

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* =====================================================
          PROJECT GRID
      ====================================================== */}
      <div className="relative z-10 mx-auto max-w-[1240px]">
        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:gap-x-8 lg:gap-y-14">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              {/* IMAGE CARD */}
              <div
                role="button"
                tabIndex={0}
                aria-label={`Open ${project.title} in gallery`}
                onClick={goToGallery}
                onKeyDown={(e) => e.key === "Enter" && goToGallery()}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onMouseMove={handleMouseMove}
                className="
                  block
                  cursor-none
                  rounded-[1.5rem]
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-black/40
                  focus-visible:ring-offset-2
                  sm:rounded-[1.7rem]
                "
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="
                    relative
                    aspect-[1.48/1]
                    overflow-hidden
                    rounded-[1.5rem]
                    border
                    border-black/[0.055]
                    bg-white
                    shadow-[0_8px_35px_rgba(0,0,0,0.045)]
                    transition-all
                    duration-500
                    group-hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)]
                    sm:rounded-[1.7rem]
                  "
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    whileHover={{ scale: 1.045 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-gradient-to-t from-black/[0.04] via-transparent to-white/[0.06]
                      opacity-60
                    "
                  />
                  <div
                    className="
                      pointer-events-none absolute inset-0
                      bg-black/0 transition-colors duration-500
                      group-hover:bg-black/[0.06]
                    "
                  />
                  <div
                    className="
                      pointer-events-none absolute inset-[1px]
                      rounded-[1.45rem] border border-white/40
                      opacity-70 sm:rounded-[1.6rem]
                    "
                  />
                  <div
                    className="
                      pointer-events-none absolute -bottom-20 left-1/2
                      h-40 w-[70%] -translate-x-1/2 rounded-full
                      bg-white/20 opacity-0 blur-3xl
                      transition-opacity duration-700 group-hover:opacity-100
                    "
                  />

                  <CursorArrow
                    position={cursorPos}
                    visible={activeIndex === index}
                  />
                </motion.div>
              </div>

              {/* PROJECT INFO */}
              <div
                className="
                  mt-4 flex items-center
                  justify-between gap-4 px-0.5
                "
              >
                <motion.h3
                  initial={{ x: 0 }}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.3 }}
                  className="
                    text-[1.15rem] font-medium leading-none
                    tracking-[-0.035em] text-black
                    sm:text-[1.3rem] md:text-[1.4rem]
                  "
                >
                  {project.title}
                </motion.h3>

                {/* Visit button */}
                <motion.button
                  onClick={goToGallery}
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="
                    group/visit
                    flex shrink-0 items-center gap-2
                    rounded-full border border-black/[0.10]
                    bg-white px-3 py-1.5
                    text-[11px] font-medium text-black
                    shadow-[0_3px_12px_rgba(0,0,0,0.035)]
                    transition-all duration-300
                    hover:border-black/20
                    hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                    sm:px-3.5 sm:py-2
                  "
                >
                  <span
                    className="
                      flex h-3 w-3 items-center justify-center
                      text-[10px] transition-transform duration-300
                      group-hover/visit:-translate-y-0.5
                      group-hover/visit:translate-x-0.5
                    "
                  >
                    ↗
                  </span>
                  <span>Visit</span>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            VIEW GALLERY BUTTON
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex justify-center sm:mt-16 lg:mt-20"
        >
          <motion.button
            onClick={goToGallery}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="
              group/gallery
              relative inline-flex items-center gap-3
              overflow-hidden rounded-full bg-black
              px-7 py-3.5 text-[13px] font-medium
              tracking-wide text-white
              shadow-[0_8px_25px_rgba(0,0,0,0.15)]
              transition-all duration-400
              hover:shadow-[0_14px_38px_rgba(0,0,0,0.25)]
              sm:px-8 sm:py-4 sm:text-sm
            "
          >
            <span className="relative z-10">View Full Gallery</span>

            <span
              className="
                relative z-10 flex h-6 w-6 items-center justify-center
                rounded-full bg-white text-black
                transition-transform duration-400
                group-hover/gallery:translate-x-1
              "
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                <path
                  d="M5 12H19M19 12L13 6M19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span
              className="
                pointer-events-none absolute inset-0
                -translate-x-full bg-white/10
                transition-transform duration-500
                group-hover/gallery:translate-x-0
              "
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}