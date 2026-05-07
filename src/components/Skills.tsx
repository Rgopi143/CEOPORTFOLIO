import { useState, useEffect } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
    { id: 'backend', label: 'Backend', icon: '⚙️', color: 'from-purple-500 to-pink-500' },
    { id: 'database', label: 'Database', icon: '🗄️', color: 'from-green-500 to-emerald-500' },
    { id: 'tools', label: 'Tools', icon: '🛠️', color: 'from-orange-500 to-red-500' }
  ];

  const skills = {
    frontend: [
      { name: 'HTML', level: 95, icon: '🌐', description: 'Semantic HTML5 markup and accessibility standards' },
      { name: 'CSS', level: 90, icon: '🎨', description: 'Modern CSS with flexbox, grid, and animations' },
      { name: 'JavaScript', level: 88, icon: '⚡', description: 'ES6+ features and DOM manipulation' }
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢', description: 'Server-side JavaScript runtime environment' },
      { name: 'Express.js', level: 80, icon: '�', description: 'Fast, unopinionated web framework for Node.js' },
      { name: 'REST APIs', level: 88, icon: '🔗', description: 'Design and development of RESTful services' },
      { name: 'Authentication', level: 82, icon: '�', description: 'JWT, OAuth, and session management' }
    ],
    database: [
      { name: 'SQL', level: 90, icon: '�️', description: 'Structured Query Language for database operations' },
      { name: 'MySQL', level: 85, icon: '🐬', description: 'Popular relational database management system' },
      { name: 'MongoDB', level: 80, icon: '🍃', description: 'NoSQL document database for flexible data storage' },
      { name: 'Database Design', level: 82, icon: '🏗️', description: 'Schema design and normalization principles' }
    ],
    tools: [
      { name: 'Git', level: 90, icon: '�', description: 'Version control and collaboration' },
      { name: 'VS Code', level: 92, icon: '💻', description: 'Code editor and development environment' },
      { name: 'Terminal', level: 85, icon: '⌨️', description: 'Command line interface and shell scripting' },
      { name: 'Debugging', level: 88, icon: '🔍', description: 'Troubleshooting and problem-solving techniques' }
    ]
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills[activeCategory as keyof typeof skills].map(skill => skill.name));
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mastering the tools and technologies that power modern web applications
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills[activeCategory as keyof typeof skills].map((skill, index) => (
            <div
              key={skill.name}
              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                animatedSkills.includes(skill.name) ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {skill.icon.startsWith('/') ? (
                    <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                  ) : (
                    <span className="text-2xl">{skill.icon}</span>
                  )}
                  <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{skill.level}%</div>
                  <div className="text-sm text-gray-400">Proficiency</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed">
                {skill.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;