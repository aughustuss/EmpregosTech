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
        className={`block py-2 px-2 text-[#1727eb] font-semibold text-base  hover:text-white hover:bg-[#1727eb] rounded-lg md:inline-block md:mt-0 md:ml-4`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBarItem;
