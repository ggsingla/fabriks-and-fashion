'use client'
import Link from 'next/link'
import { Service } from '../../common/NavBar'
import { useEffect, useState } from 'react'
import { getAllServices } from '@/lib/markdown'
import Image from 'next/image'
import { CaretDownIcon, CaretUpIcon, ArrowRightIcon } from '@phosphor-icons/react'

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
                      <ArrowRightIcon
                        className='text-white -rotate-45 inline-block'
                        size={40}
                        weight='bold'
                      />
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
                  <CaretUpIcon className='ml-2 w-5 h-5 inline-block' />
                </>
              ) : (
                <>
                  Show more
                  <CaretDownIcon className='ml-2 w-5 h-5 inline-block' />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </>
  )
}
