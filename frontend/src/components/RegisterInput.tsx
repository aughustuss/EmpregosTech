"use client";

import { InputProps } from "@/shared/@types/inputInterface";
import { EyeOff } from "./Icons/EyeOff";
import { EyeOn } from "./Icons/EyeOn";
import { useState } from "react";
import { RegisterInputProps } from "@/shared/@types/registerInputInterface";
import { error } from "console";

const RegisterInput = ({
  id,
  label,
  type = "text",
  required,
  disabled,
  register,
  placeholder
}: RegisterInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex justify-center gap-y-2 flex-col w-full">
        <label className="text-sm font-semibold">{label}</label>
        <div className="relative w-full">
          <input
            id={id}
            disabled={disabled}
            type={showPassword ? "text" : type}
            {...register(id, {required: true})}
            className="p-2 rounded-xl border-2 border-bordercolor w-full text-sm"
            placeholder={placeholder}
            required={required}
          />
          {type === "password" && (
            <button
              type="button"
              onClick={handleShowPassword}
              className=" absolute right-3 top-2"
            >
              {showPassword ? <EyeOn /> : <EyeOff />}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default RegisterInput;
