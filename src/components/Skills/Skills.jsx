import React from 'react';
import './Skills.css';

const Skills = ({ skills = [] }) => {
  // Show loading state if skills array is empty
  if (!skills || skills.length === 0) {
    return (
      <section
        id="skills"
        className="min-h-screen py-20 pt-48 relative z-10 animate-on-scroll"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto skills-section">
            <h2 className="text-3xl md:text-6xl font-bold text-green-300 relative animate-slide-left mb-12 text-center transform hover:scale-105 transition-all duration-500 cursor-default">
              &gt; SKILLS
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400/10 to-transparent blur-xl animate-pulse" />
            </h2>
            <div className="text-center text-green-400">
              <div className="animate-pulse">Loading skills...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section
      id="skills"
      className="min-h-screen py-20 pt-48 relative z-10 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto skills-section">
          <h2 className="text-3xl md:text-6xl font-bold text-green-300 relative animate-slide-left mb-12 text-center transform hover:scale-105 transition-all duration-500 cursor-default">
            &gt; SKILLS
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/10 to-transparent blur-xl animate-pulse" />
          </h2>
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

export default Skills;
