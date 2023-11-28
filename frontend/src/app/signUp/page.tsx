"use client";

import {useState} from 'react'
import Button from "@/components/Button";
import { Controller, UseFormGetValues, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import Heading from "@/components/Heading";
import { DataRegister, UserRegister } from "@/helpers/apiHelper";
import Input from "@/components/Input";
import { CgSpinner } from "react-icons/cg";

const SignIn = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<DataRegister>({
    defaultValues: {
      ucFirstName: "",
      ucLastName: "",
      ucBirthDate: "",
      ucMobilePhone: "",
      ucEmail: "",
      ucConfirmEmail: "",
      ucPassword: "",
      ucConfirmPassword: "",
    },
  });

  const emailMatch = (email: string, matchEmail: string) => {
    return email === matchEmail;
  }
  const onSubmit = async (data: DataRegister) => {
    const userRegistered = UserRegister(data);
    if((await userRegistered).data == "Usuário criado" || (await userRegistered).status == 201){
      localStorage.setItem("userTempEmail", JSON.stringify(data.ucEmail));
      router.push("/confirmEmailNotification");
      setIsLoading(true);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-auto justify-center ">
      <div className="bg-transparent p-6 w-full md:w-1/2 lg:w-1/4   ">
        <Heading title="Olá, Bem vindo(a)" subtitle="Crie sua Conta" />
        <form
          className="mt-4 flex flex-col gap-y-3 w-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            name="ucFirstName"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "Preencha o seu primeiro nome",
              },
            }}
            render={({ field: { name, value, onChange } }) => (
              <div>
                <Input
                  id={name}
                  type="text"
                  value={value}
                  onChange={onChange}
                  label="Primeiro Nome"
                />
                <small className="text-xs text-red-700">
                  {errors.ucFirstName?.message}
                </small>
              </div>
            )}
          />
          <Controller
            name="ucLastName"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: "Preencha o seu último nome" },
            }}
            render={({ field: { name, value, onChange } }) => (
              <div>
                <Input
                  id={name}
                  type="text"
                  value={value}
                  onChange={onChange}
                  label="Último Nome"
                />
                <small className="text-xs text-red-700">
                  {errors.ucLastName?.message}
                </small>
              </div>
            )}
          />
          <Controller
            name="ucBirthDate"
            control={control}
            defaultValue=""
            rules={{
              required: {
                value: true,
                message: "Preencha a sua data de nascimento",
              },
            }}
            render={({ field: { name, value, onChange } }) => (
              <div>
                <Input
                  id={name}
                  type="date"
                  value={value}
                  onChange={onChange}
                  label="Data de nascimento"
                />
                <small className="text-xs text-red-700">
                  {errors.ucBirthDate?.message}
                </small>
              </div>
            )}
          />
          <Controller
            name="ucMobilePhone"
            control={control}
            defaultValue=""
            rules={{
              required: {value: true, message: "Preencha o numero de telefone"},
              minLength: 11
            }}
            render={({field: {name, value, onChange}}) => (
              <div>
                <Input
                  id={name}
                  type="text"
                  value={value}
                  onChange={onChange}
                  label="Telefone"
                />
                <small className="text-xs text-red-700">
                  {errors.ucMobilePhone &&
                    (errors.ucMobilePhone?.type === "required"
                      ? errors.ucMobilePhone.message
                      : "Telefone inválido")}
                </small>
              </div>
            )}
          />
          <Controller
            name="ucEmail"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: "Preencha o seu email" },
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            }}
            render={({ field: { name, value, onChange } }) => (
              <div>
                <Input
                  id={name}
                  type="email"
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
            name="ucConfirmEmail"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: "Confirme o seu email" },
              validate: (val) => emailMatch(val, getValues("ucEmail"))
            }}
            render={({ field: { name, value, onChange } }) => (
              <div>
                <Input
                  id={name}
                  type="email"
                  value={value}
                  onChange={onChange}
                  label="Confirmação de Email"
                />
                <small className="text-xs text-red-700">
                  {errors.ucConfirmEmail && (errors.ucConfirmEmail.type === "validate" ? "Emails não conferem" : "Confirme seu email")}
                </small>
              </div>
            )}
          />
          <Controller
            name="ucPassword"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: "Insira a sua senha" },
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
          <Controller
            name="ucConfirmPassword"
            control={control}
            defaultValue=""
            rules={{
              required: { value: true, message: "Confirme sua senha" },
            }}
            render={({ field: { name, value, onChange } }) => (
              <div>
                <Input
                  id={name}
                  type="password"
                  value={value}
                  onChange={onChange}
                  label="Confirmação de Senha"
                />
                <small className="text-xs text-red-700">
                  {errors.ucConfirmPassword?.message}
                </small>
              </div>
            )}
          />
         <Button text={!isLoading ? "Enviar" : <CgSpinner className="animate-spin text-center w-full" />} type="submit" />

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
