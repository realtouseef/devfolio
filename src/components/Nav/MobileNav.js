import { NavItems } from "./NavItems";
import Link from "../../data/custom/customLink";

const MobileNav = () => {
  return (
    <div className="fixed top-0 right-0 z-20 flex h-screen w-10/12 flex-col items-center justify-center space-y-20 bg-secondary-light-color p-10 transition-all duration-300 md:hidden">
      {NavItems.map(({ href, title }) => (
        <Link
          key={title}
          href={href}
          target={`${href.startsWith("https" || "http") ? "_blank" : ""}`}
          rel="noopener noreferrer"
          className={"text-3xl uppercase tracking-wider"}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;
