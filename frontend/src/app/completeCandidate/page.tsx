"use client";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/Input";
import RegisterInput from "@/components/RegisterInput";
import { CandidateComplete, CandidateCompleteRegistration } from "@/helpers/apiHelper";
import { useRouter } from "next/navigation";
import React, {useState} from "react";
import { Controller, useForm } from "react-hook-form";
import { CgSpinner } from "react-icons/cg";

const CompleteCandidateRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CandidateCompleteRegistration>({
    defaultValues: {
      crrCandidateCpf: "",
    },
  });

  const onSubmit = (data: any) => {
    setIsLoading(true);
    CandidateComplete(data).then((res) => {
      setIsLoading(false);
      router.push("/profile")
    }).catch((err) => setIsLoading(false))
  };
  return (
    <>
      <div className="flex flex-col items-center w-full h-auto justify-center ">
        <div className="bg-transparent p-6 w-full md:w-1/2 lg:w-1/4">
          <Heading
            title="Olá"
            subtitle="Complete o seu cadastro de candidato"
          />
          <form
            className="mt-4 flex flex-col gap-y-3 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="crrCandidateCpf"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Preencha o seu CPF",
                },
                minLength: 14
              }}
              render={({ field: { name, value, onChange } }) => (
                <div>
                  <Input
                    id={name}
                    type="text"
                    value={value}
                    onChange={onChange}
                    label="CPF"
                  />
                  <small className="text-xs text-red-700">
                    {errors.crrCandidateCpf &&
                      (errors.crrCandidateCpf?.type === "required"
                        ? errors.crrCandidateCpf.message
                        : "CPF inválido")}
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
          </form>
        </div>
      </div>
    </>
  );
};

export default CompleteCandidateRegistration;
