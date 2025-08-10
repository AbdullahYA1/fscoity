import React from 'react';
import { Terminal, X, Menu } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ 
  sections, 
  currentSection, 
  glitchActive, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  scrollToSection 
}) => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl border-b border-green-400/30 z-50 animate-on-scroll">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div
              className={`text-lg font-bold flex items-center transition-all duration-500 ${
                glitchActive ? "animate-pulse text-red-400" : ""
              }`}
            >
              <Terminal className="mr-2" size={20} />
              <span className="hidden sm:inline">ROOT@asoceity$</span>
              <span className="sm:hidden">[ROOT]$</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-baseline space-x-6">
            {sections.map((section, index) => (
              <button
                key={section}
                onClick={() => scrollToSection(index)}
                className={`hover:text-green-300 transition-all duration-500 px-3 py-2 text-sm uppercase tracking-wider relative transform hover:scale-110 ${
                  currentSection === index ? "text-green-300" : ""
                }`}
              >
                <span className="relative z-10">./{section}</span>
                {currentSection === index && (
                  <div className="absolute inset-0 bg-green-400/10 border border-green-400/30 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-green-400 hover:text-green-300 transition-colors duration-300 p-2 relative z-50 bg-black/20 rounded"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-16 left-0 right-0 bg-black border-2 border-green-400 shadow-2xl shadow-green-400/50 z-[9999] min-h-[50vh]">
            <div className="px-4 py-6 space-y-4">
              <div className="text-green-400 text-sm mb-6 text-center animate-pulse bg-green-400/10 py-2 border border-green-400/30">
                &gt; NAVIGATION_MENU_ACTIVE &lt;
              </div>
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(index)}
                  className={`mobile-nav-button ${
                    currentSection === index
                      ? "text-green-200 border-cyan-400 bg-cyan-400/20 shadow-lg shadow-green-400/30"
                      : "text-green-400"
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.05}s`,
                    animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both`
                  }}
                >
                  <span className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Terminal className="mr-3" size={18} />
                      ./{section}
                    </span>
                    {currentSection === index && (
                      <span className="text-cyan-400 animate-pulse text-lg">●</span>
                    )}
                  </span>
                </button>
              ))}
              <div className="pt-6 border-t-2 border-green-400/50 bg-green-400/10">
                <div className="text-sm text-green-400 text-center font-mono">
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
