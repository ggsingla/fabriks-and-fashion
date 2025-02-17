import CTA from '@/components/common/CTA'
import { Service } from '@/components/common/NavBar'
import ServiceTestimonials from '@/components/Home/Services/ServiceTestimonials'
import ServicePage from '@/components/Home/Services/SingleService'
import { getClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import MasterLayout from '@/components/MasterLayout'
import { capitalizeWords } from '@/lib/utils'

const ServicePageQuery = groq`
*[_type == "service" && title == $service] {
    _id,
    slug,
    title,
    description,
    image,
    content,
}
`

export async function generateMetadata({ params }: { params: { service: string } }) {
  const service = params.service.replace(/-/g, ' ')
  return {
    title: `${capitalizeWords(service)} | Tailor and Company`
  }
}

export default async function SingleServicePage({ params }: { params: { service: string } }) {
  const serviceData: Service[] = await getClient(false).fetch(ServicePageQuery, {
    service: params.service.toLowerCase().replace(/-/g, ' ')
  })

  return (
    <MasterLayout>
      <ServicePage data={serviceData} />
      <ServiceTestimonials />
      <CTA />
    </MasterLayout>
  )
} 