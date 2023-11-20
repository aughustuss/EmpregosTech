import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { useRouter } from "next/navigation";

import Banner1 from '../../public/images/banner1.png'
const Banner = () => {
    const router = useRouter();
  return (
    <>
        <section className="pt-[80px] flex flex-col gap-y-6 w-full h-auto">
        <div className="flex md:flex-row flex-col w-full bg-transparent h-auto md:h-[600px] max-h-max ">
          <div className="flex flex-col md:flex-row w-full h-full px-[100px] gap-4">
            <div className="w-full md:w-1/2 flex flex-col gap-y-6 py-[100px]">
              <div className="md:max-w-[500px] flex flex-col gap-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black "><span className="text-primary underline">Impulsione</span> sua busca por uma oportunidade ou realocação no mercado de trabalho.</h1>
                <p className='text-bodycolor'>
                  Empregos tech é uma plataforma que visa transformar e facilitar as práticas de contratação de profissionais de TI. Proporcionando uma abordagem simplificada, direta e justa para todas as partes envolvidas.
                </p>
                <Button text="Crie sua conta agora" type="button" onClick={() => router.push('./signUp')} />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-y-6 h-full justify-center items-end">
              <Image width={600} height={600} src={Banner1} className="w-[600px] h-[600px] object-contain" alt="Imagem Banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner