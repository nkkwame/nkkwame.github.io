'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Download, 
  Share2, 
  ArrowLeft, 
  MapPin, 
  Phone, 
  Mail, 
  Youtube, 
  Github,
  MessageCircle,
  GraduationCap,
  Code,
  Palette,
  Video,
  Award,
  Users,
  Calendar,
  ExternalLink
} from 'lucide-react'

export default function CVPage() {
  const [isSharing, setIsSharing] = useState(false)

  const handleDownloadPDF = () => {
    // Create PDF content
    const cvContent = `
Joseph Kwame Nkrumah - CV

📍 Cape Coast, Ghana | 📞 +233 XXX XXX XXX | ✉️ nkkwame0162@gmail.com
🔗 YouTube: YANA Studios | Telegram: @uccnewshub | GitHub: github.com/nkkwame

🎯 PROFESSIONAL SUMMARY
Creative and versatile IT student with strong expertise in full-stack web and mobile development, graphic design, and media content creation. Founder of YANA Studios 🎙, a youth-driven storytelling brand. Skilled in managing social platforms, producing educational content, and leading technical projects. Proficient in software engineering, UI/UX design, and video editing. Passionate about using technology and media to inform, empower, and educate.

🧑‍💻 EDUCATION
University of Cape Coast, Ghana
BSc. Information Technology
Expected Graduation: 2026
Relevant Courses: Data Structures, Advanced Calculus, Web Development, Computing Education

🛠 TECHNICAL SKILLS

Programming & Development:
• Python, JavaScript, Dart
• React.js, Flutter, Node.js, Firebase
• Git, Visual Studio Code, Postman
• REST APIs, Full-Stack Development, Web & Mobile UI Design

Graphic & Video Design:
• Adobe Illustrator, Photoshop, Premiere Pro, Canva
• Logo Design, Poster/Flyer Design, Video Editing, Motion Graphics

Content Creation & Digital Strategy:
• YouTube Content Creation & Editing
• Social Media Management (YouTube, Telegram, WhatsApp, Instagram)
• Blogging & SEO Optimization
• Brand Development & Visual Identity

🎬 CONTENT & MEDIA PROJECTS

Founder & Creative Director – YANA Studios (2023 – Present)
• Produced student-centered documentaries and interviews (e.g. "Your Journey of Differences")
• Built a cross-platform brand with educational and inspirational content
• Managed remote teams for scripting, design, editing, and publishing
• Rebranded YouTube channels like Xbee TV → YSStreet and UCC News Hub

Digital Platforms:
• YANA Studios (Main Channel)
• YSStreet
• UCC News Hub

👨🏽‍🏫 TEACHING & ACADEMIC WORK

Teaching Practice – Web Development (SHS Computing Curriculum), University of Cape Coast – 2025
• Delivered a full lesson using real-life examples, core concept questions, and feedback techniques
• Created custom slides, reference materials, and lesson notes for evaluation

Student Engagement:
• Candidate for Adehye Hall Library Chairperson (2024)
• Initiated academic support and digital literacy events
• Created a GPA/CGPA calculator guide (PDF, video, and blog)

💡 PROJECTS & INITIATIVES
• GPA/CGPA Calculator Series
• YANA MindShare – TED-style student talk platform
• Diamond Club Talks – Health & awareness campaigns
• Remote Creative Team Setup – for YANA Studios

🏆 ACHIEVEMENTS
• Built and scaled a student-focused media brand from scratch
• Developed and published cross-platform content
• Delivered tutorial sessions on coding, digital tools, and content creation
• Conducted interviews with graduates and student leaders

🗣 REFERENCES
Available on request.

---
Generated from: https://nkkwame.github.io/cv
Date: ${new Date().toLocaleDateString()}
    `

    // Create and download the file
    const blob = new Blob([cvContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'Joseph_Kwame_Nkrumah_CV.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleShare = async () => {
    setIsSharing(true)
    const shareData = {
      title: 'Joseph Kwame Nkrumah - CV',
      text: 'Check out my professional CV - Full-Stack Developer, Content Creator & IT Student',
      url: window.location.href
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href)
        alert('CV link copied to clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <div className="container-custom py-12 max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex gap-3">
            <button
              onClick={handleDownloadPDF}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>

            <button
              onClick={handleShare}
              disabled={isSharing}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors disabled:opacity-50"
            >
              <Share2 className="w-4 h-4" />
              <span>{isSharing ? 'Sharing...' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className="bg-[#1a1a1a] border border-[#27272a] rounded-xl p-8 space-y-8">
          {/* Personal Info */}
          <div className="text-center border-b border-[#27272a] pb-8">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Joseph Kwame Nkrumah
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Cape Coast, Ghana</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+233 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>nkkwame0162@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors">
                <Youtube className="w-4 h-4" />
                <span>YANA Studios</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="#" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>@uccnewshub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://github.com/nkkwame" className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Professional Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Creative and versatile IT student with strong expertise in full-stack web and mobile development, 
              graphic design, and media content creation. Founder of <strong className="text-blue-400">YANA Studios 🎙</strong>, 
              a youth-driven storytelling brand. Skilled in managing social platforms, producing educational content, 
              and leading technical projects. Proficient in software engineering, UI/UX design, and video editing. 
              Passionate about using technology and media to inform, empower, and educate.
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-400" />
              Education
            </h2>
            <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">University of Cape Coast, Ghana</h3>
              <p className="text-blue-400 font-medium mb-2">BSc. Information Technology</p>
              <p className="text-gray-400 mb-3">Expected Graduation: 2026</p>
              <p className="text-gray-300">
                <strong>Relevant Courses:</strong> Data Structures, Advanced Calculus, Web Development, Computing Education
              </p>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              🛠 Technical Skills
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Programming */}
              <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  Programming & Development
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Python, JavaScript, Dart</li>
                  <li>• React.js, Flutter, Node.js</li>
                  <li>• Firebase, Git, VS Code</li>
                  <li>• REST APIs, Full-Stack Development</li>
                  <li>• Web & Mobile UI Design</li>
                </ul>
              </div>

              {/* Design */}
              <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-purple-400" />
                  Graphic & Video Design
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Adobe Illustrator, Photoshop</li>
                  <li>• Premiere Pro, Canva</li>
                  <li>• Logo Design, Poster/Flyer Design</li>
                  <li>• Video Editing, Motion Graphics</li>
                </ul>
              </div>

              {/* Content Creation */}
              <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Video className="w-5 h-5 text-red-400" />
                  Content & Digital Strategy
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• YouTube Content Creation</li>
                  <li>• Social Media Management</li>
                  <li>• Blogging & SEO Optimization</li>
                  <li>• Brand Development</li>
                  <li>• Visual Identity Design</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              🎬 Content & Media Projects
            </h2>
            
            <div className="space-y-6">
              {/* YANA Studios */}
              <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Founder & Creative Director</h3>
                    <p className="text-blue-400 font-medium">YANA Studios</p>
                  </div>
                  <span className="text-gray-400 flex items-center gap-1 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    2023 – Present
                  </span>
                </div>
                
                <ul className="space-y-2 text-gray-300">
                  <li>• Produced student-centered documentaries and interviews (e.g. "Your Journey of Differences")</li>
                  <li>• Built a cross-platform brand with educational and inspirational content</li>
                  <li>• Managed remote teams for scripting, design, editing, and publishing</li>
                  <li>• Rebranded YouTube channels like Xbee TV → YSStreet and UCC News Hub</li>
                </ul>

                <div className="mt-4">
                  <p className="text-white font-medium mb-2">Digital Platforms:</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm">YANA Studios (Main Channel)</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">YSStreet</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">UCC News Hub</span>
                  </div>
                </div>
              </div>

              {/* Teaching */}
              <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Teaching Practice – Web Development</h3>
                    <p className="text-blue-400 font-medium">University of Cape Coast</p>
                  </div>
                  <span className="text-gray-400 flex items-center gap-1 mt-2 sm:mt-0">
                    <Calendar className="w-4 h-4" />
                    2025
                  </span>
                </div>
                
                <ul className="space-y-2 text-gray-300">
                  <li>• Delivered comprehensive lessons using real-life examples and interactive techniques</li>
                  <li>• Created custom slides, reference materials, and lesson notes for evaluation</li>
                  <li>• Engaged students through core concept questions and feedback sessions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              💡 Projects & Initiatives
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">GPA/CGPA Calculator Series</h3>
                <p className="text-gray-400 text-sm">Educational content helping students calculate academic performance</p>
              </div>
              
              <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">YANA MindShare</h3>
                <p className="text-gray-400 text-sm">TED-style student talk platform for knowledge sharing</p>
              </div>
              
              <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Diamond Club Talks</h3>
                <p className="text-gray-400 text-sm">Health & awareness campaigns for student community</p>
              </div>
              
              <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Remote Creative Team Setup</h3>
                <p className="text-gray-400 text-sm">Organized distributed teams for YANA Studios content production</p>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-400" />
              Achievements
            </h2>
            
            <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-6">
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Built and scaled a student-focused media brand from scratch</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Developed and published cross-platform content</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Delivered tutorial sessions on coding, digital tools, and content creation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Conducted interviews with graduates and student leaders</span>
                </li>
              </ul>
            </div>
          </section>

          {/* References */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-green-400" />
              References
            </h2>
            
            <div className="bg-[#0a0a0a] border border-[#27272a] rounded-lg p-6 text-center">
              <p className="text-gray-300">Available on request</p>
              <p className="text-gray-400 text-sm mt-2">Professional and academic references will be provided upon request</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-1">Generated from: https://nkkwame.github.io/cv</p>
        </div>
      </div>
    </div>
  )
}
