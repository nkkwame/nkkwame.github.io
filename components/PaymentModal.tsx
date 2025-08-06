'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { CreditCard, Shield, Clock } from 'lucide-react'

// Dynamically import the PaystackPayment component to avoid SSR issues
const PaystackPayment = dynamic(() => import('./PaystackPayment'), { 
  ssr: false,
  loading: () => <div className="w-full bg-gray-600 text-white py-3 px-6 rounded-lg font-medium text-center">Loading payment system...</div>
})

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  service: string
  amount: number
  clientName: string
  clientEmail: string
}

export default function PaymentModal({ 
  isOpen, 
  onClose, 
  service, 
  amount, 
  clientName, 
  clientEmail 
}: PaymentModalProps) {
  const [paymentType, setPaymentType] = useState<'full' | 'half'>('full')
  const [isProcessing, setIsProcessing] = useState(false)

  const finalAmount = paymentType === 'half' ? amount / 2 : amount

  const handlePaymentSuccess = (response: any) => {
    console.log('Payment successful:', response)
    alert(`Payment successful! 
Reference: ${response.reference}
Amount: ₵${finalAmount}
Service: ${service}
Type: ${paymentType === 'half' ? 'Deposit (50%)' : 'Full Payment'}

Thank you for your payment! I'll start working on your project soon.`)
    
    sendPaymentNotification(response)
    setIsProcessing(false)
    onClose()
  }

  const handlePaymentClose = () => {
    console.log('Payment cancelled')
    setIsProcessing(false)
  }

  const sendPaymentNotification = async (paymentData: any) => {
    // Send email notification about the payment
    try {
      const emailBody = `
New Payment Received!

Reference: ${paymentData.reference}
Amount: ₵${finalAmount}
Service: ${service}
Payment Type: ${paymentType === 'half' ? 'Deposit (50%)' : 'Full Payment'}
Client: ${clientName} (${clientEmail})
Status: ${paymentData.status || 'success'}

Payment Details:
- Currency: ${paymentData.currency || 'GHS'}
- Payment Method: ${paymentData.gateway_response || 'Paystack'}
- Reference: ${paymentData.reference}

Please follow up with the client to begin the project.
      `

      // You can integrate with your existing email system here
      console.log('Payment notification:', emailBody)
    } catch (error) {
      console.error('Failed to send payment notification:', error)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] border border-[#27272a] rounded-xl max-w-md w-full p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl transition-colors"
        >
          ×
        </button>

        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-blue-500/20 glow-blue">
            <CreditCard className="w-6 h-6 text-blue-400 icon-pulse" />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-white">Make Payment</h3>
          <p className="text-gray-400">
            Secure payment for: <strong className="text-blue-400">{service}</strong>
          </p>
        </div>

        <div className="space-y-4 mb-6">
          {/* Payment Type Selection */}
          <div className="space-y-3">
            <h4 className="text-white font-medium">Payment Option</h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setPaymentType('full')}
                className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                  paymentType === 'full'
                    ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                    : 'bg-[#0a0a0a] border-[#27272a] text-gray-400 hover:border-gray-500'
                }`}
              >
                <div className="text-center">
                  <div className="font-bold">Full Payment</div>
                  <div className="text-xs opacity-80">₵{amount}</div>
                </div>
              </button>
              <button
                onClick={() => setPaymentType('half')}
                className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                  paymentType === 'half'
                    ? 'bg-blue-500/20 border-blue-500 text-blue-400'
                    : 'bg-[#0a0a0a] border-[#27272a] text-gray-400 hover:border-gray-500'
                }`}
              >
                <div className="text-center">
                  <div className="font-bold">50% Deposit</div>
                  <div className="text-xs opacity-80">₵{amount / 2}</div>
                </div>
              </button>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-400">Amount to pay:</span>
              <span className="text-white font-bold text-lg">₵{finalAmount}</span>
            </div>
            <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
              <Clock className="w-3 h-3 mr-1" />
              <span>{paymentType === 'half' ? 'Pay remaining 50% after project completion' : 'One-time payment'}</span>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <div className="space-y-4">
          <PaystackPayment
            amount={finalAmount}
            email={clientEmail}
            service={service}
            clientName={clientName}
            paymentType={paymentType}
            onSuccess={handlePaymentSuccess}
            onClose={handlePaymentClose}
            setIsProcessing={setIsProcessing}
          />

          <div className="text-center text-sm text-gray-500">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4 icon-pulse" />
              <span>Secured by Paystack • Ghana Cedis (₵)</span>
            </div>
            <div className="mt-1">Supports: Mobile Money • Cards • Bank Transfer • USSD</div>
          </div>
        </div>
      </div>
    </div>
  )
}
