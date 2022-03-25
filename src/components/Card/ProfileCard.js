import Image from "../../data/custom/customImage";
import me from "../../data/images/mee.jpg";
// import Link from "../../data/custom/AnchorLink";

const ProfileCard = () => {
  return (
    <main>
      <center className="max-w-5xl h-72 grid grid-cols-12 text-left bg-secondary-light-color rounded-lg overflow-hidden">
        <div className="col-span-4">
          <Image
            src={me}
            alt="me"
            width={620}
            height={600}
            className="w-full h-full rounded-l-lg object-center object-cover"
            loading="lazy"
          />
        </div>
        <article className="col-start-5 col-end-13 px-8 py-10 text-lg font-medium">
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
