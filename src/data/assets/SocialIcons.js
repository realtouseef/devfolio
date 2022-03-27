import facebook from "./facebook.svg";
import twitter from "./twitter.svg";
import youtube from "./youtube.svg";
import linkedin from "./linkedin.svg";
import github from "./github.svg";
import twitch from "./twitch.svg";
import mail from "./mail.svg";

import siteMetaData from "../siteMetaData";

export const SocialIcons = [
  {
    kind: "facebook",
    href: siteMetaData.facebook,
    size: "24",
    icon: facebook,
  },
  {
    kind: "twitter",
    href: siteMetaData.twitter,
    size: "24",
    icon: twitter,
  },
  {
    kind: "youtube",
    href: siteMetaData.youtube,
    size: "24",
    icon: youtube,
  },
  {
    kind: "github",
    href: siteMetaData.github,
    size: "24",
    icon: github,
  },
  {
    kind: "linkedin",
    href: siteMetaData.linkedin,
    size: "24",
    icon: linkedin,
  },
  {
    kind: "twitch",
    href: siteMetaData.twitch,
    size: "24",
    icon: twitch,
  },
  {
    kind: "mail",
    href: siteMetaData.email,
    size: "24",
    icon: mail,
  },
];
