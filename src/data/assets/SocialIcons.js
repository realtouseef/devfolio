import Facebook from "./social/facebook.svg";
import Twitter from "./social/twitter.svg";
import Youtube from "./social/youtube.svg";
import Linkedin from "./social/linkedin.svg";
import Github from "./social/github.svg";
import Twitch from "./social/twitch.svg";
import Upwork from "./social/upwork.svg";
import Mail from "./social/mail.svg";

const icons = {
  facebook: Facebook,
  twitter: Twitter,
  youtube: Youtube,
  linkedin: Linkedin,
  github: Github,
  twitch: Twitch,
  upwork: Upwork,
  mail: Mail,
};

export const SocialIcons = ({ kind, href, size = 20 }) => {
  if (!href) return null;

  const IconSvg = icons[kind];

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <IconSvg
        className="hover:fill-pink-500"
        style={{ width: size, height: size }}
      />
    </a>
  );
};
