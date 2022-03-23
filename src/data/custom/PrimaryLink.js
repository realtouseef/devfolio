const PrimaryLink = ({ href, ...rest }) => {
  return (
    <a
      className="text-button-light-color hover:text-button-light-hover-color"
      rel="noopener noreferrer"
      target={"_blank"}
      href={href}
    >
      {...rest}
    </a>
  );
};

export default PrimaryLink;
