import { useState } from "react";
import { NavItems } from "./NavItems";
import MobileNav from "./MobileNav";
import Link from "../../data/custom/customLink";
import Equals from "../../data/assets/site-icons/equals.svg";
import Cross from "../../data/assets/site-icons/cross.svg";
import Logo from "../../../public/favicon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleHamburgerChange() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="sticky top-0 z-50 mb-8 flex h-20 items-center justify-between bg-primary-light-color text-lg font-medium tracking-wide md:h-24">
      <Link href="/">
        <a className="hover:text-button-light-color">
          <Logo className="my-2" />
        </a>
      </Link>
      <center className="hidden md:flex md:items-center md:justify-center">
        {NavItems.map(({ href, title }) => (
          <Link
            key={title}
            target={`${href.startsWith("https" || "http") ? "_blank" : ""}`}
            href={href}
            className={`${
              href.startsWith("https" || "http")
                ? "outlinedBtn"
                : "mr-6 last:mr-0 hover:text-button-light-color"
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
