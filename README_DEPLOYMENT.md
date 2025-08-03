# Kwame's Portfolio

Personal portfolio and blog website showcasing my work as a Full-Stack Developer, IT Teacher, and Content Creator.

## 🚀 Live Site

Visit the live portfolio at: **[nkkwame.github.io/Kwame](https://nkkwame.github.io/Kwame)**

## 🛠️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons
- **GitHub Pages** - Free hosting

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx           # Main homepage
│   ├── globals.css        # Global styles
│   └── not-found.tsx      # Custom 404 page
├── components/
│   ├── Hero.tsx           # Landing section
│   ├── About.tsx          # About me section
│   ├── Skills.tsx         # Technical skills
│   ├── Portfolio.tsx      # Project showcase
│   ├── Services.tsx       # Services & pricing
│   ├── Blog.tsx           # Blog posts preview
│   ├── Contact.tsx        # Contact form
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Footer component
│   └── ThemeProvider.tsx  # Dark mode provider
├── public/
│   └── resume.pdf         # CV/Resume file
└── .github/
    └── workflows/
        └── deploy.yml     # Auto-deployment workflow
```

## 🎨 Features

- **Responsive Design** - Works on all devices
- **Dark Mode** - Toggle between light and dark themes
- **Smooth Animations** - Framer Motion animations
- **Contact Form** - Email integration for project inquiries
- **Blog Section** - Showcase articles and tutorials
- **SEO Optimized** - Meta tags and structured data
- **Auto Deployment** - GitHub Actions workflow

## 💻 Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/nkkwame/Kwame.git
   cd Kwame
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production
```bash
npm run build
```

## 🚀 Deployment to GitHub Pages

This portfolio is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment
1. **Push to main branch** - Triggers automatic deployment
2. **GitHub Actions** - Builds and deploys the site
3. **Live in ~2 minutes** - Available at nkkwame.github.io/Kwame

### Manual Deployment
If you need to deploy manually:
```bash
npm run deploy
```

### GitHub Pages Setup
1. Go to your repository settings
2. Navigate to **Pages** section
3. Set source to **GitHub Actions**
4. Save settings

## 📝 Content Management

### Adding Blog Posts
Edit `components/Blog.tsx` and add new posts to the `blogPosts` array:

```tsx
{
  id: 7,
  title: 'Your New Post Title',
  excerpt: 'Brief description of your post...',
  date: '2024-12-15',
  category: 'Development', // Development, Education, or Content Creation
  image: 'https://images.unsplash.com/photo-xxx'
}
```

### Updating Projects
Edit `components/Portfolio.tsx` and modify the `projects` array with your work.

### Customizing Services
Update pricing and offerings in `components/Services.tsx`.

## 🔧 Configuration

### Environment Variables
- `NODE_ENV=production` - Enables GitHub Pages configuration
- Base path automatically handled for GitHub Pages deployment

### Custom Domain (Optional)
To use a custom domain:
1. Add your domain to `public/CNAME`
2. Update `basePath` in `next.config.js`
3. Configure DNS settings

## 📧 Contact

- **Email**: nkkwame0162@gmail.com
- **GitHub**: [@nkkwame](https://github.com/nkkwame)
- **Portfolio**: [nkkwame.github.io/Kwame](https://nkkwame.github.io/Kwame)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
