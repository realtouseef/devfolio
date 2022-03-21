import { NavItems } from "./NavItems";
import Link from "../../data/customLink";

const Navbar = () => {
  const customBtn =
    "p-4 hover:bg-button-light-color hover:text-white text-sm outline-button-light-color ring-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-button-light-color focus-visible:ring-offset-2 focus-visible:ring-offset-text-muted hover:bg-button-light-color  hover:text-white hover:outline-none hover:ring-0 transition-all duration-200";

  return (
    <nav className="py-20 flex item-center justify-between font-semibold tracking-wide">
      <Link href="/">
        <a className="hover:text-button-light-color">logo</a>
      </Link>
      <center className="flex items-center justify-center">
        {NavItems &&
          NavItems.map(({ href, title }) => (
            <Link
              key={title}
              href={href}
              className={`${
                href.includes("https" || "http")
                  ? customBtn
                  : "mr-3 last:mr-0 hover:text-button-light-color highlight"
              }`}
            >
              {title}
            </Link>
          ))}
      </center>
    </nav>
  );
};

export default Navbar;
