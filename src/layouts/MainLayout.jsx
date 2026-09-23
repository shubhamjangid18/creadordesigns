import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";

export default function MainLayout() {
  const location = useLocation();
  const isGallery = location.pathname === "/gallery";

  return (
    <div className="min-h-screen">
      {!isGallery && <Navbar />}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </main>

      {!isGallery && <Footer />}
    </div>
  );
}