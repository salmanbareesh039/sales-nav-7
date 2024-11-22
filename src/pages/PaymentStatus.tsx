import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle2, XCircle, Loader2 } from 'lucide-react';

export default function PaymentStatus() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'success' | 'failure' | 'processing'>('processing');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const code = searchParams.get('code');
    const transactionId = searchParams.get('transactionId');
    
    if (code === 'PAYMENT_SUCCESS') {
      setStatus('success');
      setMessage('Payment successful! We will process your order shortly.');
      
      // Clear pending order from localStorage
      localStorage.removeItem('pendingOrder');
    } else if (code === 'PAYMENT_ERROR') {
      setStatus('failure');
      setMessage('Payment failed. Please try again or contact support.');
    } else {
      setStatus('processing');
      setMessage('Processing your payment...');
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-[#0A051E] text-white flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="glass-card p-8 rounded-2xl text-center">
          {status === 'processing' ? (
            <div className="flex flex-col items-center gap-4">
              <Loader2 className="w-16 h-16 text-purple-400 animate-spin" />
              <h2 className="text-2xl font-bold">Processing Payment</h2>
              <p className="text-gray-300">{message}</p>
            </div>
          ) : status === 'success' ? (
            <div className="flex flex-col items-center gap-4">
              <CheckCircle2 className="w-16 h-16 text-green-400" />
              <h2 className="text-2xl font-bold text-green-400">Payment Successful!</h2>
              <p className="text-gray-300">{message}</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <XCircle className="w-16 h-16 text-red-400" />
              <h2 className="text-2xl font-bold text-red-400">Payment Failed</h2>
              <p className="text-gray-300">{message}</p>
            </div>
          )}

          <div className="mt-8">
            <Link
              to="/"
              className="inline-block w-full py-3 px-6 rounded-xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 transition-all duration-300"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}