import Image from "next/image";
import { Inter } from "next/font/google";

import VerticalLoopText from "@/components/home/textLoop";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="description">
      <VerticalLoopText />
    </div>
  );
}
