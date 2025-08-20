'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Users, Target, Globe, Leaf, Award, Building, Briefcase, TrendingUp } from 'lucide-react'


const services = [
  {
    icon: Globe,
    title: 'Strategic Local Partnerships & Representation',
    description: 'Enabling international firms to successfully enter, operate, and expand in Sri Lanka through trusted local partnerships, market navigation, and on-ground representation.',
  },
  {
    icon: Building,
    title: 'PPP Structure, Policy & Stakeholder Engagement',
    description: 'Designing, structuring, and managing Public-Private Partnerships—integrating project delivery, policy alignment, and multi-stakeholder engagement for regulatory and operational success.',
  },
  {
    icon: TrendingUp,
    title: 'IT & Digital Services Facilitation',
    description: 'Driving digital transformation for both public and private sector clients, from IT vendor selection to seamless technology adoption, integration, and project support.',
  },
  {
    icon: Leaf,
    title: 'Sustainability & ESG Advisory',
    description: 'Empowering organizations to develop, implement, and report on ESG strategies for long-term value, compliance, and sustainable impact.',
  },
]

const projects = [
  {
    id: 1,
    title: 'US Embassy Construction Project',
    sector: 'Strategic Advisory',
    image: '/images/projects/us embassy construction project.jpg',
    description: 'Strategic advisory for construction of new American embassy building in Sri Lanka. US Embassy construction project Colombo 2022.',
  },
  {
    id: 2,
    title: 'Mallavi Urban Water Supply Scheme',
    sector: 'Infrastructure',
    image: '/images/projects/mallavil urban water supply scheme.jpg',
    description: 'LK Water Supply and Sanitation Improvement Project: Construction of Mallavi Urban Water Supply Scheme in Mullaitivu District',
  },
  {
    id: 3,
    title: 'Mahaweli Water Security Investment Program',
    sector: 'Water Infrastructure',
    image: '/images/projects/Mahaweli water security investment program.png',
    description: 'ADB and Government of Sri Lanka collaboration delivering surplus water from Mahaweli river basin to dry zones. Building 260+ km of canals, reservoirs, and irrigation infrastructure while providing clean drinking water to over 350,000 people.',
  },
]

const testimonials = [
  {
    quote: 'CCMG transformed our organization with their strategic insights and practical solutions. Their expertise in sustainability made all the difference.',
    author: 'Sarah Fernando',
    title: 'Director, Green Lanka Foundation',
    rating: 5,
  },
  {
    quote: 'Working with CCMG on our strategic project was exceptional. Their attention to detail and commitment to excellence is unmatched.',
    author: 'Rajesh Gupta',
    title: 'Project Manager, EcoSolutions India',
    rating: 5,
  },
  {
    quote: 'The team at CCMG provided invaluable guidance for our SME development program. Results exceeded our expectations.',
    author: 'Michael Chen',
    title: 'CEO, TechStart Ventures',
    rating: 5,
  },
]

export default function HomePage() {
  const [currentPhase, setCurrentPhase] = useState(0)
  const [showFinalText, setShowFinalText] = useState(false)
  const [typedText1, setTypedText1] = useState('')
  const [typedText2, setTypedText2] = useState('')
  const [dotCount, setDotCount] = useState(0)
  
  const fullText1 = "We connect the dots"
  const fullText2 = "and turn complexity into your competitive advantage"

  useEffect(() => {
    if (currentPhase === 0) {
      // Type out "Connecting the dots"
      let index = 0
      const timer = setInterval(() => {
        if (index <= fullText1.length) {
          setTypedText1(fullText1.slice(0, index))
          index++
        } else {
          clearInterval(timer)
          setTimeout(() => setCurrentPhase(1), 1000) // Wait 1 second before next phase
        }
      }, 100) // Type speed: 100ms per character
      return () => clearInterval(timer)
    } else if (currentPhase === 1) {
      // Type three dots one by one, then continue
      setDotCount(0)
      const dotInterval = setInterval(() => {
        setDotCount((prev) => (prev < 3 ? prev + 1 : prev))
      }, 300)

      const proceed = setTimeout(() => {
        clearInterval(dotInterval)
        setCurrentPhase(2)
      }, 1300) // ~900ms for 3 dots + slight pause

      return () => {
        clearInterval(dotInterval)
        clearTimeout(proceed)
      }
    } else if (currentPhase === 2) {
      // Type out "turning complexity into opportunity"
      let index = 0
      const timer = setInterval(() => {
        if (index <= fullText2.length) {
          setTypedText2(fullText2.slice(0, index))
          index++
        } else {
          clearInterval(timer)
          setTimeout(() => setCurrentPhase(3), 1000) // Wait 1 second before final state
        }
      }, 100) // Type speed: 100ms per character
      return () => clearInterval(timer)
    } else if (currentPhase === 3) {
      // Show final state with both texts
      setTimeout(() => setShowFinalText(true), 500)
    }
  }, [currentPhase])

  const renderHeadline = () => {
    if (showFinalText) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-wide text-text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span>
              {fullText1}
            </span>
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-wide text-text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span>
              {fullText2}
            </span>
          </motion.h1>
        </motion.div>
      )
    }

    return (
      <div className="space-y-6">
        {/* First line */}
        <motion.h1
          className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight tracking-wide text-text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>
            {typedText1}
            {currentPhase === 1 && '.'.repeat(dotCount)}
            {currentPhase < 2 && (
              <span className="inline-block w-[2px] bg-accent-gold ml-1 align-middle animate-pulse" style={{ height: '1em' }} />
            )}
          </span>
        </motion.h1>
        
        {/* Second line - only show when typing */}
        {currentPhase >= 2 && (
          <motion.h1
            className="text-3xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-wide text-text-primary drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span>
              {typedText2}
              {currentPhase === 2 && (
                <span className="inline-block w-[2px] bg-accent-gold ml-1 align-middle animate-pulse" style={{ height: '1em' }} />
              )}
            </span>
          </motion.h1>
        )}
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] sm:min-h-screen flex items-center overflow-hidden">
        {/* Background Video with Enhanced Overlay */}
        <div className="absolute inset-0 -top-16 sm:-top-32 -z-10 pointer-events-none overflow-hidden">
          <video 
            className="w-full h-full object-cover blur-[2px] sm:blur-[3px]" 
            autoPlay 
            muted 
            loop 
            playsInline 
            aria-hidden="true"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          
          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#081923]/55 via-[#0E3A2E]/55 to-[#0E3A2E]/45"></div>
          
          {/* Soft vignette effect */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/15"></div>
        </div>

        {/* Content Container */}
        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Headlines - Outside Glass Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8 sm:mb-16"
            >
              {renderHeadline()}
              
              {/* Animated Underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-4 sm:mt-8"
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Glass Card Container - Only for Content Below Headline */}
            <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 mb-6 sm:mb-8">

              {/* Enhanced CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link 
                    href="/services" 
                    className="hero-button-primary inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg shadow-lg"
                  >
                    <span>Explore Our Services</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                  <Link 
                    href="/contact" 
                    className="hero-button-secondary inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro/About Preview */}
      <section className="bg-primary-light py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title text-left mb-6">
                Trusted partner for local high value projects
              </h2>
              <p className="text-neutral-dark-gray leading-relaxed mb-6">
                For more than a decade, CCMG has connected decision makers with the right expertise and
                practical guidance. We combine global perspective with deep local insight across public
                sector delivery, organizational transformation, PPPs, and sustainability.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-charcoal">Strategic partnerships across South Asia</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-charcoal">Successful project implementations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-charcoal">Expert sustainability solutions</span>
                </div>
              </div>
              <Link href="/about" className="btn-primary">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="CCMG Team"
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="bg-neutral-white py-16">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-green text-sm font-medium uppercase tracking-wide mb-2">Our Services</p>
            <h2 className="section-title">Core Service Pillars</h2>
            <p className="section-subtitle">
              From PPP structures to ESG strategies, we deliver practical, compliant, and actionable advice
              across four core pillars tailored to your organization&apos;s goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="group bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:border-accent-green/40 hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    {/* Simple Icon */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-green/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-accent-green/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent-green" />
                    </div>
                    
                    {/* Clean Typography */}
                    <h3 className="text-base sm:text-lg font-semibold text-primary-dark mb-2 sm:mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Simple Link */}
                    <Link href="/services">
                      <div className="mt-3 sm:mt-4 flex items-center justify-center text-accent-green text-xs sm:text-sm font-medium group-hover:text-accent-dark transition-colors duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/services" className="btn-primary">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-primary-light py-16">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-green text-sm font-medium uppercase tracking-wide mb-2">Our Work</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              See how connecting the right expertise with disciplined execution delivered measurable impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-neutral-white w-full">
                      <span className="inline-block text-xs bg-accent-green text-white px-3 py-1.5 rounded-full font-medium mb-3">{project.sector}</span>
                      <h3 className="text-xl font-bold mb-3 leading-tight">{project.title}</h3>
                      <p className="text-sm leading-relaxed opacity-95 line-clamp-3">{project.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/projects" className="btn-primary">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Banner */}
      <section className="relative bg-gradient-to-br from-accent-green via-accent-dark to-accent-forest text-white py-20">
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Icon and Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              {/* Simple Header */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                  <Leaf className="w-8 h-8" />
                </div>
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Sustainability & ESG Solutions
              </motion.h2>

              <motion.p 
                className="text-xl leading-relaxed mb-6 opacity-90 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                As a local partner for Gold Standard, we&apos;re shaping Sri Lanka&apos;s path toward a low-carbon, climate-resilient, and socially responsible future.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed mb-8 opacity-90 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                We combine global ESG standards with local insight to design and deliver initiatives that create measurable environmental, social, and governance impact for communities, businesses, and the economy.
              </motion.p>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Key Focus Areas Header */}
              <motion.h3
                className="text-2xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Key Focus Areas:
              </motion.h3>

              {/* Three Key Services */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <p className="text-white/90 leading-relaxed mb-2">
                        <span className="font-semibold">Carbon project origination & registration</span> — Leading Gold Standard–aligned initiatives in Sri Lanka, connecting global ESG and carbon market opportunities with local project execution to deliver measurable climate and community impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <p className="text-white/90 leading-relaxed mb-2">
                        <span className="font-semibold">Corporate GHG tracking & reporting</span> — Providing end-to-end Scope 1–3 monitoring with dashboards and actionable insights, enabling organizations to meet sustainability targets and strengthen ESG performance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <p className="text-white/90 leading-relaxed mb-2">
                        <span className="font-semibold">Readiness & capacity building</span> — Equipping stakeholders with the policies, skills, and systems they need to meet global ESG standards, ensuring projects are delivered with transparency, credibility, and long-term success.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/sustainability" 
                  className="group inline-flex items-center gap-3 bg-accent-green text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-accent-dark transition-all duration-300 shadow-sm"
                >
                  <span>Explore Sustainability & ESG</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link 
                  href="/contact" 
                  className="group inline-flex items-center gap-3 bg-transparent text-white border-2 border-white/30 px-6 py-3 rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-300"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative bg-gradient-to-br from-neutral-white via-primary-light to-accent-green/10 py-24">
        <div className="section-container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Enhanced Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-6xl font-bold text-primary-dark mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Ready to move from{' '}
                <span className="bg-gradient-to-r from-accent-green via-accent-dark to-accent-forest bg-clip-text text-transparent">
                  insight to impact
                </span>
                ?
              </motion.h2>
              
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-dark mx-auto mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: "96px" }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl text-neutral-charcoal leading-relaxed mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
                              Tell us your challenge. We&apos;ll connect you with the right expertise and a clear,
                accountable path to results.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent-green to-accent-dark text-white px-10 py-5 rounded-lg font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Start Your Transformation</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/services" 
                  className="group inline-flex items-center gap-3 bg-white text-primary-dark px-10 py-5 rounded-lg font-bold text-xl border-2 border-gray-200 hover:border-accent-green hover:bg-accent-green/5 transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <span className="group-hover:text-accent-green transition-colors duration-300">Explore Services</span>
                  <Target className="w-6 h-6 group-hover:text-accent-green group-hover:rotate-90 transition-all duration-300" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-8 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-neutral-charcoal">
                <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Available for consultation</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-charcoal">
                <Globe className="w-4 h-4 text-accent-green" />
                <span className="text-sm">+94 77 304 7315</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-charcoal">
                <CheckCircle className="w-4 h-4 text-accent-green" />
                <span className="text-sm">Response within 24 hours</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 