interface ExperienceProps {
  darkMode: boolean;
}

export default function Experience({ darkMode }: ExperienceProps) {
  const experiences = [
    {
      role: 'Full Stack Development Intern',
      organization: 'Stack Sphere',
      duration: 'Oct 2025 - Present',
      responsibilities: [
        'Developed responsive web applications using React and Node.js',
        'Collaborated with cross-functional teams to deliver features',
        'Implemented RESTful APIs and database schemas',
      ]
    },
    {
      role: 'Facilitator Program 2025 Mentor',
      organization: 'Google Developer Groups',
      duration: 'Aug 2025 - Oct 2025',
      responsibilities: [
        'Coached students on google cloud concepts',
        'Thought sessions on cloud architecture and best practices',
        'Guided students through hands-on labs and projects',
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mt-2">
            Experience & Practical Works
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-8 pb-12 border-l-2 ${
                darkMode ? 'border-white/20' : 'border-black/20'
              } ${index === experiences.length - 1 ? 'border-l-0' : ''}`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full border-2 transition-all hover:scale-125 ${
                  darkMode
                    ? 'bg-black border-white'
                    : 'bg-white border-black'
                }`}
              />

              <div className={`mb-2 text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {exp.duration}
              </div>

              <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
              
              <p className={`mb-6 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {exp.organization}
              </p>

              <div>
                <h4 className="font-bold mb-3">Responsibilities & Achievements:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        darkMode ? 'bg-white' : 'bg-black'
                      }`} />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}