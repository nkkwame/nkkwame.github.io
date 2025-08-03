'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Code, BookOpen, Video, Download, ExternalLink } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="container-custom">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm{' '}
              <span className="gradient-text">Kwame</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Full-Stack Developer • IT Teacher • Content Creator
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              I build exceptional digital experiences, teach the next generation of developers, 
              and create content that empowers the tech community. Available for exciting projects 
              and collaborations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link href="#portfolio" className="btn-primary">
              <Code className="w-5 h-5" />
              View My Work
            </Link>
            <Link href="#contact" className="btn-secondary">
              <ExternalLink className="w-5 h-5" />
              Book a Project
            </Link>
            <Link href="/resume.pdf" className="btn-secondary">
              <Download className="w-5 h-5" />
              Download CV
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <Code className="w-6 h-6 text-primary-600" />
              <span className="font-medium">Full-Stack Development</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <BookOpen className="w-6 h-6 text-secondary-600" />
              <span className="font-medium">IT Education</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
              <Video className="w-6 h-6 text-green-600" />
              <span className="font-medium">Content Creation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center"
          >
            <Link href="#about" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group">
              <span className="mr-2">Learn more about me</span>
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
