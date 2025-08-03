export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Apps with Next.js 14',
      excerpt: 'Complete guide to creating full-stack applications with Next.js 14, TypeScript, and modern best practices.',
      date: '2025-07-15',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'How to Start Teaching Programming in 2025',
      excerpt: 'Essential strategies and tools for aspiring IT educators to create effective programming courses.',
      date: '2025-07-10',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'
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
      excerpt: 'Advanced TypeScript patterns and techniques every developer should know for writing better code.',
      date: '2025-06-20',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'Building Your Tech YouTube Channel',
      excerpt: 'Step-by-step guide to growing a successful programming channel and connecting with your audience.',
      date: '2025-06-15',
      category: 'Content Creation',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop'
    }
  ]

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
            <article key={post.id} className="card group">
              <div className="relative overflow-hidden rounded-lg mb-4">
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
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
              <a href={`/blog/${post.id}`} className="text-primary-600 dark:text-primary-400 font-medium hover:underline">
                Read More →
              </a>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a href="/blog" className="btn-primary">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  )
}
