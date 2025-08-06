'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, Tag, Grid, List, ChevronDown } from 'lucide-react'
import BlogPostCard from '@/components/BlogPostCard'
import { blogPosts, getCategories, getYears, getMonths, getAllTags } from '@/data/blogData'

type SortOption = 'newest' | 'oldest' | 'title' | 'category'
type ViewMode = 'grid' | 'list'

export default function BlogArchive() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all')
  const [selectedMonth, setSelectedMonth] = useState('all')
  const [selectedTag, setSelectedTag] = useState('all')
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const categories = getCategories()
  const years = getYears()
  const months = getMonths(selectedYear === 'all' ? undefined : selectedYear)
  const tags = getAllTags()

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    const filtered = blogPosts.filter(post => {
      // Search filter
      const matchesSearch = searchTerm === '' || 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))

      // Category filter
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory

      // Year filter
      const matchesYear = selectedYear === 'all' || new Date(post.date).getFullYear() === selectedYear

      // Month filter
      const matchesMonth = selectedMonth === 'all' || 
        new Date(post.date).toLocaleString('default', { month: 'long' }) === selectedMonth

      // Tag filter
      const matchesTag = selectedTag === 'all' || post.tags?.includes(selectedTag)

      return matchesSearch && matchesCategory && matchesYear && matchesMonth && matchesTag
    })

    // Sort posts
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime()
        case 'title':
          return a.title.localeCompare(b.title)
        case 'category':
          return a.category.localeCompare(b.category)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedYear, selectedMonth, selectedTag, sortBy])

  const clearAllFilters = () => {
    setSearchTerm('')
    setSelectedCategory('all')
    setSelectedYear('all')
    setSelectedMonth('all')
    setSelectedTag('all')
  }

  const activeFiltersCount = [
    searchTerm !== '',
    selectedCategory !== 'all',
    selectedYear !== 'all',
    selectedMonth !== 'all',
    selectedTag !== 'all'
  ].filter(Boolean).length

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Blog Archive</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore all {blogPosts.length} articles on development, education, and content creation
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-[#1a1a1a] rounded-2xl p-6 mb-8 border border-[#27272a]">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles by title, content, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-[#0a0a0a] border border-[#27272a] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-[#27272a] text-gray-400'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-[#27272a] text-gray-400'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="bg-[#0a0a0a] border border-[#27272a] rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="title">Title A-Z</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 pt-4 border-t border-[#27272a]">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#27272a] rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => {
                    const year = e.target.value === 'all' ? 'all' : parseInt(e.target.value)
                    setSelectedYear(year)
                    setSelectedMonth('all') // Reset month when year changes
                  }}
                  className="w-full bg-[#0a0a0a] border border-[#27272a] rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Years</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              {/* Month Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Month</label>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#27272a] rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={selectedYear === 'all'}
                >
                  <option value="all">All Months</option>
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>

              {/* Tag Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tag</label>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#27272a] rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Tags</option>
                  {tags.map(tag => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={clearAllFilters}
                  className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors"
                  disabled={activeFiltersCount === 0}
                >
                  Clear All
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-gray-400">
            Showing {filteredPosts.length} of {blogPosts.length} articles
            {searchTerm && (
              <span> for "{searchTerm}"</span>
            )}
          </div>
          
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                  {selectedCategory}
                </span>
              )}
              {selectedYear !== 'all' && (
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  {selectedYear}
                </span>
              )}
              {selectedMonth !== 'all' && (
                <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                  {selectedMonth}
                </span>
              )}
              {selectedTag !== 'all' && (
                <span className="bg-orange-600/20 text-orange-400 px-3 py-1 rounded-full text-sm">
                  <Tag className="w-3 h-3 inline mr-1" />
                  {selectedTag}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Blog Posts Grid/List */}
        {filteredPosts.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-6"
          }>
            {filteredPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                post={post}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">No articles found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={clearAllFilters}
              className="btn-primary"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Back to Home */}
        <div className="text-center mt-16">
          <a href="/#blog" className="btn-secondary">
            ← Back to Latest Posts
          </a>
        </div>
      </div>
    </div>
  )
}
