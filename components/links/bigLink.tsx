import Link from "next/link";

interface BigLinkProps {
  url: string;
  content: string;
  routerLink?: boolean;
}

function BigLink({ url, content, routerLink = false }: BigLinkProps) {
  if (routerLink)
    return (
      <Link
        className="font-sans font-light  underline underline-offset-8"
        href={url}
      >
        {content}
      </Link>
    );

  return (
    <a
      className="font-sans font-light  underline underline-offset-8"
      href={url}
    >
      {content}
    </a>
  );
}

export default BigLink;
