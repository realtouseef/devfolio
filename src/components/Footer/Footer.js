import { SocialIcons } from "../../data/assets/SocialIcons";
import siteMetaData from "../../data/siteMetaData";

const Footer = () => {
  const {
    facebook,
    twitter,
    twitch,
    youtube,
    linkedin,
    github,
    email,
    upwork,
    author,
    title,
  } = siteMetaData;

  return (
    <footer className="my-4 space-y-5 text-center tracking-wider">
      <main className="flex items-center justify-center space-x-5 ">
        <SocialIcons href={upwork} kind="upwork" />
        <SocialIcons href={facebook} kind="facebook" />
        <SocialIcons href={youtube} kind="youtube" />
        <SocialIcons href={twitter} kind="twitter" />
        <SocialIcons href={twitch} kind="twitch" />
        <SocialIcons href={linkedin} kind="linkedin" />
        <SocialIcons href={github} kind="github" />
        <SocialIcons href={`mailto:${email}`} kind="mail" />
      </main>
      <article className="flex items-center justify-center space-x-4 text-sm font-medium text-muted-light-color">
        <aside>{author}</aside>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <aside>{title}</aside>
      </article>
    </footer>
  );
};

export default Footer;
