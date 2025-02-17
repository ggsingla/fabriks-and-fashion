import Ethics from '@/components/Ethics'
import CTA from '@/components/common/CTA'
import MasterLayout from '@/components/MasterLayout'

export const metadata = {
  title: 'Our Ethics | Tailor and Company'
}

export default function OurEthicsPage() {
  return (
    <MasterLayout>
      <Ethics />
      <CTA />
    </MasterLayout>
  )
} 