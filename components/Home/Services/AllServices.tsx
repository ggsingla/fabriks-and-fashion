'use client'
import Link from 'next/link'
import { Service } from '../../common/NavBar'
import { useEffect, useState } from 'react'
import { getAllServices } from '@/lib/markdown'
import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

type ServicesProps = {
  showAll: boolean
  showToggle?: boolean
}

export default function Services({ showAll, showToggle = true }: ServicesProps) {
  const [complete, setComplete] = useState<boolean>(showAll)
  const displayAll = !showToggle || complete
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    const getServices = async () => {
      const services = await getAllServices()
      setServices(services)
    }

    getServices()
  }, [])

  return (
    <>
      <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-24'>
        <div className='font-serif mb-10'>
          <h2 className='text-3xl  font-medium md:text-4xl mb-4'>
            We offer a wide range of services
          </h2>
          <h3 className='text-lg md:leading-relaxed lg:w-1/2 text-muted-foreground font-light font-sans'>
            We offer a wide range of services to help you achieve your goals.
          </h3>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-2 gap-y-6 md:gap-12'>
          {services
            .slice(0, displayAll ? services.length : 4)
            .map((service) => {
              return (
                <div key={service.slug} className='flex flex-col'>
                  <Link
                    href={`/services/${service.slug}`}
                    className='flex justify-center items-center bg-orange-200 relative group overflow-hidden h-80'>
                    <div className='z-10 flex items-center justify-center absolute inset-0 bg-orange-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100'>
                      <svg
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10'>
                        <path
                          fillRule='evenodd'
                          d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>

                    <div role='img' className='relative h-full w-full'>
                      {service.image && (
                        <Image
                          src={service.image}
                          fill
                          className='object-cover'
                          alt={service.image_alt}
                        />
                      )}
                    </div>
                  </Link>

                  <h4 className='font-serif font-semibold text-lg sm:text-xl mt-4 mb-2'>
                    <Link
                      href={`/services/${service.slug}`}
                      className='leading-7 text-foreground hover:text-black line-clamp-1 capitalize'>
                      {service.title}
                    </Link>
                  </h4>
                  <p className='text-muted-foreground font-light font-sans line-clamp-5'>
                    {service.description}
                  </p>
                </div>
              )
            })}
          {showToggle && (
            <button
              onClick={() => setComplete(!complete)}
              className='col-span-2 text-orange-700 hover:text-orange-600 font-medium text-lg'>
              {complete ? (
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
          )}
        </div>
      </div>
    </>
  )
}
