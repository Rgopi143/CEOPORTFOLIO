import React, { useState } from 'react';

const About = () => {
  const [activeTab, setActiveTab] = useState('story');

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
        "Started coding at age 18 with simple HTML pages",
        "Discovered the power of JavaScript and never looked back",
        "Built my first full-stack application at 19",
        "Graduated with a Computer Science  with a specialization in AI/ML",
        "Now crafting digital experiences for global brands"
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
        "Continuous Learning - Staying ahead of industry trends"
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
        "2025 - Mentoring junior developers and contributing to open source"
      ]
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate developer crafting digital experiences that make a difference
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {content[activeTab as keyof typeof content].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {content[activeTab as keyof typeof content].description}
              </p>
              <ul className="space-y-3">
                {content[activeTab as keyof typeof content].details.map((detail, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Element */}
            <div className="relative">
                             <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">
                      {tabs.find(tab => tab.id === activeTab)?.icon}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">
                    {tabs.find(tab => tab.id === activeTab)?.label}
                  </h4>
                  <p className="text-blue-100">
                    {activeTab === 'story' && "Every great developer has a story. This is mine."}
                    {activeTab === 'values' && "These principles guide every decision I make."}
                    {activeTab === 'journey' && "The milestones that define my professional growth."}
                  </p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Technical Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'GraphQL', 'GitHub'].map((skill) => (
              <div key={skill} className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <span className="font-semibold text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;