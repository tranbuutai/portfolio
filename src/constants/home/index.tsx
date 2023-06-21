import catManga from "@/assets/components/projects/cat-manga.png";
import catMangaDark from "@/assets/components/projects/cat-manga-dark.png";
import { ProjectType } from "@/types/home";

export const techSkills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Nodejs",
  "Webflow",
  "Ghost CMS",
];

export const projects: ProjectType[] = [
  {
    detail: {
      title: "Cat Manga",
      description: "text",
      image: catManga.src,
      anotherImage: catMangaDark.src,
      link: "https://comic-web-fe.vercel.app/",
    },
  },
  {
    detail: {
      title: "Cat Manga",
      description: "text",
      image: catManga.src,
      anotherImage: catMangaDark.src,
      link: "https://comic-web-fe.vercel.app/",
    },
  },
];
