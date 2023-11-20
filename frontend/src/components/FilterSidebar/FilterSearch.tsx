"use client";

const FilterSearch = () => {
  return (
    <div className="mt-2 md:w-1/2 w-full">
      <form className="flex items-center">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="simple-search"
            className="bg-offwhite border border-bordercolor text-gray-900 text-sm rounded-lg  block w-full  p-2.5  "
            placeholder="Procurar palavras chave..."
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ml-2 text-sm font-medium text-offwhite bg-primary rounded-lg border border-primarybg-primary hover:bg-darkprimary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-primary dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
};

export default FilterSearch;
