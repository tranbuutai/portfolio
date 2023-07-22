import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";
import { DetailProjectType } from "@/types/home";
import classNames from "classnames";
interface ProjectProps {
  detail: DetailProjectType;
  number: number;
}

const Project: React.FC<ProjectProps> = ({ detail, number }) => {
  const { title, description, image, anotherImage, link } = detail;
  const isViewed = useRef(false);
  const projectRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const hoverImageRef = useRef<HTMLImageElement>(null);

  const projectWrapperClassName = classNames(
    "flex w-full justify-between gap-4 opacity-0",
    { "flex-row-reverse": (number + 1) % 2 !== 0 },
  );

  useEffect(() => {
    if (!projectRef.current) return;

    const animateOnIntersection = ([entry]: IntersectionObserverEntry[]) => {
      if (isViewed.current) return;
      if (entry.isIntersecting) {
        gsap.fromTo(
          projectRef.current,
          {
            autoAlpha: 0,
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            opacity: 100,
            duration: 0.5,
            delay: 0.1,
            ease: "power3.inOut",
          },
        );
        isViewed.current = true;
      }
    };

    const observer = new IntersectionObserver(animateOnIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (projectRef.current) observer.observe(projectRef.current);

    gsap.set(hoverImageRef.current, { autoAlpha: 0, blur: 20 });

    return () => {
      if (projectRef.current) observer.unobserve(projectRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(hoverImageRef.current, {
      autoAlpha: 1,
      opacity: 100,
      duration: 0.3,
      filter: "blur(0)",
      ease: "power2.inOut",
    });
    gsap.to(imageRef.current, {
      autoAlpha: 0,
      filter: "blur(2px)",
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(hoverImageRef.current, {
      autoAlpha: 0,
      filter: "blur(2px)",
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
    gsap.to(imageRef.current, {
      autoAlpha: 1,
      filter: "blur(0)",
      opacity: 100,
      duration: 0.3,
      ease: "power2.inOut",
    });
  };

  return (
    <div ref={projectRef} className={projectWrapperClassName}>
      <Link href={link} className="w-1/2 ">
        <div
          className="relative transform cursor-pointer overflow-hidden rounded shadow-lg transition-all duration-300 hover:scale-105"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={image}
            alt={title}
            width={800}
            height={800}
            ref={imageRef}
            loading="eager"
          />
          <Image
            src={anotherImage as string}
            alt={title}
            width={800}
            height={800}
            ref={hoverImageRef}
            loading="eager"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      </Link>
      <div className="w-2/5 ">
        <div className="py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base ">{description}</p>
        </div>
        <Button>
          <Link href={link} className="">
            View Project
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Project;
