import Services from '@/components/Home/Services/AllServices'
import MasterLayout from '@/components/MasterLayout'

export const metadata = {
  title: 'Services | Tailor and Company'
}

export default function ServicesPage() {
  return (
    <MasterLayout>
      <Services showAll={true} showToggle={false} />
    </MasterLayout>
  )
} 