import React from 'react';
import { GraduationCap, MapPin, Calendar, User, Terminal, Code } from 'lucide-react';
import './Education.css';

const Education = ({ education }) => {
  return (
    <section
      id="education"
      className="py-12 pb-0 pt-48 relative z-10 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-6xl font-bold text-green-300 relative animate-slide-left mb-8 text-center transform hover:scale-105 transition-all duration-500 cursor-default">
          &gt; ACADEMIC_MATRIX
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-xl animate-pulse" />
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative border border-green-400/30 bg-green-400/5 backdrop-blur-sm p-6 transform hover:scale-105 transition-all duration-500 animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex items-start mb-4">
                  <GraduationCap
                    className="text-green-400 mr-4 mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-green-300 mb-2 group-hover:text-green-200 transition-colors duration-500">
                      {edu.title}
                    </h3>
                    <h4 className="text-lg text-cyan-300 font-semibold mb-2">
                      {edu.institution}
                    </h4>
                    <div className="flex items-center text-sm text-green-400/70 mb-4 space-x-4">
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {edu.location}
                      </span>
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Profile Info */}
          <div className="mt-6 mb-0 p-6 border border-green-400/30 bg-black/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-cyan-400/5 animate-pulse" />

            <div className="relative z-10">
              <h4 className="text-xl font-bold text-green-300 mb-4 flex items-center">
                <User className="mr-2" size={20} />
                IDENTITY
              </h4>
              <div className="space-y-3 text-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
