import React from "react";
import { process } from "../../data/process";
import SectionHeading from "../common/SectionHeading";

export default function Process() {
  return (
    <section id="process" className="section bg-[#faf8f3]">
      <div className="container-main">
        <SectionHeading
          eyebrow="Our process"
          title="Six clear steps. No unnecessary confusion."
          description="Every stage has a specific purpose, keeping the project moving from information collection to final delivery."
        />

        <div className="mt-16 border-t border-black/10">
          {process.map((item) => (
            <div
              key={item.day}
              className="group grid gap-5 border-b border-black/10 py-8 transition-all duration-300 hover:px-3 md:grid-cols-[130px_1fr_1.2fr] md:items-center"
            >
              <div className="text-xs font-bold tracking-[0.18em] text-black/30">
                {item.day}
              </div>

              <h3 className="font-display text-4xl tracking-tight">
                {item.title}
              </h3>

              <p className="max-w-lg text-sm leading-7 text-black/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {["Fast", "Transparent", "Structured", "Professional"].map(
            (item) => (
              <span
                key={item}
                className="rounded-full border border-black/10 px-5 py-2.5 text-sm font-semibold"
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}