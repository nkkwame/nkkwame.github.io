import { useState, useEffect } from 'react'

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('skills')
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])
  const skills = [
    { 
      category: 'Frontend', 
      items: [
        { name: 'React', level: 5 },
        { name: 'Next.js', level: 5 },
        { name: 'TypeScript', level: 4 },
        { name: 'Tailwind CSS', level: 5 }
      ] 
    },
    { 
      category: 'Backend', 
      items: [
        { name: 'Node.js', level: 4 },
        { name: 'Python', level: 4 },
        { name: 'PostgreSQL', level: 3 },
        { name: 'MongoDB', level: 4 }
      ] 
    },
    { 
      category: 'Tools', 
      items: [
        { name: 'Git', level: 5 },
        { name: 'Docker', level: 3 },
        { name: 'AWS', level: 3 },
        { name: 'VS Code', level: 5 }
      ] 
    },
    { 
      category: 'Teaching', 
      items: [
        { name: 'Curriculum Design', level: 4 },
        { name: 'Online Learning', level: 5 },
        { name: 'Mentoring', level: 5 },
        { name: 'Technical Writing', level: 4 }
      ] 
    }
  ]

  const renderProgressBar = (level: number) => {
    const percentage = (level / 5) * 100
    return (
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 shadow-inner">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full transition-all duration-1000 flex items-center justify-end pr-3 shadow-sm"
          style={{ width: isVisible ? `${percentage}%` : '0%' }}
        >
          <span className="text-xs text-white font-bold drop-shadow-sm">
            {isVisible && percentage >= 25 ? `${percentage}%` : ''}
          </span>
        </div>
      </div>
    )
  }

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and skills I use to bring ideas to life and teach others
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold gradient-text">{skillGroup.category}</h3>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level === 5 && "Expert"}
                        {skill.level === 4 && "Advanced"}
                        {skill.level === 3 && "Intermediate"}
                        {skill.level === 2 && "Beginner"}
                        {skill.level === 1 && "Learning"}
                      </span>
                    </div>
                    {renderProgressBar(skill.level)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold mb-6 text-gray-700 dark:text-gray-300">Proficiency Levels</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Expert</span>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="w-full h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-500">100%</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Advanced</span>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="w-4/5 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-500">80%</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Intermediate</span>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="w-3/5 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-500">60%</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Beginner</span>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="w-2/5 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-500">40%</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Learning</span>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div className="w-1/5 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
              </div>
              <span className="text-xs text-gray-500">20%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
