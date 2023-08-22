import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

interface HomeExperienceProps {}

const HomeExperience: React.FC<HomeExperienceProps> = () => {
  return (
    <div
      id="home-my-information"
      className="flex h-screen flex-col items-center justify-center gap-16 md:gap-28"
    >
      <h2 className="text-center font-bold">My Experiences</h2>
      <div className="relative flex w-full flex-col gap-4 md:flex-row md:items-center md:justify-between lg:gap-6">
        <div className="max-w-[50%] p-0 py-2 md:py-4 lg:pr-6">
          <div>
            <h4 className="mb-3 font-semibold">My Email</h4>
            <p>
              <Link
                className="font-semibold text-white"
                href="mailto:tranbuutai80@gmail.com"
              >
                <p className="transition-transform hover:scale-110">
                  tranbuutai80@gmail.com
                </p>
              </Link>
            </p>
          </div>
        </div>
        <div className="absolute inset-0 m-auto flex justify-center">
          <span className="h-full border-b border-gray-300 md:h-full md:w-auto md:border-b-0 md:border-r-2"></span>
        </div>
        <div className="max-w-[50%] p-0 py-2  md:py-4 lg:px-6">
          <div>
            <h4 className="mb-3 font-semibold">My Phone Number</h4>
            <p>
              <Link
                className="font-semibold text-white"
                href="tel:+84853047874"
              >
                <p className="transition-transform hover:scale-110">
                  +84853047874
                </p>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExperience;
