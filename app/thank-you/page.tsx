'use client'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <div className='relative bg-background flex items-center overflow-hidden h-screen'>
      <div className='absolute top-0 right-0 bottom-0 w-full lg:w-1/2' />
      <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-20'>
        <div className='flex flex-col items-center justify-center space-y-8 text-center'>
          <div className='space-y-4'>
            <h1 className='font-serif text-4xl md:text-5xl font-semibold'>
              Thank You!
            </h1>
            <p className='font-sans text-lg md:text-xl text-muted-foreground font-light max-w-2xl'>
              We have received your consultation request. Our team will review your submission and get back to you shortly.
            </p>
          </div>

          <div className='space-y-4'>
            <p className='font-sans text-muted-foreground'>
              In the meantime, feel free to explore our collections
            </p>
            <Link
              href="/"
              className='font-serif inline-flex justify-center items-center space-x-2 font-semibold rounded-none px-6 py-3 leading-6 ring-1 ring-black ring-opacity-40 hover:ring-opacity-100 border-none text-foreground text-lg transition-all'
            >
              <span>Back to Home</span>
              <ArrowRightIcon className='w-5 h-5' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 