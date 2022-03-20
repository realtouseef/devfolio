import { NavItems } from "./NavItems";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="max-w-4xl py-20 flex item-center justify-between ">
      <Link href="/">
        <a className="font-semibold hover:text-button-light-color">logo</a>
      </Link>
      <center className="flex items-center justify-center">
        {NavItems &&
          NavItems.map(({ href, title }) => (
            <Link key={title} href={href}>
              <a className="ml-4 hover:text-button-light-color">{title}</a>
            </Link>
          ))}
      </center>
    </nav>
  );
};

export default Navbar;
