"use client";

import { useState } from "react";
import Link from "next/link";
import NavBarItem from "./NavBarItem";
import MenuIcon from "../Icons/MenuIcon";
import Logo from "../Logo";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white fixed top-0 w-full z-10 ">
      <div className="flex flex-wrap items-center justify-between p-4 shadow-sm mx-auto">
        <Link href="/" className="flex items-center justify-center ">
          <Logo />
        </Link>
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={handleClick}
        >
          <MenuIcon />
        </button>

        <div
          className={`${
            isMenuOpen ? "max-md:block" : "max-md:hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            <NavBarItem href="/signIn" text="Login" primary />
            <NavBarItem href="/signIn" text="Candidaturas" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
