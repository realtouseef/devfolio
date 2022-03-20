import Mail from "./mail.svg";
import Github from "./github.svg";
import Facebook from "./facebook.svg";
import Youtube from "./youtube.svg";
import Linkedin from "./linkedin.svg";
import Twitter from "./twitter.svg";
import Twitch from "./twitch.svg";

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  twitch: Twitch,
};

const socialIcons = ({ kind, color = "text-light-color", size = 24, href }) => {
  if (!href || kind === "mail") return null;

  const socialSVG = components[kind];

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <socialSVG
        style={{ width: size, height: size }}
        className={`fill-color ${color} hover:button-light-color`}
      />
    </a>
  );
};

export default socialIcons;
