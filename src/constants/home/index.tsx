import catManga from "@/assets/components/projects/cat-manga.png";
import catMangaDark from "@/assets/components/projects/cat-manga-dark.png";
import { ProjectType } from "@/types/home";

export const techSkills = [
  "TypeScript",
  "JavaScript",
  "ReactJs",
  "NodeJs",
  "Webflow",
  "Ghost CMS",
];

export const projects: ProjectType[] = [
  {
    detail: {
      title: "Cat Manga",
      description:
        "This project aims to build a website for users who wish to read manga or comics online.",
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
