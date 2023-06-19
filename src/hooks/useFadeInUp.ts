import gsap from "gsap";

const useFadeInUp = (node: HTMLHeadingElement | null, delay: number) => {
  gsap.fromTo(
    node,
    {
      y: 40,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 100,
      duration: 0.5,
      delay: delay,
      ease: "power3.inOut",
    },
  );
};

export default useFadeInUp;
