import CTA from '@/components/common/CTA'
import Features from '@/components/Features'
import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services/AllServices'
import MasterLayout from '@/components/MasterLayout'
import AboutUs from '@/components/Home/AboutUs'
import Gallery from './Gallery'

const HomePage = () => {
  return (
    <MasterLayout>
      <Hero />
      <AboutUs />
      <Services showAll={false} />
      <Gallery />
      <Features />
      <CTA />
    </MasterLayout>
  )
}

export default HomePage 