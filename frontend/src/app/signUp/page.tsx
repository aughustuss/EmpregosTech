"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Heading from "@/components/Heading";
import { DataRegister, UserRegister } from "@/helpers/apiHelper";

const SignIn = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DataRegister>({
    defaultValues: {
      ucFirstName: "",
      ucLastName: "",
      ucBirthDate: "",
      ucEmail: "",
      ucPassword: "",
   
    },
  });

  const onSubmit = async(data: DataRegister) => {
    await UserRegister(data)
  };

  return (
    <div className="flex flex-col items-center w-full h-auto justify-center ">
      <div className="bg-transparent p-6 w-full md:w-[25%]  ">
        <Heading title="Olá, Bem vindo(a)" subtitle="Crie sua Conta" />
        <form
          className="mt-4 flex flex-col gap-y-3 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Primeiro Nome"
            id="ucFirstName"
            register={register}
            type="text"
            required
          />
          <Input
            label="Ultimo Nome"
            id="ucLastName"
            register={register}
            type="text"
            required
          />

          <Input
            label="Data de Nascimento"
            id="ucBirthDate"
            register={register}
            type="date"
            required
          />
          <Input
            label="E-mail"
            id="ucEmail"
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
            id="ucPassword"
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
                className="text-primary cursor-pointer"
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
