"use client";

import { ButtonProps } from "@/shared/@types/buttonInterface";

const Button: React.FC<ButtonProps> = ({ text, type, ...props }) => {
  return (
    <button
      {...props}
      type={type}
      className="px-4 py-3 h-full rounded-xl shadow-sm focus:shadow-lg hover:shadow-sm bg-primary text-white font-semibold text-sm hover:bg-primary/80 transition duration-300"
    >
      {text}
      
    </button>
  );
};

export default Button;
