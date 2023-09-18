"use client";
import Link from "next/link";

interface NavBarItemProps {
  href: string;
  text: string;
  primary?: boolean;
}

const NavBarItem = ({ href, text, primary }: NavBarItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`block py-2 pl-3 pr-4 text-black font-medium ${
          primary ? "bg-blue-700" : ""
        }  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBarItem;
