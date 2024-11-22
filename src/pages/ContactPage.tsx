import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0A051E] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Contact Us
        </h1>

        <div className="glass-card p-8 rounded-2xl mb-12">
          <p className="text-gray-300 mb-8">
            Have questions about our services? We're here to help! Fill out the form below, and our team will get back to you within 24 hours.
          </p>
          
          <Contact />
        </div>
      </div>
    </div>
  );
}