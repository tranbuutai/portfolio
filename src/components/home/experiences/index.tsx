"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ExperienceType } from "@/types/home";
import classNames from "classnames";

gsap.registerPlugin(ScrollTrigger);

interface HomeExperienceProps {
  experiences: ExperienceType[];
}

const HomeExperience: React.FC<HomeExperienceProps> = ({ experiences }) => {
  const { length } = experiences;

  let words: any = Array.from({ length: length * 3 }, () => useRef(null));
  let imageCovers: any = Array.from({ length: length }, () => useRef(null));

  useEffect(() => {
    imageCovers.forEach((imageCover: gsap.TweenTarget) => {
      let ctx = gsap.context(() => {
        gsap.to(imageCover, {
          scrollTrigger: {
            trigger: imageCover as gsap.DOMTarget,
            start: "top bottom",
            end: "35% 20%",
            scrub: 2,
          },
          left: "400px",
        });
      });

      return () => ctx.revert(); // <-- CLEANUP!
    });
  }, []);

  useEffect(() => {
    imageCovers.forEach((_: gsap.TweenTarget, index: number) => {
      const ctx = gsap.context(() => {
        staggerText(index);
      });

      return () => ctx.revert(); // <-- CLEANUP!
    });
  }, []);

  const staggerText = (index: number) => {
    const wordsForIndex = words.slice(index * 3, index * 3 + 3);

    gsap.from(wordsForIndex, {
      scrollTrigger: `.experience-content-wrapper-${index}`,
      opacity: 0,
      duration: 0.8,
      y: 50,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: { amount: 0.2 },
    });
  };

  const ExperienceImage = (image: string, index: number) => {
    const isOddIndex = (index + 1) % 2 !== 0;

    const imageContainerClasses = classNames(
      "relative m-auto flex w-1/2",
      isOddIndex ? "md:mr-0" : "justify-start md:m-0",
    );

    return (
      <div className="w-full max-w-[50%] p-0 py-2 md:py-4 lg:px-6">
        <div className={imageContainerClasses}>
          <Image
            src={image}
            alt={image}
            width={350}
            height={350}
            loading="eager"
          />
          <div
            className={`experience-image-cover-${index} absolute inset-0 z-10 bg-black-500`}
            ref={(el) => (imageCovers[index] = el)}
          />
        </div>
      </div>
    );
  };

  const ExperienceContent = (
    name: string,
    title: string,
    time: string,
    index: number,
  ) => {
    const isOddIndex = (index + 1) % 2 !== 0;

    const contentWrapperClasses = classNames(
      "relative m-auto flex flex-col space-y-2",
      `experience-content-wrapper-${index}`,
      { "text-start": isOddIndex, "text-end": !isOddIndex },
    );

    return (
      <div className="w-full max-w-[50%] p-0 py-2  md:py-4 lg:px-6">
        <div className={contentWrapperClasses}>
          <h4 ref={(el) => (words[3 * index] = el)} className="font-semibold">
            {name}
          </h4>
          <p ref={(el) => (words[3 * index + 1] = el)}>{title}</p>
          <p ref={(el) => (words[3 * index + 2] = el)}>{time}</p>
        </div>
      </div>
    );
  };

  const renderExperiences = (experience: ExperienceType, index: number) => {
    const { name, title, image, time } = experience;
    const isOddIndex = (index + 1) % 2 !== 0;

    return (
      <div
        className={`experience-contain-${
          index + 1
        } mb-8 flex items-center justify-between gap-4 lg:gap-0`}
        key={index}
      >
        {isOddIndex ? (
          <>
            {ExperienceImage(image, index)}
            {ExperienceContent(name, title, time, index)}
          </>
        ) : (
          <>
            {ExperienceContent(name, title, time, index)}
            {ExperienceImage(image, index)}
          </>
        )}
      </div>
    );
  };

  return (
    <section
      id="home-my-experience"
      className="relative flex min-h-screen flex-col items-center justify-center gap-16 md:gap-28"
    >
      <h2 className="text-center font-bold">My Experiences</h2>
      <div className="relative w-full">
        <div className="absolute inset-0 m-auto flex justify-center">
          <span className="h-full w-auto border-r-2 border-gray-300" />
        </div>
        {experiences.map((experience, index) =>
          renderExperiences(experience, index),
        )}
      </div>
    </section>
  );
};

export default HomeExperience;
