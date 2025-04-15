import Image from 'next/image'

const people = [
  {
    name: 'Stefan Laurent',
    role: 'Creative Director',
    imageUrl: '/team/stefan.jpg'
  },
  {
    name: 'Laura Montgomery',
    role: 'Head of Design',
    imageUrl: '/team/laura.jpg'
  },
  {
    name: 'Joshef Wellington',
    role: 'Master Tailor',
    imageUrl: '/team/joshef.jpg'
  },
  {
    name: 'Hannah Sinclair',
    role: 'Fabric Specialist',
    imageUrl: '/team/hannah.jpg'
  }
]

export default function Team() {
  return (
    <>
      <div className='space-y-8 container xl:max-w-7xl mx-auto px-4 py-10 md:py-16 lg:px-8'>

        <div className=' mb-10 text-center mx-auto'>
          <h2 className='font-serif text-3xl text-black md:text-4xl font-semibold mb-4'>
            Meet Our <span className='font-light'>Creative Team</span>
          </h2>
          <h3 className='text-lg font-light md:leading-relaxed'>
            Our team of passionate professionals brings together decades of experience in luxury fashion.
          </h3>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {people.map((person, index) => (
            <div key={index} className='relative group overflow-hidden'>
              <div className='aspect-w-1 aspect-h-1'>
                <Image
                  height={400}
                  width={400}
                  src={person.imageUrl}
                  alt={person.name}
                  className='transition grayscale group-hover:grayscale-0 group-hover:shadow-lg object-cover object-center'
                />
              </div>
              <div className='mt-3'>
                <h4 className='font-serif font-medium text-lg'>
                  {person.name}
                </h4>
                <p className='text-sm font-light'>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
