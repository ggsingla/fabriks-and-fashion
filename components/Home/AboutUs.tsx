export default function AboutUs() {
  return (
    <section
      id='about'
      aria-labelledby='about-heading'
      className='container xl:max-w-7xl mx-auto px-4 py-20 lg:px-8 lg:py-28'>
      <div className='flex flex-col items-center text-center max-w-3xl mx-auto'>
        <p
          id='about-heading'
          className='font-sans text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4'>
          About the house
        </p>
        <h2 className='font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl'>
          Fabriks & Fashion
        </h2>
        <div
          className='w-12 h-px bg-stone-300/80 my-5'
          aria-hidden
        />
        <p className='font-sans text-[15px] md:text-base leading-relaxed font-light text-muted-foreground'>
          Fabriks & Fashion represents the pinnacle of personalized fashion design, where each creation tells a unique story. As a distinguished fashion house, we specialize in ethically crafted pieces that celebrate individuality combining traditional artistry with contemporary design for timeless results.
        </p>
      </div>
    </section>
  )
}
