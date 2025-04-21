import React from 'react'
import Team from './Team'
import Image from 'next/image'

const values = [
  {
    name: 'Our Story',
    description: `Fabriks & Fashion was born from a passion for creating timeless pieces that celebrate individuality. Our journey began with a vision to redefine luxury fashion through ethical design and exceptional craftsmanship. Today, we stand as a distinguished fashion house, creating bespoke pieces that tell unique stories through fabric and form.`,
  },
  {
    name: 'Our Philosophy',
    description: `At Fabriks & Fashion, we believe that true luxury lies in the perfect harmony of design, craftsmanship, and sustainability. Each piece we create is a testament to our commitment to ethical fashion, where traditional techniques meet contemporary vision. We don't just create garments; we craft experiences that celebrate personal style.`,
  },
  {
    name: 'Sustainable Luxury',
    description: `We are committed to creating fashion that respects both people and planet. Our sustainable practices extend from fabric sourcing to production, ensuring that each piece embodies our values of environmental consciousness without compromising on luxury or quality.`,
  },
  {
    name: 'Bespoke Design Process',
    description: `Our design process is a journey of collaboration and creativity. From initial consultation to final fitting, we work closely with each client to understand their vision and bring it to life through our distinctive approach to design and craftsmanship.`,
  },
  {
    name: 'Craftsmanship Excellence',
    description: `Every piece that bears the Fabriks & Fashion name is a celebration of exceptional craftsmanship. Our master artisans employ time-honored techniques alongside innovative approaches, ensuring each garment meets our exacting standards of quality and design.`,
  },
  {
    name: 'Luxury Fabric Selection',
    description: `We curate the finest materials from around the world, working with sustainable and luxury fabrics that embody both comfort and enduring elegance. Our fabric specialists ensure that each material meets our standards for quality, sustainability, and aesthetic appeal.`,
  },
  {
    name: 'Personalized Experience',
    description: `We believe that luxury fashion should be an intimate and personal experience. Our dedicated team ensures that every client receives individual attention, from the initial design consultation to the final fitting, creating a truly bespoke journey.`,
  },
  {
    name: 'Timeless Design',
    description: `Our designs transcend seasonal trends, focusing instead on creating pieces that stand the test of time. We combine classic silhouettes with contemporary details, resulting in garments that remain relevant and elegant for years to come.`,
  }
]

const AboutUs = () => {
  return (
    <>
      <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-20'>
        {/* Heading */}
        <div className='text-center max-w-xl mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl font-semibold mb-4'>
            We are <span className='font-light'>Fabriks & Fashion</span>
          </h1>
          <h3 className='text-lg md:leading-relaxed font-light'>
            A distinguished fashion house where personal style meets exceptional craftsmanship, creating timeless pieces that celebrate individuality.
          </h3>
        </div>
        {/* END Heading */}

        {/* Images */}
        <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-5'>
          <Image
            height={600}
            width={800}
            src='/about/about-left.webp'
            alt='Fabriks & Fashion - Bespoke Design Studio'
            className='col-span-2 object-cover object-top h-96 w-full'
          />
          <Image
            height={600}
            width={400}
            src='/hero/hero-sub.jpeg'
            alt='Fabriks & Fashion - Luxury Craftsmanship'
            className='hidden md:block col-span-1 object-cover object-center h-96 w-full'
          />
        </div>
        {/* END Images */}

        <article className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-full prose md:prose-lg mx-auto font-serif'>
          {values.slice(0, 4).map((value, index) => (
            <div key={index}>
              <h3>
                <span>{value.name}</span>
              </h3>
              <p>{value.description}</p>
            </div>
          ))}
        </article>
        <Team />
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-full prose md:prose-lg mx-auto prose-h3:font-serif font-serif'>
          {values.slice(4, 8).map((value, index) => (
            <div key={index}>
              <h3>
                <span>{value.name}</span>
              </h3>
              <p>{value.description}</p>
            </div>
          ))}
        </article>
      </div>
    </>
  )
}

export default AboutUs
