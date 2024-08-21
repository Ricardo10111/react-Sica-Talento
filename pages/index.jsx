
import Nav from '../components/nav'
import Hero from '../components/hero'
import Clients from '../components/clients'
import BussinesClients from '@/components/busssines.clients'
import Reviews from '@/components/Reviews'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div className='font-Montserrat'>
      <Nav />
      <div className='h-dvh'>
        <Hero />
        <Clients />
        <BussinesClients />
        <Blog />
        <Reviews />
        <Footer />
      </div>
    </div>
  )
}
