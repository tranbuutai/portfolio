"use client";

import { gsap } from "gsap";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

import { useScrollAnimation } from "@/hooks";
import BounceText from "@/components/bounceText";
interface IInformation {
  skills: string[];
}

const HomeMyInformation: React.FC<IInformation> = ({ skills }) => {
  let information: any = Array.from({ length: 3 }, () => useRef(null));
  let sideContentRef: any = useRef([]);

  const scrollAnimation = (
    selector: any,
    scrollTrigger: gsap.DOMTarget | ScrollTrigger.Vars,
    delay?: number,
  ) => {
    useScrollAnimation({ selector, scrollTrigger, delay });
  };

  useEffect(() => {
    information.forEach((informationItem: any, index: number) => {
      const ctx = gsap.context(() => {
        scrollAnimation(informationItem, ".my-information-" + index);
      });

      return () => ctx.revert(); // <-- CLEANUP!
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      scrollAnimation(sideContentRef, ".my-information-side-content", 0.8);
    });

    return () => ctx.revert(); // <-- CLEANUP!
  }, []);

  return (
    <section
      id="home-my-information"
      className="relative min-h-screen md:flex md:flex-col md:items-center md:justify-center md:gap-28 md:space-x-6"
    >
      <h1 className="mb-5 text-center font-bold">About Me</h1>
      <div className="gap-6 md:flex md:items-start md:justify-between md:space-x-6">
        <article className="md:w-2/3">
          <h2
            className="my-information-0 mb-2  font-semibold"
            ref={(el) => (information[0] = el)}
          >
            Tran Buu Tai (Tom Tran)
          </h2>
          <h3
            className="my-information-1 mb-2 font-semibold"
            ref={(el) => (information[1] = el)}
          >
            Software Engineer
          </h3>
          <p
            className="my-information-2 mb-2"
            ref={(el) => (information[2] = el)}
          >
            Hello, I'm Trần Bửu Tài, also known as Tom Tran, a dedicated
            Software Engineer based in Can Tho, Vietnam. With over two years of
            professional experience, I've honed my skills in front-end
            development and cloud technologies. My passion lies in crafting
            intuitive, engaging websites that enhance user experience. <br />I
            am committed to continuous learning and always open to new ideas
            that can enhance my skills and fuel my passion for technology. As I
            look to the future, I am excited about the prospect of further
            growth and contributions to the tech world. I am eager to leverage
            my skills to create innovative solutions and drive technological
            advancement.
          </p>
        </article>

        <div
          className="my-information-side-content space-y-4 md:w-1/3"
          ref={(el) => (sideContentRef = el)}
        >
          <div>
            <h4 className="mb-1 font-semibold">Skills</h4>
            <ul className="list-disc pl-5">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-1 font-semibold">Contact</h4>
            <p>
              GitHub:{" "}
              <Link
                className="font-semibold"
                href="https://github.com/tranbuutai"
                target="_blank"
              >
                github.com/tranbuutai
              </Link>
            </p>
            <p>
              LinkedIn:{" "}
              <Link
                className="font-semibold"
                href="www.linkedin.com/in/tranbuutai"
                target="_blank"
              >
                in/tranbuutai
              </Link>
            </p>
            <p>
              Email:{" "}
              <Link
                className="font-semibold"
                href="mailto:tranbuutai80@gmail.com"
              >
                tranbuutai80@gmail.com
              </Link>
            </p>
            <p>
              Phone:{" "}
              <Link className="font-semibold" href="tel:+84853047874">
                +84853047874
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Link
        href="https://www.topcv.vn/xem-cv/VwlSBwFYBVANAw1SBl0PAABRAAFQUw0ABQ5TXA1e82"
        className="mt-4 flex items-center justify-center gap-4 text-lg font-semibold md:mt-0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon icon="fxemoji:right" className="animate-x-bounce-left" />
        <p className="text-center font-semibold md:text-lg">
          <BounceText
            text="Check on my CV for more information about me."
            delay={0.1}
          />
        </p>
        <Icon icon="fxemoji:left" className="animate-x-bounce-right" />
      </Link>
    </section>
  );
};

export default HomeMyInformation;
