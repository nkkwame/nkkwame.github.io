'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Code, BookOpen, Video, Download, ExternalLink, Sparkles } from 'lucide-react'
import SectionBackground from './SectionBackground'

export default function Hero() {
  return (
    <SectionBackground variant="hero">
      <section className="min-h-screen flex items-center justify-center pt-20 md:pt-0">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium glow-blue">
                <Sparkles className="w-4 h-4 icon-pulse" />
                Available for new projects
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I'm{' '}
                <span className="gradient-text-animated">Kwame</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Full-Stack Developer • IT Teacher • Content Creator
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
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
              <a 
                href="/resume.pdf" 
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            >
              <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#27272a] hover-lift">
                <Code className="w-6 h-6 text-blue-400 icon-float" />
                <span className="font-medium text-white">Full-Stack Development</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#27272a] hover-lift">
                <BookOpen className="w-6 h-6 text-blue-400 icon-float" />
                <span className="font-medium text-white">IT Education</span>
              </div>
              <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-[#1a1a1a]/80 backdrop-blur-sm border border-[#27272a] hover-lift">
                <Video className="w-6 h-6 text-blue-400 icon-float" />
                <span className="font-medium text-white">Content Creation</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-center"
            >
              <Link href="#about" className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors group">
                <span className="mr-2">Learn more about me</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform icon-float" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </SectionBackground>
  )
}
