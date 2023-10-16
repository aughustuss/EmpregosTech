"use client";

import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import LogoImage from "../../public/images/logoTechJobs.png";
import bannerImage from "../../public/images/bannerImage.jpg";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="w-full h-full bg-[#1727eb] overflow-y-hidden pt-12  md:pt-12 ">
        <div className="h-full">
          <section className="flex w-full flex-row h-[500px] bg-[#1727eb] md:px-28">
            <div className="w-full flex flex-col mx-4 mt-6 gap-y-14 px-6 items-center md:items-start  md:px-0 md:ml-10 md:w-1/2 md:gap-y-16 md:mt-12">
              <div className="flex flex-col justify-center items-center mt-16 gap-10">
                <h3 className="font-extrabold text-3xl text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </h3>
                <h4 className="font-normal text-sm text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  sed tellus a tellus maximus placerat. Nulla lacus arcu,
                  vehicula eu mauris non, maximus rutrum nisl.
                </h4>
              </div>
              <div className="md:w-1/2">
                <button className="py-3 px-6 md:px-10 rounded-md text-sm font-semibold bg-white text-[#1727eb]">
                  Solicitar Demonstração{" "}
                </button>
              </div>
            </div>
            <div className="w-1/2 h-full  hidden md:flex md:items-center md:justify-center">
              <Image
                src={LogoImage}
                className="object-contain"
                alt="Picture of the author"
              />
            </div>
          </section>
          <div className="w-full h-[20px] bg-gradient-to-r from-blue-500 via-blue-700 to-black"></div>
          <Image
            src={bannerImage}
            className="object-contain"
            alt="Banner Image from Home Page"
          />
          <div className="w-full h-[20px] bg-gradient-to-r from-blue-500 via-blue-700 to-black"></div>

          <div className="h-auto flex flex-col bg-[#1727eb] items-center justify-center md:flex-row md:gap-x-10 md:px-30 py-8">
            <h3 className="font-light max-md:border-b py-4 md:border-r border-white md:p-8 md:text-sm text-xl md:font-medium text-white">
              Lorem ipsum dolor sit amet
            </h3>
            <h3 className="font-light  max-md:border-b py-4 text-xl text-white md:font-medium md:text-sm">
              Lorem ipsum dolor sit amet
            </h3>
            <h3 className="md:border-l py-4 font-light  border-white md:p-8 text-xl text-white md:font-medium md:text-sm">
              Lorem ipsum dolor sit amet
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
