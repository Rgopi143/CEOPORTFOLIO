import { useEffect, useState, useMemo, useRef } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isBadgeHovered, setIsBadgeHovered] = useState(false);
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger animations after component mount
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  // Generate floating particles once using useMemo
  const particles = useMemo(() => {
    return [...Array(50)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-2 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Animated Badge */}
          <div 
            className={`inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 transition-all duration-1000 cursor-pointer group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            } ${isBadgeHovered ? 'scale-110 bg-white/20 border-white/40 shadow-2xl' : 'hover:scale-105 hover:bg-white/15'}`}
            onMouseEnter={() => setIsBadgeHovered(true)}
            onMouseLeave={() => setIsBadgeHovered(false)}
            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className={`w-3 h-3 bg-green-400 rounded-full mr-3 shadow-lg transition-all duration-300 ${
              isBadgeHovered ? 'animate-ping scale-150' : 'animate-pulse'
            } shadow-green-400/50`}></span>
            <span className={`text-sm font-medium transition-all duration-300 ${
              isBadgeHovered ? 'text-white' : 'text-gray-300'
            }`}>Available for new opportunities</span>
            <span className={`ml-2 text-xs transition-all duration-300 ${
              isBadgeHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
            }`}>→ Click to connect</span>
          </div>

          {/* Profile Photo and Heading */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-8">
            {/* Main Heading */}
            <div 
              className={`order-1 lg:order-1 text-center lg:text-left transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              onMouseEnter={() => setIsHeadingHovered(true)}
              onMouseLeave={() => setIsHeadingHovered(false)}
            >
              <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-wider bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-300 cursor-pointer ${
                isHeadingHovered 
                  ? 'scale-105 animate-bounce' 
                  : 'hover:scale-102'
              }`}>
                 <span className={`inline-block transition-all duration-300 ${
                   isHeadingHovered ? 'text-white' : ''
                 }`}>R</span>
                 <span className={`inline-block transition-all duration-300 delay-100 ${
                   isHeadingHovered ? 'text-blue-200' : ''
                 }`}> GOPINATH </span>
                 <span className={`inline-block transition-all duration-300 delay-200 ${
                   isHeadingHovered ? 'text-indigo-200' : ''
                 }`}> REDDY</span>
              </h1>
            </div>

            {/* Profile Photo */}
            <div 
              className={`relative order-2 lg:order-2 ml-0.5 mt-8 transition-all duration-1000 delay-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
              }`}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 shadow-2xl bg-white/10 backdrop-blur-sm border-white/30">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
                <img
                  src="/R Gopinath Reddy.webp"
                  alt="R GOPINATH REDDY"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl lg:text-3xl mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Crafting digital experiences that blend{' '}
            <span className="text-white font-semibold hover:text-blue-400 transition-colors duration-300">innovation</span> with{' '}
            <span className="text-white font-semibold hover:text-purple-400 transition-colors duration-300">elegance</span>
            <br />
            Transforming ideas into{' '}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold hover:from-blue-300 hover:to-indigo-300 transition-all duration-300">
              extraordinary realities
            </span>
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 backdrop-blur-sm border border-white/20 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>

            <button
              onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-5 bg-gradient-to-r from-emerald-500 via-green-600 to-teal-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/50 backdrop-blur-sm border border-white/20 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-green-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center transform transition-all duration-700 hover:scale-110"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
                  transitionDelay: isVisible ? `${1300 + index * 200}ms` : '0ms'
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm hover:text-white transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-delayed {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite 1.5s;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
