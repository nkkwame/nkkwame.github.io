import SectionBackground from './SectionBackground'
import CVDownloadButton from './CVDownloadButton'

export default function About() {
  return (
    <SectionBackground variant="about">
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              I'm a passionate full-stack developer, IT educator, and content creator 
              dedicated to building innovative solutions and sharing knowledge.
            </p>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  With years of experience in software development and education, I've had the 
                  privilege of working on diverse projects and teaching hundreds of students. 
                  My passion lies in creating digital solutions that make a real impact.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 gradient-text">What I Do</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Build scalable web applications using modern technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Teach IT skills and programming to aspiring developers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Create educational content and tutorials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provide technical consulting and mentorship</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <CVDownloadButton variant="primary" size="lg" />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-400">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Content Pieces</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </SectionBackground>
  )
}
