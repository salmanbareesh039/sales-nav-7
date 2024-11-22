import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export default function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="glass-card p-8 rounded-2xl transition-all duration-300 h-full">
      <div className="flex flex-col items-center text-center">
        <div className="mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto">
            <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        <blockquote className="text-gray-300 text-lg leading-relaxed mb-8">
          "{quote}"
        </blockquote>

        <div>
          <p className="font-semibold text-white text-xl mb-1">{author}</p>
          <p className="text-gray-400">{role}</p>
          <p className="text-gray-400">{company}</p>
        </div>
      </div>
    </div>
  );
}