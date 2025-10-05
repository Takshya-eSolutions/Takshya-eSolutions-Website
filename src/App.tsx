import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ParticleBackground } from "./components/ParticleBackground";
import { Toaster } from "./components/ui/sonner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";

function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router basename="/Takshya-eSolutions-Website">   {/* 👈 add this line */}
      <div className="min-h-screen bg-background relative">
        <ParticleBackground />
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}
