import React from 'react'
import { FaAngular, FaVuejs, FaReact, FaJava, FaSwift } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
const UsedBy = () => {
  return (
    <>
        <section className='w-full flex flex-col items-center gap-10 px-[100px]'>
            <p className='text-4xl font-black max-w-2xl text-center'>Utilizado por desenvolvedores das principais tecnologias do mercado</p>
            <div className='flex flex-row justify-between w-full items-center flex-wrap text-6xl text-bodycolor'>
                <FaAngular/>
                <FaVuejs/>
                <FaReact/>
                <FaJava/>
                <SiCsharp/>
                <FaGolang/>
                <FaSwift/>
            </div>
        </section>
    </>
  )
}

export default UsedBy