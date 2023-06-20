import catManga from "@/assets/components/projects/cat-manga.png";
import { ProjectProps } from "@/components/home/work/project";

export const techSkills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Nodejs",
  "Webflow",
  "Ghost CMS",
];

export const projects: ProjectProps[] = [
  {
    detail: {
      title: "Cat Manga",
      description: "text",
      image: catManga.src,
      link: "https://comic-web-fe.vercel.app/",
    },
  },
];
