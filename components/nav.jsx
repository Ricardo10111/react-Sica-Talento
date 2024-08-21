import React, { useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Servicios',
      path: '/services',
      subMenu: [
        { name: 'Consultoría', path: '/services/consulting' },
        { name: 'Desarrollo', path: '/services/development' },
        { name: 'Capacitación', path: '/services/training' }
      ]
    },
    { name: 'Acerca de', path: '/about' },
    
    { name: 'Próximos Cursos', path: '/courses' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contact' }
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true)
  }

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false)
  }

  return (
    <div className='flex items-center justify-between h-[3.5rem] pr-6 pl-6 shadow-custom-light bg-white'>
      <div className='mr-auto mt-3'>
        <Link href='/'>
          <div className='flex items-center flex-row gap-1'>
            <img
              className='w-[2rem]'
              src='https://www.sica-talento.com/wp-content/uploads/2022/04/sica-contigo.png'
              alt='Logo Sica Contigo'
            />
            <img
              className='w-[10rem]'
              src='https://www.sica-talento.com/wp-content/uploads/2022/04/logo-sica-talento-header.png'
              alt='Logo Sica Talento'
            />
          </div>
        </Link>
      </div>

      {/* Botón de menú de hamburguesa para móviles */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='focus:outline-none'>
          <img src='/hamburger_icon_143010.svg' alt='' />
        </button>
      </div>

      {/* Menú para desktop */}
      <div className='hidden md:flex mr-20 flex-row gap-8 items-center font-Montserrat text-sm font-medium'>
        {navItems.map((item, index) => (
          <div
            key={index}
            className='relative'
            onMouseEnter={item.subMenu ? handleMouseEnter : null}
            onMouseLeave={item.subMenu ? handleMouseLeave : null}
          >
            <Link href={item.path}>
              <div className='pr-2 pl-2 pb-1 pt-1 hover:text-[#fda10d] transition-all'>
                {item.name}
              </div>
            </Link>

            {/* Submenú desplegable */}
            {item.subMenu && isSubMenuOpen && (
              <div className='relative left-[-1rem] mt-20 w-48 bg-white shadow-lg rounded-lg'>
                {item.subMenu.map((subItem, subIndex) => (
                  <Link key={subIndex} href={subItem.path}>
                    <div className='px-4 py-2 hover:bg-gray-100 hover:text-[#fda10d] transition-all rounded-lg'>
                      {subItem.name}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className='absolute top-[3.5rem] left-0 w-full bg-white shadow-lg md:hidden'>
          <div className='flex flex-col items-center font-Montserrat text-sm font-medium'>
            {navItems.map((item, index) => (
              <Link key={index} href={item.path}>
                <div className='pr-2 pl-2 pb-1 pt-1 w-full text-center hover:text-[#fda10d] transition-all border-b'>
                  {item.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}