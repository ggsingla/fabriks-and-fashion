import CTA from '@/components/common/CTA'
import ServiceTestimonials from '@/components/Home/Services/ServiceTestimonials'
import ServicePage from '@/components/Home/Services/SingleService'
import { getServiceBySlug } from '@/lib/markdown'
import MasterLayout from '@/components/MasterLayout'
import { capitalizeWords } from '@/lib/utils'

export async function generateMetadata({ params }: { params: { service: string } }) {
  const service = params.service.replace(/-/g, ' ')
  return {
    title: `${capitalizeWords(service)} | Tailor and Company`
  }
}

export default async function SingleServicePage({ params }: { params: { service: string } }) {
  const serviceData = await getServiceBySlug(params.service)
  if (!serviceData) {
    return (
      <MasterLayout>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-3xl font-medium">Service not found</h1>
        </div>
      </MasterLayout>
    )
  }

  return (
    <MasterLayout>
      <ServicePage data={serviceData} />
      <ServiceTestimonials />
      <CTA />
    </MasterLayout>
  )
} 