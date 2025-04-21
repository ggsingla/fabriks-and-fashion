import AboutUs from '@/components/AboutUs'
import CTA from '@/components/common/CTA'
import MasterLayout from '@/components/MasterLayout'

export const metadata = {
  title: 'About Us | Fabriks & Fashion - Our Story & Philosophy',
  description: 'Discover the story behind Fabriks & Fashion, a luxury fashion house built on sustainable practices, exceptional craftsmanship, and timeless design. Learn about our commitment to ethical fashion and bespoke design process.',
  keywords: 'about fabriks and fashion, luxury fashion house, sustainable fashion, ethical fashion, bespoke design, fashion craftsmanship, fashion philosophy'
}

export default function AboutPage() {
  return (
    <MasterLayout>
      <AboutUs />
      <CTA />
    </MasterLayout>
  )
} 