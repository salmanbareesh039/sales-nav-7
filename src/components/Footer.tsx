import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-purple-900/30 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Professionals
              </span>
            </div>
            <p className="text-gray-400 max-w-md mb-4">
              Authorized provider of LinkedIn premium services. Helping professionals and businesses maximize their LinkedIn presence.
            </p>
            <div className="space-y-2">
              <p className="text-gray-400">
                <strong className="text-gray-300">Address:</strong><br />
                Oddanchatram, Dindigul<br />
                Tamil Nadu - 624619
              </p>
              <p className="text-gray-400">
                <strong className="text-gray-300">Email:</strong><br />
                <a href="mailto:info@myprofessionals.me" className="hover:text-white transition-colors">
                  info@myprofessionals.me
                </a>
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Sales Navigator</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Premium Business</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Enterprise Solutions</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Professionals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}