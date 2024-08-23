import React, { useState, useEffect } from 'react'
import '@fontsource/poppins'

export default function HeroAbout() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Hace que el componente sea visible cuando la página se carga
    setIsVisible(true)
  }, [])

  return (
    <div
      className={`flex flex-row flex-nowrap h-[40rem] items-center gap-24 bg-[#fff7ed] justify-center mt-[6rem] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='flex flex-col p-8  lg:ml-8 lg:p-0 max-w-[25rem] lg:max-w-[45rem]'>
        <div>
        </div>
        <h1 className='text-3xl lg:text-5xl font-bold text-center font-[Poppins] text-[#121212]'>
        Servicios Integrales en Capacitación, Asesoría y Talento Humano
        </h1>
        <p className='text-lg text-center mt-4'>
        SICA TALENTO te brinda las herramientas y conocimientos necesarios para lograr la fidelización de tu colaboradores, impactando en un entorno favorable para tu empresa.
        </p>

       
      </div>

      <div className='hidden md:flex lg:mb-[-80px]'>
        <img
          className='w-[70rem]   lg:relative top-[-5rem]'
          src='https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png'
          alt=''
        />
      </div>
    </div>
  )
}
