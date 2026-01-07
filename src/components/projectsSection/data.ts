import type { ProjectData } from "./Project";

export const projects: ProjectData[] = [
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
    link: "https://task-manager-gules-psi-84.vercel.app/",
    github: "https://github.com/Abedsandid1997/Task-manager",
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
];
