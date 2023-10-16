"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Input from "@/components/Input";
import Link from "next/link";
import Heading from "@/components/Heading";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center w-full h-screen overflow-y-auto justify-center ">
      <div className="bg-white p-8  w-full md:w-1/4  ">
        <Heading
          title="Olá, Bem vindo(a) de volta"
          subtitle="Entre com seus dados para continuar"
        />
        <form
          className="mt-4 flex flex-col gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="E-mail"
            id="email"
            register={register}
            type="email"
            required
          />

          <Input
            label="Senha"
            id="password"
            register={register}
            type="password"
            required
          />

          <Button text="Login" type="submit" />

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Ainda não possui uma conta?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => router.push("/signIn")}
              >
                Clique aqui
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
