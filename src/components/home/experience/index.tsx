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
  let word: any = useRef(null);
  const { length } = experiences;
  let imageCover: any = Array.from({ length: length }, () => useRef(null));

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(
        imageCover.map((ref: { current: any }) => ref),
        {
          scrollTrigger: {
            trigger: imageCover.map((ref: { current: any }) => ref),
            start: "top bottom",
            end: "35% 20%",
            scrub: 2,
          },
          left: "400px",
        },
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      staggerText(word[0], word[1], word[2]);
    });

    return () => ctx.revert(); // <-- CLEANUP!
  }, []);

  const staggerText = (node1: string, node2: string, node3: string) => {
    gsap.from([node1, node2, node3], {
      scrollTrigger: ".experience-content-wrapper",
      opacity: 0,
      duration: 0.8,
      y: 50,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: { amount: 0.2 },
    });
  };

  const ExperienceImage = (image: string, index: number) => {
    return (
      <div className=" w-full max-w-[50%] p-0 py-2 md:py-4 lg:pr-6">
        <div className="relative m-auto flex w-1/2 justify-center">
          <Image
            src={image}
            alt={"word"}
            width={300}
            height={300}
            loading="eager"
          />
          <div
            className="absolute inset-0 z-10 bg-black-500"
            ref={(el) => (imageCover[index] = el)}
          ></div>
        </div>
      </div>
    );
  };

  const ExperienceContent = (name: string, title: string, time: string) => {
    return (
      <div className="w-full max-w-[50%] p-0 py-2  md:py-4 lg:px-6">
        <div className="experience-content-wrapper relative m-auto flex flex-col items-center space-y-2">
          <h5 className="font-semibold" ref={(el) => (word[0] = el)}>
            {name}
          </h5>
          <span>
            <p ref={(el) => (word[1] = el)}>{title}</p>
          </span>
          <p ref={(el) => (word[2] = el)}>{time}</p>
        </div>
      </div>
    );
  };

  const renderExperiences = (experience: ExperienceType, index: number) => {
    const { name, title, image, time } = experience;
    if ((index + 1) % 2 !== 0) {
      return (
        <div
          className={`experience-contain-${
            index + 1
          } mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:gap-6`}
          key={index}
        >
          {ExperienceImage(image, index)}
          {ExperienceContent(name, title, time)}
        </div>
      );
    }
    return (
      <div
        className={`experience-contain-${
          index + 1
        } mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between lg:gap-6`}
        key={index}
      >
        {ExperienceContent(name, title, time)}
        {ExperienceImage(image, index)}
      </div>
    );
  };

  return (
    <div
      id="home-my-information"
      className="flex min-h-screen flex-col items-center justify-center gap-16 md:gap-28"
    >
      <h2 className="text-center font-bold">My Experiences</h2>
      <div className="relative w-full">
        <div className="absolute inset-0 m-auto flex justify-center">
          <span className="h-full border-b border-gray-300 md:h-full md:w-auto md:border-b-0 md:border-r-2"></span>
        </div>
        {experiences.map((experience, index) =>
          renderExperiences(experience, index),
        )}
      </div>
    </div>
  );
};

export default HomeExperience;
