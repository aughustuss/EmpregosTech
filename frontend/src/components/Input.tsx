"use client";

import { InputProps } from "@/shared/@types/inputInterface";
import { EyeOff } from "./Icons/EyeOff";
import { EyeOn } from "./Icons/EyeOn";
import { useState } from "react";

const Input = ({
  id,
  label,
  errors,
  register,
  type = "text",
  required,
  disabled,
  placeholder
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center gap-y-2 flex-col w-full">
      <label className="text-sm font-semibold">{label}</label>
      <div className="relative w-full">
        <input
          id={id}
          disabled={disabled}
          type={showPassword ? "text" : type}
          {...register(id, { required })}
          className="p-2 rounded-xl border-2 border-bordercolor w-full text-sm"
          placeholder={placeholder}
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
      <p>{errors?.message}</p>
    </div>
  );
};

export default Input;
