"use client";

import Link from "next/link";
import "./header.scss";
import { useState } from "react";
import useIsMobileView from "@/app/hooks/useIsMobileView";
import BagIcon from "../../icons/shoppingbag/bag-icon";
import CloseIcon from "../../icons/close-icon";
import Hamburger from "../../icons/hamburger";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isMobileView = useIsMobileView();

  return (
    <header className="site-header">
      <div className="site-header-left">
        {isMobileView ? (
          <button className="site-header-left__button" onClick={toggleMenu}>
            {isOpen ? <CloseIcon /> : <Hamburger />}
          </button>
        ) : (
          <ul className="site-header-left__nav-links">
            <li>
              <Link href={"/books"}>Books</Link>
            </li>
          </ul>
        )}
      </div>
      <div className="site-header-logo">
        <Link href={"/"} className="site-header-logo__logo">
          Logo
        </Link>
      </div>
      <div className="site-header-right">
        <button className="site-header-right__button">
          <BagIcon />{" "}
          <span className="site-header-right__button--amount">0</span>
        </button>
      </div>
      {isOpen && isMobileView && (
        <div className="site-header-hamburger-menu">
          <Link href={"/"}>Home</Link>
          <Link href={"/books"}>Books</Link>
        </div>
      )}
    </header>
  );
}
