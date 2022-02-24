import NextLink from "next/link";

const Link = ({ url, children, ...props }) => (
  <NextLink href={url} passHref>
    <a {...props}>{children}</a>
  </NextLink>
);

export default Link;
