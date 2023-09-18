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
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center gap-y-2 flex-col">
      <label className="text-sm font-semibold">{label}</label>
      <div className="relative">
        <input
          id={id}
          disabled={disabled}
          type={showPassword ? "text" : type}
          {...register(id, { required })}
          className="px-2 py-2 rounded-2xl border-2 border-neutral-300 focus:outline-none focus:border-primary-500 w-full"
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
