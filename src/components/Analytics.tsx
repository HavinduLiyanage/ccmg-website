'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Image from 'next/image'

// Analytics configuration
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '000000000000000'

export default function Analytics() {
  useEffect(() => {
    // Initialize analytics with default consent state
    if (typeof window !== 'undefined') {
      window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        wait_for_update: 500
      })
    }
  }, [])

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      
      {/* Meta Pixel noscript fallback */}
      <noscript>
        <Image 
          height={1} 
          width={1} 
          style={{display: 'none'}}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}

// Analytics tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      custom_parameter: true,
      ...parameters
    })
  }
}

export const trackConversion = (conversionType: 'form_submit' | 'demo_request' | 'contact', value?: number) => {
  if (typeof window !== 'undefined') {
    // GA4 conversion
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: GA_MEASUREMENT_ID,
        value: value || 1,
        currency: 'USD',
        transaction_id: `${conversionType}_${Date.now()}`
      })
    }
    
    // Meta Pixel conversion
    if (window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: conversionType,
        value: value || 1,
        currency: 'USD'
      })
    }
  }
}

export const trackPageView = (url: string, title: string) => {
  if (typeof window !== 'undefined') {
    if (window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_title: title,
        page_location: url,
      })
    }
    
    if (window.fbq) {
      window.fbq('track', 'PageView')
    }
  }
}
