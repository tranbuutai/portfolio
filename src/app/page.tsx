"use client";

import React, { useEffect, useRef, useState } from "react";

import {
  HomeContactInformation,
  HomeExperience,
  HomeHero,
  HomeMyInformation,
  HomeMyWork,
} from "@/components/home";
import { experiences, projects, techSkills } from "@/constants/home";
import Loading from "./loading";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <HomeHero />
      <div className="container mx-auto">
        <HomeMyInformation skills={techSkills} />
        <HomeExperience experiences={experiences} />
        <HomeMyWork projects={projects} />
        <HomeContactInformation />
      </div>
    </>
  );
}
