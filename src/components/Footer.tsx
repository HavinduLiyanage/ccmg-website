import React from 'react'
import Link from 'next/link'
import { Phone, Linkedin, Twitter, Facebook, Youtube, Award, ArrowRight } from 'lucide-react'

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'YouTube', href: '#', icon: Youtube },
]

const serviceLinks = [
  { name: 'PPP Advisory', href: '/services#ppp-advisory' },
  { name: 'Sustainability & Carbon Services', href: '/services#sustainability' },
  { name: 'Strategic Advisory', href: '/services#strategic-advisory' },
  { name: 'Digital Transformation', href: '/services#digital-transformation' },
]

const productLinks = [
  { name: 'Products Overview', href: '/sustainability#product' },
  { name: 'GHG Tracking System', href: '/sustainability#product' },
]

const partnerLinks = [
  { name: 'Carbon Compass', href: 'https://www.carboncompass.com/' },
  { name: 'Earthood', href: 'https://www.earthood.com/' },
]

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-accent-dark to-neutral-charcoal text-neutral-white border-t border-accent-green/20">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* About */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-semibold tracking-tight">CCMG</span>
            </div>
            <h3 className="sr-only">About CCMG</h3>
            <p className="text-sm leading-relaxed text-white/80 mb-4 max-w-md">
              Colombo Consultants & Management Group (CCMG) is a boutique advisory and transaction partner helping governments, businesses, and development agencies structure sustainable, bankable, and resilient infrastructure projects in Sri Lanka and the region.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <Phone className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <a href="tel:+94773047315" className="hover:underline hover:text-text-accent transition-colors">
                  +94 77 304 7315
                </a>
              </div>
              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-3">Quick Links</h3>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-text-accent hover:underline underline-offset-4 transition-colors duration-normal inline-flex items-center gap-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-3">Services</h3>
            <ul className="space-y-2.5 mb-5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-text-accent hover:underline underline-offset-4 transition-colors duration-normal">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-white/80 hover:text-text-accent hover:underline underline-offset-4 transition-colors duration-normal">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-3">Partners</h3>
            <ul className="space-y-2.5">
              {partnerLinks.map((partner) => (
                <li key={partner.name}>
                  <a href={partner.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/80 hover:text-text-accent hover:underline underline-offset-4 transition-colors duration-normal">
                    {partner.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-3">Connect With Us</h3>
            <p className="text-sm text-white/80 mb-4">Follow our journey in building sustainable infrastructure.</p>
            <div className="flex flex-wrap gap-3 mb-5">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-accent-gold/40 bg-white/5 backdrop-blur flex items-center justify-center text-text-accent hover:bg-accent-green hover:text-neutral-white hover:border-accent-gold transition-all duration-normal"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
            <div className="sm:hidden">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent-green text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-accent-dark transition-colors">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        

        {/* Bottom Bar */}
        <div className="mt-8 lg:mt-10 pt-6 border-t border-white/10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-white/70">Built with integrity in Sri Lanka · Global standards, local trust</div>
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Award className="w-4 h-4 text-accent-gold" />
            <span>Gold Standard Partner</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left">
            <p className="text-sm text-white/70">© {new Date().getFullYear()} Colombo Consultants & Management Group.</p>
            <Link href="/privacy" className="text-sm text-white/80 hover:text-text-accent hover:underline underline-offset-4 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/80 hover:text-text-accent hover:underline underline-offset-4 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}