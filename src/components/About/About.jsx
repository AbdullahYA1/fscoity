import React from 'react';
import { User, Code, Shield } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 pt-48 relative z-10 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-green-300 relative animate-slide-left mb-12 text-center transform hover:scale-105 transition-all duration-500 cursor-default">
            &gt; PROFILE
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/10 to-transparent blur-xl animate-pulse" />
          </h2>
          
          <div className="space-y-6 text-lg relative max-w-4xl mx-auto">
            <div
              className="p-6 border border-green-400/30 bg-green-400/5 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <p className="leading-relaxed flex items-start">
                <User
                  className="mr-3 mt-1 text-green-400 flex-shrink-0"
                  size={20}
                />
                Full Stack Developer with 1 years of experience building
                scalable web applications. Currently working as a Backend
                Engineer
              </p>
            </div>
            <div
              className="p-6 border border-green-400/30 bg-green-400/5 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="leading-relaxed flex items-start">
                <Code
                  className="mr-3 mt-1 text-green-400 flex-shrink-0"
                  size={20}
                />
                Specialized in backend engineering with expertise in
                PHP/Laravel, MongoDB, and microservices architecture.
                Proficient in frontend technologies including React, and Angular
              </p>
            </div>
            <div
              className="p-6 border border-cyan-400/30 bg-cyan-400/5 backdrop-blur-sm transform hover:scale-105 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              <p className="leading-relaxed flex items-start">
                <Shield
                  className="mr-3 mt-1 text-cyan-400 flex-shrink-0"
                  size={20}
                />
                Certified in cybersecurity with eJPT and eWPt and JavaScript
                programming credentials. Passionate about red teaming,
                security assessment, and building secure, scalable
                applications that protect user data and ensure system
                integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
