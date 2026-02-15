import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer id='page-footer'>
        <div className='text-center text-sm lg:text-base container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-20'>
          <div className='space-y-10'>
            <nav className='space-x-2 sm:space-x-10 font-sans text-muted-foreground hover:text-muted-foreground/80'>
              <Link href='/contact'>Contact Us</Link>
              <Link href='/terms-of-service'>Terms of Service</Link>
              <Link href='/privacy-policy'>Privacy Policy</Link>
            </nav>
          </div>
          <hr className='my-10 border-muted-foreground/25 h-px' />
          <div className=''>
            © <span className='font-serif'>Fabriks & Fashion
              <span className='font-sans text-xs text-muted-foreground ml-1.5'>
                {new Date().getFullYear()}
              </span>

            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
