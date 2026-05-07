import React from 'react';

const Navigation: React.FC = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              R GOPINATH REDDY
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('connect')}
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            <a
              href="mailto:rgopinathreddyreddyvari143@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Gopinath,%0A%0AI'm%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0ABest%20regards"
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105"
            >
              Hire Me
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation; 