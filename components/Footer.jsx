export default function Footer() {
    return (
        <div className='bg-white text-black shadow-custom-light flex flex-col items-center justify-center py-6 mt-[4rem]'>
            <div className='flex gap-4'>
                <a href='#' className='hover:text-[#fda10d]'>Inicio</a>
                <a href='#' className='hover:text-[#fda10d]'>Nosotros</a>
                <a href='#' className='hover:text-[#fda10d]'>Servicios</a>
                <a href='#' className='hover:text-[#fda10d]'>Contacto</a>
            </div>
            <p className='mt-6'>&copy; 2022 Sica Talento</p>
        </div>
    )
}