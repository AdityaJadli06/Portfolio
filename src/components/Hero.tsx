import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className={`relative group`}>
            <div className={`absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity ${
              darkMode ? 'bg-white/20' : 'bg-black/20'
            }`} />
            <div className={`relative w-40 h-40 rounded-full overflow-hidden border-4 transition-all group-hover:scale-105 ${
              darkMode ? 'border-white/30' : 'border-black/30'
            }`}>
              <ImageWithFallback
                src="https://media.licdn.com/dms/image/v2/D5603AQG4jWGI6pTo5Q/profile-displayphoto-scale_400_400/B56ZqnOy5BIYAg-/0/1763742267584?e=1772668800&v=beta&t=M9ZzMHjcEPoDffXwPTBwZ9NpPNwnTc63YThb9RDlH0k"
                alt="Aditya Jadli"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div
            className={`inline-block px-4 py-1 rounded-full border mb-6 ${
              darkMode ? 'border-white/20' : 'border-black/20'
            }`}
          >
            <span className="text-sm tracking-wider">PORTFOLIO 2026</span>
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Aditya Jadli
        </h1>

        <p className="text-xl md:text-2xl mb-4 opacity-80">
          B.Tech CSE Student | AI & ML | Full Stack Web Developer
        </p>

        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-12 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Passionate about software development, problem-solving, and creating real-world applications that make a difference
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={scrollToAbout}
            className={`px-8 py-3 border rounded-full transition-all hover:scale-105 hover:shadow-lg ${
              darkMode
                ? 'border-white hover:bg-white hover:text-black'
                : 'border-black hover:bg-black hover:text-white'
            }`}
          >
            Explore My Work
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-8 py-3 rounded-full transition-all hover:scale-105 hover:shadow-lg ${
              darkMode
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-20 animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto opacity-50" />
        </div>
      </div>
    </section>
  );
}