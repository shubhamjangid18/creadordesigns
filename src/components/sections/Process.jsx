import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import instagramPage from "../../assets/images/instagrampage.jpg";

/* -------------------------------------------------------
   SETTINGS — yahan se easily change kar sakte ho
-------------------------------------------------------- */
const BRAND_LABEL = "CreadorDesigns";
const INSTAGRAM_URL = "https://www.instagram.com/";
const INSTAGRAM_HANDLE = "myd_bucket";

// "Launch In Days" wale card ke upar wale bar ka colour
const BRAND_BAR_COLOR = "#14532d"; // dark green

// Instagram page ki image (src/assets/images/instagrampage.jpg)
const INSTAGRAM_SCREENSHOT = instagramPage;

// Agar aapki image me already phone ka frame bana hua hai
// (mockup wali image), to isko true kar do. Tab hamara frame nahi lagega.
const SCREENSHOT_HAS_FRAME = false;

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

function InstagramGlyph({ className = "h-7 w-7" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
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
   INSTAGRAM PHONE (FULL SCREENSHOT, FITS THE CARD HEIGHT)
-------------------------------------------------------- */

// Image load na ho to ye clean screen dikhegi
function PlaceholderScreen() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#0d0d10] to-black text-white">
      <span className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-[0_10px_30px_rgba(238,42,123,0.35)]">
        <InstagramGlyph className="h-8 w-8 text-white" />
      </span>

      <span className="text-sm font-medium tracking-tight text-white/90">
        @{INSTAGRAM_HANDLE}
      </span>
    </div>
  );
}

function InstagramPhone() {
  const [failed, setFailed] = useState(false);

  // Image ka asli ratio (width / height). Load hone ke baad update hota hai,
  // isse phone image ke shape ke hisaab se banta hai aur kuch crop nahi hota.
  const [ratio, setRatio] = useState(9 / 19.5);

  const hasImage = Boolean(INSTAGRAM_SCREENSHOT) && !failed;
  const alt = `${INSTAGRAM_HANDLE} Instagram page`;

  const handleLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      setRatio(naturalWidth / naturalHeight);
    }
  };

  // Image me already phone frame hai -> sirf image dikhao
  if (hasImage && SCREENSHOT_HAS_FRAME) {
    return (
      <div
        style={{ aspectRatio: ratio }}
        className="h-full max-w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.30)]"
      >
        <img
          src={INSTAGRAM_SCREENSHOT}
          alt={alt}
          draggable={false}
          onLoad={handleLoad}
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  return (
    <div
      style={{ aspectRatio: ratio }}
      className="relative h-full max-w-full rounded-[44px] bg-gradient-to-b from-[#4a4a50] via-[#1b1b1e] to-[#0a0a0b] p-[6px] shadow-[0_40px_70px_-25px_rgba(0,0,0,0.55),0_0_0_1px_rgba(0,0,0,0.6)] ring-1 ring-white/10"
    >
      {/* Side buttons */}
      <span className="absolute -left-[3px] top-[14%] h-[4.5%] w-[3px] rounded-l bg-[#2a2a2e]" />
      <span className="absolute -left-[3px] top-[21%] h-[8%] w-[3px] rounded-l bg-[#2a2a2e]" />
      <span className="absolute -left-[3px] top-[31%] h-[8%] w-[3px] rounded-l bg-[#2a2a2e]" />
      <span className="absolute -right-[3px] top-[25%] h-[11%] w-[3px] rounded-r bg-[#2a2a2e]" />

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-black ring-1 ring-black">
        {hasImage ? (
          <img
            src={INSTAGRAM_SCREENSHOT}
            alt={alt}
            draggable={false}
            onLoad={handleLoad}
            onError={() => setFailed(true)}
            className="block h-full w-full object-cover object-top"
          />
        ) : (
          <PlaceholderScreen />
        )}

        {/* Soft glass reflection */}
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent" />
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
                style={{ originX: 0, backgroundColor: BRAND_BAR_COLOR }}
                className="mt-4 h-[14px] w-full rounded-full"
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

          {/* RIGHT COLUMN: INSTAGRAM SCREENSHOT */}
          <motion.div
            {...reveal}
            className={`${cardClass} relative h-[600px] overflow-hidden lg:h-auto lg:min-h-[560px]`}
          >
            {/* Soft premium tint */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(238,42,123,0.06),transparent_60%)]" />

            {/* Glow behind phone */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ee2a7b]/15 blur-[90px]" />

            {/* Phone (click -> Instagram) */}
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${INSTAGRAM_HANDLE} on Instagram`}
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-5 z-10 flex items-center justify-center sm:inset-6"
            >
              <InstagramPhone />
            </motion.a>
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