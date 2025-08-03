# Kwame Nkrumah - Portfolio & Personal Website

> **Full-Stack Developer • IT Educator • Content Creator**

Welcome to my digital space! This is the source code for my personal portfolio website, showcasing my journey as a developer, my passion for teaching, and my commitment to creating meaningful digital experiences.

🌐 **Live Site**: [nkkwame.github.io](https://nkkwame.github.io)

---

## 🚀 About This Project

This portfolio represents more than just code—it's a reflection of my professional journey and values. Built with modern web technologies, it serves as both a showcase of my technical skills and a platform to connect with fellow developers, potential collaborators, and students.

### ✨ What You'll Find Here

🎯 **Professional Showcase**
- My development projects and technical expertise
- Teaching philosophy and educational content
- Services I offer and how we can work together
- Insights through my blog posts and tutorials

🛠️ **Technical Excellence**
- Modern Next.js 14 with App Router architecture
- Responsive design that works on all devices
- Dark/light mode for better user experience
- Smooth animations and professional UI/UX
- SEO optimized for better discoverability

---

## 💻 Tech Stack & Architecture

Built with cutting-edge technologies that I use in my professional work:

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for rapid, maintainable design
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Deployment**: GitHub Pages for reliable hosting
- **Theming**: next-themes for dark/light mode support

---

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx           # Main homepage
│   ├── globals.css        # Global styles and utilities
│   └── not-found.tsx      # Custom 404 page
├── components/
│   ├── Hero.tsx           # Landing section with CTA
│   ├── About.tsx          # Personal story and achievements
│   ├── Skills.tsx         # Technical expertise
│   ├── Portfolio.tsx      # Featured projects
│   ├── Services.tsx       # Professional offerings
│   ├── Blog.tsx           # Content showcase
│   ├── Contact.tsx        # Project inquiry form
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer with social links
│   └── ThemeProvider.tsx  # Dark mode context
├── public/
│   └── resume.pdf         # Professional CV
└── .github/workflows/
    └── deploy.yml         # Automated deployment
```

---

## �️ Local Development

Want to explore the code or contribute? Here's how to get started:

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Setup
```bash
# Clone the repository
git clone https://github.com/nkkwame/nkkwame.github.io.git
cd nkkwame.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the development version.

### Building for Production
```bash
npm run build
```

---

## 🎨 Key Features

### 🌟 User Experience
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile
- **Performance Optimized**: Fast loading times and smooth interactions
- **Accessibility**: Built with accessibility best practices
- **Dark Mode**: Toggle between light and dark themes

### 💼 Professional Content
- **Project Showcase**: Detailed case studies of my development work
- **Service Offerings**: Clear information about how we can collaborate
- **Educational Content**: Blog posts and tutorials for the developer community
- **Contact Integration**: Easy ways to get in touch for projects or opportunities

### 🔧 Technical Implementation
- **Static Site Generation**: Fast, SEO-friendly pages
- **Modern CSS**: Utility-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Automated Deployment**: CI/CD pipeline with GitHub Actions

---

## � Content Management

### Adding New Projects
Update the projects array in `components/Portfolio.tsx`:
```tsx
{
  id: 4,
  title: 'Your Project Name',
  description: 'Brief project description...',
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  liveUrl: 'https://your-project.com',
  githubUrl: 'https://github.com/username/project'
}
```

### Writing Blog Posts
Add new posts to the blogPosts array in `components/Blog.tsx`:
```tsx
{
  id: 7,
  title: 'Your Article Title',
  excerpt: 'Brief description...',
  date: '2024-12-15',
  category: 'Development', // or 'Education', 'Content Creation'
  image: 'https://images.unsplash.com/photo-xxx'
}
```

---

## 🚀 Deployment

This site uses automated deployment through GitHub Actions:

1. **Push to main branch** → Triggers build process
2. **GitHub Actions** → Builds and optimizes the site
3. **GitHub Pages** → Deploys to [nkkwame.github.io](https://nkkwame.github.io)

Deployment typically completes within 2-3 minutes of pushing changes.

---

## 🤝 Connect With Me

I'm always open to interesting conversations, collaboration opportunities, and helping fellow developers:

- **Website**: [nkkwame.github.io](https://nkkwame.github.io)
- **Email**: nkkwame@gmail.com
- **GitHub**: [@nkkwame](https://github.com/nkkwame)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/nkkwame)

---

## � License

This project is open source and available under the [MIT License](LICENSE). Feel free to use it as inspiration for your own portfolio!

---

**Made with ❤️ by Kwame Nkrumah**

*"Building the future, one line of code at a time."*
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills showcase
│   ├── Portfolio.tsx     # Project portfolio
│   ├── Services.tsx      # Service offerings
│   ├── Blog.tsx          # Blog preview
│   ├── Contact.tsx       # Contact form
│   ├── Navigation.tsx    # Header navigation
│   ├── Footer.tsx        # Footer
│   └── ThemeProvider.tsx # Dark mode provider
├── public/               # Static assets
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript config
└── next.config.js        # Next.js config
```

## 🎨 Customization

### 1. Personal Information
Update your personal details in:
- `components/Hero.tsx` - Name, tagline, and introduction
- `components/About.tsx` - Your journey and statistics  
- `components/Footer.tsx` - Contact information and social links

### 2. Portfolio Projects
Edit `components/Portfolio.tsx` to showcase your projects:
```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description...',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: 'path/to/image.jpg',
    demo: 'https://your-demo-link.com',
    github: 'https://github.com/username/repo'
  }
  // Add more projects...
]
```

### 3. Skills & Technologies
Update `components/Skills.tsx` with your skill set:
```typescript
const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL'] },
  // Add your skills...
]
```

### 4. Services & Pricing
Modify `components/Services.tsx` for your service offerings:
```typescript
const services = [
  {
    title: 'Web Development',
    description: 'Your service description...',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    price: 'Starting at $X'
  }
  // Add your services...
]
```

### 5. Blog Posts
Update `components/Blog.tsx` with your latest content:
```typescript
const blogPosts = [
  {
    title: 'Your Blog Post Title',
    excerpt: 'Brief description...',
    date: '2024-01-15',
    category: 'Development',
    image: 'path/to/image.jpg'
  }
  // Add your posts...
]
```

### 6. Color Scheme
Customize colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  secondary: {
    // Your secondary color palette
  }
}
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥 Large screens (1280px+)

## 🌙 Dark Mode

Built-in dark mode support with:
- System preference detection
- Manual toggle
- Smooth transitions
- Persistent user choice

## 📧 Contact Form

The contact form includes:
- Name and email validation
- Subject line
- Budget range selection
- Project timeline
- Detailed message area
- Form submission handling (ready for backend integration)

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder

### Other Platforms
Compatible with any platform supporting Node.js applications.

## 🔧 Environment Variables

Create a `.env.local` file for:
```env
# Email service (if implementing contact form backend)
SMTP_HOST=your-smtp-host
SMTP_USER=your-email
SMTP_PASS=your-password

# Analytics (optional)
GOOGLE_ANALYTICS_ID=your-ga-id
```

## 📝 Content Management

### Blog Posts
- Add markdown files in `content/blog/`
- Use gray-matter for frontmatter
- Images in `public/blog/`

### Portfolio Images
- Store project images in `public/projects/`
- Optimize images for web (WebP recommended)
- Use descriptive alt text for accessibility

## 🎯 SEO Optimization

Built-in SEO features:
- Meta tags in `app/layout.tsx`
- Open Graph tags
- Twitter Cards
- Structured data (JSON-LD)
- Sitemap generation
- Optimized images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📜 License

MIT License - feel free to use for your own portfolio!

## 🆘 Support

Need help customizing your portfolio?
- Check the documentation
- Open an issue
- Contact for custom development services

---

**Ready to showcase your skills?** 🚀 Start customizing your portfolio today!
