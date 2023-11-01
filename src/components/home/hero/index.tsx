"use client";

import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

import StarFieldBackGround from "@/components/background";
import useFadeInUp from "@/hooks/useFadeInUp";
import ScrollLink from "@/components/scrollLink";

const HomeHero: React.FC = () => {
  const fadeInUp = (ref: HTMLHeadingElement | null, delay = 0.2) =>
    useFadeInUp(ref, delay);
  let titleRef: any = useRef([]);
  let subtitleRef: any = useRef([]);

  useEffect(() => {
    const animationInit = () => {
      fadeInUp(titleRef, 0.5);
      fadeInUp(subtitleRef, 0.8);
    };
    return animationInit();
  }, []);

  return (
    <section className="mb-8 md:mb-0">
      <StarFieldBackGround />
      <div className="container relative z-10 max-w-fit font-poppins">
        <div className="relative z-10 flex h-[90vh] flex-col items-center justify-center text-white">
          <h1
            className="mb-12 text-center font-bold opacity-0 transition-all ease-in-out"
            ref={(el) => (titleRef = el)}
          >
            Hi! Welcome to TBT Site
          </h1>
          <div
            className="flex flex-col text-center text-2xl font-bold opacity-0 transition-all ease-in-out sm:text-3xl md:flex-row md:text-4xl 3xl:text-5xl"
            ref={(el) => (subtitleRef = el)}
          >
            <div className="md:mr-2">My name is Tai, </div>
            <div className="flex">
              and I'm a
              <div className="hero-text-animation md:ml-2">
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
          </div>
          <nav className="absolute inset-x-0 bottom-2 flex justify-center">
            <ScrollLink href={"#home-my-information"}>
              <Icon
                className="animate-bounce transition-all"
                icon="icons8:down-round"
                color="#F8FBFF"
                width={48}
                height={48}
              />
            </ScrollLink>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
