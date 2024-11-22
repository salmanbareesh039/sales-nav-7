import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0A051E] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Terms of Service
        </h1>

        <div className="space-y-8">
          <section className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">1. Service Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using our services, you agree to comply with and be bound by these terms. We provide LinkedIn premium services through authorized partnerships.
            </p>
          </section>

          <section className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
            <p className="text-gray-300 mb-4">
              Users are responsible for maintaining the confidentiality of their account information and complying with LinkedIn's terms of service while using our services.
            </p>
          </section>

          <section className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">3. Payment Terms</h2>
            <p className="text-gray-300 mb-4">
              We offer flexible payment options including pay before and pay after activation. All payments are processed securely, and receipts will be provided upon payment completion.
            </p>
          </section>

          <section className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">4. Refund Policy</h2>
            <p className="text-gray-300 mb-4">
              All sales are final. We do not offer refunds for any services once purchased or activated. By making a purchase, you acknowledge and agree to this no-refund policy.
            </p>
          </section>

          <section className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">5. Service Activation</h2>
            <p className="text-gray-300 mb-4">
              Service activation typically occurs within 24 hours of order confirmation. Users will receive activation details via email.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}