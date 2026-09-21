import React from "react";

import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Stats from "../components/sections/Stats";
import Process from "../components/sections/Process";
import Audience from "../components/sections/Audience";
import Packages from "../components/sections/Packages";
import FAQ from "../components/sections/FAQ";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <Process />
      <Audience />
      <Packages />
      <FAQ />
      <CTA />
    </>
  );
}