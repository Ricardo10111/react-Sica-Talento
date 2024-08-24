import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Clients() {
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
        threshold: 1 // Ajusta este valor para controlar cuándo comienza a aparecer
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

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <>
      <div
        ref={componentRef}
        className={`flex flex-col items-center justify-center mt-[10rem] transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className='text-4xl font-bold text-center text-[#1e293b]'>Nuestros Clientes</h1>

        <p className='text-lg text-center mt-4'>
          Conoce a los clientes que han confiado en nosotros
        </p>

        <div className='w-full mt-8'>
          <Slider {...settings}>
            <div>
              <img
                src='https://www.sica-talento.com/wp-content/uploads/2022/04/vasconia-cliente-sica-talento.png'
                alt='Client 1'
                className='mx-auto rounded-lg'
              />
            </div>
            <div>
              <img
                src='https://www.sica-talento.com/wp-content/uploads/2022/04/grupo-privesa-clienye-sica-talento.png'
                alt='Client 2'
                className='mx-auto rounded-lg'
              />
            </div>
            <div>
              <img
                src='https://www.sica-talento.com/wp-content/uploads/2022/04/leonora-vicario-cliente-sica-taleto.png'
                alt='Client 3'
                className='mx-auto rounded-lg'
              />
            </div>
            <div>
              <img
                src='https://www.sica-talento.com/wp-content/uploads/2022/04/plastica-beauty-cliente-sica-talento.png'
                alt='Client 4'
                className='mx-auto rounded-lg'
              />
            </div>
            <div>
              <img
                src='https://www.sica-talento.com/wp-content/uploads/2022/04/quickshine-cliente-sica-talento.png'
                alt='Client 5'
                className='mx-auto rounded-lg'
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className=''></div>
    </>
  )
}
