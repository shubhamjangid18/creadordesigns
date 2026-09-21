import React from "react";

const audiences = [
  "Startups & New Businesses",
  "Established Companies",
  "Manufacturing & Industrial Brands",
  "Real Estate & Construction",
  "Technology & IT Companies",
  "Consulting & Professional Services",
];

export default function Audience() {
  return (
    <section className="section bg-[#f3efe6]">
      <div className="container-main">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-start">

          <div>
            <p className="eyebrow mb-5 text-black/50">
              WHO IT'S FOR
            </p>

            <h2 className="display-title text-5xl md:text-7xl">
              Built for businesses
              <span className="block italic font-normal">
                ready to look serious.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {audiences.map((item, index) => (
              <div
                key={item}
                className="premium-card border border-black/10 rounded-[24px] p-7 bg-[#faf8f3]"
              >
                <span className="text-xs text-black/40">
                  0{index + 1}
                </span>

                <h3 className="mt-12 text-xl font-semibold">
                  {item}
                </h3>

                <div className="mt-6 w-8 h-[2px] bg-black/20" />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}