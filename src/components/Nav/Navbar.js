import { NavItems } from "./NavItems";
import Link from "../../data/customLink";

const Navbar = () => {
  return (
    <nav className="py-20 flex item-center justify-between ">
      <Link href="/">
        <a className="font-semibold hover:text-button-light-color">logo</a>
      </Link>
      <center className="flex items-center justify-center">
        {NavItems &&
          NavItems.map(({ href, title }) => (
            <Link
              key={title}
              href={href}
              className="mr-3 last:mr-0 hover:text-button-light-color"
            >
              {title}
            </Link>
          ))}
      </center>
    </nav>
  );
};

export default Navbar;
