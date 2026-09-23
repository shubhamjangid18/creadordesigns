import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================================================
   GALLERY IMAGES
   Replace these with your actual project / work images.
   "span" controls the tile size in the masonry grid:
   tall = taller box, wide = spans 2 columns, short = normal.
========================================================= */
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85",
    title: "Engineering Companies",
    span: "tall",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    title: "Electric Brands",
    span: "short",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1400&q=85",
    title: "Agriculture Businesses",
    span: "wide",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1400&q=85",
    title: "Food Businesses",
    span: "tall",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1400&q=85",
    title: "Packaging Design",
    span: "short",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1400&q=85",
    title: "Label Artwork",
    span: "tall",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=1400&q=85",
    title: "Brand Identity",
    span: "short",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=85",
    title: "3D Mockups",
    span: "wide",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    title: "Seed & Fertilizer Range",
    span: "short",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&w=1400&q=85",
    title: "Bottle & Pouch Design",
    span: "tall",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1400&q=85",
    title: "Website Development",
    span: "short",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=1400&q=85",
    title: "Print Collateral",
    span: "short",
  },
];

const spanClass = {
  tall: "row-span-2",
  short: "row-span-1",
  wide: "row-span-1 sm:col-span-2",
};

// Main website ka home path — fallback ke liye (agar tab band na ho paye)
const HOME_PATH = "/";

/* =========================================================
   GALLERY NAVBAR
   Sirf logo + "Back to Website" — full site nav nahi.
   Click karte hi ye tab band ho jaati hai (kyunki gallery
   naye tab me khuli thi), user seedha apni pichli
   (main website wali) tab par wapas pahuch jaata hai.
========================================================= */
function GalleryNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBack = (e) => {
    e.preventDefault();

    // Ye tab band karne ki koshish karega (gallery naye tab me khuli thi,
    // isliye close hote hi user pichli/main-website tab par wapas aa jayega)
    window.close();

    // Fallback: agar browser security ki wajah se tab close na kare,
    // to isi tab me home page par le jao
    window.setTimeout(() => {
      window.location.href = HOME_PATH;
    }, 250);
  };

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500
        ${scrolled ? "bg-white/80 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"}
      `}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-5 sm:px-8">
        {/* Logo / wordmark */}
        <span className="text-[15px] font-semibold tracking-[-0.02em] text-black sm:text-base">
          Gallery
        </span>

        {/* Back to website */}
        <motion.a
          href={HOME_PATH}
          onClick={handleBack}
          whileHover={{ x: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="
            group/back
            flex items-center gap-2
            rounded-full border border-black/10
            bg-white
            px-4 py-2
            text-[12.5px] font-medium text-black
            shadow-[0_2px_10px_rgba(0,0,0,0.04)]
            transition-all duration-300
            hover:border-black/20
            hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)]
            sm:px-5 sm:py-2.5 sm:text-sm
          "
        >
          <span
            className="
              flex h-3.5 w-3.5 items-center justify-center
              transition-transform duration-300
              group-hover/back:-translate-x-0.5
            "
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
              <path
                d="M19 12H5M5 12L11 6M5 12L11 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>Back to Website</span>
        </motion.a>
      </div>
    </header>
  );
}

/* =========================================================
   LIGHTBOX
========================================================= */
function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNext, onPrev]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        onClick={onClose}
        className="
          fixed inset-0 z-[100]
          flex items-center justify-center
          bg-black/90
          px-4
          backdrop-blur-sm
        "
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="
            absolute right-5 top-5 sm:right-8 sm:top-8
            flex h-10 w-10 items-center justify-center
            rounded-full border border-white/20
            text-white transition-colors duration-300
            hover:bg-white hover:text-black
          "
        >
          ✕
        </button>

        {/* Prev */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous"
          className="
            absolute left-3 sm:left-8
            flex h-11 w-11 items-center justify-center
            rounded-full border border-white/20
            text-white transition-colors duration-300
            hover:bg-white hover:text-black
          "
        >
          ←
        </button>

        {/* Next */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next"
          className="
            absolute right-3 sm:right-8
            flex h-11 w-11 items-center justify-center
            rounded-full border border-white/20
            text-white transition-colors duration-300
            hover:bg-white hover:text-black
          "
        >
          →
        </button>

        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.96, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 10 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85vh] max-w-[92vw] sm:max-w-[80vw]"
        >
          <img
            src={image.src}
            alt={image.title}
            className="max-h-[85vh] w-full rounded-xl object-contain"
          />
          <p className="mt-4 text-center text-sm font-medium tracking-wide text-white/70">
            {image.title}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================================
   GALLERY PAGE
========================================================= */
export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openAt = (index) => setActiveIndex(index);
  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setActiveIndex((i) => (i + 1) % galleryImages.length);

  // ---------------------------------------------------------
  // SCROLL FIX
  // Agar koi parent/global style (html, body) par overflow:hidden
  // ya fixed height laga hua hai, to gallery page scroll nahi hoti.
  // Yahan mount hote hi force overflow:auto kar diya jata hai, aur
  // unmount hone par purani value wapas set kar di jaati hai.
  // ---------------------------------------------------------
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlHeight = html.style.height;
    const prevBodyHeight = body.style.height;

    html.style.overflow = "auto";
    body.style.overflow = "auto";
    html.style.height = "auto";
    body.style.height = "auto";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
      html.style.height = prevHtmlHeight;
      body.style.height = prevBodyHeight;
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-y-auto bg-white">
      <GalleryNavbar />

      {/* =====================================================
          HERO / HEADING
      ====================================================== */}
      <section className="relative overflow-hidden px-5 pb-10 pt-32 sm:pt-40 sm:pb-14">
        {/* Soft top glow */}
        <div
          className="
            pointer-events-none absolute left-1/2 top-0
            h-[300px] w-[650px] -translate-x-1/2
            rounded-full bg-black/[0.03] blur-[110px]
          "
        />

        {/* Faint background grid — matches the site's premium feel */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1240px] text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              mb-4 inline-block rounded-full border border-black/10
              px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em]
              text-black/60
            "
          >
            Our Work · {galleryImages.length} Projects
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              text-[2.4rem] font-medium leading-[1.05] tracking-[-0.03em]
              text-black sm:text-[3.2rem] lg:text-[3.8rem]
            "
          >
            Gallery
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-black/55 sm:text-base"
          >
            A curated look at the brands, packaging and identities we've
            crafted — clean, considered, and built to last.
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 h-px w-16 origin-center bg-black/15"
          />
        </div>
      </section>

      {/* =====================================================
          MASONRY IMAGE GRID
      ====================================================== */}
      <section className="px-5 pb-24 sm:pb-32">
        <div
          className="
            mx-auto grid max-w-[1240px]
            auto-rows-[170px] grid-cols-2
            gap-3 sm:auto-rows-[220px] sm:gap-5
            md:grid-cols-3 md:auto-rows-[240px]
            lg:grid-cols-4
          "
        >
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.id}
              onClick={() => openAt(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: (index % 4) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`
                group relative overflow-hidden rounded-2xl
                border border-black/[0.06] bg-black/[0.02]
                text-left outline-none
                shadow-[0_6px_24px_rgba(0,0,0,0.035)]
                transition-shadow duration-500
                hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
                focus-visible:ring-2 focus-visible:ring-black/40
                ${spanClass[image.span]}
              `}
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="
                  absolute inset-0 h-full w-full object-cover
                  grayscale-[15%] transition-all duration-700
                  group-hover:scale-[1.06] group-hover:grayscale-0
                "
              />

              {/* Dark gradient for label legibility */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t from-black/70 via-black/0 to-black/0
                  opacity-0 transition-opacity duration-500
                  group-hover:opacity-100
                "
              />

              {/* Premium inner border highlight */}
              <div
                className="
                  pointer-events-none absolute inset-[1px]
                  rounded-[0.95rem] border border-white/30
                  opacity-0 transition-opacity duration-500
                  group-hover:opacity-70
                "
              />

              {/* Title */}
              <span
                className="
                  absolute bottom-4 left-4 right-4
                  translate-y-2 text-sm font-medium tracking-wide
                  text-white opacity-0 transition-all duration-500
                  group-hover:translate-y-0 group-hover:opacity-100
                "
              >
                {image.title}
              </span>

              {/* Corner expand icon */}
              <span
                className="
                  absolute right-3 top-3
                  flex h-8 w-8 items-center justify-center
                  rounded-full bg-white/90 text-black
                  opacity-0 scale-75 transition-all duration-400
                  group-hover:opacity-100 group-hover:scale-100
                "
              >
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path
                    d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      <Lightbox
        image={activeIndex !== null ? galleryImages[activeIndex] : null}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}