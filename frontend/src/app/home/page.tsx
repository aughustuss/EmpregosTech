"use client";

import Card from "@/components/Card";
import Filter from "@/components/FilterSidebar";
import FilterSearch from "@/components/FilterSidebar/FilterSearch";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex flex-col md:flex-row gap-10 md:justify-end md:w-full px-8">
        <Filter />
        <div className="w-full md:w-[80%] lg:w-[84%] flex flex-col gap-y-4 pt-20 ">
          <div className="flex w-full md:items-end md:justify-end">
            <FilterSearch />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full place-items-center ">
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
      <Footer/>
    </div>
  );
}
