'use client'

import { useState } from 'react'
import { Share2 } from 'lucide-react'

interface ShareButtonProps {
  title: string
  url?: string
}

export default function ShareButton({ title, url }: ShareButtonProps) {
  const [isSharing, setIsSharing] = useState(false)

  const handleShare = async () => {
    setIsSharing(true)
    const shareUrl = url || window.location.href

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          url: shareUrl
        })
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(shareUrl)
        alert('Link copied to clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <button
      onClick={handleShare}
      disabled={isSharing}
      className="inline-flex items-center space-x-2 px-4 py-2 bg-[#1a1a1a] border border-[#27272a] rounded-lg text-gray-300 hover:text-white hover:border-blue-500 transition-colors disabled:opacity-50"
    >
      <Share2 className="w-4 h-4" />
      <span>{isSharing ? 'Sharing...' : 'Share'}</span>
    </button>
  )
}
