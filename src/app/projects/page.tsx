'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react'
import Image from 'next/image'

// Types
type Category =
  | "Water Supply & Sanitation"
  | "Post-Disaster & Reconstruction"
  | "Infrastructure"
  | "Corporate & SME Development";

type Project = {
  id: string;
  title: string;
  category: Category;
  client?: string;
  funder?: string;
  contractor?: string;
  year?: string;
  cardText: string;
  description: string;
  links?: { label: string; href: string }[];
  images: { src: string; alt: string }[];
};

// Project data
const PROJECTS: Project[] = [
  {
    id: "mahaweli-wsip",
    title: "Mahaweli Water Security Investment Program (MWSIP)",
    category: "Water Supply & Sanitation",
    client: "Government of Sri Lanka",
    funder: "Asian Development Bank",
    contractor: "China State",
    cardText: "Strengthening Sri Lanka's water security through irrigation and system upgrades.",
    description:
      "The Mahaweli Water Security Investment Program (MWSIP), supported by the Asian Development Bank, focuses on enhancing water availability, irrigation efficiency, and climate resilience within Sri Lanka's Mahaweli River Basin. CCMG contributed advisory expertise in regulatory alignment, institutional strengthening, and safeguard compliance for subprojects under the program. The work included reviewing designs, facilitating environmental and social safeguard integration, and ensuring stakeholder engagement across affected districts. By improving water delivery infrastructure and governance, the program enhances agricultural productivity, secures livelihoods, and supports long-term water resource sustainability in one of Sri Lanka's most vital basins.",
    links: [
      { label: "ADB project page", href: "https://www.adb.org/projects/47381-001/main" }
    ],
    images: [
      { src: "/images/projects/mahaweli/Mahaweli water security investment program.png", alt: "Mahaweli Water Security Investment Program" }
    ]
  },
  {
    id: "us-embassy-colombo",
    title: "U.S. Embassy: New Diplomatic Facility (Colombo)",
    category: "Infrastructure",
    client: "U.S. Department of State (OBO)",
    cardText: "High-security, international-standard diplomatic infrastructure delivery.",
    description:
      "CCMG was subcontracted by Caddell Construction Co., LLC to support the demolition and redevelopment of the former U.S. Embassy site in Colombo. Our scope focused on approvals, local compliance management, and stakeholder coordination, de-risking the works through permits, environmental and social due diligence, and community interface. By ensuring regulatory alignment and smooth collaboration with local authorities, CCMG enabled seamless progress on a project that demanded world-class safety. The redevelopment stands as a symbol of U.S.–Sri Lanka partnership and showcases CCMG’s strength in bridging global requirements with local execution.",
    images: [
      { src: "/images/projects/us-embassy-colombo/us embassy construction project.jpg", alt: "U.S. Embassy construction project" },
      { src: "/images/projects/us-embassy-colombo/WhatsApp Image 2025-08-08 at 11.25.03_642d658d.jpg", alt: "Embassy project site view" },
      { src: "/images/projects/us-embassy-colombo/WhatsApp Image 2025-08-08 at 11.37.12_7fa76bbf.jpg", alt: "Embassy project progress" }
    ]
  },
  {
    id: "mallavi-uwss",
    title: "Mallavi Urban Water Supply Scheme",
    category: "Water Supply & Sanitation",
    client: "National Water Supply & Drainage Board (NWSDB)",
    funder: "ADB / World Bank program linkage",
    cardText: "Delivering safe, sustainable water for underserved communities in Mallavi.",
    description:
      "CCMG contributed to the Mallavi Urban Water Supply Scheme under the broader Water Supply and Sanitation Improvement Program. Our role focused on design review assistance, implementation coordination, and environmental and social safeguards compliance. The scheme expands potable water access to households and public facilities, reduces waterborne health risks, and improves resilience in an area with historic service gaps. Working with government agencies and donor partners, we supported quality control and field monitoring to keep delivery on schedule and within specification. The project demonstrates how local liaison and disciplined oversight translate large programs into real outcomes for families and businesses while meeting donor safeguard standards and national regulations.",
    links: [
      { label: "Project reference", href: "https://www.developmentaid.org/organizations/awards/view/510599/lk-water-supply-and-sanitation-improvement-project-construction-of-mallavi-urban-water-supply-scheme" }
    ],
    images: [
      { src: "/images/projects/mallavi-uwss/mallavil urban water supply scheme.jpg", alt: "Mallavi Urban Water Supply Scheme" },
      { src: "/images/projects/mallavi-uwss/WhatsApp Image 2025-08-15 at 06.45.23_80ada01f.jpg", alt: "Mallavi project site view" },
      { src: "/images/projects/mallavi-uwss/WhatsApp Image 2025-08-15 at 06.45.44_0cca0e7d.jpg", alt: "Mallavi project progress" }
    ]
  },

  {
    id: "taarp-tsunami",
    title: "Tsunami Affected Areas Rebuilding (TAARP)",
    category: "Post-Disaster & Reconstruction",
    client: "Executing Agency & ADB",
    funder: "Asian Development Bank (Loan 2167 / Grant 0006-SRI)",
    cardText: "Rebuilding lives and infrastructure after the 2004 tsunami.",
    description:
      "Following the 2004 Indian Ocean tsunami, CCMG provided the Team Leader and multidisciplinary experts to conduct an implementation review of ADB's TAARP program. Our scope covered technical and procurement audits, financial management, governance and M&E review, and social and environmental impact assessment. The phased reporting approach enabled real-time corrections during delivery, accelerating the return of housing, public services, and community infrastructure. TAARP showcased CCMG's ability to coordinate across agencies, contractors, and donors under intense timelines while maintaining rigor on safeguards and value-for-money—ultimately strengthening resilience for affected communities.",
    images: [
      { src: "/images/projects/taarp-tsunami/download.png", alt: "Tsunami reconstruction project" }
    ]
  },
  {
    id: "water-regulatory-ta4049",
    title: "Regulatory Framework for Water & Sanitation (TA 4049-SRI)",
    category: "Water Supply & Sanitation",
    client: "Government of Sri Lanka / NWSDB",
    funder: "Asian Development Bank",
    cardText: "Strengthening governance and economic regulation for water services.",
    description:
      "In association with IDP Philippines, CCMG supported the drafting of amendments to the National Water Supply & Drainage Board Act to enable the Public Utilities Commission to function as an economic and technical regulator. Our work included legislative analysis, drafting support, consultation workshops, and awareness programs to prepare institutions and stakeholders for the transition. The result is a clearer framework for performance, tariffs, and oversight, helping improve service quality and sector accountability while aligning with international best practice and donor expectations.",
    images: [
      { src: "/images/projects/water-regulatory-ta4049/download.png", alt: "Water regulatory framework" }
    ]
  },
  {
    id: "corp-sme-advisory",
    title: "Corporate Restructuring: Apparel & Tea",
    category: "Corporate & SME Development",
    client: "Private sector (Sri Lanka)",
    cardText: "Improving competitiveness through mergers and operational restructuring.",
    description:
      "CCMG advised on two significant private-sector engagements: (1) the amalgamation of a medium-scale apparel manufacturer with a larger operator to realize economies of scale, streamline governance, and unlock exports growth; and (2) the operational and financial restructuring of a southern tea plantation and factory to improve yields, cost efficiency, and market positioning. Our approach combined strategic planning, financial modeling, and change management to deliver practical improvements in productivity and profitability—demonstrating CCMG's breadth across both development and corporate mandates.",
    images: [
      { src: "/images/projects/corp-sme-advisory/download.png", alt: "Corporate restructuring advisory" }
    ]
  },

];

// Category Filter Component
const CategoryFilter = ({ 
  categories, 
  active, 
  onChange 
}: { 
  categories: (Category | "All")[], 
  active: Category | "All", 
  onChange: (category: Category | "All") => void 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            active === category
              ? 'bg-accent-green text-white shadow-md'
              : 'bg-accent-green/10 text-accent-green hover:bg-accent-green/15'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ 
  project, 
  onOpen 
}: { 
  project: Project, 
  onOpen: (project: Project) => void 
}) => {
  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4, scale: 1.01 }}
      viewport={{ once: true }}
    >
      <div 
        className="bg-white rounded-2xl shadow-sm border border-[#E6ECFF] overflow-hidden hover:shadow-lg transition-all duration-300"
        onClick={() => onOpen(project)}
      >
        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.images[0]?.src || "/images/projects/mallavil urban water supply scheme.jpg"}
            alt={project.images[0]?.alt || project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.src = "/images/projects/mallavil urban water supply scheme.jpg";
            }}
          />
        </div>
        
        {/* Content */}
        <div className="p-4 md:p-6">
          {/* Title */}
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
            {project.title}
          </h3>
          
          {/* Card Text */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {project.cardText}
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-start">
            <div className="w-10 h-10 rounded-full border-2 border-accent-green flex items-center justify-center group-hover:bg-accent-green transition-colors duration-200">
              <ChevronRight className="w-5 h-5 text-accent-green group-hover:text-white transition-colors duration-200" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Image Slider Component
const ImageSlider = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prev, next]);

  if (images.length === 0) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          className="object-cover"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = "/images/projects/mallavil urban water supply scheme.jpg";
          }}
        />
      </div>
      
      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
        </>
      )}
      
      {/* Dots */}
      {images.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-accent-green w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Project Modal Component
const ProjectModal = ({ 
  project, 
  onClose 
}: { 
  project: Project | null, 
  onClose: () => void 
}) => {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal */}
      <motion.div
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h2>
              <div className="mb-3">
                <span className="text-sm font-medium text-accent-green">
                  {project.category}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Body */}
        <div className="p-6">
          {/* Image Slider */}
          <div className="mb-6">
            <ImageSlider images={project.images} />
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Overview</h3>
            <p className="text-gray-600 leading-relaxed">{project.description}</p>
          </div>
          
          {/* Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {project.client && (
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Client</h4>
                <p className="text-gray-900">{project.client}</p>
              </div>
            )}
            {project.funder && (
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Funder</h4>
                <p className="text-gray-900">{project.funder}</p>
              </div>
            )}
            {project.contractor && (
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Contractor</h4>
                <p className="text-gray-900">{project.contractor}</p>
              </div>
            )}
            {project.year && (
              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-1">Year</h4>
                <p className="text-gray-900">{project.year}</p>
              </div>
            )}
          </div>
          
          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-500 mb-3">Related Links</h4>
              <div className="space-y-2">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-green hover:text-accent-forest font-medium transition-colors duration-200"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

// Category Row Component with Carousel
const CategoryRow = ({ 
  category, 
  projects, 
  onOpenModal 
}: { 
  category: string, 
  projects: Project[], 
  onOpenModal: (project: Project) => void 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, projects.length - 2);

  const next = useCallback(() => {
    setCurrentIndex((prev) => Math.min(prev + 2, maxIndex));
  }, [maxIndex]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(prev - 2, 0));
  }, []);

  const visibleProjects = projects.slice(currentIndex, currentIndex + 2);

  return (
    <motion.div
      className="category-section bg-white/50 rounded-2xl p-8 border border-accent-green/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Category Header */}
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <h3 className="text-3xl font-bold text-gray-900">{category}</h3>
          <div className="w-16 h-1 bg-accent-green rounded-full"></div>
        </div>
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 group shadow-lg hover:shadow-xl ${
              currentIndex === 0
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-accent-green text-accent-green hover:bg-accent-green hover:text-white'
            }`}
            aria-label={`Scroll left in ${category}`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          {/* Right Arrow */}
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 group shadow-lg hover:shadow-xl ${
              currentIndex >= maxIndex
                ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                : 'border-accent-green text-accent-green hover:bg-accent-green hover:text-white'
            }`}
            aria-label={`Scroll right in ${category}`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Projects Row - Show 2 projects per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={onOpenModal}
          />
        ))}
      </div>

      {/* Show more projects indicator if there are more than 2 */}
      {projects.length > 2 && (
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-green/10 rounded-full">
            <span className="text-accent-green text-sm font-medium">
              Showing {currentIndex + 1}-{Math.min(currentIndex + 2, projects.length)} of {projects.length} projects in {category}
            </span>
            <ChevronRight className="w-4 h-4 text-accent-green" />
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Main Projects Page
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category | "All">("All");
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS);

  const categories: (Category | "All")[] = [
    "All",
    "Water Supply & Sanitation",
    "Post-Disaster & Reconstruction",
    "Infrastructure",
    "Corporate & SME Development"
  ];

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const handleOpenModal = (project: Project) => {
    setModalProject(project);
  };

  const handleCloseModal = () => {
    setModalProject(null);
  };

  return (
    <div>
      {/* Hero Section - Keep the same */}
      <section className="relative h-screen flex items-center overflow-hidden -mt-20">
        {/* Background Video with Enhanced Overlay */}
        <div className="absolute inset-0 top-0 left-0 w-full h-full -z-10 pointer-events-none">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover blur-[2px]" 
            autoPlay 
            muted 
            loop 
            playsInline 
            aria-hidden="true"
            poster="/images/projects/hero-poster.jpg"
            preload="none"
            style={{
              objectPosition: 'center center',
              minHeight: '100%',
              minWidth: '100%'
            }}
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          
          {/* Single gradient overlay */}
          <div className="absolute inset-0 top-0 left-0 w-full h-full" style={{
            background: 'linear-gradient(180deg, rgba(10,23,34,.58) 0%, rgba(10,23,34,.72) 100%)'
          }}></div>
        </div>

        <div className="section-container relative z-10 flex items-center h-full w-full pt-20">
          <div className="max-w-[760px] mx-auto text-center w-full">
            {/* Enhanced Headlines */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1
                className="text-[56px] md:text-[64px] font-bold leading-tight mb-6 text-[#F3F6F8]"
                style={{ textShadow: '0 1px 1px rgba(0,0,0,.25)' }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Projects
              </motion.h1>
              
              {/* Green underline */}
              <motion.div
                className="h-1 bg-[#0E5E4A] mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.div>

            {/* Compact subhead chip */}
            <motion.div
              className="bg-black/12 backdrop-blur-[6px] rounded-xl max-w-[760px] mx-auto mb-12 p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-[16px] leading-[28px] text-[#F3F6F8] font-medium">
                From policy to people, we ensure every project contributes to a stronger economy and better tomorrow.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20" style={{
        background: 'linear-gradient(180deg, #EEF2FF 0%, #F8FAFF 100%)'
      }}>
        <div className="section-container">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Use filters to explore our recent work
            </p>
          </motion.div>

          {/* Category Filters */}
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />

          {/* Projects by Category Rows */}
          <div className="space-y-20">
            {(() => {
              // Group projects by category
              const projectsByCategory = PROJECTS.reduce((acc, project) => {
                if (activeCategory === "All" || project.category === activeCategory) {
                  if (!acc[project.category]) {
                    acc[project.category] = [];
                  }
                  acc[project.category].push(project);
                }
                return acc;
              }, {} as Record<Category, Project[]>);

              return Object.entries(projectsByCategory).map(([category, projects]) => (
                <CategoryRow
                  key={category}
                  category={category}
                  projects={projects}
                  onOpenModal={handleOpenModal}
                />
              ));
            })()}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-gray-500 text-lg">No projects found for this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {modalProject && (
          <ProjectModal
            project={modalProject}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}