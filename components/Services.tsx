'use client'

import { useState } from 'react'
import PaymentModal from './PaymentModal'

export default function Services() {
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    service: '',
    amount: 0,
    clientName: '',
    clientEmail: ''
  })

  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['Full-stack development', 'Responsive design', 'Performance optimization', 'SEO-friendly'],
      price: 'Starting at ₵20,000',
      amount: 20000
    },
    {
      id: 2,
      title: 'IT Training & Education',
      description: 'Comprehensive IT training programs for individuals and organizations.',
      features: ['Curriculum development', 'One-on-one mentoring', 'Group workshops', 'Online courses'],
      price: '₵1,000/hour',
      amount: 5000 // Example package price
    },
    {
      id: 3,
      title: 'Content Creation',
      description: 'Educational content and technical documentation for your audience.',
      features: ['Technical blog posts', 'Video tutorials', 'Course development', 'Documentation'],
      price: 'Starting at ₵5,000',
      amount: 5000
    }
  ]

  const handlePaymentClick = (service: typeof services[0]) => {
    // You could prompt for client details here or use a form
    const clientName = prompt('Enter your name:') || 'Anonymous'
    const clientEmail = prompt('Enter your email:') || 'client@example.com'
    
    if (clientName && clientEmail) {
      setPaymentModal({
        isOpen: true,
        service: service.title,
        amount: service.amount,
        clientName,
        clientEmail
      })
    }
  }

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional services to help you achieve your goals in development, education, and content creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card text-center">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <div className="text-xl font-semibold text-primary-600 mb-6">{service.price}</div>
              <div className="space-y-3">
                <a href="#contact" className="btn-primary w-full">
                  Get Quote
                </a>
                <button 
                  onClick={() => handlePaymentClick(service)}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  💳 Pay Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Modal */}
        <PaymentModal
          isOpen={paymentModal.isOpen}
          onClose={() => setPaymentModal({ ...paymentModal, isOpen: false })}
          service={paymentModal.service}
          amount={paymentModal.amount}
          clientName={paymentModal.clientName}
          clientEmail={paymentModal.clientEmail}
        />
      </div>
    </section>
  )
}
