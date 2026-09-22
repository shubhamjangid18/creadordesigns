import React from "react";
import useScroll from "../../hooks/useScroll";
import logo from "../../assets/images/CDlogo.png";

const BRAND_NAME = "Creador Designs";
const BRAND_TAGLINE = "Creativity is in our DNA";

export default function Navbar() {
  const scrolled = useScroll();

  // Click par hero section pe scroll karo
  const handleBrandClick = (e) => {
    e.preventDefault();

    const hero = document.getElementById("home");

    if (hero) {
      hero.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        px-3
        sm:px-4
        transition-all
        duration-500
        ${scrolled ? "pt-3" : "pt-5"}
      `}
    >
      <div className="mx-auto w-full max-w-[480px]">
        {/* =====================================================
            TRANSPARENT GLASS NAVBAR
        ====================================================== */}

        <nav
          className={`
            flex
            min-h-[76px]
            items-center
            justify-center
            rounded-[18px]
            border
            px-4
            py-2
            backdrop-blur-xl
            transition-all
            duration-500

            sm:min-h-[84px]
            sm:rounded-[22px]
            sm:px-5

            ${
              scrolled
                ? "border-black/[0.08] bg-white/55 shadow-[0_18px_50px_rgba(0,0,0,0.10)] backdrop-blur-2xl"
                : "border-black/[0.06] bg-white/25 shadow-[0_4px_24px_rgba(0,0,0,0.03)]"
            }
          `}
        >
          {/* =================================================
              BRAND (LOGO + NAME, CLICK → HERO)
          ================================================== */}
          <a
            href="#home"
            onClick={handleBrandClick}
            aria-label={BRAND_NAME}
            className="group flex items-center gap-1.5 text-center sm:gap-2"
          >
            {/* Logo */}
            <img
              src={logo}
              alt={`${BRAND_NAME} logo`}
              className="
                h-[34px]
                w-auto
                shrink-0
                object-contain
                transition-transform
                duration-500
                group-hover:scale-105

                sm:h-[38px]
              "
            />

            {/* Name + Tagline */}
            <span className="flex flex-col items-center justify-center">
              {/* Company Name */}
              <span
                className="
                  whitespace-nowrap
                  text-[20px]
                  font-extrabold
                  leading-none
                  tracking-[-0.03em]
                  text-black
                  transition-all
                  duration-300

                  sm:text-[23px]
                "
              >
                {BRAND_NAME}
              </span>

              {/* Tagline */}
              <span
                className="
                  mt-[6px]
                  whitespace-nowrap
                  text-[7px]
                  font-semibold
                  uppercase
                  leading-none
                  tracking-[0.24em]
                  text-black/60
                  transition-colors
                  duration-300
                  group-hover:text-black

                  sm:text-[8px]
                "
              >
                {BRAND_TAGLINE}
              </span>
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}