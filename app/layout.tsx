import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600', '700'] })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Fabriks & Fashion | Luxury Bespoke Fashion House',
  description: 'Discover Fabriks & Fashion, a distinguished luxury fashion house where personal style meets exceptional craftsmanship. Specializing in bespoke designs, sustainable fashion, and timeless pieces that celebrate individuality through ethical design and masterful tailoring.',
  keywords: 'luxury fashion, bespoke design, sustainable fashion, ethical fashion, custom tailoring, high-end fashion, couture, luxury fabrics, fashion house',
  openGraph: {
    title: 'Fabriks & Fashion | Luxury Bespoke Fashion House',
    description: 'Discover Fabriks & Fashion, a distinguished luxury fashion house where personal style meets exceptional craftsmanship.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
} 