"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import RegisterInput from "@/components/RegisterInput";
import axios from "axios";
const ConfirmEmail = () => {
  const router = useSearchParams();
  const routernavigation = useRouter();
  const userRecoveredEmail = router.get("email");
  const userRecoveredCode = router.get("codigo");
  const { handleSubmit } = useForm();
  const onSubmit = async () => {
    return await axios
      .post(`https://etbackapi-production.up.railway.app/user/confirmEmail?userEmail=${userRecoveredEmail}&confirmEmailToken=${userRecoveredCode}`)
      .then((res) => {
        console.log(res);
        routernavigation.push("/signIn");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen justify-center ">
        <div className="bg-transparent p-6 w-full md:w-1/2 lg:w-1/4  ">
          <Heading title="Olá" subtitle="Clique para confirmar o seu email" />
          <form
            className="mt-4 flex flex-col gap-y-3 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Button text="Verificar" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmail;
