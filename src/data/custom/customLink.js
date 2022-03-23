import Link from "next/link";

const CustomLink = ({ href, ...rest }) => {
  const isInternal = href && href.startsWith("/");
  const isExternal =
    (href && href.startsWith("https://")) || href.startsWith("http://");

  if (isExternal) {
    return <a href={href} {...rest} />;
  }

  if (isInternal) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    );
  }

  return <a href={href} {...rest} target="_blank" rel="noopener noreferrer" />;
};

export default CustomLink;
