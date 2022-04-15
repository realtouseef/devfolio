import Linkedin from "../../data/assets/social/linkedin.svg";
import GitHub from "../../data/assets/social/github.svg";
// import Link from "../../data/custom/AnchorLink";
import siteMetaData from "../../data/siteMetaData";

const ProfileCard = () => {
  const { author, authorBio, longAuthorBio, cardImage } = siteMetaData;
  return (
    <main className="mb-10">
      <center className="mx-auto w-96 overflow-hidden rounded-lg bg-secondary-light-color md:mx-0 md:flex md:h-96 md:w-full md:items-center md:justify-center md:text-left">
        <figure className="md:w-[350px]">
          <img
            src={cardImage}
            alt="me"
            className="rounded-t-lg object-cover md:rounded-none md:rounded-l-lg"
            loading="lazy"
          />
        </figure>
        <article className="sm:py-5 space-y-4 px-4 py-4 text-left text-lg font-medium leading-relaxed tracking-wide md:w-2/3 md:py-0 md:px-8 md:leading-none">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-text-light-color">
              {author}
            </h2>
            <h4 className="text-sm text-muted-light-color md:text-base">
              {authorBio}
            </h4>
          </div>
          <div className="flex items-center ">
            <p className="btn mr-2 flex items-center bg-slate-400 text-white text-text-light-color hover:rounded-xl">
              <GitHub className="fill-white" width="20" height="20" />
              <span className="ml-3">GitHub</span>
            </p>
            <p className="btn flex items-center bg-[#5592df] hover:rounded-xl">
              <Linkedin className="fill-white" width="20" height="20" />
              <span className="ml-3">LinkedIn</span>
            </p>
          </div>
          <p className="text-base text-text-light-color">{longAuthorBio}</p>
        </article>
      </center>
    </main>
  );
};

export default ProfileCard;
