"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import NavBarItem from "./NavBarItem";
import MenuIcon from "../Icons/MenuIcon";
import Logo from "../Logo";
import UserLoginContext from "@/contexts/UserLoginContext";
import Button from "../Button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { UserLoggedIn, UserLogout } = useContext(UserLoginContext);
  const isUserLoggedIn = UserLoggedIn();
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white shadow-sm fixed top-0 w-full z-10 ">
      <div className="w-[90%] mx-auto flex flex-row flex-wrap items-center py-2 justify-between shadow-sm">
        <Link href="/" className="flex items-center justify-center ">
          <Logo />
        </Link>
        <button
          className="flex items-center p-2 w-10 h-10 justify-center text-sm text-bodycolor rounded-lg md:hidden focus:outline-none"
          onClick={handleClick}
        >
          <MenuIcon />
        </button>

        <div
          className={`${
            isMenuOpen ? "max-md:block" : "max-md:hidden"
          } w-full md:block md:w-auto `}
        >
          <ul className="font-medium flex flex-col border-gray-100 rounded-lg md:flex-row md:gap-1 md:mt-0 md:border-0 py-2">
            <NavBarItem href="/home" text="Ver Candidatos" />
            {!isUserLoggedIn ? (
              <>
                <NavBarItem href="/signIn" text="Login" />
                <NavBarItem href="/signUp" text="Cadastro" />
              </>
            ) : (
              <>
                <NavBarItem href="/profile" text="Ver Perfil" />
                <button
                  className="text-sm text-primary px-4 py-2 hover:bg-primary hover:text-offwhite transition duration-300 rounded-lg text-start"
                  onClick={() => UserLogout()}
                >
                  Logout
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
