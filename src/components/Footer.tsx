import React from 'react'
import Link from 'next/link'
import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

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
]

export default function Footer() {
  return (
    <footer className="bg-neutral-white border-t border-neutral-medium-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-accent-green" />
              <span className="text-xl font-bold text-primary-dark">CCMG</span>
            </div>
            <p className="text-neutral-dark-gray text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-md">
              Colombo Consultants & Management Group — connecting insight to impact across Sri Lanka.
              Practical advice. Proven delivery.
            </p>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 text-sm text-neutral-dark-gray">
                <MapPin className="w-4 h-4 text-accent-green mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">123 Galle Road, Colombo 03, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-dark-gray">
                <Phone className="w-4 h-4 text-accent-green flex-shrink-0" />
                <a href="tel:+94112345678" className="hover:text-accent-green transition-colors">
                  +94 11 234 5678
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-dark-gray">
                <Mail className="w-4 h-4 text-accent-green flex-shrink-0" />
                <a href="mailto:info@ccmg.lk" className="hover:text-accent-green transition-colors">
                  info@ccmg.lk
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-dark font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-neutral-dark-gray hover:text-accent-green transition-colors duration-normal block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-primary-dark font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent-green/10 flex items-center justify-center text-accent-green hover:bg-accent-green hover:text-neutral-white transition-all duration-normal"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                )
              })}
            </div>
            
            {/* Mobile Contact CTA */}
            <div className="sm:hidden">
              <Link
                href="/contact"
                className="inline-block bg-accent-green text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-accent-dark-green transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-medium-gray mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-dark-gray text-center sm:text-left">
            © {new Date().getFullYear()} Colombo Consultants & Management Group. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center sm:text-left">
            <Link href="/privacy" className="text-sm text-neutral-dark-gray hover:text-accent-green transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-neutral-dark-gray hover:text-accent-green transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 