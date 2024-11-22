import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Metrics from './components/Metrics';
import Pricing from './components/Pricing';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQ from './pages/FAQ';
import AboutUs from './pages/AboutUs';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ContactPage from './pages/ContactPage';
import PaymentStatus from './pages/PaymentStatus';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-[#0A051E] text-white overflow-hidden">
            <div className="fixed inset-0 bg-grid opacity-20"></div>
            <div className="fixed inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-pink-900/30"></div>
            <div className="relative">
              <Navbar />
              <div className="bg-gradient-to-b from-black/50 to-purple-900/50">
                <Hero />
              </div>
              <Features />
              <Metrics />
              <Pricing />
              <Founder />
              <Testimonials />
              <Contact />
              <Footer />
            </div>
          </div>
        } />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}