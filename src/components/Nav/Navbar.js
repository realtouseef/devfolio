import { useState } from "react";
import { NavItems } from "./NavItems";
import MobileNav from "./MobileNav";
import Link from "../../data/custom/customLink";
import Equals from "../../data/assets/site-icons/equals.svg";
import Cross from "../../data/assets/site-icons/cross.svg";
import Logo from "../../../public/favicon.svg";
import Sun from "../../data/assets/site-icons/sun.svg";
import Moon from "../../data/assets/site-icons/moon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 mb-8 flex h-20 items-center justify-between bg-primary-light-color text-lg font-medium tracking-wide md:h-24">
        <Link href="/">
          <Logo className="my-2" />
        </Link>

        <center className="hidden text-text-light-color first-letter:text-right md:flex md:items-center md:justify-center">
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
        <div>
          <button
            className="subtle-bg md:mr-4"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>
          <button className="z-30 md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <Cross width="16" /> : <Equals width="24" />}
          </button>
        </div>
        {isOpen && <MobileNav />}
      </nav>
    </>
  );
};

export default Navbar;
