import React from 'react';
import { Shield, Code, Terminal, Cpu } from 'lucide-react';

export const projectsData = [
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

export const skillsData = [
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

export const experiencesData = [
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

export const educationData = [
  {
    type: "degree",
    title: "Bachelor's degree in Computer Science",
    institution: "Imam Abdulrahman Bin Faisal University",
    location: "Dammam, Saudi Arabia",
    period: "2019-2024",
    description: "Specialized with a focus on web development, software engineering, and database systems",
  },
];

export const certificatesData = [
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
