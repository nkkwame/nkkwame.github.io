export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['Full-stack development', 'Responsive design', 'Performance optimization', 'SEO-friendly'],
      price: 'Starting at $2000'
    },
    {
      id: 2,
      title: 'IT Training & Education',
      description: 'Comprehensive IT training programs for individuals and organizations.',
      features: ['Curriculum development', 'One-on-one mentoring', 'Group workshops', 'Online courses'],
      price: 'Starting at $100/hour'
    },
    {
      id: 3,
      title: 'Content Creation',
      description: 'Educational content and technical documentation for your audience.',
      features: ['Technical blog posts', 'Video tutorials', 'Course development', 'Documentation'],
      price: 'Starting at $500'
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional services to help you achieve your goals in development, education, and content creation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="card text-center">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="text-gray-600 dark:text-gray-400">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <div className="text-xl font-semibold text-primary-600 mb-6">{service.price}</div>
              <a href="#contact" className="btn-primary w-full">
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
