'use client'

const GALLERY_IMAGES = [
  { src: '/product/gallery-06.webp', alt: 'Collection' },
  { src: '/product/gallery-01.webp', alt: 'Collection' },
  { src: '/product/gallery-05.webp', alt: 'Collection' },
  { src: '/product/gallery-03.webp', alt: 'Collection' },
  { src: '/product/gallery-02.webp', alt: 'Collection' },
  { src: '/product/gallery-04.webp', alt: 'Collection' },
]

export default function Gallery() {
  return (
    <section id="gallery" aria-label="Collection gallery">
      <div className="container xl:max-w-7xl mx-auto px-4 py-20 lg:px-8 lg:py-32">
        {/* Section header — minimal, confident */}
        <header className="font-serif mb-14 lg:mb-20 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">
            Our Collection
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground font-sans font-light leading-relaxed">
            Curated pieces from the atelier.
          </p>
        </header>

        <div className="grid grid-cols-3 grid-rows-3 gap-4 sm:gap-5 lg:gap-6">
          {/* First image: 2 cols × 2 rows */}
          <div className="col-span-2 row-span-2 relative overflow-hidden min-h-0">
            <img
              src={GALLERY_IMAGES[0].src}
              alt={GALLERY_IMAGES[0].alt}
              className="w-full h-full object-cover transition-[transform,opacity] duration-500 ease-out hover:opacity-[0.97]"
            />
          </div>
          {/* Remaining 5 cells */}
          {GALLERY_IMAGES.slice(1, 6).map((img, i) => (
            <div key={i} className="relative overflow-hidden aspect-square min-h-0">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-[transform,opacity] duration-500 ease-out hover:opacity-[0.97]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
