"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Hamburger from "./Hamburger";

const Header = ({}) => {
  const pathname = usePathname();
  const [menuState, setMenuState] = useState<any>({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    disableMenu();
    setMenuState({ clicked: false, menuName: "Menu" });
  }, [pathname]);

  const handleClickMenu = () => {
    disableMenu();
    const { initial, clicked, menuName } = menuState;
    if (initial === false) {
      return setMenuState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    }
    if (clicked === true) {
      return setMenuState({
        clicked: !clicked,
        menuName: "Menu",
      });
    }

    setMenuState({
      clicked: !clicked,
      menuName: "Close",
    });
  };

  const disableMenu = () => {
    setDisabled(true);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link href={""}> Home</Link>
            </div>
            <div className="menu">
              <button
                disabled={disabled}
                onClick={handleClickMenu}
                className="text-blue-700"
              >
                {menuState.menuName}
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
