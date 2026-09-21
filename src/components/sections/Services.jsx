import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mattress Brand",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
    link: "#",
  },
  {
    title: "Interior Fitout",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    link: "#",
  },
  {
    title: "Corporate Profile",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=85",
    link: "#",
  },
  {
    title: "Brand Presentation",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
    link: "#",
  },
];

// External link (http...) ho to naye tab me khule, warna same tab me
const getLinkProps = (link) =>
  /^https?:\/\//.test(link)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export default function ServicesPremium() {
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
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

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

      {/* Very subtle grid */}
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
              initial={{
                opacity: 0,
                y: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              {/* =================================================
                  IMAGE CARD (CLICKABLE)
              ================================================== */}

              <a
                href={project.link}
                aria-label={`Open ${project.title}`}
                {...getLinkProps(project.link)}
                className="
                  block
                  cursor-pointer
                  rounded-[1.5rem]
                  outline-none
                  focus-visible:ring-2
                  focus-visible:ring-black/40
                  focus-visible:ring-offset-2
                  sm:rounded-[1.7rem]
                "
              >
                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
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
                  {/* Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    whileHover={{
                      scale: 1.045,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {/* Soft white overlay */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/[0.04]
                      via-transparent
                      to-white/[0.06]
                      opacity-60
                    "
                  />

                  {/* Premium border highlight */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-[1px]
                      rounded-[1.45rem]
                      border
                      border-white/40
                      opacity-70
                      sm:rounded-[1.6rem]
                    "
                  />

                  {/* Hover glow */}
                  <div
                    className="
                      pointer-events-none
                      absolute
                      -bottom-20
                      left-1/2
                      h-40
                      w-[70%]
                      -translate-x-1/2
                      rounded-full
                      bg-white/20
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                    "
                  />
                </motion.div>
              </a>

              {/* =================================================
                  PROJECT INFO
              ================================================== */}

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                  gap-4
                  px-0.5
                "
              >
                {/* Project title */}
                <motion.h3
                  initial={{ x: 0 }}
                  whileHover={{ x: 2 }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    text-[1.15rem]
                    font-medium
                    leading-none
                    tracking-[-0.035em]
                    text-black
                    sm:text-[1.3rem]
                    md:text-[1.4rem]
                  "
                >
                  {project.title}
                </motion.h3>

                {/* Visit button */}
                <motion.a
                  href={project.link}
                  {...getLinkProps(project.link)}
                  whileHover={{
                    scale: 1.04,
                    y: -1,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    group/visit
                    flex
                    shrink-0
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-black/[0.10]
                    bg-white
                    px-3
                    py-1.5
                    text-[11px]
                    font-medium
                    text-black
                    shadow-[0_3px_12px_rgba(0,0,0,0.035)]
                    transition-all
                    duration-300
                    hover:border-black/20
                    hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]
                    sm:px-3.5
                    sm:py-2
                  "
                >
                  {/* Small external icon */}
                  <span
                    className="
                      flex
                      h-3
                      w-3
                      items-center
                      justify-center
                      text-[10px]
                      transition-transform
                      duration-300
                      group-hover/visit:-translate-y-0.5
                      group-hover/visit:translate-x-0.5
                    "
                  >
                    ↗
                  </span>

                  <span>Visit</span>
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}