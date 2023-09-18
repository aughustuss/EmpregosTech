"use client";

interface FilterItemProps {
  text: string;
}

const FilterItem = ({ text }: FilterItemProps) => {
  return (
    <li className="flex items-center mt-4 ">
      <input className="w-5 h-5 bg-gray-300 border-gray-400 rounded" />
      <label className="ml-3 text-sm font-semibold text-gray-900 dark:text-gray-100">
        {text}
      </label>
    </li>
  );
};

export default FilterItem;
