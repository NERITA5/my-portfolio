// Single source of truth for site content.
// Edit this file to update names, links, project details, credentials, etc.
// Anything wrapped in [ADD ...] is a placeholder, replace it before publishing
// if you have the real information. Nothing here is invented.

export const profile = {
  name: "Ngwinkem Ketty Nerita",
  role: "Software Developer · Full-Stack Developer · QA & Software Testing",
  location: "Edmonton, Alberta, Canada",
  email: "kettynerita@icloud.com",
  github: "https://github.com/NERITA5",
  linkedin: "https://www.linkedin.com/in/ngwinkem-ketty-nerita-73417b367",
  resumeDevPath: "/resume-developer.pdf",
  resumeQaPath: "/resume-qa.pdf",
  image: "/images/profile/headshot.jpeg",
};

export const heroIntro =
  "Computer Engineering graduate with practical experience building full-stack applications and testing software through manual and automated QA. I build applications end to end, then step back and test them with the same attention to detail: checking functionality, data integrity, and access control, then automating the checks that matter most.";

export const aboutText = [
  "I studied Computer Engineering at the University of Buea, where I learned how software systems are designed, built, and evaluated. That foundation led me into full-stack development, building applications with Next.js, TypeScript, and PostgreSQL, and from there into something I didn't expect to care about as much as I do now: software quality.",
  "Building an application taught me how things are supposed to work. Testing one taught me how they actually break. Once I started writing structured test cases and automating them with Selenium and Java, I started reading my own code differently, thinking about edge cases, invalid input, and access control before a user or a tester finds them for me.",
  "Development and QA aren't separate interests for me. They're two views of the same system. I build. I test. I improve. That loop is what I bring to a team: the ability to move between writing a feature and verifying it, and to fold that verification into CI/CD so it happens automatically, every time.",
];

// RentFlow is the central case study: development and QA as two workstreams

export const rentflow = {
  name: "RentFlow",
  subtitle: "Full-Stack Rental & Property Management Platform",
  description:
    "RentFlow is a full-stack rental and property management application built to handle the day-to-day operations of managing rental properties, from listing units to tracking leases, payments, and maintenance. It's the central case study in this portfolio because it's a single application with two connected workstreams: I built it, and I independently tested and automated it.",
  liveUrl: "https://rentflow-xnvf.vercel.app/",
  devRepoUrl: "https://github.com/NERITA5",
  devRepoLabel: "View Development Repository",
  qaRepoUrl: "https://github.com/NERITA5/rentflow-qa",
  qaRepoLabel: "View QA Repository",
  image: "/images/projects/rentflow/cover.jpeg",
  devTech: ["Next.js", "Next.js App Router", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
  applicationAreas: [
    "Users",
    "Properties",
    "Units",
    "Tenants",
    "Leases",
    "Payments",
    "Maintenance requests",
    "Maintenance comments",
    "Disputes",
    "Notifications",
    "Login attempts",
  ],
  buildFlow: [
    { stage: "Build", items: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"] },
    { stage: "Test", items: ["Manual Testing", "API Testing", "Database Testing", "Functional Testing", "Regression Testing"] },
    { stage: "Automate", items: ["Selenium", "Java"] },
    { stage: "Integrate", items: ["CI/CD"] },
    { stage: "Quality", items: ["Reliable Software"] },
  ],
  qaAreas: [
    "Requirements analysis",
    "Test planning",
    "Test scenarios & test cases",
    "Functional testing",
    "Negative & boundary testing",
    "Regression testing",
    "API testing",
    "Database testing",
    "Authentication testing",
    "Authorization testing",
    "Defect reporting",
    "Test automation (Selenium + Java)",
    "CI/CD integration",
  ],
  automationNote:
    "Automation covers the regression-prone paths in RentFlow, the flows that needed to be re-checked every time the application changed. Selenium scripts, written in Java, drive the application the way a user would: logging in, moving through core flows, and confirming the result, so regressions surface automatically instead of being caught by hand each time.",
  cicdNote:
    "Automated tests are wired into CI/CD so they run as part of the workflow rather than only on demand, catching regressions closer to when they're introduced.",
};

// Featured projects

export type ProjectCategory = "full-stack" | "frontend" | "backend" | "qa" | "blockchain" | "academic";

export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  categories: ProjectCategory[];
  tier: 1 | 2 | 3;
  liveUrl?: string;
  repoUrl?: string;
  repoStatus?: "public" | "private" | "academic";
  keyFeatures?: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "rentflow",
    name: "RentFlow",
    subtitle: "Full-Stack Rental & Property Management Platform",
    description: rentflow.description,
    tech: rentflow.devTech,
    categories: ["full-stack", "qa"],
    tier: 1,
    liveUrl: rentflow.liveUrl,
    repoUrl: rentflow.devRepoUrl,
    repoStatus: "public",
    keyFeatures: rentflow.applicationAreas,
  },
  {
    slug: "id-finder",
    name: "ID Finder",
    subtitle: "Lost & Found Identification Platform",
    description:
      "A platform designed to help people who have lost identification connect with people who may have found it. Users can report a lost ID or list a found one, making it easier to reconnect documents with their owners.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    categories: ["full-stack", "frontend", "backend"],
    tier: 2,
    liveUrl: "https://id-finder-ten.vercel.app/",
    repoUrl: "https://github.com/NERITA5",
    repoStatus: "public",
    image: "/images/projects/idfinder/cover.jpeg",
  },
  {
    slug: "certiverify",
    name: "CertiVERIFY",
    subtitle: "Blockchain-Based Certificate Verification System",
    description:
      "A decentralized academic certificate verification and management system built on the Ethereum Sepolia blockchain. Universities issue and revoke certificates on chain, and employers and the public verify them through a QR-based verification portal without needing a wallet.",
    tech: ["Solidity", "Ethereum (Sepolia)", "Next.js", "IPFS", "PostgreSQL"],
    categories: ["full-stack", "blockchain"],
    tier: 2,
    liveUrl: "https://certificate-verification-system-eta.vercel.app/",
    repoUrl: "https://github.com/NERITA5",
    repoStatus: "public",
    keyFeatures: [
      "Wallet-authenticated issuance (MetaMask) for university admins",
      "Certificate records anchored on the Ethereum Sepolia blockchain",
      "Certificate documents pinned to IPFS, referenced by CID",
      "Public, wallet-free QR-based verification for employers and students",
    ],
    image: "/images/projects/certiverify/cover.jpeg",
  },
  {
    slug: "rsvp-event-management",
    name: "RSVP Event Management System",
    subtitle: "Internship Project, LoopTechnology",
    description:
      "An event management and RSVP system built during a software development internship at LoopTechnology. Developed as a company project, so the source code isn't publicly available.",
    tech: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    categories: ["full-stack", "backend"],
    tier: 2,
    repoStatus: "private",
    image: "/images/projects/rsvp/cover.jpeg",
  },
];

export const otherProjects: Project[] = [
  {
    slug: "balm-of-gilead",
    name: "Balm of Gilead Institute",
    subtitle: "School Website",
    description:
      "A public website built for Balm of Gilead Higher Institute of Biomedical Science and Technology.",
    tech: ["Next.js"],
    categories: ["frontend"],
    tier: 3,
    liveUrl: "https://balmofgileadinstitute.com",
    image: "/images/projects/other/balm-of-gilead.jpeg",
  },
  {
    slug: "med-clarity",
    name: "Med Clarity",
    subtitle: "Web Application",
    description: "A health assistance web application deployed at med-clarity.vercel.app.",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Groq AI"],
    categories: ["full-stack", "frontend"],
    tier: 3,
    liveUrl: "https://med-clarity.vercel.app",
    image: "/images/projects/other/med-clarity.jpeg",
  },
  {
    slug: "weather-app",
    name: "Weather App",
    subtitle: "Academic Project",
    description:
      "A weather application built with React and JavaScript, integrating a weather API for real-time forecasts. Built as a school project, so the source code isn't publicly available.",
    tech: ["React", "JavaScript", "API Integration"],
    categories: ["frontend", "academic"],
    tier: 3,
    repoStatus: "academic",
    image: "/images/projects/other/weather-app.jpeg",
  },
  {
    slug: "car-diagnostic-app",
    name: "Car Diagnostic App",
    subtitle: "Academic Project",
    description:
      "A mobile diagnostic application built with Flutter and Dart. Built as a school project, so the source code isn't publicly available.",
    tech: ["Flutter", "Dart"],
    categories: ["academic"],
    tier: 3,
    repoStatus: "academic",
    image: "/images/projects/other/car-diagnostic-app.jpeg",
  },
];

// QA and testing

export const qaCategories = [
  { title: "Manual Testing", items: ["Functional testing", "Regression testing", "Exploratory testing", "Negative testing", "Boundary testing", "Test scenarios & test cases", "Test execution", "Defect reporting"] },
  { title: "API Testing", items: ["API validation", "Request/response testing", "Status code validation", "Negative cases"] },
  { title: "Database Testing", items: ["Data validation", "Database consistency", "Backend data verification"] },
  { title: "Authentication & Authorization", items: ["Login testing", "Authentication testing", "Authorization testing", "Access control", "Invalid credentials", "Protected routes"] },
  { title: "Automation", items: ["Selenium", "Java test automation"] },
  { title: "CI/CD", items: ["Automated testing integrated into CI/CD workflow"] },
];

// Experience

export const experience = [
  {
    company: "LoopTechnology",
    role: "Software Development Intern",
    period: "January 2025 to March 2026",
    tech: ["Next.js", "NestJS", "TypeScript", "Prisma", "PostgreSQL"],
    points: [
      "Contributed to full-stack feature development using Next.js on the frontend and NestJS on the backend.",
      "Worked with Prisma and PostgreSQL to design and query the application's data layer.",
      "Built the RSVP Event Management System as a core project during the internship, handling both frontend and backend implementation.",
    ],
  },
];

// Education

export const education = {
  school: "University of Buea",
  degree: "Bachelor of Engineering (B.Eng.) in Computer Engineering",
  period: "2022 to 2026",
  gpa: "3.55",
  languages: ["English", "French"],
  dissertation: {
    title: "CertiVERIFY: Decentralized Academic Certificate Verification System",
    supervisor: "Mr. Forcha Glen",
    year: "2025/2026",
  },
};

export const galleryImages = [
  { id: "defense-1", caption: "Final defense, Defending my final year project" },
  { id: "defense-2", caption: "Project defense, A Moment with the Jury" },
];

// Skills

export const skillGroups = [
  { title: "Software Development", skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML", "CSS"] },
  { title: "Frontend", skills: ["React", "Next.js", "Tailwind CSS"] },
  { title: "Backend", skills: ["Node.js", "NestJS", "REST APIs"] },
  { title: "Databases", skills: ["PostgreSQL", "Prisma"] },
  { title: "QA / Testing", skills: ["Manual Testing", "Functional Testing", "Regression Testing", "API Testing", "Database Testing", "Defect Reporting", "Selenium", "Java Test Automation"] },
  { title: "DevOps / CI/CD", skills: ["Git", "GitHub", "CI/CD", "Automated Testing Pipelines"] },
  { title: "Blockchain", skills: ["Solidity", "Ethereum", "Sepolia", "IPFS"] },
];

// Credentials
// Each credential links out when clicked: `url` (an external link, e.g. an
// issuer's own certificate verification page) takes priority when present;
// otherwise it links to a local PDF at /certificates/{slug}.pdf.

export interface Credential {
  issuer: string;
  title: string;
  slug: string;
  url?: string;
}

export const credentials: Credential[] = [
  { issuer: "TestMu AI", title: "Manual Testing Certification", slug: "testmu-manual-testing" },
  { issuer: "TestMu AI", title: "Automation Testing Certification", slug: "testmu-automation-testing" },
  { issuer: "SmartBear", title: "API Test Engineer Expert", slug: "smartbear-api-test-engineer" },
  {
    issuer: "TestDome",
    title: "Software Quality Assurance",
    slug: "testdome-software-qa",
    url: "https://www.testdome.com/certificates/f8781912bc884d1d99181c268a1d1f25",
  },
  { issuer: "TestDome", title: "Web Testing", slug: "testdome-web-testing" },
  { issuer: "TestMu AI", title: "Selenium Java 101", slug: "testmu-selenium-java-101" },
  { issuer: "SkillCertify", title: "JavaScript Professional", slug: "skillcertify-javascript-professional" },
  { issuer: "Forage", title: "Blackbird Software Engineering Job Simulation", slug: "forage-blackbird-job-simulation" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#qa", label: "QA & Testing" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
];