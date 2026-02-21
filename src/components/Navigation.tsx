import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export default function Navigation({ darkMode, setDarkMode }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    'Home',
    'About',
    'Skills',
    'Projects',
    'Experience',
    'Certifications',
    'Assignments',
    'Education',
    'Contact'
  ];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? darkMode
            ? 'bg-black/95 backdrop-blur-xl border-b-2 border-white/20 shadow-2xl shadow-white/5'
            : 'bg-white/95 backdrop-blur-xl border-b-2 border-black/20 shadow-2xl shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className={`relative group`}
          >
            <div className={`text-2xl font-bold tracking-tighter flex items-center gap-3 transition-all hover:scale-110 ${
              scrolled ? 'scale-100' : 'scale-110'
            }`}>
              <div className={`w-12 h-12 rounded-full overflow-hidden border-2 transition-all group-hover:border-4 duration-300 ${
                darkMode 
                  ? 'border-white' 
                  : 'border-black'
              }`}>
                <ImageWithFallback
                  src="https://media.licdn.com/dms/image/v2/D5603AQG4jWGI6pTo5Q/profile-displayphoto-scale_400_400/B56ZqnOy5BIYAg-/0/1763742267584?e=1772668800&v=beta&t=M9ZzMHjcEPoDffXwPTBwZ9NpPNwnTc63YThb9RDlH0k"
                  alt="Aditya Jadli"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className={`hidden sm:block ${scrolled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
                Aditya Jadli
              </span>
            </div>
            <div className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
              darkMode ? 'bg-white' : 'bg-black'
            }`} />
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide group transition-all hover:scale-105`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10">{item}</span>
                <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                  darkMode ? 'bg-white/10' : 'bg-black/10'
                }`} />
                <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-all ${
                  darkMode ? 'bg-white' : 'bg-black'
                }`} />
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-full transition-all duration-500 hover:scale-110 relative overflow-hidden group ${
                darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
              }`}
              aria-label="Toggle theme"
            >
              <div className="relative z-10">
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </div>
              <div className={`absolute inset-0 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ${
                darkMode ? 'bg-white/20' : 'bg-black/20'
              }`} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-3 rounded-full transition-all hover:scale-110 ${
                darkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <div className={`grid grid-cols-3 gap-3 p-4 rounded-2xl ${
            darkMode ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'
          }`}>
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-xs py-3 px-2 border rounded-xl transition-all hover:scale-105 font-medium ${
                  darkMode
                    ? 'border-white/20 hover:bg-white/10'
                    : 'border-black/20 hover:bg-black/10'
                }`}
                style={{ animationDelay: `${index * 30}ms` }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      {scrolled && (
        <div className={`absolute bottom-0 left-0 right-0 h-px ${
          darkMode 
            ? 'bg-gradient-to-r from-transparent via-white/50 to-transparent' 
            : 'bg-gradient-to-r from-transparent via-black/50 to-transparent'
        }`} />
      )}
    </nav>
  );
}