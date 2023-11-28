"use client";
import Heading from '@/components/Heading';
import React, { useEffect, useState } from 'react'

const ConfirmEmailNotification = () => {
    const [userEmail, setUserEmail] = useState<string>("");
    useEffect(() => {
        const userEmail = localStorage.getItem("userTempEmail");
        if(userEmail){
            setUserEmail(JSON.parse(userEmail));
            localStorage.removeItem("userTempEmail")
        }
    }, [userEmail])
  return (
    <>
        <div className="flex flex-col items-center w-full h-screen justify-center ">
        <div className="bg-transparent p-6 w-full md:w-1/2 lg:w-1/4  ">
          <Heading title="Olá" subtitle={`Confirme o seu email clicando no link enviado para ${userEmail}`} />
        </div>
      </div>
    </>
  )
}

export default ConfirmEmailNotification