import React, { useState } from 'react';
import { Check, Loader2 } from 'lucide-react';
import EmailModal from './EmailModal';
import { initiatePayment } from '../services/phonepe';

interface PricingCardProps {
  title: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
  savings?: string;
}

export default function PricingCard({ title, price, duration, description, features, popular, savings }: PricingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentType, setPaymentType] = useState<'before' | 'after'>('before');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async (data: { name: string; email: string; company: string }) => {
    setIsProcessing(true);
    setError(null);
    
    try {
      const priceValue = parseInt(price.replace(/,/g, ''));
      if (isNaN(priceValue)) {
        throw new Error('Invalid price value');
      }

      const redirectUrl = await initiatePayment(
        priceValue,
        "", // Mobile number will be collected on PhonePe page
        data.email,
        data.name
      );

      // Store order details in localStorage before redirect
      localStorage.setItem('pendingOrder', JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company,
        plan: title,
        price: `₹${price}`,
        duration: duration,
        timestamp: new Date().toISOString()
      }));
      
      // Redirect to PhonePe payment page
      window.location.href = redirectUrl;
    } catch (error: any) {
      console.error('Payment initiation failed:', error);
      setError(error.message || 'Failed to initiate payment. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const isPremiumBusiness = title.includes('Premium Business');

  return (
    <div className={`h-full ${popular ? 'lg:scale-110' : ''}`}>
      <div className={`h-full glass-card rounded-2xl transition-all duration-300 ${
        popular ? 'border-2 border-purple-500/50 shadow-lg shadow-purple-500/20' : ''
      }`}>
        <div className="p-8">
          {popular && (
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full">
              Most Popular
            </span>
          )}
          
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
          </div>
          
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-gradient">₹{price}</span>
              <span className="text-gray-400">{duration}</span>
            </div>
            {savings && (
              <div className="mt-3">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  Save ₹{savings}
                </span>
              </div>
            )}
          </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
          
          <div className="space-y-3 mt-auto">
            <button
              onClick={() => {
                setPaymentType('before');
                setError(null);
                setIsModalOpen(true);
              }}
              disabled={isProcessing}
              className="w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25 ring-2 ring-purple-500/50 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'I want to pay'
              )}
            </button>
            
            {!isPremiumBusiness && (
              <button
                onClick={() => {
                  setPaymentType('after');
                  setError(null);
                  setIsModalOpen(true);
                }}
                disabled={isProcessing}
                className="w-full py-3 px-6 rounded-xl font-semibold glass-card hover:bg-white/10 transition-all duration-300 disabled:opacity-50"
              >
                I want to pay after activation
              </button>
            )}
          </div>
        </div>
      </div>

      <EmailModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setError(null);
        }}
        planTitle={title}
        paymentType={paymentType}
        onSubmit={paymentType === 'before' ? handlePayment : undefined}
        error={error}
      />
    </div>
  );
}