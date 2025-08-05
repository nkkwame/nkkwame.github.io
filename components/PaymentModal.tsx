'use client'

import { useState } from 'react'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import { CreditCard, Shield, Clock } from 'lucide-react'

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

  const config = {
    public_key: 'FLWPUBK_TEST-SANDBOXDEMOKEY-X', // Replace with your Flutterwave public key
    tx_ref: `kwame-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    amount: finalAmount,
    currency: 'GHS', // Ghana Cedis
    payment_options: 'card,mobilemoney,ussd,bank_transfer',
    customer: {
      email: clientEmail,
      phone_number: '233000000000', // You can collect this in the form
      name: clientName,
    },
    customizations: {
      title: `Payment for ${service}`,
      description: `${paymentType === 'half' ? 'Deposit (50%)' : 'Full Payment'} for ${service}`,
      logo: 'https://nkkwame.github.io/favicon.ico',
    },
  }

  const handleFlutterPayment = useFlutterwave(config)

  const handlePayment = () => {
    setIsProcessing(true)
    handleFlutterPayment({
      callback: (response) => {
        console.log('Payment response:', response)
        if (response.status === 'successful') {
          alert(`Payment successful! 
Transaction ID: ${response.transaction_id}
Amount: ₵${finalAmount}
Service: ${service}
Type: ${paymentType === 'half' ? 'Deposit (50%)' : 'Full Payment'}

Thank you for your payment! I'll start working on your project soon.`)
          
          // Here you could send the payment details to your email or backend
          sendPaymentNotification(response)
        } else {
          alert('Payment was not completed. Please try again.')
        }
        closePaymentModal()
        setIsProcessing(false)
        onClose()
      },
      onClose: () => {
        setIsProcessing(false)
        console.log('Payment modal closed')
      },
    })
  }

  const sendPaymentNotification = async (paymentData: any) => {
    // Send email notification about the payment
    try {
      const emailBody = `
New Payment Received!

Transaction ID: ${paymentData.transaction_id}
Amount: ₵${finalAmount}
Service: ${service}
Payment Type: ${paymentType === 'half' ? 'Deposit (50%)' : 'Full Payment'}
Client: ${clientName} (${clientEmail})
Status: ${paymentData.status}

Payment Details:
- Currency: ${paymentData.currency}
- Payment Method: ${paymentData.payment_type}
- Reference: ${paymentData.tx_ref}

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>

        <div className="text-center mb-6">
          <CreditCard className="w-12 h-12 text-primary-600 mx-auto mb-3" />
          <h3 className="text-2xl font-bold mb-2">Make Payment</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Secure payment for: <strong>{service}</strong>
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setPaymentType('half')}
              className={`p-4 border-2 rounded-lg text-center transition-colors ${
                paymentType === 'half'
                  ? 'border-primary-600 bg-primary-50 dark:bg-primary-900'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <Clock className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold">Deposit (50%)</div>
              <div className="text-xl font-bold text-primary-600">₵{amount / 2}</div>
              <div className="text-sm text-gray-500">Start project now</div>
            </button>

            <button
              onClick={() => setPaymentType('full')}
              className={`p-4 border-2 rounded-lg text-center transition-colors ${
                paymentType === 'full'
                  ? 'border-primary-600 bg-primary-50 dark:bg-primary-900'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <Shield className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold">Full Payment</div>
              <div className="text-xl font-bold text-primary-600">₵{amount}</div>
              <div className="text-sm text-gray-500">Complete payment</div>
            </button>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Amount to pay:</span>
              <span className="text-2xl font-bold text-primary-600">₵{finalAmount}</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {paymentType === 'half' ? 'Remaining ₵' + (amount / 2) + ' due on completion' : 'Full payment - no balance remaining'}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className="btn-primary w-full disabled:opacity-50"
          >
            {isProcessing ? 'Processing...' : `Pay ₵${finalAmount} Now`}
          </button>

          <div className="text-center text-sm text-gray-500">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4" />
              <span>Secured by Flutterwave • Ghana Cedis (₵)</span>
            </div>
            <div className="mt-1">Supports: Mobile Money • Cards • Bank Transfer</div>
          </div>
        </div>
      </div>
    </div>
  )
}
