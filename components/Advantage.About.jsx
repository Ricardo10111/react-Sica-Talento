import { useEffect, useRef, useState } from 'react';

export default function AdvantageAbout() {
  const [scrollY, setScrollY] = useState(0);
  const [isParallaxActive, setIsParallaxActive] = useState(false);
  const componentRef = useRef(null);

  // Manejar la activación del parallax basado en la intersección del componente
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsParallaxActive(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Ajusta este valor para controlar cuándo comienza a aparecer
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  // Manejar el cálculo del parallax cuando el componente es visible
  const handleScroll = () => {
    if (isParallaxActive) {
      const { top } = componentRef.current.getBoundingClientRect();
      const offset = window.scrollY - (window.scrollY + top);

      // Establecer un tope para la animación (por ejemplo, 550px)
      const maxOffset = 550;
      setScrollY(Math.min(Math.max(offset, 1), maxOffset));
    }
  };

  return (
    <div className="mt-[6rem]" onScroll={handleScroll}>
      <div className="flex justify-center items-center">
        <h2 className="text-3xl text-[#121212] font-semibold">
          La ventaja SICA TALENTO
        </h2>
      </div>
      <div
        ref={componentRef}
        className="relative flex flex-col items-center gap-24 lg:pl-[4rem] lg:pr-[4rem] justify-center mt-[6rem] transition-opacity duration-1000"
      >
        <div className="flex justify-between gap-1 mt-[0rem]">
          <div
            className="flex justify-center w-[30%]"
            style={{ transform: `translateX(${scrollY * 0.08}px)` }}
          >
            <img
              className="w-9 lg:w-[9rem]"
              src="https://www.sica-talento.com/wp-content/uploads/2022/04/aseroria-personalizada-acerca-de-sica.png"
              alt=""
            />
          </div>
          <div
            className="w-[70%]"
            style={{ transform: `translateX(${scrollY * -0.03}px)` }}
          >
            <h3 className="text-[#121212] text-xl font-medium">
              Atención personalizada{' '}
            </h3>
            <p className="text-sm">
              Ofrecemos soluciones personalizadas en recursos humanos que
              transforman tu equipo y potencian el crecimiento de tu empresa.
              Agenda una consulta gratuita hoy mismo y descubre cómo podemos
              ayudarte a alcanzar tus objetivos.
            </p>
          </div>
        </div>

        <div className="flex justify-between gap-7 mt-[2rem]">
          <div
            className="w-[70%]"
            style={{ transform: `translateX(${scrollY * 0.2}px)` }}
          >
            <h3 className="text-[#121212] text-xl font-medium">
              Certificados ante la STPS
            </h3>
            <p className="text-sm">
              Ofrecemos soluciones personalizadas en recursos humanos que
              transforman tu equipo y potencian el crecimiento de tu empresa.
              Agenda una consulta gratuita hoy mismo y descubre cómo podemos
              ayudarte a alcanzar tus objetivos.
            </p>
          </div>
          <div
            className="flex justify-end w-[30%]"
            style={{ transform: `translateX(${scrollY * -0.2}px)` }}
          >
            <img
              className="w-[9rem]"
              src="https://www.sica-talento.com/wp-content/uploads/2022/04/certificados-antes-stps-acerca-de-sica-talento.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-between gap-7 mt-[2rem]">
          <div
            className="flex justify-start w-[30%]"
            style={{ transform: `translateX(${scrollY * 0.2}px)` }}
          >
            <img
              className="w-[9rem]"
              src="https://www.sica-talento.com/wp-content/uploads/2022/04/creacion-de-valor-compartido-acerca-de-sica-talento.png"
              alt=""
            />
          </div>
          <div
            className="w-[70%]"
            style={{ transform: `translateX(${scrollY * -0.2}px)` }}
          >
            <h3 className="text-[#121212] text-xl font-medium">
              Creación de valor compartido{' '}
            </h3>
            <p className="text-sm">
              Ofrecemos soluciones personalizadas en recursos humanos que
              transforman tu equipo y potencian el crecimiento de tu empresa.
              Agenda una consulta gratuita hoy mismo y descubre cómo podemos
              ayudarte a alcanzar tus objetivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}