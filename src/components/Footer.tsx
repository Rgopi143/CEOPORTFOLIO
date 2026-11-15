import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/r-gopinathreddy-reddyvari-8a0a1a324/',
      icon: '/linkedin.jpeg'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Rgopi143',
      icon: '/github.png'
    },
    {
      name: 'Email',
      url: 'mailto:rgopinathreddyreddyvari143@gmail.com',
      icon: '/email.jpeg'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/918247392437',
      icon: '/phone.jpeg'
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
    <footer className="bg-slate-100 text-slate-700 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-black mb-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 bg-clip-text text-transparent">
              R GOPINATH REDDY
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Crafting digital experiences that blend innovation with elegance. 
              Transforming ideas into extraordinary realities.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 hover:scale-110 shadow-sm overflow-hidden"
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6 object-cover rounded-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 transform font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600">📧</span>
                <a 
                  href="mailto:rgopinathreddyreddyvari143@gmail.com"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium break-all"
                >
                  rgopinathreddyreddyvari143@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-emerald-600">📱</span>
                <a 
                  href="tel:+918247392437"
                  className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium"
                >
                  +91 8247392437
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-indigo-600">📍</span>
                <span className="text-slate-600 font-medium">Narasaraopet, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Connect */}
          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-4">Let's Connect</h4>
            <p className="text-slate-600 mb-4 text-sm leading-relaxed">
              Ready to start your next project? Let's discuss how we can work together.
            </p>
            <a
              href="mailto:rgopinathreddyreddyvari143@gmail.com"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-md shadow-blue-500/20"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-12 pt-8">
          <div className="flex justify-center items-center">
            <div className="text-center">
              <p className="text-slate-500 font-semibold text-sm">
                © {currentYear} R GOPINATH REDDY. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
