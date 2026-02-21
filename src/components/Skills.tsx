interface SkillsProps {
  darkMode: boolean;
}

export default function Skills({ darkMode }: SkillsProps) {
  const technicalSkills = {
    'Programming Languages': ['C', 'C++', 'Java', 'Python'],
    'Web Development': ['HTML5', 'CSS3', 'JavaScript', 'React'],
    'AI & ML': ['Machine Learning', 'TensorFlow', 'scikit-learn', 'Data Analysis'],
    'Tools & Technologies': ['Git', 'GitHub', 'Firebase', 'VS Code']
  };

  const otherSkills = [
    'Problem-Solving',
    'Critical Thinking',
    'Team Collaboration'
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <span className={`text-sm tracking-widest ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2">
            Technical Expertise
          </h2>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div
                key={category}
                className={`p-6 border rounded-2xl transition-all hover:scale-[1.02] ${
                  darkMode ? 'border-white/10 hover:shadow-xl hover:shadow-white/5' : 'border-black/10 hover:shadow-xl hover:shadow-black/5'
                }`}
              >
                <h4 className="font-bold mb-4 text-lg">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-sm border rounded-full transition-all hover:scale-105 ${
                        darkMode
                          ? 'border-white/20 bg-white/5 hover:bg-white/10'
                          : 'border-black/20 bg-black/5 hover:bg-black/10'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8">Other Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherSkills.map((skill, index) => (
              <div
                key={index}
                className={`p-4 border rounded-2xl text-center transition-all hover:scale-105 ${
                  darkMode
                    ? 'border-white/10 hover:bg-white/5 hover:shadow-lg hover:shadow-white/5'
                    : 'border-black/10 hover:bg-black/5 hover:shadow-lg hover:shadow-black/5'
                }`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}