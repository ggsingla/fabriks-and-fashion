'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

export default function Gallery() {
  const [showAll, setShowAll] = useState(false)
  const images = Array.from({ length: 9 }, (_, i) => i + 1)

  return (
    <>
      <div id='gallery'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          <div className='font-serif mb-10'>
            <h2 className='text-3xl  md:text-4xl font-medium mb-4'>
              Our Collection
            </h2>
            <h3 className='text-lg md:leading-relaxed lg:w-1/2 text-muted-foreground font-light font-sans'>
              Explore our collection of exquisite luxury fashion pieces.
            </h3>
          </div>

          <div className='font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8'>
            {images.map((index) => (
              <div key={index} className={`${!showAll && index > 2 ? 'hidden md:block' : ''}`}>
                <div className='max-h-96 group relative overflow-hidden mb-2'>
                  <Image
                    src={`/product/stock_images/fashion (${index}).jpg`}
                    alt={`Fashion Product ${index}`}
                    width={500}
                    height={600}
                    className='h-full object-cover'
                    priority={index === 1}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className='md:hidden mt-8 text-center'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='text-orange-700 hover:text-orange-600 font-medium text-lg'>
              {showAll ? (
                <>
                  Show less
                  <ChevronUpIcon className='ml-2 w-5 h-5 inline-block' />
                </>
              ) : (
                <>
                  Show more
                  <ChevronDownIcon className='ml-2 w-5 h-5 inline-block' />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
