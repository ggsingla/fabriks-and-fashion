import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })

export const metadata: Metadata = {
  title: 'Tailor and Company - Exceptional Tailoring for Your Unique Style',
  description: 'At tailorandcompany.com, our philosophy is simple: exceptional tailoring for your unique style. We use the finest fabrics, skilled craftsmanship, and innovative techniques to create high-quality garments. With personalized attention to detail, we ensure your satisfaction every step of the way. Your journey, our honor.',
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