import SectionBackground from './SectionBackground'

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Learning Platform',
      description: 'A comprehensive platform for online learning with interactive courses and progress tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Content Creator Dashboard',
      description: 'Analytics dashboard for content creators to track performance across platforms.',
      tech: ['Vue.js', 'Python', 'FastAPI', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      demo: '#',
      github: '#'
    }
  ]

  return (
    <SectionBackground variant="portfolio">
      <section id="portfolio" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A selection of projects that showcase my development skills and problem-solving approach
            </p>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a href={project.demo} className="btn-primary flex-1 text-center">
                  Live Demo
                </a>
                <a href={project.github} className="btn-secondary flex-1 text-center">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </SectionBackground>
  )
}
