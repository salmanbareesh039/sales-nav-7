import React from 'react';
import { Search, Users, MessageCircle } from 'lucide-react';
import FeatureCard from './FeatureCard';

export default function Features() {
  const features = [
    {
      icon: Search,
      title: "Advanced Search & Filters",
      description: "Find decision-makers and prospects with precision using powerful search capabilities and industry-specific filters"
    },
    {
      icon: Users,
      title: "Network Expansion",
      description: "Connect with key professionals beyond your network and build meaningful business relationships"
    },
    {
      icon: MessageCircle,
      title: "Direct Messaging",
      description: "Reach decision-makers directly with InMail credits and track engagement metrics"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Powerful Features for Professionals
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to accelerate your business growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}