import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='pb-8 container xl:max-w-7xl mx-auto px-4 lg:px-10 relative my-5 lg:my-10'>
        <div
          role='img'
          className='relative h-96 lg:h-[550px] w-full overflow-hidden'>
          <Image
            fill
            src='/hero/hero-main.jpeg'
            alt='Fabriks & Fashion - Bespoke Fashion Design'
            className='object-cover object-top'
          />
        </div>
        <Image
          src='/hero/hero-sub.jpeg'
          alt='Fabriks & Fashion - Bespoke Fashion Design'
          height={500}
          width={300}
          className='hidden lg:block absolute -bottom-0 w-1/4 object-cover object-top right-32 h-96'
        />
        <div className='font-serif grid'>
          <h1 className='text-2xl lg:text-4xl max-w-xl mt-5 leading-normal text-black font-medium'>
            Where Personal Style Meets Timeless Design
          </h1>
          <Link
            className='text-lg lg:text-2xl mt-5 text-black underline decoration-1 underline-offset-8 hover:decoration-2 flex items-center gap-2'
            href='/contact'>
            Begin Your Journey <ArrowRightIcon className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero
