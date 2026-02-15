'use client'
import { ArrowRightIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

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
          className='hidden lg:block absolute bottom-0 w-1/4 object-cover object-top right-32 h-96'
        />
        <div className='font-serif grid mt-6 border-l-2 border-accent/40 pl-5'>
          <h1 className='text-2xl lg:text-4xl max-w-xl leading-tight font-medium text-foreground'>
            Where Personal Style Meets Timeless Design
          </h1>
          <Link
            className='group inline-flex items-center text-base lg:text-lg mt-5 text-foreground hover:text-accent font-medium underline decoration-accent/50 decoration-1 underline-offset-8 hover:decoration-accent hover:decoration-2 transition-all duration-300'
            href='/contact'>
            Begin Your Journey
            <ArrowRightIcon className='ml-2 transition-transform duration-300 group-hover:translate-x-1' size={20} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero
