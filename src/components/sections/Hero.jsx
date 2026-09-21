import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#fafafa] px-5 pt-24"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      {/* Soft center glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[500px]
          w-[500px]
          -translate-x-1/2
          rounded-full
          bg-[#f2f2f2]
          blur-[120px]
        "
      />

      {/* Very subtle top glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[300px]
          w-[700px]
          -translate-x-1/2
          bg-gradient-to-b
          from-white
          to-transparent
        "
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center text-center">

        {/* =================================================
            MAIN HEADING
        ================================================== */}

        <div className="overflow-hidden">
          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[1050px]
              text-[3.3rem]
              font-medium
              leading-[0.98]
              tracking-[-0.055em]
              text-black
              sm:text-[4.8rem]
              md:text-[6.2rem]
              lg:text-[7.5rem]
            "
          >
            Custom Company
            <br />

            <span className="relative inline-block">
              <span className="font-normal italic">
                Profile Design.
              </span>

              {/* Animated underline */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                transition={{
                  duration: 1,
                  delay: 1.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  -bottom-1
                  left-[14%]
                  h-[2px]
                  bg-[#e00000]
                  sm:-bottom-2
                "
              />
            </span>
          </motion.h1>
        </div>

        {/* =================================================
            SECONDARY HEADING
        ================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            text-[1.5rem]
            font-light
            tracking-[-0.035em]
            text-black/80
            sm:text-[2rem]
            md:text-[2.4rem]
          "
        >
          Delivered in{" "}
          <span className="font-normal">
            3–6 Days.
          </span>
        </motion.h2>

        {/* =================================================
            DESCRIPTION
        ================================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-3
            max-w-[700px]
            text-[15px]
            leading-7
            tracking-[-0.01em]
            text-black/50
            sm:text-[16px]
            md:text-[17px]
          "
        >
          Built for investors, partners, and serious business growth
          <br className="hidden sm:block" />
          without unnecessary delays.
        </motion.p>

        {/* =================================================
            PREMIUM BUTTONS
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            flex
            flex-col
            items-center
            justify-center
            gap-3
            sm:flex-row
          "
        >

          {/* =================================================
              PRIMARY BUTTON
          ================================================== */}

          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              flex
              min-w-[205px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-black/20
              bg-gradient-to-r
              from-black
              via-[#8f0000]
              to-[#e00000]
              px-8
              py-[14px]
              text-[13px]
              font-semibold
              tracking-[-0.01em]
              text-white
              shadow-[0_10px_30px_rgba(180,0,0,0.22)]
              transition-shadow
              duration-500
              hover:shadow-[0_15px_40px_rgba(180,0,0,0.34)]
            "
          >
            {/* Moving shine */}
            <motion.span
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 1.8,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                w-[55%]
                skew-x-[-20deg]
                bg-gradient-to-r
                from-transparent
                via-white/25
                to-transparent
                blur-[2px]
              "
            />

            {/* Inner border */}
            <span
              className="
                pointer-events-none
                absolute
                inset-[1px]
                rounded-full
                border
                border-white/10
              "
            />

            {/* =================================================
                PRIMARY BUTTON TEXT MOTION
            ================================================== */}

            <span
              className="
                relative
                z-10
                inline-flex
                items-center
                overflow-hidden
              "
            >
              <motion.span
                className="inline-block"
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  x: 2,
                }}
              >
                Get Your Profile Started
              </motion.span>

              {/* Arrow */}
              <motion.span
                className="
                  ml-2
                  inline-block
                  text-[15px]
                "
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  x: 5,
                  y: -2,
                }}
              >
                ↗
              </motion.span>
            </span>
          </motion.a>

          {/* =================================================
              SECONDARY BUTTON
          ================================================== */}

          <motion.a
            href="#work"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative
              flex
              min-w-[160px]
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border
              border-black/20
              bg-white
              px-7
              py-[14px]
              text-[13px]
              font-medium
              tracking-[-0.01em]
              text-black
              shadow-[0_4px_15px_rgba(0,0,0,0.04)]
              transition-all
              duration-300
              hover:border-black/35
              hover:bg-[#f7f7f7]
              hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)]
            "
          >
            {/* Subtle hover shine */}
            <span
              className="
                pointer-events-none
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-black/[0.04]
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />

            {/* =================================================
                SECONDARY BUTTON TEXT MOTION
            ================================================== */}

            <span className="relative z-10 inline-flex items-center">
              <motion.span
                className="inline-block"
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  x: 2,
                }}
              >
                View Sample Work
              </motion.span>

              {/* Arrow */}
              <motion.span
                className="
                  ml-2
                  inline-block
                  text-[14px]
                  text-black/70
                "
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  x: 5,
                  y: -2,
                }}
              >
                ↗
              </motion.span>
            </span>
          </motion.a>
        </motion.div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-24
          bg-gradient-to-t
          from-[#fafafa]
          to-transparent
        "
      />

      {/* =====================================================
          FLOATING SIDE ELEMENTS
      ====================================================== */}

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[6%]
          top-[42%]
          hidden
          h-2
          w-2
          rounded-full
          bg-[#e00000]/40
          lg:block
        "
      />

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[32%]
          hidden
          h-1.5
          w-1.5
          rounded-full
          bg-black/20
          lg:block
        "
      />
    </section>
  );
}