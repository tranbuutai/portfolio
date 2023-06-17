import { HomeHero, HomeMyInformation } from "@/components/home";
import { techSkills } from "@/constants/home";

export default function Home() {
  return (
    <>
      <HomeHero />
      <div className="container mx-auto">
        <HomeMyInformation skills={techSkills} />
      </div>
    </>
  );
}
