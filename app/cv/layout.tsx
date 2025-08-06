import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Joseph Kwame Nkrumah - CV | Full-Stack Developer & Content Creator',
  description: 'Professional CV of Joseph Kwame Nkrumah - IT Student, Full-Stack Developer, Content Creator, and Founder of YANA Studios. Experienced in React, Flutter, Python, and digital media production.',
  keywords: ['CV', 'Resume', 'Full-Stack Developer', 'Content Creator', 'YANA Studios', 'React', 'Flutter', 'Python', 'Ghana', 'IT Student'],
  openGraph: {
    title: 'Joseph Kwame Nkrumah - Professional CV',
    description: 'Full-Stack Developer, Content Creator & IT Student from Ghana. Founder of YANA Studios.',
    type: 'profile',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph Kwame Nkrumah - CV',
    description: 'Full-Stack Developer, Content Creator & IT Student from Ghana',
  }
}

export default function CVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
