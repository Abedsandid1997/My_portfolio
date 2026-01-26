import type { ProjectData } from "./Project";

export const projects: ProjectData[] = [
  {
    title: "AI Task Manager",
    description:
      "A modern web application built with Next.js that enables intelligent chat conversations with AI-powered functions for project and task management.",
    image: "/projects/ai-task-manager.webp",
    tags: [
      "Nextjs",
      "Better Auth",
      "Typescript",
      "Prisma",
      "Zod",
      "React Hook Form",
      "Vercel AI SDK",
      "OpenAI",
      "Groq LLM",
    ],
    link: "https://ai-task-manager-seven-rho.vercel.app/",
    github: "https://github.com/Abedsandid1997/ai-task-manager",
  },
  {
    title: "Task manager",
    description:
      "Task Manager is a full-stack web application built to help companies manage projects in collaborative teams.",
    image: "/projects/task-manager.webp",
    tags: [
      "Nextjs",
      "NextAuth",
      "Typescript",
      "Prisma",
      "Zod",
      "React Hook Form",
      "Axios",
      "Radix UI",
    ],
    link: "https://task-manager-bwv7.vercel.app/",
    github: "https://github.com/Abedsandid1997/Task_manager",
  },
  {
    title: "Movies Hub",
    description:
      "A modern web application for discovering movies and TV shows, built with cutting-edge technologies. Browse, search, and explore detailed information about your favorite movies and TV series, including trailers, cast information, and similar content recommendations.",
    image: "/projects/movie-hub.webp",
    tags: [
      "React",
      "Typescript",
      "Chakra UI",
      "Zod",
      "React Query",
      "Axios",
      "React Router",
      "Zustand",
    ],
    link: "https://movies-hub-swart-beta.vercel.app/",
    github: "https://github.com/Abedsandid1997/movies-hub",
  },
  {
    title: "SSK Editor",
    description:
      "A real-time collaborative editor allowing users to create, share, and simultaneously edit text and code documents. Built with SSR principles, it utilizes WebSockets for live cursor tracking and updates, backed by a robust Express and GraphQL API.",
    image: "/projects/ssk-editor.webp",
    tags: [
      "Next.js",
      "Radix UI",
      "TypeScript",
      "Express",
      "GraphQL",
      "Socket.io",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Node.js",
    ],
    github: "https://github.com/Abedsandid1997/document-editor",
  },
  {
    title: "El-Scooter API",
    description:
      "A RESTful API for an e-scooter sharing system. It supports real-time bike tracking, user authentication, travel history, charging stations, and city management. Built with a scalable backend architecture and Dockerized for easy deployment.",
    image: "/projects/el-scooter.webp",
    tags: [
      "Node.js",
      "Express",
      "MariaDB",
      "MySQL",
      "Socket.IO",
      "JWT",
      "Docker",
      "Docker Compose",
    ],
    github: "https://github.com/Abedsandid1997/el-scooter",
  },
];
