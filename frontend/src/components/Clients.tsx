import React from 'react'
import { FaBuilding } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { FaRegNewspaper } from "react-icons/fa6";
import ClientCard from './ClientCard';
const Clients = () => {
  return (
    <>
        <section className='w-full border-y rounded-b-xl  h-auto md:h-[200px] max-h-max flex flex-row items-center justify-center  p-4'>
            <div className='w-3/5 flex md:flex-row flex-col items-center gap-x-6 h-full'>
                <ClientCard icon={<FaBuilding/>} text='Mais de 100 empresas já encontraram seus candidatos por aqui' />
                <span className='h-0 md:h-3/4 w-1 bg-white' />
                <ClientCard icon={<FaRegNewspaper/>} text='Mais de 2400 currículos já foram criados por nós' />
                <span className='h-0 md:h-3/4 w-1 bg-white' />
                <ClientCard icon={<FaPersonCircleCheck/>} text='Mais de 1000 candidatos já obtiveram contatos de empresas' />
            </div>
        </section>
    </>
  )
}

export default Clients