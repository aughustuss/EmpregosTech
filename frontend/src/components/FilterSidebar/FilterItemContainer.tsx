"use client";

interface FilterItemContainerProps {
  children: React.ReactNode;
  name: string;
}

const FilterItemContainer = ({ name, children }: FilterItemContainerProps) => {
  return (
    <div className="mt-4">
      <h6 className="mb-3 text-sm font-medium text-offblack">{name}</h6>
      <hr className="my-2" />
      <ul className="space-y-2 text-sm mx-2">{children}</ul>
    </div>
  );
};

export default FilterItemContainer;
