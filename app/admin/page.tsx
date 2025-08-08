
import Link from 'next/link'
import { Mail, BookOpen, Users, FileText, TrendingUp, Settings } from 'lucide-react'
import NewsletterAdmin from '@/components/NewsletterAdmin'
import BlogAdmin from '@/components/BlogAdmin'
import { useState } from 'react'
import { useSupabaseAuth } from '@/lib/useSupabaseAuth'

  // Client-side state for switching admin views
  const [activeSection, setActiveSection] = useState<'newsletter' | 'blog'>('newsletter');
  const { user, loading: authLoading } = useSupabaseAuth();

  if (authLoading) {
    return <div className="flex justify-center items-center min-h-screen">Checking authentication...</div>;
  }
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Admin Login Required</h2>
        <a href="/admin/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Go to Admin Login</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your website content and track performance
          </p>
        </div>

        {/* Admin Section Switcher */}
        <div className="flex gap-4 mb-8">
          <button
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeSection === 'newsletter' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700'}`}
            onClick={() => setActiveSection('newsletter')}
          >
            <Mail className="inline w-5 h-5 mr-2" /> Newsletter Management
          </button>
          <button
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${activeSection === 'blog' ? 'bg-green-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700'}`}
            onClick={() => setActiveSection('blog')}
          >
            <BookOpen className="inline w-5 h-5 mr-2" /> Blog Management
          </button>
        </div>

        {/* Render selected admin section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          {activeSection === 'newsletter' ? <NewsletterAdmin /> : <BlogAdmin />}
        </div>
      </div>
    </div>
  )
}
