import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export default function Projects({ darkMode }: ProjectsProps) {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'AmbulanceCall - Emergency Response System',
      category: 'Web Development',
      description: 'An intelligent ambulance booking and tracking system designed to reduce emergency response time and save lives.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Street Map API'],
      contributions: [
        'Implemented real-time ambulance tracking',
        'Developed user-friendly booking interface',
        'Integrated location-based services'
      ],
      githubLink: 'https://github.com/AdityaJadli06/AmbulanceCall.git',
      liveLink: 'https://callambulance.netlify.app/'
    },
    {
      title: 'Weather Forecast System',
      category: 'AI/ML',
      description: 'Collection of ML models including classification, regression, and neural network implementations.',
      technologies: ['HTML', 'CSS', 'Python', 'Flask'],
      contributions: [
        'Built predictive models with 90%+ accuracy',
        'Implemented data preprocessing pipelines',
        'Created visualization dashboards'
      ],
      githubLink: 'https://github.com/AdityaJadli06/Weather-Forecast-System.git',
      liveLink: null
    },
    {
      title: 'Portfolio Website',
      category: 'Web Development',
      description: 'A modern, responsive portfolio website showcasing projects and skills with dark/light mode toggle.',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
      contributions: [
        'Designed clean UI/UX',
        'Ensured full mobile responsiveness'
      ],
      githubLink: '#',
      liveLink: '#'
    }
    ];

  const categories = ['All', 'Web Development', 'AI/ML'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mt-2">
            Featured Work
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 border rounded-full transition-all hover:scale-105 ${
                filter === category
                  ? darkMode
                    ? 'bg-white text-black border-white hover:shadow-lg hover:shadow-white/20'
                    : 'bg-black text-white border-black hover:shadow-lg hover:shadow-black/20'
                  : darkMode
                    ? 'border-white/20 hover:border-white/50 hover:bg-white/10'
                    : 'border-black/20 hover:border-black/50 hover:bg-black/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className={`border p-8 rounded-3xl transition-all hover:scale-[1.02] ${
                darkMode ? 'border-white/10 hover:bg-white/5 hover:shadow-xl hover:shadow-white/5' : 'border-black/10 hover:bg-black/5 hover:shadow-xl hover:shadow-black/5'
              }`}
            >
              <div className="mb-4">
                <span className={`text-xs px-2 py-1 border rounded-full ${
                  darkMode ? 'border-white/20' : 'border-black/20'
                }`}>
                  {project.category}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              
              <p className={`mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-bold mb-2 text-sm">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-full transition-all hover:scale-105 ${
                        darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2 text-sm">Key Contributions:</h4>
                <ul className="space-y-1">
                  {project.contributions.map((contribution, i) => (
                    <li
                      key={i}
                      className={`text-sm flex items-start gap-2 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      <span className={`mt-1.5 w-1 h-1 rounded-full ${
                        darkMode ? 'bg-white' : 'bg-black'
                      }`} />
                      {contribution}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className={`flex items-center gap-2 text-sm px-4 py-2 border rounded-full transition-all hover:scale-105 ${
                      darkMode ? 'text-gray-300 border-white/20 hover:bg-white/10' : 'text-gray-700 border-black/20 hover:bg-black/10'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className={`flex items-center gap-2 text-sm px-4 py-2 border rounded-full transition-all hover:scale-105 ${
                      darkMode ? 'text-gray-300 border-white/20 hover:bg-white/10' : 'text-gray-700 border-black/20 hover:bg-black/10'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}