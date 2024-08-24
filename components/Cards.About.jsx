import { useState, useRef, useEffect } from 'react'

export default function CardsAbout() {
  const [isVisible, setIsVisible] = useState(false)

  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3 // Ajusta este valor para controlar cuándo comienza a aparecer
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
      className={`flex flex-col items-center p-4 md:p-20 justify-center mt-[2rem] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10'>
        <div className='bg-transparent cursor-pointer p-4 rounded-lg shadow-lg hover:shadow-custom-dark transition-shadow duration-1000'>
          <h2 className='text-2xl font-bold text-center'>¿Quiénes somos?</h2>
          <p className='text-lg mt-4 transition-opacity duration-500'>
            Somos una empresa 100% mexicana, con más de 10 años de experiencia
            en el mercado, especializada en la gestión de talento, asesoría
            empresarial y sistemas de gestión de calidad.
          </p>
        </div>

        <div className='bg-transparent cursor-pointer p-4 rounded-lg shadow-lg hover:shadow-custom-dark transition-shadow duration-1000'>
          <h2 className='text-2xl font-bold text-center'>¿Qué hacemos?</h2>
          <p className='text-lg mt-4 transition-opacity duration-500'>
            Buscamos ser tus aliados estratégicos, contribuyendo con compromiso,
            lealtad y responsabilidad para llevarte al éxito, logrando elevar la
            productividad, a través de la fidelización y potencializando el
            desarrollo de tus colaboradores, impactando en un entorno
            organizacional favorable.
          </p>
        </div>

        <div className='bg-transparent cursor-pointer p-4 rounded-lg shadow-lg hover:shadow-custom-dark transition-all duration-1000'>
          <h2 className='text-2xl font-bold text-center'>
            ¿Por qué elegirnos?
          </h2>
          <p className='text-lg mt-4'>
            Porque somos un equipo de expertos en la materia, comprometidos con
            la calidad y la mejora continua, que te brindará un servicio
            personalizado y de calidad.
          </p>
        </div>
      </div>
      <div className='bg-[#fff7ed] mt-[3rem] w-full min-h-[8rem] cursor-pointer p-4 rounded-lg shadow-lg hover:shadow-custom-dark transition-shadow duration-1000 hover:bg-gradient-to-bl hover:from-[#fffbeb] hover:to-[#fde68a]'>
        <h2 className='text-2xl font-bold text-center'>Nuestra Visión</h2>
        <p className='text-lg text-center mt-4'>
        Ser la empresa reconocida como líder estratégico que lleve al éxito a las empresas mexicanas. 
        </p>
      </div>
    </div>
  )
}
