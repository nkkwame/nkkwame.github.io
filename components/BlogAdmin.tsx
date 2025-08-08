'use client'

import { useState, useEffect } from 'react'
import { useSupabaseAuth } from '@/lib/useSupabaseAuth'
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Save, 
  X, 
  Tag, 
  Download,
  Upload,
  BookOpen,
  TrendingUp,
  FileText,
  Search,
  Filter
} from 'lucide-react'
import { BlogPost, fetchBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost } from '@/lib/blogApi'

// Mock blog posts data (in real app, this would come from your backend/CMS)
const categories = ['Development', 'Education', 'Content Creation']
const availableTags = [
  'Next.js', 'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python',
  'Teaching', 'Education', 'Career', 'YouTube', 'Content Creation',
  'Tutorials', 'Best Practices', 'Beginner', 'Full-Stack', 'Frontend',
  'Backend', 'Web Development', 'Programming', 'Tools', 'Portfolio'
]

interface BlogAdminProps {}

export default function BlogAdmin() {
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all');
  const { user, loading: authLoading } = useSupabaseAuth();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(false)

  // Form state
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    excerpt: '',
    category: 'Development',
    image: '',
    youtubeVideoId: '',
    youtubeTitle: '',
    tags: [],
    readTime: 5,
    author: 'Kwame Nkrumah',
    status: 'draft',
  })

  // Load blog posts from Supabase on component mount
  useEffect(() => {
    if (!user) return;
    setLoading(true)
    fetchBlogPosts()
      .then((data) => setBlogPosts(data || []))
      .finally(() => setLoading(false))
  }, [user])
  if (authLoading) {
    return <div className="flex justify-center items-center min-h-screen">Checking authentication...</div>;
  }
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Admin Login Required</h2>
        <a href="/admin/login" className="px-4 py-2 bg-blue-600 text-white rounded-lg">Go to Admin Login</a>
      </div>
    );
  }

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || post.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || post.status === filterStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Statistics
  const stats = {
    total: blogPosts.length,
    published: blogPosts.filter(post => post.status === 'published').length,
    drafts: blogPosts.filter(post => post.status === 'draft').length,
    thisMonth: blogPosts.filter(post => {
      const postDate = new Date(post.date)
      const now = new Date()
      return postDate.getMonth() === now.getMonth() && postDate.getFullYear() === now.getFullYear()
    }).length,
    categories: Array.from(new Set(blogPosts.map(post => post.category))).length
  }

  // Save as Draft or Publish
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const postData: Omit<BlogPost, 'id'> = {
      title: formData.title ?? '',
      excerpt: formData.excerpt ?? '',
      date: editingPost ? editingPost.date : new Date().toISOString().split('T')[0],
      category: formData.category ?? 'Development',
      image: formData.image ?? 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      youtubeVideoId: formData.youtubeVideoId ?? '',
      youtubeTitle: formData.youtubeTitle ?? '',
      tags: formData.tags ?? [],
      readTime: formData.readTime ?? 5,
      author: formData.author ?? 'Kwame Nkrumah',
      status: formData.status ?? 'draft',
    };
    try {
      if (editingPost) {
        const updated = await updateBlogPost(editingPost.id, postData);
        setBlogPosts(prev => prev.map(post => post.id === editingPost.id ? updated[0] : post));
      } else {
        const created = await createBlogPost(postData);
        setBlogPosts(prev => [created[0], ...prev]);
      }
      resetForm();
    } catch (err) {
      alert('Error saving post: ' + (err as Error).message);
    }
    setLoading(false);
  };

  // Save as Draft
  const handleSaveDraft = () => {
    setFormData(prev => ({ ...prev, status: 'draft' }));
  };
  // Publish
  const handlePublish = () => {
    setFormData(prev => ({ ...prev, status: 'published' }));
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      category: 'Development',
      image: '',
      youtubeVideoId: '',
      youtubeTitle: '',
      tags: [],
      readTime: 5,
      author: 'Kwame Nkrumah',
      status: 'draft',
    });
    setIsCreating(false);
    setEditingPost(null);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData(post);
    setIsCreating(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      setLoading(true)
      try {
        await deleteBlogPost(id)
        setBlogPosts(prev => prev.filter(post => post.id !== id))
      } catch (err) {
        alert('Error deleting post: ' + (err as Error).message)
      }
      setLoading(false)
    }
  }

  const handleTagToggle = (tag: string) => {
    const currentTags = formData.tags || []
    if (currentTags.includes(tag)) {
      setFormData(prev => ({
        ...prev,
        tags: currentTags.filter(t => t !== tag)
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        tags: [...currentTags, tag]
      }))
    }
  }

  // Export/import can be implemented with Supabase if needed
  const exportData = () => {
    const dataStr = JSON.stringify(blogPosts, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `blog-posts-${new Date().toISOString().split('T')[0]}.json`
    link.click()
  }

  // Import can be implemented to batch insert into Supabase if needed
  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    alert('Import is not yet implemented for Supabase version.')
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Blog Administration
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your blog posts, create new content, and track engagement
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Posts</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.total}</p>
            </div>
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Published</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.published}</p>
            </div>
            <BookOpen className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">This Month</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.thisMonth}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Categories</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stats.categories}</p>
            </div>
            <Tag className="w-8 h-8 text-orange-600" />
          </div>
        </div>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setIsCreating(true)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>New Post</span>
          </button>
          
          <button
            onClick={exportData}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
          
          <label className="flex items-center space-x-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
            <Upload className="w-4 h-4" />
            <span>Import</span>
            <input
              type="file"
              accept=".json"
              onChange={importData}
              className="hidden"
            />
          </label>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Create/Edit Form */}
      {isCreating && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {editingPost ? 'Edit Post' : 'Create New Post'}
              </h2>
              <button
                onClick={resetForm}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter post title..."
                  required
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Excerpt *
                </label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                  rows={3}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of your post..."
                  required
                />
              </div>

              {/* Category & Read Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Read Time (minutes)
                  </label>
                  <input
                    type="number"
                    value={formData.readTime}
                    onChange={(e) => setFormData(prev => ({ ...prev, readTime: parseInt(e.target.value) }))}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                    max="60"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Featured Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              {/* YouTube Integration */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    YouTube Video ID (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.youtubeVideoId}
                    onChange={(e) => setFormData(prev => ({ ...prev, youtubeVideoId: e.target.value }))}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="dQw4w9WgXcQ"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    YouTube Title (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.youtubeTitle}
                    onChange={(e) => setFormData(prev => ({ ...prev, youtubeTitle: e.target.value }))}
                    className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Video title for display"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Tags
                </label>
                <div className="flex flex-wrap gap-2 max-h-32 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg p-3">
                  {availableTags.map(tag => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagToggle(tag)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors ${
                        (formData.tags || []).includes(tag)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Selected: {(formData.tags || []).join(', ') || 'None'}
                </p>
              </div>

              {/* Author */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData(prev => ({ ...prev, author: e.target.value }))}
                  className="w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => { handleSaveDraft(); }}
                  className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Save as Draft</span>
                </button>
                <button
                  type="button"
                  onClick={() => { handlePublish(); }}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>Publish</span>
                </button>
                <button
                  type="submit"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Save className="w-4 h-4" />
                  <span>{editingPost ? 'Update Post' : 'Create Post'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Posts Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Blog Posts ({filteredPosts.length})
          </h3>
        </div>

        {loading ? (
          <div className="text-center py-12">Loading...</div>
        ) : filteredPosts.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Post
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-10 h-10 rounded object-cover mr-4"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            {post.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                            {post.excerpt}
                          </div>
                          {Array.isArray(post.tags) && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-1">
                              {post.tags.slice(0, 3).map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded">
                                  {tag}
                                </span>
                              ))}
                              {post.tags.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded">
                                  +{post.tags.length - 3}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {post.status === 'published' ? (
                        <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                          Published
                        </span>
                      ) : (
                        <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                          Draft
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <a
                          href={`/blog/${post.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                          title="View Post"
                        >
                          <Eye className="w-4 h-4" />
                        </a>
                        <button
                          onClick={() => handleEdit(post)}
                          className="text-green-600 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
                          title="Edit Post"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                          title="Delete Post"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              No blog posts found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {searchTerm || filterCategory !== 'all' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Get started by creating your first blog post.'
              }
            </p>
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors mx-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Create First Post</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
