import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

import { Footer } from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Home } from "../pages/Home";

export const MyRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* О нас */}
        <Route path="/About" element={<About />} />
        {/* Контакты */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};
