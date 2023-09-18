"use client";

import { ContainerProps } from "@/shared/@types/containerInterface";

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="mx-auto container w-full h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default Container;
