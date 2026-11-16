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
      icon: '/linkedin.jpeg',
      title: 'LinkedIn',
      value: 'linkedin.com/in/r-gopinathreddy-reddyvari-8a0a1a324/',
      description: 'Connect professionally',
      color: 'from-purple-500 to-pink-500',
      link: 'https://www.linkedin.com/in/r-gopinathreddy-reddyvari-8a0a1a324/'
    },
    {
      icon: '/github.png',
      title: 'GitHub',
      value: 'github.com/Rgopi143',
      description: 'Check out my code',
      color: 'from-slate-700 to-slate-900',
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
    <section id="connect" className="py-12 sm:py-20 bg-slate-50 text-slate-800 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-slate-600 max-w-3xl mx-auto px-2">
            Ready to bring your ideas to life? I'm here to help you create something amazing.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-5 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-2 sm:mb-4">Get In Touch</h3>
                <p className="text-slate-600 text-xs sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
                  Whether you have a project in mind, want to collaborate, or just want to say hello, 
                  I'd love to hear from you. Let's discuss how we can work together to create something extraordinary.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-3 sm:space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group bg-white rounded-xl sm:rounded-2xl p-3.5 sm:p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all duration-300 hover:scale-101"
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${method.color} rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 shadow-sm`}>
                        {method.icon.startsWith('/') ? (
                          <img src={method.icon} alt={method.title} className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl object-cover" />
                        ) : (
                          <span>{method.icon}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{method.title}</h4>
                        <p className="text-blue-600 font-semibold text-xs sm:text-sm mb-0.5 truncate">{method.value}</p>
                        <p className="text-slate-500 text-xs">{method.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Availability Status */}
              <div className="bg-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-emerald-200">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-1.5 sm:mb-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-emerald-800 text-xs sm:text-sm font-bold">Available for new opportunities</span>
                </div>
                <p className="text-emerald-700 text-xs sm:text-sm leading-relaxed">
                  I'm currently accepting new projects and collaborations. Response time: Usually within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-lg">
              <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-base bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                        activeField === 'name' 
                          ? 'border-blue-500 ring-blue-100' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-base bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                        activeField === 'email' 
                          ? 'border-blue-500 ring-blue-100' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-base bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-300 ${
                      activeField === 'subject' 
                        ? 'border-blue-500 ring-blue-100' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    rows={4}
                    className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-base bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                      activeField === 'message' 
                        ? 'border-blue-500 ring-blue-100' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-bold text-sm sm:text-lg text-white transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-slate-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-101 hover:shadow-lg hover:shadow-blue-500/25'
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
      </div>
    </section>
  );
};

export default Contact;
