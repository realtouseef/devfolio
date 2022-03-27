import Image from "../../data/custom/customImage";
import Touseef from "../../data/assets/images/touseef.jpg";
import Linkedin from "../../data/assets/social/linkedin.svg";
import GitHub from "../../data/assets/social/github.svg";
// import Link from "../../data/custom/AnchorLink";

const ProfileCard = () => {
  return (
    <main>
      <center className="mx-auto w-96 overflow-hidden rounded-lg bg-secondary-light-color md:mx-0 md:flex md:h-96 md:w-full md:items-center md:justify-center md:text-left">
        <figure className="md:w-[350px]">
          <Image
            src={Touseef}
            alt="me"
            className="rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
            loading="lazy"
          />
        </figure>
        <article className="sm:py-5 space-y-4 px-4 py-4 text-left text-lg font-medium leading-relaxed tracking-wide md:w-2/3 md:py-0 md:px-8 md:leading-none">
          <div>
            <h2 className="mb-2 text-2xl font-bold">Touseef ibn Khaleel</h2>
            <h4 className="text-sm text-muted-light-color md:text-base">
              Jr. React Engineer, Open source Enthusiast
            </h4>
          </div>
          <div className="flex items-center ">
            <p className="btn mr-2 flex items-center bg-white text-text-light-color hover:bg-[#f7f2f2]">
              <GitHub width="20" height="20" />
              <span className="ml-3">GitHub</span>
            </p>
            <p className="btn flex items-center bg-[#5592df] hover:bg-[#2869b9]">
              <Linkedin className="fill-white" width="20" height="20" />
              <span className="ml-3">LinkedIn</span>
            </p>
          </div>
          <p className="text-base">
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
