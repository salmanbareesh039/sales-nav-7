import React from 'react';
import PricingCard from './PricingCard';
import { Mail, Zap, Clock, CheckCircle2, Link, Shield } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      title: "Sales Navigator 1 Month",
      description: "Perfect for individual sales professionals",
      price: "2,500",
      duration: "per month",
      features: [
        "Advanced lead and company search",
        "Extended network access",
        "30 InMail messages per month",
        "Lead recommendations",
        "Real-time sales updates",
        "CRM integration",
        "Smart links",
        "Notes and tags"
      ]
    },
    {
      title: "Sales Navigator 6 Months",
      description: "Best value for serious sales teams",
      price: "11,000",
      duration: "for 6 months",
      features: [
        "Everything in monthly plan",
        "Save ₹4,000 compared to monthly",
        "Extended network access",
        "180 InMail messages total",
        "Priority customer support",
        "Team collaboration tools",
        "Advanced reporting",
        "Bulk InMail credits"
      ],
      popular: true,
      savings: "4,000"
    },
    {
      title: "Linkedin Premium Business",
      description: "Enhanced professional presence",
      price: "3,000",
      duration: "for 6 months",
      features: [
        "See who viewed your profile",
        "Business insights",
        "Unlimited people browsing",
        "15 InMail messages per month",
        "Online video courses",
        "Salary insights",
        "Applicant insights",
        "Premium badge"
      ]
    }
  ];

  const steps = [
    {
      icon: Mail,
      title: "Enter Your Email",
      description: "Simply provide your email address - it's the only information we need from you."
    },
    {
      icon: Clock,
      title: "Choose Payment Option",
      description: "Select whether you want to pay before or after the service activation.For linkedin premium ,no pay after activation available"
    },
    {
      icon: Link,
      title: "Activation Process",
      description: "Sales Navigator: Direct panel activation on your email. LinkedIn Premium: Voucher link sent to your email."
    },
    {
      icon: Shield,
      title: "Start Using",
      description: "Access all premium features instantly after activation. Full support provided."
    }
  ];

  return (
    <>
      <section id="pricing" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {plans.map((plan, index) => (
              <div key={index} className={`${plan.popular ? 'lg:-mt-4 lg:-mb-4' : ''}`}>
                <PricingCard {...plan} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300">
              Simple, fast, and secure activation process
            </p>
          </div>

          {/* Desktop view - Mind map flow */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-24">
              {/* First Row */}
              <div className="relative">
                <div className="glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                    <Mail className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Enter Your Email</h3>
                  <p className="text-gray-300 text-lg">Simply provide your email address - it's the only information we need from you.</p>
                </div>
                {/* Connector */}
                <div className="absolute -right-12 top-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
              </div>

              <div className="relative">
                <div className="glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                    <Clock className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Choose Payment Option</h3>
                  <p className="text-gray-300 text-lg">Select whether you want to pay before or after the service activation. For linkedin premium ,no pay after activation available.</p>
                </div>
              </div>

              {/* Vertical Connectors */}
              <div className="absolute left-1/4 top-[45%] w-0.5 h-24 bg-gradient-to-b from-purple-500 to-transparent"></div>
              <div className="absolute right-1/4 top-[45%] w-0.5 h-24 bg-gradient-to-b from-purple-500 to-transparent"></div>

              {/* Second Row */}
              <div className="relative mt-24">
                <div className="glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                    <Link className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Activation Process</h3>
                  <p className="text-gray-300 text-lg">Sales Navigator: Direct panel activation on your email. LinkedIn Premium: Voucher link sent to your email.</p>
                </div>
                {/* Connector */}
                <div className="absolute -right-12 top-1/2 w-24 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
              </div>

              <div className="relative mt-24">
                <div className="glass-card p-8 rounded-2xl backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">Start Using</h3>
                  <p className="text-gray-300 text-lg">Access all premium features instantly after activation. Full support provided.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile view - Vertical flow */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl backdrop-blur-xl border border-white/10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500 to-transparent mx-auto mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}