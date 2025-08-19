'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consentData))
    
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // GA4 initialization
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: 'granted',
          ad_storage: 'granted'
        })
      }
      
      // Meta Pixel initialization
      if (window.fbq) {
        window.fbq('consent', 'grant')
      }
    }
    
    setIsVisible(false)
  }

  const handleAcceptSelected = () => {
    const consentData = {
      ...preferences,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consentData))
    
    // Initialize analytics based on preferences
    if (typeof window !== 'undefined') {
      if (window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: preferences.analytics ? 'granted' : 'denied',
          ad_storage: preferences.marketing ? 'granted' : 'denied'
        })
      }
      
      if (window.fbq && preferences.marketing) {
        window.fbq('consent', 'grant')
      }
    }
    
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cookie-consent', JSON.stringify(consentData))
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-medium-gray shadow-2xl"
        >
          <div className="max-w-6xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <Cookie className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green mt-1 flex-shrink-0" />
              
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-primary-dark mb-2 text-sm sm:text-base">
                  We use cookies to enhance your experience
                </h3>
                <p className="text-xs sm:text-sm text-neutral-charcoal mb-3 sm:mb-4 leading-relaxed">
                  We use necessary cookies to make our website work. We&apos;d also like to set optional cookies to help us improve our website and analyze how it&apos;s used.
                </p>
                
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <input
                      type="checkbox"
                      id="necessary"
                      checked={preferences.necessary}
                      disabled
                      className="rounded border-neutral-medium-gray text-accent-green focus:ring-accent-green w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <label htmlFor="necessary" className="text-xs sm:text-sm font-medium text-primary-dark">
                      Necessary (Always active)
                    </label>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <input
                      type="checkbox"
                      id="analytics"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                      className="rounded border-neutral-medium-gray text-accent-green focus:ring-accent-green w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <label htmlFor="analytics" className="text-xs sm:text-sm font-medium text-primary-dark">
                      Analytics (Google Analytics)
                    </label>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <input
                      type="checkbox"
                      id="marketing"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                      className="rounded border-neutral-medium-gray text-accent-green focus:ring-accent-green w-4 h-4 sm:w-5 sm:h-5"
                    />
                    <label htmlFor="marketing" className="text-xs sm:text-sm font-medium text-primary-dark">
                      Marketing (Meta Pixel, Advertising)
                    </label>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="bg-accent-green text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium hover:bg-accent-dark transition-colors text-xs sm:text-sm min-h-[44px]"
                  >
                    Accept all
                  </button>
                  <button
                    onClick={handleAcceptSelected}
                    className="bg-neutral-white text-primary-dark px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-medium border border-neutral-medium-gray hover:bg-neutral-light-gray transition-colors text-xs sm:text-sm min-h-[44px]"
                  >
                    Accept selected
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="text-neutral-dark-gray hover:text-primary-dark transition-colors px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm min-h-[44px]"
                  >
                    Reject all
                  </button>
                </div>
              </div>
              
              <button
                onClick={() => setIsVisible(false)}
                className="text-neutral-dark-gray hover:text-primary-dark transition-colors p-1 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg hover:bg-neutral-light-gray"
                aria-label="Close cookie banner"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Type declarations for global analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}
