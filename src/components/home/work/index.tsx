"use client";
import Project from "./project";
import { ProjectType } from "@/types/home";

interface IInformation {
  projects: ProjectType[];
}

const HomeMyWork: React.FC<IInformation> = ({ projects }) => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="mb-20 text-center font-bold md:text-5xl">My Projects</h1>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <Project key={index} detail={project.detail} number={index + 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMyWork;
