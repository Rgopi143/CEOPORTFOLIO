import { useEffect, useState, useMemo } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isBadgeHovered, setIsBadgeHovered] = useState(false);
  const [isHeadingHovered, setIsHeadingHovered] = useState(false);

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
    return [...Array(40)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/50 text-slate-900 pt-20 pb-16">
      {/* Animated Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Glow Effect */}
      <div
        className="absolute w-96 h-96 bg-gradient-to-r from-blue-300/15 to-indigo-300/15 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-7xl mx-auto">
          {/* Animated Badge */}
          <div 
            className={`inline-flex items-center px-6 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm mb-8 transition-all duration-1000 cursor-pointer group ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            } ${isBadgeHovered ? 'scale-105 shadow-md border-blue-300 bg-white' : 'hover:scale-102 hover:bg-white'}`}
            onMouseEnter={() => setIsBadgeHovered(true)}
            onMouseLeave={() => setIsBadgeHovered(false)}
            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className={`w-3 h-3 bg-emerald-500 rounded-full mr-3 shadow-sm transition-all duration-300 ${
              isBadgeHovered ? 'animate-ping scale-125' : 'animate-pulse'
            }`}></span>
            <span className={`text-sm font-semibold transition-all duration-300 ${
              isBadgeHovered ? 'text-blue-600' : 'text-slate-700'
            }`}>Available for new opportunities</span>
            <span className={`ml-2 text-xs font-bold text-blue-600 transition-all duration-300 ${
              isBadgeHovered ? 'opacity-100 translate-x-1' : 'opacity-70'
            }`}>→ Click to connect</span>
          </div>

          {/* Profile Photo and Heading */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-14 mb-10">
            {/* Main Heading */}
            <div 
              className={`order-1 text-center lg:text-left transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              onMouseEnter={() => setIsHeadingHovered(true)}
              onMouseLeave={() => setIsHeadingHovered(false)}
            >
              <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent transition-all duration-300 cursor-pointer ${
                isHeadingHovered ? 'scale-102' : ''
              }`}>
                 <span>R</span>
                 <span className="text-blue-700"> GOPINATH </span>
                 <span className="text-indigo-800"> REDDY</span>
              </h1>
            </div>

            {/* Profile Photo */}
            <div 
              className={`relative order-2 flex-shrink-0 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mt-4 lg:mt-0 transition-all duration-1000 delay-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-90'
              }`}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/40 to-indigo-400/40 rounded-full blur-xl opacity-70 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src="/r-gopinath-reddy.png"
                  alt="R GOPINATH REDDY"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('R%20Gopinath%20Reddy.png')) {
                      target.src = '/R Gopinath Reddy.png';
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className={`text-lg sm:text-xl lg:text-2xl mb-12 text-slate-600 leading-relaxed max-w-4xl mx-auto transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Crafting digital experiences that blend{' '}
            <span className="text-slate-900 font-bold hover:text-blue-600 transition-colors duration-300">innovation</span> with{' '}
            <span className="text-slate-900 font-bold hover:text-purple-600 transition-colors duration-300">elegance</span>
            <br />
            Transforming ideas into{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-extrabold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300">
              extraordinary realities
            </span>
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-9 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore My Work
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-9 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-lg rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/25 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Let's Connect
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-md transform transition-all duration-500 hover:scale-105 hover:border-blue-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(1.5rem)',
                  transitionDelay: isVisible ? `${1300 + index * 150}ms` : '0ms'
                }}
              >
                <div className="text-3xl md:text-4xl font-extrabold mb-1 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
