"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const CompleteCandidateRegistration = () => {
    const router = useRouter();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data: any) => {};
    return (
      <>
        <div className="flex flex-col items-center w-full h-auto justify-center ">
          <div className="bg-transparent p-6 w-full md:w-[25%]  ">
            <Heading
              title="Olá"
              subtitle="Complete o seu cadastro de candidato"
            />
            <form
              className="mt-4 flex flex-col gap-y-3 w-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                label="CPF"
                id="ucFirstName"
                register={register}
                type="text"
                required
              />
              <Input
                label="Link para seu GitHub"
                id="ucLastName"
                register={register}
                type="text"
                required
              />
  
              <Input
                label="Link para seu Instagram"
                id="ucBirthDate"
                register={register}
                type="text"
                required
              />
              <Button text="Completar" type="submit" />
            </form>
          </div>
        </div>
      </>
    );
};

export default CompleteCandidateRegistration;
