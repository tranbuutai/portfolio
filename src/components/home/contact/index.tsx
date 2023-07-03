"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

interface HomeContactInformation {}

const HomeContactInformation: React.FC<HomeContactInformation> = () => {
  return (
    <div
      id="home-my-information"
      className="h-screen md:flex md:flex-col md:items-center md:justify-center md:gap-28 md:space-x-6"
    >
      <h1 className="text-center font-bold">Contact</h1>
      <div className="gap-6 md:flex md:items-center md:justify-between md:space-x-6">
        <div className="md:w-2/3">
          <h2 className="mb-2 font-semibold">Contact</h2>
          <p>
            LinkedIn:{" "}
            <Link
              className="font-semibold"
              href="/www.linkedin.com/in/tranbuutai"
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

        <div className="space-y-4 md:w-1/3">
          <div>
            <h4 className="mb-1 font-semibold">Contact</h4>
            <p>
              LinkedIn:{" "}
              <Link
                className="font-semibold"
                href="/www.linkedin.com/in/tranbuutai"
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

export default HomeContactInformation;
