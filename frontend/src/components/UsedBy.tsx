import React from "react";
import { IconType } from "react-icons";
import { FaAngular, FaVuejs, FaReact, FaJava, FaSwift } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
const UsedBy = () => {
  const iconsArray: Array<IconType> = [
    FaAngular,
    FaVuejs,
    FaReact,
    FaJava,
    SiCsharp,
    FaGolang,
    FaSwift,
  ];
  return (
    <>
      <section className="w-full flex flex-col items-center gap-10 ">
        <p className="text-4xl font-black max-w-2xl text-center">
          Utilizado por desenvolvedores das principais tecnologias do mercado
        </p>
        <div className="flex flex-row justify-between w-full items-center flex-wrap text-6xl text-bodycolor">
          {iconsArray.map((Icon) => (
            <Icon className="cursor-pointer hover:shadow-md p-1 rounded-xl transition duration-300" />
          ))}
          {/* <FaAngular  />
                <FaVuejs />
                <FaReact />
                <FaJava />
                <SiCsharp />
                <FaGolang />
                <FaSwift /> */}
        </div>
      </section>
    </>
  );
};

export default UsedBy;
