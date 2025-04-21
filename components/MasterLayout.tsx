import Footer from '@/components/common/Footer'
import LogoBar from '@/components/common/LogoBar'
import NavBar from '@/components/common/NavBar'

interface Props {
  children: React.ReactNode
}

const MasterLayout = ({ children }: Props) => {
  return (
    <main className='bg-background text-foreground'>
      <LogoBar />
      <NavBar />
      {children}
      <Footer />
    </main>
  )
}

export default MasterLayout 