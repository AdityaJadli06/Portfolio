interface EducationProps {
  darkMode: boolean;
}

export default function Education({ darkMode }: EducationProps) {
  const courses = [
    'Data Structures & Algorithms',
    'Artificial Intelligence',
    'Machine Learning',
    'Database Management Systems',
    'Web Technologies',
    'Computer Networks',
    'Operating Systems',
    'Software Engineering',
    'Cloud Computing',
    'Deep Learning',
    'Natural Language Processing',
    'Object-Oriented Programming'
  ];

  return (
    <section id="education" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mt-2">
            Academic Background
          </h2>
        </div>

        <div className={`p-8 border rounded-3xl ${
          darkMode ? 'border-white/10' : 'border-black/10'
        }`}>
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-2">
              Bachelor of Technology
            </h3>
            <p className="text-xl mb-4">
              Computer Science Engineering
            </p>
            <p className={`text-lg mb-2 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Graphic Era Hill University, Dehradun, India
            </p>
            <p className={`${
              darkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Expected Graduation: 2026
            </p>
          </div>

          <div className={`h-px ${
            darkMode ? 'bg-white/10' : 'bg-black/10'
          } my-8`} />

          <div className="mb-8">
            <h4 className="text-xl font-bold mb-2">Specialization</h4>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              Artificial Intelligence & Machine Learning
            </p>
          </div>

          <div className={`h-px ${
            darkMode ? 'bg-white/10' : 'bg-black/10'
          } my-8`} />

          <div className="mb-8">
            <h4 className="text-xl font-bold mb-2">Focus Areas</h4>
            <ul className="grid md:grid-cols-2 gap-3">
              <li className={`flex items-start gap-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className={`mt-2 w-1.5 h-1.5 rounded-full ${
                  darkMode ? 'bg-white' : 'bg-black'
                }`} />
                Full Stack Web Development
              </li>
              <li className={`flex items-start gap-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className={`mt-2 w-1.5 h-1.5 rounded-full ${
                  darkMode ? 'bg-white' : 'bg-black'
                }`} />
                Machine Learning & AI
              </li>
              <li className={`flex items-start gap-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className={`mt-2 w-1.5 h-1.5 rounded-full ${
                  darkMode ? 'bg-white' : 'bg-black'
                }`} />
                Data Science & Analytics
              </li>
              <li className={`flex items-start gap-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <span className={`mt-2 w-1.5 h-1.5 rounded-full ${
                  darkMode ? 'bg-white' : 'bg-black'
                }`} />
                Software Engineering Principles
              </li>
            </ul>
          </div>

          <div className={`h-px ${
            darkMode ? 'bg-white/10' : 'bg-black/10'
          } my-8`} />

          <div>
            <h4 className="text-xl font-bold mb-4">Relevant Coursework</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className={`px-3 py-2 text-sm border rounded-full text-center transition-all hover:scale-105 ${
                    darkMode ? 'border-white/20 hover:bg-white/10' : 'border-black/20 hover:bg-black/10'
                  }`}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-8 p-6 border rounded-2xl ${
            darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'
          }`}>
            <h4 className="font-bold mb-3">Academic Achievements</h4>
            <ul className="space-y-2">
              {[
                'Consistently maintained strong academic performance',
                'Active member of university tech clubs and societies',
                'Participated in multiple hackathons and coding competitions',
                'Contributed to open-source projects and campus initiatives'
              ].map((achievement, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full ${
                    darkMode ? 'bg-white' : 'bg-black'
                  }`} />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}