import React, { useState, useEffect } from 'react';

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
      { name: 'React', level: 95, icon: '⚛️', description: 'Advanced React with hooks, context, and performance optimization' },
      { name: 'TypeScript', level: 90, icon: '📘', description: 'Strong typing and advanced TypeScript patterns' },
      { name: 'Tailwind CSS', level: 92, icon: '🎨', description: 'Utility-first CSS framework for rapid UI development' }
    ],
    backend: [
      { name: 'Node.js', level: 92, icon: '🟢', description: 'Server-side JavaScript with Express and Fastify' },
      { name: 'Python', level: 88, icon: '🐍', description: 'Django, Flask, and FastAPI development' },
      { name: 'Java', level: 85, icon: '☕', description: 'Spring Boot and enterprise application development' },
      { name: 'PHP', level: 82, icon: '🐘', description: 'Laravel and WordPress development' }
    ],
    database: [
      { name: 'PostgreSQL', level: 90, icon: '🐘', description: 'Advanced SQL and database optimization' },
      { name: 'MongoDB', level: 88, icon: '🍃', description: 'NoSQL database with aggregation pipelines' },
      { name: 'Redis', level: 85, icon: '🔴', description: 'In-memory data structure store' },
      { name: 'MySQL', level: 87, icon: '🐬', description: 'Relational database management system' },
      { name: 'Elasticsearch', level: 80, icon: '🔍', description: 'Search and analytics engine' },
      { name: 'GraphQL', level: 85, icon: '📊', description: 'Query language and runtime for APIs' }
    ],
    tools: [
      { name: 'Docker', level: 88, icon: '🐳', description: 'Containerization and orchestration' },
      { name: 'AWS', level: 85, icon: '☁️', description: 'Cloud infrastructure and services' },
      { name: 'Git', level: 92, icon: '📝', description: 'Version control and collaboration' },
      { name: 'CI/CD', level: 87, icon: '🔄', description: 'Jenkins, GitHub Actions, and GitLab CI' },
      { name: 'Kubernetes', level: 80, icon: '⚓', description: 'Container orchestration platform' },
      { name: 'Terraform', level: 78, icon: '🏗️', description: 'Infrastructure as code' }
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
                  <span className="text-2xl">{skill.icon}</span>
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