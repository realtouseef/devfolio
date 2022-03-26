import Image from "../../data/custom/customImage";
import me from "../../data/images/mee.jpg";
// import Link from "../../data/custom/AnchorLink";

const ProfileCard = () => {
  return (
    <main>
      <center className="text-cemter w-full overflow-hidden rounded-lg bg-secondary-light-color md:flex md:h-[288px] md:items-center md:justify-center md:text-left">
        <figure className="mx-auto my-4 h-24 w-24 sm:h-28 sm:w-28 md:mx-0 md:my-0 md:h-[288px] md:w-1/3">
          <Image
            src={me}
            alt="me"
            className="rounded-full object-cover md:rounded-none md:rounded-l-lg"
            loading="lazy"
          />
        </figure>
        <article className="px-4 py-4 text-sm font-medium leading-relaxed sm:py-5 sm:text-base md:w-2/3 md:py-0 md:px-8 md:text-lg md:tracking-wide">
          <h2 className="mb-2 text-lg font-bold md:text-2xl">
            Touseef ibn Khaleel
          </h2>
          <p>
            Touseef is a frontend developer specializing in React.js, NextJS,
            Tailwindcss, and SCSS. His abilities go beyond just coding as he's a
            quick learner and has a large appetite for knowledge. He has good
            leadership skills and great communication skills as well. His role
            is to write and style the front-end components that meet the
            requirements of our mocks and fulfill our user stories.
          </p>
        </article>
      </center>
    </main>
  );
};

export default ProfileCard;
