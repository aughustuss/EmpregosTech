"use client";

import NavBar from "@/components/NavBar/NavBar";
import Banner from "@/components/Banner";
import Clients from "@/components/Clients";
import Resume from "@/components/Resume";
import Footer from "@/components/Footer/Footer";
import UsedBy from "@/components/UsedBy";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="flex flex-col gap-y-[100px]">
        <Banner />
        <UsedBy/>
        <Clients/>
        <Resume/>

      </main>
      <Footer/>
    </>
  );
};

export default HomePage;
