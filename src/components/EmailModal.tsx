import React, { useState } from 'react';
import { X, Loader2, CheckCircle2 } from 'lucide-react';

interface EmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  planTitle: string;
  paymentType: 'before' | 'after';
  onSubmit?: (data: { name: string; company: string; email: string }) => Promise<void>;
  error?: string | null;
}

export default function EmailModal({ isOpen, onClose, planTitle, paymentType, onSubmit, error: externalError }: EmailModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate fields
    if (!formData.name.trim()) {
      setError('Name is required');
      return;
    }
    if (!formData.company.trim()) {
      setError('Company name is required');
      return;
    }
    if (!formData.email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);
    try {
      if (paymentType === 'before' && onSubmit) {
        await onSubmit(formData);
      } else {
        // Handle pay after activation flow
        const response = await fetch('https://formsubmit.co/ajax/salmanbareeshsb@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New Pay After Order: ${planTitle}`,
            name: formData.name.trim(),
            company: formData.company.trim(),
            email: formData.email.trim(),
            plan: planTitle,
            paymentType: 'Pay After',
            orderDate: new Date().toLocaleString()
          })
        });

        const result = await response.json();
        if (!result.success) {
          throw new Error('Failed to submit form');
        }

        setIsSuccess(true);
        setTimeout(() => {
          onClose();
          setFormData({ name: '', company: '', email: '' });
          setIsSuccess(false);
        }, 3000);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit. Please try again or contact support directly at salmanbareeshsb@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative glass-card rounded-2xl p-8 max-w-md w-full mx-4">
        {!isSuccess ? (
          <>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              disabled={isSubmitting}
            >
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-2xl font-bold mb-2 text-white">Enter Your Details</h3>
            <p className="text-gray-300 mb-6">
              {paymentType === 'before' 
                ? 'Proceed to payment for ' 
                : 'Pay after activation for '} 
              {planTitle}
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
                  disabled={isSubmitting}
                  required
                />
              </div>

              {(error || externalError) && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  <p className="text-red-400 text-sm flex items-center gap-2">
                    <span>⚠️</span> {error || externalError}
                  </p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {paymentType === 'before' ? 'Processing...' : 'Submitting...'}
                  </>
                ) : (
                  paymentType === 'before' ? 'Proceed to Payment' : 'Submit'
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
            <p className="text-gray-300">
              Your order has been received. We will contact you shortly to complete your {planTitle} activation.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}