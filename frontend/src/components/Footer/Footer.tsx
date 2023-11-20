import React from "react";

import Logo from "../Logo";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <footer className="border-t w-full h-[150px] bg-white z-50 shadow-sm py-6 flex flex-col justify-between">
        <div className="flex flex-row items-center justify-between w-5/6 mx-auto">
          <div className="flex flex-col gap-y-4">
            <Link href="/" className="flex items-center justify-center ">
              <Logo />
            </Link>
            <address className="text-xs text-bodycolor">
              <p>Centro Universitário Governador Ozanam Coelho (UNIFAGOC)</p>
              <p>
                Rua Doutor Adjalme da Silva Botelho, 20 - Seminario, Ubá - MG,
                36506-022
              </p>
            </address>
          </div>
          <div className="flex flex-col gap-y-4 items-center">
            <a
              href="/home"
              className="hover:text-primary transition duration-300"
            >
              Ver Candidatos
            </a>
            <a
              href="/signIn"
              className="hover:text-primary transition duration-300"
            >
              Login
            </a>
            <a
              href="/signUp"
              className="hover:text-primary transition duration-300"
            >
              Cadastro
            </a>
          </div>
        </div>
        <div className="text-xs text-bodycolor text-center">
          EmpregosTech &copy; 2023 - Todos os Direitos Reservados
        </div>
      </footer>
    </>
  );
};

export default Footer;
