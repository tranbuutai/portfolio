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
            className="mb-12 text-center font-bold opacity-0 transition-all ease-in-out"
            ref={(el) => (titleRef = el)}
          >
            Hi! Welcome to My Site
          </h1>
          <div
            className="flex text-center text-2xl font-bold opacity-0 transition-all ease-in-out sm:text-3xl md:text-4xl 3xl:text-5xl"
            ref={(el) => (subtitleRef = el)}
          >
            My name is Tai, and I'm a
            <div className="text-animation">
              <ul>
                <li className="text-2xl text-[#ea4335] sm:text-3xl md:text-4xl 3xl:text-5xl">
                  Coder.
                </li>
                <li className="text-2xl text-[#4285f4] sm:text-3xl md:text-4xl 3xl:text-5xl">
                  Gamer.
                </li>
                <li className="text-2xl text-[#fbbc04] sm:text-3xl md:text-4xl 3xl:text-5xl">
                  Engineer.
                </li>
                <li className="text-2xl text-[#4285f4] sm:text-3xl md:text-4xl 3xl:text-5xl">
                  Builder.
                </li>
                <li className="text-2xl text-[#ea4335] sm:text-3xl md:text-4xl 3xl:text-5xl">
                  Coder.
                </li>
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
