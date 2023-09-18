"use client";

import { ButtonProps } from "@/shared/@types/buttonInterface";

const Button = ({ text, type, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className="p-4 rounded-2xl shadow-sm focus:shadow-lg bg-black text-white font-semibold w-full"
    >
      {text}
    </button>
  );
};

export default Button;
