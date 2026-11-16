import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'story' | 'values' | 'journey'>('story');

  const tabs = [
    { id: 'story' as const, label: 'My Story', icon: '📖' },
    { id: 'values' as const, label: 'Values', icon: '💎' },
    { id: 'journey' as const, label: 'Journey', icon: '🚀' }
  ];

  const storyDetails = [
    {
      step: '01',
      title: 'First Lines of Code',
      text: 'Started coding at age 18 with simple HTML pages - instantly hooked by seeing code transform into interactive visual experiences.'
    },
    {
      step: '02',
      title: 'Full-Stack Breakthrough',
      text: 'Built my first full-stack application at 19 - a task management system that helped 50+ students streamline their studies.'
    },
    {
      step: '03',
      title: 'AI/ML Engineering',
      text: 'Graduated with a Computer Science degree with a specialization in AI/ML - bridging solid theoretical foundations with production applications.'
    },
    {
      step: '04',
      title: 'Enterprise & Scaling',
      text: 'Now crafting digital experiences and high-performance applications for modern businesses - focusing on scalable, user-centric solutions.'
    }
  ];

  const valuesDetails = [
    {
      title: 'Innovation',
      desc: 'Always exploring new technologies and approaches to stay ahead of the curve.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quality',
      desc: 'Writing clean, maintainable, resilient, and high-performance code.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Collaboration',
      desc: 'Thriving in cross-functional team environments and transparent knowledge sharing.',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'User-Centric',
      desc: 'Designing and building with the end user and business impact always in mind.',
      color: 'from-amber-500 to-orange-500'
    },
    {
      title: 'Continuous Learning',
      desc: 'Embracing rapid technology shifts, modern frameworks, and AI advancements.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Integrity',
      desc: 'Building trust through honest communication, reliability, and ethical practices.',
      color: 'from-rose-500 to-red-500'
    }
  ];

  const journeyDetails = [
    {
      year: '2024',
      role: 'Freelance Software Developer',
      desc: 'Successfully delivered first client projects, specializing in modern responsive web applications and clean code architecture.'
    },
    {
      year: '2024',
      role: 'Startup Development Lead',
      desc: 'Led a focused development team, building core products from prototype to launch with rapid agile iterations.'
    },
    {
      year: '2024',
      role: 'React & Modern Frontend Focus',
      desc: 'Deep-dived into React, TypeScript, state architectures, and modern web optimization techniques.'
    },
    {
      year: '2025',
      role: 'Scale & High-Volume Systems',
      desc: 'Architected and built web applications supporting 100K+ users with high availability and seamless UI/UX.'
    },
    {
      year: '2025',
      role: 'Mentorship & Open Source',
      desc: 'Mentored emerging developers, conducted technical workshops, and actively contributed to open-source software.'
    },
    {
      year: '2026',
      role: 'AI/ML & Enterprise Solutions',
      desc: 'Expanding into intelligent AI-driven applications, full-stack microservices, and modern cloud deployment architectures.'
    }
  ];

  const additionalSkills = [
    'Machine Learning', 'TensorFlow', 'Git', 'CI/CD', 'REST APIs', 'WebSocket', 'Agile', 'Scrum'
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 text-slate-800 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 sm:mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-slate-600 max-w-3xl mx-auto px-2">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        {/* Tab Navigation - In one line side by side */}
        <div className="flex justify-center mb-8 sm:mb-12 px-2">
          <div className="bg-white rounded-2xl p-1.5 sm:p-2 shadow-sm border border-slate-200 flex flex-row items-center justify-center gap-1 sm:gap-2 max-w-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm md:text-base whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20 scale-102 sm:scale-105'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span className="text-sm sm:text-xl">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Area */}
        <div className="max-w-5xl mx-auto">
          {/* 1. STORY */}
          {activeTab === 'story' && (
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              {/* Intro banner */}
              <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 text-blue-600">
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 animate-pulse" />
                  <span className="text-xs sm:text-sm uppercase tracking-wider font-bold">The Story Behind the Code</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-slate-900 mb-3">
                  Driven by curiosity, fueled by innovation
                </h3>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  From childhood curiosity to professional passion, my journey in technology has been driven by an insatiable desire to create, solve problems, and build software that empowers people worldwide.
                </p>
              </div>

              {/* Story milestones grid */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {storyDetails.map((item) => (
                  <div
                    key={item.step}
                    className="group bg-white hover:bg-blue-50/40 border border-slate-200 hover:border-blue-400 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg sm:text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {item.step}
                      </span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h4 className="text-base sm:text-xl font-bold text-slate-900 mb-1.5 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. VALUES */}
          {activeTab === 'values' && (
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 text-purple-600">
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="text-xs sm:text-sm uppercase tracking-wider font-bold">Guiding Principles</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-slate-900 mb-3">
                  What Drives Me Forward
                </h3>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  My core values shape every project I undertake, every architecture I design, and every line of code I ship.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {valuesDetails.map((val) => (
                  <div
                    key={val.title}
                    className="relative group bg-white hover:bg-purple-50/40 border border-slate-200 hover:border-purple-400 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden"
                  >
                    <div className={`w-10 sm:w-12 h-1.5 rounded-full bg-gradient-to-r ${val.color} mb-3 sm:mb-5`}></div>
                    <h4 className="text-base sm:text-xl font-bold text-slate-900 mb-1.5 group-hover:text-purple-600 transition-colors">
                      {val.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. JOURNEY */}
          {activeTab === 'journey' && (
            <div className="space-y-6 sm:space-y-8 animate-fade-in">
              <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-sm">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 text-emerald-600">
                  <Calendar className="w-4 h-4 sm:w-6 sm:h-6" />
                  <span className="text-xs sm:text-sm uppercase tracking-wider font-bold">Career Milestones</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-slate-900 mb-3">
                  The Path to Excellence
                </h3>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                  Every challenge overcome and every project completed has shaped the developer, problem solver, and tech leader I am today.
                </p>
              </div>

              {/* Timeline */}
              <div className="relative pl-5 sm:pl-8 border-l-2 border-slate-300 space-y-6 sm:space-y-8 ml-3 sm:ml-6">
                {journeyDetails.map((item, index) => (
                  <div key={index} className="relative group">
                    {/* Node indicator */}
                    <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-blue-600 border-4 border-white group-hover:bg-cyan-500 group-hover:scale-125 transition-all shadow-md"></div>

                    {/* Timeline card */}
                    <div className="bg-white hover:bg-emerald-50/40 border border-slate-200 hover:border-emerald-400 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 text-xs font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                          {item.year}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-emerald-700">
                          {item.role}
                        </span>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Skills */}
          <div className="mt-12 sm:mt-16 text-center w-full">
            <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-800">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
              {additionalSkills.map((skill) => (
                <div
                  key={skill}
                  className="bg-white text-slate-700 px-3.5 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm rounded-full shadow-sm border border-slate-200 hover:border-blue-400 hover:text-blue-600 hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <span className="font-semibold">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
