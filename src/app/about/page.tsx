'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download, CheckCircle, Calendar, Users, Globe, Target } from 'lucide-react'

const milestones = [
  {
    year: '2006',
    title: 'Incorporated',
    description: 'CCMG registered as a private limited company under the Sri Lankan Companies Act.',
    impact: 'Foundation Established',
    icon: '🏢',
    longDescription: 'CCMG was established as a private limited company under the Sri Lankan Companies Act, marking the beginning of our journey as a strategic advisory firm focused on infrastructure development and public-private partnerships.'
  },
  {
    year: '2010',
    title: 'ADB Tsunami Rebuilding',
    description: 'Led multi-disciplinary Implementation Review for ADB\'s TAAAP, providing Team Leader and 5 of 9 experts.',
    impact: 'International Recognition',
    icon: '🌊',
    longDescription: 'Led the multi-disciplinary Implementation Review for ADB\'s Tsunami Affected Areas Reconstruction Project (TAAAP), providing the Team Leader and 5 of 9 experts. This project established our credibility in international development and disaster recovery.'
  },
  {
    year: '2015',
    title: 'Water Sector Reform',
    description: 'Co-drafted amendments empowering Public Utilities Commission as regulator for NWSDB.',
    impact: 'Policy Leadership',
    icon: '💧',
    longDescription: 'Co-drafted amendments to empower the Public Utilities Commission as regulator for the National Water Supply and Drainage Board (NWSDB). Delivered training and awareness programs, with amendments accepted by ADB and Government of Sri Lanka.'
  },
  {
    year: '2018',
    title: 'Environmental Practice',
    description: 'Established specialized EIA capabilities in water resources, waste management, and coastal zones.',
    impact: 'Expertise Expansion',
    icon: '🌱',
    longDescription: 'Established specialized Environmental Impact Assessment (EIA) capabilities with strengths in water resources, waste management, and coastal zone management. This expanded our service portfolio and environmental expertise.'
  },
  {
    year: '2022',
    title: 'Sustainability Pivot',
    description: 'Initiated Gold Standard–aligned sustainability track with corporate GHG tracking platform.',
    impact: 'Future-Focused',
    icon: '♻️',
    longDescription: 'Initiated a Gold Standard–aligned sustainability track, standing up corporate GHG tracking via a partner platform (Scope 1–2, optional 3) with dashboards, data capture, reporting, configuration, and an AI assistant.'
  },
  {
    year: '2024',
    title: 'Regional Leadership',
    description: 'Became Sri Lanka\'s trusted partner for unlocking high-value infrastructure opportunities.',
    impact: 'Market Leadership',
    icon: '🚀',
    longDescription: 'Established ourselves as Sri Lanka\'s trusted advisory partner for unlocking high-value infrastructure opportunities, guiding international partners through complex policy, public affairs, and stakeholder landscapes.'
  },
]



const partnerships = [
  {
    name: 'Earthood',
    type: 'Carbon Verification Partner',
    description: 'Leading carbon offset audits and ESG assurance partner, providing digital validation and verification services for climate action projects.',
  },
  {
    name: 'Carbon Compass',
    type: 'Carbon Accounting Partner',
    description: 'Strategic partner for simplified carbon footprint tracking, goal setting, and emissions reduction strategies for organizations.',
  },
  {
    name: 'Gold Standard',
    type: 'Certification Partner',
    description: 'Premium sustainability certification partner, ensuring high-integrity climate action and sustainable development impact verification.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-white via-primary-light to-accent-green/10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Geometric Patterns */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-32 left-20 w-40 h-40 bg-accent-green/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-1/2 right-32 w-24 h-24 bg-accent-green/15 rounded-lg rotate-45 animate-bounce"></div>
            <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-accent-green/12 rounded-full animate-ping"></div>
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-15" 
               style={{
                 backgroundImage: `radial-gradient(circle at 25px 25px, rgba(34, 197, 94, 0.1) 2px, transparent 0)`,
                 backgroundSize: '50px 50px'
               }}>
          </div>
          
          {/* Floating Orbs */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-green/15 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Enhanced Headlines */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="inline-flex items-center gap-3 bg-accent-green/10 px-6 py-3 rounded-full border border-accent-green/20 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Users className="w-5 h-5 text-accent-green" />
                <span className="text-accent-green font-semibold text-sm">Est. 2006 • 19+ Years of Excellence</span>
              </motion.div>

                             <motion.h1
                 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-tight mb-8"
                 initial={{ opacity: 0, y: 40 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1, delay: 0.3 }}
               >
                 <span className="bg-gradient-to-r from-primary-dark via-neutral-charcoal to-primary-dark bg-clip-text text-transparent">
                   About{' '}
                 </span>
                 <span className="bg-gradient-to-r from-accent-green via-accent-dark to-accent-forest bg-clip-text text-transparent">
                   CCMG
                 </span>
               </motion.h1>
              
              {/* Animated Underline */}
              <motion.div
                className="h-1.5 bg-gradient-to-r from-transparent via-accent-green to-transparent mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: "300px" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-neutral-charcoal leading-relaxed mb-12 max-w-5xl mx-auto font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              CCMG is your trusted advisory and transaction partner for unlocking high-value infrastructure opportunities. We help international partners navigate complex policy, public affairs, government relations, and stakeholder landscapes, creating the right conditions to win and deliver projects seamlessly. Our expertise spans EPC delivery as well as specialized consulting in PPPs, sustainability, and digital transformation ensuring resilient, future-ready solutions for Sri Lanka and beyond.
            </motion.p>

                         {/* Enhanced CTAs */}
             <motion.div
               className="flex justify-center items-center mb-16"
               initial={{ opacity: 0, y: 40 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.7 }}
             >
               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                 <Link 
                   href="/contact" 
                   className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent-green to-accent-dark text-neutral-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                 >
                   <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent-forest opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <span className="relative z-10">Work With Us</span>
                   <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                 </Link>
               </motion.div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-primary-light py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-accent-green" />
                <h2 className="text-2xl font-semibold text-primary-dark">Our Mission</h2>
              </div>
              <p className="text-neutral-dark-gray leading-relaxed mb-6">
                Our mission is to bridge global expertise with local trust, enabling projects that are economically viable, socially responsible, and environmentally sustainable delivering lasting value and a better tomorrow for the well-being of Sri Lanka’s people
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-charcoal">Strategic Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-charcoal">Sustainable Impact</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="text-neutral-charcoal">Innovation & Growth</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-accent-green" />
                <h2 className="text-2xl font-semibold text-primary-dark">Our Vision</h2>
              </div>
              <p className="text-neutral-dark-gray leading-relaxed mb-6">
                To shape a future where Sri Lanka thrives as a hub for sustainable, high-impact development.
              </p>
              <p className="text-neutral-dark-gray leading-relaxed mb-6">
                By bridging international expertise with local knowledge, we enable infrastructure and innovation that benefits today&apos;s citizens and empowers the next generation.
              </p>
              <div className="bg-accent-green/10 p-6 rounded-lg">
                <h3 className="font-semibold text-primary-dark mb-2">Our Core Values</h3>
                <ul className="text-sm text-neutral-charcoal space-y-1">
                  <li>• Integrity and Transparency</li>
                  <li>• Collaborative Partnership</li>
                  <li>• PPP Excellence</li>
                  <li>• Continuous Innovation</li>
                  <li>• Measurable Impact</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-gradient-to-br from-primary-light via-neutral-white to-primary-light py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent-green/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent-green/5 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="text-accent-green text-sm font-semibold uppercase tracking-wide mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Journey
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-primary-dark mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Key{' '}
              <span className="bg-gradient-to-r from-accent-green to-accent-dark bg-clip-text text-transparent">
                Milestones
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-neutral-dark-gray max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our journey from incorporation to sustainability leadership, building expertise across multiple sectors and establishing trusted partnerships.
            </motion.p>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-accent-green to-accent-dark mx-auto mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Horizontal Timeline Strip - New Design */}
          <div className="max-w-7xl mx-auto">
            {/* Timeline Line */}
            <div className="relative mb-12">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-accent-green via-accent-dark to-accent-green/50 transform -translate-y-1/2"></div>
            </div>
            
            {/* Milestone Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      className="w-8 h-8 bg-gradient-to-br from-accent-green to-accent-dark rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg border-4 border-neutral-white"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {milestone.icon}
                    </motion.div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="mt-4 relative">
                    <motion.div
                      className="bg-neutral-white/90 backdrop-blur-sm rounded-xl p-4 border border-neutral-medium-gray/30 hover:border-accent-green/40 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      whileHover={{ y: -8, scale: 1.02 }}
                      layout
                    >
                      {/* Year Badge */}
                      <div className="text-center mb-3">
                        <span className="inline-block bg-accent-green text-neutral-white px-2 py-1 rounded-full text-xs font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-sm font-bold text-primary-dark mb-2 text-center leading-tight group-hover:text-accent-dark transition-colors duration-300">
                        {milestone.title}
                      </h3>
                      
                      {/* Impact Badge */}
                      <div className="text-center mb-3">
                        <span className="inline-block bg-accent-green/10 text-accent-green px-2 py-1 rounded-full text-xs font-semibold border border-accent-green/20">
                          {milestone.impact}
                        </span>
                      </div>
                      
                      {/* Short Description */}
                      <p className="text-xs text-neutral-charcoal leading-relaxed text-center">
                        {milestone.description}
                      </p>
                      
                      {/* Expand Indicator */}
                      <div className="text-center mt-3">
                        <motion.div
                          className="w-6 h-6 bg-accent-green/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent-green/30 transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <span className="text-accent-green text-xs">+</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Achievement Stats */}
            <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-6 bg-accent-green/10 px-8 py-4 rounded-full border border-accent-green/20">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                  <span className="font-semibold text-primary-dark">19+ Years of Excellence</span>
                </div>
                <div className="w-1 h-6 bg-accent-green/30"></div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent-green" />
                  <span className="font-semibold text-primary-dark">Multi-Sector Expertise</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Partnerships */}
      <section className="bg-neutral-white py-16">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-green text-sm font-medium uppercase tracking-wide mb-2">International Partnerships</p>
            <h2 className="section-title">Global Strategic Alliances</h2>
            <p className="section-subtitle">
              Our strategic international partnerships with industry leaders enable us to deliver world-class solutions and expand our global impact across sustainability, carbon management, and infrastructure development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="card group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                               <div className="flex items-start gap-4">
                 <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-primary-dark">{partner.name}</h3>
                      <span className="text-xs bg-accent-green/10 text-accent-green px-2 py-1 rounded-full">
                        {partner.type}
                      </span>
                    </div>
                    <p className="text-neutral-dark-gray text-sm leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-accent-green via-accent-dark to-accent-forest text-neutral-white py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-20 w-64 h-64 bg-neutral-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-16 w-48 h-48 bg-neutral-white/8 rounded-full blur-2xl"></div>
          {/* Pattern Overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v40H40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Enhanced Header */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-6xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Ready to Partner With{' '}
                <span className="block bg-gradient-to-r from-neutral-white to-neutral-white/70 bg-clip-text text-transparent">
                  Sri Lanka&apos;s Leading Consultancy?
                </span>
              </motion.h2>
              
              <motion.div
                className="w-32 h-1.5 bg-gradient-to-r from-neutral-white/50 via-neutral-white to-neutral-white/50 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "128px" }}
                transition={{ duration: 1.2, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <motion.p 
              className="text-xl md:text-2xl leading-relaxed mb-12 max-w-4xl mx-auto opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Join the growing list of organizations that trust CCMG for{' '}
              <span className="font-semibold text-neutral-white">PPP expertise</span>,{' '}
              <span className="font-semibold text-neutral-white">sustainability solutions</span>, and{' '}
              <span className="font-semibold text-neutral-white">digital transformation</span>.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-neutral-white text-accent-green px-10 py-5 rounded-full font-bold text-xl hover:bg-neutral-light-gray transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/services"
                  className="group inline-flex items-center gap-3 border-2 border-neutral-white/40 text-neutral-white px-10 py-5 rounded-full font-bold text-xl hover:bg-neutral-white/10 hover:border-neutral-white transition-all duration-300 backdrop-blur-sm"
                >
                  <span>Explore Our Services</span>
                  <Target className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                </Link>
              </motion.div>
            </motion.div>


          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-24 right-24 w-6 h-6 bg-neutral-white/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-20 w-4 h-4 bg-neutral-white/15 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </section>
    </div>
  )
} 