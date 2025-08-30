import React from 'react';
import { Shield, Code, Terminal, Cpu } from 'lucide-react';
import axios from 'axios';

// API Configuration
const API_BASE_URL = "http://127.0.0.1:8000/api";

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// API Fetch Functions
export const fetchProjectsData = async () => {
  try {
    const response = await apiClient.get('/projects');
    
    // Handle response structure with 'result' array
    const projects = response.data.result || response.data;
    
    // Transform API data to match expected structure
    return projects.map((project, index) => ({
      title: project.title || "Untitled Project",
      description: project.description || "No description available",
      tech: project.technologies || project.tech || [],
      github: project.github_url || project.github || "#",
      demo: project.demo_url || project.demo || "#",
      icon: getProjectIcon(index),
    }));
  } catch (error) {
    console.error("Error fetching projects:", error);
    return getFallbackProjectsData();
  }
};

export const fetchSkillsData = async () => {
  try {
    const response = await apiClient.get('/skills');
    
    // Handle response structure with 'result' array
    const skills = response.data.result || response.data;
    
    // Transform API data to match expected structure
    return skills.map((skill, index) => ({
      name: skill.name || "Unknown Skill",
      level: skill.level || skill.proficiency || 50,
      color: skill.color || getSkillColor(index),
    }));
  } catch (error) {
    console.error("Error fetching skills:", error);
    return getFallbackSkillsData();
  }
};

export const fetchExperiencesData = async () => {
  try {
    const response = await apiClient.get('/experiences');
    
    // Handle response structure with 'result' array
    const experiences = response.data.result || response.data;
    
    // Transform API data to match expected structure
    const transformedData = experiences.map((experience) => ({
      id: experience.id,
      title: experience.title || experience.position || "Unknown Position",
      company: experience.company || "Unknown Company",
      location: experience.location || "Unknown Location",
      period: experience.period || `${experience.start_date} – ${experience.end_date || 'present'}`,
      type: experience.type || experience.employment_type || "FULL-TIME",
      // Handle responsibilities - convert from string with bullet points to array
      responsibilities: experience.responsibilities 
        ? experience.responsibilities.split('\n').filter(r => r.trim()).map(r => r.replace(/^•\s*/, '').trim())
        : [],
      technologies: experience.technologies || experience.tech_stack || [],
      status: experience.status || (experience.end_date ? "completed" : "current"),
      description: experience.description || null,
    }));
    
    return transformedData;
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return getFallbackExperiencesData();
  }
};

export const fetchEducationData = async () => {
  try {
    const response = await apiClient.get('/education');
    
    // Handle response structure with 'result' array
    const education = response.data.result || response.data;
    
    // Transform API data to match expected structure
    return education.map((edu) => ({
      type: edu.type || "degree",
      title: edu.title || edu.degree || "Unknown Degree",
      institution: edu.institution || edu.school || "Unknown Institution",
      location: edu.location || "Unknown Location",
      period: edu.period || `${edu.start_date} - ${edu.end_date}`,
      description: edu.description || "No description available",
    }));
  } catch (error) {
    console.error("Error fetching education:", error);
    return getFallbackEducationData();
  }
};

export const fetchCertificatesData = async () => {
  try {
    const response = await apiClient.get('/certificates');
    
    // Handle response structure with 'result' array
    const certificates = response.data.result || response.data;
    
    // Transform API data to match expected structure
    return certificates.map((certificate) => ({
      title: certificate.title || certificate.name || "Unknown Certificate",
      code: certificate.code || certificate.credential_id || "",
      issuer: certificate.issuer || certificate.organization || "Unknown Issuer",
      date: certificate.date || certificate.issue_date || "Unknown Date",
      type: certificate.type || certificate.category || "General",
      verification_url: certificate.verification_url || certificate.url || "#",
    }));
  } catch (error) {
    console.error("Error fetching certificates:", error);
    return getFallbackCertificatesData();
  }
};

// Helper function to get project icons
const getProjectIcon = (index) => {
  const icons = [
    <Shield className="text-green-400" size={24} />,
    <Code className="text-green-400" size={24} />,
    <Terminal className="text-green-400" size={24} />,
    <Cpu className="text-green-400" size={24} />,
  ];
  return icons[index % icons.length];
};

// Helper function to get skill colors
const getSkillColor = (index) => {
  const colors = [
    "from-green-500 to-green-800",
    "from-green-400 to-gray-900",
    "from-green-600 to-black",
    "from-green-300 to-gray-800",
    "from-green-500 to-gray-900",
    "from-green-400 to-black",
    "from-green-600 to-gray-800",
    "from-green-300 to-black",
    "from-green-500 to-gray-900",
    "from-green-400 to-gray-800",
  ];
  return colors[index % colors.length];
};

// Fallback data functions
const getFallbackSkillsData = () => [
  { name: "PHP/Laravel", level: 90, color: "from-green-500 to-green-800" },
  { name: "JavaScript/TypeScript", level: 95, color: "from-green-400 to-gray-900" },
  { name: "React.js/Angular.js", level: 90, color: "from-green-600 to-black" },
  { name: "MongoDB/MySQL", level: 90, color: "from-green-300 to-gray-800" },
  { name: "RESTful APIs", level: 91, color: "from-green-500 to-gray-900" },
  { name: "Python/Machine Learning", level: 85, color: "from-green-400 to-black" },
  { name: "Natural Language Processing", level: 80, color: "from-green-600 to-gray-800" },
  { name: "Docker/Git", level: 87, color: "from-green-300 to-black" },
  { name: "HTML5/CSS3/Bootstrap", level: 95, color: "from-green-500 to-gray-900" },
  { name: "Database Design", level: 88, color: "from-green-400 to-gray-800" },
];

const getFallbackExperiencesData = () => [
  {
    id: 1,
    title: "Backend Engineer",
    company: "G",
    location: "Riyadh, Saudi Arabia",
    period: "02/2025 – present ",
    type: "FULL-TIME",
    responsibilities: [
      "Designed and maintained a scalable microservices architecture with dynamic fee models, BNPL integrations, and modular payment management",
      "Built optimized MongoDB aggregation pipelines and refactored API requests, reducing server load by 70%",
      "Developed secure RESTful endpoints with validation, access control, and consistent API response handling",
      "Engineered advanced pagination algorithms, improving performance by 15% and enhancing user-facing queries",
      "Enabling seamless management of Buy Now, Pay Later (BNPL) settings through secure API interactions",
      "Engineered backend logic for peak hour pricing, supporting time-based dynamic fee models configurable per service",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "MongoDB",
      "MySQL",
      "RESTful APIs",
      "Microservices",
      "Docker",
      "Git",
    ],
    status: "current",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "Waseel",
    location: "Riyadh, Saudi Arabia",
    period: "07/2024 – 09/2024",
    type: "COOP TRAINING",
    responsibilities: [
      "Collaborating with the Dawy team to develop a cutting-edge appointment booking application for patients",
      "Designing and developing responsive, user-friendly web pages",
      "Using React framework and TypeScript as the primary programming language",
      "Fetching data from APIs using Axios",
      "Managing state with Redux and handling asynchronous functions with Redux Saga",
      "Utilizing Git for version control, deployment, and maintaining a clean codebase",
      "Writing efficient SQL queries for database interactions and optimizing application performance",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Redux",
      "Redux-Saga",
      "Axios",
      "SQL",
      "Git",
    ],
    status: "completed",
  },
];

const getFallbackEducationData = () => [
  {
    type: "degree",
    title: "Bachelor's degree in Computer Science",
    institution: "Imam Abdulrahman Bin Faisal University",
    location: "Dammam, Saudi Arabia",
    period: "2019-2024",
    description: "Specialized with a focus on web development, software engineering, and database systems",
  },
];

const getFallbackCertificatesData = () => [
  {
    title: "JSA – Certified Associate JavaScript Programmer",
    code: "[JSA-41-01]",
    issuer: "JavaScript Institute",
    date: "07-2023",
    type: "Programming",
    credentialUrl: "https://www.credly.com/badges/a293ccec-d630-4c1e-9a0a-2c0d3c35aa33/linked_in_profile",
  },
  {
    title: "eJPT - eLearnSecurity Junior Penetration Tester",
    code: "INE - eJPT",
    issuer: "INE Security",
    date: "07/2025",
    type: "Cybersecurity",
    credentialUrl: "https://certs.ine.com/31f2e165-44bf-446c-8ec0-c7c20b7d3d42#acc.yurqzgtA",
  },
  {
    title: "eWPT - eLearnSecurity Web app Penetration Tester",
    code: "INE - eWPT",
    issuer: "INE Security",
    date: "08/2025",
    type: "Cybersecurity",
    credentialUrl: "https://certs.ine.com/03cf66cd-9d1e-43e5-b208-de432e2fb90c#acc.jRQDPS0z",
  },
];

// Fallback data (original static data)
const getFallbackProjectsData = () => [
  {
    title: "Analyzing Cybersecurity Risks through Natural Language Processing (NLP)",
    description: "Graduation project: An automated risk assessment system that leverages NLP techniques to analyze reports that provides bug hunters with immediate severity suggestions before report submission",
    tech: [
      "Python",
      "Natural Language Processing",
      "Machine Learning",
      "TensorFlow",
      "Scikit-learn",
      "NLTK",
      "Risk Assessment",
      "Text Analysis",
    ],
    github: "#",
    demo: "#",
    icon: <Shield className="text-green-400" size={24} />,
  },
  {
    title: "Electro Store",
    description: "A comprehensive e-commerce website for electronic devices with product catalog, shopping cart, user authentication, and order management system",
    tech: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap",
      "E-commerce",
    ],
    github: "#",
    demo: "#",
    icon: <Code className="text-green-400" size={24} />,
  },
  {
    title: "Blogs Platform",
    description: "Dynamic blog platform with full CRUD functionality for post creation, editing, and deletion. Features user authentication, content management, and responsive design",
    tech: [
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "CRUD Operations",
    ],
    github: "#",
    demo: "#",
    icon: <Terminal className="text-green-400" size={24} />,
  },
  {
    title: "Hospital Management System",
    description: "Implemented a scalable, web-based Hospital Management System to streamline appointment scheduling and enhance operational efficiency with patient records management",
    tech: [
      "PHP",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Database Design",
      "Healthcare IT",
    ],
    github: "#",
    demo: "#",
    icon: <Cpu className="text-green-400" size={24} />,
  },
];

// Additional utility functions for API management
export const checkAPIHealth = async () => {
  try {
    const response = await apiClient.get('/health');
    return { status: 'healthy', data: response.data };
  } catch (error) {
    return { status: 'unhealthy', error: error.message };
  }
};

export const fetchAllData = async () => {
  try {
    const [projects, skills, experiences, education, certificates] = await Promise.allSettled([
      fetchProjectsData(),
      fetchSkillsData(), 
      fetchExperiencesData(),
      fetchEducationData(),
      fetchCertificatesData()
    ]);

    return {
      projects: projects.status === 'fulfilled' ? projects.value : getFallbackProjectsData(),
      skills: skills.status === 'fulfilled' ? skills.value : getFallbackSkillsData(),
      experiences: experiences.status === 'fulfilled' ? experiences.value : getFallbackExperiencesData(),
      education: education.status === 'fulfilled' ? education.value : getFallbackEducationData(),
      certificates: certificates.status === 'fulfilled' ? certificates.value : getFallbackCertificatesData()
    };
  } catch (error) {
    console.error('Error fetching all data:', error);
    return {
      projects: getFallbackProjectsData(),
      skills: getFallbackSkillsData(),
      experiences: getFallbackExperiencesData(),
      education: getFallbackEducationData(),
      certificates: getFallbackCertificatesData()
    };
  }
};
