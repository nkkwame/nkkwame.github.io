'use client'

import Link from 'next/link'
import BlogPostCard from './BlogPostCard'
import { blogPosts } from '@/data/blogData'

export default function Blog() {
  // Show only the latest 6 posts on the homepage
  const latestPosts = blogPosts.slice(0, 6)

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
