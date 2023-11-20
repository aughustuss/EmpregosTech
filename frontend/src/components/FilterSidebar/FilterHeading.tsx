"use client";

interface FilterHeadingProps {
  primaryName: string;
  secondaryName: string;
}

const FilterHeading = ({ primaryName, secondaryName }: FilterHeadingProps) => {
  return (
    <div className="flex flex-row items-center justify-between mt-6">
      <h2 className="text-base font-extrabold text-titlecolor">{primaryName}</h2>
      <button className="text-sm font-medium text-primary ">
        {secondaryName}
      </button>
    </div>
  );
};

export default FilterHeading;
