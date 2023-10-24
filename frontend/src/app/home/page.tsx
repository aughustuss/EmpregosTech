"use client";

import Card from "@/components/Card";
import Filter from "@/components/FilterSidebar";
import FilterSearch from "@/components/FilterSidebar/FilterSearch";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex md:flex-row md:justify-end md:w-full ">
        <Filter />
        <div className="md:w-[84%] pt-20 w-full">
          <div className="flex w-full md:items-end md:justify-end">
            <FilterSearch />
          </div>
          <div className="grid grid-cols-1 gap-3 pt-4 px-2 w-full h-screen place-items-center md:py-3 md:grid-cols-2 lg:grid-cols-3">
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
