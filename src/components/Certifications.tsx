import { ExternalLink } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

export default function Certifications({ darkMode }: CertificationsProps) {
  const certifications = [
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      organization: 'Coursera / Stanford University',
      date: 'December 2025',
      credentialLink: 'https://drive.google.com/file/d/1AMTBsNtDbM8Y2YFrF5vK4KFQyGBACpV8/view?usp=drive_link'
    },
    {
      title: "SAARTHI'25",
      organization: 'Graphic Era Hill University',
      date: 'November 2025',
      credentialLink: 'https://drive.google.com/file/d/1UXyRkHlrB7z6vNBgmnc4x_a7Tk4rvwpA/view?usp=drive_link'
    },
    {
      title: 'TechSprint',
      organization: 'Graphic Era Deemend University',
      date: 'October 2025',
      credentialLink: 'https://drive.google.com/file/d/1WV5vF-tDLWdUIm6fdVCqLSMLnaYuZMzR/view?usp=drive_link'
    }
  ];

  return (
    <section id="certifications" className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <span className={`text-sm tracking-widest ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mt-2">
            Certifications & Awards
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`p-6 border rounded-2xl transition-all hover:scale-[1.02] ${
                darkMode
                  ? 'border-white/10 hover:bg-white/5 hover:shadow-lg hover:shadow-white/5'
                  : 'border-black/10 hover:bg-black/5 hover:shadow-lg hover:shadow-black/5'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-bold text-lg">{cert.title}</h3>
                {cert.credentialLink && (
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 hover:opacity-70 transition-all hover:scale-110"
                    aria-label="View credential"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <p className={`mb-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {cert.organization}
              </p>

              <p className={`text-sm ${
                darkMode ? 'text-gray-500' : 'text-gray-500'
              }`}>
                {cert.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}