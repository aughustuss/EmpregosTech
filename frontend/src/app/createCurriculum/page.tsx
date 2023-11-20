"use client";

import Button from "@/components/Button";
import InformationContainer from "@/components/InformationContainer";
import Input from "@/components/Input";
import NavBar from "@/components/NavBar/NavBar";
import { CandidateStackProps } from "@/shared/@types/candidateStackInterface";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import { CandidateExpsProps } from "@/shared/@types/candidateExpsInterface";
import { CandidateCourseProps } from "@/shared/@types/candidateCourseInterface";
import { CandidateLanguageProps, LanguageInterfaceEnumProps } from "@/shared/@types/candidateLanguageInterface";
import Select from "@/components/Select";
import Footer from "@/components/Footer/Footer";

const CreateCurriculum = () => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [expandedAccordion, setExpandedAccordion] = useState<string>("techacc");
  const handleAccordionChange = (uuid: string) => {
    setExpandedAccordion(uuid);
  };
  const isAccordionExpanded = (uuid: string) => uuid === expandedAccordion;

  const [candidateStacks, setCandidateStacks] = useState<CandidateStackProps[]>(
    []
  );
  const [stackInputCount, setStackInputCount] = useState<number>(0);

  const [candidateExps, setCandidateExps] = useState<CandidateExpsProps[]>([]);
  const [expInputCount, setExpInputCount] = useState<number>(0);

  const [candidateCourses, setCandidateCourses] = useState<CandidateCourseProps[]>([]);
  const [csInputCount, setCsInputCount] = useState<number>(0);

  const [candidateLanguages, setCandidateLanguages] = useState<CandidateLanguageProps[]>([]);
  const [lnInputCount, setLnInputCount] = useState<number>(0);


  const languageProficiency: Array<string> = [
    'APRENDENDO',
    'INICIANTE',
    'INTERMEDIÁRIO',
    'AVANÇADO',
    'FLUENTE'
  ]

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const organizeExpFormData = (formData: any) => {
    const expKeys = Object.keys(formData).filter((key) =>
      key.startsWith("exp-")
    );
    const exps: Array<any> = [];
    expKeys.forEach((expKey: any) => {
      const expNumberMatch = expKey.match(/\d+/);

      if (expNumberMatch) {
        const expNumber: string = expNumberMatch[0];
        const expObject = exps.find((exp) => exp[`exp-${expNumber}`]);
        if (expObject) {
          expObject[expKey] = formData[expKey];
        } else {
          const newExp = {
            [`exp-${expNumber}`]: { [expKey]: formData[expKey] },
          };
          exps.push(newExp);
        }
      }
    });

    return exps;
  };

  const organizeCourseFormData = (
    formData: any,
    existingCourses: CandidateCourseProps[]
  ) => {
    const courseKeys = Object.keys(formData).filter((key) =>
      key.startsWith("cs-")
    );
    const courses: CandidateCourseProps[] = [...existingCourses];

    courseKeys.forEach((courseKey: any) => {
      const courseNumberMatch = courseKey.match(/\d+/);

      if (courseNumberMatch) {
        const courseNumber: string = courseNumberMatch[0];
        const existingCourseIndex = courses.findIndex(
          (course) => course.courseName === formData[`cs-${courseNumber}-name`]
        );

        if (existingCourseIndex !== -1) {
          courses[existingCourseIndex] = {
            ...courses[existingCourseIndex],
            courseName: formData[`cs-${courseNumber}-name`],
            courseInstitution: formData[`cs-${courseNumber}-institution`],
            courseStartDate: formData[`cs-${courseNumber}-startdate`],
            courseEndDate: formData[`cs-${courseNumber}-enddate`],
          };
        } else {
          const newCourse: CandidateCourseProps = {
            courseName: formData[`cs-${courseNumber}-name`],
            courseInstitution: formData[`cs-${courseNumber}-institution`],
            courseStartDate: formData[`cs-${courseNumber}-startdate`],
            courseEndDate: formData[`cs-${courseNumber}-enddate`],
          };
          courses.push(newCourse);
        }
      }
    });

    return courses;
  };

  const organizeLanguageFormData = (formData: any, existingLanguages: CandidateLanguageProps[]) => {
    const langKeys = Object.keys(formData).filter((key) => key.startsWith("lang-"));
    const languages: CandidateLanguageProps[] = [...existingLanguages];
  
    langKeys.forEach((langKey: any) => {
      const langNumberMatch = langKey.match(/\d+/);
  
      if (langNumberMatch) {
        const langNumber: string = langNumberMatch[0];
        const existingLangIndex = languages.findIndex((lang) => lang.languageName === formData[`lang-${langNumber}-name`]);
  
        if (existingLangIndex !== -1) {
          languages[existingLangIndex] = {
            ...languages[existingLangIndex],
            languageName: formData[`lang-${langNumber}-name`],
            languageProficiency: formData[`lang-${langNumber}-proficiency`],
          };
        } else {
          const newLanguage: CandidateLanguageProps = {
            languageName: formData[`lang-${langNumber}-name`],
            languageProficiency: formData[`lang-${langNumber}-proficiency`],
          };
          languages.push(newLanguage);
        }
      }
    });
  
    // Now you have an array of organized languages
    return languages;
  };

  const saveNewStack = (index: number) => {
    const stackValue = getValues(`stack-${index}`);
    setCandidateStacks((prevStacks) => {
      const existingStackIndex = index < prevStacks.length ? index : -1;
      if (existingStackIndex !== -1) {
        const updatedStacks = [...prevStacks];
        updatedStacks[existingStackIndex] = { stackname: stackValue };
        return updatedStacks;
      } else {
        return [...prevStacks, { stackname: stackValue }];
      }
    });
  };

  const saveNewExperience = (index: number) => {
    const newExperience: CandidateExpsProps = {
      experienceRole: getValues(`exp-${index}-role`),
      experienceEnterprise: getValues(`exp-${index}-enterprise`),
      experienceDescription: getValues(`exp-${index}-description`),
      experienceType: getValues(`exp-${index}-type`),
      experienceStartDate: getValues(`exp-${index}-startdate`),
      experienceEndDate: getValues(`exp-${index}-enddate`),
    };
    setCandidateExps((prevExperiences) => [...prevExperiences, newExperience]);
  };

  const saveNewCourse = (index: number) => {
    const newCourse: CandidateCourseProps = {
      courseName: getValues(`cs-${index}-name`),
      courseInstitution: getValues(`cs-${index}-institution`),
      courseStartDate: getValues(`cs-${index}-startdate`),
      courseEndDate: getValues(`cs-${index}-enddate`),
    };
    const courseExists = candidateCourses.some(
      (course) => course.courseName === newCourse.courseName
    );

    if (!courseExists) {
      setCandidateCourses((prevCourses) => [...prevCourses, newCourse]);
    } else {
      console.log("Curso com este nome ja existe:", newCourse.courseName);
    }
  };

  const saveNewLanguage = (index: number) => {
    const newLanguage: CandidateLanguageProps = {
      languageName: getValues(`ln-${index}-name`),
      languageProficiency: getValues(`ln-${index}-proficiency`),
    };
    const languageExists = candidateLanguages.some((lang) => lang.languageName === newLanguage.languageName);
  
    if (!languageExists) {
      setCandidateLanguages((prevLanguages) => [...prevLanguages, newLanguage]);
    } else {
      console.log('Idioma já cadastrado:', newLanguage.languageName);
    }
  };

  const deleteNewInput = (
    inputId: number,
    array: any[],
    setArray: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    const updatedStacks = array.filter((_, index) => index !== inputId);
    setArray(updatedStacks);
  };

  const handleNewInput = (
    action: number,
    setAction: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setAction(action + 1);
  };


  const submitCvInfos = (data: any) => {
    const exps = organizeExpFormData(candidateExps);
    const courses = organizeCourseFormData(
      candidateCourses,
      candidateCourses
    );
    const languages = organizeLanguageFormData(candidateLanguages, candidateLanguages);
    console.log(data);
  };

  return (
    <>
      <NavBar />
      <main className="pb-[100px] my-[100px] mx-10 lex flex-col gap-y-4 w-full md:w-2/3 p-8 shadow-lg rounded-xl">
        <Accordion
          onChange={(uuid) => handleAccordionChange(uuid.toString())}
          className="flex flex-col gap-y-4"
          allowMultipleExpanded={false}
          preExpanded={[1]}
        >
          <p className="border-b border-bordercolor text-lg">
            Informações já preenchidas
          </p>
          <AccordionItem uuid={"infoacc"} className="border-2 rounded-xl p-2">
            <AccordionItemHeading>
              <AccordionItemButton className="flex flex-row items-center justify-between">
                <p>Informações pessoais</p>
                <p>
                  {isAccordionExpanded("infoacc") ? (
                    <MdArrowDropUp className="rotate-0" />
                  ) : (
                    <MdArrowDropUp className="rotate-180" />
                  )}
                </p>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="flex flex-col gap-y-6 w-full">
                <div className="flex flex-col gap-y-6 px-4 ">
                  <div className="flex flex-col gap-y-2">
                    <InformationContainer
                      text="Nome completo do usuario"
                      label="Nome completo"
                    />
                    <InformationContainer
                      text="Email"
                      label="Título de perfil"
                    />
                    <InformationContainer
                      text="Email"
                      label="Endereço de email"
                    />
                    <InformationContainer
                      text="Email"
                      label="Endereço do GitHub"
                    />
                    <InformationContainer
                      text="Email"
                      label="Endereço do Instagram"
                    />
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
          <form
            onSubmit={handleSubmit(submitCvInfos)}
            className="w-full flex flex-col gap-y-4 pt-6 justify-between"
          >
            <div className="flex flex-col gap-y-6 px-4 w-full">
              <p className="border-b border-bordercolor text-lg">
                Informações para preencher
              </p>

              <AccordionItem
                uuid={"techacc"}
                className="border-2 rounded-xl p-2"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Tecnologias</p>
                    <p>
                      {isAccordionExpanded("techacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex flex-col gap-y-2 w-full">
                    <div className="flex flex-col w-full gap-2">
                      {[...Array(stackInputCount)].map((_, index) => (
                        <div
                          key={index}
                          className="flex flex-row items-center h-auto min-h-[40px] gap-x-2 w-full flex-wrap"
                        >
                          <Input
                            id={`stack-${index}`}
                            type="text"
                            register={register}
                            value={candidateStacks[index] || ""}
                            placeholder="Nome da tecnologia..."
                          />
                          <Button
                            type="button"
                            text={<FaCheck />}
                            onClick={() => saveNewStack(index)}
                          />
                          <Button
                            type="button"
                            text={<MdDelete />}
                            onClick={() =>
                              deleteNewInput(
                                index,
                                candidateStacks,
                                setCandidateStacks
                              )
                            }
                          />
                        </div>
                      ))}

                      {candidateStacks.length > 0 && (
                        <p>Stacks adicionadas: </p>
                      )}
                      <div className="flex flex-row items-center flex-wrap gap-1">
                        {candidateStacks.map((stack, index) => (
                          <div
                            key={index}
                            className="flex flex-row flex-wrap gap-1 text-xs text-bodycolor"
                          >
                            <p>
                              {stack.stackname.toLocaleUpperCase()}
                              {index !== candidateStacks.length ? "," : ""}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button
                      type="button"
                      onClick={() =>
                        handleNewInput(stackInputCount, setStackInputCount)
                      }
                      text="Adicionar + Tecnologia"
                    ></Button>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid={"xpacc"} className="border-2 rounded-xl p-2">
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Experiências</p>
                    <p>
                      {isAccordionExpanded("xpacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex flex-col gap-y-2 w-full">
                    <div className="flex flex-col w-full gap-2">
                      {[...Array(expInputCount)].map((_, index) => (
                        <div
                          key={index}
                          className="flex flex-col h-auto min-h-[200px] gap-1 w-full"
                        >
                          <Input
                            id={`exp-${index}-role`}
                            type="text"
                            register={register}
                            placeholder="Cargo exercido"
                          />
                          <Input
                            id={`exp-${index}-enterprise`}
                            type="text"
                            register={register}
                            placeholder="Nome da empresa"
                          />
                          <Input
                            id={`exp-${index}-experiencetype`}
                            type="text"
                            register={register}
                            placeholder="Tipo de contrato"
                          />
                          <div className="flex flex-row gap-x-2 items-center flex-wrap">
                            <Input
                              id={`exp-${index}-startdate`}
                              type="date"
                              register={register}
                              placeholder="Data de início"
                              label="Data início"
                            />
                            <Input
                              id={`exp-${index}-enddate`}
                              type="date"
                              register={register}
                              label="Data fim"
                              placeholder="Data de término"
                            />
                          </div>
                          <textarea
                            rows={6}
                            placeholder="Descrição"
                            className="border-2 border-bordercolor rounded-xl p-2"
                          />

                          <div className="flex flex-row gap-x-2 w-full">
                            <Button
                              type="button"
                              text={<FaCheck />}
                              onClick={() => saveNewExperience(index)}
                            />
                            <Button
                              type="button"
                              text={<MdDelete />}
                              onClick={() =>
                                deleteNewInput(
                                  index,
                                  candidateExps,
                                  setCandidateExps
                                )
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      type="button"
                      onClick={() =>
                        handleNewInput(expInputCount, setExpInputCount)
                      }
                      text="Adicionar + Experiência"
                    ></Button>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid={"csacc"} className="border-2 rounded-xl p-2">
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Cursos</p>
                    <p>
                      {isAccordionExpanded("csacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex flex-col gap-y-2 w-full">
                    <div className="flex flex-col w-full gap-2">
                      {[...Array(csInputCount)].map((_, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center min-h-[100px] h-auto gap-2 w-full"
                        >
                          <Input
                            id={`cs-${index}-name`}
                            type="text"
                            register={register}
                            placeholder="Nome do curso"
                          />
                          <Input
                            id={`cs-${index}-institution`}
                            type="text"
                            register={register}
                            placeholder="Instituição do curso"
                          />
                          <div className="flex flex-row items-center gap-x-2 w-full flex-wrap">
                            <Input
                              id={`cs-${index}-startdate`}
                              type="date"
                              register={register}
                              label="Início do curso"
                            />
                            <Input
                              id={`cs-${index}-enddate`}
                              type="date"
                              register={register}
                              label="Término do curso"
                            />
                          </div>
                          <div className="flex flex-row items-center gap-x-2 w-full">
                            <Button
                              type="button"
                              text={<FaCheck />}
                              onClick={() => saveNewCourse(index)}
                            />
                            <Button
                              type="button"
                              text={<MdDelete />}
                              onClick={() =>
                                deleteNewInput(
                                  index,
                                  candidateCourses,
                                  setCandidateCourses
                                )
                              }
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button
                      type="button"
                      onClick={() =>
                        handleNewInput(csInputCount, setCsInputCount)
                      }
                      text="Adicionar + Curso"
                    ></Button>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid={"lnacc"} className="border-2 rounded-xl p-2">
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Idiomas</p>
                    <p>
                      {isAccordionExpanded("lnacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="flex flex-col gap-y-2 w-full">
                    <div className="flex flex-col w-full gap-2">
                      {[...Array(lnInputCount)].map((_, index) => (
                        <div
                          key={index}
                          className="flex flex-row items-center min-h-[100px] h-auto gap-2 w-full flex-wrap"
                        >
                          <Input
                            id={`ln-${index}-name`}
                            type="text"
                            register={register}
                            placeholder="Idioma"
                          />
                          <Select
                            arrayToMap={languageProficiency}
                            text="Selecione seu nível de proficiência"
                            selectId={`ln-${index}-proficiency`}
                            register={register}
                            onSelect={handleOptionSelect}
                          />
                          <Button
                            type="button"
                            text={<FaCheck />}
                            onClick={() => saveNewLanguage(index)}
                          />
                          <Button
                            type="button"
                            text={<MdDelete />}
                            onClick={() => deleteNewInput(index, candidateLanguages, setCandidateLanguages)}
                          />
                        </div>
                      ))}
                    </div>
                    <Button
                      type="button"
                      onClick={() => handleNewInput(lnInputCount, setLnInputCount)}
                      text="Adicionar + Idioma"
                    ></Button>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </div>
            <Button type="submit" text="Salvar" />
          </form>
        </Accordion>
      </main>
      <Footer/>
    </>
  );
};

export default CreateCurriculum;
