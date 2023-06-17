"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

interface IInformation {
  skills: string[];
}

const HomeMyInformation: React.FC<IInformation> = ({ skills }) => {
  return (
    <div
      id="home-my-information"
      className="h-screen md:flex md:flex-col md:items-center md:justify-center md:gap-28 md:space-x-6"
    >
      <h1 className="text-center text-3xl font-bold md:text-5xl ">About Me</h1>
      <div className="gap-6 md:flex md:items-center md:justify-between md:space-x-6">
        <div className="md:w-2/3">
          <h2 className="mb-2 text-2xl font-semibold md:text-4xl">
            Tran Buu Tai (Tom)
          </h2>
          <h3 className="mb-2 text-xl font-semibold md:text-2xl">
            Software Engineer
          </h3>
          <p className="mb-2 text-base md:text-lg">
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
        </div>

        <div className="space-y-4 md:w-1/3">
          <div>
            <h4 className="mb-1 text-lg font-semibold md:text-xl">Skills</h4>
            <ul className="list-disc pl-5">
              {skills.map((skill, index) => (
                <li key={index} className="text-base md:text-lg">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-1 text-lg font-semibold md:text-xl">Contact</h4>
            <p className="text-base md:text-lg">
              LinkedIn:{" "}
              <Link
                className="font-semibold"
                href="/www.linkedin.com/in/tranbuutai"
              >
                in/tranbuutai
              </Link>
            </p>
            <p className="text-base md:text-lg">
              Email:{" "}
              <Link
                className="font-semibold"
                href="mailto:tranbuutai80@gmail.com"
              >
                tranbuutai80@gmail.com
              </Link>
            </p>
            <p className="text-base md:text-lg">
              Phone:{" "}
              <Link className="font-semibold" href="tel:+84853047874">
                +84853047874
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Link
        href="/about"
        className="flex items-center justify-center gap-4 text-lg font-semibold"
      >
        <Icon icon="fxemoji:right" className="animate-x-bounce-left" />
        Check on my About page for more information about me.
        <Icon icon="fxemoji:left" className="animate-x-bounce-right" />
      </Link>
    </div>
  );
};

export default HomeMyInformation;
