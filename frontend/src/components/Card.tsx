"use client";

import { UserResponseUser } from "@/shared/@types/userResponseInterface";
import TagCard from "./Cards/TagCard";

import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlinePlus,
} from "react-icons/ai";
import { CandidateUserResponse } from "@/shared/@types/candidateUserResponseInterface";
interface UserCardProps {
  userData: CandidateUserResponse
}
const Card = ({userData}: UserCardProps) => {
  return (
    <div className="w-full bg-transparent border rounded-lg py-6 hover:shadow-md hover:transition flex flex-col gap-y-4 px-2">
      <div className="flex flex-row items-center  gap-4">
        <img
          className="w-14 h-14 rounded-full"
          src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
        />
        <div className="flex flex-row justify-between w-full">
          <div>
            <h5 className="mb-1 text-xl font-black text-gray-800">
              {userData?.user?.userFirstName} {" "} {userData?.user?.userLastName}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {userData.cv?.ccrUserRole}
            </span>
          </div>
          {/* <div className="flex flex-col mr-[24px] mt-2">
            <h3 className="font-bold text-base text-center ">100+ </h3>
            <h2 className="font-light text-sm">Conexões</h2>
          </div> */}
        </div>
      </div>
      <div className="flex gap-2 flex-wrap text-sm">
        {userData.stacks?.map((stack) => (
          <TagCard key={stack.id} text={stack.stackName} />
        ))}
      </div>

      <div className="flex items-center justify-end flex-row gap-x-4">
        <div className="flex flex-row gap-x-2">
          <a target="_blank" href={userData.cv?.linkInstagram}>
            <AiOutlineInstagram size={24} />
          </a>
          <a target="_blank" href={userData.cv?.linkGitHub}>
            <AiOutlineGithub size={24} />
          </a>
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
