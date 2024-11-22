import axios from 'axios';
import CryptoJS from 'crypto-js';

interface PaymentData {
  merchantId: string;
  merchantTransactionId: string;
  merchantUserId: string;
  amount: number;
  redirectUrl: string;
  redirectMode: string;
  callbackUrl: string;
  mobileNumber: string;
  paymentInstrument: {
    type: string;
  };
}

const MERCHANT_ID = "PGTESTPAYUAT";
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
const SALT_INDEX = 1;
const API_ENDPOINT = "https://api-preprod.phonepe.com/apis/hermes/pg/v1/pay";

export const initiatePayment = async (
  amount: number,
  mobileNumber: string,
  email: string,
  name: string
): Promise<string> => {
  try {
    const merchantTransactionId = `MT${Date.now()}`;
    const merchantUserId = `MUID${Date.now()}`;
    
    const paymentData: PaymentData = {
      merchantId: MERCHANT_ID,
      merchantTransactionId,
      merchantUserId,
      amount: amount * 100, // Convert to paise
      redirectUrl: `${window.location.origin}/payment-status`,
      redirectMode: "POST",
      callbackUrl: `${window.location.origin}/api/payment-callback`,
      mobileNumber: mobileNumber || "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE"
      }
    };

    // Convert payload to base64
    const base64Payload = btoa(JSON.stringify(paymentData));
    
    // Generate checksum
    const string = `${base64Payload}/pg/v1/pay${SALT_KEY}`;
    const sha256 = CryptoJS.SHA256(string).toString(CryptoJS.enc.Hex);
    const checksum = `${sha256}###${SALT_INDEX}`;

    const response = await axios.post(
      API_ENDPOINT,
      {
        request: base64Payload
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': checksum,
          'X-MERCHANT-ID': MERCHANT_ID
        }
      }
    );

    if (response.data.success) {
      const redirectUrl = response.data.data.instrumentResponse.redirectInfo.url;
      if (!redirectUrl) {
        throw new Error('No redirect URL received from PhonePe');
      }
      return redirectUrl;
    } else {
      throw new Error(response.data.message || 'Payment initiation failed');
    }
  } catch (error: any) {
    console.error('Payment Error:', error.response?.data || error.message);
    if (error.response?.data?.message) {
      throw new Error(`Payment failed: ${error.response.data.message}`);
    }
    throw new Error('Failed to initiate payment. Please try again.');
  }
}