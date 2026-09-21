import React from "react";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Home from "../pages/Home";

export default function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}