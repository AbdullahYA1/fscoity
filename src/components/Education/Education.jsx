import React from 'react';
import { GraduationCap, MapPin, Calendar, User, Terminal, Code } from 'lucide-react';
import './Education.css';

const Education = ({ education }) => {
  return (
    <section
      id="education"
      className="min-h-screen py-20 pt-48 relative z-10 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-6xl font-bold text-green-300 relative animate-slide-left mb-16 text-center transform hover:scale-105 transition-all duration-500 cursor-default">
          &gt; ACADEMIC
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-xl animate-pulse" />
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative border border-green-400/30 bg-black/80 backdrop-blur-sm p-6 transform hover:scale-105 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <GraduationCap
                    className="text-green-400 mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-green-300 mb-1 group-hover:text-green-200 transition-colors duration-500">
                      {edu.title}
                    </h3>
                    <h4 className="text-base md:text-lg text-cyan-300 mb-2 font-semibold">
                      {edu.institution}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center text-xs md:text-sm text-green-400/70 mb-4 space-y-1 sm:space-y-0 sm:space-x-4">
                      <span className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        {edu.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital grid overlay */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                    linear-gradient(90deg, transparent 95%, #00ff41 100%),
                    linear-gradient(180deg, transparent 95%, #00ff41 100%)
                  `,
                    backgroundSize: "15px 15px",
                  }}
                />
              </div>
            </div>
          ))}

          {/* Profile Info */}
          <div
            className="group relative border border-green-400/30 bg-black/80 backdrop-blur-sm p-6 transform hover:scale-105 transition-all duration-500 animate-fade-up"
            style={{ animationDelay: `${education.length * 0.3}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <h4 className="text-lg md:text-xl font-bold text-green-300 mb-4 flex items-center group-hover:text-green-200 transition-colors duration-500">
                <User className="mr-2" size={20} />
                IDENTITY
              </h4>
              <div className="space-y-3 text-xs md:text-sm">
                <div className="flex items-center text-green-400">
                  <Terminal className="mr-2" size={16} />
                  <span className="font-mono">Abdullah Yousef Alowais</span>
                </div>
                <div className="flex items-center text-green-400">
                  <Code className="mr-2" size={16} />
                  <span>Full Stack Developer</span>
                </div>
                <div className="flex items-center text-green-400">
                  <MapPin className="mr-2" size={16} />
                  <span>Saudi Arabia</span>
                </div>
              </div>
            </div>

            {/* Digital grid overlay */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                  linear-gradient(90deg, transparent 95%, #00ff41 100%),
                  linear-gradient(180deg, transparent 95%, #00ff41 100%)
                `,
                  backgroundSize: "15px 15px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
