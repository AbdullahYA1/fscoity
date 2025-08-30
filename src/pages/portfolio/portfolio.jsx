import React, { useState, useEffect } from "react";

// Components
import Navigation from "../../components/Navigation/Navigation";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education";
import Certificates from "../../components/Certificates/Certificates";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import ThreeJSBackground from "../../components/ThreeJSBackground/ThreeJSBackground";
import GridOverlay from "../../components/GridOverlay/GridOverlay";

// Data
import {
  fetchProjectsData,
  fetchSkillsData,
  fetchExperiencesData,
  fetchEducationData,
  fetchCertificatesData,
} from "./portfolioData.jsx";
import "./portfolio.css";

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Data state
  const [projectsData, setProjectsData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [experiencesData, setExperiencesData] = useState([]);
  const [educationData, setEducationData] = useState([]);
  const [certificatesData, setCertificatesData] = useState([]);
  
  // Loading states
  const [dataLoading, setDataLoading] = useState(true);
  const [dataError, setDataError] = useState(null);

  const sections = [
    "home",
    "about",
    "skills",
    "experience",
    "education",
    "certificates",
    "projects",
    "contact",
  ];

  // Auto scroll to top on page reload and reset animations
  useEffect(() => {
    // Force scroll to top immediately
    window.scrollTo(0, 0);

    // Reset any existing animations
    const animatedElements = document.querySelectorAll(".animate-in");
    animatedElements.forEach((el) => {
      el.classList.remove("animate-in");
    });

    // Disable scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  // Scroll animations with Intersection Observer
  // Re-run when dynamic data finishes loading so newly inserted nodes get observed
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show scroll to top button after scrolling 500px
      setShowScrollTop(currentScrollY > 500);
    };

    const observeElements = () => {
      const elements = document.querySelectorAll(
        ".animate-on-scroll, .skill-bar-animated, .animate-fade-up, .certificate-card"
      );
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Handle fade-up elements with proper delays
              if (entry.target.classList.contains("animate-fade-up") || entry.target.classList.contains("certificate-card")) {
                const delay = entry.target.style.animationDelay 
                  ? parseFloat(entry.target.style.animationDelay) * 1000 
                  : 0;
                
                setTimeout(() => {
                  entry.target.classList.add("animate-in");
                }, delay);
              } else {
                entry.target.classList.add("animate-in");
              }

              // Special handling for skill bars
              if (entry.target.classList.contains("skill-bar-animated")) {
                const skillProgress =
                  entry.target.querySelector(".skill-progress");
                const skillPercentage =
                  entry.target.querySelector(".skill-percentage");
                const skillGlow = entry.target.querySelector(".skill-glow");
                const skillShine = entry.target.querySelector(".skill-shine");

                if (skillProgress) {
                  const targetWidth = skillProgress.dataset.width;

                  // Animate the skill bar with loading effect
                  setTimeout(
                    () => {
                      // Start all animations simultaneously
                      skillProgress.classList.add("animate");

                      // Add glow effect with same timing as progress bar
                      if (skillGlow) {
                        skillGlow.classList.add("animate");
                      }

                      // Add shine effect with same timing as progress bar
                      if (skillShine) {
                        skillShine.classList.add("animate");
                      }

                      // Animate percentage counter to match the 2s duration
                      if (skillPercentage) {
                        let currentValue = 0;
                        const targetValue = parseInt(targetWidth);
                        const duration = 2000; // Match CSS transition duration
                        const increment = targetValue / (duration / 16); // 60fps for smoother animation

                        const counter = setInterval(() => {
                          currentValue += increment;
                          if (currentValue >= targetValue) {
                            currentValue = targetValue;
                            clearInterval(counter);
                          }
                          skillPercentage.textContent =
                            Math.floor(currentValue) + "%";
                        }, 16); // 60fps (1000ms / 60fps ≈ 16ms)
                      }
                    },
                    entry.target.style.animationDelay
                      ? parseFloat(entry.target.style.animationDelay) * 1000
                      : 0
                  );
                }
              }
            }
          });
        },
        { threshold: 0.2, rootMargin: "50px" }
      );

      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };

    window.addEventListener("scroll", handleScroll);
    const cleanup = observeElements();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanup();
    };
  }, [
    dataLoading,
    projectsData.length,
    skillsData.length,
    experiencesData.length,
    educationData.length,
    certificatesData.length,
  ]);

  // Glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest("nav")) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Fetch data from API
  useEffect(() => {
    const fetchAllData = async () => {
      setDataLoading(true);
      setDataError(null);

      try {
        // Fetch all data in parallel
        const [projects, skills, experiences, education, certificates] = await Promise.all([
          fetchProjectsData(),
          fetchSkillsData(),
          fetchExperiencesData(),
          fetchEducationData(),
          fetchCertificatesData(),
        ]);

        // Update state with fetched data
        setProjectsData(projects);
        setSkillsData(skills);
        setExperiencesData(experiences);
        setEducationData(education);
        setCertificatesData(certificates);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
        setDataError("Failed to load portfolio data. Please try again later.");
      } finally {
        setDataLoading(false);
      }
    };

    fetchAllData();
  }, []);

  const scrollToSection = (index) => {
    setCurrentSection(index);
    const sectionId = sections[index];
    const element = document.getElementById(sectionId);

    // Close mobile menu first so it doesn't overlay during scroll
    if (mobileMenuOpen) setMobileMenuOpen(false);

    if (element) {
      // Measure actual navbar height
      const nav = document.querySelector('nav');
      const navHeight = nav ? nav.getBoundingClientRect().height : 64; // default h-16 = 64px

      // Small extra padding to fully reveal section title
      const extraPadding = window.innerWidth < 768 ? 24 : 40;
      const totalOffset = navHeight + extraPadding;

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setCurrentSection(0);
    setMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <div className="relative bg-black text-green-400 font-mono overflow-x-hidden">
      {/* Show loading indicator while fetching data */}
      {dataLoading && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="hacker-loader">
            <div className="hacker-ring" />
            <div className="text-green-400/90 text-sm sm:text-base tracking-wider">
              INITIALIZING<span className="hacker-caret" />
            </div>
          </div>
        </div>
      )}

      {/* Show error message if data fetch fails */}
      {dataError && (
        <div className="fixed top-4 right-4 bg-red-900 text-red-200 p-4 rounded z-50">
          {dataError}
        </div>
      )}

      {/* 3D Canvas Background */}
      <ThreeJSBackground setIsLoaded={setIsLoaded} />

      {/* Animated Grid Overlay */}
      <GridOverlay />

      {/* Navigation */}
      <Navigation 
        sections={sections}
        currentSection={currentSection}
        glitchActive={glitchActive}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero 
        isLoaded={isLoaded}
        scrollToSection={scrollToSection}
      />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills skills={skillsData} />

      {/* Experience Section */}
      <Experience experiences={experiencesData} />

      {/* Education Section */}
      <Education education={educationData} />

      {/* Certificates Section */}
      <Certificates certificates={certificatesData} />

      {/* Projects Section */}
      <Projects projects={projectsData} />

      {/* Contact Section */}
      <Contact />

      {/* Scroll to Top Button */}
      <ScrollToTop 
        showScrollTop={showScrollTop}
        scrollToTop={scrollToTop}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
