"use client";

import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import LogoImage from "../../public/images/logoTechJobs.png";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-screen bg-black pt-12 overflow-y-hidden">
        <div className="h-auto">
          <section className="flex w-full flex-row h-[500px] bg-[#1727eb]">
            <div className="w-1/2 flex flex-col ml-10 gap-y-10 mt-12">
              <div className="flex flex-col justify-center items-center mt-16 gap-10">
                <h3 className="font-extrabold text-4xl text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <h4 className="font-normal text-sm text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sed tellus a tellus maximus placerat. Nulla lacus arcu,
                  vehicula eu mauris non, maximus rutrum nisl.
                </h4>
              </div>
              <div className="w-1/2">
                <button className="py-3 px-10 rounded-md text-sm font-semibold bg-white text-[#1727eb]">
                  Solicitar Demonstração{" "}
                </button>
              </div>
            </div>
            <div className="w-1/2 h-full  flex items-center justify-center">
              <Image
                src={LogoImage}
                className="object-content"
                alt="Picture of the author"
                width={500}
              />
            </div>
          </section>
          <div className="w-full h-[40px] bg-gradient-to-r from-blue-500 via-blue-700 to-black"></div>
          <div className="h-[10%] flex items-center justify-center gap-x-10 bg-[#1727eb] px-36 py-8">
            <h3 className="border-r border-white p-8 text-xl font-medium text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <h3 className="text-xl text-white font-medium">
              Lorem ipsum dolor sit amet
            </h3>
            <h3 className="border-l border-white p-8 text-xl text-white font-medium">
              Lorem ipsum dolor sit amet
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
