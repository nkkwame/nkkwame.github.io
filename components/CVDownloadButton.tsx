'use client'

import React from 'react'
import { Download } from 'lucide-react'
import { downloadCV } from '@/utils/cvGenerator'

interface CVDownloadButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const CVDownloadButton: React.FC<CVDownloadButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = ''
}) => {
  const handleDownload = () => {
    try {
      downloadCV()
    } catch (error) {
      console.error('Error generating CV:', error)
      alert('Sorry, there was an error generating your CV. Please try again.')
    }
  }

  const getButtonClasses = () => {
    const baseClasses = 'flex items-center gap-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900'
    
    const variantClasses = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg',
      secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600'
    }

    const sizeClasses = {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    }

    return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
  }

  const getIconSize = () => {
    if (size === 'sm') return 16
    if (size === 'lg') return 24
    return 20
  }

  return (
    <button
      onClick={handleDownload}
      className={getButtonClasses()}
      aria-label="Download CV as PDF"
    >
      <Download size={getIconSize()} />
      Download CV
    </button>
  )
}

export default CVDownloadButton
