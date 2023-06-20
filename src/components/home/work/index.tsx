"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";

import Project, { ProjectProps } from "./project";

interface IInformation {
  projects: ProjectProps[];
}

const HomeMyWork: React.FC<IInformation> = ({ projects }) => {
  console.log(projects);
  return (
    <div className="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 text-4xl font-bold">My Projects</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Project key={index} detail={project.detail} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMyWork;
