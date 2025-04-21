import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function CTA() {
  return (
    <>
      <div className='overflow-hidden'>
        <div className='container xl:max-w-7xl mx-auto px-4 my-8 py-8 lg:px-8 lg:py-16 lg:my-16 relative bg-beige-100/80'>
          <div className='flex items-center flex-col md:flex-row relative space-y-8 md:space-y-0'>
            <div className='md:w-7/12 py-5 md:p-5 text-center md:text-left font-serif'>
              <h2 className='text-3xl md:text-4xl font-semibold mb-4 text-black leading-tight'>
                Ready to elevate your fashion vision?
              </h2>
              <h3 className='text-lg text-gray-600 font-sans font-light leading-relaxed'>
                Experience the art of bespoke fashion design. Schedule a consultation with our team to explore our full-service clothing manufacturing capabilities and bring your unique vision to life.
              </h3>
            </div>

            <div className='grow md:p-5 md:text-center font-serif'>
              <Link
                href='/contact'
                className='group inline-flex items-center text-lg lg:text-2xl mt-5 font-medium text-black underline decoration-1 underline-offset-8 hover:decoration-2 transition-all duration-300'>
                Begin Your Journey
                <ArrowRightIcon className='ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
