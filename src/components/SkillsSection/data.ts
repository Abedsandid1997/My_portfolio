import { FaHtml5, FaCss3, FaDocker, FaGithub } from "react-icons/fa";
import { LuWorkflow } from "react-icons/lu";
import { SiAnsible, SiChai, SiChakraui, SiCypress, SiExpress, SiGit, SiGithubactions, SiGraphql, SiJavascript, SiMocha, SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenai, SiPostgresql, SiPostman, SiPrisma, SiRadixui, SiReact, SiTailwindcss, SiTypescript, SiVercel, SiZod } from "react-icons/si";
import type { SkillCategory } from "./Skill";
import { VscTerminal } from "react-icons/vsc";

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Ecosystem",
    description:
      "Building responsive, accessible, and dynamic user interfaces.",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Chakra UI", icon: SiChakraui },
      { name: "Radix UI", icon: SiRadixui },
      { name: "Shadcn UI", icon: SiRadixui },
      { name: "Zustand", icon: LuWorkflow },
      { name: "React Hook Form", icon: FaHtml5 },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3 },
    ],
  },
  {
    title: "Backend & Architecture",
    description: "Robust server-side logic, APIs, and database management.",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Prisma", icon: SiPrisma },
      { name: "NextAuth", icon: VscTerminal },
      { name: "REST API", icon: VscTerminal },
      { name: "GraphQL", icon: SiGraphql },
      { name: "Zod", icon: SiZod },
    ],
  },
  {
    title: "DevOps, AI & Testing",
    description: "Optimizing workflows, deployment, and AI integration.",
    skills: [
      { name: "OpenAI API", icon: SiOpenai },
      { name: "Docker", icon: FaDocker },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: FaGithub },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "Ansible", icon: SiAnsible },
      { name: "Mocha", icon: SiMocha },
      { name: "Chai", icon: SiChai },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
      { name: "Cypress", icon: SiCypress },
    ],
  },
];
