import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/nkkwame', icon: Github },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/nkkwame', icon: Linkedin },
    { name: 'Twitter', href: 'https://x.com/uccnewshub', icon: Twitter },
    { name: 'Email', href: 'mailto:josephkwame.nkrumah@stu.ucc.edu.gh', icon: Mail },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">KN</span>
              </div>
              <span className="font-bold text-xl gradient-text">KWAME</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Full-stack developer, IT educator, and content creator passionate about 
              building exceptional digital experiences and teaching the next generation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/#about" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</Link></li>
              <li><Link href="/#portfolio" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/#services" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-600 dark:text-gray-400">Web Development</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">IT Training</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Content Creation</span></li>
              <li><span className="text-gray-600 dark:text-gray-400">Consulting</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Kwame Nkrumah. All rights reserved. Powered by YANA STUDIOS
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center mt-2 md:mt-0">
            Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}
