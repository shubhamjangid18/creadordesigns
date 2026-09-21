import React from "react";
export default function Button({
  children = "Get Started",
  href = "#contact",
  light = false,
  className = "",
}) {
  return (
    <a
      href={href}
      className={`premium-button inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-bold ${
        light
          ? "bg-white text-black"
          : "bg-[#111] text-white"
      } ${className}`}
    >
      <span>{children}</span>

      <span
        className={`relative z-10 flex h-7 w-7 items-center justify-center rounded-full text-sm ${
          light ? "bg-[#111] text-white" : "bg-[#d8f34a] text-black"
        }`}
      >
        ↗
      </span>
    </a>
  );
}