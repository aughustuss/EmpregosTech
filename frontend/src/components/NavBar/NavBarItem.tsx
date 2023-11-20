"use client";
import Link from "next/link";

interface NavBarItemProps {
  href: string;
  text: string;
  primary?: string;
}

const NavBarItem = ({ href, text, primary }: NavBarItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`block py-2 px-4 transition duration-300 text-primary text-base md:text-body  hover:text-offwhite hover:bg-primary rounded-lg `}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBarItem;
