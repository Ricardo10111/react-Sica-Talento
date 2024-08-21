import React, { useState, useEffect } from 'react';
import '@fontsource/poppins';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hace que el componente sea visible cuando la página se carga
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`flex flex-row flex-nowrap items-center gap-24 bg-[#f3f3f1] justify-center mt-[8rem] transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col p-8 lg:p-0 max-w-[25rem] lg:max-w-[45rem]">
        <div>
          {/* <img src="https://www.citypng.com/public/uploads/small/31628118360ge1qo7lk47lorzk6tmx0ffofwiw0b8ncufoo2vfn2chsnxeebnj8jj2rx4naoutrrdswmyiqmwu275rcbcn2pfcdtnt2hsxnuute.png" alt="" /> */}
        </div>
        <h1 className="text-3xl lg:text-5xl font-bold text-center font-[Poppins]">
          Impulsa tu empresa con el talento que realmente encaja
        </h1>
        <p className="text-lg text-center mt-4">
          Profesionales cualificados, seleccionados con un enfoque personalizado para maximizar tu crecimiento y productividad.
        </p>

        <div className="flex justify-center">
          <button className="bg-[#fda10d] text-white px-6 py-2 rounded-lg mt-6 mb-6 hover:bg-[#001780] transition-all duration-700">
            ¡Contiza tus servicios!
          </button>
        </div>
      </div>

      <div className="hidden md:flex lg:mb-[-80px]">
        <img
          className="w-[20rem] lg:w-[25rem]  lg:relative top-[-5rem]"
          src="https://eduport.webestica.com/assets/images/element/07.png"
          alt=""
        />
      </div>
    </div>
  );
}