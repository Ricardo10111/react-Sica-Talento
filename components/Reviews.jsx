import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false)
  const componentRef = useRef(null)

  const cardsReviews = [
    {
      name: 'Rocio Arriaga Suaréz',
      job: 'Manager',
      company: 'Plastic and Beauty Medical Group',
      stars: '⭐️⭐️⭐️⭐️⭐️',
      review:
        'Excelente atencion, las candidatas realmente cumplen con los requisitos que pido. Son colaboradoras que han durado bastante en el puesto.'
    },
    {
      name: 'Juan Pérez',
      job: 'CEO',
      company: 'Empresa X',
      stars: '⭐️⭐️⭐️⭐️⭐️',
      review:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      name: 'Ana López',
      job: 'CTO',
      company: 'Tech Innovators',
      stars: '⭐️⭐️⭐️⭐️⭐️',
      review:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Ana López',
      job: 'CTO',
      company: 'Tech Innovators',
      stars: '⭐️⭐️⭐️⭐️⭐️',
      review:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      name: 'Ana López',
      job: 'CTO',
      company: 'Tech Innovators',
      stars: '⭐️⭐️⭐️⭐️⭐️',
      review:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
    // Agrega más tarjetas según sea necesario
  ]

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

  const settingsSecond = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
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
        className={`flex flex-col items-center justify-center md:ml-[2rem] lg:ml-[4rem] mt-[10rem] transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className='text-2xl font-bold text-center'>Reseñas</h3>

        <div className='w-full mt-8 px-4'>
          <Slider {...settingsSecond}>
            {cardsReviews.map((card, index) => (
              <div
                key={index}
                className='flex flex-col md:max-w-[20rem]  gap-3 mr-4 shadow-custom-light rounded-lg p-6 cursor-pointer bg-gradient-to-r from-white to-[#fffbeb] hover:shadow-custom-dark hover:bg-gradient-to-bl hover:from-[#fcd34d] hover:to-white transition-all duration-2000'
              >
                <p className='text-center text-xl font-bold'>{card.name}</p>
                <div className='flex justify-center'>
                  <span className='text-center text-sm mt-4'>{card.job}/</span>
                  <span className='text-center text-sm mt-4'>
                    {card.company}
                  </span>
                </div>

                <p className='text-center text-md mt-4'>{card.stars}</p>
                <p className='text-center text-md mt-4'>{card.review}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  )
}
