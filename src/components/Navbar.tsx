import React, { useState } from 'react';
import { useScrollDirection } from '../hooks/useScrollDirection';
import { Briefcase, Menu, X } from 'lucide-react';

export default function Navbar() {
  const isHidden = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#0A051E]/80 backdrop-blur-md transition-transform duration-300 ${
      isHidden ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
              <Briefcase className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Professionals
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              Pricing
            </a>
            <a href="#how-it-works" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              How It Works
            </a>
            <a href="#founder" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              Founder
            </a>
            <a href="#testimonials" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-white hover:text-purple-400 text-base font-medium transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0A051E]/95 rounded-lg mb-4">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#founder"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Founder
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}