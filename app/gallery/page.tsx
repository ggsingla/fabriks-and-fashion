import Gallery from '@/components/Gallery'
import MasterLayout from '@/components/MasterLayout'

export const metadata = {
  title: 'Gallery | Fabriks & Fashion - Luxury Fashion Collection',
  description: 'Explore our exquisite collection of luxury fashion pieces at Fabriks & Fashion. Discover our bespoke designs, sustainable fashion creations, and timeless couture pieces that showcase our commitment to exceptional craftsmanship.',
  keywords: 'fashion gallery, luxury fashion collection, bespoke designs, couture pieces, sustainable fashion, fashion craftsmanship, luxury fabrics'
}

export default function GalleryPage() {
  return (
    <MasterLayout>
      <Gallery />
    </MasterLayout>
  )
} 