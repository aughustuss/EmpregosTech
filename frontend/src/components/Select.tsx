// Select.jsx

import { SelectInterfaceProps } from "@/shared/@types/selectInterface";
import React, { useState } from "react";

const Select = ({
  arrayToMap,
  selectId,
  onChange,
  value,
}: SelectInterfaceProps) => {
  
  return (
    <>
      <select
        id={selectId}
        className="p-2 rounded-xl border-2 border-bordercolor w-full text-sm focus:outline"
        onChange={onChange}
      >
        {arrayToMap.map((item) => (
          <option
            value={value}
            key={item}
            className="px-4 py-2 hover:bg-primary hover:text-offwhite transition duration-300 cursor-pointer rounded-xl"
          >
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
