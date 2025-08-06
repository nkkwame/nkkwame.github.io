'use client'

import Link from 'next/link'
import BlogPostCard from './BlogPostCard'
import { blogPosts } from '@/data/blogData'

export default function Blog() {
  // Show only the latest 6 posts on the homepage
  const latestPosts = blogPosts.slice(0, 6)

  const handlePostClick = (post: typeof blogPosts[0]) => {
    if (post.youtubeVideoId) {
      // If it has a YouTube video, show an alert with video info
      alert(`🎥 ${post.title}\n\n📺 YouTube Video Available!\n\nThis post includes a video tutorial. Click the play button above to watch the video directly on your site, or click "Watch on YouTube" to view it on YouTube.\n\n📝 Blog content coming soon!`)
    } else {
      // Regular blog post
      alert(`📖 ${post.title}\n\nFull blog post pages coming soon! For now, you can see the preview above.`)
    }
  }

  return (
    <section id="blog" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Blog Posts</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on development, education, and content creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post)}
            />
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog" className="btn-primary">
            View All Posts ({blogPosts.length} total)
          </Link>
        </div>
      </div>
    </section>
  )
}
