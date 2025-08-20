'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Building, Target, Briefcase, TrendingUp, Leaf, Users, FileText, Globe, CheckCircle, Phone, Shield, Users2, Cpu, Zap } from 'lucide-react'

const services = [
  {
    id: 'strategic-partnerships',
    title: 'Strategic Local Partnerships & Representation',
    subtitle: 'Your in-country operator for market entry, compliance, and stakeholder access.',
    description: 'Your in-country operator for market entry, compliance, and stakeholder access.',
    features: [
      'Market entry & go-to-market strategy',
      'Government & donor liaison; regulatory navigation',
      'Stakeholder mapping and relationship management',
      'Supplier/distributor vetting and onboarding',
      'Local Expert Resourcing & On Ground Coordination (Bidding & Execution)'
    ],
    outputs: [
      'Country playbook + risk register',
      'Meeting pipeline & contact map',
      '90-day action plan to first deal'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ppp-structure',
    title: 'PPP Structure, Policy & Stakeholder Engagement',
    subtitle: 'Bankable projects through policy clarity and real stakeholder buy-in.',
    description: 'Bankable projects through policy clarity and real stakeholder buy-in.',
    features: [
      'Pre-feasibility/options analysis; fiscal & risk screens',
      'GRM design, consultations, and comms',
      'Policy drafting and institutional strengthening'
    ],
    outputs: [
      'Concept/PFS pack',
      'Risk matrix & allocation schedules',
      'Stakeholder engagement plan & GRM toolkit'
    ],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  
  {
    id: 'sustainability-esg',
    title: 'Sustainability & ESG',
    subtitle: 'We are establishing a Gold Standard–aligned ESG solutions practice for Sri Lanka. Delivery is executed through certified international partners, with CCMG leading as client representative, quality assurer, and local knowledge integrator.',
    description: 'We are establishing a Gold Standard–aligned ESG solutions practice for Sri Lanka. Delivery is executed through certified international partners, with CCMG leading as client representative, quality assurer, and local knowledge integrator. Our approach ensures global best practices are adapted to local realities, while transferring full capability to client teams.',
    features: [
      'Carbon project origination & registration (GS-aligned) via our partner network, with CCMG as client lead and QA',
      'Corporate GHG tracking & reporting — deployment of platforms for Scope 1–2, with optional Scope 3 integration',
      'Feasibility assessments & policy alignment — including policy mapping, materiality analysis, and capacity building'
    ],
    outputs: [
      'Eligibility & pre-feasibility assessment with a clear project pathway',
      'GHG dashboard, data model, and reporting framework for actionable insights',
      'Capability development plan & next-steps roadmap to ensure long-term sustainability'
    ],

    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]



export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-neutral-white via-primary-light to-accent-green/8">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Service Icons Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-24 left-16 w-20 h-20 bg-accent-green/10 rounded-2xl rotate-12 flex items-center justify-center">
              <Building className="w-10 h-10 text-accent-green/40" />
            </div>
            <div className="absolute top-32 right-24 w-16 h-16 bg-accent-green/8 rounded-xl -rotate-12 flex items-center justify-center">
              <Target className="w-8 h-8 text-accent-green/40" />
            </div>
            <div className="absolute bottom-24 left-32 w-24 h-24 bg-accent-green/12 rounded-full flex items-center justify-center">
              <Briefcase className="w-12 h-12 text-accent-green/40" />
            </div>
            <div className="absolute bottom-32 right-20 w-18 h-18 bg-accent-green/10 rounded-2xl rotate-45 flex items-center justify-center">
              <TrendingUp className="w-9 h-9 text-accent-green/40" />
            </div>
          </div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: `radial-gradient(circle at 30px 30px, rgba(34, 197, 94, 0.08) 2px, transparent 0)`,
                 backgroundSize: '60px 60px'
               }}>
          </div>
          
          {/* Floating Gradient Orbs */}
          <motion.div 
            className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-green/15 to-transparent rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-l from-accent-green/10 to-transparent rounded-full blur-2xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
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


              <motion.h1
                className="text-5xl md:text-7xl xl:text-8xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-primary-dark via-neutral-charcoal to-primary-dark bg-clip-text text-transparent">
                  Our
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent-green via-accent-dark to-accent-forest bg-clip-text text-transparent">
                  Services
                </span>
              </motion.h1>
              
              {/* Animated Underline */}
              <motion.div
                className="h-1.5 bg-gradient-to-r from-transparent via-accent-green to-transparent mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: "250px" }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
              />
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-neutral-charcoal leading-relaxed mb-12 max-w-4xl mx-auto font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              We help international partners to win and deliver high-value projects in Sri Lanka through strategic local partnerships and representation. From navigating government relations and policy advocacy to managing stakeholders and ensuring smooth execution, we turn opportunities in PPP, ESG, sustainability, and digital transformation into measurable success.
            </motion.p>



            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent-green to-accent-dark text-neutral-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-dark to-accent-forest opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Get Started Today</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#services-detail"
                  className="group inline-flex items-center gap-3 bg-neutral-white/80 backdrop-blur-sm text-primary-dark px-8 py-4 rounded-full font-semibold text-lg border-2 border-neutral-medium-gray hover:border-accent-green hover:bg-neutral-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="group-hover:text-accent-green transition-colors duration-300">Explore Services</span>
                  <Target className="w-5 h-5 group-hover:text-accent-green group-hover:rotate-90 transition-all duration-300" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-accent-green rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-accent-green rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section id="services-detail" className="relative bg-gradient-to-br from-primary-light via-neutral-white to-primary-light py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-48 h-48 bg-accent-green/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent-green/5 rounded-full blur-2xl"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 50px 50px, rgba(34, 197, 94, 0.06) 1px, transparent 0)`,
                 backgroundSize: '100px 100px'
               }}>
          </div>
        </div>

        <div className="section-container relative z-10">
          {/* Section Header */}
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
              Complete Solutions Portfolio
            </motion.p>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-primary-dark mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Transformative{' '}
              <span className="bg-gradient-to-r from-accent-green to-accent-dark bg-clip-text text-transparent">
                Consulting Services
              </span>
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-accent-green to-accent-dark mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "96px" }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* McKinsey-Style Service Cards */}
          <div className="space-y-12 max-w-6xl mx-auto">
            {services.map((service, index) => {
              return (
                <motion.div
                  key={service.id}
                  className="group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative bg-white border-l-4 border-accent-green shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="p-8">
                      {/* Service Header - Clean and Professional */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-start gap-4">
                          <div>
                            <h3 className="text-2xl font-bold text-primary-dark mb-2">
                              {service.title}
                            </h3>
                            <p className="text-lg text-neutral-dark-gray leading-relaxed max-w-2xl">
                              {service.subtitle}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-accent-green/20">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>

                      {/* Two-Column Layout for Features and Outputs */}
                      <div className="grid grid-cols-1 gap-8">
                        {/* Core Capabilities */}
                        <div>
                          <h4 className="text-lg font-semibold text-primary-dark mb-4 flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                            Core Capabilities
                          </h4>
                          <div className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <div 
                                key={featureIndex} 
                                className="flex items-start gap-3 p-3 bg-neutral-white/50 rounded-lg border border-neutral-medium-gray/30 hover:border-accent-green/20 transition-all duration-300"
                              >
                                <CheckCircle className="w-4 h-4 text-accent-green flex-shrink-0 mt-1" />
                                <span className="text-sm text-neutral-charcoal leading-relaxed">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        
                      </div>





                      {/* Professional CTA */}
                      <div className="mt-8 flex items-center justify-between">
                        <div className="text-sm text-neutral-dark-gray">
                          Ready to explore this service?
                        </div>
                        <Link 
                          href="/contact" 
                          className="inline-flex items-center gap-2 text-accent-green font-semibold hover:text-accent-dark transition-colors duration-300 group/cta"
                        >
                          <span>Start a conversation</span>
                          <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>



      {/* Industries Served */}
      <section className="bg-primary-light py-16">
        <div className="section-container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-green text-sm font-medium uppercase tracking-wide mb-2">Industries</p>
            <h2 className="section-title">Sectors We Serve</h2>
            <p className="section-subtitle">
              Our expertise spans across diverse industries, enabling us to provide specialized 
              solutions tailored to sector-specific challenges and opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Government & Public Sector', icon: Building },
              { name: 'Water & Sanitation', icon: Target },
              { name: 'Transport & Urban Development', icon: Globe },
              { name: 'Energy & Utilities', icon: Zap },
              { name: 'Health & Education', icon: Users },
              { name: 'Manufacturing & Agribusiness', icon: TrendingUp },
              { name: 'Tourism & Hospitality', icon: Target },
              { name: 'Financial Services & Fintech', icon: Cpu },
            ].map((industry, index) => {
              const IndustryIcon = industry.icon
              return (
                <motion.div
                  key={industry.name}
                  className="card text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-green/20 group-hover:scale-110 transition-all duration-300">
                    <IndustryIcon className="w-6 h-6 text-accent-green" />
                  </div>
                  <h3 className="text-sm font-medium text-primary-dark leading-tight">{industry.name}</h3>
                </motion.div>
              )
            })}
          </div>
          
          {/* Compliance Note */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-neutral-dark-gray italic">
              Familiar with ADB/World Bank procurement processes and GRM standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent-green text-neutral-white py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to move from insight to impact?
              </h2>
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                Tell us your specific challenge. We’ll align the right expertise and a clear path to
                implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-neutral-white text-accent-green px-6 py-3 rounded-full font-medium hover:bg-neutral-light-gray transition-all duration-normal inline-flex items-center gap-2"
                >
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a 
                  href="tel:+94773047315"
                  className="border border-neutral-white/30 text-neutral-white px-6 py-3 rounded-full font-medium hover:bg-neutral-white/10 transition-all duration-normal inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Us Today
                </a>
              </div>
            </motion.div>

            <motion.div
              className="bg-neutral-white/10 p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-6">Why Choose CCMG?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neutral-white" />
                  <span>ESG & Sustainability expertise</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neutral-white" />
                  <span>International partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neutral-white" />
                  <span>PPP project success</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neutral-white" />
                  <span>Digital transformation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neutral-white" />
                  <span>Gold Standard sustainability expertise</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}