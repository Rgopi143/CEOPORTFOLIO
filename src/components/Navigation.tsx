import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'connect', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200/80 py-2.5'
          : 'bg-white/70 backdrop-blur-sm border-b border-gray-100/60 py-3.5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <h1 className="text-xl lg:text-2xl font-black bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 bg-clip-text text-transparent">
              R GOPINATH REDDY
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-300 font-semibold"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:rgopinathreddyreddyvari143@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Gopinath,%0A%0AI'm%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0ABest%20regards"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-md shadow-blue-500/25"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 bg-white/95 backdrop-blur-lg border border-gray-200 rounded-2xl p-4 shadow-xl flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-gray-700 hover:text-blue-600 py-2.5 px-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:rgopinathreddyreddyvari143@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Gopinath,%0A%0AI'm%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0ABest%20regards"
              className="text-center py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
            >
              Hire Me
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
