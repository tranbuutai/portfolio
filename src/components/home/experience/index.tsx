"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { ExperienceType } from "@/types/home";

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

  const ExperienceImage = (image: string, index: number) => (
    <div className="w-full max-w-[50%] p-0 py-2 md:py-4 lg:pr-6">
      <div className="relative m-auto flex w-1/2 justify-center">
        <Image
          src={image}
          alt={image}
          width={300}
          height={300}
          loading="eager"
        />
        <div
          className={`experience-image-cover-${index} absolute inset-0 z-10 bg-black-500`}
          ref={(el) => (imageCovers[index] = el)}
        ></div>
      </div>
    </div>
  );

  const ExperienceContent = (
    name: string,
    title: string,
    time: string,
    index: number,
  ) => (
    <div className="w-full max-w-[50%] p-0 py-2  md:py-4 lg:px-6">
      <div
        className={`experience-content-wrapper-${index} relative m-auto flex flex-col items-center space-y-2`}
      >
        <h5 className="font-semibold" ref={(el) => (words[3 * index] = el)}>
          {name}
        </h5>
        <p ref={(el) => (words[3 * index + 1] = el)}>{title}</p>
        <p ref={(el) => (words[3 * index + 2] = el)}>{time}</p>
      </div>
    </div>
  );

  const renderExperiences = (experience: ExperienceType, index: number) => {
    const { name, title, image, time } = experience;
    const isOddIndex = (index + 1) % 2 !== 0;

    return (
      <div
        className={`experience-contain-${
          index + 1
        } mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:gap-6`}
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
    <div
      id="home-my-experience"
      className="flex min-h-screen flex-col items-center justify-center gap-16 md:gap-28"
    >
      <h2 className="text-center font-bold">My Experiences</h2>
      <div className="relative w-full">
        <div className="absolute inset-0 m-auto flex justify-center">
          <span className="h-full border-b border-gray-300 md:h-full md:w-auto md:border-b-0 md:border-r-2" />
        </div>
        {experiences.map((experience, index) =>
          renderExperiences(experience, index),
        )}
      </div>
    </div>
  );
};

export default HomeExperience;
