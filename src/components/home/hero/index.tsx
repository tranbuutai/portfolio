"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

import StarFieldBackGround from "@/components/background";
import useFadeInUp from "@/hooks/useFadeInUp";

const HomeHero: React.FC = () => {
  const fadeInUp = (ref: HTMLHeadingElement | null, delay = 0.2) =>
    useFadeInUp(ref, delay);
  let titleRef: any = useRef([]);
  let subtitleRef: any = useRef([]);

  useEffect(() => {
    const animationInit = () => {
      fadeInUp(titleRef);
      fadeInUp(subtitleRef, 0.5);
    };
    return animationInit();
  }, []);

  return (
    <>
      <StarFieldBackGround />
      <div className="container relative z-10 max-w-fit font-poppins">
        <div className="relative z-10 flex h-[90vh] flex-col items-center justify-center text-white">
          <h1
            className="mb-12 text-center text-6xl font-bold opacity-0 transition-all ease-in-out"
            ref={(el) => (titleRef = el)}
          >
            Hi! Welcome to My Site
          </h1>
          <div
            className="flex text-center text-4xl font-bold opacity-0 transition-all ease-in-out"
            ref={(el) => (subtitleRef = el)}
          >
            My name is Tai, and I'm a
            <div className="text-animation">
              <ul>
                <li className="text-[#ea4335]">Coder.</li>
                <li className="text-[#4285f4]">Gamer.</li>
                <li className="text-[#fbbc04]">Engineer.</li>
                <li className="text-[#4285f4]">Builder.</li>
                <li className="text-[#ea4335]">Coder.</li>
              </ul>
            </div>
          </div>
          <Link href={"#home-my-information"} className="">
            <Icon
              className="absolute bottom-2 left-[50%] translate-x-[-50%] translate-y-[-50%] animate-bounce transition-all"
              icon="icons8:down-round"
              color="#F8FBFF"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
