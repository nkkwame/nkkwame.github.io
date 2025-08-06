'use client'

import { useState } from 'react'
import { Play, ExternalLink } from 'lucide-react'

interface YouTubeEmbedProps {
  videoId: string
  title: string
  className?: string
  showTitle?: boolean
  autoplay?: boolean
}

export default function YouTubeEmbed({ 
  videoId, 
  title, 
  className = "", 
  showTitle = true,
  autoplay = false 
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${videoId}${autoplay ? '?autoplay=1&rel=0' : '?rel=0'}`
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`

  const handlePlay = () => {
    setIsLoaded(true)
    setIsPlaying(true)
  }

  const handleOpenInYouTube = () => {
    window.open(watchUrl, '_blank', 'noopener,noreferrer')
  }

  if (isLoaded && isPlaying) {
    return (
      <div className={`relative aspect-video bg-black rounded-lg overflow-hidden ${className}`}>
        <iframe
          src={embedUrl}
          title={title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className={`relative aspect-video bg-gray-900 rounded-lg overflow-hidden group cursor-pointer ${className}`}>
      {/* Thumbnail */}
      <img
        src={thumbnailUrl}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        onError={(e) => {
          // Fallback to default thumbnail if maxres doesn't exist
          e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
      
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={handlePlay}
          className="w-16 h-16 md:w-20 md:h-20 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-2xl"
          aria-label={`Play video: ${title}`}
        >
          <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" />
        </button>
      </div>

      {/* YouTube link overlay */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handleOpenInYouTube}
          className="flex items-center space-x-2 bg-black/80 hover:bg-black/90 text-white px-3 py-2 rounded-full text-sm transition-colors duration-200"
          aria-label="Open in YouTube"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Watch on YouTube</span>
        </button>
      </div>

      {/* Video title */}
      {showTitle && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
          <h3 className="text-white font-medium text-sm md:text-base line-clamp-2">
            {title}
          </h3>
        </div>
      )}

      {/* YouTube branding */}
      <div className="absolute bottom-4 right-4 opacity-80">
        <div className="flex items-center space-x-1 text-white text-xs">
          <div className="w-6 h-4 bg-red-600 rounded-sm flex items-center justify-center">
            <Play className="w-3 h-3" fill="currentColor" />
          </div>
          <span className="font-medium">YouTube</span>
        </div>
      </div>
    </div>
  )
}

// Utility function to extract video ID from YouTube URL
export function extractYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/v\/([^&\n?#]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) {
      return match[1]
    }
  }

  return null
}
