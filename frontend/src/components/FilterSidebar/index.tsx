import FilterHeading from "./FilterHeading";
import FilterItem from "./FilterItem";
import FilterItemContainer from "./FilterItemContainer";
import FilterSearch from "./FilterSearch";

const Filter = () => {
  return (
    <aside className="w-[16%] hidden md:block fixed z-0 left-0 pt-14 border-r-2 h-screen pb-6  ">
      <FilterHeading primaryName="Filtros" secondaryName="Limpar" />
     
      <FilterItemContainer name="Categoria">
        <FilterItem text="React" />
        <FilterItem text="It" />
        <FilterItem text="Tech" />
        <FilterItem text="Design" />
        <FilterItem text="Angular" />
      </FilterItemContainer>

      <FilterItemContainer name="Nível">
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
    </aside>
  );
};

export default Filter;
