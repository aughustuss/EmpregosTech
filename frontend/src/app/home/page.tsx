"use client";

import Card from "@/components/Card";
import Filter from "@/components/FilterSidebar";
import FilterSearch from "@/components/FilterSidebar/FilterSearch";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div >
      <NavBar />
      <div className="flex flex-row justify-end w-full ">
        <Filter />
        <div className="w-[84%] pt-20">
          <div className="flex items-end justify-end">
            <FilterSearch />
          </div>
          <div className="grid grid-cols-1 gap-2 px-2 py-3 md:grid-cols-3 w-full  h-screen place-items-center  ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
