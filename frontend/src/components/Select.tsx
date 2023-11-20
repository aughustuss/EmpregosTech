// Select.jsx

import { SelectInterfaceProps } from '@/shared/@types/selectInterface';
import React, { useState } from 'react';

const Select = ({ arrayToMap, selectId, onSelect, register, required }: SelectInterfaceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelectClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (item: string) => {
    console.log(`Selected option: ${item}`);

    setSelectedOption(item);

    setIsOpen(false);

    onSelect(item);
  };

  return (
    <>
      <div {...register(selectId, {required})} id={selectId} className='p-2 rounded-xl border-2 border-bordercolor w-full text-sm focus:outline' onClick={handleSelectClick}>
        {selectedOption ? selectedOption : 'Selecione uma opção'}
        {isOpen && (
          <div className="options-container">
            {arrayToMap.map((item) => (
              <p key={item} className='px-4 py-2 hover:bg-primary hover:text-offwhite transition duration-300 cursor-pointer rounded-xl' onClick={() => handleOptionClick(item)}>
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
