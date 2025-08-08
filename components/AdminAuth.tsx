'use client'

import { useState, useEffect } from 'react'

const ADMIN_KEY = 'nkkwame0162@git' // Change this to your own secret key
const STORAGE_KEY = 'admin_authenticated'

export default function AdminAuth({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [input, setInput] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isAuthed = localStorage.getItem(STORAGE_KEY)
      if (isAuthed === 'true') setAuthenticated(true)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (input === ADMIN_KEY) {
      setAuthenticated(true)
      localStorage.setItem(STORAGE_KEY, 'true')
      setError('')
    } else {
      setError('Invalid key. Please try again.')
    }
  }

  const handleLogout = () => {
    setAuthenticated(false)
    localStorage.removeItem(STORAGE_KEY)
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Admin Login</h2>
          <input
            type="password"
            placeholder="Enter admin key..."
            value={input}
            onChange={e => setInput(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            required
          />
          {error && <div className="text-red-600 text-sm mb-4">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition-colors text-sm"
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  )
}
