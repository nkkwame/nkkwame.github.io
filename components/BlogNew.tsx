'use client'

import BlogPostCard from './BlogPostCard'

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Apps with Next.js 14',
      excerpt: 'Complete guide to creating full-stack applications with Next.js 14, TypeScript, and modern best practices. Watch my step-by-step tutorial.',
      date: '2025-07-15',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      youtubeVideoId: 'dQw4w9WgXcQ', // Replace with your actual video ID
      youtubeTitle: 'Next.js 14 Complete Tutorial - Build Full-Stack Apps'
    },
    {
      id: 2,
      title: 'How to Start Teaching Programming in 2025',
      excerpt: 'Essential strategies and tools for aspiring IT educators to create effective programming courses. Watch my complete guide on becoming an IT instructor.',
      date: '2025-07-10',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      youtubeVideoId: 'dQw4w9WgXcQ', // Replace with your actual video ID
      youtubeTitle: 'How to Become a Programming Instructor - Complete Guide'
    },
    {
      id: 3,
      title: 'Creating Engaging Programming Tutorials',
      excerpt: 'Proven techniques for making technical content that keeps viewers engaged and helps them learn effectively.',
      date: '2025-07-05',
      category: 'Content Creation',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'From Beginner to Full-Stack Developer',
      excerpt: 'A complete roadmap for learning web development, from basic HTML to advanced backend concepts.',
      date: '2025-06-28',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'TypeScript Best Practices for 2025',
      excerpt: 'Advanced TypeScript patterns and techniques every developer should know for writing better code. Includes practical examples and video demonstrations.',
      date: '2025-06-20',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=400&h=300&fit=crop',
      youtubeVideoId: 'dQw4w9WgXcQ', // Replace with your actual video ID
      youtubeTitle: 'TypeScript Best Practices 2025 - Code Better'
    },
    {
      id: 6,
      title: 'Building Your Tech YouTube Channel',
      excerpt: 'Step-by-step guide to growing a successful programming channel and connecting with your audience. Learn from my YouTube journey.',
      date: '2025-06-15',
      category: 'Content Creation',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
      youtubeVideoId: 'dQw4w9WgXcQ', // Replace with your actual video ID
      youtubeTitle: 'How to Grow a Programming YouTube Channel'
    }
  ]

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
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              post={post}
              onClick={() => handlePostClick(post)}
            />
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => alert('📚 Blog Archive\n\nFull blog archive page coming soon! All your posts will be organized by category and date.')}
            className="btn-primary"
          >
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}
