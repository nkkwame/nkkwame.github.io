import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kwame - Developer, IT Teacher & Content Creator',
  description: 'Personal portfolio and blog of Kwame - Full-stack developer, IT educator, and content creator. Available for project bookings and collaborations.',
  keywords: ['developer', 'teacher', 'content creator', 'programming', 'IT education', 'web development'],
  authors: [{ name: 'Kwame' }],
  openGraph: {
    title: 'Kwame - Developer, IT Teacher & Content Creator',
    description: 'Personal portfolio and blog showcasing development projects, teaching content, and available for project bookings.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kwame - Developer, IT Teacher & Content Creator',
    description: 'Personal portfolio and blog showcasing development projects, teaching content, and available for project bookings.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
