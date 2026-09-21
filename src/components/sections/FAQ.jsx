import React, { useState } from "react";

const faq = [
  {
    question: "Can you really deliver in 3–6 days?",
    answer:
      "Yes. Our process is built for speed without sacrificing quality — content structure, layout and revisions all happen within a tight, well-managed timeline.",
  },
  {
    question: "Is the design fully custom?",
    answer:
      "Always. Nothing comes from a template library. Every layout, typeface pairing and color choice is built around your brand and the audience the profile is meant to convince.",
  },
  {
    question: "Do you write the content?",
    answer:
      "We can. Send us your raw notes, website copy or a rough PDF, and our team will restructure and rewrite it into clear, decision-ready content before design begins.",
  },
  {
    question: "Will I get editable files?",
    answer:
      "Yes — every package includes the native source files, not just the final PDF, so your team can update pricing, dates or photos internally whenever needed.",
  },
  {
    question: "Do you redesign existing profiles?",
    answer:
      "Yes. We keep the business information that already works and rebuild the structure and visual system around it, so it feels like an upgrade, not a rewrite.",
  },
  {
    question: "How many pages, normally? And timeline?",
    answer:
      "Starter profiles run 8–12 pages in 3–6 working days. Scale profiles go up to 12+ pages, based on scope, in 5–10 working days.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#faf8f3] py-24 md:py-32">
      <div className="container-main mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <span className="eyebrow text-black/45">FAQ</span>
          <h2 className="display-title mt-4 text-4xl md:text-5xl">
            Questions, answered.
          </h2>
        </div>

        <div className="space-y-4">
          {faq.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-2xl bg-[#f4f2ed] transition-shadow duration-300"
                style={{
                  boxShadow: isOpen
                    ? "0 12px 30px -14px rgba(0,0,0,0.18)"
                    : "0 4px 12px -8px rgba(0,0,0,0.08)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-black md:text-base">
                    {item.question}
                  </span>

                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300">
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                        style={{
                          opacity: isOpen ? 0 : 1,
                          transition: "opacity 0.25s ease",
                        }}
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-6 text-sm leading-7 text-black/50 md:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}