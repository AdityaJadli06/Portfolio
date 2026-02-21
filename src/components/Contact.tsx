import { Mail, Linkedin, Github, Download, MapPin } from 'lucide-react';
import ResumePDF from '../Resume.pdf';

interface ContactProps {
  darkMode: boolean;
}

export default function Contact({ darkMode }: ContactProps) {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adityajadli06@gmail.com',
      link: 'mailto:adityajadli06@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/aditya-jadli-635bb5335',
      link: 'https://www.linkedin.com/in/aditya-jadli-635bb5335'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/AdityaJadli06',
      link: 'https://github.com/AdityaJadli06'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dehradun, India',
      link: null
    }
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mt-2">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className={`text-lg mb-8 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow developers and tech enthusiasts. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-4 p-4 border rounded-2xl transition-all hover:scale-[1.02] ${
                      darkMode ? 'border-white/10 hover:bg-white/5' : 'border-black/10 hover:bg-black/5'
                    }`}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <div className="flex-1">
                      <div className={`text-sm mb-1 ${
                        darkMode ? 'text-gray-500' : 'text-gray-500'
                      }`}>
                        {info.label}
                      </div>
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:opacity-70 transition-opacity break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div>{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => {
                const link = document.createElement('a');
                link.href = ResumePDF;
                link.download = 'Aditya_Jadli_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className={`mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 border rounded-full transition-all hover:scale-105 hover:shadow-lg ${
                darkMode
                  ? 'border-white hover:bg-white hover:text-black hover:shadow-white/20'
                  : 'border-black hover:bg-black hover:text-white hover:shadow-black/20'
              }`}
            >
              <Download className="w-5 h-5" />
              Download Resume (PDF)
            </button>
          </div>

          <div className={`p-8 border rounded-3xl ${
            darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-black/5'
          }`}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-2">Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 border rounded-xl bg-transparent transition-all focus:scale-[1.02] ${
                    darkMode ? 'border-white/20 focus:border-white/50' : 'border-black/20 focus:border-black/50'
                  }`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 border rounded-xl bg-transparent transition-all focus:scale-[1.02] ${
                    darkMode ? 'border-white/20 focus:border-white/50' : 'border-black/20 focus:border-black/50'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-xl bg-transparent transition-all focus:scale-[1.02] ${
                    darkMode ? 'border-white/20 focus:border-white/50' : 'border-black/20 focus:border-black/50'
                  }`}
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg ${
                  darkMode
                    ? 'bg-white text-black hover:bg-gray-200 hover:shadow-white/20'
                    : 'bg-black text-white hover:bg-gray-800 hover:shadow-black/20'
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className={`mt-16 pt-8 border-t text-center ${
          darkMode ? 'border-white/10 text-gray-500' : 'border-black/10 text-gray-500'
        }`}>
          <p className="mb-2">© 2026 Aditya Jadli. All rights reserved.</p>
          <p className="text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
}