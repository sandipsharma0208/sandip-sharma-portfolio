export const profile = {
  name: "Sandip Sharma",
  initials: "SS",
  title: "React Developer | React Native Developer | Frontend Engineer",
  location: "Mumbai, Maharashtra, India",
  education: "B.Sc. Information Technology",
  github: "https://github.com/sandipsharma0208",
  avatar: "/sandip-profile-v2.png",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || null,
  email: "sandipsharma0206@gmail.com",
} as const;

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const experience = [
  {
    company: "IDSSPL Technologies Pvt. Ltd.",
    role: "React Developer",
    dates: "June 2026 – November 2026",
    points: [
      "Developed Core Banking System and Internet Banking frontend modules.",
      "Built reusable components, forms, tables and validation systems.",
      "Integrated REST APIs using React and TypeScript.",
      "Implemented Redux-based state management.",
    ],
  },
  {
    company: "Websites.co.in",
    role: "React Native Developer",
    dates: "January 2026 – June 2026",
    points: [
      "Developed the iOS application from scratch using the existing Android architecture.",
      "Achieved feature parity between Android and iOS.",
      "Implemented navigation, deep linking and API integration.",
      "Supported the production App Store release.",
    ],
  },
  {
    company: "Fyntune Solution",
    role: "Frontend Engineer",
    dates: "January 2024 – May 2025",
    points: [
      "Developed features for an InsurTech Employee Benefits platform.",
      "Worked on React Native Android and iOS applications.",
      "Built dashboards and reusable components.",
      "Integrated APIs and push notifications.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Expo", "React Native CLI"],
  },
  {
    title: "State Management",
    skills: ["Redux Toolkit", "Redux Saga", "Redux Thunk", "Context API"],
  },
  {
    title: "UI & Styling",
    skills: ["Tailwind CSS", "Material UI", "Chakra UI", "Styled Components"],
  },
  {
    title: "Tools & Integration",
    skills: [
      "REST APIs",
      "TanStack Query",
      "React Hook Form",
      "Postman",
      "Git",
      "GitHub",
      "Firebase",
    ],
  },
  { title: "Database", skills: ["MySQL", "MongoDB"] },
] as const;

export const projects = [
  {
    number: "01",
    title: "Talk to Buddy",
    category: "Full-stack project",
    description: "A MERN-stack application with login and sign-up screens.",
    preview: "buddy",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    live: "https://talk-to-buddy.onrender.com",
    github: "https://github.com/sandipsharma0208/talk_buddy",
  },
  {
    number: "02",
    title: "Course Management",
    category: "Web application",
    description:
      "A course management application with a live dashboard interface.",
    preview: "course",
    tags: [],
    live: "https://course-management-olive.vercel.app",
    github: "https://github.com/sandipsharma0208/Course-Management",
  },
  {
    number: "03",
    title: "JK Martial Arts Academy",
    category: "Academy website",
    description:
      "A karate academy website featuring training programs, class categories, member testimonials, pricing plans, and a contact form.",
    preview: "martial-arts",
    tags: ["Vite", "React"],
    live: "https://martial-arts-academy.vercel.app/",
    github: "https://github.com/sandipsharma0208/martial-arts-academy",
  },
  {
    number: "04",
    title: "Fixora",
    category: "Mobile application",
    description: "A mobile application built with Expo.",
    preview: "fixora",
    tags: ["Expo"],
    live: null,
    github: "https://github.com/sandipsharma0208/fixora",
  },
] as const;

export const services = [
  "React.js Web Development",
  "Next.js Website Development",
  "React Native Mobile Applications",
  "Responsive UI Development",
  "REST API Integration",
  "Frontend Performance Optimization",
] as const;
