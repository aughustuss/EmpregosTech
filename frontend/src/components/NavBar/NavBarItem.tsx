"use client";
import Link from "next/link";
import { MouseEventHandler } from "react";

interface NavBarItemProps {
  href: string;
  text: string;
  primary?: string;
  onClick?: MouseEventHandler<any> | undefined;
}

const NavBarItem = ({ href, text, primary, onClick }: NavBarItemProps) => {
  return (
    <li>
      <Link
        onClick={onClick}
        href={href}
        className={`block py-2 px-4 transition duration-300 text-primary text-body  hover:text-offwhite hover:bg-primary rounded-lg `}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBarItem;
