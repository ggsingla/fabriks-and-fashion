'use client'
import Image from 'next/image'
import { CheckCircleIcon } from '@phosphor-icons/react'

const features = [
  {
    title: 'Bespoke Design Excellence',
    description:
      'Each creation is meticulously crafted to reflect your unique style, combining traditional artistry with contemporary vision for truly distinctive pieces.',
  },
  {
    title: 'Timeless Craftsmanship',
    description:
      'Our master artisans employ time-honored techniques to create garments of exceptional quality that transcend seasonal trends.',
  },
  {
    title: 'Luxury Fabric Selection',
    description:
      'We curate the finest materials from around the world, ensuring each piece embodies both comfort and enduring elegance.',
  },
  {
    title: 'Attention to Detail',
    description:
      'Every stitch, seam, and silhouette is carefully considered to achieve perfection in both form and function.',
  },
  {
    title: 'Personalized Experience',
    description:
      'From initial consultation to final fitting, we provide a bespoke journey tailored to your individual style and preferences.',
  },
  {
    title: 'Ethical Design Philosophy',
    description:
      'We create with purpose, combining sustainable practices with innovative design to craft pieces that honor both people and planet.',
  },
]

export default function Features() {
  return (
    <>
      <div className='overflow-hidden'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          <div className='flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-28'>
            <div className='lg:w-1/2 xl:w-2/5 flex-none relative'>
              <Image
                height={600}
                width={500}
                src='/product/production.jpg'
                alt='Fabriks & Fashion - Bespoke Design Studio'
                className='relative mx-auto'
              />
            </div>
            <div className='lg:w-1/2 xl:w-3/5 md:py-12 space-y-10'>
              <div className='font-serif w-full'>
                <h2 className='text-3xl md:text-4xl mb-4'>
                  The Fabriks & Fashion Difference
                </h2>
                <h3 className='text-lg md:leading-relaxed text-muted-foreground font-light font-sans'>
                  Experience the art of bespoke fashion through our distinctive approach to design and craftsmanship
                </h3>
              </div>

              <div className='space-y-5'>
                {features.map((feature, index) => (
                  <div key={index} className='flex space-x-4'>
                    <div className='flex-none'>
                      <CheckCircleIcon size={20} weight='fill' className='text-foreground' />
                    </div>
                    <div>
                      <h4 className='text-lg font-serif font-semibold mb-2'>
                        {feature.title}
                      </h4>
                      <p className='text-muted-foreground font-light leading-relaxed'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

