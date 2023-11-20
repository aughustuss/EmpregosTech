"use client";
import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
const page = () => {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <main className="min-h-screen h-auto py-[100px] px-8">
        <section className="shadow-md p-4 rounded-xl flex flex-col gap-y-6 min-h-[600px]">
          <div className="flex flex-row gap-x-10 w-full">
            <div className="w-1/3">Foto aqui</div>
            <div className="w-2/3 flex flex-col gap-y-4">
                <p>Nome</p>
                <p>Conexoes</p>
                <div className="flex flex-row gap-1 text-sm">
                <a href="#" className="bg-primary text-offwhite px-4 py-2 hover:bg-primary/80 transition duration-300 rounded-xl">Link para GitHub</a>
                <a href="#" className="bg-primary text-offwhite px-4 py-2 hover:bg-primary/80 transition duration-300 rounded-xl">Link para Instagram</a>
                </div>
            </div>
          </div>
          <Button
            type="button"
            text="Visualizar currículo"
            onClick={() => router.push("/")}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
