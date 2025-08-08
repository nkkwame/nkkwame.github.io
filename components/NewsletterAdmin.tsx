'use client'

import { useState, useEffect } from 'react'
import { useSupabaseAuth } from '@/lib/useSupabaseAuth'
import { Mail, Users, Download, Trash2, Calendar } from 'lucide-react'
import { fetchSubscribers, addSubscriber, deleteSubscriber } from '@/lib/newsletterApi'

interface Subscriber {
  id: number
  email: string
  subscribed_at: string
}

export default function NewsletterAdmin() {
  const { user, loading: authLoading } = useSupabaseAuth();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [stats, setStats] = useState({
    total: 0,
    thisMonth: 0
  })
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (!user) return;
    setLoading(true)
    fetchSubscribers()
      .then((data) => {
        setSubscribers(data || [])
        // Calculate stats
        const now = new Date()
        const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1)
        setStats({
          total: data?.length || 0,
          thisMonth: (data || []).filter((sub: Subscriber) => new Date(sub.subscribed_at) >= thisMonth).length
        })
      })
      .finally(() => setLoading(false))
  }, [user])

  const exportSubscribers = () => {
    const csvContent = [
      ['Email', 'Subscribed Date'],
      ...subscribers.map(sub => [
        sub.email,
        new Date(sub.subscribed_at).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `newsletter-subscribers-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleAddSubscriber = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const created = await addSubscriber(email)
      setSubscribers(prev => [created[0], ...prev])
      setEmail('')
    } catch (err) {
      alert('Error adding subscriber: ' + (err as Error).message)
    }
    setLoading(false)
  }

  const handleDeleteSubscriber = async (id: number) => {
    if (confirm('Are you sure you want to delete this subscriber?')) {
      setLoading(true)
      try {
        await deleteSubscriber(id)
        setSubscribers(prev => prev.filter(sub => sub.id !== id))
      } catch (err) {
        alert('Error deleting subscriber: ' + (err as Error).message)
      }
      setLoading(false)
    }
  }

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
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Newsletter Management</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your newsletter subscribers and track growth
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Subscribers</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.total}</p>
            </div>
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        {/* Removed Active Subscribers card: not tracked in Supabase schema */}

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
              <p className="text-2xl font-bold text-purple-600">{stats.thisMonth}</p>
            </div>
            <Calendar className="w-8 h-8 text-purple-600" />
          </div>
        </div>
      </div>

      {/* Actions */}
      <form onSubmit={handleAddSubscriber} className="flex gap-4 mb-6">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Add subscriber email"
          className="px-4 py-2 border border-gray-300 rounded-lg"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          disabled={loading}
        >
          Add Subscriber
        </button>
        <button
          type="button"
          onClick={exportSubscribers}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </form>

      {/* Subscribers Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold">Subscribers ({subscribers.length})</h2>
        </div>
        {loading ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">Loading...</div>
        ) : subscribers.length === 0 ? (
          <div className="p-8 text-center text-gray-500 dark:text-gray-400">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No subscribers yet. Promote your newsletter to get started!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Subscribed Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {subscribers.map((subscriber) => (
                  <tr key={subscriber.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      {subscriber.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(subscriber.subscribed_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <button
                        onClick={() => handleDeleteSubscriber(subscriber.id)}
                        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                        title="Remove subscriber"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
