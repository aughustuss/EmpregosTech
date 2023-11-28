"use client";

import { useState, useContext } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { CgSpinner } from "react-icons/cg";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Heading from "@/components/Heading";
import { DataLogin } from "@/helpers/apiHelper";
import UserLoginContext from "@/contexts/UserLoginContext";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { UserLogin } = useContext(UserLoginContext);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DataLogin>({
    defaultValues: {
      ucEmail: "",
      ucPassword: "",
    },
  });

  const onSubmit: SubmitHandler<DataLogin> = async (data: any) => {
    setIsLoading(true);
    try {
      await UserLogin(data);
    } catch (err: any) {
      setIsLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen overflow-y-auto justify-center ">
      <div className="bg-transparent p-8  w-full md:w-[25%]  ">
        <Heading
          title="Olá, Bem vindo(a) de volta"
          subtitle="Entre com seus dados para continuar"
        />
        <form
          className="mt-4 flex flex-col gap-y-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="ucEmail"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "Preencha o seu email",
              },
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            }}
            render={({ field: { name, value, onChange } }) => (
              <div>
                <Input
                  id={name}
                  type="text"
                  value={value}
                  onChange={onChange}
                  label="Email"
                />
                <small className="text-xs text-red-700">
                  {errors.ucEmail &&
                    (errors.ucEmail?.type === "required"
                      ? errors.ucEmail.message
                      : "Email inválido")}
                </small>
              </div>
            )}
          />
          <Controller
            name="ucPassword"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "Preencha a sua senha",
              },
            }}
            render={({ field: { name, value, onChange } }) => (
              <div>
                <Input
                  id={name}
                  type="password"
                  value={value}
                  onChange={onChange}
                  label="Senha"
                />
                <small className="text-xs text-red-700">
                  {errors.ucPassword?.message}
                </small>
              </div>
            )}
          />

          <Button
            text={
              !isLoading ? (
                "Enviar"
              ) : (
                <CgSpinner className="animate-spin text-center w-full" />
              )
            }
            type="submit"
          />

          <div className="mt-4 text-center">
            <p className="text-sm text-bodycolor">
              Ainda não possui uma conta?{" "}
              <span
                className="text-primary cursor-pointer"
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
