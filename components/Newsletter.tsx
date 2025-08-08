'use client'

import { useState } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')

    try {
      // For now, we'll simulate the subscription
      // In production, you'd integrate with services like:
      // - Mailchimp, ConvertKit, Substack, or custom backend
      
      await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
      
      // Store email locally for now (in production, send to your newsletter service)
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
      
      if (subscribers.includes(email)) {
        setStatus('error')
        setMessage('You are already subscribed!')
        return
      }
      
      subscribers.push({
        email,
        subscribedAt: new Date().toISOString(),
        status: 'active'
      })
      
      localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
      
      setStatus('success')
      setMessage('Thank you for subscribing! You\'ll receive our latest updates.')
      setEmail('')
      
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Stay Updated with My Newsletter
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get the latest blog posts, tech insights, coding tutorials, and industry news delivered straight to your inbox. No spam, just valuable content.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                📚
              </div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Latest Blog Posts</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Be the first to read new tutorials and insights
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                💡
              </div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Tech Tips & Tricks</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Practical coding tips and industry best practices
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                🚀
              </div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Exclusive Content</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Subscriber-only resources and early access
              </p>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={status === 'loading'}
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4" />
                      Subscribe
                    </>
                  )}
                </button>
              </div>

              {/* Status Message */}
              {message && (
                <div className={`flex items-center gap-2 p-4 rounded-lg ${
                  status === 'success' 
                    ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' 
                    : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                }`}>
                  {status === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">{message}</span>
                </div>
              )}
            </form>

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time. No spam, just quality content.
            </p>
          </div>

          {/* Stats (you can update these) */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>500+ subscribers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>Weekly updates</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>No spam policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
