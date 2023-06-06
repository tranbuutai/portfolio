"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Hamburger from "./Hamburger";
import Lottie, { AnimationItem } from "lottie-web";
import animationData from "@/assets/lottie/hamburger-menu-to-x.json";
import menuIcon from "@/assets/components/header/menu.svg";
import Image from "next/image";
type MenuState = {
  clicked: boolean;
  menuName: string;
};

const Header: React.FC = () => {
  const pathname: string = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [menuState, setMenuState] = useState<MenuState>({
    clicked: false,
    menuName: "Menu",
  });

  const [isMenuDisabled, setIsMenuDisabled] = useState<boolean>(false);
  const [hasChild, setHasChild] = useState(false);
  console.log(hasChild);
  useEffect(() => {
    setHasChild(true);
    const loadAnimation = (): (() => void) => {
      const animationInstance: AnimationItem = Lottie.loadAnimation({
        container: menuButtonRef.current!,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
          className: "absolute inset-0",
        },
      });
      animationInstance.addEventListener("complete", enableMenu);
      animationRef.current = animationInstance;

      return () => {
        animationInstance.removeEventListener("complete", enableMenu);
      };
    };

    return loadAnimation();
  }, []);

  useEffect(() => {
    disableMenu();
    setMenuState({ clicked: false, menuName: "Menu" });
  }, [pathname]);

  const enableMenu = (): void => setIsMenuDisabled(false);

  const handleClickMenu = (): void => {
    disableMenu();
    const { clicked } = menuState;

    if (!clicked) {
      animationRef.current?.setDirection(1);
      animationRef.current?.goToAndPlay(0);
      setMenuState({
        clicked: true,
        menuName: "Close",
      });
    } else {
      animationRef.current?.setDirection(-1);
      animationRef.current?.play();
      setMenuState({
        clicked: false,
        menuName: "Menu",
      });
    }
  };

  const disableMenu = (): void => {
    setIsMenuDisabled(true);
    setTimeout(() => {
      setIsMenuDisabled(false);
    }, 1200);
  };

  return (
    <header className="relative z-[9999]">
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link href={""}>Home</Link>
            </div>
            <div className="menu">
              <button
                ref={menuButtonRef}
                disabled={isMenuDisabled}
                onClick={handleClickMenu}
                className="relative h-8 w-8"
              >
                {!hasChild && (
                  <Image
                    className="mt-[5px] h-full w-full"
                    priority
                    src={menuIcon}
                    alt="menu icon"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={menuState} />
    </header>
  );
};

export default Header;
