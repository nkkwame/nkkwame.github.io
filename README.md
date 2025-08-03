# Kwame's Portfolio & Blog

A modern, responsive personal portfolio and blog website built with Next.js 14, TypeScript, and Tailwind CSS. Perfect for showcasing your work as a developer, IT teacher, and content creator.

## ✨ Features

### 🎯 Core Sections
- **Hero Section** - Eye-catching introduction with your key roles
- **About** - Personal journey and achievements with statistics
- **Skills** - Technical expertise and teaching capabilities
- **Portfolio** - Featured projects with live demos and source code
- **Services** - Professional offerings with pricing
- **Blog** - Latest articles and tutorials
- **Contact** - Project booking form with budget and timeline options

### 🚀 Technical Features
- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for responsive design
- 🌙 **Dark/Light mode** toggle
- 📱 **Mobile-first** responsive design
- ⚡ **Performance optimized** with lazy loading
- 🎭 **Smooth animations** with Framer Motion
- 📝 **TypeScript** for type safety
- 🔍 **SEO optimized** with meta tags
- 📧 **Contact form** with validation

## 🛠 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

### 3. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js App Router
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
