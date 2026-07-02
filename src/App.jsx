import profile from './images/image.png'
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Footer from './pages/Footer';



export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />
      {/* Contact */}

      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
