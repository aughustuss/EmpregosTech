import { InformationContainerProps } from "@/shared/@types/informationContainerInterface";
import React from "react";

const InformationContainer = ({ text, label }: InformationContainerProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-2 w-full ">
        <p className="text-sm text-bodycolor">{label}</p>
        <div className="py-2 text-xs px-4 text-bodycolor rounded-xl border-bordercolor border-2 shadow-sm" >
            {text}
        </div>
      </div>
    </>
  );
};

export default InformationContainer;
