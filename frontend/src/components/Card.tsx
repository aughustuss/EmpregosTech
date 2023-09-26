"use client";

import TagCard from "./Cards/TagCard";

import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlinePlus,
} from "react-icons/ai";

const Card = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg hover:shadow-md hover:transition  ">
      <div className="flex flex-row items-center my-4 ml-[24px]  gap-x-4">
        <img
          className="w-14 h-14 rounded-full shadow-lg"
          src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
        />
        <div className="flex flex-row justify-between w-full">
          <div>
          <h5 className="mb-1 text-xl font-normal text-gray-800">
            name lastname
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            FullStack Developer
          </span>
          </div>
          <div className="flex flex-col mr-[24px] mt-2">
            <h3 className="font-bold text-base text-center ">100+ </h3>
            <h2 className="font-light text-sm">Conexões</h2>
        </div>
        
        </div>
      </div>
      <div className="flex gap-x-2 ml-[24px]  ">
        <TagCard text="#It" />
        <TagCard text="#Tech" />
        <TagCard text="#Design" />
        <TagCard text="#React" />
      </div>
   
      <div className="flex mt-2. space-x-3 md:mt-6 items-center justify-end mb-4 mx-5">
        <div className="flex flex-row gap-x-2">
          <div>
            <AiOutlineInstagram size={24} />
          </div>
          <AiOutlineGithub size={24} />
        </div>
        <a
          href="#"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg w-full justify-center gap-x-2"
        >
          <AiOutlinePlus size={14} />
          Ver Perfil
        </a>
      </div>
    </div>
  );
};

export default Card;
