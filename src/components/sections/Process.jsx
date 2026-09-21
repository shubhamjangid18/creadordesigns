import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* -------------------------------------------------------
   SETTINGS — yahan se easily change kar sakte ho
-------------------------------------------------------- */
const BRAND_LABEL = "MyD Bucket";
const INSTAGRAM_URL = "https://www.instagram.com/";
const INSTAGRAM_HANDLE = "myd_bucket";

// Real Instagram screenshot lagana ho to image "public" folder me rakho
// aur yahan path daalo, e.g. "/instagram-screen.png".
// Khali chhodoge to neeche wala bana hua phone mockup dikhega.
const INSTAGRAM_SCREENSHOT = "";

const steps = [
  { day: "Day 1", text: "Collecting logo file and content information." },
  {
    day: "Day 2",
    text: "Content structuring + waiting for content sheet approval.",
  },
  {
    day: "Day 3",
    text: "Initial draft with few page design (content + design).",
  },
  { day: "Day 4", text: "After review and approval remaining pages." },
  { day: "Day 5", text: "Working remaining pages." },
  { day: "Day 6", text: "Ready.\nFinal submission." },
];

const pills = [
  { label: "Fast", icon: "bolt" },
  { label: "Controlled", icon: "target" },
  { label: "Clear", icon: "wand" },
];

const cardClass =
  "rounded-[28px] border border-black/[0.06] bg-[#fafafa] shadow-[0_6px_30px_rgba(0,0,0,0.05)]";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

/* -------------------------------------------------------
   SMALL ICONS
-------------------------------------------------------- */

function Chevrons() {
  return (
    <svg
      viewBox="0 0 42 44"
      className="hidden h-11 w-10 shrink-0 text-black md:block"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 4l14 18L5 40" />
      <path d="M14 4l14 18-14 18" />
      <path d="M23 4l14 18-14 18" />
    </svg>
  );
}

function PillIcon({ type }) {
  const common = { viewBox: "0 0 24 24", className: "h-[18px] w-[18px]" };

  if (type === "bolt") {
    return (
      <svg {...common} fill="currentColor" aria-hidden="true">
        <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
      </svg>
    );
  }

  if (type === "target") {
    return (
      <svg {...common} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <circle
          cx="12"
          cy="12"
          r="6.5"
          fill="none"
          stroke="#fff"
          strokeWidth="1.6"
        />
        <circle cx="12" cy="12" r="2.5" fill="#fff" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="none" aria-hidden="true">
      <path
        d="M3.5 20.5 14 10"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
      />
      <path
        d="M17 2.5v5M14.5 5h5M20.5 10v3M19 11.5h3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BrandMark() {
  return (
    <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[7px] bg-gradient-to-br from-[#0a1a4a] to-[#1533a8]">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 21V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15" />
        <path d="M9.5 21v-8a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8" />
      </svg>
    </span>
  );
}

function UaeFlag() {
  return (
    <svg
      viewBox="0 0 48 48"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="48" height="16" fill="#00732f" />
      <rect y="16" width="48" height="16" fill="#fff" />
      <rect y="32" width="48" height="16" fill="#000" />
      <rect width="14" height="48" fill="#ff0000" />
    </svg>
  );
}

function UkFlag() {
  return (
    <svg
      viewBox="0 0 60 60"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
    >
      <rect width="60" height="60" fill="#012169" />
      <path d="M0 0 60 60M60 0 0 60" stroke="#fff" strokeWidth="10" />
      <path d="M0 0 60 60M60 0 0 60" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0v60M0 30h60" stroke="#fff" strokeWidth="16" />
      <path d="M30 0v60M0 30h60" stroke="#C8102E" strokeWidth="9" />
    </svg>
  );
}

/* -------------------------------------------------------
   LANGUAGE PILL (Arabic <-> English auto switch)
-------------------------------------------------------- */

function LanguagePill() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((p) => (p + 1) % 2), 2600);
    return () => clearInterval(timer);
  }, []);

  const languages = [
    { label: "عربي", flag: <UaeFlag /> },
    { label: "English", flag: <UkFlag /> },
  ];

  const current = languages[index];

  return (
    <div className="flex h-[68px] min-w-[178px] items-center justify-center rounded-full bg-white px-6 shadow-[0_4px_18px_rgba(0,0,0,0.05)]">
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-6"
      >
        <span className="text-lg">{current.label}</span>

        <span className="block h-[38px] w-[38px] overflow-hidden rounded-full">
          {current.flag}
        </span>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------
   INSTAGRAM PHONE MOCKUP
-------------------------------------------------------- */

function FakeInstagramScreen() {
  const highlights = ["Team", "Videography", "Reviews", "Co.Profile", "Brand"];
  const tiles = [
    { text: "Website Project", className: "bg-[#2f4ea8] text-white" },
    { text: "Company Profile Design", className: "bg-[#e9e9ee] text-black" },
    { text: "Our Biggest Branding Project", className: "bg-[#d84a3a] text-white" },
  ];

  return (
    <div className="pt-2 text-white">
      {/* Status bar */}
      <div className="flex items-center justify-between px-5 text-[8px] font-medium">
        <span>6:17</span>
        <span>77%</span>
      </div>

      {/* Header */}
      <div className="mt-5 flex items-center gap-2 px-3 text-[10px] font-semibold">
        <span>←</span>
        <span>{INSTAGRAM_HANDLE}</span>
        <span className="flex h-[10px] w-[10px] items-center justify-center rounded-full bg-[#3897f0] text-[6px]">
          ✓
        </span>
        <span className="ml-auto text-white/70">⋮</span>
      </div>

      {/* Profile */}
      <div className="mt-3 flex items-center gap-3 px-3">
        <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[2px]">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-black">
            <span className="text-[13px] font-bold">M</span>
          </span>
        </span>

        <div className="min-w-0">
          <p className="truncate text-[8px] font-semibold">
            Creative agency in Dubai
          </p>

          <div className="mt-1.5 flex gap-3 text-center">
            {[
              ["1,062", "posts"],
              ["31.2K", "followers"],
              ["9", "following"],
            ].map(([num, label]) => (
              <div key={label}>
                <p className="text-[9px] font-semibold leading-none">{num}</p>
                <p className="mt-0.5 text-[6.5px] text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="mt-2 px-3 text-[7.5px] leading-[1.35] text-white/85">
        Branding → Company profile → Website → Video production
        <br />
        400+ clients all over GCC · Fast work delivery
      </p>

      {/* Buttons */}
      <div className="mt-3 flex gap-1.5 px-3 text-center text-[8px] font-medium">
        <span className="flex-[1.2] rounded-md bg-[#4c5fff] py-1.5">Follow</span>
        <span className="flex-[1.2] rounded-md bg-white/15 py-1.5">Message</span>
        <span className="flex-[1.2] rounded-md bg-white/15 py-1.5">Contact</span>
        <span className="w-6 rounded-md bg-white/15 py-1.5">⌄</span>
      </div>

      {/* Highlights */}
      <div className="mt-3 flex gap-2.5 overflow-hidden px-3">
        {highlights.map((item) => (
          <div key={item} className="flex w-[34px] shrink-0 flex-col items-center">
            <span className="h-[32px] w-[32px] rounded-full border border-white/30 bg-gradient-to-br from-white/25 to-white/5" />
            <span className="mt-1 w-full truncate text-center text-[6px] text-white/70">
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-3 flex justify-around border-t border-white/10 py-1.5 text-[9px] text-white/70">
        <span>▦</span>
        <span>▶</span>
        <span>⟳</span>
        <span>☺</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[1px]">
        {tiles.map((tile) => (
          <div
            key={tile.text}
            className={`flex h-[120px] items-end p-1.5 text-[8px] font-bold leading-tight ${tile.className}`}
          >
            {tile.text}
          </div>
        ))}
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative mx-auto mt-20 w-[250px] rounded-[40px] bg-gradient-to-b from-[#c8741f] to-[#8a4510] p-[5px] shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
      <div className="relative h-[540px] overflow-hidden rounded-[35px] bg-black">
        {INSTAGRAM_SCREENSHOT ? (
          <img
            src={INSTAGRAM_SCREENSHOT}
            alt="Instagram page preview"
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <FakeInstagramScreen />
        )}

        {/* Notch */}
        <span className="absolute left-1/2 top-2 h-[14px] w-[70px] -translate-x-1/2 rounded-full border border-white/10 bg-[#111]" />
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   MAIN SECTION
-------------------------------------------------------- */

export default function Process() {
  const rows = [steps.slice(0, 3), steps.slice(3)];

  return (
    <section
      id="process"
      className="bg-white px-4 py-14 sm:px-5 sm:py-20"
    >
      <div className="mx-auto max-w-[1240px]">
        {/* =====================================================
            TOP: LAUNCH IN DAYS + BUILT FOR BOTH + INSTAGRAM
        ====================================================== */}

        <div className="grid gap-5 lg:grid-cols-[1.52fr_1fr]">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* Launch In Days */}
            <motion.div {...reveal} className={`${cardClass} px-6 pb-10 pt-10 sm:px-10`}>
              <h3 className="text-center text-[22px] font-normal tracking-tight">
                Launch In Days
              </h3>

              {/* Brand */}
              <div className="mt-9 flex items-center gap-3">
                <BrandMark />
                <span className="text-2xl tracking-tight">{BRAND_LABEL}</span>
              </div>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
                className="mt-4 h-[14px] w-full rounded-full bg-[#e63946]"
              />

              <p className="mt-3 text-lg">3 – 6 Days</p>

              {/* Other Agencies */}
              <h4 className="mt-9 text-2xl tracking-tight">Other Agencies</h4>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{ originX: 0 }}
                className="mt-4 h-[14px] w-full rounded-full bg-black"
              />

              <p className="mt-3 text-lg">7 – 14 Days</p>
            </motion.div>

            {/* Built For Both */}
            <motion.div
              {...reveal}
              className={`${cardClass} flex items-center justify-between gap-4 px-6 py-7 sm:px-10`}
            >
              <h3 className="text-2xl tracking-tight">Built For Both</h3>
              <LanguagePill />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: INSTAGRAM */}
          <motion.div
            {...reveal}
            className={`${cardClass} min-h-[560px] overflow-hidden px-6 pt-10 lg:min-h-0`}
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[22px] font-normal tracking-tight transition-opacity hover:opacity-70"
            >
              Our Instagram Page
              <span className="text-xl">↪</span>
            </a>

            <Phone />
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM: 6 DAY PROCESS
        ====================================================== */}

        <motion.div
          {...reveal}
          className={`${cardClass} mt-5 px-6 py-12 md:px-12 md:py-16`}
        >
          <div className="mx-auto max-w-[980px] space-y-10 md:space-y-14">
            {rows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid gap-10 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center md:gap-6"
              >
                {row.map((step, i) => (
                  <React.Fragment key={step.day}>
                    <div className="text-center">
                      <h3 className="text-[22px] font-medium tracking-tight">
                        {step.day}
                      </h3>

                      <p className="mx-auto mt-3 max-w-[215px] whitespace-pre-line text-[15px] font-light leading-[1.85] text-black/80">
                        {step.text}
                      </p>
                    </div>

                    {i < row.length - 1 && <Chevrons />}
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>

          {/* Pills */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
            {pills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2.5 rounded-full border border-black/[0.08] bg-white px-5 py-2.5 text-[15px] text-black"
              >
                <PillIcon type={pill.icon} />
                {pill.label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}