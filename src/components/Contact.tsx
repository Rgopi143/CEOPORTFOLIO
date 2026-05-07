import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const contactMethods = [
    { 
      icon: '📧',
      title: 'Email',
      value: 'rgopinathreddyreddyvari143@gmail.com',
      description: 'Send me a message anytime',
      color: 'from-blue-500 to-cyan-500',
      link: 'mailto:rgopinathreddyreddyvari143@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+91 8247392437',
      description: 'Available during business hours',
      color: 'from-green-500 to-emerald-500',
      link: 'https://wa.me/918247392437'
    },
    {
      icon: '/LinkedIn logo.jpeg',
      title: 'LinkedIn',
      value: 'linkedin.com/in/r-gopinathreddy-reddyvari-8a0a1a324/',
      description: 'Connect professionally',
      color: 'from-purple-500 to-pink-500',
      link: 'https://www.linkedin.com/in/r-gopinathreddy-reddyvari-8a0a1a324/'
    },
    {
      icon: '/Github Pic.png',
      title: 'GitHub',
      value: 'github.com/Rgopi143',
      description: 'Check out my code',
      color: 'from-gray-700 to-gray-900',
      link: 'https://github.com/Rgopi143'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message with form data
    const whatsappMessage = encodeURIComponent(
      `👋 Hello! I'm reaching out from your portfolio.\n\n` +
      `📝 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📌 *Subject:* ${formData.subject || 'Portfolio Contact'}\n\n` +
      `💬 *Message:*\n${formData.message}\n\n` +
      `Looking forward to connecting with you!`
    );
    
    // Redirect to WhatsApp with pre-filled message
    const whatsappLink = `https://wa.me/918247392437?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="connect" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-purple-900/50"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm here to help you create something amazing.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Let's discuss how we can work together to create something extraordinary.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method) => (
                  method.title === 'LinkedIn' ? (
                    <a
                      key={method.title}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-2xl`}>
                          <img src={method.icon} alt={method.title} className="w-12 h-12 rounded-lg" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-2">{method.title}</h4>
                          <p className="text-blue-300 font-medium mb-1">{method.value}</p>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </a>
                  ) : method.title === 'Email' ? (
                    <a
                      key={method.title}
                      href={`mailto:${method.value}`}
                      className="block group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-3xl`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-2">{method.title}</h4>
                          <p className="text-blue-300 font-medium mb-1">{method.value}</p>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </a>
                  ) : method.title === 'Phone' ? (
                    <a
                      key={method.title}
                      href={`https://wa.me/919100397118`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-3xl`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-2">{method.title}</h4>
                          <p className="text-blue-300 font-medium mb-1">{method.value}</p>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </a>
                  ) : method.title === 'GitHub' ? (
                    <a
                      key={method.title}
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                      style={{ textDecoration: 'none' }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-2xl`}>
                          <img src={method.icon} alt={method.title} className="w-12 h-12 rounded-lg" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-2">{method.title}</h4>
                          <p className="text-blue-300 font-medium mb-1">{method.value}</p>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={method.title}
                      className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-2xl`}>
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold mb-2">{method.title}</h4>
                          <p className="text-blue-300 font-medium mb-1">{method.value}</p>
                          <p className="text-gray-400 text-sm">{method.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for new opportunities</span>
                </div>
                <p className="text-gray-300 text-sm">
                  I'm currently accepting new projects and collaborations. 
                  Response time: Usually within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        activeField === 'name' 
                          ? 'border-blue-400 ring-blue-400/20' 
                          : 'border-white/20 hover:border-white/40'
                      }`}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                        activeField === 'email' 
                          ? 'border-blue-400 ring-blue-400/20' 
                          : 'border-white/20 hover:border-white/40'
                      }`}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                      activeField === 'subject' 
                        ? 'border-blue-400 ring-blue-400/20' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    rows={6}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      activeField === 'message' 
                        ? 'border-blue-400 ring-blue-400/20' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Social Links */}
       
      </div>
    </section>
  );
};

export default Contact;