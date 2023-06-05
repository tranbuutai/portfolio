import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Link from "next/link";

import HaNoi from "@/assets/components/header/ha-noi.jpg";
import DaNang from "@/assets/components/header/da-nang.jpg";
import HoChiMinh from "@/assets/components/header/ho-chi-minh.jpg";
import CanTho from "@/assets/components/header/can-tho.jpg";
import KienGiang from "@/assets/components/header/kien-giang.webp";
import { StaticImageData } from "next/image";

type LinkType = {
  title: string;
  url: string;
};

type CityType = {
  name: string;
  image: StaticImageData;
};

type HamburgerProps = {
  state: {
    initial: any;
    clicked: boolean;
    menuName: string;
  };
};

const cities: CityType[] = [
  { name: "Ha Noi", image: HaNoi },
  { name: "Da Nang", image: DaNang },
  { name: "Ho Chi Minh", image: HoChiMinh },
  { name: "Can Tho", image: CanTho },
  { name: "Kien Giang", image: KienGiang },
];

const links: LinkType[] = [
  { title: "About", url: "/about" },
  { title: "Projects", url: "/project" },
  { title: "Contact", url: "/contact" },
];

const Hamburger = ({ state }: HamburgerProps) => {
  const { initial, clicked, menuName } = state;

  let menu: any = useRef([]);
  let revealMenu: any = useRef([]);
  let revealMenuBackground: any = useRef([]);
  let cityBackground: any = useRef([]);
  let title: any = useRef([]);
  let info: any = useRef([]);

  useEffect(() => {
    if (clicked) {
      showMenu();
    } else {
      hideMenu();
    }
  }, [state]);

  const gsapOptions = {
    duration: 0.8,
    ease: "power3.inOut",
  };

  const staggerRevealOptions = {
    ...gsapOptions,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    stagger: { amount: 0.1 },
  };

  const staggerTextOptions = {
    ...gsapOptions,
    y: 100,
    delay: 0.1,
    stagger: { amount: 0.3 },
  };

  const hideMenu = () => {
    gsap.to([revealMenu, revealMenuBackground], {
      ...gsapOptions,
      height: 0,
      stagger: { amount: 0.07 },
    });
    gsap.to(menu, {
      duration: 1,
      css: { display: "none" },
    });
  };

  const showMenu = () => {
    gsap.to(menu, {
      duration: 0,
      css: { display: "block" },
    });
    gsap.to([revealMenuBackground, revealMenu], {
      duration: 0,
      opacity: 1,
      height: "100%",
    });
    staggerReveal(revealMenuBackground, revealMenu);
    fadeInUp(info);
    if (!title) {
      staggerText(title[0], title[1], title[2]);
    }
  };

  const staggerReveal = (node1: string, node2: string) => {
    gsap.from([node1, node2], staggerRevealOptions);
  };

  const staggerText = (node1: string, node2: string, node3: string) => {
    gsap.from([node1, node2, node3], staggerTextOptions);
  };

  const fadeInUp = (node: gsap.TweenTarget) => {
    gsap.from(node, {
      duration: 1,
      delay: 0.2,
      y: 60,
      opacity: 0,
      ease: "power3.inOut",
    });
  };

  const handleCity = (city: StaticImageData) => {
    gsap.to(cityBackground, {
      duration: 0,
      backgroundSize: "+=25% +=25%",
      background: `url(${city}) center center`,
    });
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
  };

  const handleCityReturn = () => {
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };

  const handleHoverTitle = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    gsap.to(e.target, { duration: 0.2, y: 3, skewX: 4, ease: "power3:inOut" });
  };
  const handleExitTitle = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    gsap.to(e.target, { duration: 0.2, y: -3, skewX: 0, ease: "power3:inOut" });
  };

  const LinkList = () => (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              onMouseEnter={handleHoverTitle}
              onMouseOut={handleExitTitle}
              ref={(el) => (title.current[index] = el)}
              href={link.url}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  const Locations = () => (
    <div className="locations">
      Locations:
      {cities.map((el) => (
        <span
          key={el.name}
          onMouseEnter={() => handleCity(el.image)}
          onMouseOut={handleCityReturn}
        >
          {el.name}
        </span>
      ))}
    </div>
  );

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (revealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div
          ref={(el) => (cityBackground = el)}
          className="menu-city-background !bg-cover !bg-no-repeat"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <LinkList />

              <div ref={(el) => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                  dicta facere libero sit soluta velit consequatur? Nihil veniam
                  laboriosam repudiandae, fugiat rem non ipsa a? Amet officiis
                  aliquid voluptatem sint nam, neque harum optio quasi. Dolores
                  eius odit doloremque!
                </p>
              </div>
              <Locations />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
