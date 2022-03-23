import Image from "../../data/custom/customImage";
import me from "../../data/images/mee.jpg";
// import Link from "../../data/custom/AnchorLink";

const ProfileCard = () => {
  return (
    <main>
      <center className="max-w-5xl max-h-96 grid grid-cols-2 cols text-left bg-secondary-light-color rounded-lg overflow-hidden">
        <Image
          src={me}
          alt="me"
          width={620}
          height={800}
          className="rounded-l-lg object-center object-cover"
          loading="lazy"
        />
        <article className="px-8 py-10 text-lg font-medium">
          Touseef is a frontend developer specializing in React.js, NextJS,
          Tailwindcss, and SCSS. His abilities go beyond just coding as he's a
          quick learner and has a large appetite for knowledge. He has good
          leadership skills and great communication skills as well. His role is
          to write and style the front-end components that meet the requirements
          of our mocks and fulfill our user stories.
        </article>
      </center>
    </main>
  );
};

export default ProfileCard;
