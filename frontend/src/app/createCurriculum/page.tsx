"use client";

import Button from "@/components/Button";
import InformationContainer from "@/components/InformationContainer";
import Input from "@/components/Input";
import NavBar from "@/components/NavBar/NavBar";
import { CandidateStackProps } from "@/shared/@types/candidateStackInterface";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
import {
  CandidateLanguageProps,
  LanguageInterfaceEnumProps,
} from "@/shared/@types/candidateLanguageInterface";
import Footer from "@/components/Footer/Footer";
import { CourseRegister, CurriculumCreate, ExpRegister, LanguageRegister, StackRegister } from "@/helpers/apiHelper";
import { EnumType } from "typescript";
import { CurriculumInfosCreate } from "@/shared/@types/curriculumInfos";

const CreateCurriculum = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>("techacc");
  const handleAccordionChange = (uuid: string) => {
    setExpandedAccordion(uuid);
  };
  const isAccordionExpanded = (uuid: string) => uuid === expandedAccordion;

  const [candidateStacks, setCandidateStacks] = useState<CandidateStackProps[]>(
    []
  );
  const [candidateExps, setCandidateExps] = useState<CandidateExpsProps[]>([]);
  const [candidateCourses, setCandidateCourses] = useState<
    CandidateCourseProps[]
  >([]);
  const [candidateLanguages, setCandidateLanguages] = useState<
    CandidateLanguageProps[]
  >([]);

  const languageProficiency: Array<string> = [
    "APRENDENDO",
    "INICIANTE",
    "INTERMEDIÁRIO",
    "AVANÇADO",
    "FLUENTE",
  ];

  const experienceType: Array<string> = [
    "ESTÁGIO",
    "CLT",
    "PJ"
  ]

  const seniority: Array<string> = [
    "ESTAGIÁRIO",
    "JUNIOR",
    "PLENO",
    "SÊNIOR",
    "STAFF_ENGINEER"
  ]

  const { register, handleSubmit, getValues, control } = useForm();


  const organizeExpFormData = (
    formData: any,
    existingExps: CandidateExpsProps[]
  ) => {
    const expKeys = Object.keys(formData).filter((key) =>
      key.startsWith("cs-")
    );
    const exps: CandidateExpsProps[] = [...existingExps];

    expKeys.forEach((expKey: any) => {
      const expNumberMath = expKey.match(/\d+/);

      if (expNumberMath) {
        const expNumber: string = expNumberMath[0];
        const existingExpIndex = exps.findIndex(
          (exp) => exp.ecrRxperienceRole === formData[`exp-${expNumber}-role`]
        );

        if (existingExpIndex !== -1) {
          exps[existingExpIndex] = {
            ...exps[existingExpIndex],
            ecrRxperienceRole: formData[`exp-${expNumber}-role`],
            ecrExperienceDescription: formData[`exp-${expNumber}-description`],
            ecrExperienceEnterprise: formData[`exp-${expNumber}-enterprise`],
            ecrExperienceType: formData[`exp-${expNumber}-type`],
            ecrExperienceEndDate: formData[`exp-${expNumber}-enddate`],
            ecrExperienceStartDate: formData[`exp-${expNumber}-startdate`],

          };
        } else {
          const newExp: CandidateExpsProps = {
            ecrRxperienceRole: formData[`exp-${expNumber}-role`],
            ecrExperienceDescription: formData[`exp-${expNumber}-description`],
            ecrExperienceEnterprise: formData[`exp-${expNumber}-enterprise`],
            ecrExperienceType: formData[`exp-${expNumber}-type`],
            ecrExperienceEndDate: formData[`exp-${expNumber}-enddate`],
            ecrExperienceStartDate: formData[`exp-${expNumber}-startdate`],
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
          (course) => course.cscrCourseName === formData[`cs-${courseNumber}-name`]
        );

        if (existingCourseIndex !== -1) {
          courses[existingCourseIndex] = {
            ...courses[existingCourseIndex],
            cscrCourseName: formData[`cs-${courseNumber}-name`],
            cscrCourseInstitution: formData[`cs-${courseNumber}-institution`],
            cscrCourseStartDate: formData[`cs-${courseNumber}-startdate`],
            cscrCourseEndDate: formData[`cs-${courseNumber}-enddate`],
          };
        } else {
          const newCourse: CandidateCourseProps = {
            cscrCourseName: formData[`cs-${courseNumber}-name`],
            cscrCourseInstitution: formData[`cs-${courseNumber}-institution`],
            cscrCourseStartDate: formData[`cs-${courseNumber}-startdate`],
            cscrCourseEndDate: formData[`cs-${courseNumber}-enddate`],
          };
          courses.push(newCourse);
        }
      }
    });

    return courses;
  };

  const organizeLanguageFormData = (
    formData: any,
    existingLanguages: CandidateLanguageProps[]
  ) => {
    const langKeys = Object.keys(formData).filter((key) =>
      key.startsWith("lang-")
    );
    const languages: CandidateLanguageProps[] = [...existingLanguages];

    langKeys.forEach((langKey: any) => {
      const langNumberMatch = langKey.match(/\d+/);

      if (langNumberMatch) {
        const langNumber: string = langNumberMatch[0];
        const existingLangIndex = languages.findIndex(
          (lang) => lang.lcrLanguageName === formData[`lang-${langNumber}-name`]
        );

        if (existingLangIndex !== -1) {
          languages[existingLangIndex] = {
            ...languages[existingLangIndex],
            lcrLanguageName: formData[`lang-${langNumber}-name`],
            lcrLanguageProficiency: formData[`lang-${langNumber}-proficiency`],
          };
        } else {
          const newLanguage: CandidateLanguageProps = {
            lcrLanguageName: formData[`lang-${langNumber}-name`],
            lcrLanguageProficiency: formData[`lang-${langNumber}-proficiency`],
          };
          languages.push(newLanguage);
        }
      }
    });

    return languages;
  };

  const saveNewStack = (index: number) => {
    const stackValue = getValues(`stack-${index}`);
    setCandidateStacks((prevStacks) => {
      const existingStackIndex = index < prevStacks.length ? index : -1;
      if (existingStackIndex !== -1) {
        const updatedStacks = [...prevStacks];
        updatedStacks[existingStackIndex] = { stackName: stackValue };
        return updatedStacks;
      } else {
        return [...prevStacks, { stackName: stackValue }];
      }
    });
  };

  const saveNewExperience = (index: number) => {
    const newExperience: CandidateExpsProps = {
      ecrRxperienceRole: getValues(`exp-${index}-role`),
      ecrExperienceEnterprise: getValues(`exp-${index}-enterprise`),
      ecrExperienceDescription: getValues(`exp-${index}-description`),
      ecrExperienceType: getValues(`exp-${index}-type`),
      ecrExperienceStartDate: getValues(`exp-${index}-startdate`),
      ecrExperienceEndDate: getValues(`exp-${index}-enddate`),
    };
    setCandidateExps((prevExperiences) => [...prevExperiences, newExperience]);
  };

  const saveNewCourse = (index: number) => {
    const newCourse: CandidateCourseProps = {
      cscrCourseName: getValues(`cs-${index}-name`),
      cscrCourseInstitution: getValues(`cs-${index}-institution`),
      cscrCourseStartDate: getValues(`cs-${index}-startdate`),
      cscrCourseEndDate: getValues(`cs-${index}-enddate`),
    };
    const courseExists = candidateCourses.some(
      (course) => course.cscrCourseName === newCourse.cscrCourseName
    );

    if (!courseExists) {
      setCandidateCourses((prevCourses) => [...prevCourses, newCourse]);
    } else {
      console.log("Curso com este nome ja existe:", newCourse.cscrCourseName);
    }
  };

  const saveNewLanguage = (index: number) => {
    const newLanguage: CandidateLanguageProps = {
      lcrLanguageName: getValues(`ln-${index}-name`),
      lcrLanguageProficiency: getValues(`ln-${index}-proficiency`),
    };
    const languageExists = candidateLanguages.some(
      (lang) => lang.lcrLanguageName === newLanguage.lcrLanguageName
    );

    if (!languageExists) {
      setCandidateLanguages((prevLanguages) => [...prevLanguages, newLanguage]);
    } else {
      console.log("Idioma já cadastrado:", newLanguage.lcrLanguageName);
    }
  };

  const deleteNewInput = (
    inputId: number,
    array: any[],
    setArray: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    setArray([...array.slice(0, inputId), ...array.slice(inputId + 1)]);
  };

  const handleInputAppend = (
    array: any[],
    setArray: React.Dispatch<React.SetStateAction<any[]>>
  ) => {
    setArray([...array, ""]);
  };

  const submitCvInfos = async (data: any) => {
    const exps = organizeExpFormData(candidateExps, candidateExps);
    const courses = organizeCourseFormData(candidateCourses, candidateCourses);
    const languages = organizeLanguageFormData(
      candidateLanguages,
      candidateLanguages
    );
    const cvInfos: CurriculumInfosCreate = {
      ccrUserRole: getValues("profilesubtitle"),
      linkGitHub: getValues("gitlinkacc"),
      ccrUserSeniority: getValues("profileseniority"),
      linkInstagram: getValues("profileinstalink"),
      linkPortifolio: getValues("profileportfoliolink"),
      objetivo: getValues("candidateobjective"),
      profile: getValues("candidateprofile"),
    };
    await Promise.all([
      CurriculumCreate(cvInfos),
      LanguageRegister(languages.slice(1)),
      ExpRegister(exps.slice(1)),
      CourseRegister(courses.slice(1)),
    ]).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err);
    })
  };

  return (
    <>
      <NavBar />
      <main className="pb-[100px] my-[100px] mx-auto px-10 lex flex-col gap-y-4 w-full md:w-2/3 p-8 shadow-lg rounded-xl">
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
                      label="Endereço de email"
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
            <div className="flex flex-col gap-y-6 w-full">
              <p className="border-b border-bordercolor text-lg">
                Informações para preencher
              </p>
              <AccordionItem
                uuid={"roleacc"}
                className="border-2 rounded-xl p-2"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Subtítulo do perfil</p>
                    <p>
                      {isAccordionExpanded("roleacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Controller
                    render={({ field: { name, onChange, value } }) => (
                      <Input
                        id={name}
                        onChange={onChange}
                        value={value}
                        placeholder="Preencha o subtítulo do seu perfil. Ex: Desenvolvedor Web"
                        type="text"
                        required
                      />
                      
                    )}
                    name="profilesubtitle"
                    control={control}
                    defaultValue={""}
                  />
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem
                uuid={"seniorityacc"}
                className="border-2 rounded-xl p-2"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Senioridade</p>
                    <p>
                      {isAccordionExpanded("seniorityacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Controller
                    render={({ field: { name, onChange, value } }) => (
                      <select
                      className="p-2 rounded-xl border-2 border-bordercolor w-full text-sm focus:outline"
                      onChange={onChange}
                      id={name}
                    >
                      {seniority.map((seniority, index) => (
                        <option key={index} value={seniority}>
                          {seniority}
                        </option>
                      ))}
                    </select>
                    )}
                    name="profileseniority"
                    control={control}
                    defaultValue={""}
                  />
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem
                uuid={"gitlinkacc"}
                className="border-2 rounded-xl p-2"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Link para o seu Github</p>
                    <p>
                      {isAccordionExpanded("gitlinkacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Controller
                    render={({ field: { name, onChange, value } }) => (
                      <Input
                        id={name}
                        onChange={onChange}
                        value={value}
                        placeholder="Insira o link do seu Github para os recrutadores verem..."
                        type="text"
                        required
                      />
                    )}
                    name="profilegithublink"
                    control={control}
                    defaultValue={""}
                  />
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem
                uuid={"instalinkacc"}
                className="border-2 rounded-xl p-2"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Link para o seu Instagram</p>
                    <p>
                      {isAccordionExpanded("instalinkacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Controller
                    render={({ field: { name, onChange, value } }) => (
                      <Input
                        id={name}
                        onChange={onChange}
                        value={value}
                        placeholder="Insira o link para o Instagram. Para facilitar o contato..."
                        type="text"
                        required
                      />
                    )}
                    name="profileinstalink"
                    control={control}
                    defaultValue={""}
                  />
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem
                uuid={"portfolioacc"}
                className="border-2 rounded-xl p-2"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Link para o seu portfólio</p>
                    <p>
                      {isAccordionExpanded("portfolioacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Controller
                    render={({ field: { name, onChange, value } }) => (
                      <Input
                        id={name}
                        onChange={onChange}
                        value={value}
                        placeholder="Insira o link para o seu . Para facilitar o contato..."
                        type="text"
                        required
                      />
                    )}
                    name="profileportfoliolink"
                    control={control}
                    defaultValue={""}
                  />
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem
                uuid={"profacc"}
                className="border-2 rounded-xl p-2"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Perfil</p>
                    <p>
                      {isAccordionExpanded("profacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <textarea
                    rows={6}
                    placeholder="Conte um pouco sobre você, de forma breve e resumida."
                    className="border-2 border-bordercolor rounded-xl p-2 w-full"
                    {...register("candidateprofile", { required: true })}
                  />
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem
                uuid={"objacc"}
                className="border-2 rounded-xl p-2"
              >
                <AccordionItemHeading>
                  <AccordionItemButton className="flex flex-row items-center justify-between">
                    <p>Objetivo</p>
                    <p>
                      {isAccordionExpanded("objacc") ? (
                        <MdArrowDropUp className="rotate-0" />
                      ) : (
                        <MdArrowDropUp className="rotate-180" />
                      )}
                    </p>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <textarea
                    rows={6}
                    placeholder="Conte o seu objetivo de carreira, também de forma breve e resumida."
                    className="border-2 border-bordercolor rounded-xl p-2 w-full"
                    {...register("candidateobjective", { required: true })}
                  />
                </AccordionItemPanel>
              </AccordionItem>

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
                      {candidateStacks.map((stack, index) => (
                        <div
                          key={stack.stackName}
                          className="flex flex-row items-center h-auto min-h-[40px] gap-2 w-full flex-wrap"
                        >
                          <Controller
                            render={({ field: { onChange, value, name } }) => (
                              <Input
                                id={name}
                                onChange={onChange}
                                value={value}
                                placeholder="Digite o nome da tecnologia..."
                                type="text"
                              />
                            )}
                            name={`stack-${index}`}
                            control={control}
                            defaultValue={""}
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
                    </div>
                    <Button
                      type="button"
                      onClick={() =>
                        handleInputAppend(candidateStacks, setCandidateStacks)
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
                      {candidateExps.map((exp, index) => (
                        <div
                          key={exp.ecrExperienceEnterprise}
                          className="flex flex-col h-auto min-h-[200px] gap-1 w-full"
                        >
                          <Controller
                            render={({ field: { onChange, value, name } }) => (
                              <Input
                                id={name}
                                onChange={onChange}
                                value={value}
                                placeholder="Digite o cargo da sua experiência..."
                                type="text"
                              />
                            )}
                            name={`exp-${index}-role`}
                            control={control}
                            defaultValue={""}
                          />
                          <Controller
                            render={({ field: { onChange, value, name } }) => (
                              <Input
                                id={name}
                                onChange={onChange}
                                value={value}
                                placeholder="Digite o nome da empresa..."
                                type="text"
                              />
                            )}
                            name={`exp-${index}-enterprise`}
                            control={control}
                            defaultValue={""}
                          />
                          <Controller
                            render={({ field: { onChange, value, name } }) => (
                              <select
                                className="p-2 rounded-xl border-2 border-bordercolor w-full text-sm focus:outline"
                                onChange={onChange}
                                id={name}
                              >
                                {experienceType.map(
                                  (exp, index) => (
                                    <option key={index} value={exp}>
                                      {exp}
                                    </option>
                                  )
                                )}
                              </select>
                            )}
                            name={`exp-${index}-experiencetype`}
                            control={control}
                            defaultValue={""}
                          />
                          <div className="flex flex-row gap-x-2 items-center flex-wrap">
                            <Controller
                              render={({
                                field: { onChange, value, name },
                              }) => (
                                <Input
                                  id={name}
                                  onChange={onChange}
                                  value={value}
                                  label="Data de início"
                                  type="date"
                                />
                              )}
                              name={`exp-${index}-startdate`}
                              control={control}
                              defaultValue={""}
                            />
                            <Controller
                              render={({
                                field: { onChange, value, name },
                              }) => (
                                <Input
                                  id={name}
                                  onChange={onChange}
                                  value={value}
                                  label="Data de término"
                                  type="date"
                                />
                              )}
                              name={`exp-${index}-enddate`}
                              control={control}
                              defaultValue={""}
                            />
                          </div>
                          <Controller
                            render={({ field: { onChange, value, name } }) => (
                              <textarea
                                id={name}
                                onChange={onChange}
                                value={value}
                                rows={6}
                                placeholder="Informe as suas tarefas na sua experiência..."
                                className="border-2 border-bordercolor rounded-xl p-2 text-sm"
                              />
                            )}
                            name={`exp-${index}-description`}
                            control={control}
                            defaultValue={""}
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
                        handleInputAppend(candidateExps, setCandidateExps)
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
                      {candidateCourses.map((course, index) => (
                        <div
                          key={course.cscrCourseName}
                          className="flex flex-col items-center min-h-[100px] h-auto gap-2 w-full"
                        >
                          <Controller
                            render={({ field: { onChange, value, name } }) => (
                              <Input
                                id={name}
                                onChange={onChange}
                                value={value}
                                placeholder="Digite o nome do curso..."
                                type="text"
                              />
                            )}
                            name={`cs-${index}-name`}
                            control={control}
                            defaultValue={""}
                          />
                          <Controller
                            render={({ field: { onChange, value, name } }) => (
                              <Input
                                id={name}
                                onChange={onChange}
                                value={value}
                                placeholder="Digite o nome da instituição de ensino..."
                                type="text"
                              />
                            )}
                            name={`cs-${index}-institution`}
                            control={control}
                            defaultValue={""}
                          />
                          <div className="flex flex-row items-center gap-x-2 w-full flex-wrap">
                            <Controller
                              render={({
                                field: { onChange, value, name },
                              }) => (
                                <Input
                                  id={name}
                                  onChange={onChange}
                                  value={value}
                                  label="Data de início"
                                  type="date"
                                />
                              )}
                              name={`cs-${index}-startdate`}
                              control={control}
                              defaultValue={""}
                            />
                            <Controller
                              render={({
                                field: { onChange, value, name },
                              }) => (
                                <Input
                                  id={name}
                                  onChange={onChange}
                                  value={value}
                                  label="Data de término"
                                  type="date"
                                />
                              )}
                              name={`cs-${index}-enddate`}
                              control={control}
                              defaultValue={""}
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
                        handleInputAppend(candidateCourses, setCandidateCourses)
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
                      {candidateLanguages.map((language, index) => (
                        <div
                          key={language.lcrLanguageName}
                          className="flex flex-row items-center min-h-[100px] h-auto gap-2 w-full flex-wrap"
                        >
                          <Controller
                            render={({ field: { onChange, value, name } }) => (
                              <Input
                                id={name}
                                onChange={onChange}
                                value={value}
                                placeholder="Digite o idioma..."
                                type="text"
                              />
                            )}
                            name={`ln-${index}-name`}
                            control={control}
                            defaultValue={""}
                          />
                          <Controller
                            render={({ field: { onChange, name} }) => (
                              <select
                                className="p-2 rounded-xl border-2 border-bordercolor w-full text-sm focus:outline"
                                onChange={onChange}
                                id={name}
                              >
                                {languageProficiency.map(
                                  (languagepro, index) => (
                                    <option key={index} value={languagepro}>
                                      {languagepro}
                                    </option>
                                  )
                                )}
                              </select>
                            )}
                            name={`ln-${index}-proficiency`}
                            control={control}
                            defaultValue={""}
                          />
                          <Button
                            type="button"
                            text={<FaCheck />}
                            onClick={() => saveNewLanguage(index)}
                          />
                          <Button
                            type="button"
                            text={<MdDelete />}
                            onClick={() =>
                              deleteNewInput(
                                index,
                                candidateLanguages,
                                setCandidateLanguages
                              )
                            }
                          />
                        </div>
                      ))}
                    </div>
                    <Button
                      type="button"
                      onClick={() =>
                        handleInputAppend(
                          candidateLanguages,
                          setCandidateLanguages
                        )
                      }
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
      <Footer />
    </>
  );
};

export default CreateCurriculum;
