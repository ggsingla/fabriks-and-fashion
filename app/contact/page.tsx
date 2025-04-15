import ContactForm from '@/components/ContactUs'
import MasterLayout from '@/components/MasterLayout'

export const metadata = {
  title: 'Contact Us | Fabriks & Fashion',
  description: 'Begin your journey to timeless style. Contact Fabriks & Fashion to schedule a consultation for bespoke fashion design.'
}

export default function ContactPage() {
  return (
    <MasterLayout>
      <ContactForm />
    </MasterLayout>
  )
} 