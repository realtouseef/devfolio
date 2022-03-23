const AnchorLink = ({ href, children }) => {
  return (
    <a
      className="text-pink-500 hover:text-button-light-hover-color"
      rel="noopener noreferrer"
      target="_blank"
      href={href}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
