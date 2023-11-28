"use client";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import React, { useContext, useEffect, useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { TbExternalLink } from "react-icons/tb";
import Button from "@/components/Button";
import { GetUserInfo } from "@/helpers/apiHelper";
import UserLoginContext from "@/contexts/UserLoginContext";
import { UserResponseInterface } from "@/shared/@types/userResponseInterface";
const Profile = () => {
  const router = useRouter();
  const { userPayload } = useContext(UserLoginContext);
  const [userData, setUserData] = useState<UserResponseInterface>();
  const [gotError, setGotError] = useState<boolean>(false);
  const [gotCvError, setGotCvError] = useState<boolean>(false);
  const getUserInfoBasedOnItsToken = () => {
    const res = GetUserInfo(userPayload);
    res
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        if (err.response.data === "Currículo não encontrado para o candidato") {
          setGotCvError(true);
        } else if (
          err.response.data === "Candidato não encontrado para o usuário"
        ) {
          setGotError(true);
        }
      });
  };
  useEffect(() => {
    getUserInfoBasedOnItsToken();
  }, [userPayload]);
  return (
    <>
      <main className="relative h-full w-full">
        <NavBar />
        <div className="flex flex-col gap-y-6 h-auto px-8 my-[100px] text-body w-full">
          <section className="h-auto w-full">
            {!gotError || !gotCvError && (
              <div className="shadow-md p-4 rounded-xl flex flex-col gap-y-6 h-[400px] w-full items-center justify-between">
                <div className="flex flex-col items-center gap-x-2 w-full justify-center md:justify-start">
                  <img
                    className="w-20 h-20 rounded-full"
                    src="https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
                  />
                  <div className="w-full md:w-2/3 flex flex-col gap-y-4 items-center">
                    <p className="text-title font-black">
                      {userData?.user.userFirstName}{" "}
                      {userData?.user.userLastName}
                    </p>
                    <p className="text-subtitle">
                      {userData?.curriculum.userCurriculumRole} -{" "}
                      <span>
                        {userData?.curriculum.userCurriculumSeniority}
                      </span>{" "}
                    </p>
                    <div className="flex flex-col w-fit gap-1 flex-wrap">
                      <a
                        target="_blank"
                        href={userData?.curriculum.linkGithub}
                        className="bg-primary text-offwhite px-4 py-2 hover:bg-primary/80 transition duration-300 rounded-xl flex flex-row items-center gap-x-4"
                      >
                        Link para GitHub <TbExternalLink />
                      </a>
                      <a
                        target="_blank"
                        href={userData?.curriculum.linkInstagram}
                        className="bg-primary text-offwhite px-4 py-2 hover:bg-primary/80 transition duration-300 rounded-xl flex flex-row items-center gap-x-4"
                      >
                        Link para Instagram <TbExternalLink />
                      </a>
                      <a
                        target="_blank"
                        href={userData?.curriculum.linkPortifolio}
                        className="bg-primary text-offwhite px-4 py-2 hover:bg-primary/80 transition duration-300 rounded-xl flex flex-row items-center gap-x-4"
                      >
                        Link para o Portfólio <TbExternalLink />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )} 
            
            {gotError && (
              <div className="flex flex-col gap-y-2 items-center mt-[15%] text-center gap-x-2 min-h-screen ">
                <h1>
                  Parece que você ainda não completou o seu cadastro. Complete
                  para ter acesso ao seu perfil
                </h1>
                <Button
                  type="button"
                  text="Completar cadastro como candidato"
                  onClick={() => router.push("/completeCandidate")}
                />
                <Button
                  type="button"
                  text="Completar cadastro como empresa"
                  onClick={() => router.push("/completeEnterprise")}
                />
              </div>
            )} 
            {gotCvError && (
              <>
              <div className="flex flex-col gap-y-2 items-center mt-[15%] text-center gap-x-2 min-h-screen ">
                <h1>
                  Parece que você ainda não possui um currículo em cadastro. Crie seu currículo para ter acesso ao perfil.
                </h1>
                <Button
                  type="button"
                  text="Criar currículo"
                  onClick={() => router.push("/createCurriculum")}
                />
              </div>
              </>
            )}
          </section>

          {/* Currículo */}
          {userData?.user.userRole == "CANDIDATE" && (
            <section className="p-4 shadow-md rounded-xl flex flex-col gap-y-6 w-full text-body font-cv">
              {userData?.curriculum ? (
                <>
                  <h1 className="text-base">
                    Currículo de {userData?.user.userFirstName}:{" "}
                  </h1>
                  <div className="px-2 sm:px-4 md:px-6 lg:px-8">
                    <div className="border p-6 rounded-xl flex flex-col gap-y-6 ">
                      {/* Titulo pessoa */}
                      <div className="flex flex-col gap-y-1">
                        <h1 className="text-3xl font-bold">
                          {userData?.user.userFirstName}{" "}
                          {userData?.user.userLastName}
                        </h1>
                        <p className="font-bold text-subtitle">
                          {userData?.curriculum.userCurriculumRole}
                        </p>
                      </div>
                      {/* Email, localizacao e telefone */}
                      <div className="flex flex-row items-center justify-between w-full max-w-[700px] flex-wrap">
                        <p className="flex flex-row items-center gap-x-2">
                          <IoMdMail />
                          {userData?.user.userEmail}
                        </p>
                        <p className="flex flex-row items-center gap-x-2">
                          <FaPhoneAlt />
                          {userData?.user.userMobilePhone}
                        </p>
                        <p className="flex flex-row items-center gap-x-2">
                          <IoLocationSharp />
                          Localizacao
                        </p>
                      </div>
                      {/* Links profissionais */}
                      <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-subtitle">
                          Links profissionais
                        </h1>
                        <p className="flex flex-row items-center gap-x-2">
                          <AiOutlineGlobal />
                          {userData?.curriculum.linkPortifolio}
                        </p>
                        <p className="flex flex-row items-center gap-x-2">
                          <FaGithub />
                          {userData?.curriculum.linkGithub}
                        </p>
                        <p className="flex flex-row items-center gap-x-2">
                          <FaInstagram />
                          {userData?.curriculum.linkInstagram}
                        </p>
                      </div>

                      {/* Perfil */}
                      <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-subtitle">Perfil</h1>
                        <p>{userData.curriculum.linkProfile}</p>
                      </div>

                      {/* Objetivo */}

                      <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-subtitle">Objetivo</h1>
                        <p>{userData.curriculum.objetivo}</p>
                      </div>

                      {/* Tecnologias */}

                      <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-subtitle">Tecnologias</h1>
                        {userData?.curriculum.candidateStacks?.map((stack) => (
                          <>{stack.stackName}</>
                        ))}
                      </div>

                      {/* Experiencias */}

                      <div className="flex flex-col gap-y-4 w-full">
                        <h1 className="font-bold text-subtitle">
                          Experiências
                        </h1>
                        {userData?.curriculum.experiences?.map((exp) => (
                          <>
                            <div className="flex md:flex-row flex-col gap-4">
                              <div className="w-full">
                                {exp.ecrRxperienceRole}
                              </div>
                              <div className="w-full">
                                {exp.ecrExperienceEnterprise}
                              </div>
                            </div>
                            <div>{exp.ecrExperienceType}</div>
                            <div className="flex md:flex-row flex-col gap-4  items-center">
                              <div className="w-full">
                                {new Date(
                                  exp.ecrExperienceStartDate
                                ).toDateString()}
                              </div>
                              <div className="w-full">
                                {new Date(
                                  exp.ecrExperienceEndDate
                                ).toDateString()}
                              </div>
                            </div>
                            <p>{exp.ecrExperienceDescription}</p>
                          </>
                        ))}
                      </div>

                      {/* Formacao */}

                      <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-subtitle">
                          Formação Acadêmica
                        </h1>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Tempore, soluta sed? Ratione eius ut molestias
                          dolores fuga accusantium facere libero ullam cum
                          repellendus?
                        </p>
                      </div>

                      {/* Cursos */}

                      <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-subtitle">
                          Cursos Extracurriculares
                        </h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                          {userData?.curriculum.courses?.map((course) => (
                            <>
                              <p>
                                {course.cscrCourseName} -{" "}
                                <span>{course.cscrCourseInstitution}</span>
                              </p>
                            </>
                          ))}
                        </div>
                      </div>

                      {/* Idiomas */}
                      <div className="flex flex-col gap-y-4">
                        <h1 className="font-bold text-subtitle">Idiomas</h1>
                        <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-4">
                          {userData?.curriculum.languages?.map((language) => (
                            <p>
                              {language.lcrLanguageName} -{" "}
                              {language.lcrLanguageProficiency}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  Parece que você ainda nao possui um currículo. Preencha o seu
                  agora:{" "}
                  <Button
                    type="button"
                    text="Criar currículo"
                    onClick={() => router.push("/createCurriculum")}
                  />
                </>
              )}
            </section>
          )}
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Profile;
