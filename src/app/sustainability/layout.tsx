import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sustainability at CCMG — Gold Standard–Aligned Net Zero + GHG Data Systems',
  description: 'Gold Standard-aligned sustainability services with Carbon Compass carbon accounting and Earthood verification. Turn climate ambition into audited outcomes.',
  keywords: 'Gold Standard, sustainability, carbon accounting, GHG verification, net zero, Carbon Compass, Earthood, Sri Lanka, CCMG',
  openGraph: {
    title: 'Sustainability at CCMG — Gold Standard–Aligned Net Zero + GHG Data Systems',
    description: 'Gold Standard-aligned sustainability services with Carbon Compass carbon accounting and Earthood verification.',
    url: 'https://ccmg.lk/sustainability',
    type: 'website',
    locale: 'en_US',
    siteName: 'CCMG'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sustainability at CCMG — Gold Standard–Aligned Net Zero + GHG Data Systems',
    description: 'Gold Standard-aligned sustainability services with Carbon Compass carbon accounting and Earthood verification.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function SustainabilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "ProfessionalService"],
            "name": "CCMG Sustainability Services",
            "description": "Gold Standard-aligned sustainability services with Carbon Compass and Earthood partners",
            "url": "https://ccmg.lk/sustainability",
            "serviceType": "Sustainability Consulting",
            "areaServed": {
              "@type": "Country",
              "name": "Sri Lanka"
            },
            "provider": {
              "@type": "Organization",
              "name": "CCMG",
              "url": "https://ccmg.lk"
            },
            "@graph": [
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Do we need credits?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We prioritise value-chain emissions cuts first. Credits should only be used for residuals after comprehensive reduction efforts."
                    }
                  },
                  {
                    "@type": "Question", 
                    "name": "How long to first report/verification?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Typical timeline is 8–12 weeks for first GHG report, depending on data access and organizational readiness."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's 'credible claims' and who signs it off?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Credible claims follow Gold Standard frameworks to avoid greenwashing. CCMG provides guidance, with legal review handoff for final approval."
                    }
                  }
                ]
              }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
