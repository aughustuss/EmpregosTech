"use client";

interface FilterItemProps {
  text: string;
}

const FilterItem = ({ text }: FilterItemProps) => {
  return (
    <li className="flex items-center mt-4 ">
      <input type="checkbox" className="w-5 h-5 bg-offwhite border-bordercolor rounded" />
      <label className="ml-3 text-sm font-semibold text-black ">
        {text}
      </label>
    </li>
  );
};

export default FilterItem;
