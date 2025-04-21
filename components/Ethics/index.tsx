const ethics = [
  {
    title: 'Ethical Craftsmanship',
    description:
      'We uphold the highest standards of ethical craftsmanship, ensuring fair wages and safe working conditions for all our artisans and craftspeople.',
  },
  {
    title: 'Sustainable Luxury',
    description:
      'Our commitment to sustainability extends to every aspect of production, from sourcing eco-friendly materials to implementing responsible manufacturing processes.',
  },
  {
    title: 'Transparent Practices',
    description:
      'We maintain complete transparency in our supply chain and business operations, building trust through honest communication with our clients and partners.',
  },
  {
    title: 'Artisanal Heritage',
    description:
      'We preserve and promote traditional craftsmanship while supporting local artisans and their communities through fair trade practices.',
  },
  {
    title: 'Environmental Stewardship',
    description:
      'We minimize our environmental impact through sustainable practices, from fabric selection to packaging, ensuring our luxury comes with a conscience.',
  },
  {
    title: 'Client-Centric Excellence',
    description:
      'We believe in building lasting relationships with our clients, offering personalized service and maintaining the highest standards of quality in every interaction.',
  },
]

export default function Ethics() {
  return (
    <>
      <div className='overflow-hidden'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-20'>
          <div className='flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-20'>
            <div className='lg:w-5/12 xl:w-5/12 space-y-10'>
              <div className='mb-10'>
                <h2 className='text-3xl font-serif font-medium md:text-4xl mb-4'>
                  Our Ethical Commitment
                </h2>
                <h3 className='text-lg md:leading-relaxed font-light text-muted-foreground'>
                  At Fabriks & Fashion, we believe that true luxury must be built on a foundation of ethical practices and sustainable values. Our commitment to excellence extends beyond design and craftsmanship to encompass every aspect of our business.
                </h3>
                <h3 className='text-lg md:leading-relaxed font-light text-muted-foreground mt-4'>
                  We set the standard for ethical luxury fashion, combining traditional craftsmanship with modern sustainability practices to create pieces that are as responsible as they are beautiful.
                </h3>
              </div>
            </div>

            <div className='lg:w-7/12 xl:w-7/12 flex-none relative'>
              <div className='relative grid grid-cols-1 md:grid-cols-2  gap-6'>
                {ethics.map((card, index) => (
                  <div key={index} className='p-5 border-1 border-black'>
                    <h4 className='text-lg font-serif font-medium mb-2'>
                      {card.title}
                    </h4>
                    <p className='leading-relaxed text-muted-foreground font-light'>
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END Features Section: Vertical Cards */}
    </>
  )
}
