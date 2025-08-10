import React from 'react';
import { Phone, Briefcase } from 'lucide-react';
import robotFace from "../../assets/m.robotface.png.jpg";
import './Hero.css';

const Hero = ({ isLoaded, scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative z-10 animate-on-scroll pt-48"
    >
      <div className="text-center">
        <div
          className={`transition-all duration-2000 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-12">
            <div className="text-green-400 text-xl mb-6 animate-pulse">
              &gt; Abdullah Y0sef
            </div>
            <div className="text-lg sm:text-xl md:text-3xl mb-8 text-green-400 animate-fade-in px-4">
              <span className="typing-effect text-center">
                <span className="block sm:inline">Full Stack Developer</span>
                <span className="hidden sm:inline"> | </span>
                <span className="block sm:inline">Backend Engineer</span>
                <span className="hidden sm:inline"> | </span>
                <span className="block sm:inline">Cybersecurity Red Teamer</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in">
            <button
              onClick={() => scrollToSection(7)}
              className="hero-button hero-button--outline transform hover:scale-105 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center">
                <Phone className="mr-2" size={20} />
                INITIATE_CONTACT
              </span>
              <div className="hero-button__overlay" />
            </button>
            <button
              onClick={() => scrollToSection(6)}
              className="hero-button hero-button--filled transform hover:scale-105 transition-all duration-500"
            >
              <span className="relative z-10 flex items-center">
                <Briefcase className="mr-2" size={20} />
                EXPLORE_PROJECTS
              </span>
              <div className="hero-button__overlay--gradient" />
            </button>
          </div>
        </div>
      </div>

      {/* 3D Rotating Robot Face */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="relative w-32 h-32 md:w-40 md:h-40">
          <div 
            className="w-full h-full relative preserve-3d animate-spin-3d"
            style={{
              transformStyle: 'preserve-3d',
              animation: 'rotate3D 10s linear infinite'
            }}
          >
            <img
              src={robotFace}
              alt="Robot Face"
              className="w-full h-full object-cover rounded-full border-4 border-green-400 shadow-lg shadow-green-400/50"
              style={{
                transform: 'rotateY(0deg) translateZ(25px)',
              }}
            />
            <img
              src={robotFace}
              alt="Robot Face"
              className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-green-400 shadow-lg shadow-green-400/50 opacity-30"
              style={{
                transform: 'rotateY(90deg) translateZ(25px)',
              }}
            />
            <img
              src={robotFace}
              alt="Robot Face"
              className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-green-400 shadow-lg shadow-green-400/50 opacity-30"
              style={{
                transform: 'rotateY(180deg) translateZ(25px)',
              }}
            />
            <img
              src={robotFace}
              alt="Robot Face"
              className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-green-400 shadow-lg shadow-green-400/50 opacity-30"
              style={{
                transform: 'rotateY(270deg) translateZ(25px)',
              }}
            />
          </div>
          
          {/* Glowing ring effect */}
          <div className="absolute inset-0 rounded-full border-2 border-green-400/20 animate-pulse scale-110"></div>
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-pulse scale-125 animation-delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
