'use client'

import { ReactNode } from 'react'

interface SectionBackgroundProps {
  children: ReactNode
  variant?: 'hero' | 'about' | 'services' | 'portfolio' | 'contact'
}

export default function SectionBackground({ children, variant = 'hero' }: SectionBackgroundProps) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Unified floating orbs for all sections */}
      <div className="floating-orb" />
      <div className="floating-orb" />
      <div className="floating-orb" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      {/* Animated particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </div>
  )
}
