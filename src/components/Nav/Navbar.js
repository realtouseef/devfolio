import { useState } from "react";
import { NavItems } from "./NavItems";
import MobileNav from "./MobileNav";
import Link from "../../data/custom/customLink";
import Equals from "../../data/assets/site-icons/equals.svg";
import Cross from "../../data/assets/site-icons/cross.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburgerChange() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="sticky top-0 z-50 mb-8 flex h-16 items-center justify-between bg-primary-light-color font-semibold tracking-wide md:h-24">
      <Link href="/">
        <a className="hover:text-button-light-color">DevFolio</a>
      </Link>
      <center className="hidden md:flex md:items-center md:justify-center">
        {NavItems.map(({ href, title }) => (
          <Link
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              href.includes("https" || "http")
                ? "outlinedBtn"
                : "mr-3 last:mr-0 hover:text-button-light-color"
            }`}
          >
            {title}
          </Link>
        ))}
      </center>
      <button className="z-30 md:hidden" onClick={handleHamburgerChange}>
        {isOpen ? <Cross width="16" /> : <Equals width="24" />}
      </button>
      {isOpen && <MobileNav />}
    </nav>
  );
};

export default Navbar;
