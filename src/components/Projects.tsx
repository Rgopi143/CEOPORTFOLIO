import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', icon: '🌟' },
    { id: 'web', label: 'Web Apps', icon: '🌐' },
    { id: 'mobile', label: 'Mobile Apps', icon: '📱' },
    { id: 'ai', label: 'AI/ML', icon: '🤖' },
    { id: 'design', label: 'UI/UX', icon: '🎨' }
  ];

  const projects = [
    {
      id: 'ecommerce',
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      image: '/E-commerse .png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 'ai-chat',
      title: 'AI Chat Assistant',
      category: 'ai',
      description: 'Intelligent chatbot powered by OpenAI GPT-4 with real-time conversation',
      image: '/Ai Chat assitant.png',
      technologies: ['Python', 'OpenAI', 'React', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    },
    {
      id: 'fitness-app',
      title: 'Fitness Tracker',
      category: 'mobile',
      description: 'Cross-platform mobile app for workout tracking and health monitoring',
      image: '/Fitness tracker.png',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 'dashboard',
      title: 'Analytics Dashboard',
      category: 'web',
      description: 'Real-time data visualization dashboard with interactive charts and reports',
      image: '/analytics dashboard.png',
      technologies: ['Vue.js', 'D3.js', 'Node.js', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 'design-system',
      title: 'Design System',
      category: 'design',
      description: 'Comprehensive design system with reusable components and guidelines',
      image: '/Design system.png',
      technologies: ['Figma', 'Storybook', 'React', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
    },
    {
      id: 'blockchain',
      title: 'DeFi Platform',
      category: 'web',
      description: 'Decentralized finance platform with smart contracts and yield farming',
      image: '/Defi platform.png',
      technologies: ['Solidity', 'Web3.js', 'React', 'Ethereum'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/30 via-transparent to-purple-100/30"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent drop-shadow-lg">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative solutions that solve real-world problems
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                                 className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                   activeFilter === filter.id
                     ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                     : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                 }`}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 hover:scale-105"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Featured
                  </div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                {project.image.startsWith('http') || project.image.startsWith('/') ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <span className="text-6xl">{project.image}</span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white hover:scale-110 transition-colors duration-300">
                      🔗
                    </button>
                    <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white hover:scale-110 transition-colors duration-300">
                      📁
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-2xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-6 opacity-90">
              Let's collaborate to bring your ideas to life with cutting-edge technology
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300 hover:scale-105 transform"
              >
                View All Projects
              </button>
              <button 
                onClick={() => window.open('mailto:rgopinathreddyreddyvari143@gmail.com', '_blank')}
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;