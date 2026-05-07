import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isUnlockButtonHovered, setIsUnlockButtonHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragCurrentY, setDragCurrentY] = useState(0);
  const [lockUnlocked, setLockUnlocked] = useState(false);
  const [keyPosition, setKeyPosition] = useState({ x: 0, y: 0 });
  const [isKeyMoving, setIsKeyMoving] = useState(false);
  const [keyInserted, setKeyInserted] = useState(false);

  // Sound effects
  const playKeySound = () => {
    const audio = new Audio();
    audio.volume = 0.3;
    // Create a simple key insertion sound using Web Audio API
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.1);
    oscillator.frequency.exponentialRampToValueAtTime(600, audioContext.currentTime + 0.2);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  };

  const playBookOpenSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Create a magical book opening sound
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.2);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.5);
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.6);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.6);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaY = e.clientY - dragStartY;
        setDragCurrentY(Math.min(deltaY, 50)); // Limit drag to 50px max
        
        // Check if dragged down at least 4px
        if (deltaY >= 4 && !lockUnlocked) {
          setLockUnlocked(true);
          setIsBookOpen(true);
          playKeySound(); // Play key sound
          setTimeout(() => playBookOpenSound(), 200); // Play book sound shortly after
          setIsDragging(false);
          // Reset position after unlock
          setTimeout(() => {
            setDragCurrentY(0);
          }, 300);
        }
      }
    };

    const handleMouseUp = () => {
      if (isDragging && !lockUnlocked) {
        // Reset if not unlocked
        setIsDragging(false);
        setDragCurrentY(0);
      }
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none'; // Prevent text selection during drag
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging, dragStartY, lockUnlocked]);
  
  const tabs = [
    { id: 'story', label: 'My Story', icon: '📖' },
    { id: 'values', label: 'Values', icon: '💎' },
    { id: 'journey', label: 'Journey', icon: '🚀' }
  ];

  const content = {
    story: {
      title: "The Story Behind the Code",
      description: "From childhood curiosity to professional passion, my journey in technology has been driven by an insatiable desire to create and innovate.",
      details: [
        "Started coding at age 18 with simple HTML pages - instantly hooked by seeing code transform into visual experiences",
        "Built my first full-stack application at 19 - a task management system that helped 50+ students organize their studies",
        "Graduated with a Computer Science degree with a specialization in AI/ML - combining theoretical knowledge with practical skills",
        "Now crafting digital experiences for global brands - focusing on scalable, user-centric solutions"
      ]
    },
    values: {
      title: "What Drives Me Forward",
      description: "My core values shape every project I undertake and every line of code I write.",
      details: [
        "Innovation - Always exploring new technologies and approaches",
        "Quality - Writing clean, maintainable, and scalable code",
        "Collaboration - Thriving in team environments and knowledge sharing",
        "User-Centric - Designing with the end user always in mind",
        "Continuous Learning - Staying ahead of industry trends",
        "Integrity - Building trust through transparent communication and ethical practices"
      ]
    },
    journey: {
      title: "The Path to Excellence",
      description: "Every challenge overcome and every project completed has shaped the developer I am today.",
      details: [
        "2024 - First freelance project completed",
        "2024 - Led development team for startup",
        "2024 - Specialized in React and modern frameworks",
        "2025 - Built applications used by 100K+ users",
        "2025 - Mentoring junior developers and contributing to open source",
        "2026 - Expanding expertise in AI/ML and advanced web technologies"
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900 rounded-2xl p-2 shadow-lg border border-gray-700">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setActiveTab(tab.id);
                    setIsAnimating(false);
                  }, 150);
                }}
                onMouseEnter={() => setHoveredTab(tab.id)}
                onMouseLeave={() => setHoveredTab(null)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : hoveredTab === tab.id
                    ? 'text-white bg-gray-700 transform scale-102'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                } ${isAnimating && activeTab !== tab.id ? 'opacity-50 scale-95' : ''}`}
                style={{ 
                  transitionDelay: activeTab === tab.id ? '0ms' : `${index * 50}ms`
                }}
              >
                <span className={`mr-2 transition-all duration-300 ${
                  hoveredTab === tab.id || activeTab === tab.id ? 'scale-125 rotate-12' : 'scale-100'
                }`}>{tab.icon}</span>
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute inset-0 bg-white/10 animate-pulse rounded-xl"></div>
                )}
                {hoveredTab === tab.id && activeTab !== tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Book Component */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Book Container */}
            <div id="book-container" className="relative w-full max-w-4xl">
              <div 
                className="relative transition-all duration-1000"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '2000px'
                }}
              >
                {/* Book Cover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-lg shadow-2xl border-4 border-gray-600 transition-all duration-1000 hover:shadow-3xl hover:border-blue-400 ${
                  isBookOpen ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}>
                  {/* Wood texture background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-800/20 to-transparent"></div>
                    <div className="h-full w-full bg-gradient-to-r from-transparent via-gray-700/10 to-transparent"></div>
                  </div>
                  
                  {/* Metal straps/plates on sides */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 border-r-2 border-gray-800"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-700 via-gray-600 to-gray-700 border-l-2 border-gray-800"></div>
                  
                  {/* Lock instruction */}
                  {!keyInserted && !isBookOpen && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="text-xs text-yellow-400 font-medium text-center animate-pulse whitespace-nowrap">
                        🔑 Use key below to unlock
                      </div>
                    </div>
                  )}
                  
                  {/* Top unlock button */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
                    <button
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsDragging(true);
                        setDragStartY(e.clientY);
                        setDragCurrentY(0);
                      }}
                      onMouseEnter={() => setIsUnlockButtonHovered(true)}
                      onMouseLeave={() => setIsUnlockButtonHovered(false)}
                      className={`w-12 h-12 bg-gradient-to-br from-yellow-600 via-yellow-500 to-yellow-700 rounded-full border-3 border-yellow-800 shadow-lg transition-all duration-300 cursor-grab active:cursor-grabbing ${
                        isUnlockButtonHovered ? 'scale-110 shadow-yellow-400/50' : ''
                      } ${isBookOpen || lockUnlocked ? 'rotate-180' : 'rotate-0'} ${
                        isDragging ? 'scale-125 shadow-yellow-300/70' : ''
                      }`}
                      style={{
                        transform: `translateY(${dragCurrentY}px) ${isBookOpen || lockUnlocked ? 'rotate(180deg)' : 'rotate(0deg)'}`,
                        transition: isDragging ? 'none' : 'all 0.3s ease'
                      }}
                    >
                      <div className="absolute inset-1 bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 rounded-full border border-yellow-900">
                        <div className="absolute inset-1 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                          {/* Keyhole */}
                          <div className="relative">
                            {/* Keyhole circle */}
                            <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                            {/* Keyhole slot */}
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-900"></div>
                          </div>
                        </div>
                      </div>
                      {/* Lock rivets */}
                      <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
                      <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
                      <div className="absolute top-1/2 -left-0.5 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
                      <div className="absolute top-1/2 -right-0.5 transform -translate-y-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full shadow-sm"></div>
                    </button>
                    
                    {/* Drag indicator */}
                    {isDragging && (
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-xs text-yellow-400 font-medium animate-pulse">
                        Drag down to unlock
                      </div>
                    )}
                  </div>

                  {/* Horizontal straps */}
                  <div className="absolute top-1/4 left-0 right-0 h-6 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 border-y border-gray-700"></div>
                  <div className="absolute bottom-1/4 left-0 right-0 h-6 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 border-y border-gray-700"></div>
                  
                  {/* Center buckle/strap */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700 rounded-full border-4 border-gray-800 shadow-lg">
                      <div className="absolute inset-2 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-full border-2 border-gray-900">
                        <div className="absolute inset-2 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full"></div>
                      </div>
                    </div>
                    {/* Rivets around buckle */}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full shadow-md"></div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 rounded-full shadow-md"></div>
                    <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full shadow-md"></div>
                    <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full shadow-md"></div>
                  </div>
                  
                  {/* Vertical center strap with buckle */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-12 transform -translate-x-1/2 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 border-x-2 border-gray-700">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-10 bg-gradient-to-br from-gray-500 via-gray-400 to-gray-600 rounded border-2 border-gray-800 shadow-lg">
                      <div className="absolute inset-1 bg-gradient-to-br from-gray-600 via-gray-500 to-gray-700 rounded border border-gray-900">
                        <div className="absolute inset-1 bg-gradient-to-br from-blue-700 to-blue-900 rounded"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 text-center h-full flex flex-col justify-center relative z-10">
                    <div className="mb-6 transition-all duration-300 hover:scale-110 hover:rotate-12">
                      <span className="text-6xl">🏰</span>
                    </div>
                    <h3 className="text-3xl font-bold text-blue-100 mb-4 transition-all duration-300 hover:text-blue-50 hover:scale-105">
                      {content[activeTab as keyof typeof content].title}
                    </h3>
                    <p className="text-blue-200 mb-6 transition-all duration-300 hover:text-blue-100">
                      Click to open and read more
                    </p>
                  </div>
                </div>

                {/* Book Pages */}
                <div className={`bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg shadow-2xl border-4 border-amber-200 transition-all duration-1000 ${
                  isBookOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}>
                  <div className="p-8 text-gray-800">
                    {/* Book Header */}
                    <div className="text-center mb-8 border-b-2 border-amber-300 pb-4">
                      <h3 className="text-2xl font-bold text-amber-900 mb-2">
                        {content[activeTab as keyof typeof content].title}
                      </h3>
                      <div className="flex justify-center items-center space-x-2 text-amber-700">
                        <span className="text-2xl">{tabs.find(tab => tab.id === activeTab)?.icon}</span>
                        <span className="text-lg font-medium">{tabs.find(tab => tab.id === activeTab)?.label}</span>
                      </div>
                    </div>

                    {/* Book Content */}
                    <div className="space-y-6 min-h-[400px]">
                      <div className="text-amber-800 leading-relaxed">
                        <p className="mb-4 font-medium text-amber-900">
                          {content[activeTab as keyof typeof content].description}
                        </p>
                      </div>

                      {/* Story Items as Book Pages */}
                      <div className="space-y-4">
                        {content[activeTab as keyof typeof content].details.map((detail, index) => (
                          <div 
                            key={index}
                            className={`bg-white/60 rounded-lg p-4 border-l-4 border-amber-400 transition-all duration-500 cursor-pointer ${
                              currentPage === index 
                                ? 'scale-105 shadow-lg bg-white/80 border-amber-500' 
                                : 'hover:scale-105 hover:shadow-lg hover:bg-white/80 hover:border-amber-500'
                            }`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentPage(index);
                            }}
                          >
                            <div className="flex items-start space-x-3">
                              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-300 ${
                                currentPage === index 
                                  ? 'bg-amber-500 scale-110' 
                                  : 'bg-amber-400 hover:bg-amber-500 hover:scale-110'
                              }`}>
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <p className={`text-gray-700 leading-relaxed transition-all duration-300 ${
                                  currentPage === index ? 'font-semibold text-gray-900' : 'hover:text-gray-900'
                                }`}>{detail}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Page Navigation */}
                    <div className="flex justify-between items-center mt-8 pt-4 border-t-2 border-amber-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentPage(Math.max(0, currentPage - 1));
                        }}
                        disabled={currentPage === 0}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform ${
                          currentPage === 0
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed scale-95'
                            : 'bg-amber-500 text-white hover:bg-amber-600 hover:scale-110 hover:shadow-lg active:scale-95'
                        }`}
                      >
                        ← Previous
                      </button>
                      
                      <div className="text-amber-700 font-medium px-4 py-2 bg-amber-50 rounded-lg border border-amber-200">
                        Page {currentPage + 1} of {content[activeTab as keyof typeof content].details.length}
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentPage(Math.min(content[activeTab as keyof typeof content].details.length - 1, currentPage + 1));
                        }}
                        disabled={currentPage === content[activeTab as keyof typeof content].details.length - 1}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform ${
                          currentPage === content[activeTab as keyof typeof content].details.length - 1
                            ? 'bg-gray-300 text-gray-500 cursor-not-allowed scale-95'
                            : 'bg-amber-500 text-white hover:bg-amber-600 hover:scale-110 hover:shadow-lg active:scale-95'
                        }`}
                      >
                        Next →
                      </button>
                    </div>

                    {/* Close Book Button */}
                    <div className="text-center mt-6">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsBookOpen(false);
                          setLockUnlocked(false);
                          setKeyInserted(false);
                          setIsKeyMoving(false);
                          setKeyPosition({ x: 0, y: 0 });
                          setCurrentPage(0);
                        }}
                        className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95"
                      >
                        Close Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Shadow */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-8 bg-black/20 rounded-full blur-xl"></div>
            </div>

            {/* Golden Key */}
            {!isBookOpen && !keyInserted && (
              <div className="relative mt-8 flex justify-center">
                <div
                  onClick={() => {
                    setIsKeyMoving(true);
                    // Calculate target position (lock position)
                    const bookRect = document.getElementById('book-container')?.getBoundingClientRect();
                    if (bookRect) {
                      setKeyPosition({
                        x: bookRect.left + bookRect.width / 2 - 24, // Center of lock
                        y: bookRect.top + 32 // Top of lock area
                      });
                    }
                    
                    // Start key animation
                    setTimeout(() => {
                      setKeyInserted(true);
                      playKeySound(); // Play key insertion sound
                      setTimeout(() => {
                        // Twist and unlock
                        setLockUnlocked(true);
                        setIsBookOpen(true);
                        playBookOpenSound(); // Play book opening sound
                        setTimeout(() => {
                          setIsKeyMoving(false);
                        }, 500);
                      }, 500);
                    }, 1000);
                  }}
                  className={`relative cursor-pointer transition-all duration-300 hover:scale-110 ${
                    isKeyMoving ? 'scale-125' : ''
                  }`}
                  style={{
                    position: isKeyMoving ? 'fixed' : 'relative',
                    left: isKeyMoving ? `${keyPosition.x}px` : 'auto',
                    top: isKeyMoving ? `${keyPosition.y}px` : 'auto',
                    transform: isKeyMoving ? 'rotateX(90deg)' : 'rotateX(0deg)',
                    transition: isKeyMoving ? 'all 1s ease-in-out' : 'all 0.3s ease',
                    transformStyle: 'preserve-3d',
                    zIndex: isKeyMoving ? 1000 : 10
                  }}
                >
                  {/* New Animated Key */}
                  <div className="relative">
                    <div
                      onClick={() => {
                        setIsKeyMoving(true);
                        // Calculate target position (lock position)
                        const bookRect = document.getElementById('book-container')?.getBoundingClientRect();
                        if (bookRect) {
                          setKeyPosition({
                            x: bookRect.left + bookRect.width / 2 - 24,
                            y: bookRect.top + 32
                          });
                        }
                      
                      {/* Tech lines - side view */}
                      <div className="absolute top-2 left-0 w-full h-px bg-blue-400 opacity-40"></div>
                      <div className="absolute top-4 left-0 w-full h-px bg-blue-400 opacity-40"></div>
                      <div className="absolute top-6 left-0 w-full h-px bg-blue-400 opacity-40"></div>
                    </div>
                    
                    {/* Side accent dots */}
                    <div className="absolute top-1 left-0 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-4 left-0 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-7 left-0 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-1 left-0 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  
                  {/* Key shank - flat side view */}
                  <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
                    <div className="w-20 h-2 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 border-t-2 border-b-2 border-slate-800 relative">
                      {/* Top edge highlight */}
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-slate-500 opacity-40"></div>
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-800 opacity-40"></div>
                      
                      {/* LED indicators - side view */}
                      <div className="absolute top-0.5 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                      <div className="absolute top-0.5 left-6 w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '0.3s' }}></div>
                      <div className="absolute top-0.5 left-10 w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '0.6s' }}></div>
                      <div className="absolute top-0.5 left-14 w-1 h-1 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '0.9s' }}></div>
                      
                      {/* Tech details - side lines */}
                      <div className="absolute top-0.5 left-18 w-px h-1 bg-blue-400 opacity-30"></div>
                      <div className="absolute top-0.5 left-18 w-px h-1 bg-blue-400 opacity-30"></div>
                    </div>
                  </div>
                  
                  {/* Key bit - side view with cuts */}
                  <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
                    <div className="w-3 h-4 bg-gradient-to-b from-slate-600 via-slate-500 to-slate-700 border-l-2 border-t-2 border-b-2 border-slate-800 relative">
                      {/* Bit edge highlight */}
                      <div className="absolute top-0 left-0 w-0.5 h-full bg-slate-500 opacity-40"></div>
                      
                      {/* Ward cuts - side view */}
                      <div className="absolute top-0 -left-3 w-2 h-1 bg-gradient-to-b from-slate-600 to-slate-700 border-t-2 border-b-2 border-slate-800">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-slate-400"></div>
                      </div>
                      <div className="absolute top-1 -left-5 w-2 h-1 bg-gradient-to-b from-slate-600 to-slate-700 border-t-2 border-b-2 border-slate-800">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-slate-400"></div>
                      </div>
                      <div className="absolute top-2 -left-7 w-2 h-1 bg-gradient-to-b from-slate-600 to-slate-700 border-t-2 border-b-2 border-slate-800">
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-slate-400"></div>
                      </div>
                      
                      {/* Key tip - side view */}
                      <div className="absolute top-2 -left-9 w-1 h-2 bg-gradient-to-br from-slate-600 to-cyan-400 border-l-2 border-t-2 border-b-2 border-cyan-500 rounded-br shadow-cyan-400/50"></div>
                    </div>
                  </div>
                  
                  {/* Decorative tech lines */}
                  <div className="absolute top-1 left-0 w-full h-px bg-blue-400 opacity-60"></div>
                  <div className="absolute top-3 left-0 w-full h-px bg-blue-400 opacity-60"></div>
                  <div className="absolute top-5 left-0 w-full h-px bg-blue-400 opacity-60"></div>
                </div>
                
                {/* Tech accent dots */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1 left-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1 right-1 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
              
              {/* Key shank - futuristic design */}
              <div className="absolute top-1/2 -right-16 transform -translate-y-1/2">
                <div className="w-16 h-3 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-700 border-t-2 border-b-2 border-slate-800 relative">
                  {/* LED indicators */}
                  <div className="absolute top-0.5 left-2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                  <div className="absolute top-0.5 left-6 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute top-0.5 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute top-0.5 left-14 w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50" style={{ animationDelay: '0.9s' }}></div>
                  
                  {/* Tech details */}
                  <div className="absolute top-0 left-0 w-full h-px bg-blue-400 opacity-40"></div>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-blue-400 opacity-40"></div>
                </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-amber-400 font-medium whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
                Click to use key
              'Machine Learning', 'TensorFlow', 'Git', 'CI/CD', 'REST APIs', 'WebSocket', 'Agile', 'Scrum'
            ].map((skill) => (
              <div key={skill} className="bg-gray-800 px-6 py-3 rounded-full shadow-md border border-gray-600 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <span className="font-semibold text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
