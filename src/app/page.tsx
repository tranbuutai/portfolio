"use client";
import React, { useEffect, useRef, useState } from "react";

import { HomeHero, HomeMyInformation } from "@/components/home";
import { techSkills } from "@/constants/home";
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
      </div>
    </>
  );
}
