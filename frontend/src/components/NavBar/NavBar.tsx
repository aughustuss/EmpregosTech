"use client";

import { useCallback, useEffect, useState } from "react";
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
    <nav className="bg-white shadow-sm fixed top-0 w-full z-10 ">
      <div className="w-[90%] mx-auto flex flex-wrap items-center justify-between py-4 shadow-sm">
        <Link href="/" className="flex items-center justify-center ">
          <Logo />
        </Link>
        <button
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-bodycolor rounded-lg md:hidden focus:outline-none"
          onClick={handleClick}
        >
          <MenuIcon />
        </button>

        <div
          className={`${
            isMenuOpen ? "max-md:block" : "max-md:hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col border-gray-100 rounded-lg md:flex-row md:gap-1 md:mt-0 md:border-0 text-body">
            <NavBarItem href="/home" text="Ver Candidatos" />
            <NavBarItem href="/signUp" text="Login" />
            <NavBarItem href="/signIn" text="Cadastro" />
            <NavBarItem href="/profile" text="Perfil" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
