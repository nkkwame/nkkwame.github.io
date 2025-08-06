'use client'

import Link from 'next/link'
import { Calendar, Play } from 'lucide-react'
import YouTubeEmbed from './YouTubeEmbed'

interface BlogPostCardProps {
  post: {
    id: number
    title: string
    excerpt: string
    date: string
    category: string
    image: string
    youtubeVideoId?: string
    youtubeTitle?: string
  }
  onClick?: () => void
}

export default function BlogPostCard({ post, onClick }: BlogPostCardProps) {
  return (
    <article className="card group">
      {/* Main Image or YouTube Video */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        {post.youtubeVideoId ? (
          <div className="space-y-3">
            {/* YouTube Video Embed */}
            <YouTubeEmbed
              videoId={post.youtubeVideoId}
              title={post.youtubeTitle || post.title}
              showTitle={false}
              className="w-full"
            />
            
            {/* Video indicator badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Play className="w-4 h-4 text-red-600" />
                <span>Video Tutorial</span>
              </div>
              <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </div>
        ) : (
          <>
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Post Content */}
      <div className="space-y-3">
        {/* Date */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Read More / Watch Video Button */}
        <Link 
          href={`/blog/${post.id}`}
          className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-medium hover:underline cursor-pointer transition-colors"
        >
          {post.youtubeVideoId ? (
            <>
              <Play className="w-4 h-4" />
              <span>Read Article & Watch Video</span>
            </>
          ) : (
            <span>Read Full Article</span>
          )}
          <span>→</span>
        </Link>
      </div>
    </article>
  )
}
