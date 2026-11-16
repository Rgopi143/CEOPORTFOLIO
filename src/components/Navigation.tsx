import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <>
      {/* Desktop Fixed Navigation Bar - Hidden completely on mobile */}
      <nav
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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

            {/* Desktop Navigation Links */}
            <div className="flex items-center space-x-8">
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
          </div>
        </div>
      </nav>

      {/* Floating 3-lines menu button on mobile when scrolled down */}
      <div className="lg:hidden">
        {isScrolled && !mobileMenuOpen && (
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="fixed top-4 right-4 z-40 p-2.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200 text-slate-800 hover:text-blue-600 transition-all active:scale-95"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        )}
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-slate-900/40 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white p-6 shadow-2xl border-b border-gray-200 flex flex-col space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <span className="font-bold text-gray-900 text-lg">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-base"
              >
                {link.label}
              </button>
            ))}
            <a
              href="mailto:rgopinathreddyreddyvari143@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Gopinath,%0A%0AI'm%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0A%0ABest%20regards"
              className="text-center py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navigation;
