import React, { useState } from "react";
import Button from "./Button";
import useScroll from "../../hooks/useScroll";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScroll();

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-4 transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div className="mx-auto w-full max-w-[620px]">
        {/* ================= NAVBAR ================= */}
        <nav
          className={`
            relative flex h-[66px] items-center justify-between
            rounded-[22px]
            border border-black/[0.07]
            bg-white/95
            px-5
            backdrop-blur-xl
            transition-all duration-500
            ${
              scrolled
                ? "shadow-[0_12px_35px_rgba(0,0,0,0.10)]"
                : "shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            }
          `}
        >
          {/* ================= BRAND ================= */}
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Creador Designs"
          >
            {/* Premium Logo Mark */}
            <span className="relative flex h-[36px] w-[36px] items-center justify-center">
              {/* Outer shape */}
              <span
                className="
                  absolute
                  left-[7px]
                  top-[3px]
                  h-[29px]
                  w-[22px]
                  rounded-[4px]
                  border-[3px]
                  border-black
                  transition-transform
                  duration-300
                  group-hover:scale-[1.04]
                "
              />

              {/* Inner shape */}
              <span
                className="
                  absolute
                  left-[12px]
                  top-[9px]
                  h-[17px]
                  w-[11px]
                  rounded-[2px]
                  border-l-[3px]
                  border-b-[3px]
                  border-black
                  bg-white
                "
              />
            </span>

            {/* Brand */}
            <span
              className="
                whitespace-nowrap
                text-[13px]
                font-bold
                uppercase
                tracking-[0.04em]
                text-black
              "
            >
              Creador Designs
            </span>
          </a>

          {/* ================= DESKTOP CTA ================= */}
          <div className="hidden sm:block">
            <Button href="#contact">Get Started</Button>
          </div>

          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="
              flex
              h-[40px]
              w-[40px]
              items-center
              justify-center
              rounded-full
              bg-black
              text-white
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
              sm:hidden
            "
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`text-[19px] leading-none transition-transform duration-300 ${
                mobileOpen ? "rotate-90" : ""
              }`}
            >
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            overflow-hidden
            transition-all
            duration-500
            sm:hidden
            ${
              mobileOpen
                ? "mt-2 max-h-[180px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <div
            className="
              rounded-[22px]
              border
              border-black/[0.07]
              bg-white/95
              p-2
              shadow-[0_15px_40px_rgba(0,0,0,0.10)]
              backdrop-blur-xl
            "
          >
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="
                block
                rounded-[16px]
                bg-black
                px-5
                py-3.5
                text-center
                text-[13px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-black/90
              "
            >
              Get Started
              <span className="ml-1.5">↗</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}