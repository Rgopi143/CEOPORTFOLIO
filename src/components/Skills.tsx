import { useState, useEffect } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [progressAnimated, setProgressAnimated] = useState<{[key: string]: boolean}>({});

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
      { name: 'JavaScript', level: 88, icon: '⚡', description: 'ES6+ features and DOM manipulation' },
      { name: 'React', level: 92, icon: '⚛️', description: 'Component-based UI library with hooks and state management' },
      { name: 'TypeScript', level: 85, icon: '📘', description: 'Type-safe JavaScript for scalable applications' },
      { name: 'Next.js', level: 80, icon: '▲', description: 'Full-stack React framework with SSR and SSG' },
      { name: 'Tailwind CSS', level: 88, icon: '🎨', description: 'Utility-first CSS framework for rapid UI development' },
      { name: 'Redux', level: 75, icon: '🔄', description: 'State management for complex React applications' }
    ],
    backend: [
      { name: 'Node.js', level: 90, icon: '🟢', description: 'Server-side JavaScript runtime with async programming' },
      { name: 'Express.js', level: 88, icon: '⚡', description: 'Fast, minimalist web framework for Node.js' },
      { name: 'GraphQL', level: 82, icon: '🔮', description: 'Query language and runtime for APIs' },
      { name: 'PostgreSQL', level: 83, icon: '🐘', description: 'Advanced relational database with complex queries' },
      { name: 'Redis', level: 78, icon: '⚡', description: 'In-memory data structure store for caching' },
      { name: 'Docker', level: 80, icon: '🐳', description: 'Containerization for application deployment' },
      { name: 'AWS', level: 75, icon: '☁️', description: 'Cloud services and scalable infrastructure' }
    ],
    database: [
      { name: 'PostgreSQL', level: 88, icon: '🐘', description: 'Advanced relational database with JSON support' },
      { name: 'MongoDB', level: 85, icon: '🍃', description: 'NoSQL document database with aggregation framework' },
      { name: 'Redis', level: 82, icon: '⚡', description: 'High-performance in-memory data store' },
      { name: 'MySQL', level: 83, icon: '🐬', description: 'Relational database with replication and clustering' },
      { name: 'Elasticsearch', level: 75, icon: '🔍', description: 'Distributed search and analytics engine' },
      { name: 'Prisma', level: 80, icon: '🔷', description: 'Modern database toolkit and ORM' },
      { name: 'Database Optimization', level: 85, icon: '⚙️', description: 'Query optimization and performance tuning' },
      { name: 'Data Modeling', level: 87, icon: '📊', description: 'Entity-relationship design and schema architecture' }
    ],
    tools: [
      { name: 'Git', level: 92, icon: '📦', description: 'Version control with branching strategies and CI/CD' },
      { name: 'Docker', level: 85, icon: '🐳', description: 'Containerization and orchestration with Kubernetes' },
      { name: 'VS Code', level: 95, icon: '💻', description: 'Advanced IDE with extensions and debugging' },
      { name: 'Postman', level: 88, icon: '📮', description: 'API testing and documentation tool' },
      { name: 'Webpack', level: 80, icon: '📦', description: 'Module bundler and build tool optimization' },
      { name: 'Jest', level: 83, icon: '🧪', description: 'JavaScript testing framework and unit testing' },
      { name: 'Figma', level: 78, icon: '🎨', description: 'UI/UX design and prototyping tool' },
      { name: 'Chrome DevTools', level: 90, icon: '�', description: 'Advanced debugging and performance profiling' }
    ]
  };

  useEffect(() => {
    // Trigger animations after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
      setAnimatedSkills(skills[activeCategory as keyof typeof skills].map(skill => skill.name));
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent animate-pulse">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto hover:text-white transition-colors duration-300">
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
              className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 transition-all duration-500 cursor-pointer ${
                animatedSkills.includes(skill.name) ? 'animate-fade-in' : ''
              } ${
                hoveredSkill === skill.name 
                  ? 'scale-110 border-white/50 shadow-2xl rotate-1' 
                  : 'hover:scale-105 hover:border-white/30 hover:shadow-xl'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                transform: hoveredSkill === skill.name ? 'perspective(1000px) rotateY(5deg)' : 'perspective(1000px) rotateY(0deg)'
              }}
              onMouseEnter={() => {
                setHoveredSkill(skill.name);
                if (!progressAnimated[skill.name]) {
                  setTimeout(() => {
                    setProgressAnimated(prev => ({ ...prev, [skill.name]: true }));
                  }, 200);
                }
              }}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className={`text-2xl transition-all duration-300 ${
                    hoveredSkill === skill.name ? 'scale-150 rotate-12' : 'scale-100'
                  }`}>{skill.icon}</span>
                  <h3 className={`text-xl font-bold transition-all duration-300 ${
                    hoveredSkill === skill.name ? 'text-white scale-110' : 'text-white'
                  }`}>{skill.name}</h3>
                </div>
                <div className="text-right">
                  <div className={`text-2xl font-bold transition-all duration-300 ${
                    hoveredSkill === skill.name ? 'scale-125 text-yellow-300' : 'text-white'
                  }`}>{skill.level}%</div>
                  <div className={`text-sm transition-all duration-300 ${
                    hoveredSkill === skill.name ? 'text-gray-200' : 'text-gray-400'
                  }`}>Proficiency</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.color} transition-all duration-1000 ease-out relative overflow-hidden ${
                      progressAnimated[skill.name] ? 'animate-pulse' : ''
                    }`}
                    style={{ 
                      width: hoveredSkill === skill.name ? `${skill.level}%` : `${skill.level}%`,
                      boxShadow: hoveredSkill === skill.name ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none'
                    }}
                  >
                    {hoveredSkill === skill.name && (
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    )}
                  </div>
                </div>
                {hoveredSkill === skill.name && (
                  <div className="text-xs text-gray-400 mt-1 animate-fade-in">
                    {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 50 ? 'Intermediate' : 'Beginner'}
                  </div>
                )}
              </div>

              <p className={`text-sm leading-relaxed transition-all duration-300 ${
                hoveredSkill === skill.name ? 'text-white scale-105' : 'text-gray-300'
              }`}>
                {skill.description}
              </p>

              {/* Interactive Hover Effects */}
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl transition-all duration-300 ${
                hoveredSkill === skill.name ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              {hoveredSkill === skill.name && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce shadow-lg"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;