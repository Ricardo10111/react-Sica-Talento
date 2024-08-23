import Nav from '@/components/nav'
import HeroAbout from '@/components/Hero.About'
import CardsAbout from '@/components/Cards.About'
import Footer from '@/components/Footer'
import AdvantageAbout from '@/components/Advantage.About'
export default function About() {
  return (
    <div>
      <Nav />
      <div className=''>
      <HeroAbout />
      <CardsAbout />
      <AdvantageAbout />
        <Footer />
      </div>
     
    </div>
  )
}
