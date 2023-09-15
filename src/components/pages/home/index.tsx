"use client";

import {
  HomeContactInformation,
  HomeExperience,
  HomeHero,
  HomeMyInformation,
  HomeMyWork,
} from "@/components/home";
import { experiences, projects, techSkills } from "@/constants/home";
import withLoading from "@/components/loading";

const Home = () => {
  return (
    <>
      <HomeHero />
      <section className="container mx-auto space-y-8 md:space-y-16">
        <HomeMyInformation skills={techSkills} />
        <HomeExperience experiences={experiences} />
        <HomeMyWork projects={projects} />
        <HomeContactInformation />
      </section>
    </>
  );
};

export default withLoading(Home);
