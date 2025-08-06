import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, Tag, ArrowLeft, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'
import { blogPosts } from '@/data/blogData'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import ShareButton from '@/components/ShareButton'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

// Generate metadata for each blog post
export function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | Kwame Nkrumah Blog`,
    description: post.excerpt,
    keywords: [post.category, ...(post.tags || [])],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Kwame Nkrumah'],
      tags: post.tags
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image]
    }
  }
}

// Generate static params for all blog posts
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString()
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  // Find previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.id === post.id)
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <article className="container-custom py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog Archive</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{post.author || 'Kwame Nkrumah'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime || 5} min read</span>
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1 bg-[#1a1a1a] border border-[#27272a] rounded-full text-sm text-gray-300"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Share Button */}
          <div className="flex items-center space-x-4">
            <ShareButton title={post.title} />
          </div>
        </header>

        {/* Featured Image or Video */}
        <div className="mb-12">
          {post.youtubeVideoId ? (
            <div className="space-y-6">
              <YouTubeEmbed
                videoId={post.youtubeVideoId}
                title={post.youtubeTitle || post.title}
                className="w-full max-w-4xl mx-auto"
              />
              <div className="text-center">
                <p className="text-gray-400 italic">
                  🎥 This article includes a video tutorial. Watch above or continue reading below.
                </p>
              </div>
            </div>
          ) : (
            <img
              src={post.image}
              alt={post.title}
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          )}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Excerpt */}
          <div className="mb-12">
            <p className="text-xl text-gray-300 leading-relaxed font-medium bg-[#1a1a1a] border-l-4 border-blue-500 p-6 rounded-r-lg">
              {post.excerpt}
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            {/* Sample content - you would replace this with actual blog content */}
            <BlogContent post={post} />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-16 border-t border-[#27272a]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 gradient-text">
                More in {post.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="card group hover:border-blue-500/30 transition-all duration-300"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-[#27272a] max-w-4xl mx-auto">
          {/* Post Navigation */}
          <div className="flex justify-between items-center mb-8">
            {/* Previous Post */}
            <div className="flex-1">
              {previousPost ? (
                <Link
                  href={`/blog/${previousPost.id}`}
                  className="group flex items-center space-x-3 p-4 bg-[#1a1a1a] border border-[#27272a] rounded-lg hover:border-blue-500 transition-colors max-w-sm"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm text-gray-400 mb-1">Previous</div>
                    <div className="font-medium text-white group-hover:text-blue-400 transition-colors truncate">
                      {previousPost.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="max-w-sm"></div>
              )}
            </div>

            {/* Next Post */}
            <div className="flex-1 flex justify-end">
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.id}`}
                  className="group flex items-center space-x-3 p-4 bg-[#1a1a1a] border border-[#27272a] rounded-lg hover:border-blue-500 transition-colors max-w-sm text-right"
                >
                  <div className="min-w-0">
                    <div className="text-sm text-gray-400 mb-1">Next</div>
                    <div className="font-medium text-white group-hover:text-blue-400 transition-colors truncate">
                      {nextPost.title}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                </Link>
              ) : (
                <div className="max-w-sm"></div>
              )}
            </div>
          </div>

          {/* General Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link href="/blog" className="btn-secondary">
              <BookOpen className="w-4 h-4 mr-2" />
              All Posts
            </Link>
            <Link href="/#blog" className="btn-primary">
              Latest Posts
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

// Component for rendering blog content
function BlogContent({ post }: { post: typeof blogPosts[0] }) {
  // This is sample content - you would replace this with actual blog content
  // You could store full content in your blogData.ts or use MDX/Markdown files
  
  const generateSampleContent = (post: typeof blogPosts[0]) => {
    switch (post.category) {
      case 'Development':
        return (
          <div className="space-y-6">
            <h2>Introduction</h2>
            <p>
              In this comprehensive guide, we'll explore the latest developments in {post.title.toLowerCase()}. 
              Whether you're a beginner or an experienced developer, this article will provide valuable insights 
              and practical examples to enhance your skills.
            </p>
            
            <h2>Key Concepts</h2>
            <p>
              Before diving into the implementation details, let's understand the fundamental concepts that make 
              this technology so powerful and widely adopted in modern web development.
            </p>
            
            <h3>Getting Started</h3>
            <p>
              To begin working with these concepts, you'll need to set up your development environment. 
              Here's what you'll need:
            </p>
            <ul>
              <li>Node.js (version 18 or higher)</li>
              <li>A code editor (VS Code recommended)</li>
              <li>Basic understanding of JavaScript/TypeScript</li>
            </ul>
            
            <h3>Implementation</h3>
            <p>
              Now let's dive into the practical implementation. The following examples will demonstrate 
              real-world usage patterns and best practices.
            </p>
            
            <pre className="bg-[#1a1a1a] p-4 rounded-lg overflow-x-auto">
              <code>{`// Example code snippet
function example() {
  console.log("This is a sample code block");
  return "You would replace this with actual code examples";
}`}</code>
            </pre>
            
            <h2>Best Practices</h2>
            <p>
              Here are some important best practices to keep in mind when working with these technologies:
            </p>
            <ol>
              <li>Always follow established conventions</li>
              <li>Write clean, maintainable code</li>
              <li>Test your implementations thoroughly</li>
              <li>Keep performance in mind</li>
            </ol>
            
            <h2>Conclusion</h2>
            <p>
              We've covered the essential aspects of {post.title.toLowerCase()}. With these foundations, 
              you're well-equipped to start implementing these concepts in your own projects. 
              Remember to practice regularly and stay updated with the latest developments in the field.
            </p>
          </div>
        )
      
      case 'Education':
        return (
          <div className="space-y-6">
            <h2>Why This Matters</h2>
            <p>
              Education in technology is rapidly evolving. In this article, we'll explore effective strategies 
              for {post.title.toLowerCase()} and how to implement them successfully.
            </p>
            
            <h2>Understanding Your Audience</h2>
            <p>
              Before creating any educational content, it's crucial to understand who you're teaching and 
              what their specific needs and challenges are.
            </p>
            
            <h3>Learning Objectives</h3>
            <p>By the end of this guide, you'll be able to:</p>
            <ul>
              <li>Identify effective teaching methodologies</li>
              <li>Create engaging educational content</li>
              <li>Measure learning outcomes</li>
              <li>Adapt your approach based on feedback</li>
            </ul>
            
            <h2>Practical Strategies</h2>
            <p>
              Here are proven strategies that you can implement immediately to improve your educational impact:
            </p>
            
            <h3>1. Start with the Basics</h3>
            <p>
              Always ensure your students have a solid foundation before moving to advanced topics. 
              This prevents confusion and builds confidence.
            </p>
            
            <h3>2. Use Real-World Examples</h3>
            <p>
              Connect theoretical concepts to practical applications. This helps students understand 
              the relevance and importance of what they're learning.
            </p>
            
            <h2>Measuring Success</h2>
            <p>
              Track your educational effectiveness through various metrics and feedback mechanisms. 
              This data will help you continuously improve your teaching methods.
            </p>
          </div>
        )
      
      case 'Content Creation':
        return (
          <div className="space-y-6">
            <h2>The Content Creation Landscape</h2>
            <p>
              Content creation has become one of the most powerful ways to share knowledge and build an audience. 
              In this comprehensive guide, we'll explore strategies for {post.title.toLowerCase()}.
            </p>
            
            <h2>Planning Your Content</h2>
            <p>
              Successful content creation starts with proper planning. You need to understand your audience, 
              define your goals, and create a sustainable content strategy.
            </p>
            
            <h3>Content Pillars</h3>
            <p>Organize your content around these key pillars:</p>
            <ul>
              <li><strong>Educational:</strong> Teach your audience something new</li>
              <li><strong>Inspirational:</strong> Motivate and encourage your viewers</li>
              <li><strong>Behind-the-scenes:</strong> Show your personal journey</li>
              <li><strong>Community:</strong> Engage with your audience directly</li>
            </ul>
            
            <h2>Production Tips</h2>
            <p>
              Quality content doesn't require expensive equipment, but it does require attention to detail 
              and consistency in your approach.
            </p>
            
            <h3>Essential Tools</h3>
            <ul>
              <li>Good lighting (natural light works great)</li>
              <li>Clear audio (invest in a decent microphone)</li>
              <li>Stable footage (use a tripod or stabilizer)</li>
              <li>Engaging thumbnails and titles</li>
            </ul>
            
            <h2>Building Your Audience</h2>
            <p>
              Creating great content is just the beginning. You also need to focus on building and 
              maintaining a loyal audience that will engage with your content regularly.
            </p>
            
            <h2>Monetization Strategies</h2>
            <p>
              Once you've built an audience, there are various ways to monetize your content while 
              providing value to your community.
            </p>
          </div>
        )
      
      default:
        return (
          <div className="space-y-6">
            <h2>Article Content</h2>
            <p>
              This is sample content for the blog post "{post.title}". In a real implementation, 
              you would replace this with the actual article content.
            </p>
            <p>
              You could store the full content in your database, use markdown files, or implement 
              a content management system to handle rich text editing.
            </p>
          </div>
        )
    }
  }

  return generateSampleContent(post)
}
