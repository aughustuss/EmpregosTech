import Button from "../Button";
import FilterHeading from "./FilterHeading";
import FilterItem from "./FilterItem";
import FilterItemContainer from "./FilterItemContainer";

const Filter = () => {
  return (
    <aside className="lg:w-[16%] md:w-[20%] hidden md:flex md:flex-col md:gap-y-2  bg-white left-0 pt-20 h-full pb-6 px-2 ">
      <FilterHeading primaryName="Filtros" secondaryName="Limpar" />
     
      <FilterItemContainer name="Stack">
        <FilterItem text="React" />
        <FilterItem text="It" />
        <FilterItem text="Tech" />
        <FilterItem text="Design" />
        <FilterItem text="Angular" />
      </FilterItemContainer>

      <FilterItemContainer name="Senioridade">
        <FilterItem text="Júnior" />
        <FilterItem text="Pleno" />
        <FilterItem text="Sênior" />
      </FilterItemContainer>

      <FilterItemContainer name="Localização">
        <FilterItem text="São Paulo" />
        <FilterItem text="Minas Gerais" />
        <FilterItem text="Rio de Janeiro" />
        <FilterItem text="Bahia" />
        <FilterItem text="Pernambuco" />
      </FilterItemContainer>
      <Button type="submit" text="Filtrar" className="py-2" />
    </aside>
  );
};

export default Filter;
