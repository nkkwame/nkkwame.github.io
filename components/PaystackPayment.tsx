'use client'

import { usePaystackPayment } from 'react-paystack'

interface PaystackPaymentProps {
  amount: number
  email: string
  service: string
  clientName: string
  paymentType: 'full' | 'half'
  onSuccess: (response: any) => void
  onClose: () => void
  setIsProcessing: (value: boolean) => void
}

export default function PaystackPayment({
  amount,
  email,
  service,
  clientName,
  paymentType,
  onSuccess,
  onClose,
  setIsProcessing
}: PaystackPaymentProps) {
  const config = {
    reference: `kwame-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    email,
    amount: amount * 100, // Paystack expects amount in kobo (GHS * 100)
    publicKey: 'pk_test_d0065cff321d6cb2db0db9d9f40958de6716c4dd', // Your Paystack public key
    currency: 'GHS' as const,
    channels: ['card', 'mobile_money', 'ussd', 'bank_transfer', 'apple_pay'] as any,
    metadata: {
      service,
      client_name: clientName,
      payment_type: paymentType === 'half' ? 'Deposit (50%)' : 'Full Payment',
      custom_fields: [
        {
          display_name: 'Service Type',
          variable_name: 'service_type',
          value: service
        },
        {
          display_name: 'Payment Type',
          variable_name: 'payment_type',
          value: paymentType === 'half' ? 'Deposit (50%)' : 'Full Payment'
        }
      ]
    },
  }

  const initializePayment = usePaystackPayment(config)

  const handlePayment = () => {
    setIsProcessing(true)
    
    initializePayment({
      onSuccess: (response: any) => {
        onSuccess(response)
      },
      onClose: () => {
        onClose()
      }
    })
  }

  return (
    <button
      onClick={handlePayment}
      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
    >
      Pay Now with Paystack
    </button>
  )
}
