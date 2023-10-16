"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Heading from "@/components/Heading";

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      birthDate: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center w-full h-auto justify-center ">
      <div className="bg-white p-6  w-full md:w-2/4 lg:w-1/3  ">
        <Heading title="Olá, Bem vindo(a)" subtitle="Crie sua Conta" />
        <form
          className="mt-4 flex flex-col gap-y-3 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Primeiro Nome"
            id="firstName"
            register={register}
            type="text"
            required
          />
          <Input
            label="Ultimo Nome"
            id="lastName"
            register={register}
            type="text"
            required
          />

          <Input
            label="Data de Nascimento"
            id="birthDate"
            register={register}
            type="date"
            required
          />
          <Input
            label="E-mail"
            id="email"
            register={register}
            type="email"
            required
          />
          <Input
            label="Confirme seu E-mail"
            id="confirmEmail"
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
          <Input
            label="Confirme sua Senha"
            id="confirmPassword"
            register={register}
            type="password"
            required
          />

          <Button text="Continuar" type="submit" />

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Já possui conta?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => router.push("/signUp")}
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
