import type { ExperienceData } from "./Experience";

export const experiences: ExperienceData[] = [
  {
    period: "2025 - Present",
    role: "Full Stack AI Engineer",
    where: "Personal Portfolio Projects",
    description:
      "Architected and built SaaS-like applications including a Chatbot and Review Summarizer. Integrated OpenAI's API with a custom backend to handle natural language processing and real-time responses.",
    technologies: [
      "Express",
      "React",
      "OpenAI API",
      "TypeScript",
      "Tailwind CSS",
    ],
    current: false,
  },
  {
    period: "Oct 2025 - Dec 2025",
    role: "Frontend Developer",
    where: "Personal Portfolio Projects",
    description:
      "Built a dynamic movie discovery app consuming the TMDB API. Focused on advanced React patterns, component reusability, and creating a responsive, cinematic user interface.",
    technologies: ["React", "REST API", "Framer Motion", "CSS Modules", "Vite"],
    current: false,
  },

  {
    period: "Aug 2025 - Sep 2025",
    role: "Full Stack Developer",
    where: "Personal Portfolio Projects",
    description:
      "Developed a comprehensive productivity tool using Next.js. Implemented server-side rendering, full CRUD operations, and secure database connections to manage user tasks efficiently.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Server Actions", "Auth"],
    current: false,
  },
  {
    period: "Jan 2025 - Jun 2025",
    role: "Full Stack Developer (Client Project)",
    where: "NKT (University Group Project)",
    description:
      "Collaborated in an agile team to develop a custom AI chatbot for NKT (NKT Cables). Focused on bridging the gap between client requirements and technical implementation to automate user inquiries.",
    technologies: [
      "React/Next.js",
      "AI Integration",
      "Agile/Scrum",
      "Git/GitHub",
      "Teamwork",
    ],
    current: false,
  },
  {
    period: "Aug 2023 - Present",
    role: "University Student (Web Programming)",
    where: "Blekinge Institute of Technology (BTH)",
    description:
      "Studying full-stack development with a focus on modern web technologies, software architecture, and agile methodologies. Expected graduation: June 2026.",
    technologies: ["Computer Science", "React", "Node.js", "Algorithms", "Git"],
    current: true,
  },
];
