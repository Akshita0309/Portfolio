// ---------------------------------------------------------------------------
// Central data file for the portfolio.
// Edit the values below to update the site — you should not need to touch
// any component files for routine content changes.
//
// Anything wrapped like "YOUR_..." or "202X" is a placeholder. Replace it
// with your real information before deploying.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Akshita Nagdali",
  initials: "AN",
  role: "Computer Science Graduate",
  headline: "Computer Science Graduate — Software Development & AI/ML",
  location: "YOUR_LOCATION",

  intro:
    "I'm a BTech Computer Science graduate specializing in Artificial Intelligence & Machine Learning, currently working as an Associate Engineer Trainee. I build full-stack applications with Java, Spring Boot and React, and I'm steadily expanding into cloud infrastructure and applied AI/ML.",

  aboutParagraphs: [
    "I graduated with a BTech in Computer Science Engineering, specializing in Artificial Intelligence & Machine Learning. That combination — solid software engineering fundamentals plus an AI/ML focus — shapes how I approach problems: I care about clean, maintainable systems as much as I care about the intelligence layered on top of them.",
    "Day to day, I work across the stack — Java and Spring Boot on the backend, React on the frontend, MySQL and PostgreSQL for persistence. I'm comfortable designing REST APIs, securing them with Spring Security and JWT, and containerizing services with Docker for deployment.",
    "Outside of project work, I'm continuously learning: deepening my backend and cloud skills, exploring large language models and AI APIs, and working through structured learning paths on platforms like Salesforce Trailhead.",
  ],

  resumeUrl: "/resume.pdf",

  email: "YOUR_EMAIL@example.com",

  social: {
    linkedin: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    github: "https://github.com/YOUR_GITHUB_USERNAME",
    trailhead: "https://trailblazer.me/id/YOUR_TRAILHEAD_USERNAME",
  },

  stats: [
    { label: "Projects built", value: "4+" },
    { label: "Certifications", value: "8+" },
    { label: "Technologies", value: "15+" },
    { label: "Learning profiles", value: "3+" },
  ],

  skills: {
    languages: [
      { name: "Java" },
      { name: "JavaScript" },
      { name: "SQL" },
    ],
    frontend: [
      { name: "React" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
    ],
    backend: [
      { name: "Spring Boot" },
      { name: "REST APIs" },
      { name: "Spring Security" },
      { name: "JWT" },
    ],
    databases: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
    ],
    tools: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Jenkins" },
      { name: "Postman" },
    ],
    cloud: [
      { name: "Microsoft Azure" },
    ],
    ai: [
      { name: "Artificial Intelligence" },
      { name: "Machine Learning" },
      { name: "LLMs" },
      { name: "AI APIs" },
    ],
  },

  experience: [
    {
      role: "Associate Engineer Trainee",
      company: "Nagarro",
      period: "202X — Present",
      description:
        "Working across software development and structured technical training, building applications with Java and Spring Boot, using Git for version control, and following established development practices as part of a collaborative engineering team focused on problem solving and code quality.",
      tags: ["Java", "Spring Boot", "Git", "Team Collaboration", "Problem Solving"],
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology — Computer Science Engineering",
      specialization: "Artificial Intelligence & Machine Learning",
      institution: "YOUR_UNIVERSITY",
      period: "202X — 202X",
      score: "CGPA: 8.98",
    },
  ],

  projects: [
    {
      name: "JustEat — Food Delivery Application",
      description:
        "A full-stack food delivery application inspired by platforms such as Just Eat, supporting separate customer and restaurant-owner roles across the ordering lifecycle.",
      technologies: [
        "React",
        "Spring Boot",
        "MySQL",
        "REST APIs",
        "JWT",
        "Spring Security",
        "Docker",
        "Azure",
        "Nginx",
      ],
      features: [
        "Customer registration and login",
        "JWT-based authentication",
        "Restaurant browsing and menu management",
        "Food ordering and order management",
        "Separate customer and restaurant-owner roles",
        "Secure REST APIs with Spring Security",
        "Database persistence with MySQL",
        "Dockerized deployment behind Nginx",
      ],
      githubUrl: "YOUR_GITHUB_URL",
      liveUrl: "YOUR_LIVE_DEMO_URL",
      featured: true,
    },
    {
      name: "AI Chatbot",
      description:
        "A conversational assistant with a React frontend and a Spring Boot backend that streams responses from an AI/LLM API in real time.",
      technologies: ["React", "Spring Boot", "AI/LLM API", "JWT", "SSE Streaming"],
      features: [
        "Real-time streaming responses via Server-Sent Events",
        "JWT-secured chat sessions",
        "Spring Boot service layer around an external LLM API",
        "React chat interface with message history",
      ],
      githubUrl: "YOUR_GITHUB_URL",
      liveUrl: "YOUR_LIVE_DEMO_URL",
      featured: false,
    },
    {
      name: "Expense Tracker",
      description:
        "A personal finance application for tracking income and expenses, with reporting, budget alerts and data export.",
      technologies: ["React", "Spring Boot", "MySQL"],
      features: [
        "Income and expense tracking",
        "Visual spending reports",
        "Configurable budget alerts",
        "CSV/PDF export of records",
      ],
      githubUrl: "YOUR_GITHUB_URL",
      liveUrl: "YOUR_LIVE_DEMO_URL",
      featured: false,
    },
    {
      name: "University Student Management System",
      description:
        "An academic management system covering students, faculty, courses, enrollment and attendance, backed by PostgreSQL.",
      technologies: ["PostgreSQL", "Java"],
      features: [
        "Student, faculty and course records",
        "Enrollment and attendance tracking",
        "Audit logging for record changes",
      ],
      githubUrl: "YOUR_GITHUB_URL",
      liveUrl: "YOUR_LIVE_DEMO_URL",
      featured: false,
    },
    {
      name: "Parking Lot Management System",
      description:
        "A Java-based object-oriented system for managing parking lot allocation, vehicles and billing.",
      technologies: ["Java", "OOP Design"],
      features: [
        "Object-oriented parking allocation model",
        "Vehicle entry and exit handling",
        "Billing calculation by duration and slot type",
      ],
      githubUrl: "YOUR_GITHUB_URL",
      liveUrl: "YOUR_LIVE_DEMO_URL",
      featured: false,
    },
  ],

  certifications: [
    {
      name: "Salesforce Agentblazer Champion",
      issuer: "Salesforce Trailhead",
      date: "YOUR_COMPLETION_DATE",
      credentialId: "YOUR_CREDENTIAL_ID",
      certificateUrl: "YOUR_CERTIFICATE_URL",
      verifyUrl: "YOUR_VERIFICATION_URL",
      description:
        "Recognized for completing multiple Salesforce learning modules across the Agentblazer track.",
    },
    {
      name: "Apex Specialist",
      issuer: "Salesforce Trailhead",
      date: "YOUR_COMPLETION_DATE",
      credentialId: "YOUR_CREDENTIAL_ID",
      certificateUrl: "YOUR_CERTIFICATE_URL",
      verifyUrl: "YOUR_VERIFICATION_URL",
    },
    {
      name: "Object Relationships Superbadge Unit",
      issuer: "Salesforce Trailhead",
      date: "YOUR_COMPLETION_DATE",
      credentialId: "YOUR_CREDENTIAL_ID",
      certificateUrl: "YOUR_CERTIFICATE_URL",
      verifyUrl: "YOUR_VERIFICATION_URL",
    },
    {
      name: "Lightning Web Component Basics",
      issuer: "Salesforce Trailhead",
      date: "YOUR_COMPLETION_DATE",
      credentialId: "YOUR_CREDENTIAL_ID",
      certificateUrl: "YOUR_CERTIFICATE_URL",
      verifyUrl: "YOUR_VERIFICATION_URL",
    },
    {
      name: "Salesforce Fundamentals",
      issuer: "Salesforce Trailhead",
      date: "YOUR_COMPLETION_DATE",
      credentialId: "YOUR_CREDENTIAL_ID",
      certificateUrl: "YOUR_CERTIFICATE_URL",
      verifyUrl: "YOUR_VERIFICATION_URL",
    },
    {
      name: "Data Management",
      issuer: "Salesforce Trailhead",
      date: "YOUR_COMPLETION_DATE",
      credentialId: "YOUR_CREDENTIAL_ID",
      certificateUrl: "YOUR_CERTIFICATE_URL",
      verifyUrl: "YOUR_VERIFICATION_URL",
    },
    {
      name: "Org Setup",
      issuer: "Salesforce Trailhead",
      date: "YOUR_COMPLETION_DATE",
      credentialId: "YOUR_CREDENTIAL_ID",
      certificateUrl: "YOUR_CERTIFICATE_URL",
      verifyUrl: "YOUR_VERIFICATION_URL",
    },
    {
      name: "Security Management",
      issuer: "Salesforce Trailhead",
      date: "YOUR_COMPLETION_DATE",
      credentialId: "YOUR_CREDENTIAL_ID",
      certificateUrl: "YOUR_CERTIFICATE_URL",
      verifyUrl: "YOUR_VERIFICATION_URL",
    },
    {
      name: "Process Automation & Logic",
      issuer: "Salesforce Trailhead",
      date: "YOUR_COMPLETION_DATE",
      credentialId: "YOUR_CREDENTIAL_ID",
      certificateUrl: "YOUR_CERTIFICATE_URL",
      verifyUrl: "YOUR_VERIFICATION_URL",
    },
  ],

  // Learning & professional profiles. Add new entries here to extend the
  // section — the Profiles component renders whatever is in this array.
  learningProfiles: [
    {
      platform: "LinkedIn",
      description: "Professional networking and career profile.",
      username: "YOUR_LINKEDIN_USERNAME",
      url: "https://linkedin.com/in/YOUR_LINKEDIN_USERNAME",
      buttonLabel: "View LinkedIn",
      achievement: null,
    },
    {
      platform: "GitHub",
      description: "Source code, projects and repositories.",
      username: "YOUR_GITHUB_USERNAME",
      url: "https://github.com/YOUR_GITHUB_USERNAME",
      buttonLabel: "View GitHub",
      achievement: null,
    },
    {
      platform: "Salesforce Trailhead",
      description: "Salesforce learning profile and badges.",
      username: "YOUR_TRAILHEAD_USERNAME",
      url: "https://trailblazer.me/id/YOUR_TRAILHEAD_USERNAME",
      buttonLabel: "View Trailhead",
      achievement: "Agentblazer Champion",
    },
    // Add more profiles the same way, for example:
    // {
    //   platform: "LeetCode",
    //   description: "Data structures and algorithm practice.",
    //   username: "YOUR_LEETCODE_USERNAME",
    //   url: "https://leetcode.com/YOUR_LEETCODE_USERNAME",
    //   buttonLabel: "View LeetCode",
    //   achievement: null,
    // },
  ],

  // Manually curated repository highlights. This is a placeholder for future
  // GitHub API integration — see src/components/Projects.jsx for notes on
  // where a live fetch would replace this data.
  repositories: [
    {
      name: "justeat-food-delivery",
      description: "Full-stack food delivery platform with role-based ordering.",
      technologies: ["React", "Spring Boot", "MySQL"],
      stars: 0,
      url: "YOUR_GITHUB_URL",
    },
  ],
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Profiles", href: "#profiles" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
