import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A051E] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <div className="space-y-8">
          <section className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
            <p className="text-gray-300 mb-4">
              We collect only essential information required for service activation, including your name, email address, and company name. This information is used solely for service provision and communication purposes.
            </p>
          </section>

          <section className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">2. Data Usage</h2>
            <p className="text-gray-300 mb-4">
              Your information is used exclusively for:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Service activation and management</li>
              <li>Communication regarding your subscription</li>
              <li>Processing payments</li>
              <li>Customer support</li>
            </ul>
          </section>

          <section className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
            <p className="text-gray-300 mb-4">
              We implement robust security measures to protect your personal information from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          <section className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
            <p className="text-gray-300 mb-4">
              We never sell or share your personal information with third parties except as required for service provision or as required by law.
            </p>
          </section>

          <section className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <p className="text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Access your personal information</li>
              <li>Request data correction</li>
              <li>Request data deletion</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}