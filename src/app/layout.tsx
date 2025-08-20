import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'

export const metadata: Metadata = {
  metadataBase: new URL('https://colomboconsultants.lk'),
  title: {
    default: 'CCMG - Colombo Consultants & Management Group',
    template: '%s | CCMG'
  },
  description: 'CCMG is Sri Lanka\'s premier advisory partner, specializing in PPP projects, sustainability consulting, and digital transformation. We connect insight to impact with expert consulting services for infrastructure, ESG, and strategic partnerships. Contact us at +94 77 304 7315.',
  keywords: [
    'consultancy',
    'management',
    'sustainability',
    'Sri Lanka',
    'Gold Standard',
    'projects',
    'PPP',
    'infrastructure',
    'ESG',
    'carbon management',
    'water supply',
    'reconstruction',
    'corporate development'
  ],
  authors: [{ name: 'CCMG Team' }],
  creator: 'CCMG',
  publisher: 'CCMG',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://colomboconsultants.lk',
    siteName: 'CCMG - Colombo Consultants & Management Group',
    title: 'CCMG - Sri Lanka\'s Leading Advisory Partner',
    description: 'Connecting insight to impact across PPP, sustainability, and digital transformation. Expert consulting services for infrastructure, ESG, and strategic partnerships.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CCMG - Colombo Consultants & Management Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCMG - Sri Lanka\'s Leading Advisory Partner',
    description: 'Connecting insight to impact across PPP, sustainability, and digital transformation.',
    images: ['/images/og-image.jpg'],
    creator: '@ccmg_lk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://colomboconsultants.lk',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0E5E4A" />
        <meta name="msapplication-TileColor" content="#0E5E4A" />
        
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Colombo Consultants & Management Group (CCMG)",
              "url": "https://colomboconsultants.lk",
              "logo": "https://colomboconsultants.lk/images/logo.png",
              "description": "Sri Lanka's premier advisory partner specializing in PPP projects, sustainability consulting, and digital transformation.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "LK",
                "addressLocality": "Colombo"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+94-77-304-7315",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/ccmg-lk"
              ]
            })
          }}
        />
      </head>
      <body className="font-sans bg-neutral-white text-primary-dark">
        <Analytics />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  )
} 