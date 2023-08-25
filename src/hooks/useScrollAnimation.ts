import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger plugin

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger plugin

interface ScrollAnimationOptions {
  selector: string;
  scrollTrigger: gsap.DOMTarget | ScrollTrigger.Vars;
  delay?: number;
}

const useScrollAnimation = ({
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

export default useScrollAnimation;
