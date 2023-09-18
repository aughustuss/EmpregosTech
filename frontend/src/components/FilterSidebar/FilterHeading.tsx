"use client";

interface FilterHeadingProps {
  primaryName: string;
  secondaryName: string;
}

const FilterHeading = ({ primaryName, secondaryName }: FilterHeadingProps) => {
  return (
    <div className="flex flex-row items-center justify-between mt-6 mx-2">
      <h2 className="text-base font-extrabold text-gray-800">{primaryName}</h2>
      <button className="text-base font-medium text-blue-600 ">
        {secondaryName}
      </button>
    </div>
  );
};

export default FilterHeading;
