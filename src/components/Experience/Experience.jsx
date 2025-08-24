import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import './Experience.css';

const Experience = ({ experiences }) => {
  return (
    <section
      id="experience"
      className="min-h-screen py-20 pt-48 relative z-10 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-6xl font-bold text-green-300 relative animate-slide-left mb-16 text-center transform hover:scale-105 transition-all duration-500 cursor-default">
          &gt; Experience
          <div className="absolute -inset-4 bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-xl animate-pulse" />
        </h2>

        <div className="relative">
          {/* Timeline Line - Hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-green-500 to-cyan-400 opacity-30"></div>

          {/* Mobile Timeline Line - Visible only on mobile */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-400 via-green-500 to-cyan-400 opacity-30"></div>

          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center animate-on-scroll ${
                  // Mobile: all cards aligned to the right of the line
                  "justify-start md:justify-start" +
                  // Desktop: alternating layout
                  (index % 2 === 0 ? " md:justify-start" : " md:justify-end")
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Node - Different positions for mobile and desktop */}
                <div className="timeline-node">
                  <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-50"></div>
                </div>

                {/* Experience Card */}
                <div
                  className={`
                    w-full pl-16 pr-4 md:pl-0 md:pr-0 
                    md:w-5/12 
                    ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}
                  `}
                >
                  <div className="experience-card group transform hover:scale-105 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Status Badge */}
                    <div className="absolute -top-2 md:-top-3 right-2 md:right-4">
                      <span
                        className={`px-2 py-1 md:px-3 md:py-1 text-xs font-bold rounded-full border ${
                          exp.status === "current"
                            ? "bg-green-400 text-black border-green-400 animate-pulse"
                            : "bg-gray-800 text-green-400 border-green-400/30"
                        }`}
                      >
                        {exp.status === "current" ? "ACTIVE" : "COMPLETED"}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg md:text-xl font-bold text-green-300 mb-1 group-hover:text-green-200 transition-colors duration-500">
                            {exp.title}
                          </h3>
                          <h4 className="text-base md:text-lg text-cyan-300 mb-2 font-semibold">
                            {exp.company}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center text-xs md:text-sm text-green-400/70 mb-2 space-y-1 sm:space-y-0 sm:space-x-4">
                            <span className="flex items-center">
                              <MapPin
                                size={12}
                                className="mr-1"
                              />
                              {exp.location}
                            </span>
                            <span className="flex items-center">
                              <Calendar
                                size={12}
                                className="mr-1"
                              />
                              {exp.period}
                            </span>
                          </div>
                          <span className="inline-block text-xs px-2 py-1 bg-green-400/20 text-green-300 rounded border border-green-400/30">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5 className="text-xs md:text-sm font-semibold text-green-300 mb-2 uppercase tracking-wide">
                          Key Responsibilities:
                        </h5>
                        <ul className="space-y-1 md:space-y-2 text-xs md:text-sm text-gray-300 leading-relaxed">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-400 mr-2 mt-1 text-xs">
                                ▶
                              </span>
                              <span className="group-hover:text-gray-200 transition-colors duration-500 flex-1">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-xs md:text-sm font-semibold text-green-300 mb-2 uppercase tracking-wide">
                          Technologies:
                        </h5>
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 bg-green-400/10 text-green-400 border border-green-400/30 rounded hover:bg-green-400/20 transition-all duration-300 transform hover:scale-110"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Digital grid overlay */}
                    <div className="experience-digital-grid">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
