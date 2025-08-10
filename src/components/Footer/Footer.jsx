import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="border-t border-green-400/30 py-12 relative z-10 animate-on-scroll footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-4">
          <p className="text-green-400/70 text-lg animate-fade-in transform hover:scale-105 hover:text-green-400 transition-all duration-500 cursor-default">
            &copy; 2025 Abdullah Yousef | Portfolio v2.0
          </p>
          <p
            className="text-cyan-400/70 italic animate-fade-in footer-quote transform hover:scale-105 hover:text-cyan-400 transition-all duration-500 cursor-default"
            style={{ animationDelay: "0.2s" }}
          >
            "The future belongs to those who can turn ideas into reality"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
