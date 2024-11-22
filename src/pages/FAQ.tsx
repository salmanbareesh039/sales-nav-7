import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: "How does the activation process work?",
      answer: "After you provide your email and complete the payment (if choosing pay before option), we'll activate your chosen plan within 24 hours. You'll receive confirmation and access instructions directly to your email."
    },
    {
      question: "Is this service legitimate?",
      answer: "Yes, we are an authorized LinkedIn service provider working in collaboration with LinkedIn employees to provide premium services at discounted rates."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major payment methods including UPI, bank transfers, and international payments. Detailed payment instructions will be provided after order confirmation."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time. Contact our support team, and we'll help you with the upgrade process."
    },
    {
      question: "What happens after I submit my email?",
      answer: "Our team will contact you with activation details and payment instructions (if applicable) within 24 hours of submission."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a satisfaction guarantee. If you're not satisfied with the service, contact us within the first 7 days for a full refund."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A051E] text-white">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}