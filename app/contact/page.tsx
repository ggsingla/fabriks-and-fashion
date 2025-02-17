import ContactForm from '@/components/ContactUs'
import MasterLayout from '@/components/MasterLayout'

export const metadata = {
  title: 'Contact Us | Tailor and Company'
}

export default function ContactPage() {
  return (
    <MasterLayout>
      <ContactForm />
    </MasterLayout>
  )
} 