import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-float">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium">Authorized LinkedIn Service Provider</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Unlock LinkedIn's
            <span className="block text-gradient">Hidden Potential</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Unlock the full potential of LinkedIn with premium tools designed for success.
            Join thousands of professionals who trust our services.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="#pricing"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg font-medium transition-all duration-300 hover:opacity-90"
            >
              Get Started
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-10"></div>
      </div>
    </section>
  );
}