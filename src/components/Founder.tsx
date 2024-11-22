import React from 'react';
import { Linkedin } from 'lucide-react';

export default function Founder() {
  return (
    <section id="founder" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-black/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Founder
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden flex-shrink-0 shadow-xl shadow-purple-500/20 bg-gradient-to-br from-purple-600/20 to-blue-600/20">
              <img
                src="https://images.unsplash.com/photo-1509933551745-514268e48884?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHxpbmRpYW4lMjBtYW58ZW58MHx8MHx8fDI%3D"
                alt="Ayyaz Rashid - Founder of Professionals"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-3">Ayyaz Rashid</h3>
              <p className="text-purple-400 text-lg mb-6">Founder & CEO of Professionals</p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                With a passion for empowering professionals and businesses, Ayyaz founded Professionals 
                with a clear vision: to make premium LinkedIn services accessible to everyone. His 
                innovative approach and dedication to client success have helped thousands of 
                individuals and organizations maximize their professional networking potential.
              </p>
              
              <a
                href="https://www.linkedin.com/in/ayyaz-rashid-3480ab304/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-300 text-lg font-medium"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}