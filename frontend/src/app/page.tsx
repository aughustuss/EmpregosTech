"use client";

import Card from "@/components/Card";
import Filter from "@/components/FilterSidebar";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <Filter />
        <div className="grid grid-cols-1 gap-4 p-6 md:grid-cols-4 w-full h-screen place-items-center ">
          <Card />
          <Card />
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
  );
}
