'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, Send, CheckCircle, Linkedin, Twitter, Facebook } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+94 11 234 5678', '+94 77 123 4567'],
    link: 'tel:+94112345678',
    linkText: 'Call Now'
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@ccmg.lk', 'projects@ccmg.lk'],
    link: 'mailto:info@ccmg.lk',
    linkText: 'Send Email'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
    link: '#',
    linkText: 'Schedule Meeting'
  }
]

const inquiryTypes = [
  'General Inquiry',
  'Project Consultation',
  'Partnership Opportunity',
  'Sustainability Services',
  'Strategic Advisory',
  'Financial Advisory',
  'SME Support',
  'Other'
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-neutral-white py-16">
        <div className="section-container">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-primary-dark mb-6">
              Get in <span className="text-accent-green">Touch</span>
            </h1>
            <p className="text-lg text-neutral-dark-gray leading-relaxed mb-8">
              Tell us your challenge and goals. We&apos;ll connect you to the right expertise and a clear plan
              for confident execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-primary-light py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={info.title}
                  className="card text-center group p-4 sm:p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-accent-green/20 transition-colors duration-normal">
                    <Icon className="w-5 h-5 sm:w-6 sm:w-6 text-accent-green" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary-dark mb-2 sm:mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3 sm:mb-4">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-neutral-dark-gray text-xs sm:text-sm">{detail}</p>
                    ))}
                  </div>
                  <a 
                    href={info.link} 
                    className="text-accent-green text-xs sm:text-sm font-medium hover:text-accent-dark transition-colors inline-block py-1"
                  >
                    {info.linkText}
                  </a>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-neutral-white py-16">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary-light p-4 sm:p-6 lg:p-8 rounded-lg">
                <h2 className="text-xl sm:text-2xl font-semibold text-primary-dark mb-2">Send Us a Message</h2>
                <p className="text-neutral-dark-gray text-sm sm:text-base mb-4 sm:mb-6">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <motion.div
                    className="text-center py-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-16 h-16 text-accent-green mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-primary-dark mb-2">Message Sent!</h3>
                    <p className="text-neutral-dark-gray">
                      Thank you for contacting us. We&apos;ll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-primary-dark mb-1">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-primary-dark mb-1">
                        Inquiry Type *
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        required
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                      >
                        <option value="">Select an inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary-dark mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project or how we can help..."
                        className="w-full px-3 py-2 border border-neutral-medium-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-neutral-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-primary-light py-16">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-green text-sm font-medium uppercase tracking-wide mb-2">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: 'What types of organizations do you work with?',
                answer: 'We work with government agencies, NGOs, private companies, SMEs, and international organizations across various sectors.'
              },
              {
                question: 'How long does a typical consulting project take?',
                answer: 'Project duration varies based on scope and complexity, ranging from 3 months for strategic planning to 18+ months for large-scale implementations.'
              },
              {
                question: 'Do you provide services outside Sri Lanka?',
                answer: 'Yes, we work regionally across South Asia and have partnerships with organizations in India and other neighboring countries.'
              },
              {
                question: 'What makes CCMG different from other consultancies?',
                answer: 'Our Gold Standard certification, deep local expertise, proven track record, and commitment to sustainable impact set us apart.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-primary-dark mb-3">{faq.question}</h3>
                <p className="text-neutral-dark-gray text-sm leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 