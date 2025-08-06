import jsPDF from 'jspdf'

export interface CVData {
  name: string
  location: string
  phone: string
  email: string
  youtube: string
  telegram: string
  github: string
  summary: string
  education: {
    institution: string
    degree: string
    graduation: string
    courses: string[]
  }
  skills: {
    programming: string[]
    design: string[]
    content: string[]
  }
  projects: {
    title: string
    role: string
    period: string
    description: string[]
    platforms?: string[]
  }[]
  teaching: {
    title: string
    institution: string
    year: string
    description: string[]
  }[]
  achievements: string[]
}

export const generateCVPDF = (cvData: CVData) => {
  const pdf = new jsPDF()
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  const margin = 20
  const lineHeight = 6
  let yPosition = margin

  // Helper function to add text with word wrapping
  const addText = (text: string, x: number, y: number, maxWidth: number, fontSize: number = 10, isBold: boolean = false) => {
    pdf.setFontSize(fontSize)
    pdf.setFont('helvetica', isBold ? 'bold' : 'normal')
    
    const lines = pdf.splitTextToSize(text, maxWidth)
    pdf.text(lines, x, y)
    return y + (lines.length * lineHeight)
  }

  // Helper function to check if we need a new page
  const checkNewPage = (requiredSpace: number) => {
    if (yPosition + requiredSpace > pageHeight - margin) {
      pdf.addPage()
      yPosition = margin
    }
  }

  // Header
  pdf.setFillColor(59, 130, 246) // Blue background
  pdf.rect(0, 0, pageWidth, 50, 'F')
  
  // Name
  pdf.setTextColor(255, 255, 255)
  pdf.setFontSize(24)
  pdf.setFont('helvetica', 'bold')
  pdf.text(cvData.name, margin, 25)
  
  // Contact Info
  pdf.setFontSize(10)
  pdf.setFont('helvetica', 'normal')
  const contactInfo = `${cvData.location} | ${cvData.phone} | ${cvData.email}`
  pdf.text(contactInfo, margin, 35)
  
  const socialInfo = `YouTube: ${cvData.youtube} | Telegram: ${cvData.telegram} | GitHub: ${cvData.github}`
  pdf.text(socialInfo, margin, 42)
  
  // Reset text color
  pdf.setTextColor(0, 0, 0)
  yPosition = 60

  // Professional Summary
  checkNewPage(30)
  pdf.setFillColor(240, 240, 240)
  pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 8, 'F')
  yPosition = addText('🎯 PROFESSIONAL SUMMARY', margin + 5, yPosition, pageWidth - 2 * margin, 12, true)
  yPosition += 5
  yPosition = addText(cvData.summary, margin, yPosition, pageWidth - 2 * margin, 10)
  yPosition += 10

  // Education
  checkNewPage(40)
  pdf.setFillColor(240, 240, 240)
  pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 8, 'F')
  yPosition = addText('🧑‍💻 EDUCATION', margin + 5, yPosition, pageWidth - 2 * margin, 12, true)
  yPosition += 5
  yPosition = addText(`${cvData.education.institution}`, margin, yPosition, pageWidth - 2 * margin, 11, true)
  yPosition = addText(`${cvData.education.degree}`, margin, yPosition, pageWidth - 2 * margin, 10)
  yPosition = addText(`Expected Graduation: ${cvData.education.graduation}`, margin, yPosition, pageWidth - 2 * margin, 10)
  yPosition = addText(`Relevant Courses: ${cvData.education.courses.join(', ')}`, margin, yPosition, pageWidth - 2 * margin, 10)
  yPosition += 10

  // Technical Skills
  checkNewPage(50)
  pdf.setFillColor(240, 240, 240)
  pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 8, 'F')
  yPosition = addText('🛠 TECHNICAL SKILLS', margin + 5, yPosition, pageWidth - 2 * margin, 12, true)
  yPosition += 5
  
  yPosition = addText('Programming & Development:', margin, yPosition, pageWidth - 2 * margin, 10, true)
  yPosition = addText(cvData.skills.programming.join(', '), margin + 10, yPosition, pageWidth - 2 * margin - 10, 10)
  yPosition += 3
  
  yPosition = addText('Graphic & Video Design:', margin, yPosition, pageWidth - 2 * margin, 10, true)
  yPosition = addText(cvData.skills.design.join(', '), margin + 10, yPosition, pageWidth - 2 * margin - 10, 10)
  yPosition += 3
  
  yPosition = addText('Content Creation & Digital Strategy:', margin, yPosition, pageWidth - 2 * margin, 10, true)
  yPosition = addText(cvData.skills.content.join(', '), margin + 10, yPosition, pageWidth - 2 * margin - 10, 10)
  yPosition += 10

  // Projects & Experience
  checkNewPage(60)
  pdf.setFillColor(240, 240, 240)
  pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 8, 'F')
  yPosition = addText('🎬 CONTENT & MEDIA PROJECTS', margin + 5, yPosition, pageWidth - 2 * margin, 12, true)
  yPosition += 5

  cvData.projects.forEach((project) => {
    checkNewPage(30)
    yPosition = addText(`${project.role} – ${project.title} (${project.period})`, margin, yPosition, pageWidth - 2 * margin, 11, true)
    project.description.forEach((desc) => {
      yPosition = addText(`• ${desc}`, margin + 10, yPosition, pageWidth - 2 * margin - 10, 10)
    })
    if (project.platforms) {
      yPosition = addText(`Platforms: ${project.platforms.join(', ')}`, margin + 10, yPosition, pageWidth - 2 * margin - 10, 10)
    }
    yPosition += 5
  })

  // Teaching
  checkNewPage(40)
  pdf.setFillColor(240, 240, 240)
  pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 8, 'F')
  yPosition = addText('👨🏽‍🏫 TEACHING & ACADEMIC WORK', margin + 5, yPosition, pageWidth - 2 * margin, 12, true)
  yPosition += 5

  cvData.teaching.forEach((teach) => {
    checkNewPage(25)
    yPosition = addText(`${teach.title} – ${teach.institution} (${teach.year})`, margin, yPosition, pageWidth - 2 * margin, 11, true)
    teach.description.forEach((desc) => {
      yPosition = addText(`• ${desc}`, margin + 10, yPosition, pageWidth - 2 * margin - 10, 10)
    })
    yPosition += 5
  })

  // Achievements
  checkNewPage(30)
  pdf.setFillColor(240, 240, 240)
  pdf.rect(margin, yPosition - 5, pageWidth - 2 * margin, 8, 'F')
  yPosition = addText('🏆 ACHIEVEMENTS', margin + 5, yPosition, pageWidth - 2 * margin, 12, true)
  yPosition += 5

  cvData.achievements.forEach((achievement) => {
    checkNewPage(10)
    yPosition = addText(`• ${achievement}`, margin, yPosition, pageWidth - 2 * margin, 10)
  })

  // Footer
  yPosition += 15
  checkNewPage(20)
  pdf.setFillColor(59, 130, 246)
  pdf.rect(0, pageHeight - 30, pageWidth, 30, 'F')
  pdf.setTextColor(255, 255, 255)
  pdf.setFontSize(8)
  pdf.text('🗣 References available on request | Generated from nkkwame.github.io', margin, pageHeight - 15)

  return pdf
}

export const downloadCV = () => {
  const cvData: CVData = {
    name: 'Joseph Kwame Nkrumah',
    location: 'Cape Coast, Ghana',
    phone: '+233 XXX XXX XXX',
    email: 'nkkwame0162@gmail.com',
    youtube: 'YANA Studios',
    telegram: '@uccnewshub',
    github: 'github.com/nkkwame',
    summary: 'Creative and versatile IT student with strong expertise in full-stack web and mobile development, graphic design, and media content creation. Founder of YANA Studios 🎙, a youth-driven storytelling brand. Skilled in managing social platforms, producing educational content, and leading technical projects. Proficient in software engineering, UI/UX design, and video editing. Passionate about using technology and media to inform, empower, and educate.',
    education: {
      institution: 'University of Cape Coast, Ghana',
      degree: 'BSc. Information Technology',
      graduation: '2026',
      courses: ['Data Structures', 'Advanced Calculus', 'Web Development', 'Computing Education']
    },
    skills: {
      programming: [
        'Python, JavaScript, Dart',
        'React.js, Flutter, Node.js, Firebase',
        'Git, Visual Studio Code, Postman',
        'REST APIs, Full-Stack Development, Web & Mobile UI Design'
      ],
      design: [
        'Adobe Illustrator, Photoshop, Premiere Pro, Canva',
        'Logo Design, Poster/Flyer Design, Video Editing, Motion Graphics'
      ],
      content: [
        'YouTube Content Creation & Editing',
        'Social Media Management (YouTube, Telegram, WhatsApp, Instagram)',
        'Blogging & SEO Optimization',
        'Brand Development & Visual Identity'
      ]
    },
    projects: [
      {
        title: 'YANA Studios',
        role: 'Founder & Creative Director',
        period: '2023 – Present',
        description: [
          'Produced student-centered documentaries and interviews (e.g. "Your Journey of Differences")',
          'Built a cross-platform brand with educational and inspirational content',
          'Managed remote teams for scripting, design, editing, and publishing',
          'Rebranded YouTube channels like Xbee TV → YSStreet and UCC News Hub'
        ],
        platforms: ['YANA Studios (Main Channel)', 'YSStreet', 'UCC News Hub']
      }
    ],
    teaching: [
      {
        title: 'Teaching Practice – Web Development (SHS Computing Curriculum)',
        institution: 'University of Cape Coast',
        year: '2025',
        description: [
          'Delivered a full lesson using real-life examples, core concept questions, and feedback techniques',
          'Created custom slides, reference materials, and lesson notes for evaluation'
        ]
      }
    ],
    achievements: [
      'Built and scaled a student-focused media brand from scratch',
      'Developed and published cross-platform content',
      'Delivered tutorial sessions on coding, digital tools, and content creation',
      'Conducted interviews with graduates and student leaders',
      'Candidate for Adehye Hall Library Chairperson (2024)',
      'Created comprehensive GPA/CGPA calculator guide (PDF, video, and blog)'
    ]
  }

  const pdf = generateCVPDF(cvData)
  pdf.save('Joseph_Kwame_Nkrumah_CV.pdf')
}
