import Link from "next/link";

function SocialLinks() {
  return (
    <ul className="flex flex-col items-end gap-2 font-mono text-sm underline underline-offset-4 print:hidden">
      <li className="hover:blur-sm">
        <Link href="mailto:hello@celest.in">hello@celest.in</Link>
      </li>
      <li className="hover:blur-sm">
        <Link href="https://www.instagram.com/cele_stin">insta</Link>
      </li>
      <li className="hover:blur-sm">
        <Link href="https://www.github.com/backslash-zero">github</Link>
      </li>
    </ul>
  );
}

export default SocialLinks;
