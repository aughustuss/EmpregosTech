"use client";
import Link from "next/link";

interface NavBarItemProps {
  href: string;
  text: string;
}

const NavBarItem = ({ href, text }: NavBarItemProps) => {
  return (
    <li>
      <Link
        href={href}
        className={`block py-2 pl-3 pr-4 text-[#1727eb] font-semibold text-sm  hover:text-white hover:bg-[#1727eb] rounded-lg md:inline-block md:mt-0 md:ml-4`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavBarItem;
