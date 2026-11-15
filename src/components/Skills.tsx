import { useState, useEffect } from 'react';

const categories = [
  { id: 'frontend', label: 'Frontend', icon: '🎨', color: 'from-blue-600 to-cyan-600' },
  { id: 'backend', label: 'Backend', icon: '⚙️', color: 'from-purple-600 to-pink-600' },
  { id: 'database', label: 'Database', icon: '🗄️', color: 'from-emerald-600 to-teal-600' },
  { id: 'tools', label: 'Tools', icon: '🛠️', color: 'from-orange-600 to-red-600' }
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
    { name: 'Chrome DevTools', level: 90, icon: '🔍', description: 'Advanced debugging and performance profiling' }
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [animatedSkills, setAnimatedSkills] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [progressAnimated, setProgressAnimated] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    // Trigger animations after component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
      setAnimatedSkills(skills[activeCategory as keyof typeof skills].map(skill => skill.name));
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-white text-slate-900 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto hover:text-slate-900 transition-colors duration-300">
            Mastering the tools and technologies that power modern web applications
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 rounded-2xl p-2 border border-slate-200 shadow-sm flex flex-wrap justify-center gap-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-md transform scale-105`
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
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
              className={`group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-500 cursor-pointer ${
                animatedSkills.includes(skill.name) ? 'animate-fade-in' : ''
              } ${
                hoveredSkill === skill.name 
                  ? 'scale-105 border-blue-400 shadow-xl' 
                  : 'hover:scale-102 hover:border-slate-300'
              }`}
              style={{ 
                animationDelay: `${index * 80}ms`
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
                    hoveredSkill === skill.name ? 'scale-125 rotate-6' : 'scale-100'
                  }`}>{skill.icon}</span>
                  <h3 className="text-xl font-bold text-slate-900">{skill.name}</h3>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-blue-600">{skill.level}%</div>
                  <div className="text-xs text-slate-400 font-medium">Proficiency</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.color} transition-all duration-1000 ease-out relative overflow-hidden ${
                      progressAnimated[skill.name] ? 'animate-pulse' : ''
                    }`}
                    style={{ 
                      width: `${skill.level}%`
                    }}
                  ></div>
                </div>
                {hoveredSkill === skill.name && (
                  <div className="text-xs text-slate-500 font-semibold mt-1 animate-fade-in">
                    {skill.level >= 90 ? 'Expert' : skill.level >= 75 ? 'Advanced' : skill.level >= 50 ? 'Intermediate' : 'Beginner'}
                  </div>
                )}
              </div>

              <p className="text-sm leading-relaxed text-slate-600">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
