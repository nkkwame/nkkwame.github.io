// Blog posts data that can be shared across components
export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  youtubeVideoId?: string
  youtubeTitle?: string
  tags?: string[]
  readTime?: number
  author?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Modern Web Apps with Next.js 14',
    excerpt: 'Complete guide to creating full-stack applications with Next.js 14, TypeScript, and modern best practices. Watch my step-by-step tutorial.',
    date: '2025-07-15',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
    youtubeVideoId: 'dQw4w9WgXcQ', // Replace with your actual video ID
    youtubeTitle: 'Next.js 14 Complete Tutorial - Build Full-Stack Apps',
    tags: ['Next.js', 'React', 'TypeScript', 'Full-Stack'],
    readTime: 12,
    author: 'Kwame Nkrumah'
  },
  {
    id: 2,
    title: 'How to Start Teaching Programming in 2025',
    excerpt: 'Essential strategies and tools for aspiring IT educators to create effective programming courses. Watch my complete guide on becoming an IT instructor.',
    date: '2025-07-10',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    youtubeVideoId: 'dQw4w9WgXcQ', // Replace with your actual video ID
    youtubeTitle: 'How to Become a Programming Instructor - Complete Guide',
    tags: ['Teaching', 'Education', 'Career', 'Programming'],
    readTime: 8,
    author: 'Kwame Nkrumah'
  },
  {
    id: 3,
    title: 'Creating Engaging Programming Tutorials',
    excerpt: 'Proven techniques for making technical content that keeps viewers engaged and helps them learn effectively.',
    date: '2025-07-05',
    category: 'Content Creation',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=300&fit=crop',
    tags: ['Content Creation', 'YouTube', 'Tutorials', 'Teaching'],
    readTime: 6,
    author: 'Kwame Nkrumah'
  },
  {
    id: 4,
    title: 'From Beginner to Full-Stack Developer',
    excerpt: 'A complete roadmap for learning web development, from basic HTML to advanced backend concepts.',
    date: '2025-06-28',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    tags: ['Roadmap', 'Beginner', 'Full-Stack', 'Career'],
    readTime: 15,
    author: 'Kwame Nkrumah'
  },
  {
    id: 5,
    title: 'TypeScript Best Practices for 2025',
    excerpt: 'Advanced TypeScript patterns and techniques every developer should know for writing better code. Includes practical examples and video demonstrations.',
    date: '2025-06-20',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?w=400&h=300&fit=crop',
    youtubeVideoId: 'dQw4w9WgXcQ', // Replace with your actual video ID
    youtubeTitle: 'TypeScript Best Practices 2025 - Code Better',
    tags: ['TypeScript', 'Best Practices', 'JavaScript', 'Programming'],
    readTime: 10,
    author: 'Kwame Nkrumah'
  },
  {
    id: 6,
    title: 'Building Your Tech YouTube Channel',
    excerpt: 'Step-by-step guide to growing a successful programming channel and connecting with your audience. Learn from my YouTube journey.',
    date: '2025-06-15',
    category: 'Content Creation',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop',
    youtubeVideoId: 'dQw4w9WgXcQ', // Replace with your actual video ID
    youtubeTitle: 'How to Grow a Programming YouTube Channel',
    tags: ['YouTube', 'Content Creation', 'Social Media', 'Growth'],
    readTime: 7,
    author: 'Kwame Nkrumah'
  },
  // Additional sample posts for archive demo
  {
    id: 7,
    title: 'React Hooks Deep Dive',
    excerpt: 'Understanding React Hooks from basics to advanced patterns. Learn useState, useEffect, useContext, and custom hooks.',
    date: '2025-05-30',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    tags: ['React', 'Hooks', 'Frontend', 'JavaScript'],
    readTime: 14,
    author: 'Kwame Nkrumah'
  },
  {
    id: 8,
    title: 'Teaching Code Online: Tools and Strategies',
    excerpt: 'Essential tools and methods for effective online programming instruction. From screen recording to interactive coding exercises.',
    date: '2025-05-20',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    tags: ['Online Teaching', 'Tools', 'Remote Learning', 'Education'],
    readTime: 9,
    author: 'Kwame Nkrumah'
  },
  {
    id: 9,
    title: 'Building a Developer Portfolio That Gets Noticed',
    excerpt: 'Design and development tips for creating a portfolio that showcases your skills and attracts employers.',
    date: '2025-05-10',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    tags: ['Portfolio', 'Career', 'Design', 'Job Search'],
    readTime: 11,
    author: 'Kwame Nkrumah'
  },
  {
    id: 10,
    title: 'Content Creator Burnout: Prevention and Recovery',
    excerpt: 'Practical strategies for maintaining mental health and creativity while building a content creation career.',
    date: '2025-04-25',
    category: 'Content Creation',
    image: 'https://images.unsplash.com/photo-1524749292158-7540c2494485?w=400&h=300&fit=crop',
    tags: ['Mental Health', 'Burnout', 'Content Creation', 'Wellness'],
    readTime: 8,
    author: 'Kwame Nkrumah'
  }
]

// Helper functions for blog data manipulation
export const getCategories = (): string[] => {
  return Array.from(new Set(blogPosts.map(post => post.category)))
}

export const getYears = (): number[] => {
  const years = blogPosts.map(post => new Date(post.date).getFullYear())
  return Array.from(new Set(years)).sort((a, b) => b - a)
}

export const getMonths = (year?: number): string[] => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  
  if (year) {
    const yearPosts = blogPosts.filter(post => new Date(post.date).getFullYear() === year)
    const months = yearPosts.map(post => new Date(post.date).getMonth())
    return Array.from(new Set(months)).sort((a, b) => b - a).map(month => monthNames[month])
  }
  
  const months = blogPosts.map(post => new Date(post.date).getMonth())
  return Array.from(new Set(months)).sort((a, b) => b - a).map(month => monthNames[month])
}

export const getAllTags = (): string[] => {
  const allTags = blogPosts.flatMap(post => post.tags || [])
  return Array.from(new Set(allTags)).sort()
}
