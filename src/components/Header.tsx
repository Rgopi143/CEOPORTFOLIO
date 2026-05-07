import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled for glass effect
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'connect'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section);
            }
            break;
          }
        }
      }
    };

    // Initial check for active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add offset for fixed header
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeSection === 'projects' || activeSection === 'connect'
              ? 'bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200'
              : isScrolled 
                ? 'bg-white/10 backdrop-blur-sm shadow-lg border border-white/20'
                : 'bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200'
          }`}>
            <h1 className={`text-2xl font-bold text-black transition-colors duration-300`}>
              R GOPINATH REDDY
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 bg-black/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 relative px-4 py-2 rounded-lg ${
                  activeSection === 'projects' || activeSection === 'connect'
                    ? (activeSection === item.id 
                      ? 'text-black bg-white/90 shadow-md border border-gray-300' 
                      : 'text-gray-800 hover:text-black bg-white/70 hover:bg-white/90 border border-gray-200')
                    : isScrolled 
                      ? (activeSection === item.id 
                        ? 'text-blue-400 bg-blue-500/20 shadow-md border border-blue-400/30' 
                        : 'text-white hover:text-blue-400 bg-white/10 hover:bg-white/20 border border-white/20')
                      : (activeSection === item.id 
                        ? 'text-blue-600 bg-blue-100 shadow-md border border-blue-300' 
                        : 'text-gray-700 hover:text-blue-600 bg-gray-100 hover:bg-gray-200 border border-gray-300')
                }`}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                )}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('connect')}
              className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                activeSection === 'connect'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
              }`}
              aria-label="Navigate to Connect section"
            >
              Connect
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              activeSection === 'projects' || activeSection === 'connect'
                ? 'hover:bg-gray-100 text-black' 
                : isScrolled 
                  ? 'hover:bg-white/10 text-white' 
                  : 'hover:bg-gray-100 text-gray-800'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

                  {/* Mobile Navigation */}
        {isOpen && (
          <div ref={mobileMenuRef} className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-2 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 mx-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 font-medium ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 border border-blue-200'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('connect')}
                className={`block w-full text-left py-3 px-4 rounded-lg transition-colors duration-200 font-medium ${
                  activeSection === 'connect'
                    ? 'text-green-600 bg-green-50 border border-green-200'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`}
              >
                Connect
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;