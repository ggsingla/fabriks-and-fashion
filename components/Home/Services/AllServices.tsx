'use client'
import Link from 'next/link'
import { Service } from '../../common/NavBar'
import { useEffect, useState } from 'react'
import { getAllServices } from '@/lib/markdown'
import Image from 'next/image'
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react'

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
    <div className='space-y-20 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-24'>
      <div className='font-serif mb-14'>
        <h2 className='text-3xl font-medium md:text-4xl mb-4 tracking-tight text-foreground'>
          We offer a wide range of services
        </h2>
        <p className='text-base md:text-lg md:leading-relaxed lg:max-w-xl text-muted-foreground font-light font-sans'>
          We offer a wide range of services to help you achieve your goals.
        </p>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-2 gap-y-16 md:gap-x-20 md:gap-y-24'>
        {services
          .slice(0, displayAll ? services.length : 4)
          .map((service) => (
            <article
              key={service.slug}
              className='group flex flex-col'>
              <Link
                href={`/services/${service.slug}`}
                className='relative block overflow-hidden aspect-4/3 max-h-72 w-full bg-muted'>
                <div role='img' className='relative h-full w-full'>
                  {service.image && (
                    <Image
                      src={service.image}
                      fill
                      className='object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]'
                      alt={service.image_alt}
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                  )}
                </div>
                <div
                  className='absolute inset-0 bg-linear-to-t from-foreground/30 to-transparent opacity-0 transition-opacity duration-400 ease-out group-hover:opacity-100 pointer-events-none'
                  aria-hidden
                />
              </Link>
              <div className='mt-6 flex flex-col'>
                <h3 className='font-serif font-medium text-xl md:text-2xl tracking-tight text-foreground mb-3'>
                  <Link
                    href={`/services/${service.slug}`}
                    className='capitalize hover:text-accent transition-colors duration-300 ease-out'>
                    {service.title}
                  </Link>
                </h3>
                <p className='text-muted-foreground font-light font-sans text-[15px] md:text-base leading-relaxed line-clamp-2'>
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        {showToggle && (
          <button
            onClick={() => setComplete(!complete)}
            className='col-span-2 font-sans text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors duration-300 ease-out py-2'>
            {complete ? (
              <>
                Show less
                <CaretUpIcon className='ml-2 w-4 h-4 inline-block align-middle' />
              </>
            ) : (
              <>
                Show more
                <CaretDownIcon className='ml-2 w-4 h-4 inline-block align-middle' />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}
