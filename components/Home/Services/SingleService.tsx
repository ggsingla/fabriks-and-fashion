import { Service } from '@components/common/NavBar'
import Image from 'next/image'
import { remark } from 'remark'
import html from 'remark-html'

type data = Service

export default function ServicePage({ data }: { data: data }) {
  const content = remark()
    .use(html)
    .processSync(data?.content || '')
    .toString()

  return (
    <>
      <div className='space-y-16 container mx-auto px-4 py-10'>
        <div className='text-center'>
          <h2 className='font-serif text-3xl md:text-4xl font-semibold mb-4 capitalize'>
            {data?.title}
          </h2>
        </div>

        <article className='max-w-5xl mx-auto'>
          <div role='img' className='relative h-[300px] md:h-[400px] lg:h-[500px] w-full'>
            <Image
              src={data?.image}
              fill
              alt={data?.image_alt}
              className='object-cover object-center'
            />
          </div>
          <article
            className='prose md:prose-lg prose-orange mx-auto mt-8 prose-headings:font-serif prose-headings:font-medium prose-headings:text-foreground prose-p:font-light prose-p:text-muted-foreground prose-li:font-light prose-li:text-muted-foreground'
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </article>
      </div>
    </>
  )
}
