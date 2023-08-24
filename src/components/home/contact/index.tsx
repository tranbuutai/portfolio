import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

interface HomeContactInformationProps {}

const HomeContactInformation: React.FC<HomeContactInformationProps> = () => {
  return (
    <div
      id="home-my-contact"
      className="flex min-h-screen flex-col items-center justify-center gap-16 md:gap-28"
    >
      <h2 className="text-center font-bold">Contact</h2>
      <div className="flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between lg:gap-6">
        <div className="p-0 py-2 text-center md:min-w-[30%] md:py-4 lg:pr-6">
          <h4 className="mb-3 font-semibold">Email</h4>

          <Link
            className="font-semibold text-white"
            href="mailto:tranbuutai80@gmail.com"
          >
            <p className="transition-transform hover:scale-110">
              tranbuutai80@gmail.com
            </p>
          </Link>
        </div>
        <div className="m-auto w-1/3 border-b border-gray-300 md:h-full md:w-auto md:border-b-0 md:border-r-2" />
        <div className="p-0 py-2 text-center md:min-w-[30%]  md:py-4 lg:px-6">
          <h4 className="mb-3 font-semibold">Phone Number</h4>

          <Link className="font-semibold text-white" href="tel:+84853047874">
            <p className="transition-transform hover:scale-110">+84853047874</p>
          </Link>
        </div>
        <div className="m-auto w-1/3 border-b border-gray-300 md:h-full md:w-auto md:border-b-0 md:border-r-2" />
        <div className="p-0 py-2 text-center md:min-w-[30%] md:py-4 lg:pl-6">
          <h4 className="mb-3 font-semibold ">LinkedIn</h4>

          <Link
            className="font-semibold text-white"
            href="https://www.linkedin.com/in/tranbuutai/"
            target="_blank"
          >
            <p className="transition-transform hover:scale-110">
              in/tranbuutai
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeContactInformation;
