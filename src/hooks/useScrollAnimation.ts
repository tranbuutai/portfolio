import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollAnimationOptions = {
  selector: string;
  scrollTrigger: gsap.DOMTarget | ScrollTrigger.Vars;
  delay?: number;
};

const UseScrollAnimation = ({
  selector,
  scrollTrigger,
  delay,
}: ScrollAnimationOptions) => {
  gsap.from(selector, {
    scrollTrigger,
    opacity: 0,
    duration: 0.8,
    y: 50,
    delay: delay || 0.2,
    ease: "power3.inOut",
    stagger: { amount: 0.2 },
  });
};

export default UseScrollAnimation;
