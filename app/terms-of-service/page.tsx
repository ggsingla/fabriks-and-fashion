import TermsOfService from '@/components/Legal/TermsOfService'
import MasterLayout from '@/components/MasterLayout'

export const metadata = {
  title: 'Terms of Service | Tailor and Company'
}

export default function TermsPage() {
  return (
    <MasterLayout>
      <TermsOfService />
    </MasterLayout>
  )
} 