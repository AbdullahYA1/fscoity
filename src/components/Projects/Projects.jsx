import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = ({ projects }) => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 pt-48 relative z-10 animate-on-scroll"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-6xl font-bold mb-16 text-center text-green-300 relative transform hover:scale-105 transition-all duration-500 cursor-default">
          &gt; PROJECTS
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-cyan-400/10 blur-2xl animate-pulse" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-green-400/30 bg-black/50 backdrop-blur-sm hover:border-green-400 transition-all duration-700 overflow-hidden transform hover:scale-105 animate-project-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-transparent animate-pulse opacity-0 group-hover:opacity-100" />

              <div className="relative z-10 p-8">
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-xl font-bold ml-3 text-green-300 group-hover:text-green-200 transition-colors duration-500">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-green-400/20 text-green-300 border border-green-400/30 backdrop-blur-sm hover:bg-green-400/30 transition-all duration-300 transform hover:scale-110"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-6">
                  <a
                    href={project.github}
                    className="flex items-center text-green-400 hover:text-green-300 transition-all duration-500 group-hover:animate-pulse transform hover:scale-110"
                  >
                    <Github size={18} className="mr-2" />
                    REPO
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-green-400 hover:text-green-300 transition-all duration-500 group-hover:animate-pulse transform hover:scale-110"
                  >
                    <ExternalLink size={18} className="mr-2" />
                    LIVE
                  </a>
                </div>
              </div>

              {/* Digital grid overlay */}
              <div className="digital-grid-overlay">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `
                    linear-gradient(90deg, transparent 98%, #00ff41 100%),
                    linear-gradient(180deg, transparent 98%, #00ff41 100%)
                  `,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
