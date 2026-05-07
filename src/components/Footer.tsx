import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/r-gopinathreddy-reddyvari-8a0a1a324/',
      icon: '/LinkedIn logo.jpeg'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Rgopi143',
      icon: '/Github Pic.png'
    },
    {
      name: 'Email',
      url: 'mailto:rgopinathreddyreddyvari143@gmail.com',
      icon: '/mail pic.jpeg'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/918247392437',
      icon: '/Phone pic.jpeg'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Connect', href: '#connect' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-blue-900/30"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              R GOPINATH REDDY
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Crafting digital experiences that blend innovation with elegance. 
              Transforming ideas into extraordinary realities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                >
                  {social.name === 'LinkedIn' || social.name === 'GitHub' || social.name === 'Email' || social.name === 'WhatsApp' ? (
                    <img src={social.icon} alt={social.name} className="w-9 h-9 rounded-full" />
                  ) : (
                    <span className="text-lg">{social.icon}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <a 
                  href="mailto:rgopinathreddyreddyvari143@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  rgopinathreddyreddyvari143@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📱</span>
                <a 
                  href="tel:+918247392437"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  +91 8247392437
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📍</span>
                <span className="text-gray-300">Narasaraopet, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
            <p className="text-gray-300 mb-4">
              Ready to start your next project? Let's discuss how we can work together.
            </p>
            <a
              href="mailto:rgopinathreddyreddyvari143@gmail.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-white font-bold">
                {currentYear} R GOPINATH REDDY. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;