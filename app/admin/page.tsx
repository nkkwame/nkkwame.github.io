import Link from 'next/link'
import { Mail, BookOpen, Users, FileText, TrendingUp, Settings } from 'lucide-react'
import NewsletterAdmin from '@/components/NewsletterAdmin'

export default function AdminPage() {
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

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Newsletter Management */}
          <Link
            href="/admin"
            className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Active</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Newsletter Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Manage subscribers, export data, and track newsletter growth
            </p>
          </Link>

          {/* Blog Management */}
          <Link
            href="/admin/blog"
            className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-green-500 dark:hover:border-green-400 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-sm text-green-600 dark:text-green-400">New!</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Blog Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Create, edit, and manage blog posts with a user-friendly interface
            </p>
          </Link>

          {/* Portfolio Management */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 opacity-75">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Coming Soon</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Portfolio Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Add and manage your projects and portfolio items
            </p>
          </div>

          {/* Analytics */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 opacity-75">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Coming Soon</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Analytics
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Track website traffic, engagement, and performance metrics
            </p>
          </div>

          {/* User Management */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 opacity-75">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Coming Soon</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              User Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Manage user accounts, permissions, and access controls
            </p>
          </div>

          {/* Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 opacity-75">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <Settings className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Coming Soon</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Site Settings
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Configure site settings, SEO, and general preferences
            </p>
          </div>
        </div>

        {/* Newsletter Admin (Current Active Section) */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Newsletter Management
            </h2>
            <Link
              href="/admin/blog"
              className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Manage Blog Posts</span>
            </Link>
          </div>
          <NewsletterAdmin />
        </div>
      </div>
    </div>
  )
}
