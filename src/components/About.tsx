interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className={`text-sm tracking-widest ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2">
            ABOUT ME
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>

            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I am Aditya Jadli, a B.Tech Computer Science Engineering student with a strong interest in Artificial Intelligence, Machine Learning, and Full Stack Web Development. I am currently working as a Full Stack Web Developer Intern at Stack Spear, where I am gaining hands-on experience in MERN stack development and real-world application building.            
            </p>

            <p className={`text-lg leading-relaxed mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I have developed multiple web-based projects and possess strong skills in HTML, CSS, JavaScript, and MERN stack technologies. Along with technical development, I actively participate in hackathons, technical events, certification programs, and college event management activities, which have strengthened my leadership and collaboration skills.
            </p>

            <p className={`text-lg leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I am passionate about continuous learning, technology innovation, and building efficient solutions to real-world problems.
            </p>

          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Areas of Interest</h3>
            <ul className="space-y-3">
              {[
                'Software Development',
                'Artificial Intelligence & Machine Learning',
                'Full Stack Web Development',
                'Problem-Solving & Algorithms',
                'Real-world Application Development'
              ].map((interest, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full ${
                    darkMode ? 'bg-white' : 'bg-black'
                  }`} />
                  {interest}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`mt-16 p-8 border rounded-3xl ${
          darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'
        }`}>
          <h3 className="text-2xl font-bold mb-6">Personal Strengths</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Problem-Solving',
                description: 'Capability to analyze challenges logically and develop effective solutions.'
              },
              {
                title: 'Quick Learner',
                description: 'Rapidly adapts to new technologies and frameworks'
              },
              {
                title: 'Teamwork',
                description: 'Ability to collaborate and contribute effectively within a team'
              }
            ].map((strength, index) => (
              <div key={index}>
                <h4 className="font-bold mb-2">{strength.title}</h4>
                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}