import Gallery from '@/components/Gallery'
import MasterLayout from '@/components/MasterLayout'

export const metadata = {
  title: 'Gallery | Tailor and Company'
}

export default function GalleryPage() {
  return (
    <MasterLayout>
      <Gallery />
    </MasterLayout>
  )
} 