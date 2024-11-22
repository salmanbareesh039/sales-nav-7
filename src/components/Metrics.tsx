import React, { useEffect, useState, useRef } from 'react';
import { Users, ShoppingCart, BadgeCheck } from 'lucide-react';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const increment = end / steps;
    const stepDuration = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        countRef.current = Math.min(Math.round(increment * (currentStep + 1)), end);
        setCount(countRef.current);
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return (
    <span ref={elementRef}>
      {count}{suffix}
    </span>
  );
}

export default function Metrics() {
  const metrics = [
    {
      icon: Users,
      value: 100,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-blue-400',
      gradient: 'from-blue-400 to-purple-400'
    },
    {
      icon: ShoppingCart,
      value: 60,
      suffix: '+',
      label: 'Orders per Month',
      color: 'text-purple-400',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: BadgeCheck,
      value: 40,
      suffix: '+',
      label: 'Active Subscriptions',
      color: 'text-pink-400',
      gradient: 'from-pink-400 to-red-400'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-purple-900/50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="glass-card p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className={`text-5xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-2`}>
                  <Counter 
                    end={metric.value} 
                    duration={2000}
                    suffix={metric.suffix}
                  />
                </div>
                <p className="text-xl text-gray-300">{metric.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}