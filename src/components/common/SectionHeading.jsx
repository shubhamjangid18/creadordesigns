import React from "react";
export default function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}) {
  return (
    <div className="max-w-4xl">
      {eyebrow && (
        <div
          className={`eyebrow mb-5 ${
            light ? "text-white/40" : "text-black/40"
          }`}
        >
          {eyebrow}
        </div>
      )}

      <h2
        className={`display-title text-5xl md:text-7xl ${
          light ? "text-white" : "text-[#111]"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-7 max-w-2xl text-base leading-7 md:text-lg ${
            light ? "text-white/50" : "text-black/50"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}