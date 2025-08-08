'use client'

import { useState } from 'react'
import { Mail, ArrowRight } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'inline'
  className?: string
}

export default function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) return

    setStatus('loading')

    try {
      // Simulate subscription
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
      
      if (!subscribers.find((sub: any) => sub.email === email)) {
        subscribers.push({
          email,
          subscribedAt: new Date().toISOString(),
          status: 'active'
        })
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
      }
      
      setStatus('success')
      setEmail('')
      
      setTimeout(() => setStatus('idle'), 3000)
      
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg p-6 text-white ${className}`}>
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-6 h-6" />
          <h3 className="font-semibold">Stay Updated</h3>
        </div>
        <p className="text-blue-100 text-sm mb-4">
          Get latest posts and updates delivered to your inbox.
        </p>
        
        {status === 'success' ? (
          <div className="text-green-300 text-sm font-medium">
            ✓ Successfully subscribed!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 px-3 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-blue-200 text-sm focus:ring-2 focus:ring-white/30 focus:border-transparent"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || !email}
              className="px-4 py-2 bg-white text-blue-600 rounded font-medium text-sm hover:bg-blue-50 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? '...' : 'Join'}
            </button>
          </form>
        )}
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={`border border-gray-200 dark:border-gray-700 rounded-lg p-4 ${className}`}>
        {status === 'success' ? (
          <div className="text-center text-green-600 dark:text-green-400 font-medium">
            ✓ Thank you for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Subscribe to newsletter"
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={status === 'loading'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || !email}
              className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-1"
            >
              {status === 'loading' ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </button>
          </form>
        )}
      </div>
    )
  }

  // Default variant
  return (
    <div className={`text-center ${className}`}>
      <h3 className="text-xl font-semibold mb-2">Subscribe to Newsletter</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Get the latest updates and insights delivered to your inbox.
      </p>
      
      {status === 'success' ? (
        <div className="text-green-600 dark:text-green-400 font-medium">
          ✓ Successfully subscribed! Check your email.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            disabled={status === 'loading' || !email}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {status === 'loading' ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <Mail className="w-4 h-4" />
            )}
            Subscribe
          </button>
        </form>
      )}
    </div>
  )
}
