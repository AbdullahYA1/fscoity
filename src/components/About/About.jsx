import React from 'react';
import { User, Code, Shield } from 'lucide-react';
import './About.css';

const About = ({ skills }) => {
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

        {/* Skills Section */}
        <div id="skills" className="max-w-4xl mx-auto skills-section">
          <h3 className="text-2xl md:text-4xl font-bold text-green-300 mb-12 text-center relative animate-slide-right transform hover:scale-105 transition-all duration-500 cursor-default">
            &gt; SKILLS_MATRIX
            <div className="absolute -inset-2 bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-lg animate-pulse" />
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="space-y-3 group skill-bar-animated transform hover:scale-105 transition-all duration-500 p-4 rounded border border-transparent hover:border-green-400/30 hover:bg-green-400/5"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold group-hover:text-green-300 transition-colors duration-300">{skill.name}</span>
                  <span className="text-green-300 font-bold skill-percentage">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-6 bg-gray-900 border border-green-400/30 overflow-hidden rounded group-hover:border-green-400/50 transition-all duration-300">
                  <div
                    className={`skill-progress h-full bg-gradient-to-r ${skill.color} relative`}
                    style={{ "--skill-width": `${skill.level}%` }}
                    data-width={skill.level}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300/30 to-transparent animate-pulse" />
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent skill-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300/10 to-transparent opacity-0 skill-shine group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
