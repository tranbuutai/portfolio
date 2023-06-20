import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export interface ProjectProps {
  detail: {
    title: string;
    description: string;
    image: any;
    link: any;
  };
}

const Project: React.FC<ProjectProps> = ({ detail }) => {
  const { title, description, image, link } = detail;
  const projectRef = useRef(null);

  useEffect(() => {
    // gsap.from(projectRef.current, {
    //   autoAlpha: 0,
    //   scale: 0.8,
    //   y: 50,
    //   delay: 0.2,
    //   ease: "power3.out",
    // });
  }, []);

  return (
    <div
      ref={projectRef}
      className="transform overflow-hidden rounded shadow-lg transition-all hover:scale-105"
    >
      <img src={image} alt={title} className="w-full" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="px-6 pb-2 pt-4">
        <Link
          href={link}
          className="mb-2 mr-2 inline-block rounded-full bg-blue-500 px-3 py-1 text-sm font-semibold text-white"
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default Project;
