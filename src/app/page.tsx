import Image from "next/image";
import { Inter } from "next/font/google";

import VerticalLoopText from "@/components/home/textLoop";
import Header from "@/components/header";
import StarFieldBackGround from "@/components/background";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <StarFieldBackGround />
      <div className="description">
        <VerticalLoopText />
      </div>
    </>
  );
}
