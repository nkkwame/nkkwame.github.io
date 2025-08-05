import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Kwame Nkrumah - Full-Stack Developer, IT Teacher & Content Creator',
    template: '%s | Kwame Nkrumah Portfolio'
  },
  description: 'Professional portfolio of Kwame Nkrumah - Full-stack developer, IT educator, and content creator from Ghana. Specializing in web development, programming education, and digital content creation. Available for freelance projects and consultations.',
  keywords: [
    'Kwame Nkrumah',
    'Full-stack developer Ghana',
    'IT teacher Ghana',
    'Web developer Cape Coast',
    'Programming instructor',
    'Content creator Ghana',
    'Next.js developer',
    'TypeScript developer',
    'React developer',
    'IT education Ghana',
    'Programming tutorials',
    'Web development Ghana',
    'Freelance developer',
    'UCC programming',
    'Ghana tech',
    'JavaScript developer',
    'Software developer Ghana'
  ],
  authors: [{ name: 'Kwame Nkrumah', url: 'https://nkkwame.github.io' }],
  creator: 'Kwame Nkrumah',
  publisher: 'Kwame Nkrumah',
  metadataBase: new URL('https://nkkwame.github.io'),
  alternates: {
    canonical: 'https://nkkwame.github.io',
  },
  openGraph: {
    title: 'Kwame Nkrumah - Full-Stack Developer, IT Teacher & Content Creator',
    description: 'Professional portfolio showcasing web development projects, IT education content, and programming tutorials. Available for freelance work and consultations in Ghana.',
    url: 'https://nkkwame.github.io',
    siteName: 'Kwame Nkrumah Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Kwame Nkrumah - Full-Stack Developer Portfolio',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kwame Nkrumah - Full-Stack Developer, IT Teacher & Content Creator',
    description: 'Professional portfolio showcasing web development projects, IT education content, and programming tutorials.',
    images: ['/og-image.jpg'],
    creator: '@your_twitter_handle', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // We'll get this from Google Search Console
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
