import VerticalLoopText from "@/components/home/textLoop";
import StarFieldBackGround from "@/components/background";

export default function About() {
  return (
    <>
      <StarFieldBackGround />
      <div className="container relative z-10 rounded-md border border-gray-300">
        <div className="description">
          <VerticalLoopText />
        </div>
      </div>
    </>
  );
}
