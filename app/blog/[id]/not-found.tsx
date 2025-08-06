import Link from 'next/link'
import { FileX, ArrowLeft, Home } from 'lucide-react'

export default function BlogNotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <div className="container-custom py-24">
        <div className="text-center max-w-2xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
              <FileX className="w-12 h-12 text-red-400" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Blog Post Not Found
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Sorry, the blog post you're looking for doesn't exist. It may have been moved, deleted, or you may have entered an incorrect URL.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/blog" 
              className="btn-primary flex items-center space-x-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog Archive</span>
            </Link>
            
            <Link 
              href="/" 
              className="btn-secondary flex items-center space-x-2"
            >
              <Home className="w-4 h-4" />
              <span>Go Home</span>
            </Link>
          </div>

          {/* Suggestions */}
          <div className="mt-12 text-left">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Here's what you can do:</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Check the URL for any typos</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Browse all articles in the blog archive</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Use the search feature to find specific topics</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Check out the latest posts on the homepage</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
