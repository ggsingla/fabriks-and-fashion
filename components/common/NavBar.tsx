'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getAllServices } from '@/lib/markdown'
import { ChevronDownIcon, Bars3Icon } from '@heroicons/react/24/outline'

export type Service = {
  title: string
  slug: string
  description: string
  image: string
  image_alt: string
  content: string
}

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
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
      {/* Main Header Section: With Mega Menu */}
      <div className='bg-background font-serif sticky top-0 z-[99999]'>
        {/* Header */}
        <header
          id='page-header'
          className='flex flex-col flex-none items-center bg-muted py-2'>
          <div
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className='text-center flex gap-5 justify-center items-center w-full py-2 lg:hidden'>
            <Bars3Icon className='w-5 h-5' />
            <p>Menu</p>
          </div>
          <div className='relative container xl:max-w-7xl mx-auto px-4 lg:px-10'>
            <div className='flex items-center justify-center'>
              {/* Mega Menu visible on large screens */}
              <ul className='hidden lg:flex items-center'>
                <li className='group'>
                  <Link
                    href='/'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4'>
                    <span>Home</span>
                  </Link>
                </li>
                <li className='group'>
                  <Link
                    href='/about-us'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4'>
                    <span>About Us</span>
                  </Link>
                </li>
                <li className='group'>
                  <Link
                    href='/our-ethics'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4'>
                    <span>Our Ethics</span>
                  </Link>
                </li>

                <li className='group'>
                  {/* Services Link */}
                  <div className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4'>
                    <span>Services</span>
                    <ChevronDownIcon className='text-muted-foreground transform transition duration-200 ease-out group-hover:rotate-180 w-4 h-4' />
                  </div>

                  <div className='absolute top-2 pt-8 invisible group-hover:visible z-10'>
                    <div className='bg-white shadow-xl ring-1 ring-black ring-opacity-5 transform origin-top transition duration-300 ease-out opacity-0 group-hover:opacity-100 overflow-hidden'>
                      <div className='w-fit transform transition duration-500 ease-out opacity-0 group-hover:opacity-100'>
                        <div className='p-4 space-y-6'>
                          <nav className='font-sans flex flex-col space-y-3'>
                            {services?.map((service) => (
                              <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className='text-foreground hover:underline underline-offset-4 font-medium text-sm capitalize'>
                                {service.title}
                              </Link>
                            ))}
                            <Link
                              href='/services'
                              className='text-foreground hover:underline underline-offset-4 font-medium text-sm mt-2 pt-2 border-t'>
                              All Services
                            </Link>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className='group'>
                  <Link
                    href='/contact'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4'>
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className={`lg:hidden ${mobileNavOpen ? '' : 'hidden'}`}>
              <div className='bg-muted rounded-xl mt-5'>
                <div className='p-4 space-y-6'>
                  <nav className='flex flex-col space-y-3 text-foreground'>
                    <Link href='/' className='font-medium text-sm'>
                      <h4 className='font-semibold'>Home</h4>
                    </Link>
                    <Link href='/about-us' className='font-medium text-sm'>
                      <h4 className='font-semibold'>About us</h4>
                    </Link>
                    <Link href='/our-ethics' className='font-medium text-sm'>
                      <h4 className='font-semibold'>Our Ethics</h4>
                    </Link>

                    <h4 className='text-sm font-semibold'>
                      <Link href='/services'>Services</Link>
                    </h4>
                    <nav className='flex flex-col space-y-3 pl-4 text-muted-foreground font-light'>
                      {services?.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className='font-sans text-sm capitalize'>
                          {service.title}
                        </Link>
                      ))}
                    </nav>

                    <Link href='/contact' className='font-medium text-sm'>
                      <h4 className='font-semibold'>Contact Us</h4>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}

export default NavBar
