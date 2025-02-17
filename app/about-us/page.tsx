import AboutUs from '@/components/AboutUs'
import CTA from '@/components/common/CTA'
import MasterLayout from '@/components/MasterLayout'

export const metadata = {
  title: 'About | Tailor and Company'
}

export default function AboutPage() {
  return (
    <MasterLayout>
      <AboutUs />
      <CTA />
    </MasterLayout>
  )
} 