'use client'

import { useState } from 'react'
import { Code, GraduationCap, FileText } from 'lucide-react'
import PaymentModal from './PaymentModal'
import SectionBackground from './SectionBackground'

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
      price: 'Starting at ₵2,000',
      amount: 2000,
      icon: Code
    },
    {
      id: 2,
      title: 'IT Training & Education',
      description: 'Comprehensive IT training programs for individuals and organizations.',
      features: ['Curriculum development', 'One-on-one mentoring', 'Group workshops', 'Online courses'],
      price: '₵2,500 going',
      amount: 2500, // Example package price
      icon: GraduationCap
    },
    {
      id: 3,
      title: 'Content Creation',
      description: 'Educational content and technical documentation for your audience.',
      features: ['Technical blog posts', 'Video tutorials', 'Course development', 'Documentation'],
      price: 'Starting at ₵1,000',
      amount: 1000,
      icon: FileText
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
    <SectionBackground variant="services">
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional services to help you achieve your goals in development, education, and content creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card text-center hover-lift">
              {/* Animated icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20 glow-blue">
                  <service.icon className="w-8 h-8 text-blue-400 icon-float" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 gradient-text">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, index) => (
                  <li key={`${service.id}-feature-${index}`} className="text-gray-400 flex items-center justify-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 icon-pulse"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-blue-400 mb-6">{service.price}</div>
              <div className="space-y-3">
                <a href="#contact" className="btn-primary w-full">
                  Get Quote
                </a>
                <button 
                  onClick={() => handlePaymentClick(service)}
                  className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
    </SectionBackground>
  )
}
