'use client'

import { useState } from 'react'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  content?: string
}

export default function BlogAdmin() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    category: 'Development',
    image: '',
    content: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newPost: BlogPost = {
      id: Date.now(),
      title: formData.title,
      excerpt: formData.excerpt,
      date: new Date().toISOString().split('T')[0],
      category: formData.category,
      image: formData.image,
      content: formData.content
    }
    
    setPosts([newPost, ...posts])
    setFormData({
      title: '',
      excerpt: '',
      category: 'Development',
      image: '',
      content: ''
    })
    setIsAdding(false)
    
    // In a real app, you'd save this to a database or file
    console.log('New blog post:', newPost)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Admin</h1>
          <button
            onClick={() => setIsAdding(true)}
            className="btn-primary"
          >
            Add New Post
          </button>
        </div>

        {/* Add Post Form */}
        {isAdding && (
          <div className="card mb-8">
            <h2 className="text-xl font-semibold mb-6">Add New Blog Post</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700"
                  >
                    <option value="Development">Development</option>
                    <option value="Education">Education</option>
                    <option value="Content Creation">Content Creation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Excerpt</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700"
                  placeholder="Brief description of your post..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={10}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 bg-white dark:bg-gray-700"
                  placeholder="Write your blog post content here..."
                />
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn-primary">
                  Publish Post
                </button>
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Posts List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="card">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <div className="mb-2">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                  {post.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{post.excerpt}</p>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && !isAdding && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No blog posts yet. Add your first post!</p>
          </div>
        )}
      </div>
    </div>
  )
}
