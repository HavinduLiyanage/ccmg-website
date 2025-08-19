'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { trackEvent } from '@/components/Analytics'
import { 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Shield, 
  Globe, 
  FileText,
  Zap,
  Building,
  Shirt,
  Hotel,
  Landmark,
  Factory,
  ChevronDown,
  Star,
  Database,
  Sliders,
  Bot,
  Monitor
} from 'lucide-react'

// Accordion Component
const Accordion = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-4">{children}</div>
}

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="border border-neutral-medium-gray rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left bg-neutral-white hover:bg-neutral-light-gray transition-colors flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-primary-dark">{title}</span>
        <ChevronDown className={`w-5 h-5 text-neutral-dark-gray transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 py-4 bg-neutral-light-gray"
        >
          {children}
        </motion.div>
      )}
    </div>
  )
}

export default function SustainabilityPage() {

  return (
    <div className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-dark via-accent-green to-accent-forest">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 bg-neutral-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 8,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Gradient orbs */}
            <motion.div 
              className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-accent-green/30 to-transparent rounded-full blur-3xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ 
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1
                className="text-4xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-neutral-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Partnerships for a Sustainable Future.
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-neutral-white/90 leading-relaxed mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                Working with leaders to unlock resilience and climate-ready growth.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact"
                    onClick={() => trackEvent('cta_click', { location: 'hero', action: 'get_started' })}
                    className="group relative inline-flex items-center gap-3 bg-accent-gold text-primary-dark px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-accent-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="#services"
                    onClick={() => trackEvent('cta_click', { location: 'hero', action: 'explore_services' })}
                    className="group inline-flex items-center gap-3 bg-neutral-white/10 backdrop-blur-sm text-neutral-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-neutral-white/30 hover:border-neutral-white hover:bg-neutral-white/20 transition-all duration-300"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Product: GHG Emission Tracking System */}
        <section id="product" className="relative overflow-hidden py-24 bg-[linear-gradient(180deg,#0B1720_0%,#0B1C18_100%)]">
          {/* green glow accents */}
          <div className="absolute -top-10 -left-10 w-72 h-72 rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(0,168,107,0.25), transparent 60%)' }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl" style={{ background: 'radial-gradient(ellipse at center, rgba(0,112,74,0.22), transparent 60%)' }} />
          <div className="section-container relative z-10">
            {/* Header */}
            <motion.div
              className="text-center mb-14"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-semibold text-[rgba(223,255,240,0.8)] tracking-wide mb-3">Product</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">From Service to Solution: The GHG Tracking Platform</h2>
              <p className="text-[17px] text-white/80 max-w-3xl mx-auto">CCMG’s ready-to-deploy SaaS for measurable climate impact. Developed in-house, field‑tested with clients, and now available as a scalable, enterprise‑ready platform.</p>
            </motion.div>

            {/* Hero mock dashboard + CTA */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">Why this matters</h3>
                <ul className="space-y-3 text-white/80">
                  <li>• Global pressure is rising for accurate, auditable sustainability data.</li>
                  <li>• Most organisations still rely on fragmented spreadsheets and manual reporting.</li>
                  <li>• CCMG provides a single, integrated system that removes inefficiencies.</li>
                </ul>
                <h3 className="text-2xl font-semibold text-white mt-8 mb-4">What the product delivers</h3>
                <ul className="space-y-3 text-white/90">
                  <li>Centralised data management across locations</li>
                  <li>Custom dashboards & advanced reporting</li>
                  <li>Seamless integration with ERP & APIs</li>
                  <li>Scope 1, 2, and optional Scope 3 tracking</li>
                  <li>AI‑powered assistant to simplify GHG reporting</li>
                </ul>
              </motion.div>

              <motion.div
                className="order-1 lg:order-2"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                {/* Stylised dashboard preview */}
                <div className="relative rounded-2xl border border-[rgba(223,255,240,0.2)] bg-[rgba(10,30,26,0.6)] backdrop-blur-md p-6 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Monitor className="w-5 h-5 text-[rgba(223,255,240,0.9)]" />
                    <span className="text-sm text-[rgba(223,255,240,0.9)]">Live dashboard preview</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg p-4 bg-[linear-gradient(135deg,#00A86B_0%,#00704A_100%)] text-white shadow-lg">
                      <div className="text-xs opacity-90">Total emissions</div>
                      <div className="text-2xl font-bold">24,350 tCO₂e</div>
                      <div className="mt-3 h-2 rounded bg-white/20 overflow-hidden">
                        <div className="h-full bg-white/80 w-[62%]" />
                      </div>
                    </div>
                    <div className="rounded-lg p-4 bg-[rgba(223,255,240,0.06)] border border-white/10 text-white">
                      <div className="text-xs opacity-80">Reduction this quarter</div>
                      <div className="text-2xl font-bold text-[#8FF0C1]">−8.2%</div>
                      <div className="mt-3 grid grid-cols-5 gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div key={i} className={`h-8 rounded ${i < 3 ? 'bg-[rgba(223,255,240,0.2)]' : 'bg-[rgba(223,255,240,0.08)]'}`} />
                        ))}
                      </div>
                    </div>
                    <div className="rounded-lg p-4 bg-[rgba(223,255,240,0.06)] border border-white/10 text-white">
                      <div className="text-xs opacity-80">Sites connected</div>
                      <div className="text-2xl font-bold">42</div>
                      <div className="mt-3 flex gap-2">
                        <div className="h-2 flex-1 rounded bg-[rgba(223,255,240,0.2)]" />
                        <div className="h-2 flex-1 rounded bg-[rgba(223,255,240,0.2)]" />
                        <div className="h-2 flex-1 rounded bg-[rgba(223,255,240,0.2)]" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* CTA */}
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[linear-gradient(135deg,#00A86B_0%,#00704A_100%)] text-white font-semibold shadow-lg hover:opacity-95 transition">
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { title: 'Insight Hub', desc: 'KPIs, trends, targets at a glance', icon: BarChart3 },
                { title: 'Control Hub', desc: 'Governance, roles, approvals', icon: Sliders },
                { title: 'Reports', desc: 'Audit-ready disclosures & exports', icon: FileText },
                { title: 'Data Hub', desc: 'Connect ERP, meters, APIs', icon: Database },
                { title: 'AI Hub', desc: 'Ask questions, draft reports', icon: Bot },
              ].map((m, i) => (
                <motion.div
                  key={m.title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition-all hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3 mb-3 text-white">
                    <m.icon className="w-5 h-5 opacity-90" />
                    <div className="font-semibold">{m.title}</div>
                  </div>
                  <div className="text-sm text-white/80">{m.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Advantage */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-white mb-3">The advantage</h3>
              <p className="text-white/85">Unlike typical consultancy offerings, this is packaged software + advisory. Your team owns the tool while leveraging CCMG’s expertise. Future‑ready, scalable, and user‑friendly.</p>
            </div>
          </div>
        </section>

        {/* Partners Strip (links) */}
        <section className="bg-gradient-to-br from-neutral-white via-primary-light to-neutral-white py-12 border-b border-neutral-medium-gray/50">
          <div className="section-container">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center justify-items-center">
                <div className="text-primary-dark font-semibold">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-neutral-medium-gray/60 text-primary-dark">CCMG</span>
                </div>
                <a href="https://www.carboncompass.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-800 border border-green-200 hover:bg-green-100 transition-colors font-semibold">Carbon Compass</a>
                <a href="https://www.earthood.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 transition-colors font-semibold">Earthood</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partners under Gold Standard (redesigned) */}
        <section className="py-24 bg-gradient-to-br from-neutral-light-gray via-neutral-white to-primary-light relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent-gold/5 rounded-full blur-2xl"></div>
          </div>
          <div className="section-container relative z-10">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
                Partners under <span className="text-accent-gold">Gold Standard</span>
              </h2>
              <p className="text-lg text-neutral-dark-gray max-w-3xl mx-auto">Together, we ensure every project is measurable, verifiable, and climate-resilient.</p>
            </motion.div>

            {/* Align → Track → Verify timeline */}
            <motion.div className="flex items-center justify-center gap-4 mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2"><Star className="w-5 h-5 text-accent-gold" /><span className="text-sm font-medium text-primary-dark">Align</span></div>
              <ArrowRight className="w-5 h-5 text-neutral-dark-gray" />
              <div className="flex items-center gap-2"><BarChart3 className="w-5 h-5 text-green-700" /><span className="text-sm font-medium text-primary-dark">Track</span></div>
              <ArrowRight className="w-5 h-5 text-neutral-dark-gray" />
              <div className="flex items-center gap-2"><Shield className="w-5 h-5 text-blue-700" /><span className="text-sm font-medium text-primary-dark">Verify</span></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Gold Standard Alignment */}
              <motion.div
                className="group bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6"><h3 className="text-xl font-bold text-primary-dark">Gold Standard Alignment</h3><div className="text-sm text-accent-gold font-medium">Frameworks · Claims · SDG</div></div>
                
                <p className="text-neutral-charcoal mb-6">Ensure your climate claims meet the highest global benchmarks with robust frameworks for net‑zero, Scope‑3, and SDG pathways.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" /><span className="text-sm text-neutral-charcoal">Frameworks & credible claims</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" /><span className="text-sm text-neutral-charcoal">Scope‑3 programs & mitigation</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-accent-gold mt-0.5 flex-shrink-0" /><span className="text-sm text-neutral-charcoal">SDG impact tools</span></li>
                </ul>
                <Link href="/contact?type=gold-standard" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-yellow-200/50 text-primary-dark font-medium hover:bg-yellow-200 transition-colors duration-200">Explore Gold Standard Guidance<ArrowRight className="w-4 h-4" /></Link>
              </motion.div>

              {/* Carbon Compass */}
              <motion.div
                className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6"><h3 className="text-xl font-bold text-primary-dark">Carbon Compass</h3><div className="text-sm text-green-700 font-medium">Data → Insights → Reduction</div></div>
                
                <p className="text-neutral-charcoal mb-6">Turn data into action. Track, report, and reduce emissions with smart visualisations and goal‑setting dashboards.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" /><span className="text-sm text-neutral-charcoal">Track & report with insights</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" /><span className="text-sm text-neutral-charcoal">Calculate emissions across scopes</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" /><span className="text-sm text-neutral-charcoal">Visualise progress</span></li>
                </ul>
                <Link href="/contact?type=demo" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-green-600 text-white font-medium hover:bg-green-700 transition-colors duration-200">Request Demo<ArrowRight className="w-4 h-4" /></Link>
              </motion.div>

              {/* Earthood */}
              <motion.div
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-200"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="mb-6"><h3 className="text-xl font-bold text-primary-dark">Earthood</h3><div className="text-sm text-blue-700 font-medium">Independent VVB & audits</div></div>
                
                <p className="text-neutral-charcoal mb-6">Independent validation & verification trusted worldwide. Ensure your projects earn recognition with GS/VCS standards.</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" /><span className="text-sm text-neutral-charcoal">Project validation & verification</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" /><span className="text-sm text-neutral-charcoal">GHG audits & assessments</span></li>
                  <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-blue-700 mt-0.5 flex-shrink-0" /><span className="text-sm text-neutral-charcoal">Carbon credit MRV discipline</span></li>
                </ul>
                <Link href="/contact?type=assurance" className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200">Book Consultation<ArrowRight className="w-4 h-4" /></Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services We Deliver (restored) */}
        <section className="py-24 bg-gradient-to-br from-neutral-white via-primary-light to-neutral-light-gray relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-32 right-32 w-40 h-40 bg-accent-green/8 rounded-full blur-2xl"></div>
            <div className="absolute bottom-32 left-32 w-32 h-32 bg-accent-gold/6 rounded-full blur-xl"></div>
          </div>
          <div className="section-container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-4">Sustainability Services, Delivered with Global Expertise</h2>
              <p className="text-lg text-neutral-dark-gray max-w-3xl mx-auto">Through our specialized partner network, we provide end-to-end sustainability solutions — from carbon accounting to claims verification — helping organizations meet global standards with confidence.</p>
            </motion.div>

            {/* Group labels */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-4">
              <div className="text-sm font-semibold text-accent-green/80">Carbon Management</div>
              <div className="text-sm font-semibold text-blue-700/80">Assurance</div>
              <div className="text-sm font-semibold text-accent-gold/80">Strategy & Communications</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {/* Carbon Management */}
              <motion.div
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200 h-full group hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-7 h-7 text-green-700 group-hover:text-green-800" />
                  <h3 className="text-xl font-bold text-primary-dark">Measure & Track Your Carbon Impact</h3>
                </div>
                <p className="text-neutral-charcoal mb-4">Get executive-ready dashboards and audit‑proof reports.</p>
                <ul className="space-y-2 text-sm text-neutral-charcoal">
                  <li>• Org & product footprints</li>
                  <li>• Scope 1–2–3 tracking</li>
                  <li>• Targets and progress monitoring</li>
                  <li>• Exportable reports</li>
                </ul>
              </motion.div>

              {/* Assurance */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 h-full group hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-7 h-7 text-blue-700 group-hover:text-blue-800" />
                  <h3 className="text-xl font-bold text-primary-dark">Independent Project Validation & Compliance</h3>
                </div>
                <p className="text-neutral-charcoal mb-4">De‑risk delivery with GS/VCS‑aligned checks.</p>
                <ul className="space-y-2 text-sm text-neutral-charcoal">
                  <li>• Project validation & periodic verification</li>
                  <li>• Registry & audit readiness</li>
                  <li>• Clear audit packs</li>
                </ul>
              </motion.div>

              {/* Assurance */}
              <motion.div
                className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8 border border-purple-200 h-full group hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-7 h-7 text-purple-600 group-hover:text-purple-700" />
                  <h3 className="text-xl font-bold text-primary-dark">Third‑Party GHG Verification & Assurance</h3>
                </div>
                <p className="text-neutral-charcoal mb-4">Strengthen disclosures with independent assurance.</p>
                <ul className="space-y-2 text-sm text-neutral-charcoal">
                  <li>• Corporate inventory verification</li>
                  <li>• Assurance statements</li>
                </ul>
              </motion.div>

              {/* Carbon Management */}
              <motion.div
                className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-200 h-full group hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-7 h-7 text-orange-600 group-hover:text-orange-700" />
                  <h3 className="text-xl font-bold text-primary-dark">Unlock Energy Savings & Efficiency Gains</h3>
                </div>
                <p className="text-neutral-charcoal mb-4">Cut energy costs with actionable audit roadmaps.</p>
                <ul className="space-y-2 text-sm text-neutral-charcoal">
                  <li>• Site audits & savings measures</li>
                  <li>• CAPEX/ROI analysis</li>
                  <li>• Linked carbon reductions</li>
                </ul>
              </motion.div>

              {/* Strategy & Communications */}
              <motion.div
                className="bg-gradient-to-br from-yellow-50 to-gold-50 rounded-2xl p-8 border border-yellow-200 h-full group hover:shadow-lg transition-all md:col-span-2 lg:col-span-1"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Star className="w-7 h-7 text-accent-gold group-hover:text-yellow-600" />
                  <h3 className="text-xl font-bold text-primary-dark">Credible Sustainability Claims & Compliance</h3>
                </div>
                <p className="text-neutral-charcoal mb-4">Communicate with confidence using GS‑aligned language.</p>
                <ul className="space-y-2 text-sm text-neutral-charcoal">
                  <li>• Credible-claims hygiene & BVCM guardrails</li>
                  <li>• SDG co‑benefits mapping</li>
                  <li>• Legal review handoff</li>
                </ul>
              </motion.div>
            </div>

            
          </div>
        </section>

        {/* How It Works (4 steps) */}
        <section id="how-it-works" className="py-24 bg-gradient-to-br from-primary-light via-neutral-light-gray to-neutral-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-40 left-40 w-56 h-56 bg-accent-green/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-40 right-40 w-40 h-40 bg-accent-gold/8 rounded-full blur-2xl"></div>
          </div>
          <div className="section-container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
                How it <span className="text-accent-green">works</span>
              </h2>
              <p className="text-lg text-neutral-dark-gray max-w-3xl mx-auto">Assessment → Engagement → Delivery → Assurance</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {[
                { step: '01', title: 'Assessment', description: 'What’s the ESG need?', details: 'Baseline, materiality and goals.' },
                { step: '02', title: 'Engagement', description: 'Allocate via Gold Standard partners', details: 'Data systems, supplier onboarding.' },
                { step: '03', title: 'Delivery', description: 'CCMG leads on-ground', details: 'Interventions, audits, financing.' },
                { step: '04', title: 'Assurance', description: 'Quality + knowledge transfer', details: 'Independent verification and handover.' },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="flex gap-8 mb-12 last:mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                    {index < 3 && (
                      <div className="w-0.5 h-16 bg-accent-green/30 mx-auto mt-4"></div>
                    )}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-primary-dark mb-2">{item.title}</h3>
                    <p className="text-accent-green font-medium mb-2">{item.description}</p>
                    <p className="text-neutral-charcoal">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {false && (
        <section className="py-24 bg-gradient-to-br from-neutral-white via-primary-light to-neutral-light-gray relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-24 right-24 w-48 h-48 bg-accent-green/7 rounded-full blur-2xl"></div>
            <div className="absolute bottom-24 left-24 w-36 h-36 bg-accent-gold/5 rounded-full blur-xl"></div>
          </div>
          <div className="section-container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
                Use cases by <span className="text-accent-green">sector</span>
              </h2>
              <p className="text-lg text-neutral-dark-gray max-w-3xl mx-auto">4–6 sectors where we bring immediate value</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Building,
                  title: "Construction & materials",
                  description: "Cement/concrete sustainability, large contractor programs",
                  kpis: "30% emissions cut, 6-month verification",
                  color: "orange"
                },
                {
                  icon: Shirt,
                  title: "Apparel & manufacturing", 
                  description: "Supplier onboarding, Tier-2 data collection",
                  kpis: "50+ suppliers onboarded, 3-month setup",
                  color: "blue"
                },
                {
                  icon: Hotel,
                  title: "Hotels & tourism",
                  description: "Energy/water/waste optimization, guest engagement",
                  kpis: "25% energy savings, guest impact tracking",
                  color: "green"
                },
                {
                  icon: Landmark,
                  title: "Banking & telco",
                  description: "Financed emissions tracking, data governance", 
                  kpis: "Portfolio emissions mapped, quarterly reports",
                  color: "purple"
                },
                {
                  icon: Factory,
                  title: "Public sector & PPP",
                  description: "Policy pilots, blended finance programs",
                  kpis: "Multi-year programs, policy integration",
                  color: "indigo"
                }
              ].map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  className={`rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 ${
                    useCase.color === 'orange' ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200' :
                    useCase.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200' :
                    useCase.color === 'green' ? 'bg-gradient-to-br from-green-50 to-green-100 border-green-200' :
                    useCase.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200' :
                    'bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <useCase.icon className={`w-12 h-12 mb-4 ${
                    useCase.color === 'orange' ? 'text-orange-600' :
                    useCase.color === 'blue' ? 'text-blue-600' :
                    useCase.color === 'green' ? 'text-green-600' :
                    useCase.color === 'purple' ? 'text-purple-600' :
                    'text-indigo-600'
                  }`} />
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{useCase.title}</h3>
                  <p className="text-neutral-charcoal mb-4">{useCase.description}</p>
                  <div className={`text-sm font-medium mb-4 ${
                    useCase.color === 'orange' ? 'text-orange-700' :
                    useCase.color === 'blue' ? 'text-blue-700' :
                    useCase.color === 'green' ? 'text-green-700' :
                    useCase.color === 'purple' ? 'text-purple-700' :
                    'text-indigo-700'
                  }`}>
                    {useCase.kpis}
                  </div>
                  <Link 
                    href={`/contact?sector=${useCase.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`inline-flex items-center gap-2 font-medium transition-colors ${
                      useCase.color === 'orange' ? 'text-orange-600 hover:text-orange-700' :
                      useCase.color === 'blue' ? 'text-blue-600 hover:text-blue-700' :
                      useCase.color === 'green' ? 'text-green-600 hover:text-green-700' :
                      useCase.color === 'purple' ? 'text-purple-600 hover:text-purple-700' :
                      'text-indigo-600 hover:text-indigo-700'
                    }`}
                  >
                    See example
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        )}

        {false && (
        <section className="py-24 bg-gradient-to-br from-neutral-light-gray via-primary-light to-neutral-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-36 left-36 w-52 h-52 bg-accent-green/6 rounded-full blur-3xl"></div>
            <div className="absolute bottom-36 right-36 w-44 h-44 bg-accent-gold/7 rounded-full blur-2xl"></div>
          </div>
          <div className="section-container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
                Choose your <span className="text-accent-green">package</span>
              </h2>
              <p className="text-lg text-neutral-dark-gray max-w-3xl mx-auto">Starter • Core • Assured • Enterprise</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Starter', description: 'Entry-level assessment & strategy', timeline: '8–12 weeks', features: ['GHG baseline', 'Roadmap', 'Initial targets'], cta: 'Get started' },
                { name: 'Core', description: 'Full project roadmap with delivery team', timeline: '3–6 months', features: ['Supplier enablement', 'Energy audits', 'Quarterly reporting'], cta: 'Choose Core', popular: true },
                { name: 'Assured', description: 'Gold Standard alignment + quality assurance', timeline: '6–12 months', features: ['Third-party verification', 'Credible claims', 'SDG impact'], cta: 'Get assured' },
                { name: 'Enterprise', description: 'End-to-end ESG transformation', timeline: 'Custom', features: ['Multi-site deployment', 'Integrations', 'Dedicated team'], cta: 'Contact us', enterprise: true }
              ].map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  className={`relative bg-neutral-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    pkg.popular ? 'ring-2 ring-accent-green' : ''
                  } ${pkg.enterprise ? 'bg-gradient-to-br from-accent-gold/10 to-yellow-50' : ''}`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent-green text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {pkg.enterprise && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-accent-gold text-primary-dark px-4 py-2 rounded-full text-sm font-medium">
                        Custom Enterprise
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-primary-dark mb-2">{pkg.name}</h3>
                  <p className="text-neutral-charcoal mb-4">{pkg.description}</p>
                  <div className="text-accent-green font-medium mb-6">{pkg.timeline}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-charcoal">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-full font-medium transition-colors ${
                      pkg.popular || pkg.enterprise
                        ? 'bg-accent-green text-white hover:bg-accent-dark'
                        : 'bg-neutral-light-gray text-primary-dark hover:bg-neutral-medium-gray'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        )}

        {false && (
        <section className="py-24 bg-gradient-to-br from-neutral-white via-primary-light to-neutral-light-gray relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-28 right-28 w-40 h-40 bg-accent-green/8 rounded-full blur-2xl"></div>
            <div className="absolute bottom-28 left-28 w-32 h-32 bg-accent-gold/6 rounded-full blur-xl"></div>
          </div>
          <div className="section-container relative z-10">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
                Frequently asked <span className="text-accent-green">questions</span>
              </h2>
              <p className="text-lg text-neutral-dark-gray max-w-3xl mx-auto">Just the essentials to get started</p>
            </motion.div>

            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion>
                <AccordionItem title="How do we start?">
                  <p className="text-neutral-charcoal">Book a 30‑minute scoping call. We confirm your goals, data readiness, and the right tier. First report usually in 8–12 weeks.</p>
                </AccordionItem>
                <AccordionItem title="What is the Gold Standard?">
                  <p className="text-neutral-charcoal">A globally recognised framework for high‑integrity climate action and impact claims. We align strategy and delivery to GS rules.</p>
                </AccordionItem>
                <AccordionItem title="Who does what—CCMG vs partners?">
                  <p className="text-neutral-charcoal">CCMG leads on‑ground delivery and governance. Carbon Compass provides data systems; Earthood provides independent verification.</p>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>
        )}

        {/* Final CTA Banner */}
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
                  Start your sustainability journey with CCMG and global‑level ESG success.
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
                Through our Gold Standard partner network, we combine data systems, delivery, and independent assurance.
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
                    onClick={() => trackEvent('cta_click', { location: 'journey_cta', action: 'schedule_conversation' })}
                    className="group inline-flex items-center gap-3 bg-accent-gold text-primary-dark px-10 py-5 rounded-full font-bold text-xl hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <span>Schedule a Conversation</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact?type=demo"
                    onClick={() => trackEvent('cta_click', { location: 'journey_cta', action: 'request_demo' })}
                    className="group inline-flex items-center gap-3 border-2 border-neutral-white/40 text-neutral-white px-10 py-5 rounded-full font-bold text-xl hover:bg-neutral-white/10 hover:border-neutral-white transition-all duration-300 backdrop-blur-sm"
                  >
                    <span>Request a Demo</span>
                    <BarChart3 className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Contact Info removed per request */}
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-24 right-24 w-6 h-6 bg-accent-gold/30 rounded-full"
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
            className="absolute bottom-32 left-20 w-4 h-4 bg-neutral-white/20 rounded-full"
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