'use server'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Service = {
  title: string
  slug: string
  description: string
  image: string
  image_alt: string
  content: string
}

export async function getAllServices(): Promise<Service[]> {
  const contentDirectory = path.join(process.cwd(), 'content')
  const files = fs.readdirSync(contentDirectory)

  const services = files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const filePath = path.join(contentDirectory, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        title: data.title,
        slug: file.replace('.md', ''),
        description: data.description,
        image: data.image,
        image_alt: data.image_alt,
        content,
      }
    })

  return services
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const services = await getAllServices()
  return services.find((service) => service.slug === slug) || null
}
