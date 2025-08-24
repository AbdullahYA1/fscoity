import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    btn.style.animation = "shake 0.5s ease-in-out";
    setTimeout(() => (btn.style.animation = ""), 500);

    // More user-friendly message
    alert("Thank you for your message! I'll get back to you soon.");

    // Clear the form
    e.target.reset();
  };

  const contactLinks = [
    {
      icon: Mail,
      text: "abdullah.y.alowias@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=abdullah.y.alowias@gmail.com&su=Let's%20Connect%20-%20Portfolio%20Inquiry&body=Hello%20Abdullah,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20discuss...",
    },
    {
      icon: Github,
      text: "github.com/AbdullahYA1",
      href: "https://github.com/AbdullahYA1",
    },
    {
      icon: Linkedin,
      text: "linkedin.com/in/abdullah-alowais",
      href: "https://www.linkedin.com/in/abdullah-alowais-5451182b4/",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 pt-48 relative z-10 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Main Title - Top Left */}
          <h2 className="text-3xl md:text-6xl font-bold text-green-300 relative animate-slide-left">
            &gt; LINKS
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-xl animate-pulse" />
          </h2>
          
          {/* Content Grid - Links and Form Inline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              {contactLinks.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center p-4 border border-green-400/30 bg-green-400/5 backdrop-blur-sm hover:border-green-400 transition-all duration-500 group transform hover:scale-105 animate-fade-up block contact-link"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <contact.icon
                    className="mr-4 text-green-400 group-hover:animate-pulse transition-all duration-300"
                    size={24}
                  />
                  <span className="group-hover:text-green-300 transition-colors duration-300">
                    {contact.text}
                  </span>
                </a>
              ))}
            </div>

            <div className="border border-green-400/30 bg-black/50 backdrop-blur-sm p-8 relative overflow-hidden transform hover:scale-105 transition-all duration-500 contact-form-container">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-cyan-400/5 animate-pulse" />

            {/* Digital rain effect */}
            <div className="absolute inset-0 opacity-10">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 text-green-400 text-xs animate-digital-rain"
                  style={{
                    left: `${i * 5}%`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                >
                  {Math.random().toString(2).substr(2, 8)}
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-bold mb-8 text-green-300 relative z-10 animate-slide-right">
              GET IN TOUCH
            </h3>
            <form className="space-y-6 relative z-10" onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="contact-input w-full bg-transparent border border-green-400/30 p-4 text-green-400 placeholder-green-400/50 focus:border-green-400 focus:outline-none transition-all duration-500 focus:shadow-lg focus:shadow-green-400/20 transform focus:scale-105"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="contact-input w-full bg-transparent border border-green-400/30 p-4 text-green-400 placeholder-green-400/50 focus:border-green-400 focus:outline-none transition-all duration-500 focus:shadow-lg focus:shadow-green-400/20 transform focus:scale-105"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="contact-input w-full bg-transparent border border-green-400/30 p-4 text-green-400 placeholder-green-400/50 focus:border-green-400 focus:outline-none transition-all duration-500 focus:shadow-lg focus:shadow-green-400/20 resize-none transform focus:scale-105"
              />
              <button
                type="submit"
                className="contact-submit w-full bg-green-400 text-black py-4 hover:bg-green-300 transition-all duration-500 font-bold tracking-wider relative overflow-hidden group transform hover:scale-105"
              >
                <span className="relative z-10">SEND MESSAGE</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
