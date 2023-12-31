import Image from 'next/image'
import React from 'react'
import Button from './Button'
import ResumeImg from '../../public/images/resume.png'
import { useRouter } from 'next/navigation'
const Resume = () => {
    const router = useRouter();
  return (
    <>
        <section className="pt-[80px] flex flex-col gap-y-6 w-full h-auto">
        <div className="flex md:flex-row flex-col w-full bg-transparent h-auto md:h-[600px] max-h-max ">
          <div className="flex flex-col md:flex-row-reverse items-center w-full h-full gap-4">
            <div className="w-full md:w-1/2 flex flex-col gap-y-6 py-[100px]">
              <div className="md:max-w-[500px] flex flex-col gap-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black "><span className="text-primary underline">Garanta</span> que os olhos dos recrutadores batam no seu perfil e aumenta em enormes quantidades as chances de receber um contato.</h1>
                <p className='text-bodycolor'>
                  Nós te ajudamos a criar um currículo seguindo um modelo acertivo e que os recrutadores preferem. Só é necessário preencher com as suas informações e nós fazemos o resto.
                </p>
                <Button text="Veja agora o seu currículo" type="button" onClick={() => router.push('./signIn')} />
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-y-6 h-full justify-center items-end">
              <Image width={600} height={600} src={ResumeImg} className="w-[600px] h-[600px] object-contain" alt="Imagem Banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume