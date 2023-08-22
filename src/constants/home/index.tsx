import { ExperienceType, ProjectType } from "@/types/home";

import catManga from "@/assets/components/pages/home/projects/cat-manga.png";
import catMangaDark from "@/assets/components/pages/home/projects/cat-manga-dark.png";
import CTUT from "@/assets/components/pages/home/experience/dai-hoc-ky-thuat-cong-nghe-can-tho.jpg";
import Biwoco from "@/assets/components/pages/home/experience/Logo-Biwoco.png";
import CredShare from "@/assets/components/pages/home/experience/Logo-CredShare.jpg";
import VoltaRocks from "@/assets/components/pages/home/experience/Logo-VoltaRocks.webp";
import Hahalolo from "@/assets/components/pages/home/experience/Logo-Hahalolo.png";
import Evyan from "@/assets/components/pages/home/experience/Logo-Evyan.jpg";

export const techSkills = [
  "TypeScript",
  "JavaScript",
  "ReactJs",
  "NextJs",
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
      techStack: "TypeScript, NextJs, TailwindCSS, Vercel, NestJs, FireStore",
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

export const experiences: ExperienceType[] = [
  {
    name: "Can Tho University of Technology",
    time: "2018-2022",
    title: "Computer Software Engineering",
    image: CTUT.src,
  },
  {
    name: "Hahalolo",
    time: "Jul 2021 - Sep 2021",
    title: "Backend Developer Intern",
    image: Hahalolo.src,
  },
  {
    name: "EVYAN",
    time: "Feb 2022 - Mar 2022",
    title: "Software Engineer",
    image: Evyan.src,
  },
  {
    name: "Biwoco",
    time: "Mar 2022 - Jul 2023",
    title: "Software Engineer",
    image: Biwoco.src,
  },
  {
    name: "CredShare",
    time: "Apr 2022 - Jan 2023",
    title: "Software Engineer",
    image: CredShare.src,
  },
  {
    name: "VoltaRocks",
    time: "Jan 2023 - Jul 2023",
    title: "Software Engineer",
    image: VoltaRocks.src,
  },
];
