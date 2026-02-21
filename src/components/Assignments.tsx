import { useState } from 'react';
import { Download, Trash2, Image } from 'lucide-react';

interface AssignmentsProps {
  darkMode: boolean;
}

interface Assignment {
  id: string;
  title: string;
  course: string;
  description: string;
  downloadLink?: string;
  hasScreenshots: boolean;
}

export default function Assignments({ darkMode }: AssignmentsProps) {
  const [assignments, setAssignments] = useState<Assignment[]>([
    {
      id: '1',
      title: 'Assignment-1',
      course: 'PESE',
      description: 'Profiling Sheet',
      downloadLink: 'https://drive.google.com/file/d/1drLKekKRFC0Rb0sJgELvwaEKC764zLso/view?usp=sharing',
      hasScreenshots: false
    }
  ]);



  const handleDeleteAssignment = (id: string) => {
    setAssignments(assignments.filter(a => a.id !== id));
  };

  return (
    <section id="assignments" className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mt-2">
              Academic Work
            </h2>
          </div>
          {/* Add assignment removed — assignments will be managed via PDF uploads */}
        </div>

        {/* Add form intentionally removed — assignments will be added via PDF manually */}

        {/* Assignments List */}
        <div className="space-y-6">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className={`p-6 border rounded-2xl transition-all hover:scale-[1.01] ${
                darkMode
                  ? 'border-white/10 hover:bg-white/5 hover:shadow-lg hover:shadow-white/5'
                  : 'border-black/10 hover:bg-black/5 hover:shadow-lg hover:shadow-black/5'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{assignment.title}</h3>
                  <p className={`text-sm mb-4 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {assignment.course}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteAssignment(assignment.id)}
                  className={`p-2 rounded-full transition-all hover:scale-110 hover:rotate-12 ${
                    darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'
                  }`}
                  aria-label="Delete assignment"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <p className={`mb-4 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {assignment.description}
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                {assignment.hasScreenshots && (
                  <span className={`flex items-center gap-2 text-sm px-3 py-1 border rounded-full ${
                    darkMode ? 'text-gray-400 border-white/20' : 'text-gray-600 border-black/20'
                  }`}>
                    <Image className="w-4 h-4" />
                    Screenshots available
                  </span>
                )}
                {assignment.downloadLink && (
                  <a
                    href={assignment.downloadLink}
                    className={`flex items-center gap-2 text-sm px-3 py-1 border rounded-full transition-all hover:scale-105 ${
                      darkMode ? 'text-gray-300 border-white/20 hover:bg-white/10' : 'text-gray-700 border-black/20 hover:bg-black/10'
                    }`}
                  >
                    <Download className="w-4 h-4" />
                    Open File
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