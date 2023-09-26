"use client"

import NavBar from "@/components/NavBar/NavBar";

const HomePage  =() =>{
    return(
        <>
        <NavBar />
        <div className="w-full h-screen  bg-black pt-12">
            <div className=" bg-white h-screen  ">
                <section className="flex w-full flex-row h-[500px] bg-blue-800">
                    <div className="w-1/2 flex flex-col ml-10 gap-y-10">
                        <div className="flex flex-col justify-center items-center mt-16 gap-10">
                            <h3 className="font-extrabold text-4xl text-white">Impulsione resultadostalentosexperiências
                                com um ecossistema fluido e inteligente para o seu RH
                            </h3>
                            <h4 className="font-normal text-sm text-white">Só a TechJobs entrega uma plataforma completa para contratar, admitir, treinar e engajar seu time de forma simples em uma jornada única e digital.</h4>
                        </div>
                        <div className="w-1/2">
                             <button className="py-3 px-10 rounded-md text-sm bg-blue-600 text-white">Solicitar Demonstração </button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full  flex items-center justify-center">
                        <img src="https://3299491.fs1.hubspotusercontent-na1.net/hub/3299491/hubfs/Rebranding%202023/home%202023/Banner%20Topo%201%20(1).png?width=800&name=Banner%20Topo%201%20(1).png" className="object-content"/>
                    </div>
                </section>
                <div className="w-full h-[40px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"> </div>
                <div className="h-[20%] flex items-center justify-center gap-x-10 bg-blue-800 px-36 rounded-b-xl">
                    <h3 className="border-r border-white p-6 text-xl font-medium text-white">+ de 4000 empresas confiam na TechJobs</h3>
                    <h3 className="text-xl text-white">Presente em + de 20 setores</h3>
                    <h3 className="border-l border-white p-6 text-xl text-white">Impulsionamos a vida de + de 1 M de pessoas</h3>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomePage;