import React, { useState, useEffect, useRef } from 'react'
import Cards from './Cards'
export default function BussinesClients() {
  const [isVisible, setIsVisible] = useState(false)
  const componentRef = useRef(null)
  const cards = [
    {
      title: 'Sistemas de Gestión de Calidad',
      description:
        'La implementación de un sistema de gestión tiene multiples beneficios entre ellos, aumentar la satisfacción de tus colaboradores y clientes, porque permite establecer procesos más eficientes y productivos, crear oportunidad de hacer crecer tu negocio nacional e internacionalmente',
      img: 'https://www.sica-talento.com/wp-content/uploads/2022/04/asesoria-sica-servicios.png'
    },
    {
      title: 'Asesoría Empresarial',
      description:
        '¿No te encuentras en regla en cuanto a la normatividad mexicana y tuviste una inspección de la STPS? Nosotros te podemos ayudamos',
      img: 'https://www.sica-talento.com/wp-content/uploads/2022/04/capacitacion-sica-servicios.png'
    },
    {
      title: 'Gestión de Talento',
      description:
        'La gestión de talento es una actividad estratégica alineada a la estrategia del negocio, cuyo objetivo es la Atracción de Talento, Desarrollo de Talento y Retención de Talento',
      img: 'https://www.sica-talento.com/wp-content/uploads/2022/04/talento-sica-servicios.png'
    }
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1 // Ajusta este valor para controlar cuándo comienza a aparecer
      }
    )

    if (componentRef.current) {
      observer.observe(componentRef.current)
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={componentRef}
      className={`flex flex-col items-center justify-center mt-[10rem] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className='text-4xl font-bold text-center text-[#1e293b]'>
        ¿Cómo apoyaremos en el crecimiento de tu negocio?
      </h1>
      <p className='text-lg text-center mt-4'>
        A través de asesoría en normatividad, regulaciones en materia de
        recursos humanos; buscamos talento; capacitamos a tu plantilla laboral
      </p>

      <button className='bg-[#fda10d] text-white px-6 py-2 rounded-lg mt-6 mb-6 hover:bg-[#001780] transition-all duration-700'>
        ¡Contáctanos!
      </button>

      <div className='hidden lg:flex'>
        <img
          className='w-[26rem] absolute mt-[10rem] ml-[-54.5rem] z-[-1]'
          src='https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-jaune.png'
          alt=''
        />
      </div>

      <div className='hidden lg:flex'>
        <img
          className='w-[26rem] absolute mt-[-7rem] ml-[28rem] z-[-1]'
          src='https://icones.pro/wp-content/uploads/2022/02/services-parametres-et-icone-d-engrenage-bleue.png'
          alt=''
        />
      </div>

      <div>
        <Cards cards={cards} />
      </div>
    </div>
  )
}
