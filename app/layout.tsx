import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', weight: ['400', '500', '600', '700'] })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic']
})

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
  icons: {
    icon: [
      { url: '/company/hanger-black.svg', media: '(prefers-color-scheme: light)' },
      { url: '/company/hanger-white.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function updateFavicon() {
                const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const link = document.querySelector("link[rel*='icon']");
                if (link) {
                  link.href = isDark ? '/company/hanger-white.svg' : '/company/hanger-black.svg';
                }
              }
              updateFavicon();
              window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateFavicon);
            `,
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 