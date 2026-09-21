import React, { useState } from "react";
import { Rocket, TrendingUp, Check } from "lucide-react";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

// Move this into ../../data/packages.js if you prefer keeping data separate.
const packages = [
  {
    key: "starter",
    label: "Starter",
    icon: Rocket,
    title: "For Startups",
    features: [
      "8–12 Pages Company Profile",
      "Structured Content & Premium Design",
      "2–3 Revisions",
      "Print-Ready PDF",
      "Source Files Included",
      "Timeline: 3–6 Working Days",
    ],
  },
  {
    key: "scale",
    label: "Scale",
    icon: TrendingUp,
    title: "For Established Companies",
    features: [
      "12 Pages – Unlimited (Based on Scope)",
      "Advanced Positioning & Corporate Messaging",
      "Premium Layout & Infographics",
      "3–4 Revisions",
      "Print-Ready PDF",
      "Source Files Included",
      "Timeline: 5–10 Days (Approx)",
    ],
  },
];

export default function Packages() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = packages[activeIndex];
  const Icon = active.icon;

  return (
    <section id="packages" className="section bg-[#faf8f3]">
      <style>{`
        @keyframes packagesFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadein { animation: packagesFadeIn 0.35s ease-out; }
      `}</style>
      <div className="container-main">
        <SectionHeading
          eyebrow="Packages"
          title="Choose the scope that fits your business."
          description="Start with a focused profile or build a larger corporate presentation based on your requirements."
        />

        {/* Toggle switch */}
        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
              activeIndex === 0 ? "text-black" : "text-black/35"
            }`}
          >
            Starter
          </button>

          <button
            type="button"
            role="switch"
            aria-checked={activeIndex === 1}
            onClick={() => setActiveIndex(activeIndex === 0 ? 1 : 0)}
            className="relative h-8 w-16 rounded-full bg-black transition-colors duration-300"
          >
            <span
              className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ease-out ${
                activeIndex === 0 ? "left-1 translate-x-0" : "translate-x-8 left-1"
              }`}
            />
          </button>

          <button
            type="button"
            onClick={() => setActiveIndex(1)}
            className={`text-xs font-semibold tracking-wide transition-colors duration-300 ${
              activeIndex === 1 ? "text-black" : "text-black/35"
            }`}
          >
            Scale
          </button>
        </div>

        {/* Card */}
        <div className="mx-auto mt-10 max-w-xl">
          <article
            key={active.key}
            className="premium-card animate-fadein rounded-[2rem] bg-gradient-to-b from-[#16241f] to-[#2f5b4d] p-8 text-white md:p-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black">
              <Icon size={16} strokeWidth={2.2} />
              {active.label}
            </div>

            <h3 className="mt-6 font-display text-3xl md:text-4xl">
              {active.title}
            </h3>

            <ul className="mt-7 space-y-4">
              {active.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[15px]">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
                    <Check size={13} strokeWidth={2.5} className="text-white" />
                  </span>
                  <span className="text-white/85">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-white px-6 py-4 text-center text-sm text-black">
              Exact pricing discussed after requirements review
            </div>

            <Button href="#contact" light className="mt-6 w-full">
              Discuss Your Project
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}