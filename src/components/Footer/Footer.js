import { SocialIcons } from "../icons/SocialIcons";

const Footer = () => {
  return (
    <footer>
      footer
      {SocialIcons.map((i) => (
        <a href={i.href}>
          <img style={{ width: i.size, height: i.size }} src={i.icon} />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
