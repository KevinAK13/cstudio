// AnimatedRoutes.jsx
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import Welcome from "./containers/pages/Welcome";
import Home from "./containers/pages/Home";
import Services from "./containers/pages/Services";
import About from "./containers/pages/About";
import Contact from "./containers/pages/Contact";
import Plans from "./containers/pages/Plans";
import FAQ from "./containers/pages/FAQ";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<HomeWithNavbar />} />
        <Route path="/services" element={<ServicesWithNavbar />} />
        <Route path="/plans" element={<PlansWithNavbar />} />
        <Route path="/contact" element={<ContactWithNavbar />} />
        <Route path="/about" element={<AboutWithNavbar />} />
        <Route path="/FAQ" element={<FAQWithNavbar />} />
      </Routes>
    </AnimatePresence>
  );
}

const HomeWithNavbar = () => (
  <>
    <AnimatePresence>
      <Navbar />
      <Home />
    </AnimatePresence>
  </>
);

const ServicesWithNavbar = () => (
  <>
    <AnimatePresence>
      <Navbar />
      <Services />
    </AnimatePresence>
  </>
);

const PlansWithNavbar = () => (
  <>
    <AnimatePresence>
      <Navbar />
      <Plans />
    </AnimatePresence>
  </>
);

const AboutWithNavbar = () => (
  <>
    <AnimatePresence>
      <Navbar />
      <About />
    </AnimatePresence>
  </>
);

const ContactWithNavbar = () => (
  <>
    <AnimatePresence>
      <Navbar />
      <Contact />
    </AnimatePresence>
  </>
);

const FAQWithNavbar = () => (
  <>
    <AnimatePresence>
      <Navbar />
      <FAQ />
    </AnimatePresence>
  </>
);

export default AnimatedRoutes;
